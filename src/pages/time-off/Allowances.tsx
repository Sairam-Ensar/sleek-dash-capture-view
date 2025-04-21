
import { useState } from "react";
import { Check, Download, Edit2, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageHeader, PageHeaderAction } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StatusBadge } from "@/components/ui/status-badge";

interface LeaveAllowance {
  id: number;
  type: string;
  days: number;
  carryForward: boolean;
  encashable: boolean;
  proRated: boolean;
  status: "active" | "inactive";
}

const dummyAllowances: LeaveAllowance[] = [
  {
    id: 1,
    type: "Annual Leave",
    days: 20,
    carryForward: true,
    encashable: true,
    proRated: true,
    status: "active"
  },
  {
    id: 2,
    type: "Sick Leave",
    days: 12,
    carryForward: false,
    encashable: false,
    proRated: true,
    status: "active"
  },
  {
    id: 3,
    type: "Casual Leave",
    days: 5,
    carryForward: false,
    encashable: false,
    proRated: true,
    status: "active"
  },
  {
    id: 4,
    type: "Maternity Leave",
    days: 180,
    carryForward: false,
    encashable: false,
    proRated: false,
    status: "active"
  },
  {
    id: 5,
    type: "Paternity Leave",
    days: 5,
    carryForward: false,
    encashable: false,
    proRated: false,
    status: "active"
  }
];

export default function Allowances() {
  const [year, setYear] = useState("2025");
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1, currentYear + 2]
    .map(year => year.toString());
  
  const handleAddAllowance = () => {
    console.log("Add leave allowance clicked");
    // Implementation would open a modal for adding allowance
  };
  
  const handleEditAllowance = (id: number) => {
    console.log(`Edit allowance with ID ${id}`);
    // Implementation would open a modal for editing allowance
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Leave Allowances"
        description="Define and manage leave entitlements for employees"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Time Off", href: "/time-off" },
          { title: "Allowances" },
        ]}
      >
        <PageHeaderAction>
          <div className="flex items-center gap-2">
            <Select defaultValue={year} onValueChange={setYear}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleAddAllowance}>
              <Plus className="mr-2 h-4 w-4" />
              Add Leave Type
            </Button>
          </div>
        </PageHeaderAction>
      </PageHeader>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="bg-blue-50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-blue-800">Annual Leave</CardTitle>
            <CardDescription className="text-blue-600">Standard paid vacation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">20 Days</div>
            <p className="text-sm text-blue-600 mt-1">Max 5 days carry forward</p>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-green-800">Sick Leave</CardTitle>
            <CardDescription className="text-green-600">Health-related absences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">12 Days</div>
            <p className="text-sm text-green-600 mt-1">No carry forward</p>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-50 border-amber-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-800">Casual Leave</CardTitle>
            <CardDescription className="text-amber-600">Short personal absences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-700">5 Days</div>
            <p className="text-sm text-amber-600 mt-1">No carry forward</p>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50 border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-purple-800">Special Leave</CardTitle>
            <CardDescription className="text-purple-600">Maternity, paternity, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">Varies</div>
            <p className="text-sm text-purple-600 mt-1">Based on leave type</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Leave Types & Policies</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-1" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Leave Type</TableHead>
                <TableHead className="text-center">Days</TableHead>
                <TableHead className="text-center">Carry Forward</TableHead>
                <TableHead className="text-center">Encashable</TableHead>
                <TableHead className="text-center">Pro-Rated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyAllowances.map((allowance) => (
                <TableRow key={allowance.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{allowance.type}</TableCell>
                  <TableCell className="text-center">{allowance.days}</TableCell>
                  <TableCell className="text-center">
                    {allowance.carryForward ? 
                      <Check className="h-4 w-4 text-green-600 mx-auto" /> : 
                      <span>—</span>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {allowance.encashable ? 
                      <Check className="h-4 w-4 text-green-600 mx-auto" /> : 
                      <span>—</span>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {allowance.proRated ? 
                      <Check className="h-4 w-4 text-green-600 mx-auto" /> : 
                      <span>—</span>
                    }
                  </TableCell>
                  <TableCell>
                    <StatusBadge 
                      status={allowance.status === "active" ? "success" : "error"}
                      text={allowance.status.charAt(0).toUpperCase() + allowance.status.slice(1)} 
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleEditAllowance(allowance.id)}
                    >
                      <Edit2 className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Policy Settings</CardTitle>
            <CardDescription>Configure global leave policy settings</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Maximum Annual Carry Forward</label>
                <div className="flex items-center gap-2">
                  <Select defaultValue="5">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Days" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 5, 10, 15, 20].map(days => (
                        <SelectItem key={days} value={days.toString()}>{days}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-sm">days</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Leave Approval Flow</label>
                <Select defaultValue="manager-hr">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select approval flow" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">Manager Only</SelectItem>
                    <SelectItem value="hr">HR Only</SelectItem>
                    <SelectItem value="manager-hr">Manager then HR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Weekend Policy</label>
                <Select defaultValue="exclude">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select weekend policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="include">Include weekends</SelectItem>
                    <SelectItem value="exclude">Exclude weekends</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Holiday Policy</label>
                <Select defaultValue="exclude">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select holiday policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="include">Include holidays</SelectItem>
                    <SelectItem value="exclude">Exclude holidays</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Button>Save Policy Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
