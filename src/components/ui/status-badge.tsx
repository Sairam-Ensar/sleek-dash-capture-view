
import { cn } from "@/lib/utils";

type StatusType = "success" | "warning" | "error" | "info" | "pending";

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  className?: string;
}

export function StatusBadge({ status, text, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "success" && "bg-green-50 text-green-700 border border-green-200",
        status === "warning" && "bg-amber-50 text-amber-700 border border-amber-200",
        status === "error" && "bg-red-50 text-red-700 border border-red-200",
        status === "info" && "bg-blue-50 text-blue-700 border border-blue-200",
        status === "pending" && "bg-gray-50 text-gray-700 border border-gray-200",
        className
      )}
    >
      <span className={cn(
        "mr-1 h-1.5 w-1.5 rounded-full",
        status === "success" && "bg-green-500",
        status === "warning" && "bg-amber-500",
        status === "error" && "bg-red-500", 
        status === "info" && "bg-blue-500",
        status === "pending" && "bg-gray-500"
      )} />
      {text}
    </span>
  );
}
