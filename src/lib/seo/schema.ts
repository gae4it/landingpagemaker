interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
}

interface BreadcrumbItemInput {
  name: string;
  item: string;
}

export function createWebPageSchema({
  name,
  description,
  url,
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
  };
}

export function createBreadcrumbListSchema(items: BreadcrumbItemInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
