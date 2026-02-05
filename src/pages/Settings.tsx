 import { useState } from "react";
 import { Users, Shield, Plus, Edit } from "lucide-react";
 import { FormModal } from "@/components/shared/FormModal";
 
 /**
  * Settings Page
  * DaisyUI: tabs, table, badge, btn, form
  * Based on screenshots showing Admin Users and Roles tabs
  */
 
 const adminUsersData = [
   { id: 1, name: "Admin User", email: "admin@example.com", role: "Superadmin", lastLogin: "Feb 05, 2026" },
   { id: 2, name: "Manager", email: "manager@damascus.my", role: "Admin", lastLogin: "Feb 04, 2026" },
 ];
 
 const rolesData = [
   { 
     id: 1, 
     name: "Admin", 
     permissions: ["DASHBOARD", "ORDERS", "CUSTOMERS", "PRODUCTS", "EVALUATIONS", "RESTAURANT APP (POS)", "BRANCHES", "SECURITY", "FEEDBACKS"],
     userCount: 1
   },
   { 
     id: 2, 
     name: "Superadmin", 
     permissions: ["DASHBOARD", "ORDERS", "CUSTOMERS", "BANNERS", "PROMOTIONS", "PRODUCTS", "EVALUATIONS", "RESTAURANT APP (POS)", "BRANCHES", "SECURITY", "POINTS", "FEEDBACKS", "SUPPORT SYSTEM", "REPORTS", "SETTINGS (ADMIN USERS & ROLES)"],
     userCount: 1
   },
 ];
 
 const allPermissions = [
   "Dashboard", "Orders", "Customers", "Banners", "Promotions", 
   "Products", "Evaluations", "Restaurant App (POS)", "Branches", 
   "Security", "Points", "Feedbacks", "Support System", "Reports", 
   "Settings (Admin Users & Roles)"
 ];
 
 export default function Settings() {
   const [activeTab, setActiveTab] = useState("users");
   const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
   const [newRoleName, setNewRoleName] = useState("");
   const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
 
   const togglePermission = (perm: string) => {
     setSelectedPermissions(prev =>
       prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
     );
   };
 
   return (
     <div className="space-y-6">
       <div className="flex items-center justify-between">
         <div>
           <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h1>
           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage admin users and roles</p>
         </div>
         {activeTab === "roles" && (
           <button
             onClick={() => setIsRoleModalOpen(true)}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
           >
             <Plus className="h-4 w-4" />
             New Role
           </button>
         )}
       </div>
 
       {/* Tabs */}
       <div className="flex gap-1 p-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm w-fit">
         <button
           onClick={() => setActiveTab("users")}
           className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
             activeTab === "users"
               ? "bg-[#aa1e2c] text-white shadow-sm"
               : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
           }`}
         >
           <Users className="h-4 w-4" />
           Admin Users
         </button>
         <button
           onClick={() => setActiveTab("roles")}
           className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
             activeTab === "roles"
               ? "bg-[#aa1e2c] text-white shadow-sm"
               : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
           }`}
         >
           <Shield className="h-4 w-4" />
           Roles
         </button>
       </div>
 
       {/* Admin Users Tab */}
       {activeTab === "users" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Role</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Last Login</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {adminUsersData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{user.name}</td>
                   <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{user.email}</td>
                   <td className="px-4 py-3">
                     <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#aa1e2c]/10 text-[#aa1e2c]">
                       {user.role}
                     </span>
                   </td>
                   <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{user.lastLogin}</td>
                   <td className="px-4 py-3">
                     <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all">
                       Edit
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
 
       {/* Roles Tab */}
       {activeTab === "roles" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
               <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Permissions</th>
                 <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Admin Users</th>
                 <th className="px-4 py-3"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {rolesData.map((role) => (
                 <tr key={role.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{role.name}</td>
                   <td className="px-4 py-3">
                     <div className="flex flex-wrap gap-1">
                       {role.permissions.map((perm) => (
                         <span key={perm} className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                           {perm}
                         </span>
                       ))}
                     </div>
                   </td>
                   <td className="px-4 py-3 text-right text-gray-900 dark:text-white">{role.userCount}</td>
                   <td className="px-4 py-3">
                     <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all">
                       Edit
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
 
       {/* New Role Modal */}
       <FormModal
         open={isRoleModalOpen}
         onOpenChange={setIsRoleModalOpen}
         title="New Role"
         description="Create a new role with specific permissions"
         submitLabel="Create Role"
         onSubmit={() => {
           console.log("Creating role:", newRoleName, selectedPermissions);
           setIsRoleModalOpen(false);
           setNewRoleName("");
           setSelectedPermissions([]);
         }}
         size="lg"
       >
         <div className="space-y-6">
           <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
               Role Name
             </label>
             <input
               type="text"
               placeholder="e.g. manager"
               value={newRoleName}
               onChange={(e) => setNewRoleName(e.target.value)}
               className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
               Permissions
             </label>
             <p className="text-xs text-gray-500 mb-3">Select which pages this role can access</p>
             <div className="space-y-2 max-h-60 overflow-y-auto">
               {allPermissions.map((perm) => (
                 <label key={perm} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                   <input
                     type="checkbox"
                     checked={selectedPermissions.includes(perm)}
                     onChange={() => togglePermission(perm)}
                     className="h-4 w-4 rounded border-gray-300 text-[#aa1e2c] focus:ring-[#aa1e2c]"
                   />
                   <span className="text-sm text-gray-900 dark:text-white">{perm}</span>
                 </label>
               ))}
             </div>
           </div>
         </div>
       </FormModal>
     </div>
   );
 }