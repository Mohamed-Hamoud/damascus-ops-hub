 import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/shared/PageHeader";
 import { FormField, FormFeedback } from "@/components/shared/FormField";
 
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
 
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
 
   const validate = () => {
     const newErrors: Record<string, string> = {};
     if (!formData.title.trim()) newErrors.title = "Title is required";
     if (!formData.code.trim()) newErrors.code = "Voucher code is required";
     if (!formData.discountValue) newErrors.discountValue = "Discount value is required";
     if (!formData.minOrderValue) newErrors.minOrderValue = "Minimum order value is required";
     if (!formData.startDate) newErrors.startDate = "Start date is required";
     if (!formData.endDate) newErrors.endDate = "End date is required";
     if (!formData.expiryDays) newErrors.expiryDays = "Expiry period is required";
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setFeedback(null);
     if (!validate()) {
       setFeedback({ type: "error", message: "Please fix the errors below" });
       return;
     }
     // Handle form submission
     setFeedback({ type: "success", message: "Voucher saved successfully!" });
     setTimeout(() => navigate("/promotions"), 1000);
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
             {feedback && (
               <FormFeedback type={feedback.type} message={feedback.message} />
             )}
 
             {/* Basic Information */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📦</span> Basic Information
               </h3>
               <div className="space-y-4">
                 <FormField label="Title" required error={errors.title} hint="Display name for the voucher">
                   <Input
                     value={formData.title}
                     onChange={(e) => {
                       setFormData({ ...formData, title: e.target.value });
                       if (errors.title) setErrors({ ...errors, title: "" });
                     }}
                     placeholder="e.g., Welcome Voucher"
                     className={errors.title ? "border-destructive" : ""}
                   />
                 </FormField>
                 <FormField label="Voucher Code" required error={errors.code} hint="Unique code customers will use to redeem">
                   <Input
                     value={formData.code}
                     onChange={(e) => {
                       setFormData({ ...formData, code: e.target.value.toUpperCase() });
                       if (errors.code) setErrors({ ...errors, code: "" });
                     }}
                     placeholder="e.g., WELCOME50"
                     className={errors.code ? "border-destructive" : ""}
                   />
                 </FormField>
               </div>
             </div>
 
             {/* Discount Settings */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">💰</span> Discount Settings
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <FormField label="Discount Type" required hint="Fixed amount or percentage off">
                   <select
                     value={formData.discountType}
                     onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                   >
                     <option value="fixed">Fixed</option>
                     <option value="percentage">Percentage</option>
                   </select>
                 </FormField>
                 <FormField label="Discount Value" required error={errors.discountValue} hint="Amount in RM or percentage (e.g., 10 for 10%)">
                   <Input
                     type="number"
                     value={formData.discountValue}
                     onChange={(e) => {
                       setFormData({ ...formData, discountValue: e.target.value });
                       if (errors.discountValue) setErrors({ ...errors, discountValue: "" });
                     }}
                     placeholder="0.00"
                     className={errors.discountValue ? "border-destructive" : ""}
                   />
                 </FormField>
               </div>
               <FormField label="Minimum Order Value" required error={errors.minOrderValue} hint="Minimum cart value required to use this voucher (RM)">
                 <Input
                   type="number"
                   value={formData.minOrderValue}
                   onChange={(e) => {
                     setFormData({ ...formData, minOrderValue: e.target.value });
                     if (errors.minOrderValue) setErrors({ ...errors, minOrderValue: "" });
                   }}
                   placeholder="e.g., 50.00"
                   className={errors.minOrderValue ? "border-destructive" : ""}
                 />
               </FormField>
             </div>
 
             {/* Validity Period */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📅</span> Validity Period
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <FormField label="Start Date" required error={errors.startDate} hint="When voucher becomes available">
                   <Input
                     type="date"
                     value={formData.startDate}
                     onChange={(e) => {
                       setFormData({ ...formData, startDate: e.target.value });
                       if (errors.startDate) setErrors({ ...errors, startDate: "" });
                     }}
                     className={errors.startDate ? "border-destructive" : ""}
                   />
                 </FormField>
                 <FormField label="End Date" required error={errors.endDate} hint="When voucher expires">
                   <Input
                     type="date"
                     value={formData.endDate}
                     onChange={(e) => {
                       setFormData({ ...formData, endDate: e.target.value });
                       if (errors.endDate) setErrors({ ...errors, endDate: "" });
                     }}
                     className={errors.endDate ? "border-destructive" : ""}
                   />
                 </FormField>
               </div>
               <FormField label="Expiry Period (days after redemption)" required error={errors.expiryDays} hint="Number of days the voucher is valid after customer redeems it">
                 <Input
                   type="number"
                   value={formData.expiryDays}
                   onChange={(e) => {
                     setFormData({ ...formData, expiryDays: e.target.value });
                     if (errors.expiryDays) setErrors({ ...errors, expiryDays: "" });
                   }}
                   placeholder="e.g., 30"
                   className={errors.expiryDays ? "border-destructive" : ""}
                 />
               </FormField>
             </div>
 
             {/* Usage Limits */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">👥</span> Usage Limits
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <FormField label="Total Quantity" required hint="Total number of vouchers available">
                   <Input
                     type="number"
                     value={formData.totalQuantity}
                     onChange={(e) => setFormData({ ...formData, totalQuantity: e.target.value })}
                     placeholder="1"
                   />
                 </FormField>
                 <FormField label="Limit Per User" required hint="Maximum times each user can redeem">
                   <Input
                     type="number"
                     value={formData.limitPerUser}
                     onChange={(e) => setFormData({ ...formData, limitPerUser: e.target.value })}
                     placeholder="1"
                   />
                 </FormField>
               </div>
             </div>
 
             {/* Points Redemption */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">⭐</span> Points Redemption
               </h3>
               <FormField label="Points Required" hint="Number of loyalty points needed to redeem this voucher">
                 <Input
                   type="number"
                   value={formData.pointsRequired}
                   onChange={(e) => setFormData({ ...formData, pointsRequired: e.target.value })}
                   placeholder="e.g., 100"
                 />
               </FormField>
             </div>
 
             {/* Image & Description */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">🖼️</span> Image & Description
               </h3>
               <FormField label="Voucher Image" hint="Recommended size: 600×600px">
                 <p className="text-xs text-muted-foreground italic mb-2">No image uploaded</p>
                 <div className="flex items-center gap-2">
                   <label className="cursor-pointer px-3 py-2 text-sm border border-border rounded-md bg-card hover:bg-muted touch-target-sm inline-flex items-center">
                     Choose file
                     <input type="file" className="hidden" accept="image/*" />
                   </label>
                  <span className="text-sm text-muted-foreground">No file chosen</span>
                 </div>
               </FormField>
               <FormField label="Description" hint="Displayed to customers in the app">
                 <Textarea
                   value={formData.description}
                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                   placeholder="Brief description of the voucher"
                   rows={3}
                 />
               </FormField>
             </div>
 
             {/* Terms and Conditions */}
             <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="text-primary">📋</span> Terms and Conditions
               </h3>
               <FormField label="Auto-generated Terms" hint="Generated based on minimum order value">
                 <Textarea
                   value={formData.autoTerms}
                   readOnly
                   placeholder=""
                  className="bg-muted text-muted-foreground"
                   rows={3}
                 />
               </FormField>
               <FormField label="Additional Terms" hint="Custom terms will be appended to the auto-generated ones">
                 <Textarea
                   value={formData.additionalTerms}
                   onChange={(e) => setFormData({ ...formData, additionalTerms: e.target.value })}
                   placeholder="Add any additional terms and conditions here"
                   rows={3}
                 />
               </FormField>
             </div>
           </div>
 
           {/* Footer Actions */}
           <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 border-t border-border px-4 sm:px-6 py-4">
             <Button type="button" variant="outline" onClick={() => navigate("/promotions")}>
               Cancel
             </Button>
             <Button type="submit">
               Save Voucher
             </Button>
           </div>
         </div>
       </form>
     </div>
   );
 }