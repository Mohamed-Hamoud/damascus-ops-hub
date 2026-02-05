 import { useState } from "react";
 import { Plus, Eye } from "lucide-react";
 import { FormModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
 /**
  * Branches Page
  * DaisyUI: table, btn, badge
  */
 
 const branchesData = [
   {
     id: 1,
     name: "Damascus Delivery",
     address: "Damascus Delivery Di sebelah Ikan Bak...",
     created: "2026-01-26 01:55",
     status: "ONLINE",
     workingHours: [
       { day: "Sun", hours: "08:00 - 07:00" },
       { day: "Mon", hours: "08:00 - 07:30" },
       { day: "Tue", hours: "08:00 - 07:30" },
       { day: "Wed", hours: "08:00 - 07:30" },
       { day: "Thu", hours: "08:00 - 07:30" },
       { day: "Fri", hours: "08:00 - 07:30" },
       { day: "Sat", hours: "08:00 - 07:30" },
     ],
     open: true,
     delivery: "20 km",
     devices: { active: 2, total: 2 },
     points: 1,
   },
   {
     id: 2,
     name: "Damascus Restaurant PJ",
     address: "",
     created: "2026-01-26 01:55",
     status: "ONLINE",
     workingHours: [],
     open: false,
     delivery: "10 km",
     devices: { active: 0, total: 0 },
     points: 1,
   },
   {
     id: 3,
     name: "Damascus Restaurant Shah Alam",
     address: "",
     created: "2026-01-26 01:55",
     status: "ONLINE",
     workingHours: [],
     open: false,
     delivery: "10 km",
     devices: { active: 0, total: 0 },
     points: 1,
   },
 ];
 
 export default function Branches() {
   const [addModalOpen, setAddModalOpen] = useState(false);
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Branches List</h1>
         <button
           onClick={() => setAddModalOpen(true)}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Branch
         </button>
       </div>
 
       {/* Branches Table */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Branch</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Address</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Working Hours</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Open</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Delivery</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Devices</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Points</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {branchesData.map((branch) => (
                 <tr key={branch.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{branch.name}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400 max-w-[200px] truncate">{branch.address || "—"}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{branch.created}</td>
                   <td className="px-4 py-3">
                     <span className="text-xs font-semibold text-green-600 dark:text-green-400">{branch.status}</span>
                   </td>
                   <td className="px-4 py-3">
                     {branch.workingHours.length > 0 ? (
                       <div className="text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                         {branch.workingHours.map((wh) => (
                           <div key={wh.day}>
                             <span className="font-medium">{wh.day}</span> {wh.hours}
                           </div>
                         ))}
                       </div>
                     ) : (
                       <span className="text-gray-400">—</span>
                     )}
                   </td>
                   <td className="px-4 py-3 text-center">
                     {branch.open ? (
                       <span className="text-xs font-semibold text-green-600 dark:text-green-400">YES</span>
                     ) : (
                       <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
                         NO
                       </span>
                     )}
                   </td>
                   <td className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">{branch.delivery}</td>
                   <td className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                     <span className="font-medium">{branch.devices.active}</span> / {branch.devices.total}
                   </td>
                   <td className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">{branch.points}</td>
                   <td className="px-4 py-3">
                     <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200">
                       View
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Add Branch Modal */}
       <FormModal
         open={addModalOpen}
         onOpenChange={setAddModalOpen}
         title="Add Branch"
         onSubmit={() => setAddModalOpen(false)}
         submitLabel="Create Branch"
         size="lg"
       >
         <div className="space-y-4">
           <div className="space-y-2">
             <Label>Branch Name <span className="text-red-500">*</span></Label>
             <Input placeholder="Enter branch name" className="bg-white dark:bg-gray-800" />
           </div>
           <div className="space-y-2">
             <Label>Address</Label>
             <Input placeholder="Enter branch address" className="bg-white dark:bg-gray-800" />
           </div>
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-2">
               <Label>Delivery Radius (km)</Label>
               <Input type="number" defaultValue={10} className="bg-white dark:bg-gray-800" />
             </div>
             <div className="space-y-2">
               <Label>Points Multiplier</Label>
               <Input type="number" defaultValue={1} className="bg-white dark:bg-gray-800" />
             </div>
           </div>
         </div>
       </FormModal>
     </div>
   );
 }