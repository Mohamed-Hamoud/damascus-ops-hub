 import { LucideIcon, Package, FileText, Users, ShoppingCart, Search } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 /**
  * EmptyState Component
  * DaisyUI: hero, card
  */
 
 interface EmptyStateProps {
   icon?: LucideIcon;
   title: string;
   description: string;
   actionLabel?: string;
   onAction?: () => void;
   variant?: "default" | "search" | "error";
 }
 
 const defaultIcons = {
   default: Package,
   search: Search,
   error: FileText,
 };
 
 export function EmptyState({
   icon,
   title,
   description,
   actionLabel,
   onAction,
   variant = "default",
 }: EmptyStateProps) {
   const Icon = icon || defaultIcons[variant];
 
   return (
     <div className="rounded-xl border bg-card p-12 text-center">
       <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
         <Icon className="h-8 w-8 text-muted-foreground" />
       </div>
       <h3 className="text-lg font-semibold mb-2">{title}</h3>
       <p className="text-muted-foreground max-w-sm mx-auto mb-6">{description}</p>
       {actionLabel && onAction && (
         <Button onClick={onAction} className="bg-[#aa1e2c] hover:bg-[#8a1824]">
           {actionLabel}
         </Button>
       )}
     </div>
   );
 }
 
 // Pre-configured empty states for common scenarios
 export function NoOrdersFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={ShoppingCart}
       title="No orders found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
       variant="search"
     />
   );
 }
 
 export function NoProductsFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={Package}
       title="No products found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
       variant="search"
     />
   );
 }
 
 export function NoCustomersFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={Users}
       title="No customers found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
       variant="search"
     />
   );
 }
 
 export function NoDataAvailable({ title = "No data available" }: { title?: string }) {
   return (
     <EmptyState
       title={title}
       description="Data will appear here once it's available"
       variant="default"
     />
   );
 }