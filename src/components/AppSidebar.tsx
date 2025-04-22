
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
  { title: "Time Off Overview", icon: CalendarClock, path: "/time-off" },
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

const MenuItem = ({ item, isActive }: { item: { title: string; icon: any; path: string }, isActive: boolean }) => {
  const Icon = item.icon;
  
  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        asChild 
        tooltip={item.title}
        isActive={isActive}
      >
        <Link
          to={item.path}
          className={cn(
            "flex items-center gap-3 w-full transition-all duration-300",
            "hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-500/5",
            "hover:text-sidebar-accent-foreground group",
            "rounded-md overflow-hidden",
            isActive 
              ? "bg-gradient-to-r from-primary/20 to-blue-500/10 font-medium text-primary shadow-sm" 
              : "text-sidebar-foreground"
          )}
        >
          <span className={cn(
            "flex items-center justify-center p-1.5 rounded-md transition-all duration-300",
            isActive 
              ? "text-white bg-gradient-to-br from-primary to-blue-600 shadow-md" 
              : "text-sidebar-foreground bg-sidebar-accent/50 group-hover:bg-primary/10"
          )}>
            <Icon className="h-4 w-4" />
          </span>
          <span className={cn(
            "font-medium transition-all duration-300",
            isActive ? "scale-105" : ""
          )}>
            {item.title}
          </span>
          {isActive && (
            <span className="absolute right-0 h-full w-1 bg-primary rounded-l-md animate-pulse-slow" />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  const location = useLocation();
  const [timeOffOpen, setTimeOffOpen] = useState(
    location.pathname.includes("/time-off")
  );

  const isActive = (path: string) => {
    if (path === "/time-off") {
      return location.pathname.startsWith("/time-off");
    }
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="p-1.5 rounded-md bg-gradient-to-br from-primary to-blue-700 shadow-md">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
              Ensar HR
            </span>
            <span className="text-xs text-muted-foreground">Enterprise Edition</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem 
              key={item.path} 
              item={item} 
              isActive={isActive(item.path)} 
            />
          ))}

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
                    "hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-500/5",
                    "transition-all duration-300 group",
                    isActive("/time-off") 
                      ? "bg-gradient-to-r from-primary/20 to-blue-500/10 font-medium text-primary shadow-sm" 
                      : "text-sidebar-foreground",
                    "rounded-md"
                  )}
                  isActive={isActive("/time-off")}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "flex items-center justify-center p-1.5 rounded-md transition-all duration-300",
                      isActive("/time-off") 
                        ? "text-white bg-gradient-to-br from-primary to-blue-600 shadow-md" 
                        : "text-sidebar-foreground bg-sidebar-accent/50 group-hover:bg-primary/10"
                    )}>
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="font-medium">Time Off</span>
                  </div>
                  <svg
                    width="16"
                    height="16"
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
              <CollapsibleContent className="pl-10 mt-1 space-y-1 animate-slide-in-right">
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
                          "hover:bg-sidebar-accent/50 hover:text-primary/80",
                          "transition-all duration-300 rounded-md",
                          location.pathname === item.path 
                            ? "bg-sidebar-accent/70 font-medium text-primary border-l-2 border-primary pl-2" 
                            : ""
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

          {additionalItems.map((item) => (
            <MenuItem 
              key={item.path} 
              item={item} 
              isActive={isActive(item.path)} 
            />
          ))}
        </SidebarMenu>
        
        <div className="mt-8 px-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-blue-500/10 border border-primary/10 shadow-sm">
            <h4 className="font-semibold text-sm mb-2">Premium Support</h4>
            <p className="text-xs text-muted-foreground mb-3">Need help? Our premium support team is just a click away</p>
            <Link to="/help" className="text-xs font-medium text-primary hover:underline">Contact Support →</Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
