 interface OrderTotalsProps {
   subtotal: string;
   tax: string;
   deliveryFee: string;
   total: string;
   currency?: string;
 }
 
 export function OrderTotals({
   subtotal,
   tax,
   deliveryFee,
   total,
   currency = "RM",
 }: OrderTotalsProps) {
   return (
     <div className="space-y-2 border-t pt-4">
       <TotalRow label="Subtotal" value={subtotal} />
       <TotalRow label="Incl. Tax" value={tax} />
       <TotalRow label="Delivery Fee" value={deliveryFee} />
       <div className="flex justify-between border-t pt-3 text-xl font-bold text-foreground">
         <span>Total</span>
         <span>{currency} {total}</span>
       </div>
     </div>
   );
 }
 
 function TotalRow({ label, value }: { label: string; value: string }) {
   return (
     <div className="flex justify-between text-sm">
       <span className="text-muted-foreground">{label}</span>
       <span className="font-medium text-foreground">{value}</span>
     </div>
   );
 }