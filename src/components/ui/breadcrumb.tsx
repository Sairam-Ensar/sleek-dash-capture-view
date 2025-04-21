
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.title}>
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            )}
            <div className={cn("flex items-center")}>
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  {item.title}
                </Link>
              ) : (
                <span className={cn(isLast ? "font-medium text-foreground" : "")}>
                  {item.title}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export { Breadcrumb };
