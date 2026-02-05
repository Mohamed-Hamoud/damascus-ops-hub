 import { Skeleton } from "@/components/ui/skeleton";
 
 /**
  * Loading State Components
  * DaisyUI: skeleton, loading
  */
 
 export function TableSkeleton({ rows = 5, columns = 5 }: { rows?: number; columns?: number }) {
   return (
     <div className="rounded-xl border bg-card overflow-hidden">
       {/* Header skeleton */}
       <div className="border-b bg-muted/30 p-4">
         <div className="flex gap-4">
           {Array.from({ length: columns }).map((_, i) => (
             <Skeleton key={i} className="h-4 flex-1" />
           ))}
         </div>
       </div>
       {/* Rows skeleton */}
       <div className="divide-y">
         {Array.from({ length: rows }).map((_, rowIndex) => (
           <div key={rowIndex} className="p-4 flex gap-4">
             {Array.from({ length: columns }).map((_, colIndex) => (
               <Skeleton key={colIndex} className="h-4 flex-1" />
             ))}
           </div>
         ))}
       </div>
     </div>
   );
 }
 
 export function CardSkeleton() {
   return (
     <div className="rounded-xl border bg-card p-6 space-y-3">
       <Skeleton className="h-4 w-1/3" />
       <Skeleton className="h-8 w-2/3" />
       <Skeleton className="h-3 w-1/2" />
     </div>
   );
 }
 
 export function StatCardsSkeleton({ count = 4 }: { count?: number }) {
   return (
     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
       {Array.from({ length: count }).map((_, i) => (
         <CardSkeleton key={i} />
       ))}
     </div>
   );
 }
 
 export function ChartSkeleton() {
   return (
     <div className="rounded-xl border bg-card p-6">
       <Skeleton className="h-6 w-1/4 mb-6" />
       <div className="h-72 flex items-end justify-center gap-2 px-4">
         {Array.from({ length: 12 }).map((_, i) => (
           <Skeleton
             key={i}
             className="flex-1"
             style={{ height: `${Math.random() * 60 + 20}%` }}
           />
         ))}
       </div>
     </div>
   );
 }
 
 export function FormSkeleton() {
   return (
     <div className="space-y-6">
       <div className="space-y-2">
         <Skeleton className="h-4 w-24" />
         <Skeleton className="h-10 w-full" />
       </div>
       <div className="space-y-2">
         <Skeleton className="h-4 w-24" />
         <Skeleton className="h-10 w-full" />
       </div>
       <div className="space-y-2">
         <Skeleton className="h-4 w-24" />
         <Skeleton className="h-24 w-full" />
       </div>
       <div className="flex gap-3">
         <Skeleton className="h-10 w-24" />
         <Skeleton className="h-10 w-24" />
       </div>
     </div>
   );
 }