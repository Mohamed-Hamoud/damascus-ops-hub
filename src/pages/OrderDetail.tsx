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
        {/* DaisyUI: btn btn-ghost btn-sm */}
        <Link 
          to="/orders"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
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
          {/* DaisyUI: card bg-base-100 shadow-sm */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Order Info</h2>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-3">
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Order ID</span>
                  <p className="font-bold text-[#aa1e2c] text-lg">#{orderData.id}</p>
                 </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Created</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.created}</p>
                 </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Gateway Fee</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.gatewayFee}</p>
                 </div>
               </div>
               <div className="space-y-3">
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Internal ID</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.internalId}</p>
                 </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ext. Delivery Fee</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.extDeliveryFee}</p>
                 </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Est. Earn Points</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.earnPoints}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Items */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Items</h2>
             <div className="space-y-4">
               {orderData.items.map((item, index) => (
                <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-5">
                   <div className="flex items-start justify-between">
                     <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-2xl shadow-sm">
                         🍛
                       </div>
                       <div>
                        <h4 className="font-bold text-[#aa1e2c] text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.price}</p>
                         {item.addons.length > 0 && (
                           <div className="mt-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Addons</span>
                             {item.addons.map((addon, i) => (
                              <p key={i} className="text-sm text-[#aa1e2c]">
                                 {addon.qty}x {addon.name} — {addon.price}
                               </p>
                             ))}
                           </div>
                         )}
                         {item.modifiers.length > 0 && (
                           <div className="mt-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Modifiers</span>
                             {item.modifiers.map((mod, i) => (
                              <p key={i} className="text-sm text-gray-700 dark:text-gray-300">{mod.name} — {mod.price}</p>
                             ))}
                           </div>
                         )}
                       </div>
                     </div>
                     <div className="text-right">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{item.qty}x</span>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.total}</p>
                     </div>
                   </div>
                 </div>
               ))}
 
               {/* Totals */}
              <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                 <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">{orderData.subtotal}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Incl. Tax</span>
                  <span className="font-medium text-gray-900 dark:text-white">{orderData.tax}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Delivery Fee</span>
                  <span className="font-medium text-gray-900 dark:text-white">{orderData.deliveryFee}</span>
                 </div>
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3 text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>RM {orderData.total}</span>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Refund History */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Refund History</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">No refunds for this order.</p>
           </div>
         </div>
 
         {/* Right Column */}
         <div className="space-y-6">
           {/* Locations */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Locations</h2>
             <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-[#aa1e2c]/10 flex items-center justify-center">
                  <Building className="h-4 w-4 text-[#aa1e2c]" />
                </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Branch</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.branch}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-blue-500" />
                </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Delivery Address</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.address}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Customer Details */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Customer Details</h2>
             <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-[#aa1e2c]/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-[#aa1e2c]" />
                </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Name</span>
                  <p className="font-semibold text-[#aa1e2c]">{orderData.customer.name}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-500" />
                </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Phone</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.customer.phone}</p>
                 </div>
               </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-yellow-500" />
                </div>
                 <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Device</span>
                  <p className="font-medium text-gray-900 dark:text-white">{orderData.customer.device}</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Status Badge */}
          {/* DaisyUI: alert alert-info */}
          <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center text-white shadow-lg">
            <h3 className="text-xl font-bold">Kitchen Accepted</h3>
           </div>
 
           {/* History */}
          {/* DaisyUI: timeline */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">History</h2>
             <div className="relative space-y-4 pl-6">
              <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-gray-200 dark:bg-gray-700" />
               {orderData.history.map((event, index) => (
                 <div key={index} className="relative">
                   <div
                    className={`absolute -left-4 top-1 h-3 w-3 rounded-full transition-all duration-300 ${
                      event.isActive ? "bg-blue-500 shadow-md shadow-blue-500/50" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                   />
                   <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{event.status}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Courier Details */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Courier Details</h2>
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
               <User className="h-4 w-4" />
               <span className="text-sm italic">Courier details not available</span>
             </div>
           </div>
 
           {/* Evaluation Details */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Evaluation Details</h2>
            <p className="text-sm italic text-gray-500 dark:text-gray-400">Evaluation is missing</p>
           </div>
         </div>
       </div>
     </div>
   );
 }