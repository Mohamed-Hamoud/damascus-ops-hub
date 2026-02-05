 import { useState } from "react";
 import { Switch } from "@/components/ui/switch";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
 /**
  * Support Settings Page
  * DaisyUI: toggle, card, input
  */
 
 export default function SupportSettings() {
   const [settings, setSettings] = useState({
     // Customer Email Notifications
     customerEmailEnabled: true,
     ticketCreated: true,
     agentReply: true,
     ticketResolved: true,
     ticketClosed: true,
     // Agent Email Notifications
     agentEmailEnabled: true,
     newTicket: true,
     customerReply: true,
     slaWarning: true,
     escalation: true,
     // Customer Satisfaction Surveys
     surveysEnabled: true,
     autoSendSurveys: true,
     delayHours: 24,
     sendReminder: true,
     reminderDays: 3,
     expiryDays: 7,
     // Real-time Notifications
     realtimeEnabled: true,
   });
 
   const ToggleRow = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) => (
     <div className="flex items-center justify-between py-3">
       <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
       <Switch checked={checked} onCheckedChange={onChange} />
     </div>
   );
 
   return (
     <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Support Settings</h1>
         <p className="text-sm text-gray-500 dark:text-gray-400">Configure notification preferences and support system settings</p>
       </div>
 
       <div className="grid gap-6 lg:grid-cols-2">
         {/* Customer Email Notifications */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Email Notifications</h3>
           <div className="space-y-1">
             <ToggleRow
               label="Enable customer email notifications"
               checked={settings.customerEmailEnabled}
               onChange={(v) => setSettings({ ...settings, customerEmailEnabled: v })}
             />
             <div className="pl-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 ml-2">
               <ToggleRow
                 label="Ticket created confirmation"
                 checked={settings.ticketCreated}
                 onChange={(v) => setSettings({ ...settings, ticketCreated: v })}
               />
               <ToggleRow
                 label="Agent reply notification"
                 checked={settings.agentReply}
                 onChange={(v) => setSettings({ ...settings, agentReply: v })}
               />
               <ToggleRow
                 label="Ticket resolved notification"
                 checked={settings.ticketResolved}
                 onChange={(v) => setSettings({ ...settings, ticketResolved: v })}
               />
               <ToggleRow
                 label="Ticket closed notification"
                 checked={settings.ticketClosed}
                 onChange={(v) => setSettings({ ...settings, ticketClosed: v })}
               />
             </div>
           </div>
         </div>
 
         {/* Agent Email Notifications */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Agent Email Notifications</h3>
           <div className="space-y-1">
             <ToggleRow
               label="Enable agent email notifications"
               checked={settings.agentEmailEnabled}
               onChange={(v) => setSettings({ ...settings, agentEmailEnabled: v })}
             />
             <div className="pl-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 ml-2">
               <ToggleRow
                 label="New ticket notification"
                 checked={settings.newTicket}
                 onChange={(v) => setSettings({ ...settings, newTicket: v })}
               />
               <ToggleRow
                 label="Customer reply notification"
                 checked={settings.customerReply}
                 onChange={(v) => setSettings({ ...settings, customerReply: v })}
               />
               <ToggleRow
                 label="SLA warning notification"
                 checked={settings.slaWarning}
                 onChange={(v) => setSettings({ ...settings, slaWarning: v })}
               />
               <ToggleRow
                 label="Escalation notification"
                 checked={settings.escalation}
                 onChange={(v) => setSettings({ ...settings, escalation: v })}
               />
             </div>
           </div>
         </div>
 
         {/* Customer Satisfaction Surveys */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Satisfaction Surveys</h3>
           <div className="space-y-4">
             <ToggleRow
               label="Enable satisfaction surveys"
               checked={settings.surveysEnabled}
               onChange={(v) => setSettings({ ...settings, surveysEnabled: v })}
             />
             <ToggleRow
               label="Auto-send surveys after ticket resolution"
               checked={settings.autoSendSurveys}
               onChange={(v) => setSettings({ ...settings, autoSendSurveys: v })}
             />
             <div className="space-y-2">
               <Label>Delay before sending (hours)</Label>
               <Input
                 type="number"
                 value={settings.delayHours}
                 onChange={(e) => setSettings({ ...settings, delayHours: parseInt(e.target.value) || 0 })}
                 className="w-32 bg-white dark:bg-gray-800"
               />
             </div>
             <ToggleRow
               label="Send reminder for incomplete surveys"
               checked={settings.sendReminder}
               onChange={(v) => setSettings({ ...settings, sendReminder: v })}
             />
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label>Reminder after (days)</Label>
                 <Input
                   type="number"
                   value={settings.reminderDays}
                   onChange={(e) => setSettings({ ...settings, reminderDays: parseInt(e.target.value) || 0 })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
               <div className="space-y-2">
                 <Label>Survey expires after (days)</Label>
                 <Input
                   type="number"
                   value={settings.expiryDays}
                   onChange={(e) => setSettings({ ...settings, expiryDays: parseInt(e.target.value) || 0 })}
                   className="bg-white dark:bg-gray-800"
                 />
               </div>
             </div>
           </div>
         </div>
 
         {/* Real-time Notifications */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Real-time Notifications</h3>
           <div className="space-y-4">
             <ToggleRow
               label="Enable real-time notifications (WebSocket)"
               checked={settings.realtimeEnabled}
               onChange={(v) => setSettings({ ...settings, realtimeEnabled: v })}
             />
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Enables instant notifications for new tickets and replies without page refresh.
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 }