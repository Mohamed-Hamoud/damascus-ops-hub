 import { useState } from "react";
 import { Plus, Eye, Edit, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
 import { FormModal, DeleteModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
 
 /**
  * Restaurant App Page
 * Uses semantic theme tokens
  */
 
 const appsData = [
   { id: 12, created: "2026-01-28 23:41", branch: "Damascus Delivery", lastAction: null, enabled: true },
   { id: 1, created: "2026-01-25 18:04", branch: "Damascus Delivery", lastAction: "2026-02-05 12:56", enabled: true },
 ];
 
 export default function RestaurantApp() {
   const [addModalOpen, setAddModalOpen] = useState(false);
   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
   const [selectedApp, setSelectedApp] = useState<typeof appsData[0] | null>(null);
 
   return (
     <div className="space-y-6">
       {/* Header */}
      <PageHeader
        title="Restaurant App"
        subtitle="Manage restaurant POS applications"
        actions={
          <button
           onClick={() => setAddModalOpen(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Restaurant App
          </button>
        }
      />
 
       {/* App List Card */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">App No.</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Last Action</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-4 py-3.5"></th>
               </tr>
             </thead>
            <tbody className="divide-y divide-border">
               {appsData.map((app) => (
                <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{app.id}</td>
                  <td className="px-4 py-3 text-muted-foreground">{app.created}</td>
                  <td className="px-4 py-3 text-foreground">{app.branch}</td>
                  <td className="px-4 py-3 text-muted-foreground">{app.lastAction || "—"}</td>
                   <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${
                      app.enabled 
                        ? "bg-success/10 text-success border border-success/20" 
                        : "bg-muted text-muted-foreground border border-border"
                    }`}>
                      {app.enabled ? "Enabled" : "Disabled"}
                     </span>
                   </td>
                   <td className="px-4 py-3">
                     <div className="flex items-center gap-1">
                      <button className="btn-secondary btn-sm flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                         View
                       </button>
                      <button className="btn-primary btn-sm flex items-center gap-1">
                        <Edit className="h-3 w-3" />
                         Edit
                       </button>
                       <button 
                         onClick={() => {
                           setSelectedApp(app);
                           setDeleteModalOpen(true);
                         }}
                        className="btn-destructive btn-sm flex items-center gap-1"
                       >
                        <Trash2 className="h-3 w-3" />
                         Delete
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Add App Modal */}
       <FormModal
         open={addModalOpen}
         onOpenChange={setAddModalOpen}
         title="Add Restaurant App"
         onSubmit={() => setAddModalOpen(false)}
         submitLabel="Create App"
         size="md"
       >
         <div className="space-y-4">
           <div className="space-y-2">
            <Label>Branch <span className="text-destructive">*</span></Label>
            <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
               <option value="">Select branch...</option>
               <option value="1">Damascus Delivery</option>
               <option value="2">Damascus Restaurant PJ</option>
               <option value="3">Damascus Restaurant Shah Alam</option>
             </select>
           </div>
          <div className="flex items-center gap-2 py-2">
            <Checkbox id="enabled" defaultChecked />
            <Label htmlFor="enabled" className="cursor-pointer">Enabled</Label>
           </div>
         </div>
       </FormModal>
 
       {/* Delete Modal */}
       <DeleteModal
         open={deleteModalOpen}
         onOpenChange={setDeleteModalOpen}
         onConfirm={() => setDeleteModalOpen(false)}
         itemName={selectedApp ? `App #${selectedApp.id}` : undefined}
       />
     </div>
   );
 }