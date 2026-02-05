 import { Outlet } from "react-router-dom";
 import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
 import { Menu } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { useSidebar } from "@/components/ui/sidebar";
 
function MobileMenuButton() {
   const { toggleSidebar } = useSidebar();

   return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 left-4 z-50 lg:hidden bg-card shadow-md border-border"
      onClick={toggleSidebar}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle menu</span>
    </Button>
   );
 }
 
 export function DashboardLayout() {
   return (
     <SidebarProvider>
       <div className="flex min-h-screen w-full">
         <AppSidebar />
         <div className="flex-1 flex flex-col min-w-0">
          <MobileMenuButton />
           <main className="flex-1 p-4 pt-16 lg:p-6 overflow-auto bg-background">
             <Outlet />
           </main>
         </div>
       </div>
     </SidebarProvider>
   );
 }