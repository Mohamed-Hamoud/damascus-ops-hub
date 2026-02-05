 import { useState } from "react";
 import { useNavigate, useParams, useLocation } from "react-router-dom";
 import { ArrowLeft, Plus, Edit, Trash2, Eye, Clock, MapPin, Calendar, Smartphone, Star, Globe } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { TabNavigation } from "@/components/shared/TabNavigation";
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
  * Branches Page
  * List view + Detail view (with Branch Details / Menu tabs)
  * Edit form with working hours
  */
 
 const timeOptions = [
   "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
   "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
   "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
   "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
   "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30",
   "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30",
 ];
 
 const menuProductsData = [
   { id: 1, photo: "🍗", name: "Chicken Rice", description: "Hainanese style chicken rice with soup", division: "Bar", category: "Main Course", price: "12.00", translation: false, bestseller: true, inStock: true },
   { id: 2, photo: "🍛", name: "Nasi Lemak", description: "Coconut rice with sambal, anchovies, peanuts an...", division: "Bar", category: "Main Course", price: "15.00", translation: false, bestseller: true, inStock: true },
   { id: 3, photo: "🍜", name: "Tom Yum Soup", description: "Spicy Thai soup with shrimp", division: "Bar", category: "Soups", price: "8.00", translation: false, bestseller: false, inStock: true },
   { id: 4, photo: "🍵", name: "Ice Lemon Tea", description: "Refreshing iced lemon tea", division: "Bar", category: "Beverages", price: "5.00", translation: false, bestseller: false, inStock: true },
   { id: 5, photo: "🥗", name: "Caesar Salad", description: "Fresh romaine with caesar dressing", division: "Bar", category: "Salad", price: "10.00", translation: false, bestseller: true, inStock: true },
   { id: 6, photo: "🥟", name: "Spring Rolls", description: "Crispy vegetable spring rolls", division: "Bar", category: "Appetizer", price: "7.00", translation: false, bestseller: true, inStock: true },
   { id: 7, photo: "🍰", name: "Chocolate Cake", description: "Rich chocolate layer cake", division: "Bar", category: "Desserts", price: "9.00", translation: false, bestseller: false, inStock: true },
 ];
 
 const branchesData = [
   {
     id: 1,
     name: "Damascus Delivery",
     address: "Damascus Delivery Di sebelah Ikan Bakar Segar Nur Iman Bayu, Bukit Bintang St, Bukit Bintang, 55100 Kuala Lumpur, Federal Territory of Kuala Lumpur",
     created: "2026-01-26 01:55",
     status: "ONLINE",
     workingHours: [
       { day: "Sunday", start: "08:00", end: "07:00" },
       { day: "Monday", start: "08:00", end: "07:30" },
       { day: "Tuesday", start: "08:00", end: "07:30" },
       { day: "Wednesday", start: "08:00", end: "07:30" },
       { day: "Thursday", start: "08:00", end: "07:30" },
       { day: "Friday", start: "08:00", end: "07:30" },
       { day: "Saturday", start: "08:00", end: "07:30" },
     ],
     deliveryRadius: 20,
     devices: { active: 2, total: 2 },
     pointConversionRate: 0.1,
     phone: "00601111149632",
     longitude: "101.6869",
     latitude: "3.139",
     statusOptions: { enabled: true, weather: true, closed: false, pause: false, heavyRain: false },
   },
 ];
 
 export default function Branches() {
   const navigate = useNavigate();
   const { id } = useParams();
   const location = useLocation();
 
   const isDetailView = id && !location.pathname.includes("edit");
   const isEditView = location.pathname.includes("edit");
   const [detailTab, setDetailTab] = useState("details");
 
   const branch = id ? branchesData.find((b) => b.id === parseInt(id)) : null;
 
  const detailTabs = [
    { id: "details", label: "Branch Details" },
    { id: "menu", label: "Menu" },
  ];

   // Edit View
   if (isEditView && branch) {
     return (
       <div className="space-y-6">
        <PageHeader
          title="Edit Branch"
          subtitle={branch.name}
          backLink="/branches"
          backLabel="Branches"
          actions={
            <button
             onClick={() => navigate(`/branches/${id}`)}
              className="btn-secondary flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              View Branch
            </button>
          }
        />
 
        <div className="rounded-xl border border-border bg-card card-shadow p-6 space-y-6">
           {/* Branch Information */}
           <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Branch Information</h2>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                <Label>Branch Name <span className="text-destructive">*</span></Label>
                <Input defaultValue={branch.name} />
               </div>
               <div className="space-y-2">
                <Label>Phone Number <span className="text-destructive">*</span></Label>
                <Input defaultValue={branch.phone} />
               </div>
             </div>
             <div className="space-y-2">
              <Label>Address <span className="text-destructive">*</span></Label>
              <Input defaultValue={branch.address} />
             </div>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                <Label>Longitude <span className="text-destructive">*</span></Label>
                <Input defaultValue={branch.longitude} />
               </div>
               <div className="space-y-2">
                <Label>Latitude <span className="text-destructive">*</span></Label>
                <Input defaultValue={branch.latitude} />
               </div>
             </div>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                <Label>Delivery Radius (km)</Label>
                <Input type="number" defaultValue={branch.deliveryRadius} />
               </div>
               <div className="space-y-2">
                <Label>Point Conversion Rate</Label>
                <p className="text-xs text-muted-foreground">10.0 point = 1 RM</p>
                <Input type="number" step="0.1" defaultValue={branch.pointConversionRate} />
               </div>
             </div>
           </div>
 
           {/* Status Options */}
           <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Status Options</h2>
             <div className="flex flex-wrap gap-6">
               <div className="flex items-center gap-2">
                 <Checkbox id="enabled" defaultChecked={branch.statusOptions.enabled} />
                <Label htmlFor="enabled" className="text-sm cursor-pointer">Enabled</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Checkbox id="weather" defaultChecked={branch.statusOptions.weather} />
                <Label htmlFor="weather" className="text-sm cursor-pointer">Weather</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Checkbox id="closed" defaultChecked={branch.statusOptions.closed} />
                <Label htmlFor="closed" className="text-sm cursor-pointer">Closed</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Checkbox id="pause" defaultChecked={branch.statusOptions.pause} />
                <Label htmlFor="pause" className="text-sm cursor-pointer">Pause</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Checkbox id="heavyRain" defaultChecked={branch.statusOptions.heavyRain} />
                <Label htmlFor="heavyRain" className="text-sm cursor-pointer">Heavy Rain</Label>
               </div>
             </div>
           </div>
 
           {/* Working Hours */}
           <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Working Hours</h2>
             <div className="space-y-3">
               {branch.workingHours.map((wh, idx) => (
                 <div key={idx} className="grid grid-cols-[120px_1fr_auto_1fr] items-center gap-4">
                  <span className="text-sm font-medium text-foreground">{wh.day}</span>
                   <Select defaultValue={wh.start}>
                    <SelectTrigger>
                       <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                       {timeOptions.map((t) => (
                         <SelectItem key={t} value={t}>{t}</SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                  <span className="text-sm text-muted-foreground text-center">to</span>
                   <Select defaultValue={wh.end}>
                    <SelectTrigger>
                       <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                       {timeOptions.map((t) => (
                         <SelectItem key={t} value={t}>{t}</SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
               ))}
             </div>
           </div>
 
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
             <button
               onClick={() => navigate("/branches")}
              className="btn-secondary"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate(`/branches/${id}`)}
              className="btn-primary"
             >
               Update Branch
             </button>
           </div>
         </div>
       </div>
     );
   }
 
   // Detail View
   if (isDetailView && branch) {
     return (
       <div className="space-y-6">
        <PageHeader
          title={branch.name}
          subtitle="Branch details and menu management"
          backLink="/branches"
          backLabel="Branches"
          badge={
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-success/10 text-success border border-success/20">
              {branch.status}
            </span>
          }
          actions={
            <div className="flex items-center gap-2">
              <button
               onClick={() => navigate(`/branches/${id}/edit`)}
                className="btn-secondary flex items-center gap-2"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button className="btn-outline flex items-center gap-2 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          }
        />
 
         {/* Tabs */}
        <TabNavigation
          tabs={detailTabs}
          activeTab={detailTab}
          onTabChange={setDetailTab}
        />
 
         {detailTab === "details" && (
          <div className="rounded-xl border border-border bg-card card-shadow p-6">
             <div className="grid gap-8 md:grid-cols-4">
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <Calendar className="h-4 w-4" />
                   Creation Date
                 </div>
                <p className="text-sm font-medium text-foreground">{branch.created}</p>
               </div>
 
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <MapPin className="h-4 w-4" />
                   Address
                 </div>
                <p className="text-sm text-foreground">{branch.address}</p>
               </div>
 
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <Clock className="h-4 w-4" />
                   Working Hours
                 </div>
                 <div className="space-y-1">
                   {branch.workingHours.map((wh, idx) => (
                     <div key={idx} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{wh.day}</span>
                      <span className="font-medium text-foreground">{wh.start} - {wh.end}</span>
                     </div>
                   ))}
                 </div>
               </div>
 
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <Globe className="h-4 w-4" />
                   Delivery Radius
                 </div>
                <p className="text-sm font-medium text-foreground">{branch.deliveryRadius} km</p>
               </div>
             </div>
 
            <div className="grid gap-8 md:grid-cols-4 mt-6 pt-6 border-t border-border">
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <Smartphone className="h-4 w-4" />
                   Restaurant App Devices
                 </div>
                <p className="text-sm font-medium text-foreground">{branch.devices.active} of {branch.devices.total}</p>
               </div>
               <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                   <Star className="h-4 w-4" />
                   Point Rate (10.0 Point = 1 RM)
                 </div>
                <p className="text-sm font-medium text-foreground">{branch.pointConversionRate}</p>
               </div>
             </div>
           </div>
         )}
 
         {detailTab === "menu" && (
           <div className="space-y-4">
             <div className="flex justify-end gap-2">
               <button
                 onClick={() => navigate(`/branches/${id}/edit`)}
              className="btn-secondary flex items-center gap-2"
               >
                 <Edit className="h-4 w-4" />
                 Edit Branch
               </button>
            <button className="btn-primary flex items-center gap-2">
                 <Plus className="h-4 w-4" />
                 Add Product
               </button>
             </div>
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
               <table className="w-full">
                 <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16">Photo</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Division</th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3.5 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                  <th className="px-4 py-3.5 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Translation</th>
                  <th className="px-4 py-3.5 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Bestseller</th>
                  <th className="px-4 py-3.5 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stock</th>
                  <th className="px-4 py-3.5"></th>
                   </tr>
                 </thead>
              <tbody className="divide-y divide-border">
                   {menuProductsData.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                       <td className="px-4 py-3">
                          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-xl">
                           {product.photo}
                         </div>
                       </td>
                       <td className="px-4 py-3">
                         <div>
                            <span className="font-medium text-foreground">{product.name}</span>
                            <p className="text-xs text-muted-foreground">{product.description}</p>
                         </div>
                       </td>
                        <td className="px-4 py-3 text-muted-foreground">{product.division}</td>
                        <td className="px-4 py-3 text-muted-foreground">{product.category}</td>
                        <td className="px-4 py-3 text-right font-semibold text-foreground">RM {product.price}</td>
                       <td className="px-4 py-3 text-center">
                          <span className={`text-xs font-semibold ${product.translation ? "text-green-600" : "text-muted-foreground"}`}>
                           {product.translation ? "Yes" : "No"}
                         </span>
                       </td>
                       <td className="px-4 py-3 text-center">
                          <span className={`text-xs font-semibold ${product.bestseller ? "text-green-600" : "text-muted-foreground"}`}>
                           {product.bestseller ? "Yes" : "No"}
                         </span>
                       </td>
                       <td className="px-4 py-3 text-center">
                          <span className={`text-xs font-semibold ${product.inStock ? "text-green-600" : "text-destructive"}`}>
                           {product.inStock ? "In Stock" : "Out"}
                         </span>
                       </td>
                       <td className="px-4 py-3">
                          <button className="text-muted-foreground hover:text-foreground">
                           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                           </svg>
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
         )}
       </div>
     );
   }
 
   // List View
   return (
     <div className="space-y-6">
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="page-title">Branches List</h1>
          <button className="btn-primary flex items-center gap-2">
           <Plus className="h-4 w-4" />
           Add Branch
         </button>
       </div>
 
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Address</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
              <tbody className="divide-y divide-border">
               {branchesData.map((branch) => (
                 <tr key={branch.id}>
                    <td className="px-4 py-3 font-medium text-foreground">{branch.name}</td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[250px] truncate">{branch.address || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{branch.created}</td>
                   <td className="px-4 py-3">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded border badge-success">
                       {branch.status}
                     </span>
                   </td>
                   <td className="px-4 py-3">
                     <button
                       onClick={() => navigate(`/branches/${branch.id}`)}
                        className="btn-secondary btn-sm"
                     >
                       View
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }