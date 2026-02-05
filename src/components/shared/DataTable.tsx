 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 
/**
 * DataTable Component
 * Reusable table with consistent styling, empty state, and row click support.
 *
 * HAML Equivalent:
 * ```haml
 * .rounded-xl.border.border-border.bg-card.shadow-sm.overflow-hidden
 *   .overflow-x-auto
 *     %table.w-full
 *       %thead
 *         %tr.bg-muted\/30.border-b.border-border
 *           - columns.each do |col|
 *             %th.table-header{ class: col[:class] }= col[:header]
 *       %tbody.divide-y.divide-border
 *         - if data.empty?
 *           %tr
 *             %td.px-4.py-12.text-center.text-muted-foreground{ colspan: columns.size }
 *               = empty_message || "No data found"
 *         - else
 *           - data.each do |item|
 *             %tr.table-row-hover{ class: on_row_click ? 'cursor-pointer' : nil }
 *               - columns.each do |col|
 *                 %td.table-cell{ class: col[:class] }
 *                   = col[:render] ? col[:render].call(item) : item[col[:key]]
 * ```
 */

 interface Column<T> {
   key: string;
   header: string;
   className?: string;
   render?: (item: T) => ReactNode;
 }
 
 interface DataTableProps<T> {
   columns: Column<T>[];
   data: T[];
   keyField: keyof T;
   emptyMessage?: string;
   onRowClick?: (item: T) => void;
 }
 
 export function DataTable<T extends Record<string, any>>({
   columns,
   data,
   keyField,
   emptyMessage = "No data found",
   onRowClick,
 }: DataTableProps<T>) {
   return (
     <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
       <div className="overflow-x-auto">
         <table className="w-full">
           <thead>
             <tr className="bg-muted/30 border-b border-border">
               {columns.map((col) => (
                 <th
                   key={col.key}
                   className={cn(
                     "px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                     col.className
                   )}
                 >
                   {col.header}
                 </th>
               ))}
             </tr>
           </thead>
           <tbody className="divide-y divide-border">
             {data.length === 0 ? (
               <tr>
                 <td
                   colSpan={columns.length}
                   className="px-4 py-12 text-center text-muted-foreground"
                 >
                   {emptyMessage}
                 </td>
               </tr>
             ) : (
               data.map((item) => (
                 <tr
                   key={String(item[keyField])}
                   className={cn(
                     onRowClick && "cursor-pointer hover:bg-muted/30"
                   )}
                   onClick={() => onRowClick?.(item)}
                 >
                   {columns.map((col) => (
                     <td
                       key={col.key}
                       className={cn("px-4 py-3 text-foreground", col.className)}
                     >
                       {col.render
                         ? col.render(item)
                         : item[col.key] ?? "—"}
                     </td>
                   ))}
                 </tr>
               ))
             )}
           </tbody>
         </table>
       </div>
     </div>
   );
 }