
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <SidebarTrigger />
      <div className="flex items-center gap-4">
        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
