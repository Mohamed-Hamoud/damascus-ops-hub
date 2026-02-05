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