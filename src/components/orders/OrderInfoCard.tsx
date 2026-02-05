 import { SectionCard } from "@/components/dashboard/SectionCard";
 
 interface OrderInfoCardProps {
   orderId: string;
   internalId: string;
   created: string;
   extDeliveryFee: string;
   gatewayFee: string;
   earnPoints: string;
 }
 
 export function OrderInfoCard({
   orderId,
   internalId,
   created,
   extDeliveryFee,
   gatewayFee,
   earnPoints,
 }: OrderInfoCardProps) {
   return (
     <div className="rounded-lg border bg-card p-4 card-shadow">
       <h2 className="mb-4 section-title">Order Info</h2>
       <div className="grid gap-4 sm:grid-cols-2">
         <div className="space-y-3">
           <InfoRow label="Order ID" value={`#${orderId}`} isPrimary />
           <InfoRow label="Created" value={created} />
           <InfoRow label="Gateway Fee" value={gatewayFee} />
         </div>
         <div className="space-y-3">
           <InfoRow label="Internal ID" value={internalId} />
           <InfoRow label="Ext. Delivery Fee" value={extDeliveryFee} />
           <InfoRow label="Est. Earn Points" value={earnPoints} />
         </div>
       </div>
     </div>
   );
 }
 
 function InfoRow({ 
   label, 
   value, 
   isPrimary = false 
 }: { 
   label: string; 
   value: string; 
   isPrimary?: boolean;
 }) {
   return (
     <div>
       <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
         {label}
       </span>
       <p className={isPrimary ? "font-bold text-primary text-lg" : "font-medium text-foreground"}>
         {value}
       </p>
     </div>
   );
 }