
import { LucideProps } from "lucide-react";
import { ReactNode } from "react";
import { TooltipContent } from "@/components/ui/tooltip";

export type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}
