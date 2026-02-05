 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { Eye } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { NoCustomersFound } from "@/components/shared/EmptyState";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 /**
  * Customers Page
 * Customer management with tabs for active, suspended, and deleted users
 * 
 * HAML Equivalent:
 * ```haml
 * .space-y-6
 *   / Header
 *   .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
 *     %div
 *       %h1.page-title Customers
 *       %p.page-subtitle View and manage customer accounts
 *     .flex.items-center.gap-2
 *       %input.input-base{ type: "text", placeholder: "Search by Phone" }
 *       %input.input-base{ type: "text", placeholder: "Search by Email" }
 *   
 *   / Tabs
 *   = render "shared/tab_navigation", tabs: @tabs, active_tab: @active_tab
 *   
 *   / Customer Stats Cards
 *   .grid.gap-6.md:grid-cols-3
 *     - @customer_stats.each do |stat|
 *       = render "customers/stat_card", stat: stat
 *   
 *   / Customers Table
 *   .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
 *     %table.w-full
 *       %thead
 *         %tr.bg-muted\/30.border-b.border-border
 *           %th.table-header ID
 *           %th.table-header CREATED
 *           %th.table-header NAME
 *           %th.table-header EMAIL
 *           %th.table-header DISCOUNTS
 *           %th.table-header ACTIVE VOUCHER
 *           %th.table-header ORDERS
 *           %th.table-header TOTAL SPENT
 *           %th.table-header
 *       %tbody.divide-y.divide-border
 *         - @customers.each do |customer|
 *           %tr.table-row-hover
 *             %td.table-cell= customer.id
 *             / ... other cells
 * ```
 * 
 * DaisyUI: table, btn, badge, card, tabs
  */
 
 const customersData = [
   { id: 9, created: "2026-01-28 21:31", name: "Aisyah Binti Rahman", email: "aisyah.rahman@test.com", discounts: false, activeVoucher: false, orders: 2, totalSpent: 964.00, lastOrder: 503.20 },
   { id: 8, created: "2026-01-28 21:31", name: "Amir Bin Yusof", email: "amir.yusof@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 376.00, lastOrder: 503.20 },
   { id: 2, created: "2026-01-28 21:31", name: "Ahmadui Bin Ismail", email: "ahmad.ismail@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 54.82, lastOrder: 353.74 },
   { id: 5, created: "2026-01-28 21:31", name: "Nurul Binti Aisyah", email: "nurul.aisyah@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 482.00, lastOrder: 482.00 },
   { id: 7, created: "2026-01-28 21:31", name: "Fatimah Binti Zahra", email: "fatimah.zahra@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 635.70, lastOrder: 635.70 },
 ];
 
 const suspendedUsers: typeof customersData = [];
 const deletedUsers: typeof customersData = [];
 
 export default function Customers() {
   const navigate = useNavigate();
   const [phoneSearch, setPhoneSearch] = useState("");
   const [emailSearch, setEmailSearch] = useState("");
 
   const filteredCustomers = customersData.filter((c) => {
     const phoneMatch = phoneSearch === "" || c.email.toLowerCase().includes(phoneSearch.toLowerCase());
     const emailMatch = emailSearch === "" || c.email.toLowerCase().includes(emailSearch.toLowerCase());
     return phoneMatch && emailMatch;
   });
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="page-title">Customers</h1>
            <p className="page-subtitle">View and manage customer accounts</p>
          </div>
         <div className="flex items-center gap-2">
           <Input
             placeholder="Search by Phone"
             value={phoneSearch}
             onChange={(e) => setPhoneSearch(e.target.value)}
              className="w-40"
           />
           <Input
             placeholder="Search by Email"
             value={emailSearch}
             onChange={(e) => setEmailSearch(e.target.value)}
              className="w-40"
           />
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
             Search
           </button>
         </div>
       </div>
 
       {/* Customers Table */}
        <div className="rounded-lg border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
                <tr className="bg-muted/30 border-b">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-Mail</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Discounts</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Voucher</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Orders</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Spent</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Last Order</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
              <tbody className="divide-y divide-border">
               {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 text-foreground font-medium">{customer.id}</td>
                    <td className="px-4 py-3 text-muted-foreground">{customer.created}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{customer.name}</td>
                    <td className="px-4 py-3 text-primary">{customer.email}</td>
                   <td className="px-4 py-3 text-center">
                      <span className="badge-muted inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border">
                       NO
                     </span>
                   </td>
                   <td className="px-4 py-3 text-center">
                      <span className="badge-muted inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border">
                       NO
                     </span>
                   </td>
                    <td className="px-4 py-3 text-center text-foreground">{customer.orders}</td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground">RM {customer.totalSpent.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">RM {customer.lastOrder.toFixed(2)}</td>
                   <td className="px-4 py-3">
                     <TooltipProvider>
                       <Tooltip>
                         <TooltipTrigger asChild>
                           <button 
                             onClick={() => navigate(`/customers/${customer.id}`)}
                               className="icon-btn"
                           >
                             <Eye className="h-4 w-4" />
                           </button>
                         </TooltipTrigger>
                         <TooltipContent>View Customer</TooltipContent>
                       </Tooltip>
                     </TooltipProvider>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Suspended Users */}
       <div className="space-y-4">
          <h2 className="section-title">Suspended Users</h2>
          <div className="rounded-lg border bg-card card-shadow overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                  <tr className="bg-muted/30 border-b">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Suspended Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-Mail</th>
                 </tr>
               </thead>
               <tbody>
                 {suspendedUsers.length === 0 && (
                   <tr>
                      <td colSpan={4} className="p-0">
                       <div className="py-8 text-center text-muted-foreground">
                         No suspended users
                       </div>
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
         </div>
       </div>
 
       {/* Deleted Users */}
       <div className="space-y-4">
          <h2 className="section-title">Deleted Users</h2>
          <div className="rounded-lg border bg-card card-shadow overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                  <tr className="bg-muted/30 border-b">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Deleted Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-Mail</th>
                 </tr>
               </thead>
               <tbody>
                 {deletedUsers.length === 0 && (
                   <tr>
                      <td colSpan={4} className="p-0">
                       <div className="py-8 text-center text-muted-foreground">
                         No deleted users
                       </div>
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
   );
 }