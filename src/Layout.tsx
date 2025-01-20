import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Chart from "./Chat"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-900 w-full h-[fit-content]">

        <div className="sticky top-0 bg-red-600 w-full h-16 flex justify-strat items-center z-auto">
        <SidebarTrigger />
        </div>
        <div className="flex flex-col h-full -z-1">
        <Chart />
        </div>
      </main>
    </SidebarProvider>
  )
}
