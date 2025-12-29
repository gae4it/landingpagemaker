"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Call to Action",
    slug: "blocks-call-to-action",
    description: "Engaging CTAs to drive conversions",
  },
  {
    name: "Columns",
    slug: "blocks-columns",
    description: "Multi-column layouts",
  },
  {
    name: "Contact",
    slug: "blocks-contact",
    description: "Contact forms and sections",
  },
  {
    name: "Content",
    slug: "blocks-content",
    description: "Rich content sections",
  },
  {
    name: "Counter",
    slug: "blocks-counter",
    description: "Animated statistics",
  },
  {
    name: "Dividers",
    slug: "blocks-dividers",
    description: "Stylish dividers",
  },
  {
    name: "Features & Services",
    slug: "blocks-features-e-services",
    description: "Showcase features",
  },
  { name: "Footer", slug: "blocks-footer", description: "Footer designs" },
  { name: "Forms", slug: "blocks-forms", description: "Form components" },
  { name: "Headers", slug: "blocks-headers", description: "Header sections" },
  { name: "Hero", slug: "blocks-hero", description: "Hero sections" },
  {
    name: "Interactions",
    slug: "blocks-interactions",
    description: "Interactive elements",
  },
  { name: "Partner", slug: "blocks-partner", description: "Partner showcases" },
  { name: "Post", slug: "blocks-post", description: "Blog layouts" },
  { name: "Pricing", slug: "blocks-pricing", description: "Pricing tables" },
  { name: "Shop", slug: "blocks-shop", description: "E-commerce displays" },
  { name: "Social", slug: "blocks-social", description: "Social integrations" },
  { name: "Teams", slug: "blocks-teams", description: "Team showcases" },
  {
    name: "Testimonials",
    slug: "blocks-testimonials",
    description: "Testimonials",
  },
  { name: "UI", slug: "blocks-ui", description: "UI components" },
];

export default function Navigation() {
  return (
    <nav className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 relative z-50 border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blocks</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[90vw] max-w-200 grid-cols-2 gap-3 p-4 md:w-150 md:grid-cols-3 lg:w-200">
                    {categories.map((category) => (
                      <NavigationMenuLink
                        asChild
                        key={category.slug}
                        className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                      >
                        <Link href={`/blocks/${category.slug}`}>
                          <div className="text-sm leading-none font-medium">
                            {category.name}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {category.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
