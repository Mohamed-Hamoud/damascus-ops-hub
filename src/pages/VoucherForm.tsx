 import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/PageHeader";
 
 export default function VoucherForm() {
   const { id } = useParams();
   const navigate = useNavigate();
   const isEditing = !!id;
 
   const [formData, setFormData] = useState({
     title: "",
     code: "",
     discountType: "fixed",
     discountValue: "",
     minOrderValue: "",
     startDate: "",
     endDate: "",
     expiryDays: "",
     totalQuantity: "1",
     limitPerUser: "1",
     pointsRequired: "",
     description: "",
     autoTerms: "",
     additionalTerms: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle form submission
     navigate("/promotions");
   };
 
   return (
     <div className="space-y-6">
      <PageHeader
        title={isEditing ? "Edit Voucher" : "New Voucher"}
        backLink="/promotions"
        backLabel="Vouchers"
      />
 
       {/* Form Card */}
       <form onSubmit={handleSubmit}>
        <div className="rounded-xl border border-border bg-card">
           {/* Card Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="section-title">
               {isEditing ? "Edit Voucher" : "New Voucher"}
             </h2>
            <span className="text-sm text-muted-foreground">
               Set up a new promotional voucher for customers
             </span>
           </div>
 
           <div className="p-6 space-y-8">
             {/* Basic Information */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📦</span> Basic Information
               </h3>
               <div className="space-y-4">
                 <div className="space-y-2">
                  <Label>Title <span className="text-destructive">*</span></Label>
                   <Input
                     value={formData.title}
                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                     placeholder="e.g., Welcome Voucher"
                   />
                  <p className="text-xs text-muted-foreground">Display name for the voucher</p>
                 </div>
                 <div className="space-y-2">
                  <Label>Voucher Code <span className="text-destructive">*</span></Label>
                   <Input
                     value={formData.code}
                     onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                     placeholder="e.g., WELCOME50"
                   />
                  <p className="text-xs text-muted-foreground">Unique code customers will use to redeem</p>
                 </div>
               </div>
             </div>
 
             {/* Discount Settings */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">💰</span> Discount Settings
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                  <Label>Discount Type <span className="text-destructive">*</span></Label>
                   <select
                     value={formData.discountType}
                     onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                   >
                     <option value="fixed">Fixed</option>
                     <option value="percentage">Percentage</option>
                   </select>
                  <p className="text-xs text-muted-foreground">Fixed amount or percentage off</p>
                 </div>
                 <div className="space-y-2">
                  <Label>Discount Value <span className="text-destructive">*</span></Label>
                   <Input
                     type="number"
                     value={formData.discountValue}
                     onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                     placeholder="0.00"
                   />
                  <p className="text-xs text-muted-foreground">Amount in RM or percentage (e.g., 10 for 10%)</p>
                 </div>
               </div>
               <div className="space-y-2">
                <Label>Minimum Order Value <span className="text-destructive">*</span></Label>
                 <Input
                   type="number"
                   value={formData.minOrderValue}
                   onChange={(e) => setFormData({ ...formData, minOrderValue: e.target.value })}
                   placeholder="e.g., 50.00"
                 />
                <p className="text-xs text-muted-foreground">Minimum cart value required to use this voucher (RM)</p>
               </div>
             </div>
 
             {/* Validity Period */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📅</span> Validity Period
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                  <Label>Start Date <span className="text-destructive">*</span></Label>
                   <Input
                     type="date"
                     value={formData.startDate}
                     onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                   />
                  <p className="text-xs text-muted-foreground">When voucher becomes available</p>
                 </div>
                 <div className="space-y-2">
                  <Label>End Date <span className="text-destructive">*</span></Label>
                   <Input
                     type="date"
                     value={formData.endDate}
                     onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                   />
                  <p className="text-xs text-muted-foreground">When voucher expires</p>
                 </div>
               </div>
               <div className="space-y-2">
                <Label>Expiry Period (days after redemption) <span className="text-destructive">*</span></Label>
                 <Input
                   type="number"
                   value={formData.expiryDays}
                   onChange={(e) => setFormData({ ...formData, expiryDays: e.target.value })}
                   placeholder="e.g., 30"
                 />
                <p className="text-xs text-muted-foreground">Number of days the voucher is valid after customer redeems it</p>
               </div>
             </div>
 
             {/* Usage Limits */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">👥</span> Usage Limits
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                  <Label>Total Quantity <span className="text-destructive">*</span></Label>
                   <Input
                     type="number"
                     value={formData.totalQuantity}
                     onChange={(e) => setFormData({ ...formData, totalQuantity: e.target.value })}
                     placeholder="1"
                   />
                  <p className="text-xs text-muted-foreground">Total number of vouchers available</p>
                 </div>
                 <div className="space-y-2">
                  <Label>Limit Per User <span className="text-destructive">*</span></Label>
                   <Input
                     type="number"
                     value={formData.limitPerUser}
                     onChange={(e) => setFormData({ ...formData, limitPerUser: e.target.value })}
                     placeholder="1"
                   />
                  <p className="text-xs text-muted-foreground">Maximum times each user can redeem</p>
                 </div>
               </div>
             </div>
 
             {/* Points Redemption */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">⭐</span> Points Redemption
               </h3>
               <div className="space-y-2">
                 <Label>Points Required</Label>
                 <Input
                   type="number"
                   value={formData.pointsRequired}
                   onChange={(e) => setFormData({ ...formData, pointsRequired: e.target.value })}
                   placeholder="e.g., 100"
                 />
                <p className="text-xs text-muted-foreground">Number of loyalty points needed to redeem this voucher</p>
               </div>
             </div>
 
             {/* Image & Description */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">🖼️</span> Image & Description
               </h3>
               <div className="space-y-2">
                 <Label>Voucher Image</Label>
                <p className="text-xs text-muted-foreground italic">No image uploaded</p>
                 <div className="flex items-center gap-2">
                  <label className="cursor-pointer px-3 py-1.5 text-sm border border-border rounded bg-card hover:bg-muted">
                     Choose file
                     <input type="file" className="hidden" accept="image/*" />
                   </label>
                  <span className="text-sm text-muted-foreground">No file chosen</span>
                 </div>
                <p className="text-xs text-muted-foreground">Recommended size: 600×600px</p>
               </div>
               <div className="space-y-2">
                 <Label>Description</Label>
                 <Textarea
                   value={formData.description}
                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                   placeholder="Brief description of the voucher"
                   rows={3}
                 />
                <p className="text-xs text-muted-foreground">Displayed to customers in the app</p>
               </div>
             </div>
 
             {/* Terms and Conditions */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📋</span> Terms and Conditions
               </h3>
               <div className="space-y-2">
                 <Label>Auto-generated Terms</Label>
                 <Textarea
                   value={formData.autoTerms}
                   readOnly
                   placeholder=""
                  className="bg-muted text-muted-foreground"
                   rows={3}
                 />
                <p className="text-xs text-muted-foreground">Generated based on minimum order value</p>
               </div>
               <div className="space-y-2">
                 <Label>Additional Terms</Label>
                 <Textarea
                   value={formData.additionalTerms}
                   onChange={(e) => setFormData({ ...formData, additionalTerms: e.target.value })}
                   placeholder="Add any additional terms and conditions here"
                   rows={3}
                 />
                <p className="text-xs text-muted-foreground">Custom terms will be appended to the auto-generated ones</p>
               </div>
             </div>
           </div>
 
           {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-4">
             <Button type="button" variant="outline" onClick={() => navigate("/promotions")}>
               Cancel
             </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
               Save Voucher
             </Button>
           </div>
         </div>
       </form>
     </div>
   );
 }