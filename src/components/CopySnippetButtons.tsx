"use client";

import { Atom, Code2 } from "lucide-react";
import {
  type ComponentType,
  type RefObject,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export type CopyTarget = "html" | "react" | "vue";

type SnippetValue = string | (() => string | null | undefined);
type FeedbackState = "copied" | "unavailable";

interface CopySnippetButtonsProps {
  sectionRef: RefObject<HTMLElement | null>;
  htmlSnippet?: SnippetValue;
  reactSnippet?: SnippetValue;
  vueSnippet?: SnippetValue;
  className?: string;
}

const FEEDBACK_TIMEOUT = 1800;

function VueGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path d="M3 5h4.6L12 12.2 16.4 5H21l-9 14L3 5Z" fill="currentColor" />
      <path d="M8.1 5 12 11.1 15.9 5H18l-6 9.4L6 5h2.1Z" fill="white" />
    </svg>
  );
}

const BUTTONS = {
  html: {
    label: "HTML",
    copiedLabel: "Copied!",
    unavailableLabel: "Unavailable",
    title: "Copy HTML snippet",
    className:
      "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-300",
    icon: Code2,
  },
  react: {
    label: "React",
    copiedLabel: "Copied!",
    unavailableLabel: "Soon",
    title: "Copy React JSX snippet",
    className:
      "border border-sky-500 bg-sky-500 text-white hover:bg-sky-400 focus-visible:ring-sky-300",
    icon: Atom,
  },
  vue: {
    label: "Vue",
    copiedLabel: "Copied!",
    unavailableLabel: "Unavailable",
    title: "Copy Vue snippet",
    className:
      "border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-500 focus-visible:ring-emerald-300",
    icon: VueGlyph,
  },
} satisfies Record<
  CopyTarget,
  {
    label: string;
    copiedLabel: string;
    unavailableLabel: string;
    title: string;
    className: string;
    icon: ComponentType<{ className?: string }>;
  }
>;

function resolveSnippetValue(value?: SnippetValue) {
  const snippet = typeof value === "function" ? value() : value;
  const trimmed = snippet?.trim();

  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

export default function CopySnippetButtons({
  sectionRef,
  htmlSnippet,
  reactSnippet,
  vueSnippet,
  className,
}: CopySnippetButtonsProps) {
  const [feedbackTarget, setFeedbackTarget] = useState<CopyTarget | null>(null);
  const [feedbackState, setFeedbackState] = useState<FeedbackState | null>(
    null,
  );
  const liveRegionId = useId();
  const timerRef = useRef<number | null>(null);

  const setFeedback = (target: CopyTarget, state: FeedbackState) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setFeedbackTarget(target);
    setFeedbackState(state);
    timerRef.current = window.setTimeout(() => {
      setFeedbackTarget(null);
      setFeedbackState(null);
    }, FEEDBACK_TIMEOUT);
  };

  const resolveSnippet = (target: CopyTarget) => {
    if (target === "react") {
      return resolveSnippetValue(reactSnippet);
    }

    if (target === "vue") {
      return (
        resolveSnippetValue(vueSnippet) ??
        resolveSnippetValue(htmlSnippet) ??
        sectionRef.current?.outerHTML.trim() ??
        ""
      );
    }

    return (
      resolveSnippetValue(htmlSnippet) ??
      sectionRef.current?.outerHTML.trim() ??
      ""
    );
  };

  const handleCopy = async (target: CopyTarget) => {
    const snippet = resolveSnippet(target);

    if (!snippet) {
      setFeedback(target, "unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(snippet);
      setFeedback(target, "copied");
    } catch {
      setFeedback(target, "unavailable");
    }
  };

  return (
    <div className={cn("flex items-center justify-end gap-2", className)}>
      {(["html", "react", "vue"] as const).map((target) => {
        const config = BUTTONS[target];
        const Icon = config.icon;
        const isActive = feedbackTarget === target;
        const label = !isActive
          ? config.label
          : feedbackState === "copied"
            ? config.copiedLabel
            : config.unavailableLabel;
        const isUnavailable =
          target === "react" && !resolveSnippetValue(reactSnippet);

        return (
          <button
            key={target}
            type="button"
            onClick={() => void handleCopy(target)}
            aria-describedby={liveRegionId}
            aria-label={
              isUnavailable
                ? `${config.title} unavailable for this block`
                : config.title
            }
            title={
              isUnavailable
                ? "Curated React JSX snippet not added yet for this block"
                : config.title
            }
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-semibold shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              config.className,
              isActive && feedbackState === "copied" && "ring-2 ring-offset-2",
              isUnavailable &&
                "border-dashed bg-sky-100 text-sky-800 hover:bg-sky-200 focus-visible:ring-sky-200",
            )}
          >
            <Icon className="size-4" />
            <span>{label}</span>
          </button>
        );
      })}
      <span id={liveRegionId} className="sr-only" aria-live="polite">
        {feedbackTarget
          ? feedbackState === "copied"
            ? `${BUTTONS[feedbackTarget].label} snippet copied to clipboard.`
            : `${BUTTONS[feedbackTarget].label} snippet is not available for this block.`
          : ""}
      </span>
    </div>
  );
}
