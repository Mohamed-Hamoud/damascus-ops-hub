 import { useParams, useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Edit, Calendar, Tag, Gift, CreditCard, Users } from "lucide-react";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
import { PageHeader } from "@/components/shared/PageHeader";
 
 // Mock voucher data
 const mockVoucher = {
   id: 1,
   title: "RM50 Off Voucher",
   image: null,
   description: "Gunakan 5000 points anda untuk dapat potongan RM50! Sah untuk minimum order RM55 melalui Damascus App.",
   code: "DAMASCUS50",
   remaining: 899999,
   limit: 900000,
   discount: 50.0,
   startDate: "2026-01-29 00:00:00 +0800",
   expiresAt: "2027-02-26 00:00:00 +0800",
   minOrderValue: 55.0,
   pointsRequired: 5000,
   terms: "Minimum order value of RM 55.00. Minimum order value of RM 55.00. • Voucher tidak boleh digabung dengan promosi lain. • Voucher not exchangeable for cash. • Sah digunakan hanya melalui Damascus App. • Validity berdasarkan tempoh tamat.",
   createdAt: "2026-01-29 09:21:08 +0800",
   updatedAt: "2026-01-29 09:21:10 +0800",
 };
 
 // Empty user vouchers
 const userVouchers: any[] = [];
 
 export default function VoucherDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
 
   const InfoItem = ({ label, value, highlight = false }: { label: string; value: React.ReactNode; highlight?: boolean }) => (
     <div>
       <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
       <p className={`font-medium ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
     </div>
   );
 
   return (
     <div className="space-y-6">
      <PageHeader
        title={mockVoucher.title}
        backLink="/promotions"
        backLabel="Vouchers"
         badge={
           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success">
             Active
           </span>
         }
        actions={
          <Button
            onClick={() => navigate(`/promotions/vouchers/${id}/edit`)}
             className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
          >
             <Edit className="h-4 w-4" />
            Edit
          </Button>
        }
      />
 
       {/* Stats Cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="rounded-xl border border-border bg-card p-4">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
               <Tag className="h-5 w-5 text-primary" />
             </div>
             <div>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">Discount</p>
               <p className="text-xl font-bold text-foreground">RM {mockVoucher.discount.toFixed(0)}</p>
             </div>
           </div>
         </div>
         <div className="rounded-xl border border-border bg-card p-4">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
               <Gift className="h-5 w-5 text-success" />
             </div>
             <div>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">Remaining</p>
               <p className="text-xl font-bold text-foreground">{mockVoucher.remaining.toLocaleString()}</p>
             </div>
           </div>
         </div>
         <div className="rounded-xl border border-border bg-card p-4">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
               <CreditCard className="h-5 w-5 text-warning" />
             </div>
             <div>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">Min Order</p>
               <p className="text-xl font-bold text-foreground">RM {mockVoucher.minOrderValue.toFixed(0)}</p>
             </div>
           </div>
         </div>
         <div className="rounded-xl border border-border bg-card p-4">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center">
               <Users className="h-5 w-5 text-info" />
             </div>
             <div>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">Points Req.</p>
               <p className="text-xl font-bold text-foreground">{mockVoucher.pointsRequired.toLocaleString()}</p>
             </div>
           </div>
         </div>
       </div>
 
       {/* Details Grid */}
       <div className="grid gap-6 lg:grid-cols-3">
         {/* Main Details Card */}
         <div className="lg:col-span-2 rounded-xl border border-border bg-card">
           <div className="border-b border-border px-6 py-4 bg-muted/30">
             <h2 className="section-title">Voucher Details</h2>
           </div>
           <div className="p-6">
             <div className="grid gap-6 sm:grid-cols-2">
               <InfoItem label="Title" value={mockVoucher.title} />
               <InfoItem label="Code" value={mockVoucher.code} highlight />
               <InfoItem label="Limit Redeem" value={mockVoucher.limit.toLocaleString()} />
               <InfoItem label="Remaining" value={mockVoucher.remaining.toLocaleString()} />
               <InfoItem label="Discount" value={`RM ${mockVoucher.discount.toFixed(2)}`} />
               <InfoItem label="Minimum Order" value={`RM ${mockVoucher.minOrderValue.toFixed(2)}`} />
               <InfoItem label="Points Required" value={mockVoucher.pointsRequired.toLocaleString()} />
             </div>
             
             <div className="mt-6 pt-6 border-t border-border">
               <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Description</p>
               <p className="text-foreground">{mockVoucher.description}</p>
             </div>
             
             <div className="mt-6 pt-6 border-t border-border">
               <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Terms and Conditions</p>
               <p className="text-foreground text-sm leading-relaxed">{mockVoucher.terms}</p>
             </div>
           </div>
         </div>
 
         {/* Sidebar */}
         <div className="space-y-6">
           {/* Voucher Preview */}
           <div className="rounded-xl border border-border bg-card">
             <div className="border-b border-border px-6 py-4 bg-muted/30">
               <h2 className="section-title">Preview</h2>
             </div>
             <div className="p-6 flex items-center justify-center">
               <div className="inline-flex items-center justify-center h-16 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-xl shadow-lg">
                 RM{mockVoucher.discount.toFixed(0)} OFF
               </div>
             </div>
           </div>
 
           {/* Validity */}
           <div className="rounded-xl border border-border bg-card">
             <div className="border-b border-border px-6 py-4 bg-muted/30 flex items-center gap-2">
               <Calendar className="h-4 w-4 text-muted-foreground" />
               <h2 className="section-title">Validity Period</h2>
             </div>
             <div className="p-6 space-y-4">
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Start Date</p>
                 <p className="text-foreground font-medium">{mockVoucher.startDate}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Expires At</p>
                 <p className="text-foreground font-medium">{mockVoucher.expiresAt}</p>
               </div>
             </div>
           </div>
 
           {/* Timestamps */}
           <div className="rounded-xl border border-border bg-card">
             <div className="border-b border-border px-6 py-4 bg-muted/30">
               <h2 className="section-title">Timestamps</h2>
             </div>
             <div className="p-6 space-y-4">
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Created At</p>
                 <p className="text-sm text-foreground">{mockVoucher.createdAt}</p>
               </div>
               <div>
                 <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Updated At</p>
                 <p className="text-sm text-foreground">{mockVoucher.updatedAt}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
 
       {/* User Voucher List */}
      <div className="rounded-xl border border-border bg-card">
         <div className="border-b border-border px-6 py-4 bg-muted/30 flex items-center justify-between">
           <h2 className="section-title">User Voucher List</h2>
           <span className="text-sm text-muted-foreground">{userVouchers.length} users</span>
         </div>
         <Table>
           <TableHeader>
             <TableRow className="bg-muted/30">
               <TableHead className="text-xs font-semibold uppercase tracking-wider">User Voucher ID</TableHead>
               <TableHead className="text-xs font-semibold uppercase tracking-wider">Voucher Code</TableHead>
               <TableHead className="text-xs font-semibold uppercase tracking-wider">Redeemed By</TableHead>
               <TableHead className="text-xs font-semibold uppercase tracking-wider">Redeemed At</TableHead>
               <TableHead className="text-xs font-semibold uppercase tracking-wider">Used At</TableHead>
               <TableHead className="text-xs font-semibold uppercase tracking-wider">Expired At</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {userVouchers.length === 0 ? (
               <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                   No user vouchers found
                 </TableCell>
               </TableRow>
             ) : (
               userVouchers.map((uv) => (
                 <TableRow key={uv.id}>
                   <TableCell>{uv.id}</TableCell>
                   <TableCell>{uv.code}</TableCell>
                   <TableCell>{uv.redeemedBy}</TableCell>
                   <TableCell>{uv.redeemedAt}</TableCell>
                   <TableCell>{uv.usedAt}</TableCell>
                   <TableCell>{uv.expiredAt}</TableCell>
                 </TableRow>
               ))
             )}
           </TableBody>
         </Table>
       </div>
     </div>
   );
 }