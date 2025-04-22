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
import { Plus, MoreHorizontal } from "lucide-react";

// Dummy departments data
const departments = [
  { name: "Management" },
  { name: "hr" },
  { name: "Admin" },
  { name: "Software" },
  { name: "Accounts" }
];

export default function Departments() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
        <div className="flex items-center gap-4">
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
            ADD DEPARTMENT
          </Button>
        </div>
      </div>

      {/* Departments table */}
      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Department Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((department, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{department.name}</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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
