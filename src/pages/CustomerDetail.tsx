 import { useParams, useNavigate } from "react-router-dom";
 import { useState } from "react";
 import { ArrowLeft, ShoppingCart, DollarSign, BarChart3, Star, CheckCircle, Calendar, MapPin, Edit } from "lucide-react";
 import { FormModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
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
         return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
       case "kitchen accepted":
         return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
       default:
         return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
     }
   };
 
   return (
     <div className="space-y-6">
       {/* Back Link */}
       <button
         onClick={() => navigate("/customers")}
         className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
       >
         <ArrowLeft className="h-4 w-4" />
         Customers
       </button>
 
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div className="flex items-center gap-3">
           <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{customerData.name}</h1>
           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
             {customerData.status}
           </span>
         </div>
         <div className="flex items-center gap-2">
           <button 
             onClick={() => setEditModalOpen(true)}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
           >
             Edit
           </button>
           <button className="px-4 py-2 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-200">
             Suspend
           </button>
         </div>
       </div>
 
       {/* Stats Cards */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
             <ShoppingCart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">{customerData.stats.totalOrders}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Total Orders</p>
           </div>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
             <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">RM {customerData.stats.totalSpent.toFixed(1)}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Total Spent</p>
           </div>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
             <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">RM {customerData.stats.avgOrderValue.toFixed(1)}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Avg Order Value</p>
           </div>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
             <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">{customerData.stats.points}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Points</p>
           </div>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
             <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">{customerData.stats.completed}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
           </div>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex items-center gap-3">
           <div className="h-10 w-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
             <Calendar className="h-5 w-5 text-pink-600 dark:text-pink-400" />
           </div>
           <div>
             <p className="text-xl font-bold text-gray-900 dark:text-white">{customerData.stats.memberSince.split(" ")[0]}</p>
             <p className="text-xs text-gray-500 dark:text-gray-400">Member Since</p>
           </div>
         </div>
       </div>
 
       {/* Info Cards Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Personal Information */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
           <div className="grid grid-cols-2 gap-4 text-sm">
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">ID</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.id}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Phone</p>
               <p className="text-[#aa1e2c] font-medium">{customerData.phone}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Email</p>
               <p className="text-[#aa1e2c] font-medium">{customerData.email}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Language</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.language}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Device</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.device}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Sign-ins</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.signIns}</p>
             </div>
           </div>
         </div>
 
         {/* Account Activity */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Activity</h3>
           <div className="grid grid-cols-2 gap-4 text-sm">
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Last Sign In</p>
               <p className="text-gray-900 dark:text-white font-medium italic">{customerData.lastSignIn}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Last Order</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.lastOrder}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Favourite Restaurant</p>
               <p className="text-gray-900 dark:text-white font-medium italic">{customerData.favouriteRestaurant}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Avg Rating Given</p>
               <p className="text-gray-900 dark:text-white font-medium italic">{customerData.avgRating}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Last IP Address</p>
               <p className="text-gray-900 dark:text-white font-medium italic">{customerData.lastIP}</p>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Payment Methods</p>
               <p className="text-gray-900 dark:text-white font-medium">{customerData.paymentMethods}</p>
             </div>
           </div>
         </div>
 
         {/* Delivery Addresses */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delivery Addresses</h3>
             <span className="text-sm text-gray-500 dark:text-gray-400">{customerData.addresses.length}</span>
           </div>
           <div className="space-y-3">
             {customerData.addresses.map((addr) => (
               <div key={addr.id} className="flex items-start gap-3">
                 <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-medium text-gray-900 dark:text-white">{addr.label}</span>
                     {addr.isDefault && (
                       <span className="text-xs font-semibold text-green-600 dark:text-green-400">DEFAULT</span>
                     )}
                   </div>
                   <p className="text-sm text-gray-500 dark:text-gray-400">{addr.address}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
 
       {/* Orders */}
       <div className="space-y-4">
         <div className="flex items-center gap-2">
           <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Orders</h2>
           <span className="text-lg text-gray-500 dark:text-gray-400">{customerData.orders.length}</span>
         </div>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Order</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Date</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Branch</th>
                   <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Status</th>
                   <th className="px-4 py-3"></th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                 {customerData.orders.map((order) => (
                   <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                     <td className="px-4 py-3">
                       <div>
                         <span className="font-medium text-gray-900 dark:text-white">{order.orderNumber}</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">ID {order.id}</p>
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <div>
                         <span className="text-gray-900 dark:text-white">{order.date}</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">{order.time}</p>
                       </div>
                     </td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{order.branch}</td>
                     <td className="px-4 py-3 text-right">
                       <div>
                         <span className="font-semibold text-gray-900 dark:text-white">RM {order.amount.toFixed(1)}</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400">{order.subtotal.toFixed(1)} + {order.delivery.toFixed(1)} delivery</p>
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                         {order.status}
                       </span>
                     </td>
                     <td className="px-4 py-3">
                       <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200">
                         View
                       </button>
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
             <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h4>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                 <Label>First Name</Label>
                 <Input
                   value={formData.firstName}
                   onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
               <div className="space-y-2">
                 <Label>Last Name</Label>
                 <Input
                   value={formData.lastName}
                   onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
               <div className="space-y-2">
                 <Label>Phone Number <span className="text-red-500">*</span></Label>
                 <Input
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
               <div className="space-y-2">
                 <Label>Email</Label>
                 <Input
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
               <div className="space-y-2 sm:col-span-2">
                 <Label>Language</Label>
                 <select
                   value={formData.language}
                   onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                   className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
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