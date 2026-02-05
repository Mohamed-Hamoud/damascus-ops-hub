 import { Edit, Trash2 } from "lucide-react";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 interface CategoryCardProps {
   name: string;
   productCount: number;
   onEdit?: () => void;
   onDelete?: () => void;
 }
 
 export function CategoryCard({ name, productCount, onEdit, onDelete }: CategoryCardProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-5">
       <div className="flex items-center justify-between">
         <div>
           <h3 className="font-semibold text-lg text-foreground">{name}</h3>
           <p className="text-sm text-muted-foreground">{productCount} products</p>
         </div>
         <div className="flex gap-1">
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <button 
                   onClick={onEdit}
                   className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                 >
                   <Edit className="h-4 w-4" />
                 </button>
               </TooltipTrigger>
               <TooltipContent>Edit Category</TooltipContent>
             </Tooltip>
           </TooltipProvider>
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <button 
                   onClick={onDelete}
                   className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                 >
                   <Trash2 className="h-4 w-4" />
                 </button>
               </TooltipTrigger>
               <TooltipContent>Delete Category</TooltipContent>
             </Tooltip>
           </TooltipProvider>
         </div>
       </div>
     </div>
   );
 }