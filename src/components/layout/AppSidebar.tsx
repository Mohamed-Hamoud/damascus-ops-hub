 import { useLocation } from "react-router-dom";
 import {
   LayoutDashboard,
   BarChart3,
   Image,
   Package,
   Tag,
   ShoppingCart,
   Users,
   Star,
   HelpCircle,
   Building,
   Smartphone,
   FileText,
   Coins,
   ChevronDown,
   MessageCircle,
   Shield,
   Settings,
   LogOut,
  UtensilsCrossed,
 } from "lucide-react";
 import { NavLink } from "@/components/NavLink";
 import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarHeader,
  SidebarFooter,
   useSidebar,
 } from "@/components/ui/sidebar";
 import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
 } from "@/components/ui/collapsible";
 import { cn } from "@/lib/utils";
 
 const mainNavItems = [
   { title: "Dashboard", url: "/", icon: LayoutDashboard },
   { title: "Analytics", url: "/analytics", icon: BarChart3 },
 ];
 
 const contentItems = [
   { title: "Banners", url: "/banners", icon: Image },
   { title: "Products", url: "/products", icon: Package },
   { title: "Promotions", url: "/promotions", icon: Tag },
 ];
 
 const operationsItems = [
   { title: "Orders", url: "/orders", icon: ShoppingCart },
   { title: "Customers", url: "/customers", icon: Users },
   { title: "Evaluations", url: "/evaluations", icon: Star },
   { title: "Support", url: "/support", icon: HelpCircle },
 ];
 
 const businessItems = [
   { title: "Branches", url: "/branches", icon: Building },
   { title: "Restaurant App", url: "/restaurant-app", icon: Smartphone },
   { title: "Reports", url: "/reports", icon: FileText },
 ];
 
 const systemItems = [
   { title: "Points", url: "/points", icon: Coins },
   { title: "Feedbacks", url: "/feedbacks", icon: MessageCircle },
   { title: "Security", url: "/security", icon: Shield },
   { title: "Settings", url: "/settings", icon: Settings },
 ];
 
 interface NavSectionProps {
   label: string;
   items: { title: string; url: string; icon: React.ElementType }[];
   defaultOpen?: boolean;
 }
 
 function NavSection({ label, items, defaultOpen = true }: NavSectionProps) {
   const location = useLocation();
   const { state } = useSidebar();
   const isCollapsed = state === "collapsed";
   const isActive = items.some((item) => location.pathname === item.url);
 
   if (isCollapsed) {
     return (
       <SidebarGroup>
         <SidebarGroupContent>
           <SidebarMenu>
             {items.map((item) => (
               <SidebarMenuItem key={item.title}>
                 <SidebarMenuButton asChild tooltip={item.title}>
                   <NavLink
                     to={item.url}
                     end
                     className={cn(
                      "flex items-center justify-center rounded-lg p-2.5 text-sidebar-foreground/70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                     )}
                    activeClassName="bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                   >
                    <item.icon className="h-5 w-5 shrink-0" />
                   </NavLink>
                 </SidebarMenuButton>
               </SidebarMenuItem>
             ))}
           </SidebarMenu>
         </SidebarGroupContent>
       </SidebarGroup>
     );
   }
 
   return (
     <Collapsible defaultOpen={defaultOpen || isActive} className="group/collapsible">
       <SidebarGroup>
         <CollapsibleTrigger asChild>
          <SidebarGroupLabel className="flex cursor-pointer items-center justify-between text-[10px] font-bold uppercase tracking-widest text-sidebar-muted hover:text-sidebar-foreground transition-colors px-3 py-2">
             {label}
            <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
           </SidebarGroupLabel>
         </CollapsibleTrigger>
         <CollapsibleContent>
           <SidebarGroupContent>
             <SidebarMenu>
               {items.map((item) => (
                 <SidebarMenuItem key={item.title}>
                   <SidebarMenuButton asChild>
                     <NavLink
                       to={item.url}
                       end
                       className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-0.5"
                       )}
                      activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-md !translate-x-0"
                     >
                       <item.icon className="h-4 w-4 shrink-0" />
                       <span>{item.title}</span>
                     </NavLink>
                   </SidebarMenuButton>
                 </SidebarMenuItem>
               ))}
             </SidebarMenu>
           </SidebarGroupContent>
         </CollapsibleContent>
       </SidebarGroup>
     </Collapsible>
   );
 }
 
export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
 
   return (
     <Sidebar
       className={cn(
        "border-r-0 transition-all duration-300 ease-in-out group/sidebar",
         isCollapsed ? "w-14" : "w-60"
       )}
       collapsible="icon"
     >
      <SidebarHeader className="border-b border-sidebar-border p-4 bg-sidebar-accent/30">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary shadow-lg">
            <UtensilsCrossed className="h-5 w-5 text-sidebar-primary-foreground" />
           </div>
           {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-base font-bold text-sidebar-foreground truncate">Damascus</span>
              <span className="text-[11px] font-medium text-sidebar-muted truncate">Food Delivery</span>
             </div>
           )}
         </div>
       </SidebarHeader>
 
      <SidebarContent className="px-2 py-4 scrollbar-thin">
         {/* Main nav without collapsible */}
         <SidebarGroup>
           <SidebarGroupContent>
             <SidebarMenu>
               {mainNavItems.map((item) => (
                 <SidebarMenuItem key={item.title}>
                   <SidebarMenuButton asChild tooltip={item.title}>
                     <NavLink
                       to={item.url}
                       end={item.url === "/"}
                       className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        isCollapsed && "justify-center p-2.5"
                       )}
                      activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-md"
                     >
                      <item.icon className={cn("shrink-0", isCollapsed ? "h-5 w-5" : "h-4 w-4")} />
                       {!isCollapsed && <span>{item.title}</span>}
                     </NavLink>
                   </SidebarMenuButton>
                 </SidebarMenuItem>
               ))}
             </SidebarMenu>
           </SidebarGroupContent>
         </SidebarGroup>
 
         <NavSection label="Content" items={contentItems} />
         <NavSection label="Operations" items={operationsItems} />
         <NavSection label="Business" items={businessItems} />
         <NavSection label="System" items={systemItems} />
       </SidebarContent>
 
       <SidebarFooter className="border-t border-sidebar-border p-2">
         <SidebarMenu>
           <SidebarMenuItem>
             <SidebarMenuButton asChild tooltip="Logout">
               <button
                 className={cn(
                   "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full",
                   isCollapsed && "justify-center p-2.5"
                 )}
               >
                 <LogOut className={cn("shrink-0", isCollapsed ? "h-5 w-5" : "h-4 w-4")} />
                 {!isCollapsed && <span>Logout</span>}
               </button>
             </SidebarMenuButton>
           </SidebarMenuItem>
         </SidebarMenu>
       </SidebarFooter>
     </Sidebar>
   );
 }