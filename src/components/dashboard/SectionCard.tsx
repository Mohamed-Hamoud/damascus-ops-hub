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
      "rounded-lg border bg-card card-shadow overflow-hidden",
       className
     )}>
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-3">
        <h3 className="section-title">{title}</h3>
         {action && (
           <Link
             to={action.href}
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"
           >
             {action.label}
             <ChevronRight className="h-3 w-3" />
           </Link>
         )}
       </div>
      <div className="p-4">{children}</div>
     </div>
   );
 }