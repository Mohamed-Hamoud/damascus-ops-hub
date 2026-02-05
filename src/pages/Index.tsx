 import {
   DollarSign,
   ShoppingCart,
   Users,
   TrendingUp,
   Star,
   Truck,
   Utensils,
 } from "lucide-react";
 import { StatCard } from "@/components/dashboard/StatCard";
 import { SectionCard } from "@/components/dashboard/SectionCard";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 import { ProgressBar } from "@/components/dashboard/ProgressBar";
 
/**
 * Dashboard Page
 * DaisyUI components used: card, badge, progress, select
 * 
 * HAML structure:
 * .space-y-6
 *   .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
 *     %h1.text-2xl.font-bold Dashboard
 *     %select.select.select-bordered.select-sm
 *   .grid.gap-4.sm:grid-cols-2.lg:grid-cols-4
 *     = render partial: 'stat_card', collection: @stats
 */
 
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
          {/* DaisyUI: text-2xl font-bold */}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here's your business overview.</p>
         </div>
         <div className="flex items-center gap-2">
          {/* DaisyUI: select select-bordered select-sm */}
          <select className="select select-bordered select-sm w-32 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="7days">7 Days</option>
            <option value="30days">30 Days</option>
          </select>
         </div>
       </div>
 
       {/* KPI Cards */}
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
         <StatCard
           title="Total Revenue"
           value="RM 18,362.86"
          icon={<DollarSign className="h-6 w-6" />}
           trend={{ value: 12.5, isPositive: true }}
           variant="success"
         />
         <StatCard
           title="Total Orders"
           value="66"
          icon={<ShoppingCart className="h-6 w-6" />}
           trend={{ value: 8.2, isPositive: true }}
         />
         <StatCard
           title="Total Customers"
           value="234"
          icon={<Users className="h-6 w-6" />}
           trend={{ value: 5.1, isPositive: true }}
         />
         <StatCard
           title="Avg. Order Amount"
           value="RM 278.22"
          icon={<TrendingUp className="h-6 w-6" />}
           trend={{ value: 2.3, isPositive: false }}
           variant="warning"
         />
       </div>
 
       {/* Order Status Overview */}
       <div className="grid gap-4 lg:grid-cols-3">
         <SectionCard title="Order Status Overview" className="lg:col-span-2">
           <div className="grid gap-4 sm:grid-cols-2">
            {/* DaisyUI: stats shadow */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 p-8 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-4xl font-bold text-green-600 dark:text-green-400">62</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Completed</span>
             </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700 p-8 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <span className="text-4xl font-bold text-red-600 dark:text-red-400">0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Failed</span>
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
                className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-4 transition-all duration-200 hover:border-[#aa1e2c]/20 hover:shadow-sm cursor-pointer"
               >
                 <div className="min-w-0 flex-1">
                   <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{order.id}</span>
                     <StatusBadge status={order.status} />
                   </div>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">{order.customer}</p>
                 </div>
                 <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{order.amount}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{order.time}</p>
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
                className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-4 transition-all duration-200 hover:border-[#aa1e2c]/20 hover:shadow-sm cursor-pointer"
               >
                {/* DaisyUI: avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#aa1e2c]/10 text-sm font-bold text-[#aa1e2c] shadow-sm">
                   {index + 1}
                 </div>
                 <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{product.orders} orders</p>
                 </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{product.revenue}</p>
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
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-sm">
               <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-gray-900 dark:text-white">Food Quality</span>
               </div>
               <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.5</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">(128 reviews)</span>
               </div>
             </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-sm">
               <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-900 dark:text-white">Delivery Service</span>
               </div>
               <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">4.2</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">(98 reviews)</span>
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
