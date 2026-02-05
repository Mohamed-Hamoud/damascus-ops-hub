 interface ProductInfoCardProps {
   photo: string;
   division: string;
   category: string;
   oldPrice: number | null;
   currentPrice: number;
   titleEN: string;
   descriptionEN: string;
   descriptionMS: string;
 }
 
 export function ProductInfoCard({
   photo,
   division,
   category,
   oldPrice,
   currentPrice,
   titleEN,
   descriptionEN,
   descriptionMS,
 }: ProductInfoCardProps) {
   return (
     <div className="rounded-xl border border-border bg-card p-6">
       <div className="flex flex-col lg:flex-row gap-6">
         {/* Photo */}
         <div className="h-32 w-32 rounded-xl bg-muted flex items-center justify-center text-5xl flex-shrink-0">
           {photo}
         </div>
 
         {/* Info Grid */}
         <div className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
           <InfoField label="Division" value={division} />
           <InfoField label="Category" value={category} />
           <InfoField label="Old Price" value={oldPrice ? `RM ${oldPrice}` : "-"} />
           <InfoField label="Current Price" value={`RM ${currentPrice.toFixed(2)}`} isBold />
           <InfoField label="Title (English)" value={titleEN} />
         </div>
       </div>
 
       <div className="grid gap-4 sm:grid-cols-2 mt-6 pt-6 border-t border-border">
         <InfoField label="Description (English)" value={descriptionEN} />
         <InfoField label="Description (Malaysia)" value={descriptionMS} />
       </div>
     </div>
   );
 }
 
 function InfoField({ 
   label, 
   value, 
   isBold = false 
 }: { 
   label: string; 
   value: string; 
   isBold?: boolean;
 }) {
   return (
     <div>
       <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
         {label}
       </p>
       <p className={`text-foreground mt-1 ${isBold ? "font-bold" : "font-medium"}`}>
         {value}
       </p>
     </div>
   );
 }