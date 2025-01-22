import { Menu, BarChart, Home, User, Settings, LogOut, ChevronDown, Sun, Moon, Search, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Layout({
  children,
  sidebarOpen,
  toggleSidebar
}: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border border-r rounded-tr-lg rounded-br-lg transform transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? "translate-x-0 lg:translate-x-0" : "-translate-x-full lg:-translate-x-full"} 
          }
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-primary text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar} // This button will toggle the sidebar
            aria-label="Close Sidebar"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex space-x-4">
            <PlusCircle className="h-6 w-6" aria-label="New Chart" />
            <Search className="h-6 w-6" aria-label="Search" />
          </div>
        </div>
        {/* Sidebar Navigation */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
                <BarChart className="h-6 w-6 mr-2" />
                Dashboard
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 
          ${sidebarOpen ? "ml-64" : "ml-0"} 
          lg:${sidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        {/* Navbar */}
        <header className="flex items-center justify-between h-16 px-6 bg-background">
          <div className="flex items-center space-x-4">
            {/* Menu Button in Navbar to Open Sidebar */}
            <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Open Sidebar">
              <Menu className="h-6 w-6" />
            </Button>
            {/* GPT UI Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" aria-label="More Options">
                  GPT UI
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate("/gpt")}>Temporary Chat</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/upgrade")}>Upgrade Plans</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center space-x-4">
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/")}>
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleThemeToggle}>
                  {theme === "dark" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  <span>Toggle Theme</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/login")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
