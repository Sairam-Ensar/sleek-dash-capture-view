
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Plus } from "lucide-react";
import { ActionButtonsLayout } from "@/components/ui/action-button-layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ActionMenu } from "@/components/ui/action-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EmployeeProfileLink } from "@/components/employee/EmployeeProfileLink";

// Dummy skills data
const skills = [
  {
    employeeId: "ES5",
    employeeName: "Nikhil Samanthula",
    skills: "React",
    expertise: "Expert",
    approvedBy: "-",
    status: "Pending"
  }
];

export default function Skills() {
  const [showAdd, setShowAdd] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleAddSkill = () => setShowAdd(true);
  const handleExport = async () => await new Promise(resolve => setTimeout(resolve, 1000));
  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit skill #${idx + 1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete skill #${idx + 1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Skills & Expertise</h1>
        <ActionButtonsLayout
          onAdd={handleAddSkill}
          onExport={handleExport}
          addLabel="ADD SKILLS"
        />
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Skill</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input required placeholder="Employee Name" />
            <Input required placeholder="Skill" />
            <Input required placeholder="Expertise" />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAdd(false)}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search Skills..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Employee Name</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Approved By</TableHead>
                <TableHead>Approved Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill, index) => (
                <TableRow key={index} className="hover:bg-gray-50 relative">
                  <TableCell className="font-medium">
                    <EmployeeProfileLink id={skill.employeeId} name={skill.employeeName} />
                  </TableCell>
                  <TableCell>{skill.skills}</TableCell>
                  <TableCell>{skill.expertise}</TableCell>
                  <TableCell>{skill.approvedBy}</TableCell>
                  <TableCell>{skill.status}</TableCell>
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
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">Rows per page: 5</div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>
    </div>
  );
}
