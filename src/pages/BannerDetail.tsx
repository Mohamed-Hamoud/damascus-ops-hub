 import { useNavigate, useParams } from "react-router-dom";
 import { Edit, Trash2 } from "lucide-react";
 import { PageHeader } from "@/components/shared/PageHeader";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 const bannersData = [
   { id: 1, name: "Hi", photoEN: "🍽️", photoMS: "🍽️", url: "Hi", created: "2026-01-27 22:07", promotedProduct: "", visible: true, type: "DEFAULT" },
   { id: 2, name: "Hi 54545", photoEN: "🍛", photoMS: "🍛", url: "", created: "2026-01-28 23:20", promotedProduct: "Chicken Rice", visible: true, type: "DEFAULT" },
 ];
 
 export default function BannerDetail() {
   const navigate = useNavigate();
   const { id } = useParams();
   const banner = bannersData.find((b) => b.id === parseInt(id || "0"));
 
   if (!banner) {
     return (
       <div className="space-y-6">
         <PageHeader
           title="Banner Not Found"
           backLink="/banners"
           backLabel="Banners"
         />
         <div className="text-center py-12 text-muted-foreground">Banner not found</div>
       </div>
     );
   }
 
   return (
     <div className="space-y-6">
       <PageHeader
         title={banner.name}
         backLink="/banners"
         backLabel="Banners"
         badge={
           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${banner.visible ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
             {banner.visible ? "Visible" : "Hidden"}
           </span>
         }
         actions={
           <TooltipProvider>
             <div className="flex items-center gap-2">
               <Tooltip>
                 <TooltipTrigger asChild>
                   <button
                     onClick={() => navigate(`/banners/${id}/edit`)}
                     className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                   >
                     <Edit className="h-4 w-4" />
                   </button>
                 </TooltipTrigger>
                 <TooltipContent>Edit Banner</TooltipContent>
               </Tooltip>
               <Tooltip>
                 <TooltipTrigger asChild>
                   <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90">
                     <Trash2 className="h-4 w-4" />
                   </button>
                 </TooltipTrigger>
                 <TooltipContent>Delete Banner</TooltipContent>
               </Tooltip>
             </div>
           </TooltipProvider>
         }
       />
 
       {/* Banner Details Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Main Info Card */}
         <div className="lg:col-span-2 rounded-xl border border-border bg-card">
           <div className="px-6 py-4 border-b border-border bg-muted/30">
             <h2 className="section-title">Banner Information</h2>
           </div>
           <div className="p-6">
             <div className="grid gap-6 sm:grid-cols-2">
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Name</p>
                 <p className="text-foreground font-medium">{banner.name}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">URL</p>
                 <p className="text-foreground font-medium">{banner.url || <span className="text-muted-foreground italic">Not set</span>}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Promoted Product</p>
                 <p className="text-foreground font-medium">{banner.promotedProduct || <span className="text-muted-foreground italic">None</span>}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Created</p>
                 <p className="text-foreground font-medium">{banner.created}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Type</p>
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                   {banner.type}
                 </span>
               </div>
             </div>
           </div>
         </div>
 
         {/* Images Card */}
         <div className="rounded-xl border border-border bg-card">
           <div className="px-6 py-4 border-b border-border bg-muted/30">
             <h2 className="section-title">Banner Images</h2>
           </div>
           <div className="p-6 space-y-4">
             <div>
               <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">English</p>
               <div className="h-24 rounded-lg bg-muted flex items-center justify-center text-4xl border border-border">
                 {banner.photoEN}
               </div>
             </div>
              <div>
               <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Malaysia</p>
               <div className="h-24 rounded-lg bg-muted flex items-center justify-center text-4xl border border-border">
                 {banner.photoMS}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }