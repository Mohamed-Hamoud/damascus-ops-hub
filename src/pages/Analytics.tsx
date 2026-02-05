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
  Cell,
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
 
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-card p-3 shadow-lg">
        <p className="text-xs font-medium text-muted-foreground mb-1">Day {label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-semibold" style={{ color: entry.color }}>
            {entry.name}: {entry.name === "revenue" ? `RM ${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

 export default function Analytics() {
   const [period, setPeriod] = useState("30days");
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
          <h1 className="page-title">Analytics</h1>
          <p className="page-subtitle">Jan 06, 2026 — Feb 05, 2026</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-lg border bg-card p-1 shadow-sm">
             {["Today", "Yesterday", "7 Days", "30 Days", "90 Days"].map((label) => (
               <Button
                 key={label}
                 variant={period === label.toLowerCase().replace(" ", "") ? "default" : "ghost"}
                 size="sm"
                className="transition-all duration-200"
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
        <TabsList className="w-full justify-start rounded-xl border bg-card p-1.5 shadow-sm">
           <TabsTrigger value="overview" className="flex-1 sm:flex-none">Overview</TabsTrigger>
           <TabsTrigger value="orders" className="flex-1 sm:flex-none">Orders</TabsTrigger>
           <TabsTrigger value="products" className="flex-1 sm:flex-none">Products</TabsTrigger>
           <TabsTrigger value="customers" className="flex-1 sm:flex-none">Customers</TabsTrigger>
           <TabsTrigger value="finance" className="flex-1 sm:flex-none">Finance</TabsTrigger>
         </TabsList>
 
         <TabsContent value="overview" className="space-y-6">
           {/* Revenue Overview */}
          <div className="rounded-xl border bg-card card-shadow overflow-hidden">
            <div className="border-b bg-muted/30 px-6 py-4">
              <h2 className="section-title">Revenue Overview</h2>
             </div>
            <div className="p-6">
               <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                 <StatCard title="Total Revenue" value="RM 18,362.86" />
                 <StatCard title="Delivery Fees" value="RM 310.00" />
                 <StatCard title="Tax Collected" value="RM 1,021.86" />
                 <StatCard title="Expenses" value="RM 553.88" variant="destructive" />
                 <StatCard title="Net Revenue" value="RM 17,808.98" variant="success" />
               </div>
              <div className="h-72">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} vertical={false} />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(value) => `${value / 1000}k`} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }} />
                    <Bar dataKey="revenue" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} animationDuration={500}>
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fillOpacity={entry.revenue > 0 ? 1 : 0.3} />
                      ))}
                    </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
           {/* Orders Trend */}
          <div className="rounded-xl border bg-card card-shadow overflow-hidden">
            <div className="border-b bg-muted/30 px-6 py-4">
              <h2 className="section-title">Orders Trend</h2>
             </div>
            <div className="p-6">
               <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                 <StatCard title="Total Orders" value="66" />
                 <StatCard title="Completed" value="62" variant="success" />
                 <StatCard title="Failed" value="0" variant="destructive" />
                 <StatCard title="Success Rate" value="93.9%" variant="success" />
               </div>
              <div className="h-72">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={ordersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} vertical={false} />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }} />
                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ paddingTop: 20 }} formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>} />
                    <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed" radius={[6, 6, 0, 0]} animationDuration={500} />
                    <Bar dataKey="failed" fill="hsl(var(--chart-2))" name="Failed" radius={[6, 6, 0, 0]} animationDuration={500} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
           {/* Financial Summary */}
          <div className="rounded-xl border bg-card card-shadow overflow-hidden">
            <div className="flex items-center justify-between border-b bg-muted/30 px-6 py-4">
              <h2 className="section-title">Financial Summary</h2>
               <span className="text-sm text-muted-foreground">Jan 06 — Feb 05, 2026</span>
             </div>
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Revenue</span>
                  <p className="text-2xl font-bold text-success mt-1">RM 18,362.86</p>
                 </div>
                <div className="rounded-xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delivery Fees</span>
                  <p className="text-2xl font-bold mt-1">RM 310.00</p>
                 </div>
                <div className="rounded-xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tax Collected</span>
                  <p className="text-2xl font-bold mt-1">RM 1,021.86</p>
                 </div>
                <div className="rounded-xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Gateway Fees</span>
                  <p className="text-2xl font-bold text-destructive mt-1">-RM 553.88</p>
                 </div>
                <div className="rounded-xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Expenses</span>
                  <p className="text-2xl font-bold text-destructive mt-1">-RM 553.88</p>
                 </div>
               </div>
              <div className="mt-4 rounded-xl bg-gradient-to-r from-success/10 to-success/5 border border-success/20 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Net Revenue</span>
                <p className="text-3xl font-bold text-success mt-1">RM 17,808.98</p>
               </div>
             </div>
           </div>
         </TabsContent>
 
         <TabsContent value="orders">
          <EmptyState title="Orders Analytics" description="Detailed order analytics and trends coming soon" />
         </TabsContent>
 
         <TabsContent value="products">
          <EmptyState title="Products Analytics" description="Product performance metrics coming soon" />
         </TabsContent>
 
         <TabsContent value="customers">
          <EmptyState title="Customers Analytics" description="Customer insights and behavior analysis coming soon" />
         </TabsContent>
 
         <TabsContent value="finance">
          <EmptyState title="Finance Analytics" description="Financial reports and projections coming soon" />
         </TabsContent>
       </Tabs>
     </div>
   );
 }

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border bg-card p-12 text-center card-shadow">
      <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
        <BarChart3 className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mx-auto">{description}</p>
    </div>
  );
}

import { BarChart3 } from "lucide-react";