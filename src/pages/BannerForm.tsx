 import { useState } from "react";
 import { useNavigate, useParams } from "react-router-dom";
 import { ArrowLeft, Eye, Trash2 } from "lucide-react";
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
 
 const bannersData = [
   { id: 1, name: "Hi", photoEN: "🍽️", photoMS: "🍽️", url: "Hi", created: "2026-01-27 22:07", promotedProduct: "", visible: true, type: "DEFAULT" },
   { id: 2, name: "Hi 54545", photoEN: "🍛", photoMS: "🍛", url: "", created: "2026-01-28 23:20", promotedProduct: "Chicken Rice", visible: true, type: "DEFAULT" },
 ];
 
 const productsOptions = [
   { value: "", label: "Select Product (optional)" },
   { value: "chicken-rice", label: "Chicken Rice" },
   { value: "nasi-lemak", label: "Nasi Lemak" },
 ];
 
 export default function BannerForm() {
   const navigate = useNavigate();
   const { id } = useParams();
   const isEdit = !!id;
   const banner = id ? bannersData.find((b) => b.id === parseInt(id)) : null;
 
   return (
     <div className="space-y-6">
       <button
         onClick={() => navigate("/banners")}
         className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
       >
         <ArrowLeft className="h-4 w-4" />
         Banners
       </button>
 
       <h1 className="text-2xl font-bold tracking-tight">
         {isEdit ? "Edit Banner" : "New Banner"}
       </h1>
 
       <div className="rounded-xl border bg-card">
         <div className="flex items-center justify-between p-6 border-b">
           <h2 className="text-lg font-semibold">
             {isEdit ? "Edit Banner" : "New Banner"}
           </h2>
           {isEdit && (
             <button
               onClick={() => navigate(`/banners/${id}`)}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground flex items-center gap-2"
             >
               <Eye className="h-4 w-4" />
               View Banner
             </button>
           )}
         </div>
 
         <div className="p-6 space-y-6">
           {/* Banner Information */}
           <div className="space-y-4">
             <h3 className="text-base font-semibold">Banner Information</h3>
             
             <div className="space-y-2">
               <Label>Name <span className="text-destructive">*</span></Label>
               <Input
                 defaultValue={banner?.name || ""}
                 placeholder="Enter banner name"
               />
             </div>
 
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <Label>Promoted Product</Label>
                 <Select defaultValue={banner?.promotedProduct || ""}>
                   <SelectTrigger>
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
                 <Label>Banner URL</Label>
                 <Input
                   defaultValue={banner?.url || ""}
                   placeholder="https://example.com"
                 />
               </div>
             </div>
 
             <div className="space-y-2">
               <Label>Visibility</Label>
               <div className="flex items-center gap-2">
                 <Checkbox id="visible" defaultChecked={banner?.visible ?? true} />
                 <Label htmlFor="visible" className="text-sm font-normal">Show banner to users</Label>
               </div>
             </div>
           </div>
 
           {/* Banner Images */}
           <div className="space-y-4">
             <h3 className="text-base font-semibold">Banner Images</h3>
             
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <Label>Image (English) <span className="text-destructive">*</span></Label>
                 <div className="border rounded-lg overflow-hidden">
                   <div className="h-32 bg-muted flex items-center justify-center text-4xl">
                     {banner?.photoEN || "📷"}
                   </div>
                   <button className="w-full px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10 flex items-center justify-center gap-1 border-t">
                     <Trash2 className="h-3 w-3" />
                     Remove
                   </button>
                 </div>
               </div>
               <div className="space-y-2">
                 <Label>Image (Malaysia) <span className="text-destructive">*</span></Label>
                 <div className="border rounded-lg overflow-hidden">
                   <div className="h-32 bg-muted flex items-center justify-center text-4xl">
                     {banner?.photoMS || "📷"}
                   </div>
                   <button className="w-full px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10 flex items-center justify-center gap-1 border-t">
                     <Trash2 className="h-3 w-3" />
                     Remove
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
         <div className="flex items-center justify-center gap-3 p-6 border-t">
           <button
             onClick={() => navigate("/banners")}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
           >
             Cancel
           </button>
           <button
             onClick={() => navigate("/banners")}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
           >
             {isEdit ? "Update Banner" : "Create Banner"}
           </button>
         </div>
       </div>
     </div>
   );
 }