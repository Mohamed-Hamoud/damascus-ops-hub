 import { ReactNode } from "react";
 import { ArrowLeft } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 
/**
 * PageHeader Component
 * Standardized page header with optional back navigation and actions.
 *
 * HAML Equivalent:
 * ```haml
 * .space-y-4
 *   - if back_link.present?
 *     %a.link-nav{ href: back_link }
 *       %i.h-4.w-4{ data: { lucide: 'arrow-left' } }
 *       = back_label || "Back"
 *   .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
 *     .flex.items-center.gap-3
 *       %h1.page-title= title
 *       = badge
 *     .flex.flex-wrap.items-center.gap-2
 *       = actions
 *   - if subtitle.present?
 *     %p.page-subtitle.-mt-2= subtitle
 * ```
 */

 interface PageHeaderProps {
   title: string;
   subtitle?: string;
   backLink?: string;
   backLabel?: string;
   actions?: ReactNode;
   badge?: ReactNode;
 }
 
 export function PageHeader({
   title,
   subtitle,
   backLink,
   backLabel,
   actions,
   badge,
 }: PageHeaderProps) {
   const navigate = useNavigate();
 
   return (
     <div className="space-y-4">
       {backLink && (
         <button
           onClick={() => navigate(backLink)}
           className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
         >
           <ArrowLeft className="h-4 w-4" />
           {backLabel || "Back"}
         </button>
       )}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div className="flex items-center gap-3">
           <h1 className="page-title">{title}</h1>
           {badge}
         </div>
         {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
       </div>
       {subtitle && <p className="page-subtitle -mt-2">{subtitle}</p>}
     </div>
   );
 }