 import { useState } from "react";
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
 
 /**
  * DeliveryFeesTab Component
  * Manages delivery fee descriptions, basic fee, rules playground, and rules table
  * 
  * HAML Equivalent:
  * ```haml
  * .space-y-6
  *   / Delivery Fee Descriptions
  *   .rounded-lg.border.bg-card.p-4
  *     %h3.section-title.mb-4 Delivery Fee Descriptions
  *     .space-y-4
  *       .space-y-2
  *         %label.form-label Description (English)
  *         %textarea.input-base{ rows: 3, placeholder: "Delivery Fee Description EN" }
  *       .space-y-2
  *         %label.form-label Description (Malay)
  *         %textarea.input-base{ rows: 3, placeholder: "Delivery Fee Description MS" }
  *       %button.btn-primary Update Descriptions
  *   
  *   / Basic Delivery Fee
  *   .rounded-lg.border.bg-card.p-4
  *     %h3.section-title.mb-4 Basic Delivery Fee
  *     .space-y-4
  *       .space-y-2
  *         %label.form-label Basic Delivery Fee (RM)
  *         %input.input-base.w-48{ type: "number", value: @basic_fee }
  *       %button.btn-primary Update
  *   
  *   / Rules Playground
  *   .rounded-lg.border.bg-card.p-4
  *     .flex.items-center.justify-between.mb-4
  *       %h3.section-title Rules Playground
  *       %span.text-sm.font-medium.text-primary TEST YOUR RULES
  *     .space-y-4
  *       .grid.gap-4.md:grid-cols-2
  *         .space-y-2
  *           %label.form-label Distance (KM)
  *           %input.input-base{ type: "number", placeholder: "Enter distance" }
  *         .space-y-2
  *           %label.form-label Order Price (RM)
  *           %input.input-base{ type: "number", placeholder: "Enter price" }
  *       %button.btn-secondary Check
  *   
  *   / Delivery Fee Rules Table
  *   .rounded-lg.border.bg-card.p-4
  *     .flex.items-center.justify-between.mb-4
  *       %h3.section-title Delivery Fee Rules
  *       %span.text-sm.text-muted-foreground= "#{@rules.count} rules"
  *     %table.w-full
  *       / ... table content
  * ```
  * 
  * DaisyUI: card, form-control, input, textarea, btn
  */
 
 interface DeliveryRule {
   id: number;
   minDistance: number;
   maxDistance: number;
   multiplier: number;
   minOrder: number;
   maxOrder: number;
   discount: number;
 }
 
 interface DeliveryFeesTabProps {
   rules?: DeliveryRule[];
 }
 
 export function DeliveryFeesTab({ rules = [] }: DeliveryFeesTabProps) {
   const [deliveryDescEN, setDeliveryDescEN] = useState("");
   const [deliveryDescMS, setDeliveryDescMS] = useState("");
   const [basicDeliveryFee, setBasicDeliveryFee] = useState("5.0");
   const [testDistance, setTestDistance] = useState("");
   const [testOrderPrice, setTestOrderPrice] = useState("");
 
   return (
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
           <span className="text-sm text-muted-foreground">{rules.length} rules</span>
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
             {rules.length === 0 ? (
               <TableRow>
                 <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                   No delivery fee rules found
                 </TableCell>
               </TableRow>
             ) : (
               rules.map((rule) => (
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
   );
 }