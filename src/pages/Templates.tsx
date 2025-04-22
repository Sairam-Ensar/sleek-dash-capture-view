
import { Button } from "@/components/ui/button";
import { LayoutTemplate, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CreateLetterForm } from "@/components/templates/CreateLetterForm";

const letterTypes = [
  {
    title: "Offer Letter",
    description: "Formally offer a position to a candidate with salary and benefits details",
    type: "offer"
  },
  {
    title: "Acceptance Letter",
    description: "Formally accept an offered position",
    type: "acceptance"
  },
  {
    title: "Declination Letter",
    description: "Formally decline an offered position",
    type: "declination"
  },
  {
    title: "Follow-up Letter",
    description: "Thank interviewers and express continued interest",
    type: "followup"
  },
  {
    title: "Letter of Recommendation",
    description: "Support a candidate with professional recommendations",
    type: "recommendation"
  },
  {
    title: "Business Letter",
    description: "Handle various commercial communications",
    type: "business"
  },
  {
    title: "Formal Letter",
    description: "Official communications with specific format",
    type: "formal"
  },
  {
    title: "Cover Letter",
    description: "Accompany job applications with relevant experience",
    type: "cover"
  }
];

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {letterTypes.map((letter) => (
          <Card key={letter.type} className="bg-white/80 shadow-md rounded-xl hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{letter.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{letter.description}</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Create Template
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create {letter.title}</DialogTitle>
                  </DialogHeader>
                  <CreateLetterForm type={letter.type} />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
