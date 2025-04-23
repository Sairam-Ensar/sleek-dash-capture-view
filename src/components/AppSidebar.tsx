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

const premiumSidebarBg = "bg-gradient-to-br from-blue-200/90 via-white/80 to-purple-100/70 backdrop-blur-xl border-r border-blue-200/50 shadow-2xl";
const sidebarSection = "rounded-xl bg-white/60 shadow-md p-4 my-3";

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
        className={cn(
          "gap-3 rounded-xl px-4 py-2 shadow hover:scale-105 transition-all duration-300",
          isActive 
            ? "bg-gradient-to-r from-primary/80 to-blue-600/90 font-bold text-white shadow-lg" 
            : "bg-white/40 text-sidebar-foreground"
        )}
      >
        <Link
          to={item.path}
          className={cn(
            "flex items-center gap-3 w-full",
            isActive 
              ? ""
              : "hover:bg-blue-100/40 hover:text-primary"
          )}
        >
          <span className={cn(
            "flex items-center justify-center p-2 rounded-lg transition-all duration-200",
            isActive 
              ? "text-white bg-gradient-to-r from-primary to-blue-800 shadow-md" 
              : "text-sidebar-foreground bg-sidebar-accent/80 group-hover:bg-primary/10"
          )}>
            <Icon className="h-5 w-5" />
          </span>
          <span className={cn(
            "font-medium text-base",
            isActive ? "scale-105" : ""
          )}>
            {item.title}
          </span>
          {isActive && (
            <span className="absolute right-0 h-full w-1 bg-gradient-to-b from-primary/90 to-blue-500/90 rounded-l-md animate-pulse-slow" />
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
      <SidebarHeader className="p-6 border-b-0">
        <div className="flex items-center gap-4 px-2">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-3 glass-morphism px-3 py-2 rounded-2xl hover:scale-105 transition"
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-primary to-blue-700 shadow-xl">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                Ensar HR
              </span>
              <span className="text-xs text-muted-foreground font-semibold tracking-wide">Enterprise Edition</span>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className={premiumSidebarBg + " px-5 py-4 min-h-screen rounded-r-3xl"}>
        <SidebarMenu>
          <div className={sidebarSection}>
            {menuItems.map((item) => (
              <MenuItem 
                key={item.path} 
                item={item} 
                isActive={isActive(item.path)} 
              />
            ))}
          </div>

          <div className={sidebarSection}>
            <SidebarMenuItem>
              <Collapsible 
                open={timeOffOpen} 
                onOpenChange={setTimeOffOpen}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full">
                  <SidebarMenuButton 
                    className={cn(
                      "flex items-center justify-between w-full rounded-xl px-4 py-2 font-semibold",
                      isActive("/time-off") 
                        ? "bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg" 
                        : "bg-white/40 text-sidebar-foreground"
                    )}
                    isActive={isActive("/time-off")}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex items-center justify-center p-2 rounded-lg",
                        isActive("/time-off") 
                          ? "text-white bg-gradient-to-r from-primary to-blue-800" 
                          : "text-sidebar-foreground bg-sidebar-accent/90 group-hover:bg-primary/10"
                      )}>
                        <Clock className="h-5 w-5" />
                      </span>
                      <span className="font-bold text-base">Time Off</span>
                    </div>
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
                <CollapsibleContent className="pl-10 mt-2 space-y-1 animate-slide-in-right border-l-2 border-blue-200/60">
                  {timeOffItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title}
                        variant="outline"
                        size="sm"
                        isActive={location.pathname === item.path}
                        className={cn("rounded-lg px-2 py-2", location.pathname === item.path ? "bg-blue-100 font-bold" : "bg-white/70")}
                      >
                        <Link
                          to={item.path}
                          className={cn(
                            "flex items-center gap-2 w-full text-base",
                            "hover:bg-blue-200/30 hover:text-primary transition rounded-lg px-2",
                            location.pathname === item.path 
                              ? "font-bold text-blue-700" 
                              : "text-sidebar-foreground"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          </div>

          <div className={sidebarSection}>
            {additionalItems.map((item) => (
              <MenuItem 
                key={item.path} 
                item={item} 
                isActive={isActive(item.path)} 
              />
            ))}
          </div>
        </SidebarMenu>
        
        <div className="mt-7 px-2">
          <div className="p-5 rounded-2xl glass-morphism bg-gradient-to-br from-primary/30 to-blue-500/30 border border-primary/10 shadow-lg">
            <h4 className="font-bold text-base mb-2 text-gradient-primary">Premium Support</h4>
            <p className="text-xs text-muted-foreground mb-3 font-medium">Need help? Our premium support team is just a click away</p>
            <Link to="/help" className="text-xs font-semibold text-primary hover:underline">Contact Support →</Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
