"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  return (
    <nav className="relative z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="LandingPageMaker home"
            className={cn(
              "text-lg font-semibold tracking-tight text-foreground hover:text-primary focus:text-primary",
            )}
          >
            LandingPageMaker
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  <Link href="/#categories">Blocks</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
