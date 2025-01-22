import { Menu, BarChart, PlusCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Layout({
  children,
  sidebarOpen,
  toggleSidebar,
}: {
  children: React.ReactNode;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r rounded-tr-lg rounded-br-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-primary text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="New Chart">
              <PlusCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-6 w-6" />
            </Button>
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
      <div className={`flex-1 flex flex-col ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
