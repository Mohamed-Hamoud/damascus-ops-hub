 import { cn } from "@/lib/utils";
 
 /**
  * ProgressBar Component
  * 
 * HAML Equivalent:
 * ```haml
 * .space-y-2
 *   .flex.items-center.justify-between.text-sm
 *     %span.font-medium.text-foreground= label
 *     - if show_percentage
 *       %span.font-semibold.text-foreground= "#{percentage}%"
 *   .h-2\.5.w-full.overflow-hidden.rounded-full.bg-muted
 *     .h-full.rounded-full.transition-all{ class: variant_class, style: "width: #{percentage}%" }
 * ```
 * 
 * DaisyUI Mapping:
 * - default: progress progress-primary
 * - success: progress progress-success
 * - warning: progress progress-warning
 * - destructive: progress progress-error
 * - info: progress progress-info
 * 
 * CSS Variables Used:
 * - --primary (default variant)
 * - --success, --warning, --destructive, --info (status variants)
 * - --muted (track background)
  */
 
 interface ProgressBarProps {
   label: string;
   value: number;
   max?: number;
   showPercentage?: boolean;
   variant?: "default" | "success" | "warning" | "destructive" | "info";
   className?: string;
 }
 
 const variantStyles = {
   default: "bg-primary",
   success: "bg-success",
   warning: "bg-warning",
   destructive: "bg-destructive",
   info: "bg-info",
 };
 
 export function ProgressBar({
   label,
   value,
   max = 100,
   showPercentage = true,
   variant = "default",
   className,
 }: ProgressBarProps) {
   const percentage = Math.min((value / max) * 100, 100);
 
   return (
     <div className={cn("space-y-2", className)}>
       <div className="flex items-center justify-between text-sm">
           <span className="font-medium text-foreground">{label}</span>
         {showPercentage && (
             <span className="font-semibold text-foreground">{percentage.toFixed(0)}%</span>
         )}
       </div>
         <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
         <div
           className={cn(
             "h-full rounded-full transition-all duration-500 ease-out",
             variantStyles[variant]
           )}
           style={{ width: `${percentage}%` }}
         />
       </div>
     </div>
   );
 }