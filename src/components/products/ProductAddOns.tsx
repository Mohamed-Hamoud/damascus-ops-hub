 import { Plus } from "lucide-react";
 
 interface AddOn {
   id: number;
   nameEN: string;
   nameMS: string;
   price: number;
 }
 
 interface ProductAddOnsProps {
   addOns: AddOn[];
   onAdd: () => void;
 }
 
 export function ProductAddOns({ addOns, onAdd }: ProductAddOnsProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-6">
       <div className="flex items-center justify-between mb-4">
         <h3 className="section-title">Add On</h3>
         <button 
           onClick={onAdd}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           Add Add On
         </button>
       </div>
       <div className="space-y-4">
         <p className="font-medium text-foreground">Name: <span className="font-semibold">Add On</span></p>
         {addOns.length === 0 && (
           <p className="text-muted-foreground">No add-ons configured</p>
         )}
         {addOns.map((addOn) => (
           <div key={addOn.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
             <span className="text-foreground">{addOn.nameEN}</span>
             <span className="font-semibold text-foreground">RM {addOn.price.toFixed(2)}</span>
           </div>
         ))}
       </div>
     </div>
   );
 }
 
 export type { AddOn };