import { useNavigate } from "react-router-dom";
import { Menu, Home, User, Settings, LogOut, ChevronDown, Sun, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export default function Navbar({
  sidebarOpen,
  toggleSidebar,
}: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  const { theme, setTheme } = useTheme();
  //const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // Get the navigate function

  // Handle theme toggle action
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // // Open the settings modal
  // const openSettingsModal = () => {
  //   setIsSettingsOpen(true);
  // };

  // // Close the settings modal
  // const closeSettingsModal = () => {
  //   setIsSettingsOpen(false);
  // };

  return (
    <>
      <header className="flex items-center justify-between h-16 px-6 bg-background border-b">
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">GPT Chart</h1>
        </div>
        <div className="flex items-center space-x-4">
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
          {/* Home Button */}
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} aria-label="Home">
            <Home className="h-6 w-6" />
          </Button>
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={handleThemeToggle} aria-label="Toggle Theme">
            {theme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </Button>
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

              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>





              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/login")}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Settings Modal */}


    </>
  );
}
