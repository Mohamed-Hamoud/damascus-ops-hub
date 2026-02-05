 import { useState } from "react";
 import { Download, Calendar, FileText } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 /**
  * Reports Page
  * DaisyUI: card, form-control, input, btn
  * Based on screenshot showing Order Report and Summary Report
  */
 
 export default function Reports() {
   const [orderDateFrom, setOrderDateFrom] = useState("");
   const [orderDateTo, setOrderDateTo] = useState("");
   const [summaryDateFrom, setSummaryDateFrom] = useState("");
   const [summaryDateTo, setSummaryDateTo] = useState("");
 
   const handleDownload = (type: string) => {
     console.log(`Downloading ${type} report...`);
   };
 
   return (
     <div className="space-y-6">
       <div>
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reports</h1>
         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Generate and download business reports</p>
       </div>
 
       {/* Order Report */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
         <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
           <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
             <FileText className="h-5 w-5 text-[#aa1e2c]" />
             Order Report
           </h2>
         </div>
         <div className="p-6">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 Order Date From
               </label>
               <input
                 type="date"
                 value={orderDateFrom}
                 onChange={(e) => setOrderDateFrom(e.target.value)}
                 className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
               />
             </div>
             <div className="flex-1 min-w-[200px]">
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 To
               </label>
               <input
                 type="date"
                 value={orderDateTo}
                 onChange={(e) => setOrderDateTo(e.target.value)}
                 className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
               />
             </div>
             <button
               onClick={() => handleDownload("order")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
             >
               <Download className="h-4 w-4" />
               Download
             </button>
           </div>
         </div>
       </div>
 
       {/* Summary Report */}
       <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
         <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
           <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
             <FileText className="h-5 w-5 text-[#aa1e2c]" />
             Summary Report
           </h2>
         </div>
         <div className="p-6">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 Summary Date From
               </label>
               <input
                 type="date"
                 value={summaryDateFrom}
                 onChange={(e) => setSummaryDateFrom(e.target.value)}
                 className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
               />
             </div>
             <div className="flex-1 min-w-[200px]">
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                 To
               </label>
               <input
                 type="date"
                 value={summaryDateTo}
                 onChange={(e) => setSummaryDateTo(e.target.value)}
                 className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
               />
             </div>
             <button
               onClick={() => handleDownload("summary")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 flex items-center gap-2"
             >
               <Download className="h-4 w-4" />
               Download
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }