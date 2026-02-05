 import { useState } from "react";
 import { Label } from "@/components/ui/label";
 import { Input } from "@/components/ui/input";
 import { Checkbox } from "@/components/ui/checkbox";
import { PageHeader } from "@/components/shared/PageHeader";
 
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
      <PageHeader
        title="Support Tickets"
        subtitle="Manage customer support tickets"
      />
 
       {/* Filters Card */}
      <div className="rounded-xl border border-border bg-card p-6">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {/* Status */}
           <div className="space-y-2">
             <Label>Status</Label>
             <select
               value={filters.status}
               onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
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
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
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
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
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
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
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
             />
           </div>
 
           {/* To Date */}
           <div className="space-y-2">
             <Label>To Date</Label>
             <Input
               type="date"
               value={filters.toDate}
               onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
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
             />
           </div>
           <div className="flex items-center gap-4">
             <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
               <Checkbox
                 checked={filters.unassigned}
                 onCheckedChange={(checked) => setFilters({ ...filters, unassigned: checked === true })}
               />
               Unassigned
             </label>
             <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
               <Checkbox
                 checked={filters.escalated}
                 onCheckedChange={(checked) => setFilters({ ...filters, escalated: checked === true })}
               />
               Escalated
             </label>
             <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
               <Checkbox
                 checked={filters.slaBreached}
                 onCheckedChange={(checked) => setFilters({ ...filters, slaBreached: checked === true })}
               />
               SLA Breached
             </label>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
               Filter
             </button>
           </div>
         </div>
       </div>
 
       {/* Tickets Table */}
    <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
            <tr className="bg-muted/30 border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticket</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={9} className="px-4 py-12 text-center">
                <p className="text-foreground font-medium">No tickets found</p>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters or search criteria</p>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }