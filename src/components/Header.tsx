import { Bell, LifeBuoy, HelpCircle, User, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
      </div>
      
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
        
        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-10 rounded-full hover:bg-accent hover:text-accent-foreground">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png" alt="Profile" />
                <AvatarFallback>NU</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline font-medium">Nikhil</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <Link to="/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
