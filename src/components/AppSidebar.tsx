
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
import { ActionDialog } from "@/components/ui/action-dialog";
import { Button } from "@/components/ui/button";

const premiumSidebarBg = "bg-gradient-to-br from-[#E5DEFF] via-[#e9e4fa] to-[#F1F6FF] border-r border-[#d3bfff]/40 shadow-[0_4px_32px_rgba(120,100,255,0.06)]";
const sidebarSection = "rounded-2xl glass-morphism bg-gradient-to-tr from-white/60 via-[#f7fafe]/70 to-[#ece7ff]/90 shadow-lg p-5 my-5 border border-[#ede8fe] backdrop-blur-md";

const sidebarMenuActions = {
  "Dashboard": ["View reports", "Create quick action"],
  "My Profile": ["View profile", "Edit info", "Change password"],
  "All Employees": ["Add new employee", "Import", "Export"],
  "Projects": ["Create project", "Manage teams"],
  "Time Off": ["View summary", "Apply for leave"],
  "Time Off Overview": ["Request time off", "Check calendar"],
  "Holidays": ["Add holiday", "Sync calendar"],
  "Leave Requests": ["Approve leave", "Reject leave", "Comment"],
  "Allowances": ["Edit allowances", "View balance"],
  "Departments": ["Add department", "Edit", "Remove"],
  "Designations": ["Add designation", "Batch import"],
  "Skills & Expertise": ["Add skill", "Edit skill"],
  "Educations": ["Add education", "Remove entry"],
  "Learning": ["View trainings", "Enroll in course"],
  "Attendance": ["Mark attendance", "Download report"],
  "Assets": ["Assign asset", "Return asset"],
  "Templates": ["Create template", "Edit template"],
  "Notifications": ["Mark all read", "Settings"],
  "Help Center": ["Contact support", "View FAQ"],
};

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

const MenuItemWithPopup = ({ item, isActive }: { item: { title: string; icon: any; path: string }, isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={item.title}
          isActive={isActive}
          className={cn(
            "gap-3 rounded-2xl font-bold transition-all duration-200 shadow-md hover:scale-105 px-5 py-3 border-2",
            isActive
              ? "bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 text-white border-indigo-300 shadow-2xl"
              : "bg-gradient-to-r from-white/50 via-[#ece7ff]/60 to-[#e3ecff]/80 text-[#4B389F] hover:text-purple-900 border-[#e5e0f7]"
          )}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <span
            className={cn(
              "flex items-center justify-center p-2 rounded-xl transition-all duration-200",
              isActive ? "bg-gradient-to-r from-purple-700 to-blue-600 text-white shadow-xl" : "bg-gradient-to-r from-white/50 via-purple-100/30 to-indigo-100/50 text-indigo-500"
            )}
          >
            <Icon className="h-6 w-6" />
          </span>
          <span className={cn("font-semibold text-lg", isActive ? "text-white" : "text-indigo-900")}>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      {/* Popup for actions on menu click */}
      <ActionDialog
        title={item.title + " Actions"}
        open={open}
        onOpenChange={setOpen}
        size="md"
        className="rounded-3xl"
      >
        <div className="flex flex-col gap-3 pt-2 pb-4">
          {sidebarMenuActions[item.title]?.map((action) => (
            <Button key={action} variant="outline" className="font-semibold flex justify-start text-indigo-700 hover:bg-indigo-100 transition">{action}</Button>
          ))}
        </div>
      </ActionDialog>
    </>
  );
};

export function AppSidebar() {
  const location = useLocation();
  const [timeOffOpen, setTimeOffOpen] = useState(location.pathname.includes("/time-off"));

  const isActive = (path: string) => {
    if (path === "/time-off") {
      return location.pathname.startsWith("/time-off");
    }
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-8 border-b-0">
        <div className="flex items-center gap-5 px-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:scale-110 transition font-extrabold bg-gradient-to-br from-indigo-400/90 via-purple-200/60 to-white shadow-2xl border border-indigo-200/70"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-purple-400/90 shadow-2xl">
              <Shield className="h-9 w-9 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-indigo-900 via-purple-700 to-blue-400 bg-clip-text text-transparent font-extrabold text-2xl drop-shadow">Ensar HR</span>
              <span className="text-sm text-indigo-600 font-bold tracking-wider uppercase">Enterprise Edition</span>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className={premiumSidebarBg + " px-7 py-8 min-h-screen rounded-r-3xl"}>
        <SidebarMenu>
          <div className={sidebarSection}>
            {menuItems.map((item) => (
              <MenuItemWithPopup
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
                      "flex items-center justify-between w-full rounded-2xl px-5 py-3 font-bold transition duration-200",
                      isActive("/time-off")
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl border-2 border-indigo-200"
                        : "bg-white/40 text-[#5443c6]"
                    )}
                    isActive={isActive("/time-off")}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex items-center justify-center p-2 rounded-xl",
                        isActive("/time-off")
                          ? "bg-gradient-to-r from-purple-700 to-blue-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-white/60 to-indigo-100 text-indigo-500"
                      )}>
                        <Clock className="h-6 w-6" />
                      </span>
                      <span className="font-extrabold text-lg">Time Off</span>
                    </div>
                    <svg
                      width="20"
                      height="20"
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
                <CollapsibleContent className="pl-12 mt-2 space-y-2 animate-slide-in-right border-l-2 border-indigo-300/60">
                  {timeOffItems.map((item) => (
                    <MenuItemWithPopup
                      key={item.path}
                      item={item}
                      isActive={location.pathname === item.path}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          </div>

          <div className={sidebarSection}>
            {additionalItems.map((item) => (
              <MenuItemWithPopup
                key={item.path}
                item={item}
                isActive={isActive(item.path)}
              />
            ))}
          </div>
        </SidebarMenu>

        <div className="mt-8 px-3">
          <div className="p-6 rounded-3xl bg-gradient-to-tl from-indigo-200/40 via-white/60 to-purple-100 shadow-xl border border-indigo-100">
            <h4 className="text-lg font-bold mb-2 text-gradient-primary">Premium Support</h4>
            <p className="text-xs text-muted-foreground mb-3 font-medium">Need help? Our premium support team is just a click away</p>
            <Link to="/help" className="text-xs font-semibold text-indigo-700 hover:underline">Contact Support →</Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

// The file is now premium styled and menu items open popups with actions.
// Please consider splitting this file into smaller, focused components for maintainability!
