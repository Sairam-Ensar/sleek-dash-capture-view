
import { LayoutTemplate } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function Templates() {
  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Templates"
        description="Manage your document templates"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Templates" }
        ]}
      />
      <Card className="bg-white/80 shadow-md rounded-2xl">
        <CardContent className="flex flex-col items-center gap-2 py-8">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-green-300 text-white shadow mb-2">
            <LayoutTemplate className="h-8 w-8" />
          </span>
          <h2 className="text-xl font-medium mb-1">Templates</h2>
          <p className="text-gray-600 text-center mb-2">No templates found.</p>
        </CardContent>
      </Card>
    </div>
  );
}
