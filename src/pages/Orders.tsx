 import { useState, useMemo } from "react";
 import { Link } from "react-router-dom";
 import { Eye } from "lucide-react";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 import { TableFilters } from "@/components/shared/TableFilters";
 import { TablePagination } from "@/components/shared/TablePagination";
 import { NoOrdersFound } from "@/components/shared/EmptyState";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 /**
  * Orders Page
 * List view with filtering, pagination, and status badges
 * 
 * HAML Equivalent:
 * ```haml
 * .space-y-6
 *   / Header
 *   .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
 *     %div
 *       %h1.page-title Orders
 *       %p.page-subtitle Manage and track all delivery orders
 *     .flex.items-center.gap-2
 *       = render "shared/export_dropdown"
 *   
 *   / Filters
 *   = render "shared/table_filters", search: true, status_options: @status_options, date_range: true
 *   
 *   / Table
 *   .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
 *     %table.w-full
 *       %thead
 *         %tr.bg-muted\/30.border-b.border-border
 *           %th.table-header ORDER ID
 *           %th.table-header DATE
 *           %th.table-header CUSTOMER
 *           %th.table-header BRANCH
 *           %th.table-header AMOUNT
 *           %th.table-header DELIVERY
 *           %th.table-header STATUS
 *           %th.table-header
 *       %tbody.divide-y.divide-border
 *         - @orders.each do |order|
 *           %tr.table-row-hover
 *             %td.table-cell= link_to order.id, order_path(order), class: "link-primary"
 *             / ... other cells
 *             %td.table-cell
 *               = status_badge(order.status)
 *   
 *   / Pagination
 *   = render "shared/table_pagination", current_page: @page, total_pages: @total_pages
 * ```
 * 
 * DaisyUI: input, select, table, btn, badge
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
   { id: "DF-123-270126", internalId: "56", date: "Jan 27, 2026", time: "04:30 PM", customer: "Ahmad Bin Ali", branch: "Damascus Delivery", amount: "RM 234.50", delivery: "5.00", status: "completed" },
   { id: "DF-456-270126", internalId: "55", date: "Jan 27, 2026", time: "02:15 PM", customer: "Siti Binti Yusof", branch: "Damascus Delivery", amount: "RM 156.80", delivery: "5.00", status: "completed" },
   { id: "DF-789-260126", internalId: "54", date: "Jan 26, 2026", time: "07:00 PM", customer: "Rashid Bin Omar", branch: "Damascus Delivery", amount: "RM 412.00", delivery: "5.00", status: "cancelled" },
 ];
 
 const ITEMS_PER_PAGE = 5;
 
 const statusOptions = [
   { label: "All Status", value: "all" },
   { label: "New", value: "new" },
   { label: "Kitchen Accepted", value: "accepted" },
   { label: "Ready To Deliver", value: "delivering" },
   { label: "Completed", value: "completed" },
   { label: "Cancelled", value: "cancelled" },
 ];
 
 export default function Orders() {
   const [searchQuery, setSearchQuery] = useState("");
   const [statusFilter, setStatusFilter] = useState("all");
   const [dateFrom, setDateFrom] = useState("");
   const [dateTo, setDateTo] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
 
   const filteredOrders = useMemo(() => {
     return ordersData.filter((order) => {
     const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
       order.customer.toLowerCase().includes(searchQuery.toLowerCase());
     const matchesStatus = statusFilter === "all" || order.status === statusFilter;
     return matchesSearch && matchesStatus;
     });
   }, [searchQuery, statusFilter]);
 
   const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
   const paginatedOrders = useMemo(() => {
     const start = (currentPage - 1) * ITEMS_PER_PAGE;
     return filteredOrders.slice(start, start + ITEMS_PER_PAGE);
   }, [filteredOrders, currentPage]);
 
   const clearFilters = () => {
     setSearchQuery("");
     setStatusFilter("all");
     setDateFrom("");
     setDateTo("");
     setCurrentPage(1);
   };
 
   const handlePageChange = (page: number) => {
     setCurrentPage(page);
   };
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-subtitle">Manage and track all customer orders</p>
       </div>
 
       {/* Filters */}
       <TableFilters
         searchPlaceholder="Search by Order ID or Customer..."
         searchValue={searchQuery}
         onSearchChange={(value) => { setSearchQuery(value); setCurrentPage(1); }}
         statusOptions={statusOptions}
         statusValue={statusFilter}
         onStatusChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}
         showDateFilters
         dateFrom={dateFrom}
         dateTo={dateTo}
         onDateFromChange={setDateFrom}
         onDateToChange={setDateTo}
         onClearFilters={clearFilters}
       />
 
       {/* Orders Table */}
        <div className="rounded-lg border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
                <tr className="bg-muted/30 border-b">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 w-12"></th>
              </tr>
            </thead>
              <tbody className="divide-y divide-border">
               {paginatedOrders.length === 0 ? (
                 <tr>
                   <td colSpan={7} className="p-0">
                     <NoOrdersFound onClearFilters={clearFilters} />
                   </td>
                 </tr>
               ) : paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3">
                     <div>
                        <span className="font-medium text-primary">#{order.id}</span>
                        <p className="text-xs text-muted-foreground">ID {order.internalId}</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                     <div>
                        <span className="text-sm text-foreground">{order.date}</span>
                        <p className="text-xs text-muted-foreground">{order.time}</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                      <span className={order.customer ? "text-primary font-medium" : "text-muted-foreground"}>
                       {order.customer || "Guest"}
                     </span>
                  </td>
                    <td className="px-4 py-3 text-muted-foreground">{order.branch}</td>
                  <td className="px-4 py-3 text-right">
                     <div>
                        <span className="font-semibold text-foreground">{order.amount}</span>
                        <p className="text-xs text-muted-foreground">+ {order.delivery} delivery</p>
                     </div>
                  </td>
                  <td className="px-4 py-3">
                     <StatusBadge status={order.status} />
                  </td>
                  <td className="px-4 py-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link 
                            to={`/orders/${order.id}`}
                              className="icon-btn"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Order Details</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
               ))}
            </tbody>
          </table>
         </div>
 
         {/* Pagination */}
         {filteredOrders.length > 0 && (
           <TablePagination
             currentPage={currentPage}
             totalPages={totalPages}
             totalItems={filteredOrders.length}
             itemsPerPage={ITEMS_PER_PAGE}
             onPageChange={handlePageChange}
           />
         )}
       </div>
     </div>
   );
 }