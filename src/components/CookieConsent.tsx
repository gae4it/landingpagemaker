"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { env } from "@/env";

const CONSENT_KEY = "cookie-consent";
const CRONITOR_KEY = env.NEXT_PUBLIC_CRONITOR_KEY;

declare global {
  interface Window {
    cronitor?: (...args: unknown[]) => void;
    cronitorLoaded?: boolean;
  }
}

function loadCronitor() {
  if (typeof window === "undefined") return;
  if (!CRONITOR_KEY) {
    console.warn(
      "Cronitor: NEXT_PUBLIC_CRONITOR_KEY is not configured. Skipping Cronitor initialization.",
    );
    return;
  }
  if (window.cronitorLoaded) return;

  const src = "https://rum.cronitor.io/script.js";
  if (!document.querySelector(`script[src="${src}"]`)) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      console.log("Cronitor script loaded successfully.");
      // Configure Cronitor after script loads
      if (window.cronitor) {
        window.cronitor("config", { clientKey: CRONITOR_KEY });
      }
    };
    script.onerror = () => {
      console.error("Failed to load Cronitor script from", src);
    };
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
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-border/80 bg-card/95 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 sm:max-w-xl">
          <p className="text-sm font-semibold text-foreground">
            Cookie & Analytics Consent
          </p>
          <p className="text-sm text-muted-foreground">
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
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
