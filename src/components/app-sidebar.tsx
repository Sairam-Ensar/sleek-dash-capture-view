
import { Home, Users, FileText, Calendar, Settings, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/dashboard" },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Documents", icon: FileText, path: "/documents" },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Settings", icon: Settings, path: "/settings" },
]

export function AppSidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login")
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    className="cursor-pointer"
                    tooltip={item.title}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenuButton
          onClick={handleLogout}
          className="w-full cursor-pointer text-red-500 hover:text-red-600"
          tooltip="Logout"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
