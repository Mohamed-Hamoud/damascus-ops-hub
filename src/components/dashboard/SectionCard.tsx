 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 import { Link } from "react-router-dom";
 import { ChevronRight } from "lucide-react";
 
 /**
  * SectionCard Component
  * DaisyUI equivalent: card bg-base-100 shadow-sm
  * 
  * HAML structure:
  * .card.bg-base-100.shadow-sm
  *   .card-header.bg-base-200.border-b.px-5.py-4
  *     %h3.text-base.font-semibold= title
  *     - if action
  *       %a.link.link-primary.text-xs{ href: action[:href] }= action[:label]
  *   .card-body.p-5
  *     = yield
  */
 
 interface SectionCardProps {
   title: string;
   action?: {
     label: string;
     href: string;
   };
   children: ReactNode;
   className?: string;
 }
 
 export function SectionCard({ title, action, children, className }: SectionCardProps) {
   return (
     <div className={cn(
       /* DaisyUI: card bg-base-100 shadow-sm */
       "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden hover:shadow-none",
       className
     )}>
       {/* DaisyUI: bg-base-200 */}
       <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-5 py-4">
         <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
         {action && (
           <Link
             to={action.href}
             /* DaisyUI: link link-primary */
             className="flex items-center gap-1 text-xs font-semibold text-[#aa1e2c] hover:text-[#aa1e2c]/80"
           >
             {action.label}
             <ChevronRight className="h-3 w-3" />
           </Link>
         )}
       </div>
       <div className="p-5">{children}</div>
     </div>
   );
 }