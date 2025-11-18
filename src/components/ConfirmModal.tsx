import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  isLoading?: boolean;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isLoading = false,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="space-y-4">
        <p className="text-gray-600">{message}</p>

        <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
          <Button variant="secondary" onClick={onClose} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button variant="danger" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Please wait..." : confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
