 import { useParams, useNavigate } from "react-router-dom";
 import { useState } from "react";
 import { ShoppingCart, DollarSign, BarChart3, Star, CheckCircle, Calendar, MapPin, Eye } from "lucide-react";
 import { FormModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { PageHeader } from "@/components/shared/PageHeader";
 import { CustomerStatCard } from "@/components/customers/CustomerStatCard";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 
 /**
  * Customer Detail Page
  * DaisyUI: stats, card, table, badge, btn
  */
 
 const customerData = {
   id: 9,
   name: "Aisyah Binti Rahman",
   firstName: "Aisyah",
   lastName: "Binti Rahman",
   status: "ACTIVE",
   phone: "+60123456008",
   email: "aisyah.rahman@test.com",
   language: "EN",
   device: "Unknown",
   signIns: 0,
   lastSignIn: "Never",
   lastOrder: "2026-02-04 11:24",
   favouriteRestaurant: "N/A",
   avgRating: "No ratings",
   lastIP: "Unknown",
   paymentMethods: 0,
   stats: {
     totalOrders: 3,
     totalSpent: 964.0,
     avgOrderValue: 482.0,
     points: 0,
     completed: 2,
     memberSince: "2026-01-28 21:31",
   },
   addresses: [
     { id: 1, label: "Pejabat", isDefault: true, address: "62 Jalan Raja Chulan, 50200 Kuala Lumpur" },
   ],
   orders: [
     { id: 66, orderNumber: "#DF-268-FF3A-040226", date: "Feb 04, 2026", time: "11:24 AM", branch: "Damascus Delivery", amount: 503.2, subtotal: 470.0, delivery: 5.0, status: "Kitchen Accepted" },
     { id: 57, orderNumber: "#DF-659-280126", date: "Jan 28, 2026", time: "05:43 PM", branch: "Damascus Delivery", amount: 482.0, subtotal: 450.0, delivery: 5.0, status: "Completed" },
     { id: 56, orderNumber: "#DF-833-280126", date: "Jan 28, 2026", time: "01:54 PM", branch: "Damascus Delivery", amount: 482.0, subtotal: 450.0, delivery: 5.0, status: "Completed" },
   ],
 };
 
 export default function CustomerDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [editModalOpen, setEditModalOpen] = useState(false);
   const [formData, setFormData] = useState({
     firstName: customerData.firstName,
     lastName: customerData.lastName,
     phone: customerData.phone,
     email: customerData.email,
     language: customerData.language,
   });
 
   const getStatusColor = (status: string) => {
     switch (status.toLowerCase()) {
       case "completed":
        return "bg-success/10 text-success";
       case "kitchen accepted":
        return "bg-warning/10 text-warning";
       default:
        return "bg-muted text-muted-foreground";
     }
   };
 
   return (
     <div className="space-y-6">
      <PageHeader
        title={customerData.name}
        backLink="/customers"
        backLabel="Customers"
        badge={
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success">
            {customerData.status}
          </span>
        }
        actions={
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setEditModalOpen(true)}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              Edit
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Suspend
            </button>
          </div>
        }
      />
 
       {/* Stats Cards */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
         <CustomerStatCard
           icon={ShoppingCart}
           iconColor="text-info"
           iconBg="bg-info/10"
           value={customerData.stats.totalOrders}
           label="Total Orders"
         />
         <CustomerStatCard
           icon={DollarSign}
           iconColor="text-success"
           iconBg="bg-success/10"
           value={`RM ${customerData.stats.totalSpent.toFixed(1)}`}
           label="Total Spent"
         />
         <CustomerStatCard
           icon={BarChart3}
           iconColor="text-primary"
           iconBg="bg-primary/10"
           value={`RM ${customerData.stats.avgOrderValue.toFixed(1)}`}
           label="Avg Order Value"
         />
         <CustomerStatCard
           icon={Star}
           iconColor="text-warning"
           iconBg="bg-warning/10"
           value={customerData.stats.points}
           label="Points"
         />
         <CustomerStatCard
           icon={CheckCircle}
           iconColor="text-success"
           iconBg="bg-success/10"
           value={customerData.stats.completed}
           label="Completed"
         />
         <CustomerStatCard
           icon={Calendar}
           iconColor="text-primary"
           iconBg="bg-primary/10"
           value={customerData.stats.memberSince.split(" ")[0]}
           label="Member Since"
         />
       </div>
 
       {/* Info Cards Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Personal Information */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="section-title mb-4">Personal Information</h3>
           <div className="grid grid-cols-2 gap-4 text-sm">
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">ID</p>
              <p className="text-foreground font-medium">{customerData.id}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Phone</p>
              <p className="text-primary font-medium">{customerData.phone}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Email</p>
              <p className="text-primary font-medium">{customerData.email}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Language</p>
              <p className="text-foreground font-medium">{customerData.language}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Device</p>
              <p className="text-foreground font-medium">{customerData.device}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Sign-ins</p>
              <p className="text-foreground font-medium">{customerData.signIns}</p>
             </div>
           </div>
         </div>
 
         {/* Account Activity */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="section-title mb-4">Account Activity</h3>
           <div className="grid grid-cols-2 gap-4 text-sm">
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Last Sign In</p>
              <p className="text-foreground font-medium italic">{customerData.lastSignIn}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Last Order</p>
              <p className="text-foreground font-medium">{customerData.lastOrder}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Favourite Restaurant</p>
              <p className="text-foreground font-medium italic">{customerData.favouriteRestaurant}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Avg Rating Given</p>
              <p className="text-foreground font-medium italic">{customerData.avgRating}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Last IP Address</p>
              <p className="text-foreground font-medium italic">{customerData.lastIP}</p>
             </div>
             <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Payment Methods</p>
              <p className="text-foreground font-medium">{customerData.paymentMethods}</p>
             </div>
           </div>
         </div>
 
         {/* Delivery Addresses */}
        <div className="rounded-xl border border-border bg-card p-6">
           <div className="flex items-center justify-between mb-4">
            <h3 className="section-title">Delivery Addresses</h3>
            <span className="text-sm text-muted-foreground">{customerData.addresses.length}</span>
           </div>
           <div className="space-y-3">
             {customerData.addresses.map((addr) => (
               <div key={addr.id} className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                 <div>
                   <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{addr.label}</span>
                     {addr.isDefault && (
                      <span className="text-xs font-semibold text-success">DEFAULT</span>
                     )}
                   </div>
                  <p className="text-sm text-muted-foreground">{addr.address}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
 
       {/* Orders */}
       <div className="space-y-4">
         <div className="flex items-center gap-2">
          <h2 className="section-title">Orders</h2>
          <span className="text-lg text-muted-foreground">{customerData.orders.length}</span>
         </div>
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                   <th className="px-4 py-3"></th>
                 </tr>
               </thead>
              <tbody className="divide-y divide-border">
                 {customerData.orders.map((order) => (
                  <tr key={order.id} className="hover:bg-muted/50">
                     <td className="px-4 py-3">
                       <div>
                        <span className="font-medium text-foreground">{order.orderNumber}</span>
                        <p className="text-xs text-muted-foreground">ID {order.id}</p>
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <div>
                        <span className="text-foreground">{order.date}</span>
                        <p className="text-xs text-muted-foreground">{order.time}</p>
                       </div>
                     </td>
                    <td className="px-4 py-3 text-muted-foreground">{order.branch}</td>
                     <td className="px-4 py-3 text-right">
                       <div>
                        <span className="font-semibold text-foreground">RM {order.amount.toFixed(1)}</span>
                        <p className="text-xs text-muted-foreground">{order.subtotal.toFixed(1)} + {order.delivery.toFixed(1)} delivery</p>
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                         {order.status}
                       </span>
                     </td>
                     <td className="px-4 py-3">
                       <TooltipProvider>
                         <Tooltip>
                           <TooltipTrigger asChild>
                             <button 
                               onClick={() => navigate(`/orders/${order.id}`)}
                               className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                             >
                               <Eye className="h-4 w-4" />
                             </button>
                           </TooltipTrigger>
                           <TooltipContent>View Order</TooltipContent>
                         </Tooltip>
                       </TooltipProvider>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </div>
 
       {/* Edit Customer Modal */}
       <FormModal
         open={editModalOpen}
         onOpenChange={setEditModalOpen}
         title="Edit Customer"
         onSubmit={() => setEditModalOpen(false)}
         submitLabel="Update Customer"
         size="md"
       >
         <div className="space-y-6">
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Personal Information</h4>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <Label>First Name</Label>
                 <Input
                   value={formData.firstName}
                   onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                 />
               </div>
               <div className="space-y-2">
                 <Label>Last Name</Label>
                 <Input
                   value={formData.lastName}
                   onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                 />
               </div>
               <div className="space-y-2">
                <Label>Phone Number <span className="text-destructive">*</span></Label>
                 <Input
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                 />
               </div>
               <div className="space-y-2">
                 <Label>Email</Label>
                 <Input
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 />
               </div>
               <div className="space-y-2 sm:col-span-2">
                 <Label>Language</Label>
                 <select
                   value={formData.language}
                   onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                 >
                   <option value="EN">English</option>
                   <option value="MS">Malaysia</option>
                 </select>
               </div>
             </div>
           </div>
         </div>
       </FormModal>
     </div>
   );
 }