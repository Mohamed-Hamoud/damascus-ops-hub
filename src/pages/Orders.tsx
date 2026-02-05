 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Search, Eye, Calendar } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Button } from "@/components/ui/button";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 import { StatusBadge } from "@/components/dashboard/StatusBadge";
 
 const ordersData = [
   { id: "DF-268-FF3A-040226", internalId: "68", date: "Feb 04, 2026", time: "11:24 AM", customer: "Aisyah Binti Rahman", branch: "Damascus Delivery", amount: "RM 503.20", delivery: "5.00", status: "accepted" },
   { id: "DF-481-2CF5-030226", internalId: "65", date: "Feb 03, 2026", time: "05:56 PM", customer: "Ahmadui Bin Ismail", branch: "Damascus Delivery", amount: "RM 353.74", delivery: "5.00", status: "accepted" },
   { id: "DF-537-290126", internalId: "64", date: "Jan 29, 2026", time: "09:10 AM", customer: "", branch: "Damascus Delivery", amount: "RM 169.26", delivery: "5.00", status: "delivering" },
   { id: "DF-234-290126", internalId: "63", date: "Jan 29, 2026", time: "12:18 AM", customer: "Amir Bin Yusof", branch: "Damascus Delivery", amount: "RM 503.20", delivery: "5.00", status: "completed" },
   { id: "DF-169-280126", internalId: "62", date: "Jan 28, 2026", time: "07:40 PM", customer: "Ahmadui Bin Ismail", branch: "Damascus Delivery", amount: "RM 54.82", delivery: "5.00", status: "completed" },
   { id: "DF-662-280126", internalId: "61", date: "Jan 28, 2026", time: "06:18 PM", customer: "Amir Bin Yusof", branch: "Damascus Delivery", amount: "RM 376.00", delivery: "5.00", status: "completed" },
   { id: "DF-408-280126", internalId: "60", date: "Jan 28, 2026", time: "05:59 PM", customer: "Nurul Binti Aisyah", branch: "Damascus Delivery", amount: "RM 482.00", delivery: "5.00", status: "completed" },
   { id: "DF-180-280126", internalId: "59", date: "Jan 28, 2026", time: "05:58 PM", customer: "", branch: "Damascus Delivery", amount: "RM 52.70", delivery: "5.00", status: "completed" },
   { id: "DF-802-280126", internalId: "58", date: "Jan 28, 2026", time: "05:46 PM", customer: "Fatimah Binti Zahra", branch: "Damascus Delivery", amount: "RM 635.70", delivery: "5.00", status: "completed" },
   { id: "DF-659-280126", internalId: "57", date: "Jan 28, 2026", time: "05:43 PM", customer: "Aisyah Binti Rahman", branch: "Damascus Delivery", amount: "RM 482.00", delivery: "5.00", status: "completed" },
 ];
 
 export default function Orders() {
   const [searchQuery, setSearchQuery] = useState("");
   const [statusFilter, setStatusFilter] = useState("all");
 
   const filteredOrders = ordersData.filter((order) => {
     const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
       order.customer.toLowerCase().includes(searchQuery.toLowerCase());
     const matchesStatus = statusFilter === "all" || order.status === statusFilter;
     return matchesSearch && matchesStatus;
   });
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div>
         <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>
         <p className="text-sm text-muted-foreground">Manage and track all customer orders</p>
       </div>
 
       {/* Filters */}
       <div className="rounded-lg border bg-card p-4 card-shadow">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
           <div className="flex-1">
             <div className="relative">
               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
               <Input
                 placeholder="Search by Order ID or Customer..."
                 className="pl-9"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
           </div>
           <div className="flex flex-wrap items-center gap-2">
             <Select value={statusFilter} onValueChange={setStatusFilter}>
               <SelectTrigger className="w-36">
                 <SelectValue placeholder="Status" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="all">All Status</SelectItem>
                 <SelectItem value="new">New</SelectItem>
                 <SelectItem value="accepted">Kitchen Accepted</SelectItem>
                 <SelectItem value="delivering">Ready To Deliver</SelectItem>
                 <SelectItem value="completed">Completed</SelectItem>
                 <SelectItem value="cancelled">Cancelled</SelectItem>
               </SelectContent>
             </Select>
             <Button variant="outline" size="icon">
               <Calendar className="h-4 w-4" />
             </Button>
           </div>
         </div>
       </div>
 
       {/* Orders Table */}
       <div className="rounded-lg border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <Table>
             <TableHeader>
               <TableRow className="bg-muted/50">
                 <TableHead className="font-semibold">Order</TableHead>
                 <TableHead className="font-semibold">Date</TableHead>
                 <TableHead className="font-semibold">Customer</TableHead>
                 <TableHead className="font-semibold">Branch</TableHead>
                 <TableHead className="font-semibold text-right">Amount</TableHead>
                 <TableHead className="font-semibold">Status</TableHead>
                 <TableHead className="font-semibold w-12"></TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {filteredOrders.map((order) => (
                 <TableRow key={order.id} className="hover:bg-muted/30">
                   <TableCell>
                     <div>
                       <span className="font-medium text-primary">#{order.id}</span>
                       <p className="text-xs text-muted-foreground">ID {order.internalId}</p>
                     </div>
                   </TableCell>
                   <TableCell>
                     <div>
                       <span className="text-sm">{order.date}</span>
                       <p className="text-xs text-muted-foreground">{order.time}</p>
                     </div>
                   </TableCell>
                   <TableCell>
                     <span className={order.customer ? "text-primary font-medium" : "text-muted-foreground"}>
                       {order.customer || "Guest"}
                     </span>
                   </TableCell>
                   <TableCell className="text-muted-foreground">{order.branch}</TableCell>
                   <TableCell className="text-right">
                     <div>
                       <span className="font-semibold">{order.amount}</span>
                       <p className="text-xs text-muted-foreground">+ {order.delivery} delivery</p>
                     </div>
                   </TableCell>
                   <TableCell>
                     <StatusBadge status={order.status} />
                   </TableCell>
                   <TableCell>
                     <Button variant="ghost" size="icon" asChild>
                       <Link to={`/orders/${order.id}`}>
                         <Eye className="h-4 w-4" />
                       </Link>
                     </Button>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </div>
 
         {/* Pagination */}
         <div className="flex items-center justify-between border-t px-4 py-3">
           <p className="text-sm text-muted-foreground">
             Showing 1-10 of 66 orders
           </p>
           <div className="flex items-center gap-1">
             <Button variant="outline" size="sm" disabled>Previous</Button>
             <Button variant="default" size="sm" className="w-8">1</Button>
             <Button variant="outline" size="sm" className="w-8">2</Button>
             <Button variant="outline" size="sm" className="w-8">3</Button>
             <Button variant="outline" size="sm">Next</Button>
           </div>
         </div>
       </div>
     </div>
   );
 }