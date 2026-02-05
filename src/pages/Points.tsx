 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { Plus, Edit } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
 import { FormModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 
 /**
  * Points Page
 * Uses semantic theme tokens for consistent styling
  */
 
 const pointsHistory = [
   { userId: 10, user: "Danial (+60123456009)", points: 10, transactionType: "GIFTED", rate: null, created: "2026-02-04 21:38", updated: "2026-02-04 21:38" },
   { userId: 10, user: "Danial (+60123456009)", points: 10, transactionType: "GIFTED", rate: null, created: "2026-02-04 11:25", updated: "2026-02-04 11:25" },
   { userId: 3, user: "Siti (+60123456002)", points: 10, transactionType: "GIFTED", rate: null, created: "2026-01-28 23:45", updated: "2026-01-28 23:45" },
   { userId: 5, user: "Nurul (+60123456004)", points: 1000, transactionType: "GIFTED", rate: null, created: "2026-01-28 23:10", updated: "2026-01-28 23:10" },
 ];
 
 export default function Points() {
   const navigate = useNavigate();
   const [conversionRate, setConversionRate] = useState(1);
   const [editRateModalOpen, setEditRateModalOpen] = useState(false);
   const [addPointsModalOpen, setAddPointsModalOpen] = useState(false);
   const [bulkModalOpen, setBulkModalOpen] = useState(false);
 
   const [addPointsForm, setAddPointsForm] = useState({
     userIds: "",
     points: "",
     transactionType: "gifted",
   });
 
   return (
     <div className="space-y-6">
       {/* Header */}
      <PageHeader
        title="Points Management"
        subtitle="Configure point conversion rates and manage customer points"
      />
 
       {/* Point Settings Card */}
      <div className="rounded-xl border border-border bg-card card-shadow">
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <h3 className="section-title">Point Settings</h3>
        </div>
        <div className="p-6">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
           <div>
              <p className="text-lg font-medium text-foreground">
                Point Conversion Rate: 1 Point = <span className="text-primary font-bold">{conversionRate} RM</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
               This rate applies to the conversion of the final order price into points that will be earned after the order status is completed
             </p>
           </div>
           <div className="flex items-center gap-2">
             <button
               onClick={() => setEditRateModalOpen(true)}
                className="btn-secondary flex items-center gap-2"
             >
                <Edit className="h-4 w-4" />
               Edit Point Rate
             </button>
             <button
               onClick={() => setBulkModalOpen(true)}
                className="btn-primary"
             >
               Bulk Generate Points
             </button>
           </div>
         </div>
        </div>
       </div>
 
       {/* Points List */}
       <div className="space-y-4">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Points History</h2>
           <button
             onClick={() => setAddPointsModalOpen(true)}
            className="btn-primary flex items-center gap-2"
           >
             <Plus className="h-4 w-4" />
             Add Points
           </button>
         </div>
 
         {/* Points History Card */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">User ID</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Points</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Transaction Type</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rate</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Updated</th>
                 </tr>
               </thead>
              <tbody className="divide-y divide-border">
                 {pointsHistory.map((entry, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{entry.userId}</td>
                    <td className="px-4 py-3 text-foreground">{entry.user}</td>
                    <td className="px-4 py-3 font-bold text-primary">{entry.points}</td>
                     <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                         {entry.transactionType}
                       </span>
                     </td>
                    <td className="px-4 py-3 text-muted-foreground">{entry.rate || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground">{entry.created}</td>
                    <td className="px-4 py-3 text-muted-foreground">{entry.updated}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </div>
 
       {/* Edit Rate Modal */}
       <FormModal
         open={editRateModalOpen}
         onOpenChange={setEditRateModalOpen}
         title="Edit Point Rate"
         onSubmit={() => setEditRateModalOpen(false)}
         submitLabel="Save"
         size="sm"
       >
         <div className="space-y-4">
           <div className="space-y-2">
            <Label>Point Conversion Rate (RM per point) <span className="text-destructive">*</span></Label>
             <Input
               type="number"
               step="0.01"
               value={conversionRate}
               onChange={(e) => setConversionRate(parseFloat(e.target.value) || 0)}
             />
           </div>
         </div>
       </FormModal>
 
       {/* Add Points Modal */}
       <FormModal
         open={addPointsModalOpen}
         onOpenChange={setAddPointsModalOpen}
         title="Add Points"
         description="Manually add points to a user's account"
         onSubmit={() => setAddPointsModalOpen(false)}
         submitLabel="Save"
         size="md"
       >
         <div className="space-y-4">
           <div className="space-y-2">
            <Label>User IDs (comma-separated) <span className="text-destructive">*</span></Label>
             <Textarea
               placeholder="e.g. 10,12,45"
               value={addPointsForm.userIds}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, userIds: e.target.value })}
               rows={3}
             />
           </div>
           <div className="space-y-2">
            <Label>Points <span className="text-destructive">*</span></Label>
             <Input
               type="number"
               value={addPointsForm.points}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, points: e.target.value })}
             />
           </div>
           <div className="space-y-2">
             <Label>Transaction Type</Label>
             <Input
               value={addPointsForm.transactionType}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, transactionType: e.target.value })}
             />
           </div>
         </div>
       </FormModal>
 
       {/* Bulk Generate Modal */}
       <FormModal
         open={bulkModalOpen}
         onOpenChange={setBulkModalOpen}
         title="Bulk Generate Points"
         onSubmit={() => setBulkModalOpen(false)}
         submitLabel="Generate"
         size="md"
       >
         <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
             Generate points for all completed orders that haven't been processed yet.
           </p>
           <div className="space-y-2">
             <Label>Date Range</Label>
             <div className="grid gap-4 sm:grid-cols-2">
              <Input type="date" />
              <Input type="date" />
             </div>
           </div>
         </div>
       </FormModal>
     </div>
   );
 }