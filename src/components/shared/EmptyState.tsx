 import { LucideIcon, Package, FileText, Users, ShoppingCart, Search, Ticket, Gift, MapPin, Star, Image, Settings } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 /**
  * EmptyState Component
 * Unified empty state with icons for all list views.
 *
 * HAML Equivalent:
 * ```haml
 * .empty-state{ class: variant == 'compact' ? 'py-8 px-4' : 'py-12 px-6' }
 *   .rounded-full.bg-muted.flex.items-center.justify-center{ class: compact ? 'h-12 w-12 mb-3' : 'h-16 w-16 mb-4' }
 *     %i.text-muted-foreground{ data: { lucide: icon_name }, class: compact ? 'h-6 w-6' : 'h-8 w-8' }
 *   %h3.font-semibold.text-foreground{ class: compact ? 'text-sm' : 'text-base' }= title
 *   - if description.present?
 *     %p.text-muted-foreground.mt-1.max-w-sm{ class: compact ? 'text-xs' : 'text-sm' }= description
 *   - if action_label.present? && on_action.present?
 *     %button.btn-primary.mt-4{ onclick: on_action }= action_label
 * ```
 *
 * Variants: default, compact (smaller), card (with border wrapper)
  */
 
 // Preset icons for common modules
 export const emptyStateIcons = {
   products: Package,
   customers: Users,
   orders: ShoppingCart,
   reports: FileText,
   tickets: Ticket,
   vouchers: Gift,
   branches: MapPin,
   evaluations: Star,
   banners: Image,
   settings: Settings,
   search: Search,
 } as const;
 
 interface EmptyStateProps {
   icon?: LucideIcon;
   title: string;
   description?: string;
   actionLabel?: string;
   onAction?: () => void;
   variant?: "default" | "compact" | "card";
 }
 
 export function EmptyState({
   icon: Icon = Package,
   title,
   description,
   actionLabel,
   onAction,
   variant = "default",
 }: EmptyStateProps) {
   const isCompact = variant === "compact";
   const isCard = variant === "card";
 
   const content = (
     <div
       className={`flex flex-col items-center justify-center text-center ${
         isCompact ? "py-8 px-4" : "py-12 px-6"
       }`}
     >
       <div
         className={`rounded-full bg-muted flex items-center justify-center ${
           isCompact ? "h-12 w-12 mb-3" : "h-16 w-16 mb-4"
         }`}
       >
         <Icon
           className={`text-muted-foreground ${isCompact ? "h-6 w-6" : "h-8 w-8"}`}
         />
       </div>
       <h3
         className={`font-semibold text-foreground ${
           isCompact ? "text-sm" : "text-base"
         }`}
       >
         {title}
       </h3>
       {description && (
         <p
           className={`text-muted-foreground mt-1 max-w-sm ${
             isCompact ? "text-xs" : "text-sm"
           }`}
         >
           {description}
         </p>
       )}
       {actionLabel && onAction && (
         <Button
           onClick={onAction}
           size={isCompact ? "sm" : "default"}
           className="mt-4"
         >
           {actionLabel}
         </Button>
       )}
     </div>
   );
 
   if (isCard) {
     return (
       <div className="rounded-xl border border-border bg-card">
         {content}
       </div>
     );
   }
 
   return content;
 }
 
 // Pre-configured empty states for common scenarios
 export function NoOrdersFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.orders}
       title="No orders found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }
 
 export function NoProductsFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.products}
       title="No products found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }
 
 export function NoCustomersFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.customers}
       title="No customers found"
       description="Try adjusting your filters or search criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }
 
 export function NoDataAvailable({ title = "No data available" }: { title?: string }) {
   return (
     <EmptyState
       title={title}
       description="Data will appear here once it's available"
     />
   );
 }
 
 export function NoTicketsFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.tickets}
       title="No tickets found"
       description="No support tickets match your criteria"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }
 
 export function NoVouchersFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.vouchers}
       title="No vouchers found"
       description="Create your first voucher to get started"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }
 
 export function NoBranchesFound({ onClearFilters }: { onClearFilters?: () => void }) {
   return (
     <EmptyState
       icon={emptyStateIcons.branches}
       title="No branches found"
       description="Add your first branch location"
       actionLabel={onClearFilters ? "Clear Filters" : undefined}
       onAction={onClearFilters}
     />
   );
 }