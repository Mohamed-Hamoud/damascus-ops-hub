 import { cn } from "@/lib/utils";
 
 type StatusType = "completed" | "pending" | "accepted" | "delivering" | "cancelled" | "failed" | "new";
 
 interface StatusBadgeProps {
   status: StatusType | string;
   className?: string;
 }
 
 const statusConfig: Record<string, { label: string; className: string }> = {
   completed: { label: "Completed", className: "badge-success" },
   pending: { label: "Pending", className: "badge-warning" },
   accepted: { label: "Kitchen Accepted", className: "badge-info" },
   delivering: { label: "Ready To Deliver", className: "badge-info" },
   cancelled: { label: "Cancelled", className: "badge-destructive" },
   failed: { label: "Failed", className: "badge-destructive" },
   new: { label: "New", className: "badge-muted" },
 };
 
 export function StatusBadge({ status, className }: StatusBadgeProps) {
   const config = statusConfig[status.toLowerCase()] || {
     label: status,
     className: "badge-muted",
   };
 
   return (
     <span
       className={cn(
         "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
         config.className,
         className
       )}
     >
       {config.label}
     </span>
   );
 }