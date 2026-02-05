 import { useState } from "react";
 import { Shield, Power } from "lucide-react";
 
 /**
  * Security Page
  * DaisyUI: card, toggle, btn
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
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Security</h1>
         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Control branch access and availability</p>
       </div>
 
       {/* Per-Branch Controls */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
         <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
           <h2 className="font-semibold text-gray-900 dark:text-white">Switch On / Off Each Branch</h2>
         </div>
         <div className="divide-y divide-gray-200 dark:divide-gray-700">
           {branches.map((branch) => (
             <div key={branch.id} className="flex items-center justify-between px-6 py-4">
               <span className="font-medium text-gray-900 dark:text-white">{branch.name}</span>
               {/* DaisyUI: toggle toggle-primary */}
               <button
                 onClick={() => toggleBranch(branch.id)}
                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                   branch.enabled ? "bg-[#aa1e2c]" : "bg-gray-300 dark:bg-gray-600"
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
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
         <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
           <h2 className="font-semibold text-gray-900 dark:text-white">Switch On / Off Everything</h2>
         </div>
         <div className="flex items-center justify-between px-6 py-4">
           <span className="font-medium text-gray-900 dark:text-white">Everything</span>
           <button
             onClick={toggleAll}
             className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
               allEnabled
                 ? "bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
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