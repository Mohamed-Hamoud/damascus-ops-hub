import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
 
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
      {/* Header */}
      <PageHeader
        title="Reports"
        subtitle="Generate and download business reports"
      />
 
       {/* Order Report */}
      <div className="rounded-xl border border-border bg-card card-shadow">
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h2 className="section-title flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
             Order Report
           </h2>
         </div>
        <div className="p-6">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                From Date
              </Label>
              <Input
                 type="date"
                 value={orderDateFrom}
                 onChange={(e) => setOrderDateFrom(e.target.value)}
               />
             </div>
             <div className="flex-1 min-w-[200px]">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                To Date
              </Label>
              <Input
                 type="date"
                 value={orderDateTo}
                 onChange={(e) => setOrderDateTo(e.target.value)}
               />
             </div>
             <button
               onClick={() => handleDownload("order")}
              className="btn-primary flex items-center gap-2"
             >
               <Download className="h-4 w-4" />
               Download
             </button>
           </div>
         </div>
       </div>
 
       {/* Summary Report */}
      <div className="rounded-xl border border-border bg-card card-shadow">
        <div className="border-b border-border px-6 py-4 bg-muted/30">
          <h2 className="section-title flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
             Summary Report
           </h2>
         </div>
        <div className="p-6">
           <div className="flex flex-wrap items-end gap-4">
             <div className="flex-1 min-w-[200px]">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                From Date
              </Label>
              <Input
                 type="date"
                 value={summaryDateFrom}
                 onChange={(e) => setSummaryDateFrom(e.target.value)}
               />
             </div>
             <div className="flex-1 min-w-[200px]">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                To Date
              </Label>
              <Input
                 type="date"
                 value={summaryDateTo}
                 onChange={(e) => setSummaryDateTo(e.target.value)}
               />
             </div>
             <button
               onClick={() => handleDownload("summary")}
              className="btn-primary flex items-center gap-2"
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