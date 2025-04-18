
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  User, Briefcase, Clock, Building2, Users, Award, GraduationCap, 
  BookOpen, ClipboardList, Package, FileText, Bell, Search, Plus, Calendar,
  Send, Phone, Mail, CheckCircle2, AlertCircle, Clock3, Activity, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Chart components
import {
  AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Sample data for charts
const attendanceData = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 83 },
  { name: 'Mar', value: 88 },
  { name: 'Apr', value: 91 },
  { name: 'May', value: 89 },
  { name: 'Jun', value: 93 },
  { name: 'Jul', value: 92 }
];

const departmentData = [
  { name: 'IT', value: 28 },
  { name: 'HR', value: 15 },
  { name: 'Finance', value: 17 },
  { name: 'Marketing', value: 20 },
  { name: 'Operations', value: 20 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Dashboard = () => {
  const { toast } = useToast();
  const [taskDetailsOpen, setTaskDetailsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [leaveRequestOpen, setLeaveRequestOpen] = useState(false);
  
  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setTaskDetailsOpen(true);
  };
  
  const handleTaskComplete = (taskId: string) => {
    toast({
      title: "Task Completed",
      description: "The task has been marked as complete.",
    });
    setTaskDetailsOpen(false);
  };

  const handleLeaveRequest = () => {
    toast({
      title: "Leave Request Submitted",
      description: "Your leave request has been submitted for approval."
    });
    setLeaveRequestOpen(false);
  };

  // Tasks data
  const tasks = [
    {
      id: '1',
      title: 'Review pending leave requests',
      due: '2025-04-20',
      priority: 'High',
      description: 'Review and approve/deny all pending leave requests from employees.',
      assignedBy: 'HR Manager',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Schedule quarterly performance reviews',
      due: '2025-04-25',
      priority: 'Medium',
      description: 'Set up the quarterly performance review schedule for all departments.',
      assignedBy: 'Department Head',
      status: 'pending'
    },
    {
      id: '3',
      title: 'Update employee handbook',
      due: '2025-04-30',
      priority: 'Low',
      description: 'Review and update the employee handbook with new policies.',
      assignedBy: 'HR Director',
      status: 'completed'
    },
    {
      id: '4',
      title: 'Plan team building activity',
      due: '2025-05-05',
      priority: 'Medium',
      description: 'Organize team building activities for the company retreat.',
      assignedBy: 'CEO',
      status: 'pending'
    }
  ];

  // Recent employees data
  const recentEmployees = [
    {
      id: 'ES-500',
      name: 'Srinivas Keerthi',
      role: 'Senior Developer',
      department: 'IT',
      email: 'srinivas@ensarsolutions.com'
    },
    {
      id: 'ee8',
      name: 'Harsha Sura',
      role: 'Product Manager',
      department: 'Marketing',
      email: 'harshasura@gmail.com'
    },
    {
      id: 'ES5',
      name: 'Nikhil Samanthula',
      role: 'UI/UX Designer',
      department: 'Design',
      email: 'nikhils@gmail.com'
    }
  ];

  // Activity data
  const activities = [
    {
      id: '1',
      user: 'Srinivas Keerthi',
      action: 'submitted a leave request for',
      target: 'Annual Leave',
      time: '3 hours ago',
      status: 'Pending',
      icon: Clock
    },
    {
      id: '2',
      user: 'Harsha Sura',
      action: 'completed the training on',
      target: 'Data Security',
      time: '5 hours ago',
      status: 'Completed',
      icon: CheckCircle2
    },
    {
      id: '3',
      user: 'Nikhil Samanthula',
      action: 'was assigned to',
      target: 'HR Portal Project',
      time: 'Yesterday',
      status: 'Completed',
      icon: CheckCircle2
    },
    {
      id: '4',
      user: 'Admin',
      action: 'updated the company policy on',
      target: 'Remote Work',
      time: '2 days ago',
      status: 'Completed',
      icon: CheckCircle2
    }
  ];

  // Events data
  const events = [
    {
      id: '1',
      title: 'Quarterly Team Meeting',
      date: 'April 28, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Conference Room',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Employee Training Workshop',
      date: 'May 5, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Training Center',
      color: 'green'
    },
    {
      id: '3',
      title: 'Company Anniversary Celebration',
      date: 'May 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Hyatt Regency Downtown',
      color: 'purple'
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-7xl">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin User</p>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <div className="relative mr-2">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search employees, projects..."
              className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>
          <Button
            size="sm"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => toast({
              title: "Agent feature",
              description: "AI assistant is coming soon!",
            })}
          >
            AGENT
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="ml-2"
            onClick={() => toast({
              title: "Help Desk",
              description: "Support team notified, they will reach out shortly.",
            })}
          >
            HELP DESK
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-blue-500 hover:translate-y-[-5px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">123</div>
                <p className="text-xs text-green-500 font-medium">5% increase</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-green-500 hover:translate-y-[-5px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">15</div>
                <p className="text-xs text-green-500 font-medium">2 new this month</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-amber-500 hover:translate-y-[-5px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Leave Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-amber-600 font-medium">Requires attention</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-purple-500 hover:translate-y-[-5px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">5</div>
                <p className="text-xs text-muted-foreground font-medium">No change</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Monthly Attendance Rate (%)</CardTitle>
            <Button variant="link" className="text-sm text-primary">
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pl-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={attendanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorAttendance)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Employees by Department</CardTitle>
            <Button variant="link" className="text-sm text-primary">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Employees & Tasks Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Recent Employees</CardTitle>
            <Button variant="link" className="text-sm text-primary">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentEmployees.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{employee.name}</h4>
                      <p className="text-xs text-muted-foreground">{employee.role} • {employee.department}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1.5 rounded-full hover:bg-muted-foreground/10" onClick={() => {
                      toast({
                        title: "Email Sent",
                        description: `Email to ${employee.name} has been initiated.`
                      });
                    }}>
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-muted-foreground/10" onClick={() => {
                      toast({
                        title: "Call Initiated",
                        description: `Calling ${employee.name}...`
                      });
                    }}>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-muted-foreground/10" onClick={() => {
                      toast({
                        title: "Profile Options",
                        description: "View profile, edit details, or add notes."
                      });
                    }}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-muted-foreground"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">Tasks</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">1 of 4 completed</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => {
                toast({
                  title: "Add Task Feature",
                  description: "This feature will be available soon.",
                });
              }}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" /> Add new task
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className={`p-4 hover:bg-muted/30 transition-colors cursor-pointer ${
                    task.status === 'completed' ? 'bg-muted/20' : ''
                  }`}
                  onClick={() => handleTaskClick(task)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center ${
                        task.status === 'completed' ? 'bg-green-100' : 'bg-muted'
                      }`}>
                        {task.status === 'completed' ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <div className="h-3 w-3 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <h4 className={`text-sm font-medium ${
                          task.status === 'completed' ? 'line-through text-muted-foreground' : ''
                        }`}>{task.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Due: {task.due}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        task.priority === 'High' 
                          ? 'border-red-200 bg-red-100 text-red-800 hover:bg-red-100' 
                          : task.priority === 'Medium'
                            ? 'border-amber-200 bg-amber-100 text-amber-800 hover:bg-amber-100'
                            : 'border-green-200 bg-green-100 text-green-800 hover:bg-green-100'
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Help Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <Button variant="link" className="text-sm text-primary">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {activities.map((activity) => (
                <div key={activity.id} className="flex p-4 hover:bg-muted/20 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium">{activity.user} {activity.action} <Link to="#" className="text-primary hover:underline">{activity.target}</Link></h4>
                      <Badge 
                        variant={activity.status === 'Pending' ? 'outline' : 'secondary'} 
                        className={
                          activity.status === 'Pending' 
                            ? 'border-amber-200 bg-amber-100 text-amber-800 hover:bg-amber-100' 
                            : 'bg-green-100 border-green-200 text-green-800 hover:bg-green-100'
                        }
                      >
                        {activity.status === 'Pending' ? (
                          <span className="flex items-center">
                            <Clock3 className="mr-1 h-3 w-3" /> {activity.status}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> {activity.status}
                          </span>
                        )}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-blue-50 border-blue-200 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">Need guidance using the platform?</h3>
                  <p className="text-sm text-blue-700 mt-1 mb-4">Our comprehensive documentation and support team is here to help.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Activity className="mr-2 h-4 w-4" /> Get Started
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Upcoming Company Events</CardTitle>
              <Button variant="link" className="text-sm text-primary">
                View Calendar <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {events.map((event) => (
                  <div key={event.id} className="p-4 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start">
                      <div className={`px-3 py-2 rounded-md mr-4 bg-${event.color}-100 text-${event.color}-800 font-medium text-center min-w-[70px]`}>
                        <div className="text-xs">{event.date.split(',')[0].split(' ')[0]}</div>
                        <div className="text-xl font-semibold">{event.date.split(',')[0].split(' ')[1]}</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                        <p className="text-xs text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Task Details Dialog */}
      <Dialog open={taskDetailsOpen} onOpenChange={setTaskDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedTask?.title}</DialogTitle>
            <DialogDescription className="pt-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm">{selectedTask?.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Due Date</p>
                    <p className="text-sm font-medium">{selectedTask?.due}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Priority</p>
                    <Badge 
                      variant="outline" 
                      className={
                        selectedTask?.priority === 'High' 
                          ? 'border-red-200 bg-red-100 text-red-800 hover:bg-red-100' 
                          : selectedTask?.priority === 'Medium'
                            ? 'border-amber-200 bg-amber-100 text-amber-800 hover:bg-amber-100'
                            : 'border-green-200 bg-green-100 text-green-800 hover:bg-green-100'
                      }
                    >
                      {selectedTask?.priority}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground">Assigned By</p>
                  <p className="text-sm font-medium">{selectedTask?.assignedBy}</p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button 
              variant="outline" 
              onClick={() => setTaskDetailsOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => handleTaskComplete(selectedTask?.id)}
              className="bg-green-600 hover:bg-green-700 text-white"
              disabled={selectedTask?.status === 'completed'}
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              {selectedTask?.status === 'completed' ? 'Completed' : 'Mark as Complete'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Leave Request Dialog */}
      <Dialog open={leaveRequestOpen} onOpenChange={setLeaveRequestOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Submit Leave Request</DialogTitle>
            <DialogDescription>
              Fill in the details for your leave request.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="from-date" className="text-sm font-medium">From Date</label>
                <input 
                  id="from-date"
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="to-date" className="text-sm font-medium">To Date</label>
                <input 
                  id="to-date"
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md text-sm" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="leave-type" className="text-sm font-medium">Leave Type</label>
              <select 
                id="leave-type"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Personal Leave</option>
                <option>Bereavement Leave</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-medium">Reason</label>
              <textarea 
                id="reason"
                className="w-full p-2 border border-gray-300 rounded-md text-sm min-h-[100px]"
                placeholder="Briefly describe your reason for leave..."
              ></textarea>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button 
                variant="outline" 
                type="button"
                onClick={() => setLeaveRequestOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleLeaveRequest}
              >
                <Send className="mr-2 h-4 w-4" /> Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
