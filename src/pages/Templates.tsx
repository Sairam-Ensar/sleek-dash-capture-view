import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowUpCircle, LayoutTemplate, Plus, Edit, Trash2, Copy, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CreateLetterForm } from "@/components/templates/CreateLetterForm";
import { ActionDialog } from "@/components/ui/action-dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const letterTypes = [
  {
    title: "Offer Letter",
    description: "Formally offer a position to a candidate with salary and benefits details",
    type: "offer",
    color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-blue-500/80" />,
  },
  {
    title: "Acceptance Letter",
    description: "Formally accept an offered position",
    type: "acceptance",
    color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-green-500/80" />,
  },
  {
    title: "Declination Letter",
    description: "Formally decline an offered position",
    type: "declination",
    color: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-orange-500/80" />,
  },
  {
    title: "Follow-up Letter",
    description: "Thank interviewers and express continued interest",
    type: "followup",
    color: "bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-purple-500/80" />,
  },
  {
    title: "Letter of Recommendation",
    description: "Support a candidate with professional recommendations",
    type: "recommendation",
    color: "bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-cyan-500/80" />,
  },
  {
    title: "Business Letter",
    description: "Handle various commercial communications",
    type: "business",
    color: "bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-slate-500/80" />,
  },
  {
    title: "Formal Letter",
    description: "Official communications with specific format",
    type: "formal",
    color: "bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-rose-500/80" />,
  },
  {
    title: "Cover Letter",
    description: "Accompany job applications with relevant experience",
    type: "cover",
    color: "bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200",
    icon: <ArrowUpCircle className="h-9 w-9 text-teal-500/80" />,
  }
];

const savedTemplates = [
  {
    id: "1",
    title: "Standard Offer Letter",
    type: "offer",
    dateCreated: "2025-04-20",
    lastModified: "2025-04-21",
  },
  {
    id: "2",
    title: "Remote Position Offer",
    type: "offer",
    dateCreated: "2025-04-19",
    lastModified: "2025-04-19",
  }
];

export default function Templates() {
  const [activeTab, setActiveTab] = useState<"categories" | "saved">("categories");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingTemplate, setDeletingTemplate] = useState<string | null>(null);

  const handleDeleteTemplate = (id: string) => {
    setDeletingTemplate(id);
    setOpenDeleteDialog(true);
  };

  const confirmDelete = () => {
    toast.success("Template deleted successfully");
    setOpenDeleteDialog(false);
  };

  const handleDuplicate = (id: string) => {
    toast.success("Template duplicated successfully");
  };

  const handlePreview = (id: string) => {
    toast.success("Opening template preview");
  };

  const handleEdit = (id: string) => {
    toast.success("Opening template editor");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Template Manager"
        description="Create and manage your professional document templates"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Templates" }
        ]}
      />
      
      <div className="flex items-center border-b border-gray-200 mb-6">
        <button
          className={`py-3 px-5 font-medium text-sm relative ${
            activeTab === "categories" 
              ? "text-primary" 
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("categories")}
        >
          Categories
          {activeTab === "categories" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
          )}
        </button>
        <button
          className={`py-3 px-5 font-medium text-sm relative ${
            activeTab === "saved" 
              ? "text-primary" 
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("saved")}
        >
          Saved Templates
          {activeTab === "saved" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {activeTab === "categories" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 animate-fade-in-up">
          {letterTypes.map((letter) => (
            <Card 
              key={letter.type} 
              className={`border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${letter.color}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {letter.icon}
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {letter.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{letter.description}</p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <PremiumButton className="w-full gap-2 shadow-sm">
                      <Plus className="h-4 w-4" />
                      Create Template
                    </PremiumButton>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
                    <DialogHeader className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                      <DialogTitle className="flex items-center gap-2">
                        <LayoutTemplate className="h-5 w-5 text-primary" />
                        Create {letter.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="p-6">
                      <CreateLetterForm type={letter.type} />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "saved" && (
        <>
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Your Templates</h2>
              <Dialog>
                <Dialog.Trigger asChild>
                  <PremiumButton size="sm">
                    <Plus className="h-4 w-4" />
                    New Template
                  </PremiumButton>
                </Dialog.Trigger>
                <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
                  <DialogHeader className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                    <DialogTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-primary" />
                      Create Template
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <CreateLetterForm type="offer" />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-gray-50 rounded-md">
              {savedTemplates.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {savedTemplates.map((template) => (
                    <div 
                      key={template.id} 
                      className="p-4 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{template.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {letterTypes.find(l => l.type === template.type)?.title}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Created: {template.dateCreated} • Last modified: {template.lastModified}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handlePreview(template.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleEdit(template.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleDuplicate(template.id)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => handleDeleteTemplate(template.id)}
                          className="h-8 w-8 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">You haven't created any templates yet.</p>
                  <Button className="mt-4">Create your first template</Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <ActionDialog
        title="Delete Template"
        description="Are you sure you want to delete this template? This action cannot be undone."
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
        onConfirm={confirmDelete}
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </div>
  );
}
