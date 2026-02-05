 import { useState } from "react";
 import { Plus, Eye, Edit, Trash2 } from "lucide-react";
 import { FormModal, DeleteModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
 /**
  * Restaurant App Page
  * DaisyUI: table, btn, badge
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
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Restaurant App</h1>
         <button
           onClick={() => setAddModalOpen(true)}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Restaurant App
         </button>
       </div>
 
       {/* App List Card */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="p-4 border-b border-gray-200 dark:border-gray-700">
           <h3 className="font-semibold text-gray-900 dark:text-white">Restaurant App List</h3>
         </div>
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">App No.</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Branch</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Action</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Enabled</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {appsData.map((app) => (
                 <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{app.id}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{app.created}</td>
                   <td className="px-4 py-3 text-gray-900 dark:text-white">{app.branch}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{app.lastAction || "—"}</td>
                   <td className="px-4 py-3">
                     <span className={`text-xs font-semibold ${app.enabled ? "text-green-600 dark:text-green-400" : "text-gray-400"}`}>
                       {app.enabled ? "ENABLED" : "DISABLED"}
                     </span>
                   </td>
                   <td className="px-4 py-3">
                     <div className="flex items-center gap-1">
                       <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200">
                         View
                       </button>
                       <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200">
                         Edit
                       </button>
                       <button 
                         onClick={() => {
                           setSelectedApp(app);
                           setDeleteModalOpen(true);
                         }}
                         className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                       >
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
             <Label>Branch <span className="text-red-500">*</span></Label>
             <select className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
               <option value="">Select branch...</option>
               <option value="1">Damascus Delivery</option>
               <option value="2">Damascus Restaurant PJ</option>
               <option value="3">Damascus Restaurant Shah Alam</option>
             </select>
           </div>
           <div className="flex items-center gap-2">
             <input type="checkbox" id="enabled" className="rounded border-gray-300" defaultChecked />
             <Label htmlFor="enabled">Enabled</Label>
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