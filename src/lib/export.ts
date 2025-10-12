type LandingPageWithSections = {
  id: string;
  url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  sections: {
    id: string;
    name: string;
    intro: string | null;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    order: number;
    landingPageId: string;
    buttons: {
      id: string;
      label: string;
      linkType: string;
      value: string;
      sectionId: string;
    }[];
    images: {
      id: string;
      url: string;
      alt: string | null;
      sectionId: string;
    }[];
  }[];
};

export function formatLandingPageToTXT(landingPage: LandingPageWithSections): string {
  let txtContent = `LANDING PAGE: ${landingPage.url}\nDESCRIPTION: ${landingPage.description}\n\n`;

  landingPage.sections.forEach((section, index) => {
    txtContent += `=== SECTION ${index + 1}: ${section.name} ===\n`;
    if (section.intro) txtContent += `Intro: ${section.intro}\n`;
    if (section.title) txtContent += `Title: ${section.title}\n`;
    if (section.subtitle) txtContent += `Subtitle: ${section.subtitle}\n`;
    if (section.description) txtContent += `Description: ${section.description}\n`;
    
    if (section.buttons.length > 0) {
      const buttonStrings = section.buttons.map(btn => `${btn.label} -> ${btn.value} (${btn.linkType})`);
      txtContent += `Buttons: ${buttonStrings.join(', ')}\n`;
    }
    
    if (section.images.length > 0) {
      const imageUrls = section.images.map(img => img.url);
      txtContent += `Images: ${imageUrls.join(', ')}\n`;
    }
    
    txtContent += '\n';
  });

  txtContent += `---\nTotal Sections: ${landingPage.sections.length}\nGenerated: ${new Date().toLocaleString()}\n`;

  return txtContent;
}

export function downloadTXTFile(filename: string, content: string): void {
  const element = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}