 import { useState } from "react";
 import { Star, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
 import { TableFilters } from "@/components/shared/TableFilters";
 import { TablePagination } from "@/components/shared/TablePagination";
 import { EmptyState } from "@/components/shared/EmptyState";
 
 /**
  * Feedbacks Page
 * Uses semantic theme tokens for consistent styling
  */
 
 const feedbacksData = [
   { id: 1, customer: "Aisyah Binti Rahman", order: "DF-268-FF3A", date: "Feb 04, 2026", rating: 5, comment: "Excellent food and fast delivery!", sentiment: "positive" },
   { id: 2, customer: "Ahmad Bin Ismail", order: "DF-481-2CF5", date: "Feb 03, 2026", rating: 4, comment: "Good food, slightly late delivery", sentiment: "positive" },
   { id: 3, customer: "Nurul Binti Aisyah", order: "DF-408-280126", date: "Jan 28, 2026", rating: 5, comment: "Love the nasi lemak! Best in KL!", sentiment: "positive" },
   { id: 4, customer: "Rashid Bin Omar", order: "DF-789-260126", date: "Jan 26, 2026", rating: 2, comment: "Order was incomplete", sentiment: "negative" },
 ];
 
 const ITEMS_PER_PAGE = 10;
 
 export default function Feedbacks() {
   const [searchQuery, setSearchQuery] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
 
   const filteredFeedbacks = feedbacksData.filter(fb =>
     fb.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
     fb.order.toLowerCase().includes(searchQuery.toLowerCase())
   );
 
   const avgRating = feedbacksData.reduce((sum, fb) => sum + fb.rating, 0) / feedbacksData.length;
 
   return (
     <div className="space-y-6">
      {/* Header */}
      <PageHeader
        title="Feedbacks"
        subtitle="Customer reviews and ratings"
      />
 
       {/* Stats */}
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 card-shadow">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Reviews</p>
          <p className="text-2xl font-bold text-foreground mt-1">{feedbacksData.length}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 card-shadow">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Average Rating</p>
           <div className="flex items-center gap-2 mt-1">
            <p className="text-2xl font-bold text-foreground">{avgRating.toFixed(1)}</p>
            <Star className="h-5 w-5 fill-warning text-warning" />
           </div>
         </div>
        <div className="rounded-xl border border-border bg-card p-4 card-shadow">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Positive</p>
          <p className="text-2xl font-bold text-success mt-1">
             {feedbacksData.filter(f => f.sentiment === "positive").length}
           </p>
         </div>
        <div className="rounded-xl border border-border bg-card p-4 card-shadow">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Negative</p>
          <p className="text-2xl font-bold text-destructive mt-1">
             {feedbacksData.filter(f => f.sentiment === "negative").length}
           </p>
         </div>
       </div>
 
       <TableFilters
         searchPlaceholder="Search by customer or order..."
         searchValue={searchQuery}
         onSearchChange={setSearchQuery}
       />
 
       {/* Feedbacks List */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="divide-y divide-border">
           {filteredFeedbacks.length === 0 ? (
             <EmptyState 
               icon={MessageCircle}
               title="No feedbacks found"
               description="Try adjusting your search criteria"
             />
           ) : (
             filteredFeedbacks.map((feedback) => (
              <div key={feedback.id} className="p-4 hover:bg-muted/30 transition-colors">
                 <div className="flex items-start justify-between gap-4">
                   <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{feedback.customer}</span>
                      <span className="text-sm text-primary font-medium">#{feedback.order}</span>
                     </div>
                     <div className="flex items-center gap-1 mb-2">
                       {[1, 2, 3, 4, 5].map((star) => (
                         <Star
                           key={star}
                          className={`h-4 w-4 ${star <= feedback.rating ? "fill-warning text-warning" : "text-muted-foreground/30"}`}
                         />
                       ))}
                     </div>
                    <p className="text-muted-foreground">{feedback.comment}</p>
                   </div>
                   <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground">{feedback.date}</span>
                     {feedback.sentiment === "positive" ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                         <ThumbsUp className="h-3 w-3" /> Positive
                       </span>
                     ) : (
                      <span className="flex items-center gap-1 text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                         <ThumbsDown className="h-3 w-3" /> Negative
                       </span>
                     )}
                   </div>
                 </div>
               </div>
             ))
           )}
         </div>
 
         {filteredFeedbacks.length > ITEMS_PER_PAGE && (
           <TablePagination
             currentPage={currentPage}
             totalPages={Math.ceil(filteredFeedbacks.length / ITEMS_PER_PAGE)}
             totalItems={filteredFeedbacks.length}
             itemsPerPage={ITEMS_PER_PAGE}
             onPageChange={setCurrentPage}
           />
         )}
       </div>
     </div>
   );
 }