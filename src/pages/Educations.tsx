
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
import { Input } from "@/components/ui/input";
import { Plus, Download, MoreHorizontal } from "lucide-react";
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

export default function Educations() {
  const [showAdd, setShowAdd] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleAddEducation = () => setShowAdd(true);
  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit education #${idx + 1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete education #${idx + 1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Educations</h1>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
          <Button
            className="bg-gradient-to-r from-primary to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
            onClick={handleAddEducation}
          >
            <Plus className="h-4 w-4" />
            ADD EDUCATION
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Download className="h-4 w-4" />
            EXPORT TO CSV
          </Button>
        </div>
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Education</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input required placeholder="Education" />
            <Input required placeholder="Specification" />
            <Input required placeholder="Institution" />
            <Input required placeholder="Start Year" />
            <Input required placeholder="End Year" />
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
          placeholder="Search Education..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Education</TableHead>
                <TableHead>Specification</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Start Year</TableHead>
                <TableHead>End Year</TableHead>
                <TableHead>Document</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* DUMMY - Actions per row */}
              <TableRow className="relative">
                <TableCell>No Data Found.</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell className="text-right">
                  <div className="relative inline-block">
                    <Button size="icon" variant="ghost" className="rounded-full"
                      onClick={() => setActionRow(0)}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    {actionRow === 0 && (
                      <ActionMenu
                        onEdit={() => handleEdit(0)}
                        onDelete={() => handleDelete(0)}
                        onCancel={() => setActionRow(null)}
                      />
                    )}
                  </div>
                </TableCell>
              </TableRow>
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
                <PaginationLink href="#">0-0 of 0</PaginationLink>
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
