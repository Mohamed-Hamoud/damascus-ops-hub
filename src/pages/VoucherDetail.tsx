 import { Link, useParams, useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
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
 
   const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="py-4 border-b border-border last:border-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{label}</p>
      <p className="text-foreground">{value}</p>
     </div>
   );
 
   return (
     <div className="space-y-6">
      <PageHeader
        title={mockVoucher.title}
        backLink="/promotions"
        backLabel="Vouchers"
        actions={
          <Button
            onClick={() => navigate(`/promotions/vouchers/${id}/edit`)}
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          >
            Edit
          </Button>
        }
      />
 
       {/* Voucher Details Card */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="section-title">Voucher Details</h2>
         </div>
 
         <div className="px-6 py-4">
           <DetailRow label="TITLE" value={mockVoucher.title} />
           
          <div className="py-4 border-b border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">VOUCHER IMAGE</p>
            <div className="inline-flex items-center justify-center h-12 px-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
               RM50
             </div>
           </div>
 
           <DetailRow label="DESCRIPTION" value={mockVoucher.description} />
           <DetailRow label="CODE" value={mockVoucher.code} />
           <DetailRow label="REMAINING QUANTITY" value={mockVoucher.remaining.toLocaleString()} />
           <DetailRow label="LIMIT REDEEM" value={mockVoucher.limit.toLocaleString()} />
           <DetailRow label="DISCOUNT" value={mockVoucher.discount.toFixed(1)} />
           <DetailRow label="START DATE" value={mockVoucher.startDate} />
           <DetailRow label="EXPIRES AT" value={mockVoucher.expiresAt} />
           <DetailRow label="MINIMUM ORDER VALUE" value={mockVoucher.minOrderValue.toFixed(1)} />
           <DetailRow label="POINTS REQUIRED" value={mockVoucher.pointsRequired.toLocaleString()} />
           <DetailRow label="TERMS AND CONDITIONS" value={mockVoucher.terms} />
           <DetailRow label="CREATED AT" value={mockVoucher.createdAt} />
           <DetailRow label="UPDATED AT" value={mockVoucher.updatedAt} />
         </div>
       </div>
 
       {/* User Voucher List */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="section-title">
             User Voucher List ({userVouchers.length})
           </h2>
         </div>
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead>USER VOUCHER ID</TableHead>
               <TableHead>VOUCHER CODE</TableHead>
               <TableHead>REDEEMED BY</TableHead>
               <TableHead>REDEEMED AT</TableHead>
               <TableHead>USED AT</TableHead>
               <TableHead>EXPIRED AT</TableHead>
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