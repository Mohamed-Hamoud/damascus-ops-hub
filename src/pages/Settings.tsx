 import { useState } from "react";
 import { useNavigate, useLocation } from "react-router-dom";
 import { ArrowLeft, Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { TabNavigation } from "@/components/shared/TabNavigation";
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
 
  const tabs = [
    { id: "users", label: "Admin Users" },
    { id: "roles", label: "Roles" },
  ];

   // Form View (Create/Edit Admin User)
   if (isFormView) {
     return (
       <div className="space-y-6">
        <PageHeader
          title={isNewUser ? "New Admin User" : "Edit Admin User"}
          subtitle={isNewUser ? "Create a new admin user account" : "Update admin user details"}
          backLink="/settings"
          backLabel="Admin Users"
        />
 
        <div className="rounded-xl border border-border bg-card card-shadow">
          <div className="p-6 space-y-4">
             <div className="space-y-2">
              <Label>Email <span className="text-destructive">*</span></Label>
               <Input
                 type="email"
                 placeholder="admin@example.com"
               />
             </div>
 
             <div className="space-y-2">
              <Label>Password <span className="text-destructive">*</span></Label>
               <Input
                 type="password"
                 placeholder="Minimum 6 characters"
               />
             </div>
 
             <div className="space-y-2">
              <Label>Password Confirmation <span className="text-destructive">*</span></Label>
               <Input
                 type="password"
               />
             </div>
 
             <div className="space-y-2">
              <Label>Role <span className="text-destructive">*</span></Label>
               <Select>
                <SelectTrigger>
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
 
          <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-muted/30">
             <button
               onClick={() => navigate("/settings")}
              className="btn-secondary"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/settings")}
              className="btn-primary"
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
      <PageHeader
        title="Admin Users"
        subtitle="Manage admin accounts and roles"
        actions={
          <button
           onClick={() => navigate("/settings/users/new")}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            New Admin User
          </button>
        }
      />
 
       {/* Tabs */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
 
       {activeTab === "users" && (
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
           <table className="w-full">
             <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                <th className="px-4 py-3.5"></th>
               </tr>
             </thead>
            <tbody className="divide-y divide-border">
               {adminUsersData.map((user) => (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded border border-primary/20 bg-primary/10 text-primary">
                       {user.role}
                     </span>
                   </td>
                  <td className="px-4 py-3 text-muted-foreground">{user.created}</td>
                  <td className="px-4 py-3">
                     <div className="flex items-center justify-end gap-2">
                       <button
                         onClick={() => navigate(`/settings/users/${user.id}/edit`)}
                        className="btn-primary btn-sm"
                       >
                         Edit
                       </button>
                       {user.canDelete && (
                        <button className="btn-outline btn-sm text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
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
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
           <table className="w-full">
             <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Permissions</th>
                <th className="px-4 py-3.5 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin Users</th>
                <th className="px-4 py-3.5"></th>
               </tr>
             </thead>
            <tbody className="divide-y divide-border">
               {rolesData.map((role) => (
                <tr key={role.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{role.name}</td>
                  <td className="px-4 py-3">
                     <div className="flex flex-wrap gap-1">
                       {role.permissions.map((perm) => (
                        <span key={perm} className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                           {perm}
                         </span>
                       ))}
                     </div>
                   </td>
                  <td className="px-4 py-3 text-right text-foreground">{role.userCount}</td>
                  <td className="px-4 py-3">
                    <button className="btn-primary btn-sm">
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