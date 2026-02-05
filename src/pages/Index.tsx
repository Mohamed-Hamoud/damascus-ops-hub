 import {
   DollarSign,
   ShoppingCart,
   Users,
   TrendingUp,
   Star,
   Truck,
   Utensils,
   Eye,
 } from "lucide-react";
 import { StatCard } from "@/components/dashboard/StatCard";
 import { SectionCard } from "@/components/dashboard/SectionCard";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 import { ProgressBar } from "@/components/dashboard/ProgressBar";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { Button } from "@/components/ui/button";
 
 // Mock data
 const recentOrders = [
   { id: "#DF-268-FF3A", customer: "Aisyah Binti Rahman", amount: "RM 503.20", status: "accepted", time: "11:24 AM" },
   { id: "#DF-481-2CF5", customer: "Ahmadui Bin Ismail", amount: "RM 353.74", status: "accepted", time: "05:56 PM" },
   { id: "#DF-537-290126", customer: "Nurul Binti Aisyah", amount: "RM 169.26", status: "delivering", time: "09:10 AM" },
   { id: "#DF-234-290126", customer: "Amir Bin Yusof", amount: "RM 503.20", status: "completed", time: "12:18 AM" },
   { id: "#DF-169-280126", customer: "Fatimah Binti Zahra", amount: "RM 54.82", status: "completed", time: "07:40 PM" },
 ];
 
 const topProducts = [
   { name: "Nasi Lemak", orders: 156, revenue: "RM 2,340.00" },
   { name: "Chicken Rice", orders: 134, revenue: "RM 1,608.00" },
   { name: "Tom Yum Soup", orders: 98, revenue: "RM 784.00" },
   { name: "Spring Rolls", orders: 87, revenue: "RM 609.00" },
 ];
 
 const Dashboard = () => {
   return (
     <div className="space-y-6">
       {/* Page header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
           <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
           <p className="text-sm text-muted-foreground">Welcome back! Here's your business overview.</p>
         </div>
         <div className="flex items-center gap-2">
           <Select defaultValue="today">
             <SelectTrigger className="w-32 bg-card">
               <SelectValue placeholder="Period" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="today">Today</SelectItem>
               <SelectItem value="yesterday">Yesterday</SelectItem>
               <SelectItem value="7days">7 Days</SelectItem>
               <SelectItem value="30days">30 Days</SelectItem>
             </SelectContent>
           </Select>
         </div>
       </div>
 
       {/* KPI Cards */}
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
         <StatCard
           title="Total Revenue"
           value="RM 18,362.86"
           icon={<DollarSign className="h-5 w-5" />}
           trend={{ value: 12.5, isPositive: true }}
           variant="success"
         />
         <StatCard
           title="Total Orders"
           value="66"
           icon={<ShoppingCart className="h-5 w-5" />}
           trend={{ value: 8.2, isPositive: true }}
         />
         <StatCard
           title="Total Customers"
           value="234"
           icon={<Users className="h-5 w-5" />}
           trend={{ value: 5.1, isPositive: true }}
         />
         <StatCard
           title="Avg. Order Amount"
           value="RM 278.22"
           icon={<TrendingUp className="h-5 w-5" />}
           trend={{ value: 2.3, isPositive: false }}
           variant="warning"
         />
       </div>
 
       {/* Order Status Overview */}
       <div className="grid gap-4 lg:grid-cols-3">
         <SectionCard title="Order Status Overview" className="lg:col-span-2">
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="flex flex-col items-center justify-center rounded-lg bg-success/5 p-6">
               <span className="text-3xl font-bold text-success">62</span>
               <span className="text-sm text-muted-foreground">Completed</span>
             </div>
             <div className="flex flex-col items-center justify-center rounded-lg bg-destructive/5 p-6">
               <span className="text-3xl font-bold text-destructive">0</span>
               <span className="text-sm text-muted-foreground">Failed</span>
             </div>
           </div>
           <div className="mt-4 space-y-3">
             <ProgressBar label="Success Rate" value={93.9} variant="success" />
           </div>
         </SectionCard>
 
         <SectionCard title="Sales Channels">
           <div className="space-y-4">
             <ProgressBar label="Android" value={65} variant="success" />
             <ProgressBar label="iOS" value={35} variant="info" />
           </div>
         </SectionCard>
       </div>
 
       {/* Recent Orders & Top Products */}
       <div className="grid gap-4 lg:grid-cols-2">
         <SectionCard
           title="Recent Orders"
           action={{ label: "View all", href: "/orders" }}
         >
           <div className="space-y-3">
             {recentOrders.map((order) => (
               <div
                 key={order.id}
                 className="flex items-center justify-between rounded-lg border bg-background/50 p-3"
               >
                 <div className="min-w-0 flex-1">
                   <div className="flex items-center gap-2">
                     <span className="text-sm font-medium">{order.id}</span>
                     <StatusBadge status={order.status} />
                   </div>
                   <p className="truncate text-xs text-muted-foreground">{order.customer}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-sm font-semibold">{order.amount}</p>
                   <p className="text-xs text-muted-foreground">{order.time}</p>
                 </div>
               </div>
             ))}
           </div>
         </SectionCard>
 
         <SectionCard
           title="Top Products"
           action={{ label: "View all", href: "/products" }}
         >
           <div className="space-y-3">
             {topProducts.map((product, index) => (
               <div
                 key={product.name}
                 className="flex items-center gap-3 rounded-lg border bg-background/50 p-3"
               >
                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                   {index + 1}
                 </div>
                 <div className="min-w-0 flex-1">
                   <p className="text-sm font-medium">{product.name}</p>
                   <p className="text-xs text-muted-foreground">{product.orders} orders</p>
                 </div>
                 <p className="text-sm font-semibold">{product.revenue}</p>
               </div>
             ))}
           </div>
         </SectionCard>
       </div>
 
       {/* Evaluations & Delivery Areas */}
       <div className="grid gap-4 lg:grid-cols-2">
         <SectionCard
           title="Evaluations"
           action={{ label: "View all", href: "/evaluations" }}
         >
           <div className="space-y-4">
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <Utensils className="h-4 w-4 text-warning" />
                 <span className="text-sm">Food Quality</span>
               </div>
               <div className="flex items-center gap-1">
                 <Star className="h-4 w-4 fill-warning text-warning" />
                 <span className="text-sm font-semibold">4.5</span>
                 <span className="text-xs text-muted-foreground">(128 reviews)</span>
               </div>
             </div>
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <Truck className="h-4 w-4 text-info" />
                 <span className="text-sm">Delivery Service</span>
               </div>
               <div className="flex items-center gap-1">
                 <Star className="h-4 w-4 fill-warning text-warning" />
                 <span className="text-sm font-semibold">4.2</span>
                 <span className="text-xs text-muted-foreground">(98 reviews)</span>
               </div>
             </div>
           </div>
         </SectionCard>
 
         <SectionCard title="Popular Delivery Areas">
           <div className="space-y-3">
             <ProgressBar label="50200 - Kuala Lumpur" value={100} variant="default" />
             <ProgressBar label="50450 - Cheras" value={72} variant="default" />
             <ProgressBar label="50480 - Ampang" value={45} variant="default" />
             <ProgressBar label="50100 - Bukit Bintang" value={38} variant="default" />
           </div>
         </SectionCard>
       </div>
     </div>
   );
 };
 
 export default Dashboard;
