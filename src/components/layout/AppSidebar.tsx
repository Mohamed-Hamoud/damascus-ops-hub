 import { useLocation, useNavigate } from "react-router-dom";
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
  Sun,
  Moon,
  User,
 } from "lucide-react";
 import { useTheme } from "next-themes";
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
 import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
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
       <SidebarGroup className="px-2">
         <SidebarGroupContent>
           <SidebarMenu className="gap-1">
             {items.map((item) => (
               <SidebarMenuItem key={item.title}>
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <NavLink
                       to={item.url}
                       end
                       className={cn(
                         "flex items-center justify-center rounded-lg p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                       )}
                       activeClassName="bg-sidebar-primary text-sidebar-primary-foreground"
                     >
                       <item.icon className="h-4 w-4" />
                     </NavLink>
                   </TooltipTrigger>
                   <TooltipContent side="right" className="bg-foreground text-background">
                     {item.title}
                   </TooltipContent>
                 </Tooltip>
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
           <SidebarGroupLabel className="flex cursor-pointer items-center justify-between text-[10px] font-bold uppercase tracking-widest text-sidebar-muted hover:text-sidebar-foreground px-3 py-2">
             {label}
             <ChevronDown className="h-3 w-3 group-data-[state=open]/collapsible:rotate-180" />
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
                         "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                       )}
                       activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-semibold"
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
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  
  // Mock admin email - would come from auth context in real app
  const adminEmail = "admin@damascus.com";
 
   return (
     <Sidebar
       className={cn(
         "border-r-0 group/sidebar",
         isCollapsed ? "w-[52px]" : "w-60"
       )}
       collapsible="icon"
     >
      <SidebarHeader className="border-b border-sidebar-border p-4 bg-sidebar-accent/30">
        <div className={cn("flex items-center overflow-hidden", isCollapsed ? "justify-center" : "gap-3")}>
          <div className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-sidebar-primary",
            isCollapsed ? "h-8 w-8" : "h-10 w-10"
          )}>
            <UtensilsCrossed className={isCollapsed ? "h-4 w-4 text-sidebar-primary-foreground" : "h-5 w-5 text-sidebar-primary-foreground"} />
           </div>
           {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-base font-bold text-sidebar-foreground truncate">Damascus</span>
              <span className="text-[11px] font-medium text-sidebar-muted truncate">Food Delivery</span>
             </div>
           )}
         </div>
       </SidebarHeader>
 
      <SidebarContent className={cn("py-4 scrollbar-thin", isCollapsed ? "px-1" : "px-2")}>
         {/* Main nav without collapsible */}
         <SidebarGroup className={isCollapsed ? "px-0" : ""}>
           <SidebarGroupContent>
             <SidebarMenu className={isCollapsed ? "gap-1" : ""}>
               {mainNavItems.map((item) => (
                 <SidebarMenuItem key={item.title}>
                   {isCollapsed ? (
                     <Tooltip>
                       <TooltipTrigger asChild>
                         <NavLink
                           to={item.url}
                           end={item.url === "/"}
                           className="flex items-center justify-center rounded-lg p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                           activeClassName="bg-sidebar-primary text-sidebar-primary-foreground"
                         >
                           <item.icon className="h-4 w-4" />
                         </NavLink>
                       </TooltipTrigger>
                       <TooltipContent side="right" className="bg-foreground text-background">
                         {item.title}
                       </TooltipContent>
                     </Tooltip>
                   ) : (
                     <SidebarMenuButton asChild>
                       <NavLink
                         to={item.url}
                         end={item.url === "/"}
                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                         activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-semibold"
                       >
                         <item.icon className="h-4 w-4" />
                         <span>{item.title}</span>
                       </NavLink>
                     </SidebarMenuButton>
                   )}
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
 
       <SidebarFooter className={cn("border-t border-sidebar-border", isCollapsed ? "p-1" : "p-2")}>
         <SidebarMenu className={isCollapsed ? "gap-1" : ""}>
          {/* Admin User Info */}
          {!isCollapsed && (
            <SidebarMenuItem>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <User className="h-4 w-4" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-medium text-sidebar-foreground truncate">{adminEmail}</p>
                  <p className="text-[10px] text-sidebar-muted">Administrator</p>
                </div>
              </div>
            </SidebarMenuItem>
          )}
          {isCollapsed && (
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center rounded-lg p-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-foreground text-background">
                  {adminEmail}
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          )}

           {/* Dark Mode Toggle */}
           <SidebarMenuItem>
             {isCollapsed ? (
               <Tooltip>
                 <TooltipTrigger asChild>
                   <button
                     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                     className="flex items-center justify-center rounded-lg p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full"
                   >
                     {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                   </button>
                 </TooltipTrigger>
                 <TooltipContent side="right" className="bg-foreground text-background">
                   {theme === "dark" ? "Light Mode" : "Dark Mode"}
                 </TooltipContent>
               </Tooltip>
             ) : (
               <button
                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                 className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full"
               >
                 {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                 <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
               </button>
             )}
           </SidebarMenuItem>
           <SidebarMenuItem>
             {isCollapsed ? (
               <Tooltip>
                 <TooltipTrigger asChild>
                   <button className="flex items-center justify-center rounded-lg p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full">
                     <LogOut className="h-4 w-4" />
                   </button>
                 </TooltipTrigger>
                 <TooltipContent side="right" className="bg-foreground text-background">
                   Logout
                 </TooltipContent>
               </Tooltip>
             ) : (
               <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full">
                 <LogOut className="h-4 w-4" />
                 <span>Logout</span>
               </button>
             )}
           </SidebarMenuItem>
         </SidebarMenu>
       </SidebarFooter>
     </Sidebar>
   );
 }