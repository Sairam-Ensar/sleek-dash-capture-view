
import { useNavigate } from "react-router-dom";
import { 
  CalendarCheck, CalendarDays, CalendarRange, 
  Clock, Download, PieChart, Plus 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader, PageHeaderAction } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";

export default function TimeOffOverview() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Time Off Dashboard"
        description="Manage leave, holidays, and time off allowances"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Time Off" },
        ]}
      >
        <PageHeaderAction>
          <Button onClick={() => navigate("/time-off/leave")}>
            <Plus className="mr-2 h-4 w-4" />
            Request Time Off
          </Button>
        </PageHeaderAction>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-blue-700">Leave Balance</CardTitle>
              <div className="p-2 bg-blue-100 rounded-full">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <CardDescription className="text-blue-600">Available days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">15 days</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 rounded-full bg-blue-200 flex-1">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: "60%" }}></div>
              </div>
              <span className="text-sm text-blue-600">15/25 used</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-green-700">Pending Requests</CardTitle>
              <div className="p-2 bg-green-100 rounded-full">
                <CalendarCheck className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <CardDescription className="text-green-600">Awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">2</div>
            <p className="text-sm text-green-600 mt-2">
              Next: 3 days vacation (May 10-12)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-amber-700">Upcoming Holidays</CardTitle>
              <div className="p-2 bg-amber-100 rounded-full">
                <CalendarDays className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <CardDescription className="text-amber-600">Next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-700">3</div>
            <p className="text-sm text-amber-600 mt-2">
              Next: Independence Day (Aug 15)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-purple-700">Team Absences</CardTitle>
              <div className="p-2 bg-purple-100 rounded-full">
                <CalendarRange className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <CardDescription className="text-purple-600">Current & upcoming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">1</div>
            <p className="text-sm text-purple-600 mt-2">
              1 team member on leave today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Recent Leave Requests</CardTitle>
              <CardDescription>Your recent time off requests</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate("/time-off/leave")}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 1, type: "Vacation", dates: "May 10-12, 2025", days: 3, status: "pending" },
                { id: 2, type: "Sick Leave", dates: "April 5-6, 2025", days: 2, status: "approved" },
                { id: 3, type: "Personal", dates: "March 15, 2025", days: 1, status: "rejected" }
              ].map((leave) => (
                <div key={leave.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{leave.type}</p>
                    <p className="text-sm text-muted-foreground">{leave.dates} ({leave.days} days)</p>
                  </div>
                  <StatusBadge 
                    status={
                      leave.status === "approved" ? "success" : 
                      leave.status === "pending" ? "warning" : "error"
                    } 
                    text={leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Leave Allocation Overview</CardTitle>
              <CardDescription>Your leave allocation for 2025</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate("/time-off/allowances")}>
              Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="space-y-1">
                <p className="font-medium">Total Allocated</p>
                <p className="text-2xl font-bold">25 days</p>
              </div>
              <div className="h-24 w-24">
                <PieChart className="h-full w-full text-blue-500" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { type: "Annual Leave", total: 20, used: 10, color: "bg-blue-500" },
                { type: "Sick Leave", total: 10, used: 5, color: "bg-green-500" },
                { type: "Personal", total: 5, used: 0, color: "bg-amber-500" }
              ].map((allocation, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{allocation.type}</span>
                    <span>{allocation.used}/{allocation.total} days</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div 
                      className={`h-2 rounded-full ${allocation.color}`} 
                      style={{ width: `${(allocation.used / allocation.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t flex justify-end">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
