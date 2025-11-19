import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-border bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2025 LandingPageMaker. All rights reserved.
          </p>
          <a
            href="https://github.com/gae4it/landingpagemaker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
