import { Edit, Trash2, GripVertical } from "lucide-react";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
/**
 * DivisionCard Component
 * Card for displaying division with reorder handle
 * 
 * HAML Equivalent:
 * ```haml
 * .rounded-xl.border.border-border.bg-card.p-5
 *   .flex.items-center.justify-between
 *     %div
 *       %h3.font-semibold.text-lg.text-foreground= name
 *       %p.text-sm.text-muted-foreground= "#{product_count} products"
 *     .flex.gap-1
 *       %button.icon-btn{ title: 'Edit Division' }
 *         = lucide_icon "edit", class: "h-4 w-4"
 *       %button.icon-btn{ title: 'Delete Division' }
 *         = lucide_icon "trash-2", class: "h-4 w-4"
 *       %button.drag-handle{ title: 'Drag to reorder' }
 *         = lucide_icon "grip-vertical", class: "h-4 w-4"
 * ```
 * 
 * DaisyUI: card, btn btn-ghost btn-sm
 * 
 * RAILS IMPLEMENTATION NOTE:
 * The drag handle (GripVertical icon) is a visual placeholder.
 * Implement actual drag-and-drop in Rails using:
 * - Stimulus controller with Sortable.js
 * - See DAISYUI_MIGRATION_GUIDE.md section "Drag-and-Drop Reordering Implementation"
 * - The .drag-handle class triggers Sortable.js handle behavior
 */

 interface DivisionCardProps {
   name: string;
   productCount: number;
   onEdit?: () => void;
   onDelete?: () => void;
  onDrag?: () => void;
 }
 
export function DivisionCard({ name, productCount, onEdit, onDelete, onDrag }: DivisionCardProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-5">
       <div className="flex items-center justify-between">
         <div>
           <h3 className="font-semibold text-lg text-foreground">{name}</h3>
           <p className="text-sm text-muted-foreground">{productCount} products</p>
         </div>
         <div className="flex gap-1">
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <button 
                   onClick={onEdit}
                   className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                 >
                   <Edit className="h-4 w-4" />
                 </button>
               </TooltipTrigger>
               <TooltipContent>Edit Division</TooltipContent>
             </Tooltip>
           </TooltipProvider>
           <TooltipProvider>
             <Tooltip>
               <TooltipTrigger asChild>
                 <button 
                   onClick={onDelete}
                   className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                 >
                   <Trash2 className="h-4 w-4" />
                 </button>
               </TooltipTrigger>
               <TooltipContent>Delete Division</TooltipContent>
             </Tooltip>
           </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onMouseDown={onDrag}
                  className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted cursor-grab active:cursor-grabbing transition-colors"
                >
                  <GripVertical className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Drag to reorder</TooltipContent>
            </Tooltip>
          </TooltipProvider>
         </div>
       </div>
     </div>
   );
 }