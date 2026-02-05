 import { Link, useParams } from "react-router-dom";
 import { ArrowLeft, MapPin, Phone, Smartphone, User, Building, Clock } from "lucide-react";
 import { SectionCard } from "@/components/dashboard/SectionCard";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 
/**
 * OrderDetail Page
 * DaisyUI components: card, badge, btn, timeline
 * 
 * HAML structure:
 * .space-y-6
 *   %a.btn.btn-ghost.btn-sm{ href: orders_path }
 *     %i.icon-arrow-left
 *     Orders List
 *   .grid.gap-6.lg:grid-cols-3
 *     .lg:col-span-2
 *       .card.bg-base-100 Order Info
 *       .card.bg-base-100 Items
 *     .space-y-6
 *       .card.bg-base-100 Locations
 *       .card.bg-base-100 Customer
 */
 
 // Mock order data
 const orderData = {
   id: "DF-268-FF3A-040226",
   internalId: "66",
   created: "2026-02-04 11:24",
   extDeliveryFee: "0.00",
   gatewayFee: "16.10",
   earnPoints: "503",
   branch: "Damascus Delivery",
   address: "No. 62 Jalan Raja Chulan",
   customer: {
     name: "Aisyah Binti Rahman",
     phone: "+6012-345-6008",
     device: "Android",
   },
   items: [
     {
       name: "Nasi Lemak",
       qty: 10,
       price: "15.00",
       total: "47.00",
       addons: [{ name: "Barbican Flavors", qty: 1, price: "2.00" }],
       modifiers: [
         { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
         { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
         { name: "Barbican Flavors — Barbican Flavors", price: "10.00" },
       ],
     },
   ],
   subtotal: "470.00",
   tax: "28.20",
   deliveryFee: "5.00",
   total: "503.20",
   history: [
     { status: "New", date: "2026-02-04 11:24", isActive: false },
     { status: "Kitchen Accepted", date: "2026-02-04 19:04", isActive: true },
   ],
   status: "accepted",
 };
 
 export default function OrderDetail() {
   const { id } = useParams();
 
   return (
     <div className="space-y-6">
       {/* Back Navigation */}
       <div className="flex items-center gap-4">
        <Link 
          to="/orders"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground rounded-lg hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Orders List
        </Link>
       </div>
 
       {/* Main Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Left Column - Order Info & Items */}
         <div className="space-y-6 lg:col-span-2">
           {/* Order Info */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Order Info</h2>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-3">
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Order ID</span>
                  <p className="font-bold text-primary text-lg">#{orderData.id}</p>
                 </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Created</span>
                  <p className="font-medium text-foreground">{orderData.created}</p>
                 </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Gateway Fee</span>
                  <p className="font-medium text-foreground">{orderData.gatewayFee}</p>
                 </div>
               </div>
               <div className="space-y-3">
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Internal ID</span>
                  <p className="font-medium text-foreground">{orderData.internalId}</p>
                 </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Ext. Delivery Fee</span>
                  <p className="font-medium text-foreground">{orderData.extDeliveryFee}</p>
                 </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Est. Earn Points</span>
                  <p className="font-medium text-foreground">{orderData.earnPoints}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Items */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Items</h2>
             <div className="space-y-4">
               {orderData.items.map((item, index) => (
              <div key={index} className="rounded-lg border bg-card p-4">
                   <div className="flex items-start justify-between">
                     <div className="flex gap-4">
                    <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center text-2xl">
                         🍛
                       </div>
                       <div>
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.price}</p>
                         {item.addons.length > 0 && (
                           <div className="mt-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Addons</span>
                             {item.addons.map((addon, i) => (
                              <p key={i} className="text-sm text-primary">
                                 {addon.qty}x {addon.name} — {addon.price}
                               </p>
                             ))}
                           </div>
                         )}
                         {item.modifiers.length > 0 && (
                           <div className="mt-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Modifiers</span>
                             {item.modifiers.map((mod, i) => (
                              <p key={i} className="text-sm text-foreground">{mod.name} — {mod.price}</p>
                             ))}
                           </div>
                         )}
                       </div>
                     </div>
                     <div className="text-right">
                      <span className="text-xl font-bold text-foreground">{item.qty}x</span>
                      <p className="text-sm font-semibold text-foreground">{item.total}</p>
                     </div>
                   </div>
                 </div>
               ))}
 
               {/* Totals */}
              <div className="space-y-2 border-t pt-4">
                 <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">{orderData.subtotal}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Incl. Tax</span>
                  <span className="font-medium text-foreground">{orderData.tax}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium text-foreground">{orderData.deliveryFee}</span>
                 </div>
                <div className="flex justify-between border-t pt-3 text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span>RM {orderData.total}</span>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Refund History */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="section-title">Refund History</h2>
            <p className="mt-2 text-sm text-muted-foreground">No refunds for this order.</p>
           </div>
         </div>
 
         {/* Right Column */}
         <div className="space-y-6">
           {/* Locations */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Locations</h2>
             <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="h-4 w-4 text-primary" />
                </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Branch</span>
                  <p className="font-medium">{orderData.branch}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-blue-500" />
                </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Delivery Address</span>
                  <p className="font-medium">{orderData.address}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Customer Details */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Customer Details</h2>
             <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
                  <p className="font-semibold text-primary">{orderData.customer.name}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-500" />
                </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</span>
                  <p className="font-medium">{orderData.customer.phone}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-amber-500" />
                </div>
                 <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Device</span>
                  <p className="font-medium">{orderData.customer.device}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Status Badge */}
          <div className="rounded-lg bg-info p-4 text-center text-info-foreground">
            <h3 className="text-lg font-bold">Kitchen Accepted</h3>
           </div>
 
           {/* History */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">History</h2>
             <div className="relative space-y-4 pl-6">
              <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-border" />
               {orderData.history.map((event, index) => (
                 <div key={index} className="relative">
                   <div
                    className={`absolute -left-4 top-1 h-3 w-3 rounded-full ${
                      event.isActive ? "bg-info" : "bg-muted-foreground/30"
                    }`}
                   />
                   <div>
                    <p className="font-semibold text-foreground">{event.status}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Courier Details */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Courier Details</h2>
            <div className="flex items-center gap-3 text-muted-foreground">
               <User className="h-4 w-4" />
               <span className="text-sm italic">Courier details not available</span>
             </div>
           </div>
 
           {/* Evaluation Details */}
          <div className="rounded-lg border bg-card p-4 card-shadow">
            <h2 className="mb-4 section-title">Evaluation Details</h2>
            <p className="text-sm italic text-muted-foreground">Evaluation is missing</p>
           </div>
         </div>
       </div>
     </div>
   );
 }