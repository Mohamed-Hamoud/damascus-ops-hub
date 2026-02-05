 import { cn } from "@/lib/utils";
 
 /**
  * StatusBadge Component
  * 
 * HAML Equivalent:
 * ```haml
 * %span.inline-flex.items-center.rounded-full.border.px-2\.5.py-0\.5.text-xs.font-medium{ class: status_class(status) }
 *   = status_label(status)
 * ```
  * 
 * DaisyUI Mapping:
 * | Status     | DaisyUI Class   | CSS Utility     |
 * |------------|-----------------|-----------------|
 * | completed  | badge-success   | .badge-success  |
 * | pending    | badge-warning   | .badge-warning  |
 * | accepted   | badge-info      | .badge-info     |
 * | delivering | badge-info      | .badge-info     |
 * | cancelled  | badge-error     | .badge-destructive |
 * | failed     | badge-error     | .badge-destructive |
 * | new        | badge-ghost     | .badge-muted    |
 * 
 * CSS Utilities (from index.css):
 * - .badge-success: bg-success/10 text-success border-success/20
 * - .badge-warning: bg-warning/10 text-warning border-warning/20
 * - .badge-destructive: bg-destructive/10 text-destructive border-destructive/20
 * - .badge-info: bg-info/10 text-info border-info/20
 * - .badge-muted: bg-muted text-muted-foreground border-border
  */
 
 type StatusType = "completed" | "pending" | "accepted" | "delivering" | "cancelled" | "failed" | "new";
 
 interface StatusBadgeProps {
   status: StatusType | string;
   className?: string;
 }
 
 const statusConfig: Record<string, { label: string; className: string }> = {
   completed: { 
     label: "Completed", 
    className: "badge-success" 
   },
   pending: { 
     label: "Pending", 
    className: "badge-warning" 
   },
   accepted: { 
     label: "Kitchen Accepted", 
    className: "badge-info" 
   },
   delivering: { 
     label: "Ready To Deliver", 
    className: "badge-info" 
   },
   cancelled: { 
     label: "Cancelled", 
    className: "badge-destructive" 
   },
   failed: { 
     label: "Failed", 
    className: "badge-destructive" 
   },
   new: { 
     label: "New", 
    className: "badge-muted" 
   },
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