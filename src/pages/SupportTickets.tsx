 import { useState } from "react";
 import { Label } from "@/components/ui/label";
 import { Input } from "@/components/ui/input";
 import { Checkbox } from "@/components/ui/checkbox";
import { PageHeader } from "@/components/shared/PageHeader";
 import { Search, Filter, TicketCheck } from "lucide-react";
 import { EmptyState } from "@/components/shared/EmptyState";
 
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
         backLink="/support"
         backLabel="Support"
      />
 
       {/* Filters Card */}
       <div className="rounded-xl border border-border bg-card">
         <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
           <Filter className="h-4 w-4 text-muted-foreground" />
           <h2 className="section-title">Filters</h2>
         </div>
         <div className="p-6">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {/* Status */}
           <div className="space-y-2">
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</Label>
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
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Priority</Label>
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
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</Label>
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
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Agent</Label>
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
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">From Date</Label>
             <Input
               type="date"
               value={filters.fromDate}
               onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
             />
           </div>
 
           {/* To Date */}
           <div className="space-y-2">
               <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">To Date</Label>
             <Input
               type="date"
               value={filters.toDate}
               onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
             />
           </div>
         </div>
 
         {/* Search and Checkboxes */}
           <div className="mt-6 pt-6 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center">
             <div className="flex-1 relative">
               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
             <Input
               placeholder="Search by ticket #, subject, phone..."
               value={filters.search}
               onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                 className="pl-9"
             />
           </div>
           <div className="flex items-center gap-4">
               <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer hover:text-primary transition-colors">
               <Checkbox
                 checked={filters.unassigned}
                 onCheckedChange={(checked) => setFilters({ ...filters, unassigned: checked === true })}
               />
               Unassigned
             </label>
               <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer hover:text-primary transition-colors">
               <Checkbox
                 checked={filters.escalated}
                 onCheckedChange={(checked) => setFilters({ ...filters, escalated: checked === true })}
               />
               Escalated
             </label>
               <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer hover:text-warning transition-colors">
               <Checkbox
                 checked={filters.slaBreached}
                 onCheckedChange={(checked) => setFilters({ ...filters, slaBreached: checked === true })}
               />
               SLA Breached
             </label>
               <button className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2">
                 <Filter className="h-4 w-4" />
                 Apply
             </button>
           </div>
         </div>
       </div>
       </div>
 
       {/* Tickets Table */}
    <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
            <tr className="bg-muted/30 border-b border-border">
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticket</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={9} className="px-4 py-16">
                   <EmptyState
                     icon={TicketCheck}
                     title="No tickets found"
                     description="Try adjusting your filters or search criteria"
                   />
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }