 import { cn } from "@/lib/utils";
 
 /**
  * StatusBadge Component
  * DaisyUI equivalent: badge badge-{variant}
  * 
  * HAML structure:
  * %span.badge.badge-sm{ class: badge_class(status) }= label
  * 
  * Badge classes mapping:
  * - completed: badge-success
  * - pending: badge-warning
  * - accepted, delivering: badge-info
  * - cancelled, failed: badge-error
  * - new: badge-ghost
  */
 
 type StatusType = "completed" | "pending" | "accepted" | "delivering" | "cancelled" | "failed" | "new";
 
 interface StatusBadgeProps {
   status: StatusType | string;
   className?: string;
 }
 
 const statusConfig: Record<string, { label: string; className: string }> = {
   /* DaisyUI: badge-success */
   completed: { 
     label: "Completed", 
     className: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700" 
   },
   /* DaisyUI: badge-warning */
   pending: { 
     label: "Pending", 
     className: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700" 
   },
   /* DaisyUI: badge-info */
   accepted: { 
     label: "Kitchen Accepted", 
     className: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700" 
   },
   /* DaisyUI: badge-info */
   delivering: { 
     label: "Ready To Deliver", 
     className: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700" 
   },
   /* DaisyUI: badge-error */
   cancelled: { 
     label: "Cancelled", 
     className: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700" 
   },
   /* DaisyUI: badge-error */
   failed: { 
     label: "Failed", 
     className: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700" 
   },
   /* DaisyUI: badge-ghost */
   new: { 
     label: "New", 
     className: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600" 
   },
 };
 
 export function StatusBadge({ status, className }: StatusBadgeProps) {
   const config = statusConfig[status.toLowerCase()] || {
     label: status,
     className: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
   };
 
   return (
     <span
       className={cn(
         /* DaisyUI: badge badge-sm */
         "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
         config.className,
         className
       )}
     >
       {config.label}
     </span>
   );
 }