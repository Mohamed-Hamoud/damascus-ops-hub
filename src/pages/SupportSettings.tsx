 import { useState } from "react";
 import { Switch } from "@/components/ui/switch";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/PageHeader";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 
 /**
  * Support Settings Page
  * Organized settings with consistent card heights and visual hierarchy
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
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm text-foreground leading-tight">{label}</span>
       <Switch checked={checked} onCheckedChange={onChange} />
     </div>
   );
 
  const NestedToggle = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );

  const SectionCard = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
    <div className={`rounded-xl border border-border bg-card ${className}`}>
      <div className="px-5 py-4 border-b border-border bg-muted/30">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );

   return (
     <div className="space-y-6">
       {/* Header */}
      <PageHeader
        title="Support Settings"
        subtitle="Configure notification preferences and support system settings"
         backLink="/support"
         backLabel="Support"
      />
 
      {/* Email Notifications Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Customer Email Notifications">
          <div className="space-y-1">
            <ToggleRow
              label="Enable customer email notifications"
              checked={settings.customerEmailEnabled}
              onChange={(v) => setSettings({ ...settings, customerEmailEnabled: v })}
            />
            <div className="pl-4 border-l-2 border-border ml-2 mt-2">
              <NestedToggle
                label="Ticket created confirmation"
                checked={settings.ticketCreated}
                onChange={(v) => setSettings({ ...settings, ticketCreated: v })}
              />
              <NestedToggle
                label="Agent reply notification"
                checked={settings.agentReply}
                onChange={(v) => setSettings({ ...settings, agentReply: v })}
              />
              <NestedToggle
                label="Ticket resolved notification"
                checked={settings.ticketResolved}
                onChange={(v) => setSettings({ ...settings, ticketResolved: v })}
              />
              <NestedToggle
                label="Ticket closed notification"
                checked={settings.ticketClosed}
                onChange={(v) => setSettings({ ...settings, ticketClosed: v })}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Agent Email Notifications">
          <div className="space-y-1">
            <ToggleRow
              label="Enable agent email notifications"
              checked={settings.agentEmailEnabled}
              onChange={(v) => setSettings({ ...settings, agentEmailEnabled: v })}
            />
            <div className="pl-4 border-l-2 border-border ml-2 mt-2">
              <NestedToggle
                label="New ticket notification"
                checked={settings.newTicket}
                onChange={(v) => setSettings({ ...settings, newTicket: v })}
              />
              <NestedToggle
                label="Customer reply notification"
                checked={settings.customerReply}
                onChange={(v) => setSettings({ ...settings, customerReply: v })}
              />
              <NestedToggle
                label="SLA warning notification"
                checked={settings.slaWarning}
                onChange={(v) => setSettings({ ...settings, slaWarning: v })}
              />
              <NestedToggle
                label="Escalation notification"
                checked={settings.escalation}
                onChange={(v) => setSettings({ ...settings, escalation: v })}
              />
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Surveys & Real-time Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Customer Satisfaction Surveys">
          <div className="space-y-3">
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
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Delay before sending (hours)</Label>
              <Input
                type="number"
                value={settings.delayHours}
                onChange={(e) => setSettings({ ...settings, delayHours: parseInt(e.target.value) || 0 })}
                className="w-24 h-9"
              />
            </div>
            <ToggleRow
              label="Send reminder for incomplete surveys"
              checked={settings.sendReminder}
              onChange={(v) => setSettings({ ...settings, sendReminder: v })}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Reminder after (days)</Label>
                <Input
                  type="number"
                  value={settings.reminderDays}
                  onChange={(e) => setSettings({ ...settings, reminderDays: parseInt(e.target.value) || 0 })}
                  className="h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Survey expires after (days)</Label>
                <Input
                  type="number"
                  value={settings.expiryDays}
                  onChange={(e) => setSettings({ ...settings, expiryDays: parseInt(e.target.value) || 0 })}
                  className="h-9"
                />
              </div>
            </div>
          </div>
        </SectionCard>

        <div className="space-y-6">
          <SectionCard title="Real-time Notifications">
            <div className="space-y-3">
             <ToggleRow
                label="Enable real-time notifications (WebSocket)"
                checked={settings.realtimeEnabled}
                onChange={(v) => setSettings({ ...settings, realtimeEnabled: v })}
             />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enables instant notifications for new tickets and replies without page refresh.
              </p>
           </div>
          </SectionCard>

          <SectionCard title="AI Assistant Settings">
            <div className="space-y-1">
             <ToggleRow
                label="Enable AI assistant features"
                checked={settings.aiEnabled}
                onChange={(v) => setSettings({ ...settings, aiEnabled: v })}
             />
              <div className="pl-4 border-l-2 border-border ml-2 mt-2">
                <NestedToggle
                  label="Auto-suggest responses to agents"
                  checked={settings.autoSuggest}
                  onChange={(v) => setSettings({ ...settings, autoSuggest: v })}
                />
                <NestedToggle
                  label="Enable sentiment analysis on messages"
                  checked={settings.sentimentAnalysis}
                  onChange={(v) => setSettings({ ...settings, sentimentAnalysis: v })}
                />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Scheduled Reports - Full Width */}
      <SectionCard title="Scheduled Reports">
        <div className="space-y-4">
          <ToggleRow
            label="Enable scheduled reports"
            checked={settings.scheduledReportsEnabled}
            onChange={(v) => setSettings({ ...settings, scheduledReportsEnabled: v })}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Daily Report */}
            <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-3">
              <ToggleRow
                label="Daily report"
                checked={settings.dailyReport}
                onChange={(v) => setSettings({ ...settings, dailyReport: v })}
              />
              <div className="flex items-center gap-3">
                <Label className="text-xs text-muted-foreground whitespace-nowrap">Send at</Label>
                <Input
                  type="time"
                  value={settings.dailyReportTime}
                  onChange={(e) => setSettings({ ...settings, dailyReportTime: e.target.value })}
                  className="h-9 w-28"
                />
              </div>
            </div>

            {/* Weekly Report */}
            <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-3">
              <ToggleRow
                label="Weekly report"
                checked={settings.weeklyReport}
                onChange={(v) => setSettings({ ...settings, weeklyReport: v })}
              />
              <div className="flex items-center gap-3">
                <Label className="text-xs text-muted-foreground whitespace-nowrap">Send on</Label>
                <Select
                  value={settings.weeklyReportDay}
                  onValueChange={(v) => setSettings({ ...settings, weeklyReportDay: v })}
                >
                  <SelectTrigger className="h-9 w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Thursday">Thursday</SelectItem>
                    <SelectItem value="Friday">Friday</SelectItem>
                    <SelectItem value="Saturday">Saturday</SelectItem>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Monthly Report */}
            <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-3">
              <ToggleRow
                label="Monthly report"
                checked={settings.monthlyReport}
                onChange={(v) => setSettings({ ...settings, monthlyReport: v })}
              />
              <p className="text-xs text-muted-foreground">Sent on 1st of each month</p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Actions Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Test Email */}
        <SectionCard title="Test Email Notifications">
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Send a test email to verify your notification settings are working correctly.
            </p>
            <div className="flex items-center gap-3">
              <Input
                type="email"
                value={settings.testEmail}
                onChange={(e) => setSettings({ ...settings, testEmail: e.target.value })}
                placeholder="admin@example.com"
                className="flex-1 h-9"
              />
              <button className="px-4 py-2 h-9 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 whitespace-nowrap">
                Send Test Email
              </button>
            </div>
          </div>
        </SectionCard>

        {/* Save Settings */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Save Changes</h3>
            <p className="text-xs text-muted-foreground mt-1">Click to save all your settings changes</p>
          </div>
          <button className="px-6 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Save Settings
          </button>
        </div>
      </div>
     </div>
   );
 }