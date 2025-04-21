
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail } from "lucide-react";

interface RegisterDialogProps {
  open: boolean;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

const RegisterDialog = ({
  open,
  isLoading,
  onSubmit,
  onClose,
}: RegisterDialogProps) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Register as an Employee</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Full Name" className="pl-10" required />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input type="email" placeholder="Email Address" className="pl-10" required />
          </div>
          <div className="relative">
            <Input type="text" placeholder="Employee ID (if known)" className="pl-3" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Your registration will be reviewed by HR before activation.
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Register"}
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);

export default RegisterDialog;
