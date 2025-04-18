
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
  BarChart3,
  Shield,
  HelpCircle,
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
  { title: "Training", icon: GraduationCap, path: "/training" },
  { title: "Documentation", icon: BookOpen, path: "/docs" },
  { title: "Attendance", icon: ClipboardCheck, path: "/attendance" },
  { title: "Assets", icon: Box, path: "/assets" },
  { title: "Reports", icon: BarChart3, path: "/reports" },
  { title: "Security", icon: Shield, path: "/security" },
  { title: "Help Center", icon: HelpCircle, path: "/help" },
  { title: "Settings", icon: Settings, path: "/settings" }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">Ensar HR</span>
        </div>
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
