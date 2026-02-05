 import { useState } from "react";
 import { useNavigate, useParams, useLocation } from "react-router-dom";
 import { ArrowLeft, Plus, Eye, Trash2 } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Checkbox } from "@/components/ui/checkbox";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 
 /**
  * Banners Page
  * List view + Edit/Create forms matching reference screenshots
  */
 
 const bannersData = [
   { id: 1, name: "Hi", photoEN: "🍽️", photoMS: "🍽️", url: "Hi", created: "2026-01-27 22:07", promotedProduct: "", visible: true, type: "DEFAULT" },
   { id: 2, name: "Hi 54545", photoEN: "🍛", photoMS: "🍛", url: "", created: "2026-01-28 23:20", promotedProduct: "Chicken Rice", visible: true, type: "DEFAULT" },
 ];
 
 const productsOptions = [
   { value: "", label: "Select Product (optional)" },
   { value: "chicken-rice", label: "Chicken Rice" },
   { value: "nasi-lemak", label: "Nasi Lemak" },
 ];
 
 export default function Banners() {
   const navigate = useNavigate();
   const { id } = useParams();
   const location = useLocation();
 
   const isNewView = location.pathname.includes("new");
   const isEditView = id && location.pathname.includes("edit");
   const isFormView = isNewView || isEditView;
 
   const [activeTab, setActiveTab] = useState("banners");
   const banner = id ? bannersData.find((b) => b.id === parseInt(id)) : null;
 
   // Form View (Create/Edit)
   if (isFormView) {
     return (
       <div className="space-y-6">
         <button
           onClick={() => navigate("/banners")}
           className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
         >
           <ArrowLeft className="h-4 w-4" />
           Banners
         </button>
 
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {isNewView ? "New Banner" : "Edit Banner"}
         </h1>
 
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
           <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
               {isNewView ? "New Banner" : "Edit Banner"}
             </h2>
             {isEditView && (
               <button
                 onClick={() => navigate(`/banners/${id}`)}
                 className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2"
               >
                 <Eye className="h-4 w-4" />
                 View Banner
               </button>
             )}
           </div>
 
           <div className="p-6 space-y-6">
             {/* Banner Information */}
             <div className="space-y-4">
               <h3 className="text-base font-semibold text-gray-900 dark:text-white">Banner Information</h3>
               
               <div className="space-y-2">
                 <Label className="text-gray-700 dark:text-gray-300">Name <span className="text-red-500">*</span></Label>
                 <Input
                   defaultValue={banner?.name || ""}
                   className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                 />
               </div>
 
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Promoted Product</Label>
                   <Select defaultValue={banner?.promotedProduct || ""}>
                     <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                       <SelectValue placeholder="Select Product (optional)" />
                     </SelectTrigger>
                     <SelectContent>
                       {productsOptions.map((opt) => (
                         <SelectItem key={opt.value} value={opt.value || "none"}>
                           {opt.label}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Banner URL</Label>
                   <Input
                     defaultValue={banner?.url || ""}
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
               </div>
 
               <div className="space-y-2">
                 <Label className="text-gray-700 dark:text-gray-300">Visibility</Label>
                 <div className="flex items-center gap-2">
                   <Checkbox id="visible" defaultChecked={banner?.visible ?? true} />
                   <Label htmlFor="visible" className="text-sm text-gray-700 dark:text-gray-300">Show banner to users</Label>
                 </div>
               </div>
             </div>
 
             {/* Banner Images */}
             <div className="space-y-4">
               <h3 className="text-base font-semibold text-gray-900 dark:text-white">Banner Images</h3>
               
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Image (English) <span className="text-red-500">*</span></Label>
                   <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                     <div className="h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-4xl">
                       {banner?.photoEN || "📷"}
                     </div>
                     <button className="w-full px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center gap-1 border-t border-gray-200 dark:border-gray-700">
                       <Trash2 className="h-3 w-3" />
                       Remove
                     </button>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Image (Malaysia) <span className="text-red-500">*</span></Label>
                   <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                     <div className="h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-4xl">
                       {banner?.photoMS || "📷"}
                     </div>
                     <button className="w-full px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center gap-1 border-t border-gray-200 dark:border-gray-700">
                       <Trash2 className="h-3 w-3" />
                       Remove
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="flex items-center justify-center gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
             <button
               onClick={() => navigate("/banners")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/banners")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
             >
               {isNewView ? "Create Banner" : "Update Banner"}
             </button>
           </div>
         </div>
       </div>
     );
   }
 
   // List View
   const currentData = activeTab === "banners" ? bannersData : [];
 
   return (
     <div className="space-y-6">
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Banners</h1>
         <button
           onClick={() => navigate("/banners/new")}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Banner
         </button>
       </div>
 
       {/* Tabs */}
       <div className="border-b border-gray-200 dark:border-gray-700">
         <div className="flex gap-6">
           <button
             onClick={() => setActiveTab("banners")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "banners"
                 ? "border-[#aa1e2c] text-[#aa1e2c]"
                 : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
             }`}
           >
             Banners
           </button>
           <button
             onClick={() => setActiveTab("custom")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "custom"
                 ? "border-[#aa1e2c] text-[#aa1e2c]"
                 : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
             }`}
           >
             Custom Banner
           </button>
         </div>
       </div>
 
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
                 <tr key={banner.id}>
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{banner.name}</td>
                   <td className="px-4 py-3">
                     <div className="h-12 w-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl">
                       {banner.photoEN}
                     </div>
                   </td>
                   <td className="px-4 py-3">
                     <div className="h-12 w-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl">
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
                       <button
                         onClick={() => navigate(`/banners/${banner.id}`)}
                         className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700"
                       >
                         View
                       </button>
                       <button
                         onClick={() => navigate(`/banners/${banner.id}/edit`)}
                         className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
                       >
                         Edit
                       </button>
                       <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500 text-white hover:bg-red-600">
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
     </div>
   );
 }