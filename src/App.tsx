import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/components/styles/animations.css";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import AllEmployees from "./pages/AllEmployees";

// Projects, Departments and Designations Pages
import Projects from "./pages/Projects";
import Departments from "./pages/Departments";
import Designations from "./pages/Designations";

// Skills, Education and Learning Pages
import Skills from "./pages/Skills";
import Educations from "./pages/Educations";
import Learning from "./pages/Learning";

// Time Off Module Pages
import TimeOffOverview from "./pages/time-off/TimeOffOverview";
import Holidays from "./pages/time-off/Holidays";
import Leave from "./pages/time-off/Leave";
import Allowances from "./pages/time-off/Allowances";
import NotificationsActivity from "./pages/NotificationsActivity";

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-full w-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger />
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </SidebarInset>
    </div>
  </SidebarProvider>
);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
            <Route path="/home" element={<AppLayout><Index /></AppLayout>} />
            <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
            <Route path="/employees" element={<AppLayout><AllEmployees /></AppLayout>} />
            
            <Route path="/projects" element={<AppLayout><Projects /></AppLayout>} />
            
            <Route path="/departments" element={<AppLayout><Departments /></AppLayout>} />
            
            <Route path="/designations" element={<AppLayout><Designations /></AppLayout>} />

            <Route path="/skills" element={<AppLayout><Skills /></AppLayout>} />
            <Route path="/educations" element={<AppLayout><Educations /></AppLayout>} />
            <Route path="/learning" element={<AppLayout><Learning /></AppLayout>} />

            <Route path="/time-off" element={<AppLayout><TimeOffOverview /></AppLayout>} />
            <Route path="/time-off/holidays" element={<AppLayout><Holidays /></AppLayout>} />
            <Route path="/time-off/leave" element={<AppLayout><Leave /></AppLayout>} />
            <Route path="/time-off/allowances" element={<AppLayout><Allowances /></AppLayout>} />
            
            <Route path="/notifications" element={<AppLayout><NotificationsActivity /></AppLayout>} />

            <Route path="*" element={<AppLayout><NotFound /></AppLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
