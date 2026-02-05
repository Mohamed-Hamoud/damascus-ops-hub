 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 import { Link } from "react-router-dom";
 import { ChevronRight } from "lucide-react";
 
 /**
  * SectionCard Component
 * 
 * HAML Equivalent:
 * ```haml
 * .card-base.overflow-hidden{ class: additional_classes }
 *   .card-header
 *     %h3.section-title= title
 *     - if action.present?
 *       = link_to action[:href], class: "link-primary text-xs font-semibold flex items-center gap-1" do
 *         = action[:label]
 *         = lucide_icon "chevron-right", class: "h-3 w-3"
 *   .card-body
 *     = yield
 * ```
 * 
 * DaisyUI: card bg-base-100 shadow-sm, card-body
 * CSS Utilities: .card-base, .card-header, .card-body, .section-title (index.css)
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