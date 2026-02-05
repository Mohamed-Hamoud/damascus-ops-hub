 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 
 /**
  * StatCard Component
  * DaisyUI equivalent: card card-compact bg-base-100 shadow-sm
  * 
  * HAML structure:
  * .card.bg-base-100.shadow-sm
  *   .card-body
  *     %p.text-xs.uppercase.tracking-wider.text-gray-500= title
  *     %p.text-2xl.font-bold= value
  *     - if trend
  *       %p.text-xs.font-semibold{ class: trend[:positive] ? 'text-green-600' : 'text-red-600' }
  *         = trend[:value]
  *     .stat-icon
  *       = icon
  */
 
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
        "rounded-lg border p-4 card-shadow",
         variantStyles[variant],
         className
       )}
     >
       <div className="flex items-start justify-between">
         <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
             {title}
           </p>
          <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
           {trend && (
             <p
               className={cn(
                 "text-xs font-semibold flex items-center gap-1",
                trend.isPositive ? "text-success" : "text-destructive"
               )}
             >
               <span className={cn("inline-block", trend.isPositive ? "rotate-0" : "rotate-180")}>↑</span>
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