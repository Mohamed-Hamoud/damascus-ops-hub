 import { useState } from "react";
 import { useNavigate, useParams } from "react-router-dom";
 import { Edit, MapPin, Clock, Phone } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Checkbox } from "@/components/ui/checkbox";
 import { PageHeader } from "@/components/shared/PageHeader";
 
 const branchesData = [
   { id: 1, name: "Damansara Outlet", code: "DMR", address: "123 Damansara Street", phone: "+60123456789", status: "active" },
   { id: 2, name: "KLCC Branch", code: "KLC", address: "456 KLCC Tower", phone: "+60198765432", status: "active" },
 ];
 
 const workingHours = [
   { day: "Monday", open: "09:00", close: "22:00", closed: false },
   { day: "Tuesday", open: "09:00", close: "22:00", closed: false },
   { day: "Wednesday", open: "09:00", close: "22:00", closed: false },
   { day: "Thursday", open: "09:00", close: "22:00", closed: false },
   { day: "Friday", open: "09:00", close: "23:00", closed: false },
   { day: "Saturday", open: "10:00", close: "23:00", closed: false },
   { day: "Sunday", open: "10:00", close: "21:00", closed: false },
 ];
 
 export default function BranchDetail() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [activeTab, setActiveTab] = useState<"details" | "menu" | "edit">("details");
   const branch = branchesData.find((b) => b.id === parseInt(id || "0"));
 
   if (!branch) {
     return (
       <div className="space-y-6">
         <PageHeader
           title="Branch Not Found"
           backLink="/branches"
           backLabel="Branches"
         />
         <div className="text-center py-12 text-muted-foreground">Branch not found</div>
       </div>
     );
   }
 
   return (
     <div className="space-y-6">
       <PageHeader
         title={branch.name}
         backLink="/branches"
         backLabel="Branches"
         badge={
           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${branch.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
             {branch.status === "active" ? "Active" : "Inactive"}
           </span>
         }
         actions={
           <button
             onClick={() => setActiveTab("edit")}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
           >
             <Edit className="h-4 w-4" />
             Edit
           </button>
         }
       />
 
       {/* Tabs */}
       <div className="border-b border-border">
         <div className="flex gap-6">
           {(["details", "menu", "edit"] as const).map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-3 text-sm font-medium border-b-2 capitalize ${
                 activeTab === tab
                   ? "border-primary text-primary"
                   : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
               }`}
             >
               {tab === "details" ? "Branch Details" : tab === "menu" ? "Menu" : "Edit"}
             </button>
           ))}
         </div>
       </div>
 
       {activeTab === "details" && (
         <div className="grid gap-6 lg:grid-cols-2">
           <div className="rounded-xl border border-border bg-card">
             <div className="px-6 py-4 border-b border-border bg-muted/30">
               <h2 className="section-title">Branch Information</h2>
             </div>
             <div className="p-6 space-y-4">
               <div className="flex items-start gap-3">
                 <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                   <MapPin className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Address</p>
                   <p className="text-foreground font-medium">{branch.address}</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                   <Phone className="h-4 w-4 text-primary" />
                 </div>
                 <div>
                   <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
                   <p className="text-foreground font-medium">{branch.phone}</p>
                 </div>
               </div>
               <div className="pt-2">
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Branch Code</p>
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mt-1">
                   {branch.code}
                 </span>
               </div>
             </div>
           </div>
 
           <div className="rounded-xl border border-border bg-card">
             <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
               <Clock className="h-4 w-4 text-muted-foreground" />
               <h2 className="section-title">Working Hours</h2>
             </div>
             <div className="p-6 space-y-2">
               {workingHours.map((wh) => (
                 <div key={wh.day} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                   <span className="text-sm font-medium text-foreground">{wh.day}</span>
                   <span className={`text-sm ${wh.closed ? "text-destructive" : "text-muted-foreground"}`}>
                     {wh.closed ? "Closed" : `${wh.open} - ${wh.close}`}
                   </span>
                 </div>
               ))}
             </div>
           </div>
         </div>
       )}
 
       {activeTab === "menu" && (
         <div className="rounded-xl border border-border bg-card">
           <div className="px-6 py-4 border-b border-border bg-muted/30">
             <h2 className="section-title">Menu Items</h2>
           </div>
           <div className="p-6">
             <p className="text-muted-foreground">Menu configuration for this branch.</p>
           </div>
         </div>
       )}
 
       {activeTab === "edit" && (
         <div className="rounded-xl border border-border bg-card">
           <div className="px-6 py-4 border-b border-border bg-muted/30">
             <h2 className="section-title">Edit Branch</h2>
           </div>
           <div className="p-6 space-y-6">
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <Label>Branch Name <span className="text-destructive">*</span></Label>
                 <Input defaultValue={branch.name} />
               </div>
               <div className="space-y-2">
                 <Label>Branch Code</Label>
                 <Input defaultValue={branch.code} />
               </div>
               <div className="space-y-2 sm:col-span-2">
                 <Label>Address</Label>
                 <Input defaultValue={branch.address} />
               </div>
               <div className="space-y-2">
                 <Label>Phone</Label>
                 <Input defaultValue={branch.phone} />
               </div>
             </div>
 
             <div className="space-y-4">
             <h3 className="text-sm font-semibold text-foreground">Working Hours</h3>
               <div className="space-y-3">
                 {workingHours.map((wh) => (
                   <div key={wh.day} className="flex items-center gap-4">
                     <div className="w-24 text-sm font-medium">{wh.day}</div>
                     <Input className="w-24" defaultValue={wh.open} type="time" />
                     <span className="text-muted-foreground">to</span>
                     <Input className="w-24" defaultValue={wh.close} type="time" />
                     <div className="flex items-center gap-2">
                       <Checkbox id={`closed-${wh.day}`} defaultChecked={wh.closed} />
                       <Label htmlFor={`closed-${wh.day}`} className="text-sm font-normal">Closed</Label>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
           <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
             <button
               onClick={() => setActiveTab("details")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
             >
               Cancel
             </button>
             <button
               onClick={() => setActiveTab("details")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
             >
               Save Changes
             </button>
           </div>
         </div>
       )}
     </div>
   );
 }