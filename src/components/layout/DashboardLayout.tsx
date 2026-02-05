 import { Outlet } from "react-router-dom";
 import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
 import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
 import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
 
function MobileTrigger() {
   const { toggleSidebar } = useSidebar();

   return (
    <button
       className="fixed top-3 left-3 z-50 lg:hidden p-2.5 rounded-lg bg-card border border-border shadow-sm active:bg-muted"
      onClick={toggleSidebar}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle menu</span>
    </button>
   );
 }
 
 export function DashboardLayout() {
   return (
     <SidebarProvider>
       <div className="flex min-h-screen w-full">
         <AppSidebar />
         <div className="flex-1 flex flex-col min-w-0">
          <MobileTrigger />
           <main className="flex-1 p-3 pt-14 sm:p-4 sm:pt-14 lg:pt-6 lg:p-6 overflow-auto bg-background">
             <ErrorBoundary>
               <Outlet />
             </ErrorBoundary>
           </main>
         </div>
       </div>
     </SidebarProvider>
   );
 }