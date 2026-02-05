 import { useState } from "react";
 import { Label } from "@/components/ui/label";
 import { Input } from "@/components/ui/input";
 
 /**
  * Support Tickets Page
  * DaisyUI: select, input, checkbox, table, btn
  */
 
 export default function SupportTickets() {
   const [filters, setFilters] = useState({
     status: "all",
     priority: "all",
     category: "all",
     agent: "all",
     fromDate: "",
     toDate: "",
     search: "",
     unassigned: false,
     escalated: false,
     slaBreached: false,
   });
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Support Tickets</h1>
         <p className="text-sm text-gray-500 dark:text-gray-400">Manage customer support tickets</p>
       </div>
 
       {/* Filters Card */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {/* Status */}
           <div className="space-y-2">
             <Label>Status</Label>
             <select
               value={filters.status}
               onChange={(e) => setFilters({ ...filters, status: e.target.value })}
               className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
             >
               <option value="all">All Statuses</option>
               <option value="open">Open</option>
               <option value="pending">Pending</option>
               <option value="resolved">Resolved</option>
               <option value="closed">Closed</option>
             </select>
           </div>
 
           {/* Priority */}
           <div className="space-y-2">
             <Label>Priority</Label>
             <select
               value={filters.priority}
               onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
               className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
             >
               <option value="all">All Priorities</option>
               <option value="low">Low</option>
               <option value="medium">Medium</option>
               <option value="high">High</option>
               <option value="urgent">Urgent</option>
             </select>
           </div>
 
           {/* Category */}
           <div className="space-y-2">
             <Label>Category</Label>
             <select
               value={filters.category}
               onChange={(e) => setFilters({ ...filters, category: e.target.value })}
               className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
             >
               <option value="all">All Categories</option>
               <option value="order">Order Issues</option>
               <option value="payment">Payment</option>
               <option value="delivery">Delivery</option>
               <option value="general">General</option>
             </select>
           </div>
 
           {/* Agent */}
           <div className="space-y-2">
             <Label>Agent</Label>
             <select
               value={filters.agent}
               onChange={(e) => setFilters({ ...filters, agent: e.target.value })}
               className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
             >
               <option value="all">All Agents</option>
             </select>
           </div>
 
           {/* From Date */}
           <div className="space-y-2">
             <Label>From Date</Label>
             <Input
               type="date"
               value={filters.fromDate}
               onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
               className="bg-white dark:bg-gray-800"
             />
           </div>
 
           {/* To Date */}
           <div className="space-y-2">
             <Label>To Date</Label>
             <Input
               type="date"
               value={filters.toDate}
               onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
               className="bg-white dark:bg-gray-800"
             />
           </div>
         </div>
 
         {/* Search and Checkboxes */}
         <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
           <div className="flex-1">
             <Input
               placeholder="Search by ticket #, subject, phone..."
               value={filters.search}
               onChange={(e) => setFilters({ ...filters, search: e.target.value })}
               className="bg-white dark:bg-gray-800"
             />
           </div>
           <div className="flex items-center gap-4">
             <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
               <input
                 type="checkbox"
                 checked={filters.unassigned}
                 onChange={(e) => setFilters({ ...filters, unassigned: e.target.checked })}
                 className="rounded border-gray-300"
               />
               Unassigned
             </label>
             <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
               <input
                 type="checkbox"
                 checked={filters.escalated}
                 onChange={(e) => setFilters({ ...filters, escalated: e.target.checked })}
                 className="rounded border-gray-300"
               />
               Escalated
             </label>
             <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
               <input
                 type="checkbox"
                 checked={filters.slaBreached}
                 onChange={(e) => setFilters({ ...filters, slaBreached: e.target.checked })}
                 className="rounded border-red-300"
               />
               SLA Breached
             </label>
             <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200">
               Filter
             </button>
           </div>
         </div>
       </div>
 
       {/* Tickets Table */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Ticket</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Subject</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Order</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Priority</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Agent</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={9} className="px-4 py-12 text-center">
                   <p className="text-gray-900 dark:text-white font-medium">No tickets found</p>
                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Try adjusting your filters or search criteria</p>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }