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
import { useState } from "react";
import { MoreHorizontal, Download, ArrowDown, ArrowUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const fallbackAvatars = [
  "/lovable-uploads/043cffa9-fc3a-4320-9d59-c843a95de8b0.png",
  "/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png",
  "/lovable-uploads/1bf0e48b-391c-4e7a-a5c1-58a4988b103d.png",
  "/lovable-uploads/827c8d6f-70da-4a46-91f8-462f18f20e77.png",
];

const employees = [
  {
    name: "Srinivas Keerthi",
    id: "ES-500",
    email: "srinivas@ensarsolutions.com",
    dob: "04/09/1981",
    mobile: "3249999999",
    avatar: fallbackAvatars[0],
  },
  {
    name: "harsha Sura",
    id: "ee8",
    email: "harshasura@gmail.com",
    dob: "03/26/2025",
    mobile: "9879879876",
    avatar: fallbackAvatars[1],
  },
  {
    name: "Nikhil Samanthula",
    id: "ES5",
    email: "nikhils@gmail.com",
    dob: "12/12/2024",
    mobile: "9898898787",
    avatar: fallbackAvatars[2],
  },
  {
    name: "Katta Sulekhya",
    id: "ES3",
    email: "kattasulekhya@gmail.com",
    dob: "12/08/2024",
    mobile: "9898898787",
    avatar: fallbackAvatars[3],
  },
];

const status = {
  label: "Active",
  color: "bg-green-100",
  dot: "bg-green-500",
  count: employees.length,
};

export default function AllEmployees() {
  const [search, setSearch] = useState("");
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "" });

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddEmployee = () => setShowAddEmployee(true);

  const handleEmployeeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.email) {
      setShowAddEmployee(false);
      setNewEmployee({ name: "", email: "" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5 px-2">
        <h1 className="text-2xl font-bold text-[#222741]">All Employees</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="border-red-300 text-red-500 px-3 rounded-full gap-2 hover:bg-red-50">
            <Download className="w-4 h-4" />
            IMPORT DATA
          </Button>
          <Button variant="outline" className="border-red-300 text-red-500 px-3 rounded-full gap-2 hover:bg-red-50">
            <ArrowDown className="w-4 h-4" />
            SAMPLE IMPORT
          </Button>
          <Button variant="outline" className="border-red-300 text-red-500 px-3 rounded-full gap-2 hover:bg-red-50">
            <ArrowUpDown className="w-4 h-4" />
            EXPORT DATA
          </Button>
          <Button className="bg-gradient-to-r from-primary to-blue-700 text-white font-semibold px-5 rounded-full hover:from-blue-700 hover:to-blue-800"
            onClick={handleAddEmployee}
          >
            <Plus className="h-4 w-4" />
            ADD EMPLOYEE
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 px-2">
        <div className={cn("flex items-center px-4 py-2.5 rounded-full border border-gray-200 text-gray-800 font-semibold gap-2", status.color)}>
          <span className={cn("h-2.5 w-2.5 rounded-full", status.dot)} />
          Status: {status.label}
          <span className="ml-2 text-green-600">{status.count}</span>
        </div>
        <Input
          type="text"
          placeholder="Search...Employee Details"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 border-primary outline-none shadow-none focus:border-2 focus:border-primary rounded-full px-5 py-2"
        />
      </div>

      <Card className="w-full bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto rounded-2xl">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>Name</TableHead>
                <TableHead>Employee ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date of Birth</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((emp, idx) => (
                <TableRow key={emp.id} className="hover:bg-blue-50 transition">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-200 bg-muted"
                      />
                      <span className="font-medium">{emp.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{emp.id}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.dob}</TableCell>
                  <TableCell>{emp.mobile}</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <MoreHorizontal />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredEmployees.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                    No employees found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4 px-2 gap-2">
          <span className="text-gray-600 text-sm">Rows per page:
            <span className="ml-2 font-semibold">5</span>
          </span>
          <span className="text-gray-500 text-sm">
            1–{filteredEmployees.length} of {filteredEmployees.length}
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" disabled>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 15L8 10L13 5" stroke="#C2C6CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" disabled>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L12 10L7 15" stroke="#C2C6CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </Card>

      <Dialog open={showAddEmployee} onOpenChange={setShowAddEmployee}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEmployeeSubmit} className="space-y-4">
            <Input
              required
              placeholder="Employee Name"
              value={newEmployee.name}
              onChange={e => setNewEmployee(n => ({ ...n, name: e.target.value }))}
            />
            <Input
              required
              type="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={e => setNewEmployee(n => ({ ...n, email: e.target.value }))}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setShowAddEmployee(false)}>Cancel</Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
