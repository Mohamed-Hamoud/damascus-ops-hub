 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 
 interface StatCardProps {
   title: string;
   value: string | number;
   icon?: ReactNode;
   trend?: {
     value: number;
     isPositive: boolean;
   };
   variant?: "default" | "success" | "warning" | "destructive" | "info";
   className?: string;
 }
 
 const variantStyles = {
   default: "bg-card",
   success: "bg-success/5 border-success/20",
   warning: "bg-warning/5 border-warning/20",
   destructive: "bg-destructive/5 border-destructive/20",
   info: "bg-info/5 border-info/20",
 };
 
 const iconStyles = {
   default: "bg-primary/10 text-primary",
   success: "bg-success/10 text-success",
   warning: "bg-warning/10 text-warning",
   destructive: "bg-destructive/10 text-destructive",
   info: "bg-info/10 text-info",
 };
 
 export function StatCard({
   title,
   value,
   icon,
   trend,
   variant = "default",
   className,
 }: StatCardProps) {
   return (
     <div
       className={cn(
         "rounded-lg border p-4 card-shadow transition-all hover:card-shadow-md",
         variantStyles[variant],
         className
       )}
     >
       <div className="flex items-start justify-between">
         <div className="space-y-1">
           <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
             {title}
           </p>
           <p className="text-2xl font-semibold tracking-tight">{value}</p>
           {trend && (
             <p
               className={cn(
                 "text-xs font-medium",
                 trend.isPositive ? "text-success" : "text-destructive"
               )}
             >
               {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
             </p>
           )}
         </div>
         {icon && (
           <div
             className={cn(
               "flex h-10 w-10 items-center justify-center rounded-lg",
               iconStyles[variant]
             )}
           >
             {icon}
           </div>
         )}
       </div>
     </div>
   );
 }