 interface OrderStatusBannerProps {
   status: string;
 }
 
 const statusConfig: Record<string, { label: string; className: string }> = {
   new: { label: "New Order", className: "bg-primary text-primary-foreground" },
   accepted: { label: "Kitchen Accepted", className: "bg-info text-info-foreground" },
   delivering: { label: "Ready To Deliver", className: "bg-warning text-warning-foreground" },
   completed: { label: "Completed", className: "bg-success text-success-foreground" },
   cancelled: { label: "Cancelled", className: "bg-destructive text-destructive-foreground" },
 };
 
 export function OrderStatusBanner({ status }: OrderStatusBannerProps) {
   const config = statusConfig[status] || statusConfig.new;
   
   return (
     <div className={`rounded-lg p-4 text-center ${config.className}`}>
       <h3 className="text-lg font-bold">{config.label}</h3>
     </div>
   );
 }