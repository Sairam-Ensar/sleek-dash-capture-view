
import { Bell, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function NotificationsActivity() {
  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Notifications & Activity Log"
        description="See user activities & notifications"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Notifications & Activity Log" }
        ]}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/80 shadow-md rounded-2xl">
          <CardContent className="flex flex-col items-center gap-2 py-8">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-green-300 text-white shadow mb-2">
              <Bell className="h-8 w-8" />
            </span>
            <h2 className="text-xl font-medium mb-1">Notifications</h2>
            <p className="text-gray-600 text-center mb-2">No new notifications.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/80 shadow-md rounded-2xl">
          <CardContent className="flex flex-col items-center gap-2 py-8">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-400 to-amber-300 text-white shadow mb-2">
              <FileText className="h-8 w-8" />
            </span>
            <h2 className="text-xl font-medium mb-1">Activity Log</h2>
            <p className="text-gray-600 text-center mb-2">No recent activity found.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
