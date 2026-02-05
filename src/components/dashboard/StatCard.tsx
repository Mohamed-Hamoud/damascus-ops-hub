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
  default: "bg-card hover:border-primary/20",
  success: "bg-gradient-to-br from-success/5 to-success/10 border-success/20 hover:border-success/40",
  warning: "bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20 hover:border-warning/40",
  destructive: "bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20 hover:border-destructive/40",
  info: "bg-gradient-to-br from-info/5 to-info/10 border-info/20 hover:border-info/40",
 };
 
 const iconStyles = {
  default: "bg-primary/10 text-primary shadow-sm",
  success: "bg-success/15 text-success shadow-sm shadow-success/10",
  warning: "bg-warning/15 text-warning shadow-sm shadow-warning/10",
  destructive: "bg-destructive/15 text-destructive shadow-sm shadow-destructive/10",
  info: "bg-info/15 text-info shadow-sm shadow-info/10",
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
        "rounded-xl border p-5 card-shadow transition-all duration-200 hover:card-shadow-md hover:-translate-y-0.5",
         variantStyles[variant],
         className
       )}
     >
       <div className="flex items-start justify-between">
         <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
             {title}
           </p>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
           {trend && (
             <p
               className={cn(
                "text-xs font-semibold flex items-center gap-1",
                 trend.isPositive ? "text-success" : "text-destructive"
               )}
             >
              <span className={cn(
                "inline-block",
                trend.isPositive ? "rotate-0" : "rotate-180"
              )}>↑</span>
               {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
             </p>
           )}
         </div>
         {icon && (
           <div
             className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl",
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