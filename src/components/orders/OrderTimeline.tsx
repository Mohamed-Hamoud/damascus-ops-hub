 interface TimelineEvent {
   status: string;
   date: string;
   isActive?: boolean;
 }
 
 interface OrderTimelineProps {
   events: TimelineEvent[];
 }
 
 export function OrderTimeline({ events }: OrderTimelineProps) {
   return (
     <div className="rounded-lg border bg-card p-4 card-shadow">
       <h2 className="mb-4 section-title">History</h2>
       <div className="relative space-y-4 pl-6">
         <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-border" />
         {events.map((event, index) => (
           <div key={index} className="relative">
             <div
               className={`absolute -left-4 top-1 h-3 w-3 rounded-full ${
                 event.isActive ? "bg-info" : "bg-muted-foreground/30"
               }`}
             />
             <div>
               <p className="font-semibold text-foreground">{event.status}</p>
               <p className="text-xs text-muted-foreground">{event.date}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }