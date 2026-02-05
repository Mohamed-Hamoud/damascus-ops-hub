import { useState } from "react";
import { Download, FileText } from "lucide-react";
 
 /**
  * Reports Page
 * Uses semantic theme tokens for consistent styling
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
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">Generate and download business reports</p>
       </div>
 
       {/* Order Report */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-4 py-3 bg-muted/30">
          <h2 className="section-title flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
             Order Report
           </h2>
         </div>
        <div className="p-4">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                 Order Date From
               </label>
               <input
                 type="date"
                 value={orderDateFrom}
                 onChange={(e) => setOrderDateFrom(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
               />
             </div>
             <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                 To
               </label>
               <input
                 type="date"
                 value={orderDateTo}
                 onChange={(e) => setOrderDateTo(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
               />
             </div>
             <button
               onClick={() => handleDownload("order")}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
             >
               <Download className="h-4 w-4" />
               Download
             </button>
           </div>
         </div>
       </div>
 
       {/* Summary Report */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-4 py-3 bg-muted/30">
          <h2 className="section-title flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
             Summary Report
           </h2>
         </div>
        <div className="p-4">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                 Summary Date From
               </label>
               <input
                 type="date"
                 value={summaryDateFrom}
                 onChange={(e) => setSummaryDateFrom(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
               />
             </div>
             <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                 To
               </label>
               <input
                 type="date"
                 value={summaryDateTo}
                 onChange={(e) => setSummaryDateTo(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
               />
             </div>
             <button
               onClick={() => handleDownload("summary")}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
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