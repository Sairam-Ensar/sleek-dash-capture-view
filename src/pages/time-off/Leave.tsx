
import { useState } from "react";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Download, 
  Filter, 
  Loader2, 
  Plus, 
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, PageHeaderAction } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface LeaveRequest {
  id: number;
  employee: {
    name: string;
    avatar?: string;
  };
  type: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason: string;
  status: "approved" | "pending" | "rejected";
}

const dummyLeaves: LeaveRequest[] = [
  {
    id: 1,
    employee: {
      name: "Nikhil Samanthula",
      avatar: "/placeholder.svg"
    },
    type: "Vacation",
    startDate: new Date(2025, 1, 10),
    endDate: new Date(2025, 1, 15),
    days: 5,
    reason: "Annual vacation",
    status: "approved"
  },
  {
    id: 2,
    employee: {
      name: "Srinivas Keerthi",
      avatar: "/placeholder.svg"
    },
    type: "Sick Leave",
    startDate: new Date(2025, 2, 5),
    endDate: new Date(2025, 2, 7),
    days: 3,
    reason: "Flu",
    status: "approved"
  },
  {
    id: 3,
    employee: {
      name: "Harsha Sura",
      avatar: "/placeholder.svg"
    },
    type: "Personal",
    startDate: new Date(2025, 3, 20),
    endDate: new Date(2025, 3, 22),
    days: 3,
    reason: "Family event",
    status: "pending"
  }
];

export default function Leave() {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);

  const filteredLeaves = dummyLeaves.filter(
    leave => leave.employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestTimeOff = () => {
    console.log("Request time off clicked");
    // Implementation would open a modal for requesting time off
  };

  // Simulated loading for demo
  const handleExport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Time Off Requests"
        description="Manage and track employee time off requests"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Time Off", href: "/time-off" },
          { title: "Leave Requests" },
        ]}
      >
        <PageHeaderAction>
          <Button onClick={handleRequestTimeOff}>
            <Plus className="mr-2 h-4 w-4" />
            Request Time Off
          </Button>
        </PageHeaderAction>
      </PageHeader>

      <div className="mb-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search by employee..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex-shrink-0">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Date</h4>
                  <div className="pt-2">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="rounded-md pointer-events-auto"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button size="sm">Apply Filter</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button 
          variant="outline" 
          onClick={handleExport}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Export to CSV
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>From Date</TableHead>
                <TableHead>To Date</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeaves.length > 0 ? (
                filteredLeaves.map((leave) => (
                  <TableRow key={leave.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">
                          {leave.employee.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </span>
                        <span>{leave.employee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{leave.type}</TableCell>
                    <TableCell>{format(leave.startDate, "MMM dd, yyyy")}</TableCell>
                    <TableCell>{format(leave.endDate, "MMM dd, yyyy")}</TableCell>
                    <TableCell>{leave.days} day{leave.days > 1 ? "s" : ""}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{leave.reason}</TableCell>
                    <TableCell>
                      <StatusBadge 
                        status={
                          leave.status === "approved" ? "success" : 
                          leave.status === "pending" ? "warning" : "error"
                        } 
                        text={leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No leave requests found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
