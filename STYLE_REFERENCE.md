 # Damascus Dashboard Style Reference
 
 A complete reference of all design tokens, utility classes, and patterns for developers.
 
 ---
 
 ## 1. Design Tokens (CSS Variables)
 
 All tokens are in HSL format. Use with `hsl(var(--token-name))`.
 
 ### Core Colors
 
 | Token | Light Mode | Dark Mode | Usage |
 |-------|------------|-----------|-------|
 | `--background` | `220 20% 97%` | `222 47% 8%` | Page background |
 | `--foreground` | `222 47% 11%` | `210 40% 98%` | Primary text |
 | `--card` | `0 0% 100%` | `222 47% 11%` | Card backgrounds |
 | `--card-foreground` | `222 47% 11%` | `210 40% 98%` | Card text |
 | `--muted` | `220 14% 96%` | `222 30% 18%` | Muted backgrounds |
 | `--muted-foreground` | `220 9% 46%` | `215 20% 65%` | Secondary text |
 | `--border` | `220 13% 91%` | `222 30% 22%` | Border color |
 | `--input` | `220 13% 91%` | `222 30% 22%` | Input borders |
 
 ### Brand Colors
 
 | Token | Light Mode | Dark Mode | Usage |
 |-------|------------|-----------|-------|
 | `--primary` | `348 72% 38%` | `348 72% 50%` | Damascus Red |
 | `--primary-foreground` | `0 0% 100%` | `0 0% 100%` | Text on primary |
 | `--secondary` | `220 14% 96%` | `222 30% 18%` | Secondary actions |
 | `--accent` | `220 14% 96%` | `222 30% 18%` | Highlights |
 
 ### Status Colors
 
 | Token | Value | Usage |
 |-------|-------|-------|
 | `--success` | `142 71% 45%` | Completed, active, positive |
 | `--warning` | `38 92% 50%` | Pending, caution |
 | `--destructive` | `0 72% 51%` | Error, failed, danger |
 | `--info` | `217 91% 60%` | Information, processing |
 
 ### Sidebar Colors
 
 | Token | Light Mode | Dark Mode |
 |-------|------------|-----------|
 | `--sidebar-background` | `348 72% 38%` | `222 47% 11%` |
 | `--sidebar-foreground` | `0 0% 100%` | `210 40% 98%` |
 | `--sidebar-accent` | `348 72% 32%` | `222 30% 18%` |
 | `--sidebar-border` | `348 60% 45%` | `222 30% 22%` |
 | `--sidebar-muted` | `348 40% 70%` | `215 20% 65%` |
 
 ### Chart Colors
 
 | Token | Value | Color |
 |-------|-------|-------|
 | `--chart-1` | `142 71% 45%` | Green |
 | `--chart-2` | `348 72% 38%` | Damascus Red |
 | `--chart-3` | `217 91% 60%` | Blue |
 | `--chart-4` | `38 92% 50%` | Amber |
 | `--chart-5` | `270 50% 60%` | Purple |
 
 ---
 
 ## 2. Typography
 
 ### Font Family
 ```css
 font-family: "DM Sans", system-ui, sans-serif;
 ```
 
 ### Text Utilities
 
 | Class | Properties | Example |
 |-------|------------|---------|
 | `.page-title` | `text-2xl font-bold tracking-tight` | Page headings |
 | `.page-subtitle` | `text-sm text-muted-foreground mt-1` | Page descriptions |
 | `.section-title` | `text-base font-semibold` | Section headings |
 
 ---
 
 ## 3. Button Classes
 
 ### Primary Button
 ```html
 <button class="btn-primary">Save Changes</button>
 ```
 Properties: `px-3 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90`
 
 ### Secondary Button
 ```html
 <button class="btn-secondary">Cancel</button>
 ```
 Properties: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
 
 ### Outline Button
 ```html
 <button class="btn-outline">View Details</button>
 ```
 Properties: `border border-border bg-card text-foreground hover:bg-muted`
 
 ### Ghost Button
 ```html
 <button class="btn-ghost">Edit</button>
 ```
 Properties: `text-muted-foreground hover:text-foreground hover:bg-muted`
 
 ### Destructive Button
 ```html
 <button class="btn-destructive">Delete</button>
 ```
 Properties: `bg-destructive text-destructive-foreground hover:bg-destructive/90`
 
 ### Size Modifier
 ```html
 <button class="btn-primary btn-sm">Small Button</button>
 ```
 `.btn-sm` adds: `px-3 py-1.5 text-xs`
 
 ---
 
 ## 4. Badge Classes
 
 All badges include: `bg-{color}/10 text-{color} border-{color}/20`
 
 | Class | Color | Usage |
 |-------|-------|-------|
 | `.badge-success` | Green | Active, Completed, Enabled |
 | `.badge-warning` | Amber | Pending, Processing |
 | `.badge-destructive` | Red | Failed, Cancelled, Error |
 | `.badge-info` | Blue | Info, New |
 | `.badge-muted` | Gray | Draft, Inactive |
 
 ### Example
 ```html
 <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold badge-success">
   Active
 </span>
 ```
 
 ---
 
 ## 5. Card Patterns
 
 ### Basic Card
 ```html
 <div class="rounded-xl border border-border bg-card shadow-sm">
   <div class="card-header">
     <h3 class="section-title">Title</h3>
   </div>
   <div class="card-body">
     Content here
   </div>
 </div>
 ```
 
 ### Card Shadow Variants
 | Class | Shadow |
 |-------|--------|
 | `.card-shadow` | Subtle (default) |
 | `.card-shadow-md` | Medium elevation |
 
 ### Interactive Cards
 | Class | Effect |
 |-------|--------|
 | `.card-hover` | Lift on hover |
 | `.card-interactive` | Border highlight + cursor |
 
 ---
 
 ## 6. Table Patterns
 
 ### Standard Table
 ```html
 <div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
   <table class="w-full">
     <thead>
       <tr class="bg-muted/30 border-b border-border">
         <th class="table-header">Column</th>
       </tr>
     </thead>
     <tbody class="divide-y divide-border">
       <tr class="table-row-hover">
         <td class="table-cell">Value</td>
       </tr>
     </tbody>
   </table>
 </div>
 ```
 
 ### Table Classes
 | Class | Properties |
 |-------|------------|
 | `.table-header` | `px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider` |
 | `.table-cell` | `px-4 py-3 text-foreground` |
 | `.table-row-hover` | `transition-colors hover:bg-muted/30` |
 
 ---
 
 ## 7. Form Patterns
 
 ### Form Group
 ```html
 <div class="form-group">
   <label class="form-label">Email</label>
   <input type="email" class="input-base" placeholder="you@example.com">
   <p class="form-hint">We'll never share your email.</p>
 </div>
 ```
 
 ### Form Classes
 | Class | Properties |
 |-------|------------|
 | `.form-group` | `space-y-2` |
 | `.form-label` | `text-sm font-medium text-foreground` |
 | `.form-hint` | `text-xs text-muted-foreground` |
 | `.input-base` | Full input styling with focus ring |
 | `.input-focus` | Focus ring only (for custom inputs) |
 
 ---
 
 ## 8. Link Classes
 
 | Class | Style | Usage |
 |-------|-------|-------|
 | `.link-primary` | Primary color, underline on hover | Action links |
 | `.link-muted` | Muted, darkens on hover | Secondary links |
 | `.link-nav` | No underline, for navigation | Breadcrumbs, nav |
 
 ---
 
 ## 9. Layout Utilities
 
 ### Responsive Helpers
 | Class | Behavior |
 |-------|----------|
 | `.mobile-stack` | Column on mobile, row on `sm:` |
 | `.mobile-full` | Full width on mobile, auto on `sm:` |
 | `.mobile-hidden` | Hidden on mobile |
 | `.mobile-only` | Visible only on mobile |
 
 ### Touch Targets
 | Class | Min Size |
 |-------|----------|
 | `.touch-target` | 44×44px |
 | `.touch-target-sm` | 36×36px |
 
 ### Scrollbar
 | Class | Effect |
 |-------|--------|
 | `.scrollbar-thin` | Thin, styled scrollbar |
 | `.scrollbar-none` | Hidden scrollbar |
 
 ---
 
 ## 10. Icon Containers
 
 ```html
 <div class="icon-container icon-container-md bg-primary/10 text-primary">
   <svg>...</svg>
 </div>
 ```
 
 | Class | Size |
 |-------|------|
 | `.icon-container-sm` | 40×40px |
 | `.icon-container-md` | 48×48px |
 | `.icon-container-lg` | 56×56px |
 
 ---
 
 ## 11. Empty States
 
 ```html
 <div class="empty-state">
   <svg class="empty-state-icon">...</svg>
   <h3 class="empty-state-title">No orders found</h3>
   <p class="empty-state-description">Try adjusting your filters or search query.</p>
 </div>
 ```
 
 ---
 
 ## 12. Focus States
 
 All interactive elements use:
 ```css
 .focus-ring {
   focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-2 focus:ring-offset-background
 }
 ```
 
 ---
 
 ## 13. Border Radius
 
 | Token | Value |
 |-------|-------|
 | `--radius` | `0.5rem` (8px) |
 | `rounded-lg` | `var(--radius)` |
 | `rounded-md` | `calc(var(--radius) - 2px)` |
 | `rounded-sm` | `calc(var(--radius) - 4px)` |
 
 ---
 
 ## 14. Spacing Scale
 
 Standard Tailwind spacing is used throughout:
 - Cards: `p-4` or `p-5`
 - Sections: `space-y-6`
 - Grid gaps: `gap-4` or `gap-6`
 - Header gaps: `gap-3`
 
 ---
 
 ## 15. Breakpoints
 
 | Prefix | Min Width | Usage |
 |--------|-----------|-------|
 | (none) | 0px | Mobile-first base |
 | `sm:` | 640px | Small tablets |
 | `md:` | 768px | Tablets |
 | `lg:` | 1024px | Laptops |
 | `xl:` | 1280px | Desktops |
 | `2xl:` | 1400px | Large screens |
 
 ---
 
 ## Quick Copy Reference
 
 ### Page Layout
 ```html
 <div class="space-y-6">
   <div class="page-title">Page Title</div>
   <!-- Content sections -->
 </div>
 ```
 
 ### Section Card
 ```html
 <div class="rounded-xl border border-border bg-card card-shadow">
   <div class="card-header">
     <h2 class="section-title">Section</h2>
   </div>
   <div class="card-body">
     <!-- Content -->
   </div>
 </div>
 ```
 
 ### Action Bar
 ```html
 <div class="flex items-center justify-between">
   <h1 class="page-title">Title</h1>
   <button class="btn-primary">Action</button>
 </div>
 ```
 
 ---
 
 ## 16. NEW Utilities (v2)
 
 ### Card Base
 ```html
 <div class="card-base">
   <!-- Equivalent to: rounded-xl border border-border bg-card card-shadow -->
 </div>
 ```
 
 ### Table Cell Variants
 | Class | Properties |
 |-------|------------|
 | `.table-cell-right` | `px-4 py-3 text-right text-foreground` |
 | `.table-cell-center` | `px-4 py-3 text-center text-foreground` |
 
 ### Tab Navigation
 ```html
 <div class="border-b border-border">
   <div class="flex gap-6">
     <button class="tab-item">Tab 1</button>
     <button class="tab-item tab-active">Tab 2</button>
   </div>
 </div>
 ```
 
 | Class | Properties |
 |-------|------------|
 | `.tab-item` | `pb-3 text-sm font-medium border-b-2 border-transparent text-muted-foreground` |
 | `.tab-active` | `border-primary text-primary` |
 
 ### Action Button Group
 ```html
 <div class="action-group">
   <button class="btn-primary btn-sm">Edit</button>
   <button class="btn-outline btn-sm">View</button>
 </div>
 ```
 
 ### Stat Display
 ```html
 <div class="text-center">
   <p class="stat-value">42</p>
   <p class="stat-label">Total Orders</p>
 </div>
 ```
 
 | Class | Properties |
 |-------|------------|
 | `.stat-value` | `text-2xl font-bold text-foreground` |
 | `.stat-value-lg` | `text-3xl font-bold text-foreground` |
 | `.stat-label` | `text-xs text-muted-foreground` |
 
 ### Icon Button
 ```html
 <button class="icon-btn">
   <svg class="h-4 w-4">...</svg>
 </button>
 ```
 
 | Class | Size |
 |-------|------|
 | `.icon-btn` | 32×32px, hover:primary |
 | `.icon-btn-sm` | 24×24px |
 
 ### Quick Navigation Card
 ```html
 <button class="quick-nav-card">
   <div class="icon-container bg-primary/10 text-primary">
     <svg>...</svg>
   </div>
   <span class="text-xs font-medium">Label</span>
 </button>
 ```
 
 ### Data List
 ```html
 <div class="space-y-3">
   <div class="data-list-item">
     <span class="data-list-label">Label</span>
     <span class="data-list-value">Value</span>
   </div>
 </div>
 ```
 
 | Class | Properties |
 |-------|------------|
 | `.data-list-item` | `flex items-center justify-between py-2 border-b last:border-0` |
 | `.data-list-label` | `text-sm text-muted-foreground` |
 | `.data-list-value` | `text-sm font-semibold text-foreground` |
 
 ---
 
 ## 17. TypeScript Types
 
 All shared types are in `src/types/index.ts`:
 
 - **Order Types**: `Order`, `OrderItem`, `OrderStatus`
 - **Customer Types**: `Customer`
 - **Product Types**: `Product`, `ProductCategory`, `ProductDivision`, `ProductModifier`, `ProductAddOn`
 - **Promotion Types**: `Voucher`, `DeliveryRule`
 - **Support Types**: `SupportTicket`, `SupportTeam`, `SLAPolicy`, `TicketStatus`, `TicketPriority`
 - **Common Types**: `PaginationMeta`, `FilterOption`, `TableColumn`, `StatCardData`, `NavItem`, `TabItem`
 
 ### Example Usage
 ```tsx
 import type { Order, OrderStatus } from "@/types";
 
 const orders: Order[] = [...];
 const status: OrderStatus = "completed";
 ```
 
 ---
 
 ## 18. Component Reference
 
 ### Shared Components (src/components/shared/)
 
 | Component | Purpose | Key Props |
 |-----------|---------|-----------|
 | `PageHeader` | Page title + actions | `title`, `subtitle`, `backLink`, `actions` |
 | `DataTable` | Generic table | `columns`, `data`, `keyField`, `onRowClick` |
 | `TabNavigation` | Tab navigation | `tabs`, `activeTab`, `onTabChange` |
 | `TableFilters` | Search + filters | `searchValue`, `statusOptions`, `dateFrom/To` |
 | `TablePagination` | Pagination controls | `currentPage`, `totalPages`, `onPageChange` |
 | `EmptyState` | No data display | `title`, `description`, `variant` |
 | `FormModal` | Modal with form | `open`, `title`, `onSubmit` |
 | `FormField` | Form field wrapper | `label`, `error`, `required` |
 | `Breadcrumb` | Navigation breadcrumbs | `items` |
 
 ### Dashboard Components (src/components/dashboard/)
 
 | Component | Purpose |
 |-----------|---------|
 | `StatCard` | KPI card with trend |
 | `SectionCard` | Content section with header |
 | `StatusBadge` | Order/ticket status |
| `ProgressBar` | Percentage bar |

---

## 19. Complete Page Structure Reference

Each page follows a consistent structure:

### Standard Page Template
```html
<div class="space-y-6">
  <!-- 1. PageHeader -->
  <PageHeader
    title="Page Title"
    subtitle="Page description"
    actions={<Button>Action</Button>}
  />

  <!-- 2. Optional: Tab Navigation -->
  <TabNavigation tabs={tabs} activeTab={active} onTabChange={setActive} />

  <!-- 3. Optional: Filters -->
  <TableFilters ... />

  <!-- 4. Content Area -->
  <div class="rounded-xl border border-border bg-card card-shadow">
    <!-- Table, Cards, or other content -->
  </div>

  <!-- 5. Optional: Pagination -->
  <TablePagination ... />
</div>
```

---

## 20. Page Component Usage Matrix

| Page | PageHeader | TabNavigation | TableFilters | DataTable | StatCard | SectionCard | EmptyState |
|------|------------|---------------|--------------|-----------|----------|-------------|------------|
| Dashboard | ✓ | — | — | — | ✓ | ✓ | — |
| Orders | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Customers | ✓ | — | ✓ | ✓ | — | — | — |
| Products | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Promotions | ✓ | ✓ | — | ✓ | — | — | — |
| Points | ✓ | — | — | ✓ | — | — | — |
| Support | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Evaluations | ✓ | — | ✓ | ✓ | ✓ | — | ✓ |
| Feedbacks | ✓ | — | ✓ | — | — | — | ✓ |
| Settings | ✓ | ✓ | — | — | — | — | — |
| Security | ✓ | — | — | — | — | — | — |
| Reports | ✓ | — | — | — | — | — | — |
| Branches | ✓ | ✓ | — | — | — | — | — |
| Banners | ✓ | — | — | — | — | — | — |
| Analytics | ✓ | — | — | — | ✓ | ✓ | — |
| RestaurantApp | ✓ | — | — | — | — | — | — |

---

## 21. Status Badge Mapping

### Order Status
| Status | Badge Class | Color |
|--------|-------------|-------|
| `new` | `badge-info` | Blue |
| `pending` | `badge-warning` | Amber |
| `accepted` | `badge-info` | Blue |
| `delivering` | `badge-info` | Blue |
| `completed` | `badge-success` | Green |
| `cancelled` | `badge-destructive` | Red |
| `failed` | `badge-destructive` | Red |

### Ticket Status
| Status | Badge Class | Color |
|--------|-------------|-------|
| `open` | `badge-info` | Blue |
| `pending` | `badge-warning` | Amber |
| `resolved` | `badge-success` | Green |
| `closed` | `badge-muted` | Gray |

### Ticket Priority
| Priority | Badge Class | Color |
|----------|-------------|-------|
| `low` | `badge-muted` | Gray |
| `medium` | `badge-warning` | Amber |
| `high` | `badge-destructive` | Red |
| `urgent` | `badge-destructive` | Red (darker) |

### Branch Status
| Status | Badge Class | Color |
|--------|-------------|-------|
| `active` | `badge-success` | Green |
| `inactive` | `badge-muted` | Gray |

---

## 22. Form Patterns

### Standard Form Layout
```html
<form class="space-y-4">
  <div class="form-group">
    <label class="form-label">
      Field Label <span class="text-destructive">*</span>
    </label>
    <input class="input-base" type="text" />
    <p class="form-hint">Optional helper text</p>
  </div>
</form>
```

### Form Modal Pattern
```html
<FormModal
  open={open}
  onOpenChange={setOpen}
  title="Modal Title"
  description="Optional description"
  onSubmit={handleSubmit}
  submitLabel="Save"
  size="md"
>
  <!-- Form fields -->
</FormModal>
```

### Size Options
| Size | Width |
|------|-------|
| `sm` | `max-w-md` |
| `md` | `max-w-lg` |
| `lg` | `max-w-2xl` |
| `xl` | `max-w-4xl` |

---

## 23. Table Patterns

### Standard Table Structure
```html
<div class="rounded-xl border border-border bg-card card-shadow overflow-hidden">
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-muted/30 border-b border-border">
          <th class="table-header">Column</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr class="table-row-hover cursor-pointer">
          <td class="table-cell">Value</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### Table Header Classes
| Content Type | Class |
|--------------|-------|
| Left-aligned (default) | `table-header` |
| Right-aligned | `table-header text-right` |
| Center-aligned | `table-header text-center` |

### Table Cell Classes
| Content Type | Class |
|--------------|-------|
| Default | `table-cell` |
| ID/Link | `table-cell font-semibold text-primary` |
| Money | `table-cell font-bold text-primary` |
| Muted | `table-cell text-muted-foreground` |
| Right | `table-cell-right` |
| Center | `table-cell-center` |

---

## 24. Card Patterns

### Settings Card
```html
<div class="rounded-xl border border-border bg-card card-shadow">
  <div class="px-6 py-4 border-b border-border bg-muted/30">
    <h3 class="section-title">Section Title</h3>
  </div>
  <div class="p-6 space-y-6">
    <!-- Content -->
  </div>
</div>
```

### Stat Card Variants
| Variant | Border Color | Icon Background |
|---------|--------------|-----------------|
| `default` | `border-border` | `bg-primary/10 text-primary` |
| `success` | `border-success/30` | `bg-success/10 text-success` |
| `warning` | `border-warning/30` | `bg-warning/10 text-warning` |
| `destructive` | `border-destructive/30` | `bg-destructive/10 text-destructive` |

### Interactive Card
```html
<div class="card-interactive">
  <!-- Clickable card with hover effects -->
</div>
```

---

## 25. Icon Usage Guide

### Common Actions
| Action | Icon | Usage |
|--------|------|-------|
| Add | `Plus` | Primary buttons |
| Edit | `Edit` | Edit actions |
| Delete | `Trash2` | Destructive actions |
| View | `Eye` | View details |
| Back | `ArrowLeft` | Navigation |
| Close | `X` | Modal close |
| Search | `Search` | Search inputs |
| Filter | `Filter` | Filter buttons |
| Export | `Download` | Export actions |
| Refresh | `RefreshCw` | Refresh data |

### Status Icons
| Status | Icon | Color |
|--------|------|-------|
| Success | `CheckCircle` | `text-success` |
| Warning | `AlertTriangle` | `text-warning` |
| Error | `XCircle` | `text-destructive` |
| Info | `Info` | `text-info` |

### Navigation Icons
| Page | Icon |
|------|------|
| Dashboard | `LayoutDashboard` |
| Orders | `ShoppingCart` |
| Customers | `Users` |
| Products | `Package` |
| Promotions | `Tag` |
| Banners | `Image` |
| Branches | `Building` |
| Support | `HelpCircle` |
| Settings | `Settings` |
| Security | `Shield` |
| Analytics | `BarChart3` |
| Reports | `FileText` |

---

## 26. Animation Classes

### Transitions
```css
.transition-colors { transition-property: color, background-color, border-color; }
.transition-all { transition-property: all; }
.duration-200 { transition-duration: 200ms; }
```

### Hover Effects
| Class | Effect |
|-------|--------|
| `hover:bg-muted/30` | Light background on hover |
| `hover:bg-accent` | Accent background |
| `hover:text-foreground` | Darken text |
| `hover:border-primary` | Primary border |
| `card-hover` | Lift with shadow |

---

## 27. Accessibility

### Focus States
All interactive elements use the `.focus-ring` pattern:
```css
focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-2
```

### Touch Targets
| Class | Min Size |
|-------|----------|
| `.touch-target` | 44×44px |
| `.touch-target-sm` | 36×36px |

### Screen Reader
Use `sr-only` class for visually hidden but accessible text:
```html
<button>
  <Icon class="h-4 w-4" />
  <span class="sr-only">Close menu</span>
</button>
```