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

// Main menu items
const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "My Profile", icon: User, path: "/profile" },
  { title: "All Employees", icon: Users, path: "/employees" },
  { title: "Projects", icon: Briefcase, path: "/projects" },
];

// Time off submenu items
const timeOffItems = [
  { title: "Time Off Overview", icon: CalendarClock, path: "/time-off" },
  { title: "Holidays", icon: CalendarDays, path: "/time-off/holidays" },
  { title: "Leave Requests", icon: CalendarCheck, path: "/time-off/leave" },
  { title: "Allowances", icon: CalendarRange, path: "/time-off/allowances" }
];

// Additional menu items
const additionalItems = [
  { title: "Departments", icon: Building, path: "/departments" },
  { title: "Designations", icon: FileText, path: "/designations" },
  { title: "Skills & Expertise", icon: GraduationCap, path: "/skills" },
  { title: "Educations", icon: BookOpen, path: "/educations" },
  { title: "Learning", icon: GraduationCap, path: "/learning" },
  { title: "Attendance", icon: ClipboardCheck, path: "/attendance" },
  { title: "Assets", icon: Box, path: "/assets" },
  { title: "Templates", icon: LayoutTemplate, path: "/templates" },
  { title: "Help Center", icon: HelpCircle, path: "/help" },
];

export function AppSidebar() {
  const location = useLocation();
  const [timeOffOpen, setTimeOffOpen] = useState(
    location.pathname.includes("/time-off")
  );

  // Function to check if a route is active
  const isActive = (path: string) => {
    if (path === "/time-off") {
      return location.pathname.startsWith("/time-off");
    }
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">Ensar HR</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu>
          {/* Main menu items */}
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                isActive={isActive(item.path)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 w-full",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "transition-all duration-200 rounded-md",
                    isActive(item.path) && "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Time Off collapsible section */}
          <SidebarMenuItem>
            <Collapsible 
              open={timeOffOpen} 
              onOpenChange={setTimeOffOpen}
              className="w-full"
            >
              <CollapsibleTrigger className="w-full">
                <SidebarMenuButton 
                  className={cn(
                    "flex items-center justify-between w-full",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "transition-all duration-200",
                    isActive("/time-off") && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                    "rounded-md"
                  )}
                  isActive={isActive("/time-off")}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Time Off</span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("transition-transform", timeOffOpen && "transform rotate-180")}
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
              <CollapsibleContent className="pl-6 mt-1">
                {timeOffItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      variant="outline"
                      size="sm"
                      isActive={location.pathname === item.path}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-2 w-full py-1.5",
                          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          "transition-all duration-200 rounded-md",
                          location.pathname === item.path && "bg-sidebar-accent/50 font-medium text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon className="h-3.5 w-3.5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>

          {/* Additional menu items */}
          {additionalItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                isActive={isActive(item.path)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 w-full",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "transition-all duration-200 rounded-md",
                    isActive(item.path) && "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
