 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { Search, Eye } from "lucide-react";
 import { Input } from "@/components/ui/input";
 
 /**
  * Customers Page
  * DaisyUI: table, btn, badge, card
  */
 
 const customersData = [
   { id: 9, created: "2026-01-28 21:31", name: "Aisyah Binti Rahman", email: "aisyah.rahman@test.com", discounts: false, activeVoucher: false, orders: 2, totalSpent: 964.00, lastOrder: 503.20 },
   { id: 8, created: "2026-01-28 21:31", name: "Amir Bin Yusof", email: "amir.yusof@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 376.00, lastOrder: 503.20 },
   { id: 2, created: "2026-01-28 21:31", name: "Ahmadui Bin Ismail", email: "ahmad.ismail@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 54.82, lastOrder: 353.74 },
   { id: 5, created: "2026-01-28 21:31", name: "Nurul Binti Aisyah", email: "nurul.aisyah@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 482.00, lastOrder: 482.00 },
   { id: 7, created: "2026-01-28 21:31", name: "Fatimah Binti Zahra", email: "fatimah.zahra@test.com", discounts: false, activeVoucher: false, orders: 1, totalSpent: 635.70, lastOrder: 635.70 },
 ];
 
 const suspendedUsers: typeof customersData = [];
 const deletedUsers: typeof customersData = [];
 
 export default function Customers() {
   const navigate = useNavigate();
   const [phoneSearch, setPhoneSearch] = useState("");
   const [emailSearch, setEmailSearch] = useState("");
 
   const filteredCustomers = customersData.filter((c) => {
     const phoneMatch = phoneSearch === "" || c.email.toLowerCase().includes(phoneSearch.toLowerCase());
     const emailMatch = emailSearch === "" || c.email.toLowerCase().includes(emailSearch.toLowerCase());
     return phoneMatch && emailMatch;
   });
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customers</h1>
         <div className="flex items-center gap-2">
           <Input
             placeholder="Search by Phone"
             value={phoneSearch}
             onChange={(e) => setPhoneSearch(e.target.value)}
             className="w-40 bg-white dark:bg-gray-800"
           />
           <Input
             placeholder="Search by Email"
             value={emailSearch}
             onChange={(e) => setEmailSearch(e.target.value)}
             className="w-40 bg-white dark:bg-gray-800"
           />
           <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200">
             Search
           </button>
         </div>
       </div>
 
       {/* Customers Table */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Full Name</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">E-Mail</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Discounts</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Active Voucher</th>
                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Orders</th>
                 <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Total Spent</th>
                 <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Order</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {filteredCustomers.map((customer) => (
                 <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                   <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">{customer.id}</td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{customer.created}</td>
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{customer.name}</td>
                   <td className="px-4 py-3 text-[#aa1e2c]">{customer.email}</td>
                   <td className="px-4 py-3 text-center">
                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
                       NO
                     </span>
                   </td>
                   <td className="px-4 py-3 text-center">
                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
                       NO
                     </span>
                   </td>
                   <td className="px-4 py-3 text-center text-gray-900 dark:text-white">{customer.orders}</td>
                   <td className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">RM {customer.totalSpent.toFixed(2)}</td>
                   <td className="px-4 py-3 text-right text-gray-500 dark:text-gray-400">RM {customer.lastOrder.toFixed(2)}</td>
                   <td className="px-4 py-3">
                     <button 
                       onClick={() => navigate(`/customers/${customer.id}`)}
                       className="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
                     >
                       View
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
 
       {/* Suspended Users */}
       <div className="space-y-4">
         <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Suspended Users</h2>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Suspended Date</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Full Name</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">E-Mail</th>
                 </tr>
               </thead>
               <tbody>
                 {suspendedUsers.length === 0 && (
                   <tr>
                     <td colSpan={4} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                       No suspended users
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
         </div>
       </div>
 
       {/* Deleted Users */}
       <div className="space-y-4">
         <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Deleted Users</h2>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Deleted Date</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Full Name</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">E-Mail</th>
                 </tr>
               </thead>
               <tbody>
                 {deletedUsers.length === 0 && (
                   <tr>
                     <td colSpan={4} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                       No deleted users
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
   );
 }