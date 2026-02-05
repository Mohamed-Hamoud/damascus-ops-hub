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
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
         >
           <ArrowLeft className="h-4 w-4" />
           Admin Users
         </button>
 
          <h1 className="page-title">
           {isNewUser ? "New Admin User" : "Edit Admin User"}
         </h1>
 
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <h2 className="section-title">
               {isNewUser ? "New Admin User" : "Edit Admin User"}
             </h2>
              <span className="text-sm text-muted-foreground">
               {isNewUser ? "Create a new admin user account" : "Update admin user details"}
             </span>
           </div>
 
            <div className="p-4 space-y-4">
             <div className="space-y-2">
                <Label className="text-foreground">Email</Label>
               <Input
                 type="email"
                 placeholder="admin@example.com"
                  className="bg-background border-input"
               />
             </div>
 
             <div className="space-y-2">
                <Label className="text-foreground">Password</Label>
               <Input
                 type="password"
                 placeholder="Minimum 6 characters"
                  className="bg-background border-input"
               />
             </div>
 
             <div className="space-y-2">
                <Label className="text-foreground">Password Confirmation</Label>
               <Input
                 type="password"
                  className="bg-background border-input"
               />
             </div>
 
             <div className="space-y-2">
                <Label className="text-foreground">Role</Label>
               <Select>
                  <SelectTrigger className="bg-background border-input">
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
 
            <div className="flex items-center justify-end gap-3 p-4 border-t border-border bg-muted/30">
             <button
               onClick={() => navigate("/settings")}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/settings")}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
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
          <div>
            <h1 className="page-title">Admin Users</h1>
            <p className="page-subtitle">Manage admin accounts and roles</p>
          </div>
         <button
           onClick={() => navigate("/settings/users/new")}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
         >
           <Plus className="h-4 w-4" />
           New Admin User
         </button>
       </div>
 
       {/* Tabs */}
        <div className="border-b border-border">
         <div className="flex gap-6">
           <button
             onClick={() => setActiveTab("users")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "users"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
             }`}
           >
             Admin Users
           </button>
           <button
             onClick={() => setActiveTab("roles")}
             className={`pb-3 text-sm font-medium border-b-2 ${
               activeTab === "roles"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
             }`}
           >
             Roles
           </button>
         </div>
       </div>
 
       {activeTab === "users" && (
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3"></th>
               </tr>
             </thead>
              <tbody className="divide-y divide-border">
               {adminUsersData.map((user) => (
                 <tr key={user.id}>
                    <td className="px-4 py-3 text-foreground">{user.email}</td>
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
                          className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                       >
                         Edit
                       </button>
                       {user.canDelete && (
                          <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
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
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
           <table className="w-full">
             <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Permissions</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin Users</th>
                  <th className="px-4 py-3"></th>
               </tr>
             </thead>
              <tbody className="divide-y divide-border">
               {rolesData.map((role) => (
                 <tr key={role.id}>
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
                      <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
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