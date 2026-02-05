 import { useState } from "react";
 import { Ticket, Users, Grid3X3, ShieldCheck, MessageSquare, HelpCircle, BarChart3, Settings, Star, Eye } from "lucide-react";
 
 /**
  * Support Dashboard Page
  * DaisyUI: stats, card, table, badge
  */
 
 const quickNavItems = [
   { icon: Ticket, label: "Tickets", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600" },
   { icon: Users, label: "Teams", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600" },
   { icon: Grid3X3, label: "Categories", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600" },
   { icon: ShieldCheck, label: "SLA Policies", color: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" },
   { icon: MessageSquare, label: "Canned Responses", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600" },
   { icon: HelpCircle, label: "Help Center", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600" },
   { icon: BarChart3, label: "Analytics", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600" },
   { icon: Settings, label: "Settings", color: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" },
 ];
 
 const statsData = [
   { label: "Open Tickets", value: 0, color: "bg-orange-100 dark:bg-orange-900/30" },
   { label: "Unassigned", value: 0, color: "bg-blue-100 dark:bg-blue-900/30" },
   { label: "Escalated", value: 0, color: "bg-red-100 dark:bg-red-900/30" },
   { label: "Resolved Today", value: 0, color: "bg-green-100 dark:bg-green-900/30" },
 ];
 
 const slaPerformance = [
   { label: "Response SLA Breached", value: 0, highlight: true },
   { label: "Resolution SLA Breached", value: 0, highlight: true },
   { label: "Avg First Response", value: "0 min", highlight: false },
   { label: "Avg Resolution Time", value: "0 hrs", highlight: false },
 ];
 
 const ticketVolume = [
   { label: "Today", value: 0 },
   { label: "This Week", value: 0 },
   { label: "This Month", value: 0 },
 ];
 
 export default function Support() {
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
           <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Support Dashboard</h1>
           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monitor and manage customer support operations</p>
         </div>
       </div>
 
       {/* Quick Navigation Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {quickNavItems.map((item, index) => (
           <button
             key={index}
             className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex flex-col items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
           >
             <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center`}>
               <item.icon className="h-6 w-6" />
             </div>
             <span className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</span>
           </button>
         ))}
       </div>
 
       {/* Stats Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {statsData.map((stat, index) => (
           <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                 <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
               </div>
               <div className={`h-10 w-10 rounded-full ${stat.color}`}></div>
             </div>
           </div>
         ))}
       </div>
 
       {/* SLA Performance */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">SLA Performance</h3>
         <div className="space-y-3">
           {slaPerformance.map((item, index) => (
             <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
               <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
               <span className={`text-sm font-semibold ${item.highlight ? "text-red-500" : "text-gray-900 dark:text-white"}`}>
                 {item.value}
               </span>
             </div>
           ))}
         </div>
       </div>
 
       {/* Customer Satisfaction */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center">
         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Customer Satisfaction</h3>
         <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2">0</p>
         <div className="flex items-center justify-center gap-1 mb-2">
           {[1, 2, 3, 4, 5].map((star) => (
             <Star key={star} className="h-5 w-5 text-gray-300 dark:text-gray-600" />
           ))}
         </div>
         <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</p>
       </div>
 
       {/* Ticket Volume */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ticket Volume</h3>
         <div className="space-y-3">
           {ticketVolume.map((item, index) => (
             <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
               <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
               <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</span>
             </div>
           ))}
         </div>
       </div>
 
       {/* SLA Breached & Unassigned Tickets */}
       <div className="grid gap-6 lg:grid-cols-2">
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SLA Breached Tickets</h3>
             <button className="px-3 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
               View All
             </button>
           </div>
           <p className="text-center text-gray-500 dark:text-gray-400 py-8">No SLA breaches</p>
         </div>
 
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unassigned Tickets</h3>
             <button className="px-3 py-1 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
               View All
             </button>
           </div>
           <p className="text-center text-gray-500 dark:text-gray-400 py-8">All tickets assigned</p>
         </div>
       </div>
 
       {/* Recent Tickets */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tickets</h3>
           <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200">
             View All Tickets
           </button>
         </div>
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Ticket</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Subject</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Priority</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Agent</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={7} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                   No recent tickets
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }