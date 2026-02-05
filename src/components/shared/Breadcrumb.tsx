 import { ChevronRight, Home } from "lucide-react";
 import { Link } from "react-router-dom";
 
 interface BreadcrumbItem {
   label: string;
   href?: string;
 }
 
 interface BreadcrumbProps {
   items: BreadcrumbItem[];
   showHome?: boolean;
 }
 
 export function Breadcrumb({ items, showHome = true }: BreadcrumbProps) {
   return (
     <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
       {showHome && (
         <>
           <Link
             to="/"
             className="flex items-center hover:text-foreground transition-colors"
           >
             <Home className="h-4 w-4" />
           </Link>
           <ChevronRight className="h-4 w-4" />
         </>
       )}
       {items.map((item, index) => (
         <div key={index} className="flex items-center gap-1.5">
           {item.href ? (
             <Link
               to={item.href}
               className="hover:text-foreground transition-colors"
             >
               {item.label}
             </Link>
           ) : (
             <span className="text-foreground font-medium">{item.label}</span>
           )}
           {index < items.length - 1 && (
             <ChevronRight className="h-4 w-4" />
           )}
         </div>
       ))}
     </nav>
   );
 }