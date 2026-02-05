 import { useState } from "react";
 import { useLocation, Link } from "react-router-dom";
 import { Search, Bell, ChevronRight, User, Settings, LogOut } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Button } from "@/components/ui/button";
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 import { Badge } from "@/components/ui/badge";
 
 const routeNames: Record<string, string> = {
   "/": "Dashboard",
   "/analytics": "Analytics",
   "/orders": "Orders",
   "/products": "Products",
   "/banners": "Banners",
   "/promotions": "Promotions",
   "/customers": "Customers",
   "/evaluations": "Evaluations",
   "/support": "Support",
   "/branches": "Branches",
   "/restaurant-app": "Restaurant App",
   "/reports": "Reports",
   "/points": "Points",
 };
 
 export function TopHeader() {
   const location = useLocation();
   const [searchQuery, setSearchQuery] = useState("");
   
   const currentRoute = location.pathname;
   const routeName = routeNames[currentRoute] || "Page";
   const isDetailPage = currentRoute.includes("/orders/");
 
   return (
     <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-card/80 backdrop-blur-sm px-6">
       {/* Breadcrumbs */}
       <nav className="flex items-center gap-1.5 text-sm">
         <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
           Home
         </Link>
         <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
         {isDetailPage ? (
           <>
             <Link to="/orders" className="text-muted-foreground hover:text-foreground transition-colors">
               Orders
             </Link>
             <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
             <span className="font-medium text-foreground">Order Details</span>
           </>
         ) : (
           <span className="font-medium text-foreground">{routeName}</span>
         )}
       </nav>
 
       {/* Spacer */}
       <div className="flex-1" />
 
       {/* Search */}
       <div className="hidden md:flex relative w-64">
         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
         <Input
           placeholder="Search orders, products..."
           className="pl-9 bg-background/50 border-muted"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         />
       </div>
 
       {/* Notifications */}
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="ghost" size="icon" className="relative">
             <Bell className="h-5 w-5" />
             <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
               3
             </Badge>
             <span className="sr-only">Notifications</span>
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-80">
           <DropdownMenuLabel>Notifications</DropdownMenuLabel>
           <DropdownMenuSeparator />
           <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
             <span className="font-medium">New order received</span>
             <span className="text-xs text-muted-foreground">Order #DF-268-FF3A from Aisyah</span>
           </DropdownMenuItem>
           <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
             <span className="font-medium">Order ready for delivery</span>
             <span className="text-xs text-muted-foreground">Order #DF-537-290126 is prepared</span>
           </DropdownMenuItem>
           <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
             <span className="font-medium">Low stock alert</span>
             <span className="text-xs text-muted-foreground">Nasi Lemak is running low</span>
           </DropdownMenuItem>
           <DropdownMenuSeparator />
           <DropdownMenuItem className="text-center text-primary">
             View all notifications
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
 
       {/* User Profile */}
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="ghost" className="relative h-9 w-9 rounded-full">
             <Avatar className="h-9 w-9">
               <AvatarImage src="" alt="User" />
               <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                 AD
               </AvatarFallback>
             </Avatar>
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-56">
           <DropdownMenuLabel className="font-normal">
             <div className="flex flex-col space-y-1">
               <p className="text-sm font-medium leading-none">Admin User</p>
               <p className="text-xs leading-none text-muted-foreground">
                 admin@damascus.my
               </p>
             </div>
           </DropdownMenuLabel>
           <DropdownMenuSeparator />
           <DropdownMenuItem>
             <User className="mr-2 h-4 w-4" />
             <span>Profile</span>
           </DropdownMenuItem>
           <DropdownMenuItem>
             <Settings className="mr-2 h-4 w-4" />
             <span>Settings</span>
           </DropdownMenuItem>
           <DropdownMenuSeparator />
           <DropdownMenuItem className="text-destructive focus:text-destructive">
             <LogOut className="mr-2 h-4 w-4" />
             <span>Log out</span>
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     </header>
   );
 }