import { useState } from "react";
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
       {/* Header with filters */}
       <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="page-title">Evaluations List</h1>
         
         <div className="flex flex-wrap items-end gap-4">
           <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Branch</Label>
             <Select value={branch} onValueChange={setBranch}>
              <SelectTrigger className="w-[180px] bg-background">
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
            <Label className="text-sm text-muted-foreground">From</Label>
             <div className="relative">
               <Input
                 type="date"
                 value={fromDate}
                 onChange={(e) => setFromDate(e.target.value)}
                className="w-[150px] bg-background"
                 placeholder="dd/mm/yyyy"
               />
             </div>
           </div>
           
           <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">To</Label>
             <div className="relative">
               <Input
                 type="date"
                 value={toDate}
                 onChange={(e) => setToDate(e.target.value)}
                className="w-[150px] bg-background"
                 placeholder="dd/mm/yyyy"
               />
             </div>
           </div>
         </div>
       </div>
 
       {/* Evaluations Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead>ID / ORDER</TableHead>
               <TableHead>CREATED</TableHead>
               <TableHead>CUSTOMER</TableHead>
               <TableHead>AMOUNT</TableHead>
               <TableHead>EVALUATED</TableHead>
               <TableHead>BRANCH</TableHead>
               <TableHead>FOOD</TableHead>
               <TableHead>DRIVER</TableHead>
               <TableHead>NOTE</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {mockEvaluations.length === 0 ? (
               <TableRow>
                <TableCell colSpan={9} className="text-center py-12 text-muted-foreground">
                   Evaluations not found
                 </TableCell>
               </TableRow>
             ) : (
               mockEvaluations.map((evaluation) => (
                 <TableRow key={evaluation.id}>
                   <TableCell className="font-medium">{evaluation.id}</TableCell>
                   <TableCell>{evaluation.created}</TableCell>
                   <TableCell>{evaluation.customer}</TableCell>
                   <TableCell>RM {evaluation.amount.toFixed(2)}</TableCell>
                   <TableCell>{evaluation.evaluated}</TableCell>
                   <TableCell>{evaluation.branch}</TableCell>
                   <TableCell>
                     <div className="flex items-center gap-1">
                       {Array.from({ length: 5 }).map((_, i) => (
                         <span
                           key={i}
                           className={i < evaluation.foodRating ? "text-yellow-400" : "text-gray-300"}
                         >
                           ★
                         </span>
                       ))}
                     </div>
                   </TableCell>
                   <TableCell>
                     <div className="flex items-center gap-1">
                       {Array.from({ length: 5 }).map((_, i) => (
                         <span
                           key={i}
                           className={i < evaluation.driverRating ? "text-yellow-400" : "text-gray-300"}
                         >
                           ★
                         </span>
                       ))}
                     </div>
                   </TableCell>
                   <TableCell className="max-w-[200px] truncate">{evaluation.note}</TableCell>
                 </TableRow>
               ))
             )}
           </TableBody>
         </Table>
       </div>
     </div>
   );
 }