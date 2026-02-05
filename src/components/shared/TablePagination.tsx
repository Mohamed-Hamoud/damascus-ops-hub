 import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 /**
  * TablePagination Component
  * DaisyUI: join, btn, btn-sm
  */
 
 interface TablePaginationProps {
   currentPage: number;
   totalPages: number;
   totalItems: number;
   itemsPerPage: number;
   onPageChange: (page: number) => void;
 }
 
 export function TablePagination({
   currentPage,
   totalPages,
   totalItems,
   itemsPerPage,
   onPageChange,
 }: TablePaginationProps) {
   const startItem = (currentPage - 1) * itemsPerPage + 1;
   const endItem = Math.min(currentPage * itemsPerPage, totalItems);
 
   return (
     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4">
       {/* DaisyUI: text-sm */}
       <p className="text-sm text-muted-foreground">
         Showing <span className="font-medium text-foreground">{startItem}</span> to{" "}
         <span className="font-medium text-foreground">{endItem}</span> of{" "}
         <span className="font-medium text-foreground">{totalItems}</span> results
       </p>
 
       {/* DaisyUI: join */}
       <div className="flex items-center gap-1">
         <Button
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => onPageChange(1)}
           disabled={currentPage === 1}
         >
           <ChevronsLeft className="h-4 w-4" />
         </Button>
         <Button
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => onPageChange(currentPage - 1)}
           disabled={currentPage === 1}
         >
           <ChevronLeft className="h-4 w-4" />
         </Button>
 
         {/* Page numbers */}
         <div className="flex items-center gap-1 mx-2">
           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
             let page: number;
             if (totalPages <= 5) {
               page = i + 1;
             } else if (currentPage <= 3) {
               page = i + 1;
             } else if (currentPage >= totalPages - 2) {
               page = totalPages - 4 + i;
             } else {
               page = currentPage - 2 + i;
             }
 
             return (
               <Button
                 key={page}
                 variant={currentPage === page ? "default" : "outline"}
                 size="icon"
                 className="h-8 w-8"
                 onClick={() => onPageChange(page)}
               >
                 {page}
               </Button>
             );
           })}
         </div>
 
         <Button
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => onPageChange(currentPage + 1)}
           disabled={currentPage === totalPages}
         >
           <ChevronRight className="h-4 w-4" />
         </Button>
         <Button
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => onPageChange(totalPages)}
           disabled={currentPage === totalPages}
         >
           <ChevronsRight className="h-4 w-4" />
         </Button>
       </div>
     </div>
   );
 }