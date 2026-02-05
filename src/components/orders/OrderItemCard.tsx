 interface OrderItemAddon {
   name: string;
   qty: number;
   price: string;
 }
 
 interface OrderItemModifier {
   name: string;
   price: string;
 }
 
 interface OrderItemCardProps {
   name: string;
   qty: number;
   price: string;
   total: string;
   addons?: OrderItemAddon[];
   modifiers?: OrderItemModifier[];
   emoji?: string;
 }
 
 export function OrderItemCard({
   name,
   qty,
   price,
   total,
   addons = [],
   modifiers = [],
   emoji = "🍽️",
 }: OrderItemCardProps) {
   return (
     <div className="rounded-lg border bg-card p-4">
       <div className="flex items-start justify-between">
         <div className="flex gap-4">
           <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center text-2xl">
             {emoji}
           </div>
           <div>
             <h4 className="font-semibold text-primary">{name}</h4>
             <p className="text-sm text-muted-foreground">{price}</p>
             
             {addons.length > 0 && (
               <div className="mt-2">
                 <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                   Addons
                 </span>
                 {addons.map((addon, i) => (
                   <p key={i} className="text-sm text-primary">
                     {addon.qty}x {addon.name} — {addon.price}
                   </p>
                 ))}
               </div>
             )}
             
             {modifiers.length > 0 && (
               <div className="mt-2">
                 <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                   Modifiers
                 </span>
                 {modifiers.map((mod, i) => (
                   <p key={i} className="text-sm text-foreground">
                     {mod.name} — {mod.price}
                   </p>
                 ))}
               </div>
             )}
           </div>
         </div>
         <div className="text-right">
           <span className="text-xl font-bold text-foreground">{qty}x</span>
           <p className="text-sm font-semibold text-foreground">{total}</p>
         </div>
       </div>
     </div>
   );
 }