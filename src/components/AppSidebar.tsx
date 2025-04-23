import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Users,
  Briefcase,
  CalendarClock,
  Building,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Box,
  HelpCircle,
  Calendar,
  Clock,
  CalendarDays,
  CalendarCheck,
  CalendarRange,
  LayoutTemplate,
  FileText,
  Shield,
  Bell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "My Profile", icon: User, path: "/profile" },
  { title: "All Employees", icon: Users, path: "/employees" },
  { title: "Projects", icon: Briefcase, path: "/projects" },
];

const timeOffItems = [
  { title: "Time Off Overview", icon: Clock, path: "/time-off" },
  { title: "Holidays", icon: CalendarDays, path: "/time-off/holidays" },
  { title: "Leave Requests", icon: CalendarCheck, path: "/time-off/leave" },
  { title: "Allowances", icon: CalendarRange, path: "/time-off/allowances" }
];

const additionalItems = [
  { title: "Departments", icon: Building, path: "/departments" },
  { title: "Designations", icon: FileText, path: "/designations" },
  { title: "Skills & Expertise", icon: GraduationCap, path: "/skills" },
  { title: "Educations", icon: BookOpen, path: "/educations" },
  { title: "Learning", icon: GraduationCap, path: "/learning" },
  { title: "Attendance", icon: ClipboardCheck, path: "/attendance" },
  { title: "Assets", icon: Box, path: "/assets" },
  { title: "Templates", icon: LayoutTemplate, path: "/templates" },
  { title: "Notifications", icon: Bell, path: "/notifications" },
  { title: "Help Center", icon: HelpCircle, path: "/help" },
];

export function AppSidebar() {
  const location = useLocation();
  const [timeOffOpen, setTimeOffOpen] = useState(location.pathname.startsWith("/time-off"));

  const isActive = (path: string) => {
    if (path === "/time-off") {
      return location.pathname.startsWith("/time-off");
    }
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b-0 bg-white">
        <div className="flex items-center gap-4 px-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-xl transition font-extrabold text-indigo-700 hover:bg-indigo-50"
          >
            <div className="p-2 rounded-xl bg-indigo-600">
              <LayoutDashboard className="h-7 w-7 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">Ensar HR</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white border-r px-4 py-6 min-h-screen">
        <SidebarMenu>
          <ul className="space-y-1 mb-4">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.path)}
                  className={cn(
                    "gap-3 rounded-lg font-medium px-4 py-2 transition hover:bg-indigo-50",
                    isActive(item.path) ? "bg-indigo-100 text-indigo-700" : "text-gray-700"
                  )}
                >
                  <Link to={item.path} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </ul>
          <div className="mb-4">
            <Collapsible
              open={timeOffOpen}
              onOpenChange={setTimeOffOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="w-full">
                <SidebarMenuButton
                  isActive={isActive("/time-off")}
                  className={cn(
                    "flex items-center w-full rounded-lg px-4 py-2 font-medium transition hover:bg-indigo-50 justify-between",
                    isActive("/time-off") ? "bg-indigo-100 text-indigo-700" : "text-gray-700"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    Time Off
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("transition-transform duration-300", timeOffOpen && "transform rotate-180")}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-7 mt-1 border-l border-indigo-100 space-y-1">
                {timeOffItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.path)}
                      className={cn(
                        "gap-3 rounded-lg font-medium px-4 py-2 transition hover:bg-indigo-50",
                        isActive(item.path) ? "bg-indigo-100 text-indigo-700" : "text-gray-700"
                      )}
                    >
                      <Link to={item.path} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
          <ul className="space-y-1">
            {additionalItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.path)}
                  className={cn(
                    "gap-3 rounded-lg font-medium px-4 py-2 transition hover:bg-indigo-50",
                    isActive(item.path) ? "bg-indigo-100 text-indigo-700" : "text-gray-700"
                  )}
                >
                  <Link to={item.path} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </ul>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
