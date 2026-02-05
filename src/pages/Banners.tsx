 import { useState } from "react";
 import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Plus, Eye, Trash2, Pencil, GripVertical } from "lucide-react";
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
 import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
 import { EmptyState, emptyStateIcons } from "@/components/shared/EmptyState";
 import { PageHeader } from "@/components/shared/PageHeader";
import { TabNavigation } from "@/components/shared/TabNavigation";
 
 /**
  * Banners Page
  * List view + Edit/Create forms matching reference screenshots
 * 
 * HAML Equivalent:
 * ```haml
 * .space-y-6
 *   = render "shared/page_header", title: "Banners", subtitle: "Manage promotional banners and custom banners"
 *   = render "shared/tab_navigation", tabs: @tabs, active_tab: @active_tab
 *   
 *   .rounded-lg.border.bg-card.card-shadow.overflow-hidden
 *     .overflow-x-auto
 *       %table.w-full
 *         %thead
 *           %tr.bg-muted\/30.border-b
 *             / ... table headers
 *         %tbody.divide-y.divide-border{ data: { controller: "sortable", sortable_url_value: update_positions_banners_path } }
 *           - @banners.each do |banner|
 *             %tr.table-row-hover{ data: { id: banner.id } }
 *               / ... table cells with drag handle
 * ```
 * 
 * DaisyUI: tabs, table, card, btn
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
 
  const [activeTab, setActiveTab] = useState<string>("banners");
   const banner = id ? bannersData.find((b) => b.id === parseInt(id)) : null;
 
  const tabs = [
    { id: "banners", label: "Banners" },
    { id: "custom", label: "Custom Banner" },
  ];

   // Form View (Create/Edit)
   if (isFormView) {
     return (
       <div className="space-y-6">
         <button
           onClick={() => navigate("/banners")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
         >
           <ArrowLeft className="h-4 w-4" />
           Banners
         </button>
 
          <h1 className="page-title">
           {isNewView ? "New Banner" : "Edit Banner"}
         </h1>
 
          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="section-title">
               {isNewView ? "New Banner" : "Edit Banner"}
             </h2>
             {isEditView && (
               <button
                 onClick={() => navigate(`/banners/${id}`)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2"
               >
                 <Eye className="h-4 w-4" />
                 View Banner
               </button>
             )}
           </div>
 
            <div className="p-4 space-y-6">
             {/* Banner Information */}
             <div className="space-y-4">
                <h3 className="section-title">Banner Information</h3>
               
               <div className="space-y-2">
                  <Label>Name <span className="text-destructive">*</span></Label>
                  <Input defaultValue={banner?.name || ""} />
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
                    <Input defaultValue={banner?.url || ""} />
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
                <h3 className="section-title">Banner Images</h3>
               
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
 
            <div className="flex items-center justify-center gap-3 p-4 border-t">
             <button
               onClick={() => navigate("/banners")}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/banners")}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
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
        <PageHeader
          title="Banners"
          subtitle="Manage promotional banners and custom banners"
          actions={
         <button
           onClick={() => navigate("/banners/new")}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Banner
         </button>
          }
        />
 
       {/* Tabs */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
 
        <div className="rounded-lg border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
                <tr className="bg-muted/30 border-b">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Photo EN</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Photo MS</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">URL</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Promoted Product</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Visible</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
              <tbody className="divide-y divide-border">
               {currentData.map((banner) => (
                  <tr key={banner.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium text-foreground">{banner.name}</td>
                   <td className="px-4 py-3">
                      <div className="h-12 w-16 rounded-lg bg-muted flex items-center justify-center text-xl">
                       {banner.photoEN}
                     </div>
                   </td>
                   <td className="px-4 py-3">
                      <div className="h-12 w-16 rounded-lg bg-muted flex items-center justify-center text-xl">
                       {banner.photoMS}
                     </div>
                   </td>
                    <td className="px-4 py-3 text-muted-foreground">{banner.url || "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground">{banner.created}</td>
                    <td className="px-4 py-3 text-muted-foreground">{banner.promotedProduct || "—"}</td>
                   <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-semibold ${banner.visible ? "text-success" : "text-muted-foreground"}`}>
                       {banner.visible ? "YES" : "NO"}
                     </span>
                   </td>
                   <td className="px-4 py-3 text-center">
                      <span className="text-xs font-semibold text-info">{banner.type}</span>
                   </td>
                   <td className="px-4 py-3">
                      <TooltipProvider>
                        <div className="flex items-center gap-1">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className="p-2 rounded-md text-muted-foreground hover:bg-muted cursor-grab active:cursor-grabbing"
                              >
                                <GripVertical className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Drag to reorder</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => navigate(`/banners/${banner.id}`)}
                                className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>View banner</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => navigate(`/banners/${banner.id}/edit`)}
                                className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                              >
                                <Pencil className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Edit banner</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Delete banner</TooltipContent>
                          </Tooltip>
                        </div>
                      </TooltipProvider>
                   </td>
                 </tr>
               ))}
               {currentData.length === 0 && (
                 <tr>
                    <td colSpan={9}>
                      <EmptyState
                        icon={emptyStateIcons.banners}
                        title="No banners found"
                        description="Create your first banner to get started"
                        variant="compact"
                      />
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