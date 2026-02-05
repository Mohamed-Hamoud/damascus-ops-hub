 import { Ticket, Users, Grid3X3, ShieldCheck, MessageSquare, HelpCircle, BarChart3, Settings, Star } from "lucide-react";
 import { EmptyState } from "@/components/shared/EmptyState";
 import { useNavigate } from "react-router-dom";
 
 /**
  * Support Dashboard Page
 * Admin support dashboard with quick navigation, stats, and ticket overview
 * 
 * HAML Equivalent:
 * ```haml
 * .space-y-8
 *   / Header
 *   %div
 *     %h1.page-title Support Dashboard
 *     %p.page-subtitle Monitor and manage customer support operations
 *   
 *   / Quick Navigation Grid
 *   .grid.gap-4.grid-cols-2.sm:grid-cols-4
 *     - @quick_nav_items.each do |item|
 *       .rounded-xl.border.border-border.bg-card.p-4.flex.flex-col.items-center.gap-2.cursor-pointer.hover:shadow-md
 *         .w-12.h-12.rounded-xl.flex.items-center.justify-center{ class: item[:color] }
 *           = lucide_icon item[:icon], class: "h-5 w-5"
 *         %span.text-sm.font-medium.text-foreground= item[:label]
 *   
 *   / Stats Grid
 *   .grid.gap-6.lg:grid-cols-3
 *     / Ticket Stats Card
 *     .rounded-xl.border.border-border.bg-card.p-6
 *       %h3.section-title.mb-4 Ticket Stats
 *       .grid.grid-cols-2.gap-4
 *         - @stats.each do |stat|
 *           .text-center.p-3.rounded-lg.bg-muted\/50
 *             %p.text-2xl.font-bold.text-foreground= stat[:value]
 *             %p.text-xs.text-muted-foreground= stat[:label]
 *     
 *     / SLA Performance Card
 *     .rounded-xl.border.border-border.bg-card.p-6
 *       %h3.section-title.mb-4 SLA Performance
 *       / ... SLA stats
 *     
 *     / Ticket Volume Card
 *     .rounded-xl.border.border-border.bg-card.p-6
 *       %h3.section-title.mb-4 Ticket Volume
 *       / ... volume stats
 *   
 *   / Recent Tickets Table
 *   .rounded-xl.border.border-border.bg-card
 *     .card-header
 *       %h3.section-title Recent Tickets
 *       = link_to "View All", support_tickets_path, class: "link-primary"
 *     / ... tickets table or empty state
 * ```
 * 
 * DaisyUI: card, stats, table, btn
  */
 
 const quickNavItems = [
   { icon: Ticket, label: "Tickets", color: "bg-primary/10 text-primary", link: "/support/tickets" },
   { icon: Users, label: "Teams", color: "bg-secondary text-secondary-foreground", link: "/support/settings" },
   { icon: Grid3X3, label: "Categories", color: "bg-accent text-accent-foreground", link: "/support/settings" },
   { icon: ShieldCheck, label: "SLA Policies", color: "bg-muted text-muted-foreground", link: "/support/settings" },
   { icon: MessageSquare, label: "Canned Responses", color: "bg-primary/10 text-primary", link: "/support/settings" },
   { icon: HelpCircle, label: "Help Center", color: "bg-secondary text-secondary-foreground", link: "/support/settings" },
   { icon: BarChart3, label: "Analytics", color: "bg-accent text-accent-foreground", link: "/support/tickets" },
   { icon: Settings, label: "Settings", color: "bg-muted text-muted-foreground", link: "/support/settings" },
 ];
 
 const statsData = [
   { label: "Open Tickets", value: 0 },
   { label: "Unassigned", value: 0 },
   { label: "Escalated", value: 0 },
   { label: "Resolved Today", value: 0 },
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
   const navigate = useNavigate();
 
   return (
     <div className="space-y-8">
       {/* Header */}
       <div>
         <h1 className="page-title">Support Dashboard</h1>
         <p className="page-subtitle">Monitor and manage customer support operations</p>
       </div>
 
       {/* Quick Navigation Grid */}
       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
         {quickNavItems.map((item, index) => (
           <button
             key={index}
             onClick={() => navigate(item.link)}
               className="quick-nav-card"
           >
             <div className={`h-10 w-10 rounded-lg ${item.color} flex items-center justify-center`}>
               <item.icon className="h-5 w-5" />
             </div>
             <span className="text-xs font-medium text-foreground">{item.label}</span>
           </button>
         ))}
       </div>
 
       {/* Main Content Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Left Column - Stats & SLA */}
         <div className="space-y-6">
           {/* Stats */}
           <div className="rounded-xl border border-border bg-card p-5">
             <h3 className="section-title mb-4">Ticket Overview</h3>
             <div className="grid grid-cols-2 gap-4">
               {statsData.map((stat, index) => (
                 <div key={index} className="text-center p-3 rounded-lg bg-muted/50">
                     <p className="stat-value">{stat.value}</p>
                     <p className="stat-label mt-1">{stat.label}</p>
                 </div>
               ))}
             </div>
           </div>
 
           {/* SLA Performance */}
           <div className="rounded-xl border border-border bg-card p-5">
             <h3 className="section-title mb-4">SLA Performance</h3>
             <div className="space-y-3">
               {slaPerformance.map((item, index) => (
                   <div key={index} className="data-list-item">
                     <span className="data-list-label">{item.label}</span>
                   <span className={`text-sm font-semibold ${item.highlight ? "text-destructive" : "text-foreground"}`}>
                     {item.value}
                   </span>
                 </div>
               ))}
             </div>
           </div>
         </div>
 
         {/* Middle Column - Satisfaction & Volume */}
         <div className="space-y-6">
           {/* Customer Satisfaction */}
           <div className="rounded-xl border border-border bg-card p-5 text-center">
             <h3 className="section-title mb-4">Customer Satisfaction</h3>
               <p className="stat-value-lg text-5xl mb-3">0</p>
             <div className="flex items-center justify-center gap-1 mb-2">
               {[1, 2, 3, 4, 5].map((star) => (
                 <Star key={star} className="h-5 w-5 text-muted" />
               ))}
             </div>
             <p className="text-xs text-muted-foreground">Last 30 days</p>
           </div>
 
           {/* Ticket Volume */}
           <div className="rounded-xl border border-border bg-card p-5">
             <h3 className="section-title mb-4">Ticket Volume</h3>
             <div className="space-y-3">
               {ticketVolume.map((item, index) => (
                   <div key={index} className="data-list-item">
                     <span className="data-list-label">{item.label}</span>
                     <span className="data-list-value">{item.value}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>
 
         {/* Right Column - SLA Breached & Unassigned */}
         <div className="space-y-6">
           <div className="rounded-xl border border-border bg-card p-5">
             <div className="flex items-center justify-between mb-4">
               <h3 className="section-title">SLA Breached</h3>
               <button 
                 onClick={() => navigate("/support/tickets")}
                 className="text-xs font-medium text-primary hover:underline"
               >
                 View All
               </button>
             </div>
             <div className="flex items-center justify-center py-8 text-muted-foreground text-sm">
               <EmptyState title="No SLA breaches" variant="compact" />
             </div>
           </div>
 
           <div className="rounded-xl border border-border bg-card p-5">
             <div className="flex items-center justify-between mb-4">
               <h3 className="section-title">Unassigned Tickets</h3>
               <button 
                 onClick={() => navigate("/support/tickets")}
                 className="text-xs font-medium text-primary hover:underline"
               >
                 View All
               </button>
             </div>
             <div className="flex items-center justify-center py-8 text-muted-foreground text-sm">
               <EmptyState title="All tickets assigned" variant="compact" />
               </div>
             </div>
           </div>
       </div>
 
       {/* Recent Tickets */}
       <div className="rounded-xl border border-border bg-card overflow-hidden">
         <div className="p-5 border-b border-border flex items-center justify-between">
           <h3 className="section-title">Recent Tickets</h3>
           <button 
             onClick={() => navigate("/support/tickets")}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
           >
             View All Tickets
           </button>
         </div>
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-muted/30 border-b border-border">
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticket</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
                 <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={7} className="px-5 py-12 text-center text-muted-foreground">
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