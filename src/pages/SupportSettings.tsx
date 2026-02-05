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
     // Scheduled Reports
     scheduledReportsEnabled: true,
     dailyReport: true,
     dailyReportTime: "07:00",
     weeklyReport: true,
     weeklyReportDay: "Monday",
     monthlyReport: true,
     // AI Assistant Settings
     aiEnabled: true,
     autoSuggest: true,
     sentimentAnalysis: true,
     // Test Email
     testEmail: "admin@example.com",
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
 
           {/* Scheduled Reports */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Scheduled Reports</h3>
             <div className="space-y-4">
               <ToggleRow
                 label="Enable scheduled reports"
                 checked={settings.scheduledReportsEnabled}
                 onChange={(v) => setSettings({ ...settings, scheduledReportsEnabled: v })}
               />
               <div className="pl-4 space-y-4 border-l-2 border-gray-100 dark:border-gray-700 ml-2">
                 <div className="flex items-center justify-between">
                   <ToggleRow
                     label="Daily report"
                     checked={settings.dailyReport}
                     onChange={(v) => setSettings({ ...settings, dailyReport: v })}
                   />
                 </div>
                 <div className="flex items-center gap-4 ml-4">
                   <Label className="text-sm text-gray-600 dark:text-gray-400">Send at</Label>
                   <Input
                     type="time"
                     value={settings.dailyReportTime}
                     onChange={(e) => setSettings({ ...settings, dailyReportTime: e.target.value })}
                     className="w-32 bg-white dark:bg-gray-800"
                   />
                 </div>
                 <ToggleRow
                   label="Weekly report"
                   checked={settings.weeklyReport}
                   onChange={(v) => setSettings({ ...settings, weeklyReport: v })}
                 />
                 <div className="flex items-center gap-4 ml-4">
                   <Label className="text-sm text-gray-600 dark:text-gray-400">Send on</Label>
                   <select
                     value={settings.weeklyReportDay}
                     onChange={(e) => setSettings({ ...settings, weeklyReportDay: e.target.value })}
                     className="h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 text-sm"
                   >
                     <option value="Monday">Monday</option>
                     <option value="Tuesday">Tuesday</option>
                     <option value="Wednesday">Wednesday</option>
                     <option value="Thursday">Thursday</option>
                     <option value="Friday">Friday</option>
                     <option value="Saturday">Saturday</option>
                     <option value="Sunday">Sunday</option>
                   </select>
                 </div>
                 <ToggleRow
                   label="Monthly report (sent on 1st of each month)"
                   checked={settings.monthlyReport}
                   onChange={(v) => setSettings({ ...settings, monthlyReport: v })}
                 />
               </div>
             </div>
           </div>
 
           {/* AI Assistant Settings */}
           <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Assistant Settings</h3>
             <div className="space-y-1">
               <ToggleRow
                 label="Enable AI assistant features"
                 checked={settings.aiEnabled}
                 onChange={(v) => setSettings({ ...settings, aiEnabled: v })}
               />
               <div className="pl-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 ml-2">
                 <ToggleRow
                   label="Auto-suggest responses to agents"
                   checked={settings.autoSuggest}
                   onChange={(v) => setSettings({ ...settings, autoSuggest: v })}
                 />
                 <ToggleRow
                   label="Enable sentiment analysis on messages"
                   checked={settings.sentimentAnalysis}
                   onChange={(v) => setSettings({ ...settings, sentimentAnalysis: v })}
                 />
               </div>
             </div>
           </div>
         </div>
 
         {/* Save Settings Button */}
         <div className="flex justify-center">
           <button className="px-6 py-2.5 bg-[#aa1e2c] hover:bg-[#8a1824] text-white font-medium rounded-lg transition-colors">
             Save Settings
           </button>
         </div>
 
         {/* Test Email Notifications */}
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Test Email Notifications</h3>
           <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
             Send a test email to verify your notification settings are working correctly.
           </p>
           <div className="flex items-center gap-4">
             <Input
               type="email"
               value={settings.testEmail}
               onChange={(e) => setSettings({ ...settings, testEmail: e.target.value })}
               placeholder="admin@example.com"
               className="w-64 bg-white dark:bg-gray-800"
             />
             <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
               Send Test Email
             </button>
           </div>
       </div>
     </div>
   );
 }