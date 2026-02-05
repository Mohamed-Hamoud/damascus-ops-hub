 import { ReactNode } from "react";
 import { Label } from "@/components/ui/label";
 import { cn } from "@/lib/utils";
 
 interface FormFieldProps {
   label: string;
   required?: boolean;
   error?: string;
   hint?: string;
   children: ReactNode;
   className?: string;
 }
 
 export function FormField({
   label,
   required,
   error,
   hint,
   children,
   className,
 }: FormFieldProps) {
   return (
     <div className={cn("space-y-2", className)}>
       <Label className="flex items-center gap-1">
         {label}
         {required && <span className="text-destructive">*</span>}
       </Label>
       {children}
       {error ? (
         <p className="text-xs text-destructive">{error}</p>
       ) : hint ? (
         <p className="text-xs text-muted-foreground">{hint}</p>
       ) : null}
     </div>
   );
 }
 
 // Form validation feedback component
 interface FormFeedbackProps {
   type: "success" | "error" | "warning" | "info";
   message: string;
   className?: string;
 }
 
 export function FormFeedback({ type, message, className }: FormFeedbackProps) {
   const styles = {
     success: "bg-success/10 text-success border-success/20",
     error: "bg-destructive/10 text-destructive border-destructive/20",
     warning: "bg-warning/10 text-warning border-warning/20",
     info: "bg-info/10 text-info border-info/20",
   };
 
   return (
     <div
       className={cn(
         "px-3 py-2 text-sm rounded-lg border",
         styles[type],
         className
       )}
     >
       {message}
     </div>
   );
 }