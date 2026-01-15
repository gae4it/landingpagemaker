import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PanelsTopLeft } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  subsubtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  subsubtitle,
  ctaText,
  ctaLink,
}: HeroProps) {
  return (
    <section className="from-primary/20 via-background to-secondary/20 relative overflow-hidden bg-linear-to-br py-20 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-size-[4rem_4rem]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="from-foreground to-foreground/70 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link href={ctaLink}>
                <Button
                  size="lg"
                  className="inline-flex items-center gap-2 shadow-lg"
                >
                  <PanelsTopLeft className="h-4 w-4" aria-hidden />
                  <span>{ctaText}</span>
                </Button>
              </Link>
            </div>
          )}
          {subsubtitle && (
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              {subsubtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
