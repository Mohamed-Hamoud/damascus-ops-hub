 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 import { Link } from "react-router-dom";
 
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
     <div className={cn("rounded-lg border bg-card card-shadow", className)}>
       <div className="flex items-center justify-between border-b px-4 py-3">
         <h3 className="text-sm font-semibold">{title}</h3>
         {action && (
           <Link
             to={action.href}
             className="text-xs font-medium text-primary hover:underline"
           >
             {action.label}
           </Link>
         )}
       </div>
       <div className="p-4">{children}</div>
     </div>
   );
 }