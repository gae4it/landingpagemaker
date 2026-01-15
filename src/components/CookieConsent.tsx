"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CRONITOR_KEY = "59e569204b07f06b1b452baba4df26aa";
const CONSENT_KEY = "cookie-consent";

declare global {
  interface Window {
    cronitor?: (...args: unknown[]) => void;
    cronitorLoaded?: boolean;
  }
}

function loadCronitor() {
  if (typeof window === "undefined") return;
  if (window.cronitorLoaded) return;

  const src = "https://rum.cronitor.io/script.js";
  if (!document.querySelector(`script[src="${src}"]`)) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  window.cronitorLoaded = true;
  if (window.cronitor) {
    window.cronitor("config", { clientKey: CRONITOR_KEY });
  } else {
    // queue config until script loads
    const cronitorQueue: unknown[] = [];
    window.cronitor = function (...args: unknown[]) {
      cronitorQueue.push(args);
    };
    window.cronitor("config", { clientKey: CRONITOR_KEY });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const isMountedRef = useRef(false);
  const hasLoadedCronitorRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;

    const stored =
      typeof window !== "undefined" ? localStorage.getItem(CONSENT_KEY) : null;
    if (stored === "accepted") {
      if (!hasLoadedCronitorRef.current) {
        loadCronitor();
        hasLoadedCronitorRef.current = true;
      }
      return;
    }
    if (stored !== "declined") {
      // Defer state update to avoid cascading renders
      queueMicrotask(() => {
        setVisible(true);
      });
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    if (!hasLoadedCronitorRef.current) {
      loadCronitor();
      hasLoadedCronitorRef.current = true;
    }
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="border-border/80 bg-card/95 fixed inset-x-4 bottom-4 z-50 rounded-2xl border shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 sm:max-w-xl">
          <p className="text-foreground text-sm font-semibold">
            Cookie & Analytics Consent
          </p>
          <p className="text-muted-foreground text-sm">
            We use essential cookies and, with your consent, Cronitor RUM for
            anonymous analytics. You can decline: in that case, we will not load
            Cronitor. Read our{" "}
            <Link href="/cookies" className="text-primary underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            onClick={decline}
            className="border-border text-foreground hover:bg-muted rounded-lg border px-4 py-2 text-sm font-medium transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition hover:brightness-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
