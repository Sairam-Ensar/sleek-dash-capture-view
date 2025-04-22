
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ActionDialogProps {
  title: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive" | "success";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  hideFooter?: boolean;
}

export function ActionDialog({
  title,
  description,
  open,
  onOpenChange,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  size = "md",
  loading = false,
  children,
  className,
  hideFooter = false,
}: ActionDialogProps) {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const variantStyles = {
    default: {},
    destructive: {
      header: "border-b border-red-200 bg-red-50",
      title: "text-red-700",
      description: "text-red-600",
      confirmButton: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    },
    success: {
      header: "border-b border-green-200 bg-green-50",
      title: "text-green-700",
      description: "text-green-600",
      confirmButton: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    },
  };

  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "overflow-hidden border-0 shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-300",
          sizeStyles[size],
          className
        )}
      >
        <DialogHeader
          className={cn(
            "p-6",
            variant !== "default" && variantStyles[variant].header
          )}
        >
          <DialogTitle
            className={cn(
              "text-xl font-semibold",
              variant !== "default" && variantStyles[variant].title
            )}
          >
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription
              className={cn(
                variant !== "default" && variantStyles[variant].description
              )}
            >
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="px-6 py-2 max-h-[60vh] overflow-y-auto">{children}</div>

        {!hideFooter && (
          <DialogFooter className="px-6 py-4 bg-gray-50/80">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="mr-2"
              disabled={loading}
            >
              {cancelText}
            </Button>
            <Button
              onClick={handleConfirm}
              className={cn(
                variant !== "default" && variantStyles[variant].confirmButton
              )}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                confirmText
              )}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
