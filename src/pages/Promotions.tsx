 import { useState } from "react";
import { Plus, GripVertical } from "lucide-react";
  import { useNavigate } from "react-router-dom";
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
 import { PageHeader } from "@/components/shared/PageHeader";
 import { TabNavigation } from "@/components/shared/TabNavigation";
 
 type TabType = "delivery-fees" | "discounts" | "custom-discounts" | "vouchers";
 
/**
 * Promotions Page
 * Manages delivery fees, discounts, and vouchers
 * 
 * RAILS IMPLEMENTATION NOTES:
 * 
 * 1. VOUCHER TABLE REORDERING
 *    The vouchers table includes drag handles (GripVertical icons) for reordering.
 *    See DAISYUI_MIGRATION_GUIDE.md section "Drag-and-Drop Reordering Implementation"
 *    - Use Stimulus controller with Sortable.js
 *    - The .drag-handle class triggers Sortable.js handle behavior
 *    - Update position via PATCH /vouchers/update_positions
 * 
 * 2. HAML TEMPLATE for Vouchers Table:
 *    ```haml
 *    %tbody.divide-y.divide-border{ data: { controller: "sortable", sortable_url_value: update_positions_vouchers_path } }
 *      - @vouchers.each do |voucher|
 *        %tr.table-row-hover{ data: { id: voucher.id } }
 *          %td.table-cell.font-medium= voucher.title
 *          %td.table-cell= voucher.code
 *          %td.table-cell
 *            %span.text-primary.font-medium= number_with_delimiter(voucher.remaining)
 *          / ... other columns ...
 *          %td.table-cell.text-right
 *            .action-group
 *              %button.drag-handle{ title: "Drag to reorder" }
 *                = lucide_icon "grip-vertical", class: "h-4 w-4"
 *              = link_to voucher_path(voucher), class: "btn-secondary btn-sm" do
 *                View
 *              = link_to edit_voucher_path(voucher), class: "btn-outline btn-sm" do
 *                Edit
 *              = button_to voucher_path(voucher), method: :delete, class: "btn-destructive btn-sm" do
 *                Delete
 *    ```
 * 
 * 3. ROUTES for Vouchers:
 *    ```ruby
 *    resources :vouchers do
 *      collection do
 *        patch :update_positions
 *      end
 *    end
 *    ```
 */

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
   const [showRuleModal, setShowRuleModal] = useState(false);
   const navigate = useNavigate();
 
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
        <PageHeader
          title={
            activeTab === "delivery-fees" ? "Delivery Fee Rules" :
            activeTab === "discounts" ? "Discounts" :
            activeTab === "custom-discounts" ? "Custom Discounts" : "Vouchers"
          }
          subtitle="Manage delivery fees, discounts, and vouchers"
          actions={
            <>
         {activeTab === "vouchers" && (
            <Button onClick={() => navigate("/promotions/vouchers/new")} className="bg-primary hover:bg-primary/90">
             <Plus className="mr-2 h-4 w-4" />
             Add Voucher
           </Button>
         )}
         {activeTab === "delivery-fees" && (
            <Button onClick={() => setShowRuleModal(true)} className="bg-primary hover:bg-primary/90">
             <Plus className="mr-2 h-4 w-4" />
             Add Rule
           </Button>
         )}
            </>
          }
        />
 
       {/* Tabs */}
         <TabNavigation
           tabs={tabs}
           activeTab={activeTab}
           onTabChange={(id) => setActiveTab(id as TabType)}
         />
 
       {/* Tab Content */}
       {activeTab === "delivery-fees" && (
         <div className="space-y-6">
           {/* Delivery Fee Descriptions */}
            <div className="rounded-lg border bg-card p-4">
              <h3 className="section-title mb-4">Delivery Fee Descriptions</h3>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>Description (English)</Label>
                 <Textarea
                   value={deliveryDescEN}
                   onChange={(e) => setDeliveryDescEN(e.target.value)}
                   placeholder="Delivery Fee Description EN"
                   rows={3}
                 />
               </div>
               <div className="space-y-2">
                 <Label>Description (Malay)</Label>
                 <Textarea
                   value={deliveryDescMS}
                   onChange={(e) => setDeliveryDescMS(e.target.value)}
                   placeholder="Delivery Fee Description MS"
                   rows={3}
                 />
               </div>
                <Button className="bg-primary hover:bg-primary/90">Update Descriptions</Button>
             </div>
           </div>
 
           {/* Basic Delivery Fee */}
            <div className="rounded-lg border bg-card p-4">
              <h3 className="section-title mb-4">Basic Delivery Fee</h3>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label>Basic Delivery Fee (RM)</Label>
                 <Input
                   type="number"
                   value={basicDeliveryFee}
                   onChange={(e) => setBasicDeliveryFee(e.target.value)}
                    className="w-48"
                 />
               </div>
                <Button className="bg-primary hover:bg-primary/90">Update</Button>
             </div>
           </div>
 
           {/* Rules Playground */}
            <div className="rounded-lg border bg-card p-4">
             <div className="flex items-center justify-between mb-4">
                <h3 className="section-title">Rules Playground</h3>
                <span className="text-sm font-medium text-primary">TEST YOUR RULES</span>
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
                   />
                 </div>
                 <div className="space-y-2">
                   <Label>Order Price (RM)</Label>
                   <Input
                     type="number"
                     value={testOrderPrice}
                     onChange={(e) => setTestOrderPrice(e.target.value)}
                     placeholder="Enter price"
                   />
                 </div>
               </div>
                <Button variant="secondary">Check</Button>
             </div>
           </div>
 
           {/* Delivery Fee Rules Table */}
            <div className="rounded-lg border bg-card p-4">
             <div className="flex items-center justify-between mb-4">
                <h3 className="section-title">Delivery Fee Rules</h3>
                <span className="text-sm text-muted-foreground">{mockDeliveryRules.length} rules</span>
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
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
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
          <div className="rounded-lg border bg-card p-4">
            <p className="text-muted-foreground text-center py-8">
             Discounts management coming soon
           </p>
         </div>
       )}
 
       {activeTab === "custom-discounts" && (
          <div className="rounded-lg border bg-card p-4">
            <p className="text-muted-foreground text-center py-8">
             Custom discounts management coming soon
           </p>
         </div>
       )}
 
       {activeTab === "vouchers" && (
          <div className="rounded-lg border bg-card overflow-hidden">
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
                      <span className="text-primary font-medium">{voucher.remaining.toLocaleString()}</span>
                   </TableCell>
                   <TableCell>{voucher.limit.toLocaleString()}</TableCell>
                   <TableCell className="font-medium">{voucher.points.toLocaleString()}</TableCell>
                   <TableCell>{voucher.minOrder.toFixed(1)}</TableCell>
                   <TableCell>{voucher.startDate}</TableCell>
                   <TableCell>{voucher.endDate}</TableCell>
                   <TableCell className="text-right">
                     <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-grab active:cursor-grabbing transition-colors"
                      title="Drag to reorder"
                    >
                      <GripVertical className="h-4 w-4" />
                    </button>
                        <Button size="sm" variant="secondary" onClick={() => navigate(`/promotions/vouchers/${voucher.id}`)}>
                         View
                       </Button>
                       <Button size="sm" variant="outline" onClick={() => navigate(`/promotions/vouchers/${voucher.id}/edit`)}>
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
                <Input type="number" placeholder="0" />
             </div>
             <div className="space-y-2">
               <Label>Max Distance (KM)</Label>
                <Input type="number" placeholder="10" />
             </div>
           </div>
           <div className="space-y-2">
             <Label>Multiplier</Label>
              <Input type="number" step="0.1" placeholder="1.0" />
           </div>
           <div className="grid gap-4 md:grid-cols-2">
             <div className="space-y-2">
               <Label>Min Order (RM)</Label>
                <Input type="number" placeholder="0" />
             </div>
             <div className="space-y-2">
               <Label>Max Order (RM)</Label>
                <Input type="number" placeholder="100" />
             </div>
           </div>
           <div className="space-y-2">
             <Label>Discount (%)</Label>
              <Input type="number" placeholder="0" />
           </div>
         </div>
       </FormModal>
     </div>
   );
 }