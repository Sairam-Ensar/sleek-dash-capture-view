
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { Button } from "./button";
import { BackButton } from "./back-button";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
  showBackButton?: boolean;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  children,
  className,
  showBackButton = false,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-6 space-y-2", className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {showBackButton && <BackButton />}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        {children && (
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

interface PageHeaderActionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeaderAction({
  children,
  className,
}: PageHeaderActionProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {children}
    </div>
  );
}
