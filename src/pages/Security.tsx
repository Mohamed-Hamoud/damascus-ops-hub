 import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Switch } from "@/components/ui/switch";
 
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
      {/* Header */}
      <PageHeader
        title="Security"
        subtitle="Control branch access and availability"
      />
 
       {/* Per-Branch Controls */}
      <div className="rounded-xl border border-border bg-card card-shadow">
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h2 className="section-title">Branch Access Controls</h2>
        </div>
        <div className="divide-y divide-border">
           {branches.map((branch) => (
            <div key={branch.id} className="flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${branch.enabled ? "bg-success" : "bg-muted-foreground/30"}`} />
                <span className="font-medium text-foreground">{branch.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium ${branch.enabled ? "text-success" : "text-muted-foreground"}`}>
                  {branch.enabled ? "Online" : "Offline"}
                </span>
                <Switch
                  checked={branch.enabled}
                  onCheckedChange={() => toggleBranch(branch.id)}
                />
              </div>
             </div>
           ))}
         </div>
       </div>
 
       {/* Global Control */}
      <div className="rounded-xl border border-border bg-card card-shadow">
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h2 className="section-title">Global Controls</h2>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <span className="font-medium text-foreground">All Branches</span>
            <p className="text-sm text-muted-foreground mt-0.5">Toggle all branches on or off at once</p>
          </div>
          <button
            onClick={toggleAll}
            className={allEnabled ? "btn-destructive" : "btn-primary"}
          >
            {allEnabled ? "Switch Off All" : "Switch On All"}
          </button>
        </div>
       </div>
     </div>
   );
 }