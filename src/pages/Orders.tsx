 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Search, Eye, Calendar } from "lucide-react";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 
/**
 * Orders Page
 * DaisyUI components: input, select, table, btn, badge
 * 
 * HAML structure:
 * .space-y-6
 *   %h1.text-2xl.font-bold Orders
 *   .card.bg-base-100.shadow-sm
 *     %input.input.input-bordered{ placeholder: 'Search...' }
 *     %select.select.select-bordered
 *   .card.bg-base-100.shadow-sm
 *     %table.table
 */
 
 const ordersData = [
   { id: "DF-268-FF3A-040226", internalId: "68", date: "Feb 04, 2026", time: "11:24 AM", customer: "Aisyah Binti Rahman", branch: "Damascus Delivery", amount: "RM 503.20", delivery: "5.00", status: "accepted" },
   { id: "DF-481-2CF5-030226", internalId: "65", date: "Feb 03, 2026", time: "05:56 PM", customer: "Ahmadui Bin Ismail", branch: "Damascus Delivery", amount: "RM 353.74", delivery: "5.00", status: "accepted" },
   { id: "DF-537-290126", internalId: "64", date: "Jan 29, 2026", time: "09:10 AM", customer: "", branch: "Damascus Delivery", amount: "RM 169.26", delivery: "5.00", status: "delivering" },
   { id: "DF-234-290126", internalId: "63", date: "Jan 29, 2026", time: "12:18 AM", customer: "Amir Bin Yusof", branch: "Damascus Delivery", amount: "RM 503.20", delivery: "5.00", status: "completed" },
   { id: "DF-169-280126", internalId: "62", date: "Jan 28, 2026", time: "07:40 PM", customer: "Ahmadui Bin Ismail", branch: "Damascus Delivery", amount: "RM 54.82", delivery: "5.00", status: "completed" },
   { id: "DF-662-280126", internalId: "61", date: "Jan 28, 2026", time: "06:18 PM", customer: "Amir Bin Yusof", branch: "Damascus Delivery", amount: "RM 376.00", delivery: "5.00", status: "completed" },
   { id: "DF-408-280126", internalId: "60", date: "Jan 28, 2026", time: "05:59 PM", customer: "Nurul Binti Aisyah", branch: "Damascus Delivery", amount: "RM 482.00", delivery: "5.00", status: "completed" },
   { id: "DF-180-280126", internalId: "59", date: "Jan 28, 2026", time: "05:58 PM", customer: "", branch: "Damascus Delivery", amount: "RM 52.70", delivery: "5.00", status: "completed" },
   { id: "DF-802-280126", internalId: "58", date: "Jan 28, 2026", time: "05:46 PM", customer: "Fatimah Binti Zahra", branch: "Damascus Delivery", amount: "RM 635.70", delivery: "5.00", status: "completed" },
   { id: "DF-659-280126", internalId: "57", date: "Jan 28, 2026", time: "05:43 PM", customer: "Aisyah Binti Rahman", branch: "Damascus Delivery", amount: "RM 482.00", delivery: "5.00", status: "completed" },
 ];
 
 export default function Orders() {
   const [searchQuery, setSearchQuery] = useState("");
   const [statusFilter, setStatusFilter] = useState("all");
 
   const filteredOrders = ordersData.filter((order) => {
     const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
       order.customer.toLowerCase().includes(searchQuery.toLowerCase());
     const matchesStatus = statusFilter === "all" || order.status === statusFilter;
     return matchesSearch && matchesStatus;
   });
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Orders</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage and track all customer orders</p>
       </div>
 
       {/* Filters */}
      {/* DaisyUI: card bg-base-100 shadow-sm */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
           <div className="flex-1">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              {/* DaisyUI: input input-bordered */}
              <input
                type="text"
                 placeholder="Search by Order ID or Customer..."
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
           </div>
           <div className="flex flex-wrap items-center gap-2">
            {/* DaisyUI: select select-bordered */}
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="select select-bordered w-36 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="accepted">Kitchen Accepted</option>
              <option value="delivering">Ready To Deliver</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            {/* DaisyUI: btn btn-square btn-outline */}
            <button className="h-10 w-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#aa1e2c] hover:text-white hover:border-[#aa1e2c] transition-all duration-200">
              <Calendar className="h-4 w-4" />
            </button>
           </div>
         </div>
       </div>
 
       {/* Orders Table */}
      {/* DaisyUI: card bg-base-100 shadow-sm */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
          {/* DaisyUI: table table-zebra */}
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Order</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Branch</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                  <td className="px-4 py-3">
                     <div>
                      <span className="font-medium text-[#aa1e2c]">#{order.id}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">ID {order.internalId}</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                     <div>
                      <span className="text-sm text-gray-900 dark:text-white">{order.date}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{order.time}</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={order.customer ? "text-[#aa1e2c] font-medium" : "text-gray-400"}>
                       {order.customer || "Guest"}
                     </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{order.branch}</td>
                  <td className="px-4 py-3 text-right">
                     <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{order.amount}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+ {order.delivery} delivery</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                     <StatusBadge status={order.status} />
                  </td>
                  <td className="px-4 py-3">
                    {/* DaisyUI: btn btn-ghost btn-square btn-sm */}
                    <Link 
                      to={`/orders/${order.id}`}
                      className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#aa1e2c] hover:text-white transition-all duration-200"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
               ))}
            </tbody>
          </table>
         </div>
 
         {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
             Showing 1-10 of 66 orders
           </p>
          {/* DaisyUI: btn-group */}
           <div className="flex items-center gap-1">
            <button disabled className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-400 cursor-not-allowed">Previous</button>
            <button className="w-8 h-8 text-sm rounded-lg bg-[#aa1e2c] text-white font-medium">1</button>
            <button className="w-8 h-8 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#aa1e2c] hover:text-white hover:border-[#aa1e2c] transition-all duration-200">2</button>
            <button className="w-8 h-8 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#aa1e2c] hover:text-white hover:border-[#aa1e2c] transition-all duration-200">3</button>
            <button className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#aa1e2c] hover:text-white hover:border-[#aa1e2c] transition-all duration-200">Next</button>
           </div>
         </div>
       </div>
     </div>
   );
 }