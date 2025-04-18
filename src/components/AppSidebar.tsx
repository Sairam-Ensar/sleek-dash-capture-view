
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Users,
  Briefcase,
  Clock,
  Building,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Box,
  FileText,
  Settings,
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

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "My Profile", icon: User, path: "/profile" },
  { title: "All Employees", icon: Users, path: "/employees" },
  { title: "Projects", icon: Briefcase, path: "/projects" },
  { title: "Time Off", icon: Clock, path: "/time-off" },
  { title: "Departments", icon: Building, path: "/departments" },
  { title: "Designations", icon: Settings, path: "/designations" },
  { title: "Skills & Expertise", icon: GraduationCap, path: "/skills" },
  { title: "Educations", icon: BookOpen, path: "/educations" },
  { title: "Learning", icon: GraduationCap, path: "/learning" },
  { title: "Attendance", icon: ClipboardCheck, path: "/attendance" },
  { title: "Assets", icon: Box, path: "/assets" },
  { title: "Templates", icon: FileText, path: "/templates" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <img src="/lovable-uploads/827c8d6f-70da-4a46-91f8-462f18f20e77.png" alt="Logo" className="h-8" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 w-full",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "transition-colors duration-200"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
