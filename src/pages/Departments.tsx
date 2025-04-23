
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
import { Plus, MoreHorizontal, Download } from "lucide-react";
import { ActionButtonsLayout } from "@/components/ui/action-button-layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Dummy departments data
const initialDepartments = [
  { name: "Management" },
  { name: "hr" },
  { name: "Admin" },
  { name: "Software" },
  { name: "Accounts" }
];

export default function Departments() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const [newDept, setNewDept] = useState("");

  const handleAddDepartment = () => {
    setShowAddDepartment(true);
  };

  const handleDepartmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDept.trim()) {
      setDepartments(d => [...d, { name: newDept }]);
      setShowAddDepartment(false);
      setNewDept("");
    }
  };

  const handleExport = async () => {
    // Simulate export
    await new Promise(res => setTimeout(res, 1000));
  };

  const handleImport = async () => {
    // Simulate import
    await new Promise(res => setTimeout(res, 1000));
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      {/* Header section (actions) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
        <ActionButtonsLayout
          onAdd={handleAddDepartment}
          onExport={handleExport}
          onImport={handleImport}
          addLabel="ADD DEPARTMENT"
          showExport={true}
          showImport={true}
        />
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

      {/* Add Department Dialog */}
      <Dialog open={showAddDepartment} onOpenChange={setShowAddDepartment}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Department</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleDepartmentSubmit} className="space-y-4">
            <Input
              autoFocus
              required
              placeholder="Department Name"
              value={newDept}
              onChange={e => setNewDept(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAddDepartment(false)}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
