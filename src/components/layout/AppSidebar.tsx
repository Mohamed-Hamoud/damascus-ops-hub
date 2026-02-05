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
                       "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                     )}
                     activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                   >
                     <item.icon className="h-4 w-4 shrink-0" />
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
           <SidebarGroupLabel className="flex cursor-pointer items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-sidebar-muted hover:text-sidebar-foreground">
             {label}
             <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]/collapsible:rotate-180" />
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
                         "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                       )}
                       activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
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
         "border-r-0 transition-all duration-200",
         isCollapsed ? "w-14" : "w-60"
       )}
       collapsible="icon"
     >
       <SidebarHeader className="border-b border-sidebar-border p-4">
         <div className="flex items-center gap-3">
           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-accent">
             <Package className="h-4 w-4 text-sidebar-accent-foreground" />
           </div>
           {!isCollapsed && (
             <div className="flex flex-col">
               <span className="text-sm font-semibold text-sidebar-foreground">Damascus</span>
               <span className="text-[10px] text-sidebar-muted">Food Delivery</span>
             </div>
           )}
         </div>
       </SidebarHeader>
 
       <SidebarContent className="px-2 py-4">
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
                         "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                       )}
                       activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                     >
                       <item.icon className="h-4 w-4 shrink-0" />
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
     </Sidebar>
   );
 }