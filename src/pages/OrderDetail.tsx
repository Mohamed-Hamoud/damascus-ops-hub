 import { useParams } from "react-router-dom";
 import { User } from "lucide-react";
 import { OrderInfoCard } from "@/components/orders/OrderInfoCard";
 import { OrderItemCard } from "@/components/orders/OrderItemCard";
 import { OrderTotals } from "@/components/orders/OrderTotals";
 import { OrderTimeline } from "@/components/orders/OrderTimeline";
 import { OrderLocations } from "@/components/orders/OrderLocations";
 import { OrderCustomer } from "@/components/orders/OrderCustomer";
 import { OrderStatusBanner } from "@/components/orders/OrderStatusBanner";
 import { PageHeader } from "@/components/shared/PageHeader";
 
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
       <PageHeader
         title={`Order ${orderData.id}`}
         backLink="/orders"
         backLabel="Orders"
       />
 
       {/* Main Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Left Column - Order Info & Items */}
         <div className="space-y-6 lg:col-span-2">
           <OrderInfoCard
             orderId={orderData.id}
             internalId={orderData.internalId}
             created={orderData.created}
             extDeliveryFee={orderData.extDeliveryFee}
             gatewayFee={orderData.gatewayFee}
             earnPoints={orderData.earnPoints}
           />
 
           {/* Items */}
           <div className="rounded-lg border bg-card p-4 card-shadow">
             <h2 className="mb-4 section-title">Items</h2>
             <div className="space-y-4">
               {orderData.items.map((item, index) => (
                 <OrderItemCard
                   key={index}
                   name={item.name}
                   qty={item.qty}
                   price={item.price}
                   total={item.total}
                   addons={item.addons}
                   modifiers={item.modifiers}
                   emoji="🍛"
                 />
               ))}
               <OrderTotals
                 subtotal={orderData.subtotal}
                 tax={orderData.tax}
                 deliveryFee={orderData.deliveryFee}
                 total={orderData.total}
               />
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
           <OrderLocations branch={orderData.branch} address={orderData.address} />
           <OrderCustomer {...orderData.customer} />
           <OrderStatusBanner status={orderData.status} />
           <OrderTimeline events={orderData.history} />
 
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