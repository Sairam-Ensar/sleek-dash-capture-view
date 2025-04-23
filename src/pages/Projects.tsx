
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { ActionButtonsLayout } from "@/components/ui/action-button-layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ActionMenu } from "@/components/ui/action-menu"; // NEW

// Dummy project data
const projects = [
  {
    name: "Hr",
    startDate: "-",
    endDate: "-",
    price: "-",
    currency: "-",
    priority: "DEFAULT",
    projectLead: "Nikhil Samanthula",
    billingType: "-",
    projectType: "-",
    status: "-",
    description: "-",
    docs: "-"
  },
  {
    name: "Shopify",
    startDate: "01/28/2025",
    endDate: "-",
    price: "-",
    currency: "-",
    priority: "DEFAULT",
    projectLead: "harsha Sura",
    billingType: "-",
    projectType: "Development",
    status: "Active",
    description: "-",
    docs: "-"
  }
];

export default function Projects() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleAddProject = () => setShowAddProject(true);
  const handleExport = async () => await new Promise(res => setTimeout(res, 500));
  const handleImport = async () => await new Promise(res => setTimeout(res, 500));

  // Minimal Actions menu handlers
  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit project #${idx+1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete project #${idx+1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <ActionButtonsLayout
          onAdd={handleAddProject}
          onExport={handleExport}
          onImport={handleImport}
          addLabel="ADD PROJECT"
          showImport
          showExport
        />
      </div>

      <Dialog open={showAddProject} onOpenChange={setShowAddProject}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input
              required
              placeholder="Project Name"
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAddProject(false)}>Cancel</Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search projects..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                {/* REMOVED any "Expand All" or arrow features */}
                <TableHead>Project</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Project Lead</TableHead>
                <TableHead>Billing Type</TableHead>
                <TableHead>Project Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Doc</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index} className="hover:bg-gray-50 relative">
                  {/* REMOVED arrow cell */}
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell>{project.endDate}</TableCell>
                  <TableCell>{project.price}</TableCell>
                  <TableCell>{project.currency}</TableCell>
                  <TableCell>{project.priority}</TableCell>
                  <TableCell>{project.projectLead}</TableCell>
                  <TableCell>{project.billingType}</TableCell>
                  <TableCell>{project.projectType}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.docs}</TableCell>
                  <TableCell className="text-right">
                    <div className="relative inline-block">
                      <Button size="icon" variant="ghost" className="rounded-full"
                        onClick={() => setActionRow(index)}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      {actionRow === index && (
                        <ActionMenu
                          onEdit={() => handleEdit(index)}
                          onDelete={() => handleDelete(index)}
                          onCancel={() => setActionRow(null)}
                        />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
