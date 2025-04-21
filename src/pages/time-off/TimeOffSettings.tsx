
import { Wrench, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader, PageHeaderAction } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function TimeOffSettings() {
  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Time Off Settings"
        description="Configure leave, approvals & policies"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Time Off", href: "/time-off" },
          { title: "Settings" }
        ]}
      >
        <PageHeaderAction>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Help & Docs</TooltipContent>
          </Tooltip>
        </PageHeaderAction>
      </PageHeader>
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/60 backdrop-blur border-none shadow-xl rounded-2xl py-8 px-6 flex flex-col items-center gap-3">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-400 text-white shadow-lg mb-2">
            <Wrench className="h-8 w-8" />
          </span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Configure Time Off Policies</h2>
          <p className="text-center text-gray-600 mb-4">
            Here you can manage workflow approvals, policy enforcement, allowance resets, and more.
          </p>
          <Button variant="default" className="w-full max-w-xs">Open Settings Form</Button>
        </Card>
      </div>
    </div>
  );
}
