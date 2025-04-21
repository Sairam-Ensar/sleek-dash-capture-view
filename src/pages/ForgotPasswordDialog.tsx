
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ForgotPasswordDialogProps {
  open: boolean;
  isLoading: boolean;
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

const ForgotPasswordDialog = ({
  open,
  isLoading,
  email,
  setEmail,
  onSubmit,
  onClose,
}: ForgotPasswordDialogProps) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Reset your password</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Enter your email address and we will send you a link to reset your password.
          </p>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);

export default ForgotPasswordDialog;
