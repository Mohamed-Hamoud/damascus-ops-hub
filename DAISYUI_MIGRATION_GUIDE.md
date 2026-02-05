 # DaisyUI Migration Guide for Damascus Dashboard
 
 This guide helps your Ruby on Rails team translate the React components to DaisyUI + HAML.
 
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
 
 ## Questions?
 
 This mockup was built with:
 - React + TypeScript
 - Tailwind CSS (vanilla classes, no custom CSS)
 - Lucide icons
 
 All styling uses standard Tailwind utilities that map 1:1 to DaisyUI components.