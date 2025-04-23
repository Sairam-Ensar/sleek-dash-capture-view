
import { useState } from "react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ActionMenu } from "@/components/ui/action-menu";

const designations = [
  { title: "IT BA", department: "Management" },
  { title: "tester", department: "hr" },
  { title: "Associate Software Engineer", department: "Software" }
];

export default function Designations() {
  const [showAdd, setShowAdd] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit designation #${idx + 1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete designation #${idx + 1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Designations</h1>
        <Button
          className="bg-gradient-to-r from-primary to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
          onClick={() => setShowAdd(true)}
        >
          <Plus className="h-4 w-4" />
          ADD DESIGNATION
        </Button>
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Designation</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input required placeholder="Designation Title" />
            <Input required placeholder="Department" />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAdd(false)}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Designation</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {designations.map((designation, index) => (
                <TableRow key={index} className="hover:bg-gray-50 relative">
                  <TableCell className="font-medium">{designation.title}</TableCell>
                  <TableCell>{designation.department}</TableCell>
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
