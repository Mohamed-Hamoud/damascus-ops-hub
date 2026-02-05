 import { useState } from "react";
import { Shield } from "lucide-react";
 
 /**
  * Security Page
 * Uses semantic theme tokens for consistent styling
  * Based on screenshot showing branch on/off toggles
  */
 
 const branchesData = [
   { id: 1, name: "Damascus Delivery", enabled: true },
   { id: 2, name: "Damascus Restaurant PJ", enabled: true },
   { id: 3, name: "Damascus Restaurant Shah Alam", enabled: true },
 ];
 
 export default function Security() {
   const [branches, setBranches] = useState(branchesData);
   const [allEnabled, setAllEnabled] = useState(true);
 
   const toggleBranch = (id: number) => {
     setBranches(branches.map(b => 
       b.id === id ? { ...b, enabled: !b.enabled } : b
     ));
   };
 
   const toggleAll = () => {
     const newState = !allEnabled;
     setAllEnabled(newState);
     setBranches(branches.map(b => ({ ...b, enabled: newState })));
   };
 
   return (
     <div className="space-y-6">
       <div>
        <h1 className="page-title">Security</h1>
        <p className="page-subtitle">Control branch access and availability</p>
       </div>
 
       {/* Per-Branch Controls */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-4 py-3 bg-muted/30">
          <h2 className="section-title">Switch On / Off Each Branch</h2>
         </div>
        <div className="divide-y divide-border">
           {branches.map((branch) => (
            <div key={branch.id} className="flex items-center justify-between px-4 py-3">
              <span className="font-medium text-foreground">{branch.name}</span>
               <button
                 onClick={() => toggleBranch(branch.id)}
                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  branch.enabled ? "bg-primary" : "bg-muted-foreground/30"
                 }`}
               >
                 <span
                   className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
                     branch.enabled ? "translate-x-6" : "translate-x-1"
                   }`}
                 />
               </button>
             </div>
           ))}
         </div>
       </div>
 
       {/* Global Control */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-4 py-3 bg-muted/30">
          <h2 className="section-title">Switch On / Off Everything</h2>
         </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-medium text-foreground">Everything</span>
           <button
             onClick={toggleAll}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
               allEnabled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                 : "bg-green-600 text-white hover:bg-green-700"
             }`}
           >
             {allEnabled ? "Switch Off All" : "Switch On All"}
           </button>
         </div>
       </div>
     </div>
   );
 }