 import { useState } from "react";
 import { Calendar } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { StatCard } from "@/components/dashboard/StatCard";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   Legend,
 } from "recharts";
 
 const revenueData = [
   { date: "06", revenue: 0 },
   { date: "07", revenue: 0 },
   { date: "08", revenue: 0 },
   { date: "09", revenue: 0 },
   { date: "10", revenue: 0 },
   { date: "11", revenue: 0 },
   { date: "12", revenue: 0 },
   { date: "13", revenue: 0 },
   { date: "14", revenue: 0 },
   { date: "15", revenue: 0 },
   { date: "16", revenue: 0 },
   { date: "17", revenue: 0 },
   { date: "18", revenue: 0 },
   { date: "19", revenue: 0 },
   { date: "20", revenue: 0 },
   { date: "21", revenue: 0 },
   { date: "22", revenue: 0 },
   { date: "23", revenue: 0 },
   { date: "24", revenue: 0 },
   { date: "25", revenue: 0 },
   { date: "26", revenue: 0 },
   { date: "27", revenue: 1200 },
   { date: "28", revenue: 3500 },
   { date: "29", revenue: 2800 },
   { date: "30", revenue: 5600 },
   { date: "31", revenue: 3200 },
   { date: "01", revenue: 1800 },
   { date: "02", revenue: 200 },
   { date: "03", revenue: 300 },
   { date: "04", revenue: 500 },
   { date: "05", revenue: 200 },
 ];
 
 const ordersData = [
   { date: "26", completed: 0, failed: 0 },
   { date: "27", completed: 12, failed: 0 },
   { date: "28", completed: 28, failed: 0 },
   { date: "29", completed: 8, failed: 0 },
   { date: "30", completed: 14, failed: 0 },
   { date: "31", completed: 0, failed: 0 },
   { date: "01", completed: 2, failed: 0 },
   { date: "02", completed: 1, failed: 0 },
   { date: "03", completed: 1, failed: 0 },
   { date: "04", completed: 0, failed: 0 },
   { date: "05", completed: 0, failed: 0 },
 ];
 
 export default function Analytics() {
   const [period, setPeriod] = useState("30days");
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
           <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
           <p className="text-sm text-muted-foreground">Jan 06, 2026 — Feb 05, 2026</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
           <div className="flex rounded-lg border bg-card p-1">
             {["Today", "Yesterday", "7 Days", "30 Days", "90 Days"].map((label) => (
               <Button
                 key={label}
                 variant={period === label.toLowerCase().replace(" ", "") ? "default" : "ghost"}
                 size="sm"
                 onClick={() => setPeriod(label.toLowerCase().replace(" ", ""))}
               >
                 {label}
               </Button>
             ))}
           </div>
           <Button variant="outline">
             <Calendar className="mr-2 h-4 w-4" />
             Custom Range
           </Button>
         </div>
       </div>
 
       {/* Tabs */}
       <Tabs defaultValue="overview" className="space-y-6">
         <TabsList className="w-full justify-start rounded-lg border bg-card p-1">
           <TabsTrigger value="overview" className="flex-1 sm:flex-none">Overview</TabsTrigger>
           <TabsTrigger value="orders" className="flex-1 sm:flex-none">Orders</TabsTrigger>
           <TabsTrigger value="products" className="flex-1 sm:flex-none">Products</TabsTrigger>
           <TabsTrigger value="customers" className="flex-1 sm:flex-none">Customers</TabsTrigger>
           <TabsTrigger value="finance" className="flex-1 sm:flex-none">Finance</TabsTrigger>
         </TabsList>
 
         <TabsContent value="overview" className="space-y-6">
           {/* Revenue Overview */}
           <div className="rounded-lg border bg-card card-shadow">
             <div className="border-b p-4">
               <h2 className="text-lg font-semibold">Revenue Overview</h2>
             </div>
             <div className="p-4">
               <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                 <StatCard title="Total Revenue" value="RM 18,362.86" />
                 <StatCard title="Delivery Fees" value="RM 310.00" />
                 <StatCard title="Tax Collected" value="RM 1,021.86" />
                 <StatCard title="Expenses" value="RM 553.88" variant="destructive" />
                 <StatCard title="Net Revenue" value="RM 17,808.98" variant="success" />
               </div>
               <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={revenueData}>
                     <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                     <XAxis dataKey="date" className="text-xs" />
                     <YAxis className="text-xs" />
                     <Tooltip
                       contentStyle={{
                         backgroundColor: "hsl(var(--card))",
                         border: "1px solid hsl(var(--border))",
                         borderRadius: "8px",
                       }}
                     />
                     <Bar dataKey="revenue" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
           {/* Orders Trend */}
           <div className="rounded-lg border bg-card card-shadow">
             <div className="border-b p-4">
               <h2 className="text-lg font-semibold">Orders Trend</h2>
             </div>
             <div className="p-4">
               <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                 <StatCard title="Total Orders" value="66" />
                 <StatCard title="Completed" value="62" variant="success" />
                 <StatCard title="Failed" value="0" variant="destructive" />
                 <StatCard title="Success Rate" value="93.9%" variant="success" />
               </div>
               <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={ordersData}>
                     <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                     <XAxis dataKey="date" className="text-xs" />
                     <YAxis className="text-xs" />
                     <Tooltip
                       contentStyle={{
                         backgroundColor: "hsl(var(--card))",
                         border: "1px solid hsl(var(--border))",
                         borderRadius: "8px",
                       }}
                     />
                     <Legend />
                     <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed" radius={[4, 4, 0, 0]} />
                     <Bar dataKey="failed" fill="hsl(var(--chart-2))" name="Failed" radius={[4, 4, 0, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
           {/* Financial Summary */}
           <div className="rounded-lg border bg-card card-shadow">
             <div className="flex items-center justify-between border-b p-4">
               <h2 className="text-lg font-semibold">Financial Summary</h2>
               <span className="text-sm text-muted-foreground">Jan 06 — Feb 05, 2026</span>
             </div>
             <div className="p-4">
               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                 <div className="rounded-lg border bg-background/50 p-4">
                   <span className="text-xs font-medium uppercase text-muted-foreground">Revenue</span>
                   <p className="text-xl font-bold text-success">RM 18,362.86</p>
                 </div>
                 <div className="rounded-lg border bg-background/50 p-4">
                   <span className="text-xs font-medium uppercase text-muted-foreground">Delivery Fees Collected</span>
                   <p className="text-xl font-bold">RM 310.00</p>
                 </div>
                 <div className="rounded-lg border bg-background/50 p-4">
                   <span className="text-xs font-medium uppercase text-muted-foreground">Tax Collected</span>
                   <p className="text-xl font-bold">RM 1,021.86</p>
                 </div>
                 <div className="rounded-lg border bg-background/50 p-4">
                   <span className="text-xs font-medium uppercase text-muted-foreground">Gateway Fees</span>
                   <p className="text-xl font-bold text-destructive">-RM 553.88</p>
                 </div>
                 <div className="rounded-lg border bg-background/50 p-4">
                   <span className="text-xs font-medium uppercase text-muted-foreground">Total Expenses</span>
                   <p className="text-xl font-bold text-destructive">-RM 553.88</p>
                 </div>
               </div>
               <div className="mt-4 rounded-lg bg-success/10 p-4">
                 <span className="text-xs font-medium uppercase text-muted-foreground">Net Revenue</span>
                 <p className="text-2xl font-bold text-success">RM 17,808.98</p>
               </div>
             </div>
           </div>
         </TabsContent>
 
         <TabsContent value="orders">
           <div className="rounded-lg border bg-card p-8 text-center card-shadow">
             <p className="text-muted-foreground">Orders analytics coming soon...</p>
           </div>
         </TabsContent>
 
         <TabsContent value="products">
           <div className="rounded-lg border bg-card p-8 text-center card-shadow">
             <p className="text-muted-foreground">Products analytics coming soon...</p>
           </div>
         </TabsContent>
 
         <TabsContent value="customers">
           <div className="rounded-lg border bg-card p-8 text-center card-shadow">
             <p className="text-muted-foreground">Customers analytics coming soon...</p>
           </div>
         </TabsContent>
 
         <TabsContent value="finance">
           <div className="rounded-lg border bg-card p-8 text-center card-shadow">
             <p className="text-muted-foreground">Finance analytics coming soon...</p>
           </div>
         </TabsContent>
       </Tabs>
     </div>
   );
 }