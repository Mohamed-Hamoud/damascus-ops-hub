 import { useState } from "react";
 import { Outlet } from "react-router-dom";
 import { AppSidebar } from "./AppSidebar";
 import { SidebarProvider } from "@/components/ui/sidebar";
 import { Menu } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { useSidebar } from "@/components/ui/sidebar";
 
 function TopBar() {
   const { toggleSidebar } = useSidebar();
   
   return (
     <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-card px-4 lg:px-6 card-shadow">
       <Button
         variant="ghost"
         size="icon"
         className="lg:hidden"
         onClick={toggleSidebar}
       >
         <Menu className="h-5 w-5" />
         <span className="sr-only">Toggle menu</span>
       </Button>
       <div className="flex-1" />
     </header>
   );
 }
 
 export function DashboardLayout() {
   return (
     <SidebarProvider>
       <div className="flex min-h-screen w-full">
         <AppSidebar />
         <div className="flex-1 flex flex-col min-w-0">
           <TopBar />
           <main className="flex-1 p-4 lg:p-6 overflow-auto">
             <Outlet />
           </main>
         </div>
       </div>
     </SidebarProvider>
   );
 }