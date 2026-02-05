 import { useState } from "react";
import { Plus, GripVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { FormModal } from "@/components/shared/FormModal";
 import { PageHeader } from "@/components/shared/PageHeader";
 import { TabNavigation } from "@/components/shared/TabNavigation";
import { DeliveryFeesTab } from "@/components/promotions/DeliveryFeesTab";
import { VouchersTab, Voucher } from "@/components/promotions/VouchersTab";
 
 type TabType = "delivery-fees" | "discounts" | "custom-discounts" | "vouchers";
 
/**
 * Promotions Page
 * Manages delivery fees, discounts, and vouchers
 * 
 * Components:
 * - DeliveryFeesTab: Manages delivery fee settings and rules
 * - VouchersTab: Displays vouchers with reorder capability
 * 
 * HAML Equivalent:
 * ```haml
 * .space-y-6
 *   = render "shared/page_header", title: @page_title, subtitle: "Manage delivery fees, discounts, and vouchers"
 *   = render "shared/tab_navigation", tabs: @tabs, active_tab: @active_tab
 *   
 *   - case @active_tab
 *   - when "delivery-fees"
 *     = render "promotions/delivery_fees_tab"
 *   - when "discounts"
 *     = render "promotions/discounts_placeholder"
 *   - when "custom-discounts"
 *     = render "promotions/custom_discounts_placeholder"
 *   - when "vouchers"
 *     = render "promotions/vouchers_tab", vouchers: @vouchers
 * ```
 * 
 * DaisyUI: tabs, card, modal
 */

const mockVouchers: Voucher[] = [
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
 
 export default function Promotions() {
   const [activeTab, setActiveTab] = useState<TabType>("delivery-fees");
   const [showRuleModal, setShowRuleModal] = useState(false);
   const navigate = useNavigate();
 
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
      {activeTab === "delivery-fees" && <DeliveryFeesTab />}
 
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
 
      {activeTab === "vouchers" && <VouchersTab vouchers={mockVouchers} />}
 
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