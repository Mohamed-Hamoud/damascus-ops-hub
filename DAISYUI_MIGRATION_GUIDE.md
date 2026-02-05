 # DaisyUI Migration Guide for Damascus Dashboard
 
This comprehensive guide helps your Ruby on Rails team translate React components to DaisyUI + HAML.

## Table of Contents
1. [Design Tokens (CSS Variables)](#design-tokens)
2. [Custom Utility Classes](#custom-utility-classes)
3. [Component Mappings](#component-mappings)
4. [DaisyUI Theme Configuration](#daisyui-theme-configuration)
5. [File Structure Reference](#file-structure-reference)
6. [Dark Mode](#dark-mode)

---

## Design Tokens

All colors use HSL format for easy theming. Copy these to your Rails `application.css`:

```css
:root {
  /* Core backgrounds */
  --background: 220 20% 97%;
  --foreground: 222 47% 11%;
  
  /* Cards */
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  
  /* Damascus Red - Primary Brand */
  --primary: 348 72% 38%;          /* #a8293a */
  --primary-foreground: 0 0% 100%;
  
  /* Secondary */
  --secondary: 220 14% 96%;
  --secondary-foreground: 222 47% 11%;
  
  /* Muted */
  --muted: 220 14% 96%;
  --muted-foreground: 220 9% 46%;
  
  /* Status Colors */
  --destructive: 0 72% 51%;        /* Red */
  --success: 142 71% 45%;          /* Green */
  --warning: 38 92% 50%;           /* Amber */
  --info: 217 91% 60%;             /* Blue */
  
  /* Borders */
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 348 72% 38%;
  
  /* Radius */
  --radius: 0.5rem;
  
  /* Sidebar (Damascus Red) */
  --sidebar-background: 348 72% 38%;
  --sidebar-foreground: 0 0% 100%;
  --sidebar-accent: 348 72% 32%;
  --sidebar-border: 348 60% 45%;
  --sidebar-muted: 348 40% 70%;
  
  /* Charts */
  --chart-1: 142 71% 45%;  /* Green */
  --chart-2: 348 72% 38%;  /* Damascus Red */
  --chart-3: 217 91% 60%;  /* Blue */
  --chart-4: 38 92% 50%;   /* Amber */
  --chart-5: 270 50% 60%;  /* Purple */
}

.dark {
  --background: 222 47% 8%;
  --foreground: 210 40% 98%;
  --card: 222 47% 11%;
  --primary: 348 72% 50%;
  --secondary: 222 30% 18%;
  --muted: 222 30% 18%;
  --muted-foreground: 215 20% 65%;
  --border: 222 30% 22%;
  --sidebar-background: 222 47% 11%;
}
```

---

## Custom Utility Classes

These utilities are defined in `index.css`. Use them directly in HAML:

### Button Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.btn-primary` | Primary action | `%button.btn-primary Save` |
| `.btn-secondary` | Secondary action | `%button.btn-secondary Cancel` |
| `.btn-outline` | Bordered button | `%button.btn-outline View` |
| `.btn-ghost` | Minimal button | `%button.btn-ghost Edit` |
| `.btn-destructive` | Danger action | `%button.btn-destructive Delete` |
| `.btn-sm` | Small size modifier | `%button.btn-primary.btn-sm Save` |

### Badge Classes
| Class | Status | HAML Example |
|-------|--------|--------------|
| `.badge-success` | Completed/Active | `%span.badge-success Active` |
| `.badge-warning` | Pending/Warning | `%span.badge-warning Pending` |
| `.badge-destructive` | Error/Failed | `%span.badge-destructive Failed` |
| `.badge-info` | Info/Processing | `%span.badge-info Processing` |
| `.badge-muted` | Inactive/Draft | `%span.badge-muted Draft` |

### Card Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.card-shadow` | Subtle shadow | `.card.card-shadow` |
| `.card-shadow-md` | Medium shadow | `.card.card-shadow-md` |
| `.card-header` | Card header section | `.card-header` |
| `.card-header-lg` | Larger header padding | `.card-header-lg` |
| `.card-body` | Card content section | `.card-body` |
| `.card-hover` | Hover lift effect | `.card.card-hover` |
| `.card-interactive` | Clickable card | `.card.card-interactive` |

### Table Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.table-header` | Header cell styling | `%th.table-header Column` |
| `.table-cell` | Body cell styling | `%td.table-cell Value` |
| `.table-row-hover` | Hover row highlight | `%tr.table-row-hover` |

### Form Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.input-base` | Styled input field | `%input.input-base{ type: 'text' }` |
| `.input-focus` | Focus ring only | `%input.input-focus` |
| `.form-group` | Field wrapper | `.form-group` |
| `.form-label` | Label styling | `%label.form-label Email` |
| `.form-hint` | Helper text | `%p.form-hint Optional` |

### Link Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.link-primary` | Primary colored link | `%a.link-primary{ href: '#' } View details` |
| `.link-muted` | Subtle link | `%a.link-muted{ href: '#' } See more` |
| `.link-nav` | Navigation link | `%a.link-nav{ href: '#' } Dashboard` |

### Typography Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.page-title` | Main page heading | `%h1.page-title Orders` |
| `.page-subtitle` | Page description | `%p.page-subtitle Manage orders` |
| `.section-title` | Section heading | `%h2.section-title Details` |

### Layout Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.mobile-stack` | Stack on mobile, row on desktop | `.mobile-stack` |
| `.mobile-full` | Full width on mobile | `.mobile-full` |
| `.mobile-hidden` | Hidden on mobile | `.mobile-hidden` |
| `.mobile-only` | Visible only on mobile | `.mobile-only` |
| `.touch-target` | 44px min touch area | `.touch-target` |
| `.scrollbar-thin` | Thin scrollbar styling | `.scrollbar-thin` |
| `.scrollbar-none` | Hide scrollbar | `.scrollbar-none` |

### Empty State Classes
| Class | Usage | HAML Example |
|-------|-------|--------------|
| `.empty-state` | Container | `.empty-state` |
| `.empty-state-icon` | Icon styling | `.empty-state-icon` |
| `.empty-state-title` | Title | `%h3.empty-state-title No data` |
| `.empty-state-description` | Description | `%p.empty-state-description Try again` |

---
 
 ## Brand Colors
 
 ```css
 /* Damascus Red - Primary Brand Color */
 --primary: #aa1e2c;
 --primary-hover: #8a1824;
 
 /* Status Colors (use standard Tailwind) */
 --success: green-500/600
 --warning: yellow-500/600
 --error: red-500/600
 --info: blue-500/600
 
 /* Text Colors (Tailwind gray scale) */
 --text-primary: gray-900 (light) / white (dark)
 --text-secondary: gray-500 (light) / gray-400 (dark)
 --text-muted: gray-400
 
 /* Background Colors */
 --bg-base: white (light) / gray-800 (dark)
 --bg-base-200: gray-50 (light) / gray-800/50 (dark)
 --border: gray-200 (light) / gray-700 (dark)
 ```
 
 ## Component Mappings
 
 ### Cards
 
 **React (current):**
 ```jsx
 <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
 ```
 
 **DaisyUI:**
 ```html
 <div class="card bg-base-100 shadow-sm">
   <div class="card-body">
     <!-- content -->
   </div>
 </div>
 ```
 
 **HAML:**
 ```haml
 .card.bg-base-100.shadow-sm
   .card-body
     / content
 ```
 
 ---
 
 ### Buttons
 
 **React (current):**
 ```jsx
 // Primary button
 <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824]">
 
 // Outline button
 <button className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
 
 // Ghost button
 <button className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100">
 ```
 
 **DaisyUI:**
 ```html
 <button class="btn btn-primary">Primary</button>
 <button class="btn btn-outline">Outline</button>
 <button class="btn btn-ghost btn-circle">
   <i class="icon"></i>
 </button>
 ```
 
 **HAML:**
 ```haml
 %button.btn.btn-primary Primary
 %button.btn.btn-outline Outline
 %button.btn.btn-ghost.btn-circle
   %i.icon
 ```
 
 ---
 
 ### Badges (Status)
 
 **React (current):**
 ```jsx
 // Success
 <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-700 border-green-200">
 
 // Warning
 <span className="... bg-yellow-100 text-yellow-700 border-yellow-200">
 
 // Error
 <span className="... bg-red-100 text-red-700 border-red-200">
 
 // Info
 <span className="... bg-blue-100 text-blue-700 border-blue-200">
 ```
 
 **DaisyUI:**
 ```html
 <span class="badge badge-success">Completed</span>
 <span class="badge badge-warning">Pending</span>
 <span class="badge badge-error">Cancelled</span>
 <span class="badge badge-info">Delivering</span>
 ```
 
 **HAML:**
 ```haml
 %span.badge.badge-success Completed
 %span.badge.badge-warning Pending
 %span.badge.badge-error Cancelled
 %span.badge.badge-info Delivering
 ```
 
 ---
 
 ### Tables
 
 **React (current):**
 ```jsx
 <table className="w-full">
   <thead>
     <tr className="bg-gray-50 border-b border-gray-200">
       <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
     </tr>
   </thead>
   <tbody className="divide-y divide-gray-200">
     <tr className="hover:bg-gray-50">
       <td className="px-4 py-3">
     </tr>
   </tbody>
 </table>
 ```
 
 **DaisyUI:**
 ```html
 <table class="table table-zebra">
   <thead>
     <tr>
       <th>Column</th>
     </tr>
   </thead>
   <tbody>
     <tr class="hover">
       <td>Value</td>
     </tr>
   </tbody>
 </table>
 ```
 
 **HAML:**
 ```haml
 %table.table.table-zebra
   %thead
     %tr
       %th Column
   %tbody
     %tr.hover
       %td Value
 ```
 
 ---
 
 ### Form Inputs
 
 **React (current):**
 ```jsx
 <input
   type="text"
   className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
 />
 
 <select className="w-32 bg-white border-gray-200 rounded-lg px-3 py-2 text-sm">
 ```
 
 **DaisyUI:**
 ```html
 <input type="text" class="input input-bordered w-full" placeholder="Search...">
 <select class="select select-bordered w-32">
 ```
 
 **HAML:**
 ```haml
 %input.input.input-bordered.w-full{ type: 'text', placeholder: 'Search...' }
 %select.select.select-bordered.w-32
   %option Option 1
   %option Option 2
 ```
 
 ---
 
 ### Tabs
 
 **React (current):**
 ```jsx
 <div className="flex gap-1 p-1 bg-white border rounded-lg shadow-sm">
   <button className={`px-4 py-2 text-sm font-medium rounded-md ${active ? 'bg-[#aa1e2c] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
     Tab 1
   </button>
 </div>
 ```
 
 **DaisyUI:**
 ```html
 <div class="tabs tabs-boxed">
   <a class="tab tab-active">Tab 1</a>
   <a class="tab">Tab 2</a>
 </div>
 ```
 
 **HAML:**
 ```haml
 .tabs.tabs-boxed
   %a.tab.tab-active Tab 1
   %a.tab Tab 2
 ```
 
 ---
 
 ### Progress Bar
 
 **React (current):**
 ```jsx
 <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
   <div className="h-full rounded-full bg-[#aa1e2c]" style={{ width: '75%' }} />
 </div>
 ```
 
 **DaisyUI:**
 ```html
 <progress class="progress progress-primary w-full" value="75" max="100"></progress>
 ```
 
 **HAML:**
 ```haml
 %progress.progress.progress-primary.w-full{ value: 75, max: 100 }
 ```
 
 ---
 
 ### Dropdown/Menu
 
 **React (current):**
 ```jsx
 <div className="relative">
   <button onClick={toggle}>Trigger</button>
   {isOpen && (
     <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg z-20">
       <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Item</button>
     </div>
   )}
 </div>
 ```
 
 **DaisyUI:**
 ```html
 <div class="dropdown dropdown-end">
   <label tabindex="0" class="btn">Trigger</label>
   <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
     <li><a>Item</a></li>
   </ul>
 </div>
 ```
 
 **HAML:**
 ```haml
 .dropdown.dropdown-end
   %label.btn{ tabindex: 0 } Trigger
   %ul.dropdown-content.menu.p-2.shadow.bg-base-100.rounded-box.w-52{ tabindex: 0 }
     %li
       %a Item
 ```
 
 ---
 
 ### Avatar
 
 **React (current):**
 ```jsx
 <div className="h-9 w-9 rounded-full overflow-hidden flex items-center justify-center bg-[#aa1e2c] text-white font-semibold">
   AD
 </div>
 ```
 
 **DaisyUI:**
 ```html
 <div class="avatar placeholder">
   <div class="bg-primary text-primary-content rounded-full w-9">
     <span>AD</span>
   </div>
 </div>
 ```
 
 **HAML:**
 ```haml
 .avatar.placeholder
   .bg-primary.text-primary-content.rounded-full.w-9
     %span AD
 ```
 
 ---
 
 ## DaisyUI Theme Configuration
 
 Add to your `tailwind.config.js`:
 
 ```js
 module.exports = {
   // ...
   daisyui: {
     themes: [
       {
         damascus: {
           "primary": "#aa1e2c",
           "primary-focus": "#8a1824",
           "primary-content": "#ffffff",
           "secondary": "#f3f4f6",
           "accent": "#aa1e2c",
           "neutral": "#1f2937",
           "base-100": "#ffffff",
           "base-200": "#f9fafb",
           "base-300": "#e5e7eb",
           "info": "#3b82f6",
           "success": "#22c55e",
           "warning": "#eab308",
           "error": "#ef4444",
         },
         damascusdark: {
           "primary": "#aa1e2c",
           "primary-focus": "#8a1824",
           "primary-content": "#ffffff",
           "secondary": "#374151",
           "accent": "#aa1e2c",
           "neutral": "#1f2937",
           "base-100": "#1f2937",
           "base-200": "#111827",
           "base-300": "#374151",
           "info": "#3b82f6",
           "success": "#22c55e",
           "warning": "#eab308",
           "error": "#ef4444",
         },
       },
     ],
   },
 }
 ```
 
 ---
 
 ## File Structure Reference
 
 | React Component | Purpose | DaisyUI Equivalent |
 |-----------------|---------|-------------------|
 | `StatCard.tsx` | KPI stat display | `stats` + `stat` |
 | `SectionCard.tsx` | Content section wrapper | `card` with header |
 | `StatusBadge.tsx` | Order status indicator | `badge badge-{variant}` |
 | `ProgressBar.tsx` | Progress indicator | `progress progress-{variant}` |
 | `TopHeader.tsx` | Navigation header | `navbar` + `dropdown` |
 | `AppSidebar.tsx` | Side navigation | `menu` + `menu-title` |
 
 ---
 
 ## Dark Mode
 
 In DaisyUI, dark mode is handled via themes:
 
 ```html
 <html data-theme="damascus"> <!-- Light -->
 <html data-theme="damascusdark"> <!-- Dark -->
 ```
 
 Toggle with JavaScript:
 ```js
 document.documentElement.setAttribute('data-theme', 'damascusdark');
 ```
 
 ---
 
## Shared Component Reference

### PageHeader Component
**File:** `src/components/shared/PageHeader.tsx`

**Props:**
- `title` (string) - Page title
- `subtitle` (string, optional) - Description
- `backLink` (string, optional) - URL for back navigation
- `backLabel` (string, optional) - Back button text
- `actions` (ReactNode, optional) - Action buttons
- `badge` (ReactNode, optional) - Status badge

**HAML Equivalent:**
```haml
.space-y-4
  - if back_link
    %a.link-nav{ href: back_link }
      %i.icon-arrow-left.h-4.w-4
      = back_label || "Back"
  .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
    .flex.items-center.gap-3
      %h1.page-title= title
      = badge
    .flex.flex-wrap.items-center.gap-2
      = actions
  - if subtitle
    %p.page-subtitle.-mt-2= subtitle
```

### DataTable Component
**File:** `src/components/shared/DataTable.tsx`

**HAML Equivalent:**
```haml
.rounded-xl.border.border-border.bg-card.shadow-sm.overflow-hidden
  .overflow-x-auto
    %table.w-full
      %thead
        %tr.bg-muted\/30.border-b.border-border
          - columns.each do |col|
            %th.table-header= col[:header]
      %tbody.divide-y.divide-border
        - data.each do |item|
          %tr.table-row-hover
            - columns.each do |col|
              %td.table-cell= item[col[:key]]
```

### StatCard Component
**File:** `src/components/dashboard/StatCard.tsx`

**HAML Equivalent:**
```haml
.rounded-lg.border.p-4.card-shadow{ class: variant_class }
  .flex.items-start.justify-between
    .space-y-1
      %p.text-xs.font-medium.uppercase.tracking-wider.text-muted-foreground= title
      %p.text-2xl.font-bold.tracking-tight.text-foreground= value
      - if trend
        %p.text-xs.font-semibold{ class: trend[:positive] ? 'text-success' : 'text-destructive' }
          = trend[:value]
    - if icon
      .icon-container.icon-container-sm{ class: icon_variant_class }
        = icon
```

### FormModal Component
**File:** `src/components/shared/FormModal.tsx`

Uses Radix Dialog under the hood. For Rails, use DaisyUI modal:
```haml
.modal#my-modal
  .modal-box
    %h3.font-bold.text-lg= title
    = yield
    .modal-action
      %button.btn-secondary{ onclick: "document.getElementById('my-modal').close()" } Cancel
      %button.btn-primary= submit_label
```

---

## Icon Reference

Uses Lucide icons. In Rails, use the same icon set via `lucide-rails` gem or similar:

| Icon Name | Usage |
|-----------|-------|
| `LayoutDashboard` | Dashboard |
| `BarChart3` | Analytics |
| `ShoppingCart` | Orders |
| `Users` | Customers |
| `Package` | Products |
| `Tag` | Promotions |
| `Image` | Banners |
| `Building` | Branches |
| `HelpCircle` | Support |
| `Shield` | Security |
| `Settings` | Settings |
| `Plus` | Add action |
| `Edit` | Edit action |
| `Trash2` | Delete action |
| `ArrowLeft` | Back navigation |
| `Search` | Search |
| `Filter` | Filters |
| `Download` | Export |
| `Eye` | View |
| `Check` | Success/Confirm |
| `X` | Close/Cancel |

---

## Migration Checklist

- [ ] Copy CSS variables to Rails `application.css`
- [ ] Install DaisyUI and configure theme
- [ ] Install Lucide icons gem
- [ ] Set up dark mode toggle with `data-theme`
- [ ] Convert components using this mapping guide
- [ ] Test responsive breakpoints (`sm:`, `lg:`)
- [ ] Verify form validations work
- [ ] Test all status badge variants
 
---

## Questions?

This mockup was built with:
- **React 18** + TypeScript
- **Tailwind CSS** with semantic design tokens
- **Lucide React** icons
- **shadcn/ui** components (Radix-based)

All styling uses semantic CSS variables and utility classes that map directly to DaisyUI.
 
 ---
 
 ## NEW: Additional Utilities (v2)
 
 These new utilities were added to make migration even easier:
 
 ### Card Base
 ```haml
 .card-base
   / Equivalent to: rounded-xl border border-border bg-card card-shadow
 ```
 
 ### Table Cell Variants
 ```haml
 %td.table-cell-right= price   / Right-aligned
 %td.table-cell-center= count  / Center-aligned
 ```
 
 ### Tab Navigation
 ```haml
 .border-b.border-border
   .flex.gap-6
     %button.tab-item Tab 1
     %button.tab-item.tab-active Tab 2
 ```
 
 **DaisyUI equivalent:** `tabs tabs-bordered` with `tab` and `tab-active`
 
 ### Action Button Group
 ```haml
 .action-group
   %button.btn-primary.btn-sm Edit
   %button.btn-outline.btn-sm View
   %button.btn-destructive.btn-sm Delete
 ```
 
 ### Stat Display
 ```haml
 .text-center
   %p.stat-value 42
   %p.stat-label Total Orders
 
 / Large variant
 %p.stat-value-lg 1,234
 ```
 
 ### Icon Button
 ```haml
 %button.icon-btn
   = lucide_icon "eye", class: "h-4 w-4"
 
 / Small variant
 %button.icon-btn-sm
   = lucide_icon "x", class: "h-3 w-3"
 ```
 
 ### Quick Navigation Card
 ```haml
 %button.quick-nav-card
   .h-10.w-10.rounded-lg.bg-primary\/10.flex.items-center.justify-center
     = lucide_icon "ticket", class: "h-5 w-5 text-primary"
   %span.text-xs.font-medium Tickets
 ```
 
 ### Data List
 ```haml
 .space-y-3
   .data-list-item
     %span.data-list-label Open Tickets
     %span.data-list-value 42
   .data-list-item
     %span.data-list-label Resolved Today
     %span.data-list-value 15
 ```
 
 ---
 
 ## TypeScript Types Reference
 
 All shared types are in `src/types/index.ts`. Use as reference for Rails models:
 
 | TypeScript Type | Rails Model | Key Fields |
 |-----------------|-------------|------------|
 | `Order` | `Order` | id, status, customer, branch, amount |
 | `Customer` | `Customer` | id, name, email, orders, totalSpent |
 | `Product` | `Product` | id, name, nameMs, price, category, division |
 | `Voucher` | `Voucher` | id, code, remaining, limit, points |
 | `SupportTicket` | `SupportTicket` | id, subject, status, priority, agent |
 | `Branch` | `Branch` | id, name, address, status |
 | `Banner` | `Banner` | id, title, image, position, active |
 | `Evaluation` | `Evaluation` | id, orderId, foodRating, deliveryRating |
 
 ### Status Enums
 ```ruby
 # Order status
 enum status: { new: 0, pending: 1, accepted: 2, delivering: 3, completed: 4, cancelled: 5, failed: 6 }
 
 # Ticket status
 enum status: { open: 0, pending: 1, resolved: 2, closed: 3 }
 
 # Ticket priority
 enum priority: { low: 0, medium: 1, high: 2, urgent: 3 }
 ```
 
 ---
 
 ## Component Library Reference
 
 ### Shared Components
 | Component | File | Purpose |
 |-----------|------|---------|
 | `PageHeader` | `shared/PageHeader.tsx` | Page title with actions |
 | `DataTable` | `shared/DataTable.tsx` | Generic table |
 | `TabNavigation` | `shared/TabNavigation.tsx` | Tab navigation |
 | `TableFilters` | `shared/TableFilters.tsx` | Search + filters |
 | `TablePagination` | `shared/TablePagination.tsx` | Pagination |
 | `EmptyState` | `shared/EmptyState.tsx` | No data display |
 | `FormModal` | `shared/FormModal.tsx` | Modal with form |
 | `FormField` | `shared/FormField.tsx` | Form field wrapper |
 | `Breadcrumb` | `shared/Breadcrumb.tsx` | Navigation crumbs |
 
 ### Dashboard Components
 | Component | File | Purpose |
 |-----------|------|---------|
 | `StatCard` | `dashboard/StatCard.tsx` | KPI display |
 | `SectionCard` | `dashboard/SectionCard.tsx` | Content section |
 | `StatusBadge` | `dashboard/StatusBadge.tsx` | Status indicator |
 | `ProgressBar` | `dashboard/ProgressBar.tsx` | Percentage bar |
 
 ---
 
 ## Updated Migration Checklist
 
 - [ ] Copy CSS variables to Rails `application.css`
 - [ ] Copy utility classes from `index.css` to Rails
 - [ ] Install DaisyUI and configure theme
 - [ ] Install Lucide icons gem (`lucide-rails`)
 - [ ] Set up dark mode toggle with `data-theme`
 - [ ] Create Rails partials matching shared components
 - [ ] Create model enums matching TypeScript types
 - [ ] Convert pages using this mapping guide
 - [ ] Test responsive breakpoints (`sm:`, `lg:`)
 - [ ] Verify form validations work
 - [ ] Test all status badge variants
 - [ ] Test dark mode in all pages

---

## Page-by-Page Migration Reference

This section provides exact patterns for each page in the dashboard.

---

### Dashboard (Index.tsx)

**Components Used:** `PageHeader`, `StatCard`, `SectionCard`, `StatusBadge`

**Layout Pattern:**
```haml
.space-y-6
  / Header
  .page-header
    %h1.page-title Dashboard
    %p.page-subtitle Welcome back, here's what's happening

  / Stats Grid
  .grid.gap-4.md:grid-cols-4
    - stats.each do |stat|
      = render 'shared/stat_card', stat: stat

  / Quick Actions + Recent Orders
  .grid.gap-6.lg:grid-cols-3
    .lg:col-span-2
      = render 'shared/section_card', title: 'Recent Orders', action: { label: 'View all', href: orders_path } do
        / Table content
    = render 'shared/section_card', title: 'Quick Actions' do
      / Quick action buttons
```

---

### Orders (Orders.tsx)

**Components Used:** `PageHeader`, `TabNavigation`, `TableFilters`, `DataTable`, `StatusBadge`, `TablePagination`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Orders', subtitle: 'Manage and track all customer orders', actions: order_actions

  / Tab Navigation
  = render 'shared/tab_navigation', tabs: order_tabs, active: @active_tab

  / Filters
  = render 'shared/table_filters', search_placeholder: 'Search orders...'

  / Table
  .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
    %table.w-full
      %thead
        %tr.bg-muted\/30.border-b.border-border
          %th.table-header Order ID
          %th.table-header Date
          %th.table-header Customer
          %th.table-header Amount
          %th.table-header Status
      %tbody.divide-y.divide-border
        - @orders.each do |order|
          %tr.table-row-hover.cursor-pointer{ data: { href: order_path(order) } }
            %td.table-cell.font-semibold.text-primary= order.id
            %td.table-cell= order.date
            %td.table-cell= order.customer
            %td.table-cell.font-bold= order.amount
            %td.table-cell
              = render 'shared/status_badge', status: order.status

  / Pagination
  = render 'shared/table_pagination', current: @page, total: @total_pages
```

---

### Customers (Customers.tsx)

**Components Used:** `PageHeader`, `TableFilters`, `DataTable`, `TablePagination`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Customers', subtitle: 'View and manage customer accounts'

  / Filters
  = render 'shared/table_filters', search_placeholder: 'Search customers...'

  / Table
  .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
    %table.w-full
      %thead
        %tr.bg-muted\/30.border-b.border-border
          %th.table-header Customer
          %th.table-header Phone
          %th.table-header Orders
          %th.table-header Total Spent
          %th.table-header Last Order
      %tbody.divide-y.divide-border
        - @customers.each do |customer|
          %tr.table-row-hover.cursor-pointer
            %td.table-cell
              .flex.items-center.gap-3
                .h-8.w-8.rounded-full.bg-primary.text-primary-foreground.flex.items-center.justify-center.text-xs.font-semibold
                  = customer.name[0..1].upcase
                .flex.flex-col
                  %span.font-semibold.text-foreground= customer.name
                  %span.text-xs.text-muted-foreground= customer.email
            %td.table-cell= customer.phone
            %td.table-cell.font-semibold= customer.orders_count
            %td.table-cell.font-bold.text-primary= number_to_currency(customer.total_spent)
            %td.table-cell.text-muted-foreground= time_ago_in_words(customer.last_order_at)

  / Pagination
  = render 'shared/table_pagination', current: @page, total: @total_pages
```

---

### Products (Products.tsx)

**Components Used:** `PageHeader`, `TabNavigation`, `TableFilters`, `DataTable`

**Tabs:** Products, Categories, Divisions

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Products', subtitle: 'Manage your menu items', actions: product_actions

  / Tab Navigation (Products, Categories, Divisions)
  = render 'shared/tab_navigation', tabs: product_tabs, active: @active_tab

  / Products Tab Content
  - if @active_tab == 'products'
    = render 'shared/table_filters'
    .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
      %table.w-full
        %thead
          %tr.bg-muted\/30.border-b.border-border
            %th.table-header Product
            %th.table-header Category
            %th.table-header Price
            %th.table-header Bestseller
        %tbody.divide-y.divide-border
          - @products.each do |product|
            %tr.table-row-hover
              %td.table-cell
                .flex.items-center.gap-3
                  %img.h-10.w-10.rounded-lg.object-cover{ src: product.photo }
                  %span.font-semibold= product.name
              %td.table-cell= product.category
              %td.table-cell
                - if product.old_price
                  %span.text-muted-foreground.line-through.mr-2= product.old_price
                %span.font-bold.text-primary= product.price
              %td.table-cell
                - if product.bestseller
                  %span.badge-warning Bestseller

  / Categories Tab Content
  - if @active_tab == 'categories'
    .grid.gap-4.sm:grid-cols-2.lg:grid-cols-3.xl:grid-cols-4
      - @categories.each do |category|
        = render 'products/category_card', category: category

  / Divisions Tab Content
  - if @active_tab == 'divisions'
    .grid.gap-4.sm:grid-cols-2.lg:grid-cols-4
      - @divisions.each do |division|
        = render 'products/division_card', division: division
```

---

### Promotions (Promotions.tsx)

**Components Used:** `PageHeader`, `TabNavigation`

**Tabs:** Vouchers, Delivery Rules

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Promotions', subtitle: 'Manage vouchers and delivery discounts', actions: promotion_actions

  / Tab Navigation
  = render 'shared/tab_navigation', tabs: [{ id: 'vouchers', label: 'Vouchers' }, { id: 'delivery', label: 'Delivery Rules' }], active: @active_tab

  / Vouchers Tab
  - if @active_tab == 'vouchers'
    .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
      %table.w-full
        / ... voucher table

  / Delivery Rules Tab
  - if @active_tab == 'delivery'
    .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
      %table.w-full
        / ... delivery rules table
```

---

### Points (Points.tsx)

**Components Used:** `PageHeader`, `FormModal`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Points Management', subtitle: 'Configure point conversion rates and manage customer points'

  / Point Settings Card
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title Point Settings
    .p-6
      .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
        %div
          %p.text-lg.font-medium.text-foreground
            Point Conversion Rate: 1 Point =
            %span.text-primary.font-bold= "#{@conversion_rate} RM"
          %p.text-sm.text-muted-foreground.mt-1 This rate applies to the conversion...
        .flex.items-center.gap-2
          %button.btn-secondary{ data: { modal: 'edit-rate' } }
            = lucide_icon "edit", class: "h-4 w-4"
            Edit Point Rate
          %button.btn-primary{ data: { modal: 'bulk-generate' } } Bulk Generate Points

  / Points History
  .space-y-4
    .flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between
      %h2.text-xl.font-bold.tracking-tight.text-foreground Points History
      %button.btn-primary.flex.items-center.gap-2
        = lucide_icon "plus", class: "h-4 w-4"
        Add Points

    .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
      %table.w-full
        %thead
          %tr.bg-muted\/30.border-b.border-border
            %th.table-header User ID
            %th.table-header User
            %th.table-header Points
            %th.table-header Transaction Type
            %th.table-header Rate
            %th.table-header Created
            %th.table-header Updated
        %tbody.divide-y.divide-border
          - @points_history.each do |entry|
            %tr.table-row-hover
              %td.table-cell.font-medium= entry.user_id
              %td.table-cell= entry.user_name
              %td.table-cell.font-bold.text-primary= entry.points
              %td.table-cell
                %span.inline-flex.items-center.px-2\.5.py-1.rounded.text-xs.font-semibold.bg-primary\/10.text-primary.border.border-primary\/20
                  = entry.transaction_type
              %td.table-cell.text-muted-foreground= entry.rate || "—"
              %td.table-cell.text-muted-foreground= entry.created_at
              %td.table-cell.text-muted-foreground= entry.updated_at
```

---

### Support (Support.tsx)

**Components Used:** `PageHeader`, `TabNavigation`, `SectionCard`, `StatCard`, `EmptyState`

**Tabs:** Overview, Tickets, Settings

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Support', subtitle: 'Manage tickets, teams, and support settings'

  / Tab Navigation
  = render 'shared/tab_navigation', tabs: support_tabs, active: @active_tab

  / Overview Tab
  - if @active_tab == 'overview'
    / Stats Row
    .grid.gap-4.md:grid-cols-4
      = render 'shared/stat_card', title: 'Open Tickets', value: @open_count, icon: 'ticket'
      = render 'shared/stat_card', title: 'Pending', value: @pending_count, icon: 'clock'
      = render 'shared/stat_card', title: 'Resolved Today', value: @resolved_today, icon: 'check-circle'
      = render 'shared/stat_card', title: 'Avg Response', value: @avg_response, icon: 'timer'

    / Quick Actions Grid
    .grid.gap-4.md:grid-cols-2.lg:grid-cols-4
      - quick_actions.each do |action|
        %button.quick-nav-card{ onclick: "window.location='#{action[:href]}'" }
          .h-10.w-10.rounded-lg.flex.items-center.justify-center{ class: action[:bg_class] }
            = lucide_icon action[:icon], class: "h-5 w-5 #{action[:icon_class]}"
          %span.text-xs.font-medium= action[:label]

  / Tickets Tab
  - if @active_tab == 'tickets'
    = render 'support/tickets_table'

  / Settings Tab
  - if @active_tab == 'settings'
    = render 'support/settings_panels'
```

---

### Evaluations (Evaluations.tsx)

**Components Used:** `PageHeader`, `TableFilters`, `EmptyState`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Evaluations', subtitle: 'Customer reviews and ratings'

  / Stats Cards
  .grid.gap-4.md:grid-cols-4
    = render 'shared/stat_card', title: 'Average Food Rating', value: @avg_food, variant: 'warning', icon: 'utensils'
    = render 'shared/stat_card', title: 'Average Delivery', value: @avg_delivery, variant: 'info', icon: 'truck'
    = render 'shared/stat_card', title: 'Total Reviews', value: @total_reviews, icon: 'star'
    = render 'shared/stat_card', title: '5-Star Reviews', value: @five_star_count, variant: 'success', icon: 'award'

  / Filters
  = render 'shared/table_filters', search_placeholder: 'Search evaluations...'

  / Evaluations List or Empty State
  - if @evaluations.empty?
    = render 'shared/empty_state', title: 'No evaluations yet', description: 'Evaluations will appear here...', variant: 'ratings'
  - else
    .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
      %table.w-full
        / ... table content
```

---

### Feedbacks (Feedbacks.tsx)

**Components Used:** `PageHeader`, `TableFilters`, `EmptyState`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Feedbacks', subtitle: 'Customer feedback and suggestions'

  / Filters
  = render 'shared/table_filters', search_placeholder: 'Search feedback...'

  / Feedback List or Empty State
  - if @feedbacks.empty?
    = render 'shared/empty_state', title: 'No feedback yet', description: 'Customer feedback will appear here...', variant: 'messages'
  - else
    .space-y-4
      - @feedbacks.each do |feedback|
        .rounded-xl.border.border-border.bg-card.card-shadow.p-4
          / Feedback card content
```

---

### Settings (Settings.tsx)

**Components Used:** `PageHeader`, `TabNavigation`, `Switch`

**Tabs:** General, Notifications, Integrations

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Settings', subtitle: 'Manage your account and preferences'

  / Tab Navigation
  = render 'shared/tab_navigation', tabs: settings_tabs, active: @active_tab

  / Settings Content
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title= section_title
    .p-6.space-y-6
      - settings_items.each do |item|
        .flex.items-center.justify-between.py-3.border-b.border-border.last:border-0
          %div
            %p.font-medium.text-foreground= item[:label]
            %p.text-sm.text-muted-foreground= item[:description]
          / Use Switch component from shadcn/ui -> DaisyUI toggle
          %input.toggle.toggle-primary{ type: 'checkbox', checked: item[:enabled] }
```

---

### Security (Security.tsx)

**Components Used:** `PageHeader`, `Switch`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Security', subtitle: 'Manage security settings and access controls'

  / Two-Factor Authentication
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title Two-Factor Authentication
    .p-6
      .flex.items-center.justify-between
        %div
          %p.font-medium.text-foreground Enable 2FA
          %p.text-sm.text-muted-foreground Add an extra layer of security...
        %input.toggle.toggle-primary{ type: 'checkbox' }

  / Sessions Card
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title Active Sessions
    .p-6.space-y-4
      - @sessions.each do |session|
        .flex.items-center.justify-between.py-3.border-b.border-border.last:border-0
          .flex.items-center.gap-3
            .h-10.w-10.rounded-lg.bg-muted.flex.items-center.justify-center
              = lucide_icon session[:icon], class: "h-5 w-5 text-muted-foreground"
            %div
              %p.font-medium.text-foreground= session[:device]
              %p.text-xs.text-muted-foreground= session[:location]
          - if session[:current]
            %span.badge-success Current
          - else
            %button.btn-ghost.btn-sm.text-destructive Revoke
```

---

### Reports (Reports.tsx)

**Components Used:** `PageHeader`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Reports', subtitle: 'Generate and download reports'

  / Report Types Grid
  .grid.gap-4.md:grid-cols-2.lg:grid-cols-3
    - report_types.each do |report|
      .rounded-xl.border.border-border.bg-card.card-shadow.card-hover.p-6
        .flex.items-start.gap-4
          .h-12.w-12.rounded-lg.flex.items-center.justify-center{ class: report[:bg_class] }
            = lucide_icon report[:icon], class: "h-6 w-6 #{report[:icon_class]}"
          %div
            %h3.font-semibold.text-foreground= report[:title]
            %p.text-sm.text-muted-foreground.mt-1= report[:description]
        .mt-4.flex.gap-2
          %button.btn-primary.btn-sm Generate
          %button.btn-outline.btn-sm Schedule
```

---

### Branches (Branches.tsx)

**Components Used:** `PageHeader`, `TabNavigation`

**Tabs:** All Branches, Active, Inactive

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Branches', subtitle: 'Manage restaurant locations', actions: branch_actions

  / Tab Navigation
  = render 'shared/tab_navigation', tabs: branch_tabs, active: @active_tab

  / Branches Grid
  .grid.gap-4.md:grid-cols-2.lg:grid-cols-3
    - @branches.each do |branch|
      .rounded-xl.border.border-border.bg-card.card-shadow.card-hover.p-5
        .flex.items-start.justify-between
          %div
            %h3.font-semibold.text-foreground= branch.name
            %p.text-sm.text-muted-foreground.mt-1= branch.address
          = render 'shared/status_badge', status: branch.status
        .mt-4.flex.items-center.justify-between.pt-4.border-t.border-border
          %div
            %p.text-xs.text-muted-foreground Orders Today
            %p.font-bold.text-foreground= branch.orders_today
          .action-group
            %button.btn-outline.btn-sm View
            %button.btn-ghost.btn-sm Edit
```

---

### Banners (Banners.tsx)

**Components Used:** `PageHeader`, `TableFilters`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Banners', subtitle: 'Manage promotional banners', actions: banner_actions

  / Banners Grid
  .grid.gap-4.md:grid-cols-2.lg:grid-cols-3
    - @banners.each do |banner|
      .rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden.card-hover
        .aspect-video.relative
          %img.w-full.h-full.object-cover{ src: banner.image, alt: banner.title }
          - unless banner.active
            .absolute.inset-0.bg-black\/50.flex.items-center.justify-center
              %span.badge-muted Inactive
        .p-4
          .flex.items-center.justify-between
            %h3.font-semibold.text-foreground= banner.title
            %span.text-xs.text-muted-foreground Position: #{banner.position}
          .mt-3.action-group
            %button.btn-outline.btn-sm Edit
            %button.btn-destructive.btn-sm Delete
```

---

### Analytics (Analytics.tsx)

**Components Used:** `PageHeader`, `SectionCard`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Analytics', subtitle: 'Track performance and insights'

  / KPI Cards
  .grid.gap-4.md:grid-cols-4
    = render 'shared/stat_card', title: 'Total Revenue', value: @total_revenue, trend: { value: '+12.5%', positive: true }
    = render 'shared/stat_card', title: 'Total Orders', value: @total_orders, trend: { value: '+8.2%', positive: true }
    = render 'shared/stat_card', title: 'Avg Order Value', value: @avg_order_value
    = render 'shared/stat_card', title: 'Conversion Rate', value: @conversion_rate

  / Charts Grid
  .grid.gap-6.lg:grid-cols-2
    = render 'shared/section_card', title: 'Revenue Over Time' do
      / Chart component (Recharts -> Chart.js or similar)
    = render 'shared/section_card', title: 'Orders by Category' do
      / Pie chart
```

---

### RestaurantApp (RestaurantApp.tsx)

**Components Used:** `PageHeader`, `Checkbox`

**Layout Pattern:**
```haml
.space-y-6
  = render 'shared/page_header', title: 'Restaurant App Settings', subtitle: 'Configure mobile app appearance and features'

  / App Appearance Card
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title App Appearance
    .p-6.space-y-4
      / Color picker, logo upload, etc.

  / Feature Toggles Card
  .rounded-xl.border.border-border.bg-card.card-shadow
    .px-6.py-4.border-b.border-border.bg-muted\/30
      %h3.section-title Features
    .p-6.space-y-4
      - features.each do |feature|
        .flex.items-center.gap-3
          %input.checkbox.checkbox-primary{ type: 'checkbox', checked: feature[:enabled] }
          %label.text-sm.text-foreground= feature[:label]
```

---

## Rails Helper Methods

### Badge Helper
```ruby
# app/helpers/badge_helper.rb
module BadgeHelper
  def status_badge(status)
    classes = case status.to_s
    when 'completed', 'active', 'resolved' then 'badge-success'
    when 'pending', 'processing' then 'badge-warning'
    when 'cancelled', 'failed', 'closed' then 'badge-destructive'
    when 'new', 'open', 'delivering' then 'badge-info'
    else 'badge-muted'
    end

    content_tag :span, status.to_s.titleize,
      class: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold #{classes}"
  end
end
```

### Button Helper
```ruby
# app/helpers/button_helper.rb
module ButtonHelper
  def primary_button(text, options = {})
    options[:class] = "btn-primary #{options[:class]}"
    button_tag text, options
  end

  def secondary_button(text, options = {})
    options[:class] = "btn-secondary #{options[:class]}"
    button_tag text, options
  end

  def outline_button(text, options = {})
    options[:class] = "btn-outline #{options[:class]}"
    button_tag text, options
  end

  def destructive_button(text, options = {})
    options[:class] = "btn-destructive #{options[:class]}"
    button_tag text, options
  end
end
```

### Icon Helper (using lucide-rails)
```ruby
# app/helpers/icon_helper.rb
module IconHelper
  def icon(name, options = {})
    size = options.delete(:size) || 4
    options[:class] = "h-#{size} w-#{size} #{options[:class]}"
    lucide_icon name, options
  end
end
```

---

## Rails Partials Structure

```
app/views/
├── shared/
│   ├── _page_header.html.haml
│   ├── _tab_navigation.html.haml
│   ├── _table_filters.html.haml
│   ├── _table_pagination.html.haml
│   ├── _data_table.html.haml
│   ├── _stat_card.html.haml
│   ├── _section_card.html.haml
│   ├── _status_badge.html.haml
│   ├── _empty_state.html.haml
│   ├── _form_modal.html.haml
│   └── _form_field.html.haml
├── dashboard/
│   └── _progress_bar.html.haml
├── orders/
│   ├── _order_info_card.html.haml
│   ├── _order_timeline.html.haml
│   └── _order_items.html.haml
├── products/
│   ├── _category_card.html.haml
│   └── _division_card.html.haml
└── support/
    ├── _tickets_table.html.haml
    └── _settings_panels.html.haml
```

---

## Drag-and-Drop Reordering Implementation

The React mockup includes visual drag handles (⋮⋮ icons) for items with position fields. These are **visual placeholders** - actual drag-and-drop functionality should be implemented in Rails using Stimulus + Sortable.js.

### Affected Components

| Component | File | Items to Reorder |
|-----------|------|------------------|
| Products Table | `Products.tsx` | Products by position |
| Banners Table | `Banners.tsx` | Banners by position |
| CategoryCard | `CategoryCard.tsx` | Categories |
| DivisionCard | `DivisionCard.tsx` | Divisions |
| Bestsellers List | `Products.tsx` | Bestseller products order |
| Vouchers Table | `Promotions.tsx` | Vouchers by priority |

### Rails Implementation with Stimulus + Sortable.js

#### 1. Install Sortable.js
```bash
yarn add sortablejs
```

#### 2. Create Stimulus Controller
```javascript
// app/javascript/controllers/sortable_controller.js
import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

export default class extends Controller {
  static values = {
    url: String,        // Endpoint to update position
    handle: String      // Selector for drag handle (default: ".drag-handle")
  }

  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: this.handleValue || ".drag-handle",
      animation: 150,
      ghostClass: "opacity-50",
      chosenClass: "bg-muted",
      dragClass: "shadow-lg",
      onEnd: this.onEnd.bind(this)
    })
  }

  disconnect() {
    this.sortable.destroy()
  }

  async onEnd(event) {
    const { oldIndex, newIndex, item } = event
    if (oldIndex === newIndex) return

    const id = item.dataset.id
    const token = document.querySelector('meta[name="csrf-token"]').content

    try {
      const response = await fetch(this.urlValue, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token
        },
        body: JSON.stringify({
          id: id,
          position: newIndex + 1
        })
      })

      if (!response.ok) {
        // Revert on error
        this.sortable.sort(this.sortable.toArray())
      }
    } catch (error) {
      console.error('Failed to update position:', error)
    }
  }
}
```

#### 3. HAML Template for Sortable Table
```haml
/ Products table with sortable rows
.rounded-xl.border.border-border.bg-card.card-shadow.overflow-hidden
  .overflow-x-auto
    %table.w-full
      %thead
        %tr.bg-muted\/30.border-b.border-border
          %th.table-header Photo
          %th.table-header Product
          %th.table-header Category
          %th.table-header Price
          %th.table-header Actions
      %tbody.divide-y.divide-border{ data: { controller: "sortable", sortable_url_value: update_positions_products_path } }
        - @products.each do |product|
          %tr.table-row-hover{ data: { id: product.id } }
            %td.table-cell
              = image_tag product.photo, class: "h-12 w-12 rounded-lg object-cover"
            %td.table-cell.font-semibold.text-primary= product.name
            %td.table-cell.text-muted-foreground= product.category.name
            %td.table-cell.font-bold RM #{product.price}
            %td.table-cell
              .action-group
                / Drag handle - MUST have .drag-handle class
                %button.drag-handle{ title: "Drag to reorder" }
                  = lucide_icon "grip-vertical", class: "h-4 w-4"
                = link_to edit_product_path(product), class: "btn-primary btn-sm" do
                  Edit
                = link_to product_path(product), class: "btn-outline btn-sm" do
                  View
```

#### 4. HAML Template for Sortable Cards (Categories/Divisions)
```haml
/ Categories grid with sortable cards
.grid.gap-4.sm:grid-cols-2.lg:grid-cols-3{ data: { controller: "sortable", sortable_url_value: update_positions_categories_path } }
  - @categories.each do |category|
    .rounded-xl.border.border-border.bg-card.p-5{ data: { id: category.id } }
      .flex.items-center.justify-between
        %div
          %h3.font-semibold.text-lg.text-foreground= category.name
          %p.text-sm.text-muted-foreground= "#{category.products.count} products"
        .flex.gap-1
          = link_to edit_category_path(category), class: "icon-btn" do
            = lucide_icon "edit", class: "h-4 w-4"
          = button_to category_path(category), method: :delete, class: "icon-btn hover:bg-destructive hover:text-destructive-foreground" do
            = lucide_icon "trash-2", class: "h-4 w-4"
          / Drag handle
          %button.drag-handle{ title: "Drag to reorder" }
            = lucide_icon "grip-vertical", class: "h-4 w-4"
```

#### 5. Rails Controller for Position Updates
```ruby
# app/controllers/products_controller.rb
class ProductsController < ApplicationController
  # PATCH /products/update_positions
  def update_positions
    product = Product.find(params[:id])
    new_position = params[:position].to_i

    Product.transaction do
      if new_position > product.position
        # Moving down
        Product.where("position > ? AND position <= ?", product.position, new_position)
               .update_all("position = position - 1")
      else
        # Moving up
        Product.where("position >= ? AND position < ?", new_position, product.position)
               .update_all("position = position + 1")
      end

      product.update!(position: new_position)
    end

    head :ok
  rescue => e
    render json: { error: e.message }, status: :unprocessable_entity
  end
end
```

#### 6. Routes
```ruby
# config/routes.rb
resources :products do
  collection do
    patch :update_positions
  end
end

resources :categories do
  collection do
    patch :update_positions
  end
end

resources :banners do
  collection do
    patch :update_positions
  end
end
```

#### 7. CSS for Drag States
Add to your Rails application.css:
```css
/* Drag handle styling */
.drag-handle {
  @apply h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground;
  @apply hover:bg-muted cursor-grab active:cursor-grabbing transition-colors;
}

.drag-handle-sm {
  @apply h-6 w-6 flex items-center justify-center rounded text-muted-foreground;
  @apply hover:bg-muted cursor-grab active:cursor-grabbing transition-colors;
}

/* Sortable.js states */
.sortable-ghost {
  @apply opacity-50 bg-muted;
}

.sortable-chosen {
  @apply shadow-lg ring-2 ring-primary/20;
}

.sortable-drag {
  @apply shadow-xl;
}
```

### Model Setup

Add position column to models:
```ruby
# db/migrate/xxx_add_position_to_products.rb
class AddPositionToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :position, :integer, default: 0
    add_index :products, :position
  end
end
```

Add acts_as_list gem for easier position management:
```ruby
# Gemfile
gem 'acts_as_list'

# app/models/product.rb
class Product < ApplicationRecord
  acts_as_list scope: :category
  default_scope { order(position: :asc) }
end
```

### Alternative: Turbo Stream Updates

For real-time position sync across users:
```ruby
# After position update, broadcast:
Turbo::StreamsChannel.broadcast_replace_to(
  "products",
  target: "products_list",
  partial: "products/list",
  locals: { products: Product.ordered }
)
```