
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
import { Plus, Download, Upload, MoreHorizontal } from "lucide-react";
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

export default function Assets() {
  const [showAdd, setShowAdd] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit asset #${idx + 1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete asset #${idx + 1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <h1 className="text-2xl font-bold text-gray-900">Assets</h1>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
          <Button 
            className="bg-gradient-to-r from-primary to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
            onClick={() => setShowAdd(true)}
          >
            <Plus className="h-4 w-4" />
            ADD ASSET
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Download className="h-4 w-4" />
            EXPORT DATA
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Upload className="h-4 w-4" />
            IMPORT DATA
          </Button>
        </div>
      </div>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Asset</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input required placeholder="Invoice Number" />
            <Input required placeholder="Invoice Date" />
            <Input required placeholder="Asset Type" />
            <Input required placeholder="Make" />
            <Input required placeholder="Quantity" />
            <Input required placeholder="Processor" />
            <Input required placeholder="RAM" />
            <Input required placeholder="Hard Disk" />
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
          placeholder="Search Assets Details..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Invoice Number</TableHead>
                <TableHead>Invoice Date</TableHead>
                <TableHead>Asset Type</TableHead>
                <TableHead>Make</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Processor</TableHead>
                <TableHead>RAM</TableHead>
                <TableHead>Hard Disk</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Dummy row with Actions */}
              <TableRow className="relative">
                <TableCell>No Data Found.</TableCell>
                <TableCell />
                <TableCell />
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
