
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
import { MoreHorizontal } from "lucide-react";
import { ActionButtonsLayout } from "@/components/ui/action-button-layout";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Dummy skills data
const skills = [
  {
    employeeName: "Nikhil Samanthula",
    skills: "React",
    expertise: "Expert",
    approvedBy: "-",
    status: "Pending"
  }
];

export default function Skills() {
  const handleAddSkill = () => {
    // Implementation for adding a new skill
    console.log("Add skill clicked");
  };

  const handleExport = async () => {
    // Implementation for exporting skills
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

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
                <TableHead>Actions</TableHead>
                <TableHead>Employee Name</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Approved By</TableHead>
                <TableHead>Approved Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{skill.employeeName}</TableCell>
                  <TableCell>{skill.skills}</TableCell>
                  <TableCell>{skill.expertise}</TableCell>
                  <TableCell>{skill.approvedBy}</TableCell>
                  <TableCell>{skill.status}</TableCell>
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
