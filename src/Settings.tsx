import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SettingsDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* Dialog content */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            This is your settings dialog.
          </DialogDescription>
        </DialogHeader>

        {/* You can add settings content here */}
        <div className="space-y-4">
          <p>Choose your preferences and save changes here.</p>
        </div>

        {/* Dialog footer with a close/save button */}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button> {/* Close the dialog */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
