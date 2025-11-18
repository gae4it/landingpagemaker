import { Button } from "@/components/ui/Button";
import type { Section } from "@/lib/validations";

interface SectionCardProps {
  section: Section;
  onEdit: () => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export function SectionCard({
  section,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}: SectionCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 font-semibold text-gray-900">{section.name}</h3>

          {section.intro && (
            <p className="mb-1 text-sm text-gray-600">
              <span className="font-medium">Intro:</span> {section.intro}
            </p>
          )}

          {section.title && (
            <p className="mb-1 text-sm text-gray-600">
              <span className="font-medium">Title:</span> {section.title}
            </p>
          )}

          {section.subtitle && (
            <p className="mb-1 text-sm text-gray-600">
              <span className="font-medium">Subtitle:</span> {section.subtitle}
            </p>
          )}

          {section.description && (
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-medium">Description:</span>{" "}
              {section.description.length > 100
                ? `${section.description.substring(0, 100)}...`
                : section.description}
            </p>
          )}

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            {section.buttons && section.buttons.length > 0 && (
              <span>
                {section.buttons.length} button
                {section.buttons.length > 1 ? "s" : ""}
              </span>
            )}
            {section.images && section.images.length > 0 && (
              <span>
                {section.images.length} image
                {section.images.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        <div className="ml-4 flex items-center space-x-2">
          <div className="flex flex-col space-y-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={onMoveUp}
              disabled={!canMoveUp}
              className="px-2 py-1 text-xs"
            >
              ↑
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={onMoveDown}
              disabled={!canMoveDown}
              className="px-2 py-1 text-xs"
            >
              ↓
            </Button>
          </div>

          <div className="flex flex-col space-y-1">
            <Button
              size="sm"
              variant="secondary"
              onClick={onEdit}
              className="text-xs"
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={onDelete}
              className="text-xs"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
