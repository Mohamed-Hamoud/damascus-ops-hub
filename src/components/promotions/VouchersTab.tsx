 import { useNavigate } from "react-router-dom";
 import { GripVertical } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 
 /**
  * VouchersTab Component
  * Displays vouchers table with reorder handles
  * 
  * RAILS IMPLEMENTATION NOTES:
  * The vouchers table includes drag handles (GripVertical icons) for reordering.
  * See DAISYUI_MIGRATION_GUIDE.md section "Drag-and-Drop Reordering Implementation"
  * - Use Stimulus controller with Sortable.js
  * - The .drag-handle class triggers Sortable.js handle behavior
  * - Update position via PATCH /vouchers/update_positions
  * 
  * HAML Equivalent:
  * ```haml
  * .rounded-lg.border.bg-card.overflow-hidden
  *   %table.w-full
  *     %thead
  *       %tr.bg-muted\/30.border-b
  *         %th.table-header TITLE
  *         %th.table-header CODE
  *         %th.table-header REMAINING
  *         %th.table-header LIMIT
  *         %th.table-header POINTS
  *         %th.table-header MIN ORDER
  *         %th.table-header START
  *         %th.table-header END
  *         %th.table-header.text-right ACTIONS
  *     %tbody.divide-y.divide-border{ data: { controller: "sortable", sortable_url_value: update_positions_vouchers_path } }
  *       - @vouchers.each do |voucher|
  *         %tr.table-row-hover{ data: { id: voucher.id } }
  *           %td.table-cell.font-medium= voucher.title
  *           %td.table-cell= voucher.code
  *           %td.table-cell
  *             %span.text-primary.font-medium= number_with_delimiter(voucher.remaining)
  *           %td.table-cell= number_with_delimiter(voucher.limit)
  *           %td.table-cell.font-medium= number_with_delimiter(voucher.points)
  *           %td.table-cell= voucher.min_order
  *           %td.table-cell= voucher.start_date
  *           %td.table-cell= voucher.end_date
  *           %td.table-cell.text-right
  *             .flex.items-center.justify-end.gap-2
  *               %button.drag-handle{ title: "Drag to reorder" }
  *                 = lucide_icon "grip-vertical", class: "h-4 w-4"
  *               = link_to voucher_path(voucher), class: "btn-secondary btn-sm" do
  *                 View
  *               = link_to edit_voucher_path(voucher), class: "btn-outline btn-sm" do
  *                 Edit
  *               = button_to voucher_path(voucher), method: :delete, class: "btn-destructive btn-sm" do
  *                 Delete
  * ```
  * 
  * ROUTES:
  * ```ruby
  * resources :vouchers do
  *   collection do
  *     patch :update_positions
  *   end
  * end
  * ```
  * 
  * DaisyUI: table, btn
  */
 
 export interface Voucher {
   id: number;
   title: string;
   code: string;
   remaining: number;
   limit: number;
   points: number;
   minOrder: number;
   startDate: string;
   endDate: string;
 }
 
 interface VouchersTabProps {
   vouchers: Voucher[];
 }
 
 export function VouchersTab({ vouchers }: VouchersTabProps) {
   const navigate = useNavigate();
 
   return (
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
           {vouchers.map((voucher) => (
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
   );
 }