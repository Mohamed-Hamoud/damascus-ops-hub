 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
 
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
    <div className={cn("rounded-xl border bg-card card-shadow overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b bg-muted/30 px-5 py-4">
        <h3 className="text-base font-semibold">{title}</h3>
         {action && (
           <Link
             to={action.href}
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
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