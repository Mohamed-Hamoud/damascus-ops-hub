 import { Building, MapPin } from "lucide-react";
 
 interface OrderLocationsProps {
   branch: string;
   address: string;
 }
 
 export function OrderLocations({ branch, address }: OrderLocationsProps) {
   return (
     <div className="rounded-lg border bg-card p-4 card-shadow">
       <h2 className="mb-4 section-title">Locations</h2>
       <div className="space-y-4">
         <LocationRow
           icon={<Building className="h-4 w-4 text-primary" />}
           iconBg="bg-primary/10"
           label="Branch"
           value={branch}
         />
         <LocationRow
           icon={<MapPin className="h-4 w-4 text-blue-500" />}
           iconBg="bg-blue-100 dark:bg-blue-900/30"
           label="Delivery Address"
           value={address}
         />
       </div>
     </div>
   );
 }
 
 function LocationRow({
   icon,
   iconBg,
   label,
   value,
 }: {
   icon: React.ReactNode;
   iconBg: string;
   label: string;
   value: string;
 }) {
   return (
     <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
       <div className={`h-8 w-8 rounded-lg ${iconBg} flex items-center justify-center`}>
         {icon}
       </div>
       <div>
         <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
           {label}
         </span>
         <p className="font-medium">{value}</p>
       </div>
     </div>
   );
 }