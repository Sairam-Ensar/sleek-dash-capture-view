
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { EditableSection } from "@/components/ui/editable-section";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageHeader } from "@/components/ui/page-header";
import { ArrowLeft, Download, Edit, Trash2, Save, Plus, User } from "lucide-react";
import { toast } from "sonner";

const fallbackAvatars = [
  "/lovable-uploads/043cffa9-fc3a-4320-9d59-c843a95de8b0.png",
  "/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png",
  "/lovable-uploads/1bf0e48b-391c-4e7a-a5c1-58a4988b103d.png",
  "/lovable-uploads/827c8d6f-70da-4a46-91f8-462f18f20e77.png",
];

// Sample employee data
const employeeData = {
  "ES-500": {
    name: "Srinivas Keerthi",
    id: "ES-500",
    email: "srinivas@ensarsolutions.com",
    dob: "04/09/1981",
    mobile: "3249999999",
    avatar: fallbackAvatars[0],
    designation: "Senior Software Engineer",
    department: "Engineering",
    joiningDate: "01/05/2020",
    manager: "John Smith",
    location: "Hyderabad, India",
    employmentType: "Full-time",
    status: "Active",
    skills: [
      { name: "React", proficiency: "Expert", approved: true },
      { name: "TypeScript", proficiency: "Intermediate", approved: true },
      { name: "Node.js", proficiency: "Advanced", approved: false },
    ],
    attendance: {
      present: 18,
      absent: 2,
      leave: 1,
      total: 21,
      records: [
        { date: "2025-04-01", checkIn: "09:00 AM", checkOut: "06:00 PM", status: "Present" },
        { date: "2025-04-02", checkIn: "09:15 AM", checkOut: "06:30 PM", status: "Present" },
        { date: "2025-04-03", checkIn: "-", checkOut: "-", status: "Leave" },
      ]
    },
    education: [
      { degree: "B.Tech", institution: "IIT Delhi", year: "2015", field: "Computer Science" },
      { degree: "M.Tech", institution: "IIT Bombay", year: "2017", field: "Software Engineering" },
    ],
    learning: [
      { name: "AWS Certified Solutions Architect", completedOn: "2023", provider: "Amazon" },
      { name: "React Advanced Patterns", completedOn: "2024", provider: "Frontend Masters" },
    ],
    assets: [
      { name: "MacBook Pro", id: "LP-2023-001", assignedDate: "01/05/2022", returnDate: "-" },
      { name: "External Monitor", id: "MON-2023-034", assignedDate: "01/05/2022", returnDate: "-" },
    ]
  },
  "ES5": {
    name: "Nikhil Samanthula",
    id: "ES5",
    email: "nikhils@gmail.com",
    dob: "12/12/1990",
    mobile: "9898898787",
    avatar: fallbackAvatars[2],
    designation: "Frontend Developer",
    department: "Engineering",
    joiningDate: "10/15/2022",
    manager: "Sarah Johnson",
    location: "Bengaluru, India",
    employmentType: "Full-time",
    status: "Active",
    skills: [
      { name: "React", proficiency: "Expert", approved: true },
      { name: "JavaScript", proficiency: "Expert", approved: true },
    ],
    attendance: {
      present: 19,
      absent: 1,
      leave: 1,
      total: 21,
      records: [
        { date: "2025-04-01", checkIn: "09:30 AM", checkOut: "06:30 PM", status: "Present" },
      ]
    },
    education: [
      { degree: "B.Tech", institution: "NIT Warangal", year: "2018", field: "Information Technology" },
    ],
    learning: [
      { name: "React Performance Optimization", completedOn: "2023", provider: "Udemy" },
    ],
    assets: [
      { name: "Dell XPS", id: "LP-2022-045", assignedDate: "10/15/2022", returnDate: "-" },
    ]
  },
  "ee8": {
    name: "Harsha Sura",
    id: "ee8",
    email: "harshasura@gmail.com",
    dob: "03/26/1995",
    mobile: "9879879876",
    avatar: fallbackAvatars[1],
    designation: "UX Designer",
    department: "Design",
    joiningDate: "05/20/2021",
    manager: "Michael Brown",
    location: "Chennai, India",
    employmentType: "Full-time",
    status: "On Leave",
    skills: [
      { name: "Figma", proficiency: "Expert", approved: true },
      { name: "Adobe XD", proficiency: "Advanced", approved: true },
      { name: "UI Design", proficiency: "Expert", approved: true },
    ],
    attendance: {
      present: 15,
      absent: 0,
      leave: 6,
      total: 21,
      records: [
        { date: "2025-04-01", checkIn: "-", checkOut: "-", status: "Leave" },
      ]
    },
    education: [
      { degree: "B.Des", institution: "NID Ahmedabad", year: "2019", field: "User Experience Design" },
    ],
    learning: [
      { name: "Advanced UI Animation", completedOn: "2023", provider: "DesignCourse" },
    ],
    assets: [
      { name: "MacBook Pro", id: "LP-2021-089", assignedDate: "05/20/2021", returnDate: "-" },
      { name: "iPad Pro", id: "PAD-2022-012", assignedDate: "01/10/2022", returnDate: "-" },
    ]
  },
  "ES3": {
    name: "Katta Sulekhya",
    id: "ES3",
    email: "kattasulekhya@gmail.com",
    dob: "12/08/1993",
    mobile: "9898898787",
    avatar: fallbackAvatars[3],
    designation: "Backend Developer",
    department: "Engineering",
    joiningDate: "08/01/2021",
    manager: "David Wilson",
    location: "Pune, India",
    employmentType: "Contract",
    status: "Active",
    skills: [
      { name: "Java", proficiency: "Expert", approved: true },
      { name: "Spring Boot", proficiency: "Advanced", approved: true },
      { name: "AWS", proficiency: "Intermediate", approved: false },
    ],
    attendance: {
      present: 20,
      absent: 1,
      leave: 0,
      total: 21,
      records: [
        { date: "2025-04-01", checkIn: "09:00 AM", checkOut: "06:00 PM", status: "Present" },
      ]
    },
    education: [
      { degree: "B.Tech", institution: "JNTU Hyderabad", year: "2017", field: "Computer Science" },
    ],
    learning: [
      { name: "Microservices Architecture", completedOn: "2022", provider: "Pluralsight" },
      { name: "AWS DevOps", completedOn: "2023", provider: "A Cloud Guru" },
    ],
    assets: [
      { name: "Dell Latitude", id: "LP-2021-102", assignedDate: "08/01/2021", returnDate: "-" },
    ]
  }
};

export default function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showAddEducation, setShowAddEducation] = useState(false);
  const [showAddLearning, setShowAddLearning] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  // Get employee data based on ID
  const employee = employeeData[id as keyof typeof employeeData] || null;

  if (!employee) {
    return (
      <div className="min-h-screen bg-[#F7F8FA] px-4 py-8">
        <Card className="max-w-lg mx-auto p-6">
          <CardHeader className="text-center">
            <CardTitle>Employee Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">The employee you're looking for does not exist or has been removed.</p>
            <Button onClick={() => navigate('/employees')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Employees
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Employee details updated successfully");
  };

  const handleDelete = () => {
    setShowDeleteConfirm(false);
    toast.success("Employee deleted successfully");
    navigate('/employees');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getBadgeColorByStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "on leave": return "bg-yellow-100 text-yellow-800";
      case "resigned": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const ProfileHeader = () => (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white p-6 rounded-xl shadow-sm mb-6">
      <Avatar className="w-24 h-24 border-4 border-blue-100">
        <AvatarImage src={employee.avatar} alt={employee.name} />
        <AvatarFallback>
          <User className="w-12 h-12 text-gray-400" />
        </AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{employee.name}</h1>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-gray-600">{employee.designation}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{employee.department}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColorByStatus(employee.status)}`}>
              {employee.status}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="text-sm">
            <span className="text-gray-500">Employee ID:</span>{" "}
            <span className="font-medium">{employee.id}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Joined:</span>{" "}
            <span className="font-medium">{employee.joiningDate}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Type:</span>{" "}
            <span className="font-medium">{employee.employmentType}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ActionButtons = () => (
    <div className="flex gap-2 mb-6">
      <Button variant="outline" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="flex-grow"></div>
      {!isEditing ? (
        <>
          <Button variant="outline" onClick={handleEdit} className="text-blue-600 border-blue-200 hover:bg-blue-50">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowDeleteConfirm(true)} 
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </>
      ) : (
        <Button onClick={handleSave} className="bg-primary">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8">
      <PageHeader 
        title="Employee Details" 
        description="View and manage employee information"
        showBackButton
      />

      <ProfileHeader />
      <ActionButtons />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="w-full bg-white border shadow-sm p-1 rounded-lg">
          <TabsTrigger className="flex-1" value="basic">Basic Information</TabsTrigger>
          <TabsTrigger className="flex-1" value="employment">Employment</TabsTrigger>
          <TabsTrigger className="flex-1" value="skills">Skills & Expertise</TabsTrigger>
          <TabsTrigger className="flex-1" value="attendance">Attendance</TabsTrigger>
          <TabsTrigger className="flex-1" value="education">Education</TabsTrigger>
          <TabsTrigger className="flex-1" value="learning">Learning & Development</TabsTrigger>
          <TabsTrigger className="flex-1" value="assets">Assets</TabsTrigger>
        </TabsList>

        {/* Basic Information Tab */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Full Name</label>
                  <Input value={employee.name} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Employee ID</label>
                  <Input value={employee.id} readOnly />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <Input value={employee.email} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Mobile</label>
                  <Input value={employee.mobile} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                  <Input value={employee.dob} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Date of Joining</label>
                  <Input value={employee.joiningDate} readOnly={!isEditing} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Employment Tab */}
        <TabsContent value="employment">
          <Card>
            <CardHeader>
              <CardTitle>Employment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Designation</label>
                  <Input value={employee.designation} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Department</label>
                  <Input value={employee.department} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Manager/Supervisor</label>
                  <Input value={employee.manager} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Work Location</label>
                  <Input value={employee.location} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Employment Type</label>
                  <Input value={employee.employmentType} readOnly={!isEditing} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <Input value={employee.status} readOnly={!isEditing} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Skills & Expertise</CardTitle>
              <Button size="sm" onClick={() => setShowAddSkill(true)}>
                <Plus className="mr-1 h-4 w-4" />
                Add Skill
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Skill</th>
                      <th className="text-left py-3 px-4">Proficiency</th>
                      <th className="text-left py-3 px-4">Approval Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.skills.map((skill, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{skill.name}</td>
                        <td className="py-3 px-4">{skill.proficiency}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${skill.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {skill.approved ? 'Approved' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {isEditing && (
                            <Button variant="ghost" size="sm" className="text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Attendance Summary</CardTitle>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-green-50 border-green-100">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-green-600">{employee.attendance.present}</div>
                    <div className="text-sm text-green-700 mt-1">Present Days</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-100">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-red-600">{employee.attendance.absent}</div>
                    <div className="text-sm text-red-700 mt-1">Absent Days</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-50 border-yellow-100">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-600">{employee.attendance.leave}</div>
                    <div className="text-sm text-yellow-700 mt-1">Leave Days</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{employee.attendance.total}</div>
                    <div className="text-sm text-blue-700 mt-1">Total Working Days</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Check In</th>
                      <th className="text-left py-3 px-4">Check Out</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.attendance.records.map((record, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{record.date}</td>
                        <td className="py-3 px-4">{record.checkIn}</td>
                        <td className="py-3 px-4">{record.checkOut}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            record.status === 'Present' ? 'bg-green-100 text-green-800' : 
                            record.status === 'Absent' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Education Background</CardTitle>
              <Button size="sm" onClick={() => setShowAddEducation(true)}>
                <Plus className="mr-1 h-4 w-4" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Degree</th>
                      <th className="text-left py-3 px-4">Institution</th>
                      <th className="text-left py-3 px-4">Field of Study</th>
                      <th className="text-left py-3 px-4">Year</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.education.map((edu, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{edu.degree}</td>
                        <td className="py-3 px-4">{edu.institution}</td>
                        <td className="py-3 px-4">{edu.field}</td>
                        <td className="py-3 px-4">{edu.year}</td>
                        <td className="py-3 px-4 text-right">
                          {isEditing && (
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm" className="text-blue-500">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Learning Tab */}
        <TabsContent value="learning">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Learning & Development</CardTitle>
              <Button size="sm" onClick={() => setShowAddLearning(true)}>
                <Plus className="mr-1 h-4 w-4" />
                Add Learning
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Course/Certification</th>
                      <th className="text-left py-3 px-4">Provider</th>
                      <th className="text-left py-3 px-4">Completed On</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.learning.map((course, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{course.name}</td>
                        <td className="py-3 px-4">{course.provider}</td>
                        <td className="py-3 px-4">{course.completedOn}</td>
                        <td className="py-3 px-4 text-right">
                          {isEditing && (
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm" className="text-blue-500">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assets Tab */}
        <TabsContent value="assets">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Asset Name</th>
                      <th className="text-left py-3 px-4">Asset ID</th>
                      <th className="text-left py-3 px-4">Assigned Date</th>
                      <th className="text-left py-3 px-4">Return Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.assets.map((asset, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{asset.name}</td>
                        <td className="py-3 px-4">{asset.id}</td>
                        <td className="py-3 px-4">{asset.assignedDate}</td>
                        <td className="py-3 px-4">{asset.returnDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {employee.name}'s record? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Skill Dialog */}
      <Dialog open={showAddSkill} onOpenChange={setShowAddSkill}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Skill</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Skill Name</label>
              <Input placeholder="e.g. JavaScript" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Proficiency Level</label>
              <Input placeholder="e.g. Expert, Intermediate, Beginner" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAddSkill(false)}>Cancel</Button>
              <Button type="button" onClick={() => {
                toast.success("Skill added successfully");
                setShowAddSkill(false);
              }}>Add Skill</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Education Dialog */}
      <Dialog open={showAddEducation} onOpenChange={setShowAddEducation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Education</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Degree</label>
              <Input placeholder="e.g. Bachelor of Science" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Institution</label>
              <Input placeholder="e.g. University of California" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Field of Study</label>
              <Input placeholder="e.g. Computer Science" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Year</label>
              <Input placeholder="e.g. 2020" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAddEducation(false)}>Cancel</Button>
              <Button type="button" onClick={() => {
                toast.success("Education added successfully");
                setShowAddEducation(false);
              }}>Add Education</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Learning Dialog */}
      <Dialog open={showAddLearning} onOpenChange={setShowAddLearning}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Learning</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Course/Certification Name</label>
              <Input placeholder="e.g. AWS Certified Solutions Architect" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Provider</label>
              <Input placeholder="e.g. Udemy, Coursera, AWS" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Completed On</label>
              <Input placeholder="e.g. 2023" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowAddLearning(false)}>Cancel</Button>
              <Button type="button" onClick={() => {
                toast.success("Learning added successfully");
                setShowAddLearning(false);
              }}>Add Learning</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
