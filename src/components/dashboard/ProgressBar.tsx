 import { cn } from "@/lib/utils";
 
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
     <div className={cn("space-y-1.5", className)}>
       <div className="flex items-center justify-between text-sm">
         <span className="text-muted-foreground">{label}</span>
         {showPercentage && (
           <span className="font-medium">{percentage.toFixed(0)}%</span>
         )}
       </div>
       <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
         <div
           className={cn("h-full rounded-full transition-all", variantStyles[variant])}
           style={{ width: `${percentage}%` }}
         />
       </div>
     </div>
   );
 }