
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
import { Plus, Download, MoreHorizontal, Clock } from "lucide-react";
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

// Dummy attendance data
const attendanceData = [
  {
    employeeId: "ES-500",
    employeeName: "John Doe",
    date: "2025-04-22",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    totalHours: "9h",
    status: "Present"
  }
];

export default function Attendance() {
  const [showMark, setShowMark] = useState(false);
  const [actionRow, setActionRow] = useState<number | null>(null);

  const handleEdit = (idx: number) => { setActionRow(null); alert(`Edit attendance #${idx + 1}`); };
  const handleDelete = (idx: number) => { setActionRow(null); alert(`Delete attendance #${idx + 1}`); };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-5">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
        </div>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
          <Button
            variant="outline"
            className="px-6 border-primary text-primary font-semibold rounded-full hover:bg-blue-50"
          >
            WEEKLY
          </Button>
          <Button
            variant="outline"
            className="px-6 border-primary text-primary font-semibold rounded-full hover:bg-blue-50"
          >
            MONTHLY
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center gap-2"
            onClick={() => setShowMark(true)}
          >
            <Plus className="h-4 w-4" />
            MARK ATTENDANCE
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-600 px-4 rounded-full gap-2">
            <Download className="h-4 w-4" />
            EXPORT TO CSV
          </Button>
        </div>
      </div>

      <Dialog open={showMark} onOpenChange={setShowMark}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Mark Attendance</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input required placeholder="Employee Name" />
            <Input required placeholder="Date" />
            <Input required placeholder="Check In" />
            <Input required placeholder="Check Out" />
            <Input required placeholder="Status" />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowMark(false)}>
                Cancel
              </Button>
              <Button type="submit">Mark</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search Attendance Records..."
          className="max-w-md border-primary focus:ring-2 focus:ring-primary rounded-full px-4"
        />
      </div>

      <Card className="bg-white/90 rounded-2xl shadow-lg p-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Employee Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Total Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((record, index) => (
                <TableRow key={index} className="hover:bg-gray-50 relative">
                  <TableCell className="font-medium">
                    <EmployeeProfileLink id={record.employeeId} name={record.employeeName} />
                  </TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>{record.totalHours}</TableCell>
                  <TableCell>
                    <span className="status-badge status-badge-success">
                      {record.status}
                    </span>
                  </TableCell>
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
