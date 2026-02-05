 import { cn } from "@/lib/utils";
 
 /**
  * TabNavigation Component
  * Reusable tab navigation with consistent styling.
  *
  * HAML Equivalent:
  * ```haml
  * .border-b.border-border
  *   .flex.gap-6
  *     - tabs.each do |tab|
  *       %button.tab-item{ class: active_tab == tab[:id] ? 'tab-active' : nil, data: { tab: tab[:id] } }
  *         = tab[:label]
  * ```
  *
  * DaisyUI Mapping:
  * - Container: tabs tabs-bordered
  * - Tab item: tab
  * - Active tab: tab-active
  *
  * CSS Utilities (from index.css):
  * - .tab-item: pb-3 text-sm font-medium capitalize border-b-2 border-transparent text-muted-foreground
  * - .tab-active: border-primary text-primary
  */
 
 export interface Tab {
   id: string;
   label: string;
 }
 
 interface TabNavigationProps {
   tabs: Tab[];
   activeTab: string;
   onTabChange: (tabId: string) => void;
   className?: string;
 }
 
 export function TabNavigation({
   tabs,
   activeTab,
   onTabChange,
   className,
 }: TabNavigationProps) {
   return (
     <div className={cn("border-b border-border", className)}>
       <div className="flex gap-6">
         {tabs.map((tab) => (
           <button
             key={tab.id}
             onClick={() => onTabChange(tab.id)}
             className={cn(
               "tab-item",
               activeTab === tab.id && "tab-active"
             )}
           >
             {tab.label}
           </button>
         ))}
       </div>
     </div>
   );
 }