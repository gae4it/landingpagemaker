import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface LandingPageCardProps {
  landingPage: {
    id: string;
    url: string;
    description: string;
    updatedAt: Date;
    sections: any[];
  };
  onDelete: () => void;
}

export function LandingPageCard({ landingPage, onDelete }: LandingPageCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Landing Page</span>
        </div>
        
        <div>
          <a
            href={landingPage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium break-all"
          >
            {landingPage.url}
          </a>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {landingPage.description.length > 120
            ? `${landingPage.description.substring(0, 120)}...`
            : landingPage.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Updated {formatDate(landingPage.updatedAt)}</span>
          <span>{landingPage.sections.length}/25 sections</span>
        </div>
        
        <div className="flex space-x-2 pt-2 border-t border-gray-100">
          <Link href={`/edit/${landingPage.id}`} className="flex-1">
            <Button variant="secondary" size="sm" className="w-full">
              Edit
            </Button>
          </Link>
          <Button
            variant="danger"
            size="sm"
            onClick={onDelete}
            className="px-3"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}