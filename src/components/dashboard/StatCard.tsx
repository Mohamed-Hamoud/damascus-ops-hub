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
   /* DaisyUI: card bg-base-100 */
   default: "bg-white dark:bg-gray-800 hover:border-[#aa1e2c]/20",
   /* DaisyUI: card bg-success/5 */
   success: "bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 hover:border-green-400 dark:from-green-900/20 dark:to-green-800/20 dark:border-green-700",
   /* DaisyUI: card bg-warning/5 */
   warning: "bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200 hover:border-yellow-400 dark:from-yellow-900/20 dark:to-yellow-800/20 dark:border-yellow-700",
   /* DaisyUI: card bg-error/5 */
   destructive: "bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 hover:border-red-400 dark:from-red-900/20 dark:to-red-800/20 dark:border-red-700",
   /* DaisyUI: card bg-info/5 */
   info: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-400 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-700",
 };
 
 const iconStyles = {
   /* Damascus red primary */
   default: "bg-[#aa1e2c]/10 text-[#aa1e2c] shadow-sm",
   success: "bg-green-100 text-green-600 shadow-sm dark:bg-green-900/30 dark:text-green-400",
   warning: "bg-yellow-100 text-yellow-600 shadow-sm dark:bg-yellow-900/30 dark:text-yellow-400",
   destructive: "bg-red-100 text-red-600 shadow-sm dark:bg-red-900/30 dark:text-red-400",
   info: "bg-blue-100 text-blue-600 shadow-sm dark:bg-blue-900/30 dark:text-blue-400",
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
         /* DaisyUI: card card-compact shadow-sm hover:shadow-md */
         "rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm",
         variantStyles[variant],
         className
       )}
     >
       <div className="flex items-start justify-between">
         <div className="space-y-1">
           {/* DaisyUI: text-base-content/60 */}
           <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
             {title}
           </p>
           <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</p>
           {trend && (
             <p
               className={cn(
                 "text-xs font-semibold flex items-center gap-1",
                 trend.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
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