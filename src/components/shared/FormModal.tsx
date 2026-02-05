 import { ReactNode } from "react";
 import { X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogFooter,
 } from "@/components/ui/dialog";
 
 /**
  * FormModal Component
 * Dialog wrapper for forms with consistent header, body, and footer.
 *
 * DaisyUI Equivalent: modal, modal-box, modal-action
 *
 * HAML Equivalent:
 * ```haml
 * %dialog.modal#form-modal
 *   .modal-box{ class: size_classes[size] }
 *     %form{ method: 'dialog' }
 *       %button.btn.btn-sm.btn-circle.btn-ghost.absolute.right-2.top-2 ✕
 *     %h3.font-bold.text-lg= title
 *     - if description.present?
 *       %p.py-2.text-muted-foreground= description
 *     .py-4.max-h-[60vh].overflow-y-auto
 *       = yield
 *     .modal-action.border-t.bg-muted\/30.px-6.py-4
 *       %button.btn-secondary{ onclick: "close_modal()" }= cancel_label
 *       %button.btn-primary{ type: 'submit' }= submit_label
 * ```
 *
 * Size Classes: sm → max-w-md, md → max-w-lg, lg → max-w-2xl, xl → max-w-4xl
  */
 
 interface FormModalProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   title: string;
   description?: string;
   children: ReactNode;
   onSubmit?: () => void;
   submitLabel?: string;
   cancelLabel?: string;
   isLoading?: boolean;
   size?: "sm" | "md" | "lg" | "xl";
 }
 
 const sizeClasses = {
   sm: "max-w-md",
   md: "max-w-lg",
   lg: "max-w-2xl",
   xl: "max-w-4xl",
 };
 
 export function FormModal({
   open,
   onOpenChange,
   title,
   description,
   children,
   onSubmit,
   submitLabel = "Save",
   cancelLabel = "Cancel",
   isLoading = false,
   size = "md",
 }: FormModalProps) {
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className={`${sizeClasses[size]} p-0 gap-0`}>
         {/* DaisyUI: modal-header */}
         <DialogHeader className="px-6 py-4 border-b">
           <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
           {description && (
             <p className="text-sm text-muted-foreground">{description}</p>
           )}
         </DialogHeader>
 
         {/* DaisyUI: modal-body */}
         <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">{children}</div>
 
         {/* DaisyUI: modal-action */}
         <DialogFooter className="px-6 py-4 border-t bg-muted/30">
           <Button
             variant="outline"
             onClick={() => onOpenChange(false)}
             disabled={isLoading}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
           >
             {cancelLabel}
           </Button>
           {onSubmit && (
             <Button
               onClick={onSubmit}
               disabled={isLoading}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
             >
               {isLoading ? "Saving..." : submitLabel}
             </Button>
           )}
         </DialogFooter>
       </DialogContent>
     </Dialog>
   );
 }
 
 /**
  * Delete Confirmation Modal
  */
 interface DeleteModalProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   title?: string;
   description?: string;
   onConfirm: () => void;
   isLoading?: boolean;
   itemName?: string;
 }
 
 export function DeleteModal({
   open,
   onOpenChange,
   title = "Delete Item",
   description,
   onConfirm,
   isLoading = false,
   itemName,
 }: DeleteModalProps) {
   const defaultDescription = itemName
     ? `Are you sure you want to delete "${itemName}"? This action cannot be undone.`
     : "Are you sure you want to delete this item? This action cannot be undone.";
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-md">
         <DialogHeader>
           <DialogTitle className="text-destructive">{title}</DialogTitle>
         </DialogHeader>
         <p className="text-muted-foreground py-4">
           {description || defaultDescription}
         </p>
         <DialogFooter>
           <Button
             variant="outline"
             onClick={() => onOpenChange(false)}
             disabled={isLoading}
           >
             Cancel
           </Button>
           <Button
             variant="destructive"
             onClick={onConfirm}
             disabled={isLoading}
           >
             {isLoading ? "Deleting..." : "Delete"}
           </Button>
         </DialogFooter>
       </DialogContent>
     </Dialog>
   );
 }