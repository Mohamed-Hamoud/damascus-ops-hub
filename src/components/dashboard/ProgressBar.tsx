 import { cn } from "@/lib/utils";
 
 /**
  * ProgressBar Component
  * DaisyUI equivalent: progress progress-{variant}
  * 
  * HAML structure:
  * .space-y-2
  *   .flex.items-center.justify-between.text-sm
  *     %span.font-medium.text-gray-900= label
  *     %span.font-semibold= "#{percentage}%"
  *   %progress.progress.progress-primary.w-full{ value: percentage, max: 100 }
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
   /* DaisyUI: progress-primary - Damascus red */
   default: "bg-[#aa1e2c]",
   /* DaisyUI: progress-success */
   success: "bg-green-500",
   /* DaisyUI: progress-warning */
   warning: "bg-yellow-500",
   /* DaisyUI: progress-error */
   destructive: "bg-red-500",
   /* DaisyUI: progress-info */
   info: "bg-blue-500",
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
         <span className="font-medium text-gray-900 dark:text-white">{label}</span>
         {showPercentage && (
           <span className="font-semibold text-gray-900 dark:text-white">{percentage.toFixed(0)}%</span>
         )}
       </div>
       {/* DaisyUI: progress w-full */}
       <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
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