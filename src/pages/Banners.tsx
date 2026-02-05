 import { useState } from "react";
 import { Plus, Eye, Edit, Trash2 } from "lucide-react";
 import { FormModal, DeleteModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
 /**
  * Banners Page
  * DaisyUI: tabs, table, btn, badge, modal
  */
 
 const bannersData = [
   { id: 1, name: "Hi", photoEN: "🍽️", photoMS: "🍽️", url: "Hi", created: "2026-01-27 22:07", promotedProduct: "", visible: true, type: "DEFAULT" },
   { id: 2, name: "Hi 54545", photoEN: "🍛", photoMS: "🍛", url: "", created: "2026-01-28 23:20", promotedProduct: "Chicken Rice", visible: true, type: "DEFAULT" },
 ];
 
 const customBannersData: typeof bannersData = [];
 
 export default function Banners() {
   const [activeTab, setActiveTab] = useState("banners");
   const [addModalOpen, setAddModalOpen] = useState(false);
   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
   const [selectedBanner, setSelectedBanner] = useState<typeof bannersData[0] | null>(null);
 
   const currentData = activeTab === "banners" ? bannersData : customBannersData;
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Banners</h1>
         <button 
           onClick={() => setAddModalOpen(true)}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Banner
         </button>
       </div>
 
       {/* Tabs */}
       <div className="border-b border-gray-200 dark:border-gray-700">
         <div className="flex gap-6">
           {["banners", "custom banner"].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-3 text-sm font-medium capitalize border-b-2 transition-all ${
                 activeTab === tab
                   ? "border-[#aa1e2c] text-[#aa1e2c]"
                   : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
               }`}
             >
               {tab === "custom banner" ? "Custom Banner" : "Banners"}
             </button>
           ))}
         </div>
       </div>
 
       {/* Table */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Photo EN</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Photo MS</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">URL</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Promoted Product</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Visible</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Type</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {currentData.map((banner) => (
                 <tr key={banner.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{banner.name}</td>
                   <td className="px-4 py-3">
                     <div className="h-12 w-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-xl">
                       {banner.photoEN}
                     </div>
                   </td>
                   <td className="px-4 py-3">
                     <div className="h-12 w-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-xl">
                       {banner.photoMS}
                     </div>
                   </td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{banner.url || "—"}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{banner.created}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{banner.promotedProduct || "—"}</td>
                   <td className="px-4 py-3 text-center">
                     <span className={`text-xs font-semibold ${banner.visible ? "text-green-600 dark:text-green-400" : "text-gray-400"}`}>
                       {banner.visible ? "YES" : "NO"}
                     </span>
                   </td>
                   <td className="px-4 py-3 text-center">
                     <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{banner.type}</span>
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
                           setSelectedBanner(banner);
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
               {currentData.length === 0 && (
                 <tr>
                   <td colSpan={9} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                     No banners found
                   </td>
                 </tr>
               )}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Add Banner Modal */}
       <FormModal
         open={addModalOpen}
         onOpenChange={setAddModalOpen}
         title="Add Banner"
         onSubmit={() => setAddModalOpen(false)}
         submitLabel="Create Banner"
         size="lg"
       >
         <div className="space-y-4">
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-2">
               <Label>Name <span className="text-red-500">*</span></Label>
               <Input placeholder="Banner name" className="bg-white dark:bg-gray-800" />
             </div>
             <div className="space-y-2">
               <Label>URL</Label>
               <Input placeholder="https://..." className="bg-white dark:bg-gray-800" />
             </div>
           </div>
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-2">
               <Label>Photo (English)</Label>
               <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                 <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
               </div>
             </div>
             <div className="space-y-2">
               <Label>Photo (Malaysia)</Label>
               <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                 <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
               </div>
             </div>
           </div>
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-2">
               <Label>Promoted Product</Label>
               <select className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                 <option value="">Select product...</option>
                 <option value="chicken-rice">Chicken Rice</option>
                 <option value="nasi-lemak">Nasi Lemak</option>
               </select>
             </div>
             <div className="space-y-2">
               <Label>Type</Label>
               <select className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                 <option value="DEFAULT">Default</option>
                 <option value="CUSTOM">Custom</option>
               </select>
             </div>
           </div>
           <div className="flex items-center gap-2">
             <input type="checkbox" id="visible" className="rounded border-gray-300" defaultChecked />
             <Label htmlFor="visible">Visible</Label>
           </div>
         </div>
       </FormModal>
 
       {/* Delete Modal */}
       <DeleteModal
         open={deleteModalOpen}
         onOpenChange={setDeleteModalOpen}
         onConfirm={() => setDeleteModalOpen(false)}
         itemName={selectedBanner?.name}
       />
     </div>
   );
 }