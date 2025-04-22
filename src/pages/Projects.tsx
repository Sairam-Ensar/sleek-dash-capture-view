
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Plus, ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
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
            ADD PROJECT
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Download className="h-4 w-4" />
            EXPORT TO CSV
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <ArrowUpDown className="h-4 w-4" />
            IMPORT DATA
          </Button>
        </div>
      </div>

      {/* Search section */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search projects..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      {/* Projects table */}
      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-10">
                  <ChevronDown className="h-4 w-4" />
                </TableHead>
                <TableHead>Actions</TableHead>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <ChevronDown className="h-4 w-4" />
                  </TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
