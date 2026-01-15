import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <p className="text-sm text-muted-foreground">
              © 2025 LandingPageMaker. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:justify-start">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/cookies"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Cookies
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Terms
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/disclaimer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <a
            href="https://github.com/gae4it/landingpagemaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
