
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Download, MoreHorizontal } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Skills & Expertise</h1>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
          <Button
            variant="outline"
            className="px-6 border-primary text-primary font-semibold rounded-full hover:bg-blue-50"
          >
            AGENT
          </Button>
          <Button
            variant="outline"
            className="px-6 border-primary text-primary font-semibold rounded-full hover:bg-blue-50"
          >
            HELP DESK
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            ADD SKILLS
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Download className="h-4 w-4" />
            EXPORT TO CSV
          </Button>
        </div>
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
