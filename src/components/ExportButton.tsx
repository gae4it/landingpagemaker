"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/Button";
import { api } from "@/trpc/react";

interface ExportButtonProps {
  landingPageId: string;
}

export function ExportButton({ landingPageId }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const exportQuery = api.landingPage.export.useQuery(
    { id: landingPageId },
    { enabled: false }
  );

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const result = await exportQuery.refetch();
      if (result.data) {
        // Create and download the file
        const element = document.createElement('a');
        const file = new Blob([result.data.content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = result.data.filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        toast.success("Landing page exported successfully!");
      } else {
        toast.error("Failed to export landing page");
      }
    } catch (error) {
      toast.error("Failed to export landing page");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      variant="secondary"
    >
      {isExporting ? "Exporting..." : "Export to TXT"}
    </Button>
  );
}