 import { useNavigate, useParams } from "react-router-dom";
 import { ArrowLeft, Edit, Trash2 } from "lucide-react";
 
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
         <button
           onClick={() => navigate("/banners")}
           className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
         >
           <ArrowLeft className="h-4 w-4" />
           Banners
         </button>
         <div className="text-center py-12 text-muted-foreground">Banner not found</div>
       </div>
     );
   }
 
   return (
     <div className="space-y-6">
       <button
         onClick={() => navigate("/banners")}
         className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
       >
         <ArrowLeft className="h-4 w-4" />
         Banners
       </button>
 
       <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold tracking-tight">{banner.name}</h1>
         <div className="flex items-center gap-2">
           <button
             onClick={() => navigate(`/banners/${id}/edit`)}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground flex items-center gap-2"
           >
             <Edit className="h-4 w-4" />
             Edit
           </button>
           <button className="px-4 py-2 text-sm font-medium rounded-lg bg-destructive text-destructive-foreground flex items-center gap-2">
             <Trash2 className="h-4 w-4" />
             Delete
           </button>
         </div>
       </div>
 
       <div className="rounded-xl border bg-card">
         <div className="p-6 border-b">
           <h2 className="text-lg font-semibold">Banner Information</h2>
         </div>
         <div className="p-6 space-y-4">
           <div className="grid gap-4 sm:grid-cols-2">
             <div>
               <p className="text-sm text-muted-foreground">Name</p>
               <p className="font-medium">{banner.name}</p>
             </div>
             <div>
               <p className="text-sm text-muted-foreground">URL</p>
               <p className="font-medium">{banner.url || "—"}</p>
             </div>
             <div>
               <p className="text-sm text-muted-foreground">Promoted Product</p>
               <p className="font-medium">{banner.promotedProduct || "—"}</p>
             </div>
             <div>
               <p className="text-sm text-muted-foreground">Created</p>
               <p className="font-medium">{banner.created}</p>
             </div>
             <div>
               <p className="text-sm text-muted-foreground">Visible</p>
              <span className={`text-sm font-semibold ${banner.visible ? "text-primary" : "text-muted-foreground"}`}>
                 {banner.visible ? "YES" : "NO"}
               </span>
             </div>
             <div>
               <p className="text-sm text-muted-foreground">Type</p>
              <span className="text-sm font-semibold text-primary">{banner.type}</span>
             </div>
           </div>
 
           <div className="pt-4 border-t">
             <h3 className="text-base font-semibold mb-4">Banner Images</h3>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <p className="text-sm text-muted-foreground">Image (English)</p>
                 <div className="h-32 rounded-lg bg-muted flex items-center justify-center text-4xl">
                   {banner.photoEN}
                 </div>
               </div>
               <div className="space-y-2">
                 <p className="text-sm text-muted-foreground">Image (Malaysia)</p>
                 <div className="h-32 rounded-lg bg-muted flex items-center justify-center text-4xl">
                   {banner.photoMS}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }