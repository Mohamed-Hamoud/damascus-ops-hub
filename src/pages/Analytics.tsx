 import { useState } from "react";
 import { Calendar, BarChart3, DollarSign, ShoppingBag, Users, Percent } from "lucide-react";
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
   LineChart,
   Line,
   PieChart,
   Pie,
   AreaChart,
   Area,
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
 
 
 // Pie chart data for order status
 const orderStatusData = [
   { name: "Completed", value: 62, color: "hsl(142, 71%, 45%)" },
   { name: "In Progress", value: 8, color: "hsl(217, 91%, 60%)" },
   { name: "Pending", value: 12, color: "hsl(38, 92%, 50%)" },
   { name: "Failed", value: 2, color: "hsl(0, 72%, 51%)" },
 ];
 
 // Daily revenue trend for line chart
 const dailyTrend = [
   { day: "Mon", revenue: 2400, orders: 12 },
   { day: "Tue", revenue: 1398, orders: 8 },
   { day: "Wed", revenue: 3800, orders: 18 },
   { day: "Thu", revenue: 3908, orders: 22 },
   { day: "Fri", revenue: 4800, orders: 28 },
   { day: "Sat", revenue: 3490, orders: 16 },
   { day: "Sun", revenue: 2100, orders: 10 },
 ];
 
 // Top products data
 const topProductsData = [
   { name: "Nasi Lemak Special", sales: 156, revenue: 1560 },
   { name: "Roti Canai", sales: 142, revenue: 568 },
   { name: "Mee Goreng", sales: 98, revenue: 882 },
   { name: "Teh Tarik", sales: 234, revenue: 468 },
   { name: "Ayam Goreng", sales: 87, revenue: 1044 },
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
 const PieTooltip = ({ active, payload }: any) => {
   if (active && payload && payload.length) {
     return (
       <div className="rounded-lg border bg-card p-3 shadow-lg">
         <p className="text-sm font-semibold" style={{ color: payload[0].payload.color }}>
           {payload[0].name}: {payload[0].value} orders ({((payload[0].value / 84) * 100).toFixed(1)}%)
         </p>
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
 
                 {/* Pie Chart for Order Status */}
                 <div className="mt-6 rounded-xl border bg-gradient-to-br from-background to-muted/30 p-6">
                   <h3 className="text-sm font-semibold mb-4">Order Status Distribution</h3>
                   <div className="h-64 flex items-center justify-center">
                     <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie
                           data={orderStatusData}
                           cx="50%"
                           cy="50%"
                           innerRadius={60}
                           outerRadius={90}
                           paddingAngle={4}
                           dataKey="value"
                           animationDuration={500}
                         >
                           {orderStatusData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                         </Pie>
                         <Tooltip content={<PieTooltip />} />
                         <Legend
                           iconType="circle"
                           iconSize={8}
                           formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>}
                         />
                       </PieChart>
                     </ResponsiveContainer>
                   </div>
                 </div>
               </div>
             </div>
 
           {/* Weekly Trend Line Chart */}
           <div className="rounded-xl border bg-card card-shadow overflow-hidden">
             <div className="border-b bg-muted/30 px-6 py-4">
               <h2 className="section-title">Weekly Performance Trend</h2>
             </div>
             <div className="p-6">
               <div className="h-72">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={dailyTrend}>
                     <defs>
                       <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                         <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                       </linearGradient>
                       <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
                         <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
                       </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} vertical={false} />
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                     <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(value) => `${value / 1000}k`} />
                     <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                     <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--muted))', strokeWidth: 2 }} />
                     <Legend iconType="circle" iconSize={8} wrapperStyle={{ paddingTop: 20 }} formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>} />
                     <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue (RM)" />
                     <Line yAxisId="right" type="monotone" dataKey="orders" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2 }} name="Orders" />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
           {/* Top Products */}
           <div className="rounded-xl border bg-card card-shadow overflow-hidden">
             <div className="border-b bg-muted/30 px-6 py-4">
               <h2 className="section-title">Top Selling Products</h2>
             </div>
             <div className="p-6">
               <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={topProductsData} layout="vertical">
                     <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} horizontal={false} />
                     <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                     <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} width={120} />
                     <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }} />
                     <Bar dataKey="sales" fill="hsl(var(--chart-2))" radius={[0, 6, 6, 0]} animationDuration={500} name="Sales" />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
 
             {/* Original bar chart for orders trend - keeping structure */}
             <div className="rounded-xl border bg-card card-shadow overflow-hidden">
             <div className="border-b bg-muted/30 px-6 py-4">
               <h2 className="section-title">Daily Orders Breakdown</h2>
             </div>
             <div className="p-6">
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
           <div className="space-y-6">
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               <StatCard title="Total Orders" value="84" icon={ShoppingBag} />
               <StatCard title="Avg Order Value" value="RM 218.50" icon={DollarSign} />
               <StatCard title="New Customers" value="23" icon={Users} />
               <StatCard title="Repeat Rate" value="45%" icon={Percent} />
             </div>
             <div className="rounded-xl border bg-card card-shadow overflow-hidden">
               <div className="border-b bg-muted/30 px-6 py-4">
                 <h2 className="section-title">Orders by Day</h2>
               </div>
               <div className="p-6 h-80">
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
         </TabsContent>
 
         <TabsContent value="products">
           <div className="space-y-6">
             <div className="rounded-xl border bg-card card-shadow overflow-hidden">
               <div className="border-b bg-muted/30 px-6 py-4">
                 <h2 className="section-title">Product Performance</h2>
               </div>
               <div className="p-6 h-80">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={topProductsData}>
                     <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} vertical={false} />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                     <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }} />
                     <Legend iconType="circle" iconSize={8} wrapperStyle={{ paddingTop: 20 }} formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>} />
                     <Bar dataKey="sales" fill="hsl(var(--chart-1))" name="Sales" radius={[6, 6, 0, 0]} animationDuration={500} />
                     <Bar dataKey="revenue" fill="hsl(var(--chart-2))" name="Revenue (RM)" radius={[6, 6, 0, 0]} animationDuration={500} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </div>
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

 import { BarChart3, ShoppingBag, DollarSign, Users as UsersIcon, Percent } from "lucide-react";