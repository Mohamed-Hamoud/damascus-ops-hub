 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { Plus, Edit } from "lucide-react";
 import { FormModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 
 /**
  * Points Page
  * DaisyUI: card, table, btn, badge
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
       <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Global Settings</h1>
 
       {/* Point Settings Card */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Point Settings</h3>
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
           <div>
             <p className="text-lg text-gray-900 dark:text-white">
               Point Conversion Rate: 1 Point = <span className="text-[#aa1e2c] font-semibold">{conversionRate} RM</span>
             </p>
             <p className="text-sm text-[#aa1e2c] mt-1">
               This rate applies to the conversion of the final order price into points that will be earned after the order status is completed
             </p>
           </div>
           <div className="flex items-center gap-2">
             <button
               onClick={() => setEditRateModalOpen(true)}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
             >
               Edit Point Rate
             </button>
             <button
               onClick={() => setBulkModalOpen(true)}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200"
             >
               Bulk Generate Points
             </button>
           </div>
         </div>
       </div>
 
       {/* Points List */}
       <div className="space-y-4">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
           <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Points List</h2>
           <button
             onClick={() => setAddPointsModalOpen(true)}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
           >
             <Plus className="h-4 w-4" />
             Add Points
           </button>
         </div>
 
         {/* Points History Card */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <div className="p-4 border-b border-gray-200 dark:border-gray-700">
             <h3 className="font-semibold text-gray-900 dark:text-white">Points History</h3>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">User ID</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">User</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Points</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Transaction Type</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Rate</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Updated</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                 {pointsHistory.map((entry, index) => (
                   <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                     <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{entry.userId}</td>
                     <td className="px-4 py-3 text-gray-900 dark:text-white">{entry.user}</td>
                     <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{entry.points}</td>
                     <td className="px-4 py-3">
                       <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                         {entry.transactionType}
                       </span>
                     </td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{entry.rate || "—"}</td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{entry.created}</td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{entry.updated}</td>
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
             <Label>Point Conversion Rate (RM per point) <span className="text-red-500">*</span></Label>
             <Input
               type="number"
               step="0.01"
               value={conversionRate}
               onChange={(e) => setConversionRate(parseFloat(e.target.value) || 0)}
               className="bg-white dark:bg-gray-800"
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
             <Label>User IDs (comma-separated) <span className="text-red-500">*</span></Label>
             <Textarea
               placeholder="e.g. 10,12,45"
               value={addPointsForm.userIds}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, userIds: e.target.value })}
               className="bg-white dark:bg-gray-800"
               rows={3}
             />
           </div>
           <div className="space-y-2">
             <Label>Points <span className="text-red-500">*</span></Label>
             <Input
               type="number"
               value={addPointsForm.points}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, points: e.target.value })}
               className="bg-white dark:bg-gray-800"
             />
           </div>
           <div className="space-y-2">
             <Label>Transaction Type</Label>
             <Input
               value={addPointsForm.transactionType}
               onChange={(e) => setAddPointsForm({ ...addPointsForm, transactionType: e.target.value })}
               className="bg-white dark:bg-gray-800"
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
           <p className="text-sm text-gray-500 dark:text-gray-400">
             Generate points for all completed orders that haven't been processed yet.
           </p>
           <div className="space-y-2">
             <Label>Date Range</Label>
             <div className="grid gap-4 sm:grid-cols-2">
               <Input type="date" className="bg-white dark:bg-gray-800" />
               <Input type="date" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
         </div>
       </FormModal>
     </div>
   );
 }