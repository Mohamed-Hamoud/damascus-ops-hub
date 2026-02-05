 import { useState } from "react";
 import { Search, X, Filter, Calendar } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 /**
  * TableFilters Component
 * 
 * HAML Equivalent:
 * ```haml
 * .rounded-xl.border.bg-card.p-4.mb-4.space-y-4
 *   .flex.flex-col.sm:flex-row.gap-3
 *     .relative.flex-1
 *       = lucide_icon "search", class: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
 *       %input.input-base.pl-9{ type: "text", placeholder: search_placeholder }
 *     - if status_options.present?
 *       %select.input-base.min-w-[150px]
 *         - status_options.each do |opt|
 *           %option{ value: opt[:value] }= opt[:label]
 *     - if show_date_filters
 *       %button.btn-outline.gap-2
 *         = lucide_icon "filter", class: "h-4 w-4"
 *         More Filters
 *     - if has_active_filters
 *       %button.btn-ghost.text-destructive
 *         Clear
 * ```
 * 
 * DaisyUI: input input-bordered, select select-bordered, btn btn-outline
 * CSS Utilities: .input-base, .btn-outline, .btn-ghost (index.css)
  */
 
 interface FilterOption {
   label: string;
   value: string;
 }
 
 interface TableFiltersProps {
   searchPlaceholder?: string;
   searchValue: string;
   onSearchChange: (value: string) => void;
   statusOptions?: FilterOption[];
   statusValue?: string;
   onStatusChange?: (value: string) => void;
   dateFrom?: string;
   dateTo?: string;
   onDateFromChange?: (value: string) => void;
   onDateToChange?: (value: string) => void;
   onClearFilters?: () => void;
   showDateFilters?: boolean;
 }
 
 export function TableFilters({
   searchPlaceholder = "Search...",
   searchValue,
   onSearchChange,
   statusOptions,
   statusValue,
   onStatusChange,
   dateFrom,
   dateTo,
   onDateFromChange,
   onDateToChange,
   onClearFilters,
   showDateFilters = false,
 }: TableFiltersProps) {
   const [isExpanded, setIsExpanded] = useState(false);
 
   const hasActiveFilters = searchValue || statusValue || dateFrom || dateTo;
 
   return (
     <div className="rounded-xl border bg-card p-4 mb-4 space-y-4">
       {/* Main filter row */}
       <div className="flex flex-col sm:flex-row gap-3">
         {/* DaisyUI: input input-bordered */}
         <div className="relative flex-1">
           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
           <input
             type="text"
             placeholder={searchPlaceholder}
             value={searchValue}
             onChange={(e) => onSearchChange(e.target.value)}
             className="w-full pl-9 pr-4 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
           />
           {searchValue && (
             <button
               onClick={() => onSearchChange("")}
               className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
             >
               <X className="h-4 w-4" />
             </button>
           )}
         </div>
 
         {/* DaisyUI: select select-bordered */}
         {statusOptions && onStatusChange && (
           <select
             value={statusValue}
             onChange={(e) => onStatusChange(e.target.value)}
             className="px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring min-w-[150px]"
           >
             {statusOptions.map((option) => (
               <option key={option.value} value={option.value}>
                 {option.label}
               </option>
             ))}
           </select>
         )}
 
         {showDateFilters && (
           <Button
             variant="outline"
             onClick={() => setIsExpanded(!isExpanded)}
             className="gap-2"
           >
             <Filter className="h-4 w-4" />
             More Filters
           </Button>
         )}
 
         {hasActiveFilters && onClearFilters && (
           <Button variant="ghost" onClick={onClearFilters} className="text-destructive">
             <X className="h-4 w-4 mr-1" />
             Clear
           </Button>
         )}
       </div>
 
       {/* Expanded filters */}
       {isExpanded && showDateFilters && (
         <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t">
           {/* DaisyUI: input input-bordered with type=date */}
           <div className="flex items-center gap-2 flex-1">
             <Calendar className="h-4 w-4 text-muted-foreground" />
             <span className="text-sm text-muted-foreground whitespace-nowrap">From:</span>
             <input
               type="date"
               value={dateFrom}
               onChange={(e) => onDateFromChange?.(e.target.value)}
               className="flex-1 px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
             />
           </div>
           <div className="flex items-center gap-2 flex-1">
             <span className="text-sm text-muted-foreground whitespace-nowrap">To:</span>
             <input
               type="date"
               value={dateTo}
               onChange={(e) => onDateToChange?.(e.target.value)}
               className="flex-1 px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
             />
           </div>
         </div>
       )}
     </div>
   );
 }