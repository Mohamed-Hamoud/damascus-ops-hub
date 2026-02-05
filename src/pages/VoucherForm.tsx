 import { useState } from "react";
 import { Link, useNavigate, useParams } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 
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
       {/* Back Link */}
       <Link
         to="/promotions"
         className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
       >
         <ArrowLeft className="h-4 w-4" />
         Vouchers
       </Link>
 
       {/* Page Title */}
       <div>
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {isEditing ? "Edit Voucher" : "New Voucher"}
         </h1>
       </div>
 
       {/* Form Card */}
       <form onSubmit={handleSubmit}>
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
           {/* Card Header */}
           <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
               {isEditing ? "Edit Voucher" : "New Voucher"}
             </h2>
             <span className="text-sm text-gray-500 dark:text-gray-400">
               Set up a new promotional voucher for customers
             </span>
           </div>
 
           <div className="p-6 space-y-8">
             {/* Basic Information */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">📦</span> Basic Information
               </h3>
               <div className="space-y-4">
                 <div className="space-y-2">
                   <Label>Title <span className="text-red-500">*</span></Label>
                   <Input
                     value={formData.title}
                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                     placeholder="e.g., Welcome Voucher"
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">Display name for the voucher</p>
                 </div>
                 <div className="space-y-2">
                   <Label>Voucher Code <span className="text-red-500">*</span></Label>
                   <Input
                     value={formData.code}
                     onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                     placeholder="e.g., WELCOME50"
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">Unique code customers will use to redeem</p>
                 </div>
               </div>
             </div>
 
             {/* Discount Settings */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">💰</span> Discount Settings
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                   <Label>Discount Type <span className="text-red-500">*</span></Label>
                   <select
                     value={formData.discountType}
                     onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                     className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                   >
                     <option value="fixed">Fixed</option>
                     <option value="percentage">Percentage</option>
                   </select>
                   <p className="text-xs text-gray-500">Fixed amount or percentage off</p>
                 </div>
                 <div className="space-y-2">
                   <Label>Discount Value <span className="text-red-500">*</span></Label>
                   <Input
                     type="number"
                     value={formData.discountValue}
                     onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                     placeholder="0.00"
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">Amount in RM or percentage (e.g., 10 for 10%)</p>
                 </div>
               </div>
               <div className="space-y-2">
                 <Label>Minimum Order Value <span className="text-red-500">*</span></Label>
                 <Input
                   type="number"
                   value={formData.minOrderValue}
                   onChange={(e) => setFormData({ ...formData, minOrderValue: e.target.value })}
                   placeholder="e.g., 50.00"
                   className="bg-white dark:bg-gray-800"
                 />
                 <p className="text-xs text-gray-500">Minimum cart value required to use this voucher (RM)</p>
               </div>
             </div>
 
             {/* Validity Period */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">📅</span> Validity Period
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                   <Label>Start Date <span className="text-red-500">*</span></Label>
                   <Input
                     type="date"
                     value={formData.startDate}
                     onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">When voucher becomes available</p>
                 </div>
                 <div className="space-y-2">
                   <Label>End Date <span className="text-red-500">*</span></Label>
                   <Input
                     type="date"
                     value={formData.endDate}
                     onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">When voucher expires</p>
                 </div>
               </div>
               <div className="space-y-2">
                 <Label>Expiry Period (days after redemption) <span className="text-red-500">*</span></Label>
                 <Input
                   type="number"
                   value={formData.expiryDays}
                   onChange={(e) => setFormData({ ...formData, expiryDays: e.target.value })}
                   placeholder="e.g., 30"
                   className="bg-white dark:bg-gray-800"
                 />
                 <p className="text-xs text-gray-500">Number of days the voucher is valid after customer redeems it</p>
               </div>
             </div>
 
             {/* Usage Limits */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">👥</span> Usage Limits
               </h3>
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                   <Label>Total Quantity <span className="text-red-500">*</span></Label>
                   <Input
                     type="number"
                     value={formData.totalQuantity}
                     onChange={(e) => setFormData({ ...formData, totalQuantity: e.target.value })}
                     placeholder="1"
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">Total number of vouchers available</p>
                 </div>
                 <div className="space-y-2">
                   <Label>Limit Per User <span className="text-red-500">*</span></Label>
                   <Input
                     type="number"
                     value={formData.limitPerUser}
                     onChange={(e) => setFormData({ ...formData, limitPerUser: e.target.value })}
                     placeholder="1"
                     className="bg-white dark:bg-gray-800"
                   />
                   <p className="text-xs text-gray-500">Maximum times each user can redeem</p>
                 </div>
               </div>
             </div>
 
             {/* Points Redemption */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">⭐</span> Points Redemption
               </h3>
               <div className="space-y-2">
                 <Label>Points Required</Label>
                 <Input
                   type="number"
                   value={formData.pointsRequired}
                   onChange={(e) => setFormData({ ...formData, pointsRequired: e.target.value })}
                   placeholder="e.g., 100"
                   className="bg-white dark:bg-gray-800"
                 />
                 <p className="text-xs text-gray-500">Number of loyalty points needed to redeem this voucher</p>
               </div>
             </div>
 
             {/* Image & Description */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">🖼️</span> Image & Description
               </h3>
               <div className="space-y-2">
                 <Label>Voucher Image</Label>
                 <p className="text-xs text-gray-500 italic">No image uploaded</p>
                 <div className="flex items-center gap-2">
                   <label className="cursor-pointer px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                     Choose file
                     <input type="file" className="hidden" accept="image/*" />
                   </label>
                   <span className="text-sm text-gray-500">No file chosen</span>
                 </div>
                 <p className="text-xs text-gray-500">Recommended size: 600×600px</p>
               </div>
               <div className="space-y-2">
                 <Label>Description</Label>
                 <Textarea
                   value={formData.description}
                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                   placeholder="Brief description of the voucher"
                   className="bg-white dark:bg-gray-800"
                   rows={3}
                 />
                 <p className="text-xs text-gray-500">Displayed to customers in the app</p>
               </div>
             </div>
 
             {/* Terms and Conditions */}
             <div className="space-y-4">
               <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                 <span className="text-[#aa1e2c]">📋</span> Terms and Conditions
               </h3>
               <div className="space-y-2">
                 <Label>Auto-generated Terms</Label>
                 <Textarea
                   value={formData.autoTerms}
                   readOnly
                   placeholder=""
                   className="bg-gray-50 dark:bg-gray-700 text-gray-500"
                   rows={3}
                 />
                 <p className="text-xs text-gray-500">Generated based on minimum order value</p>
               </div>
               <div className="space-y-2">
                 <Label>Additional Terms</Label>
                 <Textarea
                   value={formData.additionalTerms}
                   onChange={(e) => setFormData({ ...formData, additionalTerms: e.target.value })}
                   placeholder="Add any additional terms and conditions here"
                   className="bg-white dark:bg-gray-800"
                   rows={3}
                 />
                 <p className="text-xs text-gray-500">Custom terms will be appended to the auto-generated ones</p>
               </div>
             </div>
           </div>
 
           {/* Footer Actions */}
           <div className="flex items-center justify-end gap-3 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
             <Button type="button" variant="outline" onClick={() => navigate("/promotions")}>
               Cancel
             </Button>
             <Button type="submit" className="bg-[#aa1e2c] hover:bg-[#8a1824]">
               Save Voucher
             </Button>
           </div>
         </div>
       </form>
     </div>
   );
 }