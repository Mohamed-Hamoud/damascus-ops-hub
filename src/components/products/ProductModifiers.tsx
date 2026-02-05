 import { Edit, Trash2, Plus } from "lucide-react";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 interface ModifierOption {
   id: number;
   nameEN: string;
   nameMS: string;
   price: number;
 }
 
 interface Modifier {
   id: number;
   nameEN: string;
   nameMS: string;
   minAmount: number;
   maxAmount: number;
   options: ModifierOption[];
 }
 
 interface ProductModifiersProps {
   modifiers: Modifier[];
   onAdd: () => void;
   onEdit: (modifier: Modifier) => void;
   onDelete?: (modifier: Modifier) => void;
 }
 
 export function ProductModifiers({ 
   modifiers, 
   onAdd, 
   onEdit,
   onDelete 
 }: ProductModifiersProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-6">
       <div className="flex items-center justify-between mb-4">
         <h3 className="section-title">Modificators</h3>
         <button 
           onClick={onAdd}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Modificator
         </button>
       </div>
       <div className="space-y-4">
         {modifiers.map((modifier) => (
           <ModifierCard 
             key={modifier.id} 
             modifier={modifier} 
             onEdit={() => onEdit(modifier)}
             onDelete={onDelete ? () => onDelete(modifier) : undefined}
           />
         ))}
         {modifiers.length === 0 && (
           <p className="text-center text-muted-foreground py-4">No modifiers configured</p>
         )}
       </div>
     </div>
   );
 }
 
 function ModifierCard({ 
   modifier, 
   onEdit,
   onDelete 
 }: { 
   modifier: Modifier; 
   onEdit: () => void;
   onDelete?: () => void;
 }) {
   return (
     <div className="border border-border rounded-lg p-4">
       <div className="flex items-start justify-between">
         <div>
           <p className="font-medium text-foreground">
             Name: <span className="font-semibold">{modifier.nameEN} / {modifier.nameMS}</span>
           </p>
           <p className="text-sm text-muted-foreground mt-1">
             Min Amount: <span className="font-medium text-foreground">{modifier.minAmount}</span>
           </p>
           <p className="text-sm text-muted-foreground">
             Max Amount: <span className="font-medium text-foreground">{modifier.maxAmount}</span>
           </p>
           {modifier.options.map((opt) => (
             <div key={opt.id} className="flex items-center justify-between mt-2 pt-2 border-t border-border">
               <span className="text-sm text-foreground">{opt.nameEN}</span>
               <span className="text-sm font-semibold text-foreground">{opt.price.toFixed(2)}</span>
             </div>
           ))}
         </div>
         <div className="flex gap-1">
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <button 
                   onClick={onEdit}
                   className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
                 >
                   <Edit className="h-4 w-4" />
                 </button>
               </TooltipTrigger>
               <TooltipContent>Edit Modifier</TooltipContent>
             </Tooltip>
           </TooltipProvider>
           {onDelete && (
             <TooltipProvider>
               <Tooltip>
                 <TooltipTrigger asChild>
                   <button 
                     onClick={onDelete}
                     className="h-8 w-8 flex items-center justify-center rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                   >
                     <Trash2 className="h-4 w-4" />
                   </button>
                 </TooltipTrigger>
                 <TooltipContent>Delete Modifier</TooltipContent>
               </Tooltip>
             </TooltipProvider>
           )}
         </div>
       </div>
     </div>
   );
 }
 
 export type { Modifier, ModifierOption };