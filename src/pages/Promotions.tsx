 import { useState } from "react";
 import { Plus } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 import { FormModal } from "@/components/shared/FormModal";
 
 type TabType = "delivery-fees" | "discounts" | "custom-discounts" | "vouchers";
 
 const mockVouchers = [
   {
     id: 1,
     title: "RM50 Off Voucher",
     code: "DAMASCUS50",
     remaining: 899999,
     limit: 900000,
     points: 5000,
     minOrder: 55.0,
     startDate: "2026-01-29",
     endDate: "2027-02-26",
   },
   {
     id: 2,
     title: "THANKYOU RM15",
     code: "THANKYOU",
     remaining: 100000,
     limit: 10000000,
     points: 800,
     minOrder: 50.0,
     startDate: "2026-01-29",
     endDate: "2026-01-31",
   },
 ];
 
 const mockDeliveryRules: any[] = [];
 
 export default function Promotions() {
   const [activeTab, setActiveTab] = useState<TabType>("delivery-fees");
   const [showVoucherModal, setShowVoucherModal] = useState(false);
   const [showRuleModal, setShowRuleModal] = useState(false);
 
   // Delivery fee state
   const [deliveryDescEN, setDeliveryDescEN] = useState("");
   const [deliveryDescMS, setDeliveryDescMS] = useState("");
   const [basicDeliveryFee, setBasicDeliveryFee] = useState("5.0");
   const [testDistance, setTestDistance] = useState("");
   const [testOrderPrice, setTestOrderPrice] = useState("");
 
   const tabs: { id: TabType; label: string }[] = [
     { id: "delivery-fees", label: "Delivery Fees" },
     { id: "discounts", label: "Discounts" },
     { id: "custom-discounts", label: "Custom Discounts" },
     { id: "vouchers", label: "Vouchers" },
   ];
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {activeTab === "delivery-fees" && "Delivery Fee Rules"}
           {activeTab === "discounts" && "Discounts"}
           {activeTab === "custom-discounts" && "Custom Discounts"}
           {activeTab === "vouchers" && "Vouchers"}
         </h1>
         {activeTab === "vouchers" && (
           <Button onClick={() => setShowVoucherModal(true)} className="bg-[#aa1e2c] hover:bg-[#8a1824]">
             <Plus className="mr-2 h-4 w-4" />
             Add Voucher
           </Button>
         )}
         {activeTab === "delivery-fees" && (
           <Button onClick={() => setShowRuleModal(true)} className="bg-[#aa1e2c] hover:bg-[#8a1824]">
             <Plus className="mr-2 h-4 w-4" />
             Add Rule
           </Button>
         )}
       </div>
 
       {/* Tabs */}
       <div className="border-b border-gray-200 dark:border-gray-700">
         <nav className="-mb-px flex gap-6">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium transition-colors ${
                 activeTab === tab.id
                   ? "border-[#aa1e2c] text-[#aa1e2c]"
                   : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400"
               }`}
             >
               {tab.label}
             </button>
           ))}
         </nav>
       </div>
 
       {/* Tab Content */}
       {activeTab === "delivery-fees" && (
         <div className="space-y-6">
           {/* Delivery Fee Descriptions */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Delivery Fee Descriptions</h3>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>Description (English)</Label>
                 <Textarea
                   value={deliveryDescEN}
                   onChange={(e) => setDeliveryDescEN(e.target.value)}
                   placeholder="Delivery Fee Description EN"
                   className="bg-white dark:bg-gray-800"
                   rows={3}
                 />
               </div>
               <div className="space-y-2">
                 <Label>Description (Malay)</Label>
                 <Textarea
                   value={deliveryDescMS}
                   onChange={(e) => setDeliveryDescMS(e.target.value)}
                   placeholder="Delivery Fee Description MS"
                   className="bg-white dark:bg-gray-800"
                   rows={3}
                 />
               </div>
               <Button className="bg-[#aa1e2c] hover:bg-[#8a1824]">Update Descriptions</Button>
             </div>
           </div>
 
           {/* Basic Delivery Fee */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Delivery Fee</h3>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>Basic Delivery Fee (RM)</Label>
                 <Input
                   type="number"
                   value={basicDeliveryFee}
                   onChange={(e) => setBasicDeliveryFee(e.target.value)}
                   className="w-48 bg-white dark:bg-gray-800"
                 />
               </div>
               <Button className="bg-[#aa1e2c] hover:bg-[#8a1824]">Update</Button>
             </div>
           </div>
 
           {/* Rules Playground */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rules Playground</h3>
               <span className="text-sm font-medium text-[#aa1e2c]">TEST YOUR RULES</span>
             </div>
             <div className="space-y-4">
               <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                   <Label>Distance (KM)</Label>
                   <Input
                     type="number"
                     value={testDistance}
                     onChange={(e) => setTestDistance(e.target.value)}
                     placeholder="Enter distance"
                     className="bg-white dark:bg-gray-800"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label>Order Price (RM)</Label>
                   <Input
                     type="number"
                     value={testOrderPrice}
                     onChange={(e) => setTestOrderPrice(e.target.value)}
                     placeholder="Enter price"
                     className="bg-white dark:bg-gray-800"
                   />
                 </div>
               </div>
               <Button variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">Check</Button>
             </div>
           </div>
 
           {/* Delivery Fee Rules Table */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delivery Fee Rules</h3>
               <span className="text-sm text-gray-500">{mockDeliveryRules.length} rules</span>
             </div>
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>MIN DISTANCE</TableHead>
                   <TableHead>MAX DISTANCE</TableHead>
                   <TableHead>MULTIPLIER</TableHead>
                   <TableHead>MIN ORDER</TableHead>
                   <TableHead>MAX ORDER</TableHead>
                   <TableHead>DISCOUNT</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {mockDeliveryRules.length === 0 ? (
                   <TableRow>
                     <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                       No delivery fee rules found
                     </TableCell>
                   </TableRow>
                 ) : (
                   mockDeliveryRules.map((rule) => (
                     <TableRow key={rule.id}>
                       <TableCell>{rule.minDistance}</TableCell>
                       <TableCell>{rule.maxDistance}</TableCell>
                       <TableCell>{rule.multiplier}</TableCell>
                       <TableCell>{rule.minOrder}</TableCell>
                       <TableCell>{rule.maxOrder}</TableCell>
                       <TableCell>{rule.discount}</TableCell>
                     </TableRow>
                   ))
                 )}
               </TableBody>
             </Table>
           </div>
         </div>
       )}
 
       {activeTab === "discounts" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <p className="text-gray-500 dark:text-gray-400 text-center py-8">
             Discounts management coming soon
           </p>
         </div>
       )}
 
       {activeTab === "custom-discounts" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <p className="text-gray-500 dark:text-gray-400 text-center py-8">
             Custom discounts management coming soon
           </p>
         </div>
       )}
 
       {activeTab === "vouchers" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
           <Table>
             <TableHeader>
               <TableRow>
                 <TableHead>TITLE</TableHead>
                 <TableHead>CODE</TableHead>
                 <TableHead>REMAINING</TableHead>
                 <TableHead>LIMIT</TableHead>
                 <TableHead>POINTS</TableHead>
                 <TableHead>MIN ORDER</TableHead>
                 <TableHead>START</TableHead>
                 <TableHead>END</TableHead>
                 <TableHead className="text-right">ACTIONS</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {mockVouchers.map((voucher) => (
                 <TableRow key={voucher.id}>
                   <TableCell className="font-medium">{voucher.title}</TableCell>
                   <TableCell>{voucher.code}</TableCell>
                   <TableCell>
                     <span className="text-[#aa1e2c] font-medium">{voucher.remaining.toLocaleString()}</span>
                   </TableCell>
                   <TableCell>{voucher.limit.toLocaleString()}</TableCell>
                   <TableCell className="font-medium">{voucher.points.toLocaleString()}</TableCell>
                   <TableCell>{voucher.minOrder.toFixed(1)}</TableCell>
                   <TableCell>{voucher.startDate}</TableCell>
                   <TableCell>{voucher.endDate}</TableCell>
                   <TableCell className="text-right">
                     <div className="flex items-center justify-end gap-2">
                       <Button size="sm" variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                         View
                       </Button>
                       <Button size="sm" variant="outline">
                         Edit
                       </Button>
                       <Button size="sm" variant="destructive">
                         Delete
                       </Button>
                     </div>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </div>
       )}
 
       {/* Add Voucher Modal */}
       <FormModal
         open={showVoucherModal}
         onOpenChange={setShowVoucherModal}
         title="Add Voucher"
         onSubmit={() => setShowVoucherModal(false)}
       >
         <div className="space-y-6">
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">📦</span> Basic Information
             </h4>
             <div className="space-y-2">
               <Label>Title *</Label>
               <Input placeholder="Display name for the voucher" className="bg-white dark:bg-gray-800" />
             </div>
             <div className="space-y-2">
               <Label>Voucher Code *</Label>
               <Input placeholder="Unique code customers will use to redeem" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
 
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">💰</span> Discount Settings
             </h4>
             <div className="grid gap-4 md:grid-cols-2">
               <div className="space-y-2">
                 <Label>Discount Type *</Label>
                 <select className="w-full h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3">
                   <option value="fixed">Fixed</option>
                   <option value="percentage">Percentage</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <Label>Discount Value *</Label>
                 <Input type="number" placeholder="Amount in RM or percentage" className="bg-white dark:bg-gray-800" />
               </div>
             </div>
             <div className="space-y-2">
               <Label>Minimum Order Value *</Label>
               <Input type="number" placeholder="Minimum cart value required (RM)" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
 
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">📅</span> Validity Period
             </h4>
             <div className="grid gap-4 md:grid-cols-2">
               <div className="space-y-2">
                 <Label>Start Date *</Label>
                 <Input type="date" className="bg-white dark:bg-gray-800" />
               </div>
               <div className="space-y-2">
                 <Label>End Date *</Label>
                 <Input type="date" className="bg-white dark:bg-gray-800" />
               </div>
             </div>
             <div className="space-y-2">
               <Label>Expiry Period (days after redemption) *</Label>
               <Input type="number" placeholder="30" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
 
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">👥</span> Usage Limits
             </h4>
             <div className="grid gap-4 md:grid-cols-2">
               <div className="space-y-2">
                 <Label>Total Quantity *</Label>
                 <Input type="number" placeholder="Total number of vouchers available" className="bg-white dark:bg-gray-800" />
               </div>
               <div className="space-y-2">
                 <Label>Limit Per User *</Label>
                 <Input type="number" placeholder="Maximum times each user can redeem" className="bg-white dark:bg-gray-800" />
               </div>
             </div>
           </div>
 
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">⭐</span> Points Redemption
             </h4>
             <div className="space-y-2">
               <Label>Points Required</Label>
               <Input type="number" placeholder="Number of loyalty points needed to redeem" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
 
           <div className="space-y-4">
             <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
               <span className="text-lg">🖼️</span> Image & Description
             </h4>
             <div className="space-y-2">
               <Label>Description</Label>
               <Textarea placeholder="Displayed to customers in the app" className="bg-white dark:bg-gray-800" rows={3} />
             </div>
           </div>
         </div>
       </FormModal>
 
       {/* Add Rule Modal */}
       <FormModal
         open={showRuleModal}
         onOpenChange={setShowRuleModal}
         title="Add Delivery Fee Rule"
         onSubmit={() => setShowRuleModal(false)}
       >
         <div className="space-y-4">
           <div className="grid gap-4 md:grid-cols-2">
             <div className="space-y-2">
               <Label>Min Distance (KM)</Label>
               <Input type="number" placeholder="0" className="bg-white dark:bg-gray-800" />
             </div>
             <div className="space-y-2">
               <Label>Max Distance (KM)</Label>
               <Input type="number" placeholder="10" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
           <div className="space-y-2">
             <Label>Multiplier</Label>
             <Input type="number" step="0.1" placeholder="1.0" className="bg-white dark:bg-gray-800" />
           </div>
           <div className="grid gap-4 md:grid-cols-2">
             <div className="space-y-2">
               <Label>Min Order (RM)</Label>
               <Input type="number" placeholder="0" className="bg-white dark:bg-gray-800" />
             </div>
             <div className="space-y-2">
               <Label>Max Order (RM)</Label>
               <Input type="number" placeholder="100" className="bg-white dark:bg-gray-800" />
             </div>
           </div>
           <div className="space-y-2">
             <Label>Discount (%)</Label>
             <Input type="number" placeholder="0" className="bg-white dark:bg-gray-800" />
           </div>
         </div>
       </FormModal>
     </div>
   );
 }