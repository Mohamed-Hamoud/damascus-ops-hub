 import { Ticket, Users, Grid3X3, ShieldCheck, MessageSquare, HelpCircle, BarChart3, Settings, Star } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 
 /**
  * Support Dashboard Page
  * Clean grid layout with proper spacing
  */
 
 const quickNavItems = [
   { icon: Ticket, label: "Tickets", color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400", link: "/support/tickets" },
   { icon: Users, label: "Teams", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400", link: "/support/settings" },
   { icon: Grid3X3, label: "Categories", color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400", link: "/support/settings" },
   { icon: ShieldCheck, label: "SLA Policies", color: "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400", link: "/support/settings" },
   { icon: MessageSquare, label: "Canned Responses", color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400", link: "/support/settings" },
   { icon: HelpCircle, label: "Help Center", color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400", link: "/support/settings" },
   { icon: BarChart3, label: "Analytics", color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400", link: "/support/tickets" },
   { icon: Settings, label: "Settings", color: "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400", link: "/support/settings" },
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
             className="rounded-xl border border-border bg-card p-4 flex flex-col items-center gap-2 hover:border-primary/30"
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
                   <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                   <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                 </div>
               ))}
             </div>
           </div>
 
           {/* SLA Performance */}
           <div className="rounded-xl border border-border bg-card p-5">
             <h3 className="section-title mb-4">SLA Performance</h3>
             <div className="space-y-3">
               {slaPerformance.map((item, index) => (
                 <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                   <span className="text-sm text-muted-foreground">{item.label}</span>
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
             <p className="text-5xl font-bold text-foreground mb-3">0</p>
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
                 <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                   <span className="text-sm text-muted-foreground">{item.label}</span>
                   <span className="text-sm font-semibold text-foreground">{item.value}</span>
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
               No SLA breaches
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
               All tickets assigned
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