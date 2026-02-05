 import { useState } from "react";
 import { useNavigate, useLocation } from "react-router-dom";
 import { ArrowLeft, Plus } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 
 /**
  * Settings Page - Admin Users management
  * Matches reference: Admin Users list with tabs, role badges
  * Full-page form for create/edit
  */
 
 const adminUsersData = [
   { id: 1, email: "admin222@example.com", role: "ADMIN", created: "27 Jan 2026", canDelete: true },
   { id: 2, email: "admin@example.com", role: "SUPERADMIN", created: "23 Jan 2026", canDelete: false },
 ];
 
 const rolesData = [
   {
     id: 1,
     name: "Admin",
     permissions: ["DASHBOARD", "ORDERS", "CUSTOMERS", "PRODUCTS", "EVALUATIONS", "RESTAURANT APP (POS)", "BRANCHES", "SECURITY", "FEEDBACKS"],
     userCount: 1,
   },
   {
     id: 2,
     name: "Superadmin",
     permissions: ["DASHBOARD", "ORDERS", "CUSTOMERS", "BANNERS", "PROMOTIONS", "PRODUCTS", "EVALUATIONS", "RESTAURANT APP (POS)", "BRANCHES", "SECURITY", "POINTS", "FEEDBACKS", "SUPPORT SYSTEM", "REPORTS", "SETTINGS (ADMIN USERS & ROLES)"],
     userCount: 1,
   },
 ];
 
 export default function Settings() {
   const navigate = useNavigate();
   const location = useLocation();
   const pathParts = location.pathname.split("/");
   const isNewUser = pathParts.includes("new");
   const isEditUser = pathParts.includes("edit");
   const isFormView = isNewUser || isEditUser;
 
   const [activeTab, setActiveTab] = useState("users");
 
   // Form View (Create/Edit Admin User)
   if (isFormView) {
     return (
       <div className="space-y-6">
         <button
           onClick={() => navigate("/settings")}
           className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
         >
           <ArrowLeft className="h-4 w-4" />
           Admin Users
         </button>
 
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {isNewUser ? "New Admin User" : "Edit Admin User"}
         </h1>
 
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
           <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
               {isNewUser ? "New Admin User" : "Edit Admin User"}
             </h2>
             <span className="text-sm text-gray-500 dark:text-gray-400">
               {isNewUser ? "Create a new admin user account" : "Update admin user details"}
             </span>
           </div>
 
           <div className="p-6 space-y-6">
             <div className="space-y-2">
               <Label className="text-gray-700 dark:text-gray-300">Email</Label>
               <Input
                 type="email"
                 placeholder="admin@example.com"
                 className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
               />
             </div>
 
             <div className="space-y-2">
               <Label className="text-gray-700 dark:text-gray-300">Password</Label>
               <Input
                 type="password"
                 placeholder="Minimum 6 characters"
                 className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
               />
             </div>
 
             <div className="space-y-2">
               <Label className="text-gray-700 dark:text-gray-300">Password Confirmation</Label>
               <Input
                 type="password"
                 className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
               />
             </div>
 
             <div className="space-y-2">
               <Label className="text-gray-700 dark:text-gray-300">Role</Label>
               <Select>
                 <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                   <SelectValue placeholder="Select a role" />
                 </SelectTrigger>
                 <SelectContent>
                   {rolesData.map((role) => (
                     <SelectItem key={role.id} value={role.name.toLowerCase()}>
                       {role.name}
                     </SelectItem>
                   ))}
                 </SelectContent>
               </Select>
             </div>
           </div>
 
           <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
             <button
               onClick={() => navigate("/settings")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/settings")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
             >
               {isNewUser ? "Create Admin User" : "Update Admin User"}
             </button>
           </div>
         </div>
       </div>
     );
   }
 
   // List View
   return (
     <div className="space-y-6">
       <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Users</h1>
         <button
           onClick={() => navigate("/settings/users/new")}
           className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           New Admin User
         </button>
       </div>
 
       {/* Tabs */}
       <div className="border-b border-gray-200 dark:border-gray-700">
         <div className="flex gap-6">
           <button
             onClick={() => setActiveTab("users")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "users"
                 ? "border-[#aa1e2c] text-[#aa1e2c]"
                 : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
             }`}
           >
             Admin Users
           </button>
           <button
             onClick={() => setActiveTab("roles")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "roles"
                 ? "border-[#aa1e2c] text-[#aa1e2c]"
                 : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
             }`}
           >
             Roles
           </button>
         </div>
       </div>
 
       {activeTab === "users" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
                 <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Role</th>
                 <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Created</th>
                 <th className="px-6 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {adminUsersData.map((user) => (
                 <tr key={user.id}>
                   <td className="px-6 py-4 text-gray-900 dark:text-white">{user.email}</td>
                   <td className="px-6 py-4">
                     <span className="px-2.5 py-1 text-xs font-semibold rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                       {user.role}
                     </span>
                   </td>
                   <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{user.created}</td>
                   <td className="px-6 py-4">
                     <div className="flex items-center justify-end gap-2">
                       <button
                         onClick={() => navigate(`/settings/users/${user.id}/edit`)}
                         className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
                       >
                         Edit
                       </button>
                       {user.canDelete && (
                         <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                           Delete
                         </button>
                       )}
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
 
       {activeTab === "roles" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                 <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Permissions</th>
                 <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Admin Users</th>
                 <th className="px-6 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {rolesData.map((role) => (
                 <tr key={role.id}>
                   <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{role.name}</td>
                   <td className="px-6 py-4">
                     <div className="flex flex-wrap gap-1">
                       {role.permissions.map((perm) => (
                         <span key={perm} className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                           {perm}
                         </span>
                       ))}
                     </div>
                   </td>
                   <td className="px-6 py-4 text-right text-gray-900 dark:text-white">{role.userCount}</td>
                   <td className="px-6 py-4">
                     <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824]">
                       Edit
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
     </div>
   );
 }