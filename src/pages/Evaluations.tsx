import { useState } from "react";
import { ClipboardList } from "lucide-react";
 import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 
 const mockBranches = [
   { id: "all", name: "All" },
   { id: "1", name: "Damascus Main" },
   { id: "2", name: "Damascus Ampang" },
 ];
 
 // Empty evaluations to match screenshot
 const mockEvaluations: any[] = [];
 
 export default function Evaluations() {
   const [branch, setBranch] = useState("all");
   const [fromDate, setFromDate] = useState("");
   const [toDate, setToDate] = useState("");
 
   return (
     <div className="space-y-6">
      {/* Header */}
      <PageHeader
        title="Evaluations List"
        subtitle="Customer feedback and ratings"
      />

      {/* Filters Card */}
      <div className="rounded-xl border border-border bg-card">
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <h2 className="section-title">Filters</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {mockBranches.map((b) => (
                    <SelectItem key={b.id} value={b.id}>
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">From Date</Label>
              <Input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-[160px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">To Date</Label>
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-[160px]"
              />
             </div>

            <button className="btn-primary">
              Apply Filters
            </button>
           </div>
         </div>
       </div>
 
       {/* Evaluations Table */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 border-b border-border">
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID / Order</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Evaluated</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Branch</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Food</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Driver</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEvaluations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="px-4 py-16">
                    <EmptyState
                      icon={ClipboardList}
                      title="No evaluations found"
                      description="Try adjusting your filters or check back later"
                    />
                  </TableCell>
                </TableRow>
              ) : (
                mockEvaluations.map((evaluation) => (
                  <TableRow key={evaluation.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium text-foreground">{evaluation.id}</TableCell>
                    <TableCell className="text-muted-foreground">{evaluation.created}</TableCell>
                    <TableCell className="text-foreground">{evaluation.customer}</TableCell>
                    <TableCell className="text-foreground">RM {evaluation.amount.toFixed(2)}</TableCell>
                    <TableCell className="text-muted-foreground">{evaluation.evaluated}</TableCell>
                    <TableCell className="text-foreground">{evaluation.branch}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={i < evaluation.foodRating ? "text-warning" : "text-muted-foreground/30"}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={i < evaluation.driverRating ? "text-warning" : "text-muted-foreground/30"}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-muted-foreground">{evaluation.note}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
       </div>
     </div>
   );
 }