 import { ReactNode } from "react";
 import { cn } from "@/lib/utils";
 
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