 import { LucideIcon } from "lucide-react";
 
 interface CustomerStatCardProps {
   icon: LucideIcon;
   iconColor: string;
   iconBg: string;
   value: string | number;
   label: string;
 }
 
 export function CustomerStatCard({ 
   icon: Icon, 
   iconColor, 
   iconBg, 
   value, 
   label 
 }: CustomerStatCardProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
       <div className={`h-10 w-10 rounded-lg ${iconBg} flex items-center justify-center`}>
         <Icon className={`h-5 w-5 ${iconColor}`} />
       </div>
       <div>
         <p className="text-xl font-bold text-foreground">{value}</p>
         <p className="text-xs text-muted-foreground">{label}</p>
       </div>
     </div>
   );
 }