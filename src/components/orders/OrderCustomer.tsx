 import { User, Phone, Smartphone } from "lucide-react";
 
 interface OrderCustomerProps {
   name: string;
   phone: string;
   device: string;
 }
 
 export function OrderCustomer({ name, phone, device }: OrderCustomerProps) {
   return (
     <div className="rounded-lg border bg-card p-4 card-shadow">
       <h2 className="mb-4 section-title">Customer Details</h2>
       <div className="space-y-4">
         <CustomerRow
           icon={<User className="h-4 w-4 text-primary" />}
           iconBg="bg-primary/10"
           label="Name"
           value={name}
           isPrimary
         />
         <CustomerRow
           icon={<Phone className="h-4 w-4 text-green-500" />}
           iconBg="bg-green-100 dark:bg-green-900/30"
           label="Phone"
           value={phone}
         />
         <CustomerRow
           icon={<Smartphone className="h-4 w-4 text-amber-500" />}
           iconBg="bg-amber-100 dark:bg-amber-900/30"
           label="Device"
           value={device}
         />
       </div>
     </div>
   );
 }
 
 function CustomerRow({
   icon,
   iconBg,
   label,
   value,
   isPrimary = false,
 }: {
   icon: React.ReactNode;
   iconBg: string;
   label: string;
   value: string;
   isPrimary?: boolean;
 }) {
   return (
     <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
       <div className={`h-8 w-8 rounded-lg ${iconBg} flex items-center justify-center`}>
         {icon}
       </div>
       <div>
         <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
           {label}
         </span>
         <p className={isPrimary ? "font-semibold text-primary" : "font-medium"}>
           {value}
         </p>
       </div>
     </div>
   );
 }