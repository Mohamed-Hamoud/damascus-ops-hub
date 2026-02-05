 import { useState } from "react";
 import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Plus, GripVertical } from "lucide-react";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 import { Checkbox } from "@/components/ui/checkbox";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { DivisionCard } from "@/components/products/DivisionCard";
 import { CategoryCard } from "@/components/products/CategoryCard";
 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip";
 import { TabNavigation } from "@/components/shared/TabNavigation";
 
 /**
  * Products Page
  * List view with tabs + Create/Edit form with multilingual support
  */
 
 const productsData = [
   { id: 1, photo: "🍵", name: "Ice Lemon Tea", description: "Refreshing iced lemon tea", division: "Bar", category: "Beverages", oldPrice: null, price: "5.00", bestseller: false },
   { id: 2, photo: "🥟", name: "Spring Rolls", description: "Crispy vegetable spring rolls", division: "Bar", category: "Appetizer", oldPrice: null, price: "7.00", bestseller: false },
   { id: 3, photo: "🥗", name: "Caesar Salad", description: "Fresh romaine with caesar dressing", division: "Bar", category: "Salad", oldPrice: "19.00", price: "10.00", bestseller: false },
   { id: 4, photo: "🍰", name: "Chocolate Cake", description: "Rich chocolate layer cake", division: "Bar", category: "Desserts", oldPrice: null, price: "9.00", bestseller: false },
   { id: 5, photo: "🍗", name: "Chicken Rice", description: "Hainanese style chicken rice with soup", division: "Bar", category: "Main Course", oldPrice: null, price: "12.00", bestseller: false },
   { id: 6, photo: "🍛", name: "Nasi Lemak", description: "Coconut rice with sambal, anchovies, peanuts an...", division: "Bar", category: "Main Course", oldPrice: "16.00", price: "15.00", bestseller: true },
   { id: 7, photo: "🍜", name: "Tom Yum Soup", description: "Spicy Thai soup with shrimp", division: "Bar", category: "Soups", oldPrice: null, price: "8.00", bestseller: false },
 ];
 
 const categoriesData = [
   { id: 1, name: "Beverages", productCount: 12 },
   { id: 2, name: "Appetizer", productCount: 8 },
   { id: 3, name: "Main Course", productCount: 24 },
   { id: 4, name: "Desserts", productCount: 6 },
   { id: 5, name: "Salad", productCount: 4 },
   { id: 6, name: "Soups", productCount: 5 },
 ];
 
 const divisionsData = [
   { id: 1, name: "Bar", productCount: 45 },
   { id: 2, name: "Kitchen", productCount: 32 },
 ];
 
 export default function Products() {
   const navigate = useNavigate();
   const { id } = useParams();
   const location = useLocation();
 
   const isNewView = location.pathname.includes("new");
   const isEditView = id && !location.pathname.includes("new");
   const isFormView = isNewView || isEditView;
 
   const [categoryFilter, setCategoryFilter] = useState("all");
     const [activeTab, setActiveTab] = useState<string>("products");
   
     const productTabs = [
       { id: "products", label: "Products" },
       { id: "divisions", label: "Divisions" },
       { id: "categories", label: "Categories" },
       { id: "bestsellers", label: "Bestsellers" },
     ];
 
   const product = id ? productsData.find((p) => p.id === parseInt(id)) : null;
 
   // Form View (Create/Edit)
   if (isFormView) {
     return (
       <div className="space-y-6">
         <button
           onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
         >
           <ArrowLeft className="h-4 w-4" />
           Products
         </button>
 
          <h1 className="page-title">
           {isNewView ? "New Product" : "Edit Product"}
         </h1>
 
          <div className="rounded-xl border border-border bg-card">
            <div className="p-4 border-b border-border bg-muted/30">
              <h2 className="section-title">
               {isNewView ? "New Product" : "Edit Product"}
             </h2>
           </div>
 
            <div className="p-4 space-y-6">
             {/* Basic Information */}
             <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Basic Information</h3>
               
               <div className="flex gap-6">
                 <div className="space-y-2">
                    <Label>Photo</Label>
                    <div className="h-24 w-24 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-3xl bg-muted/50">
                      {product?.photo || <Plus className="h-6 w-6 text-muted-foreground" />}
                   </div>
                 </div>
                 <div className="space-y-2">
                    <Label>Display Option</Label>
                   <div className="flex items-center gap-2 mt-2">
                     <Checkbox id="bestseller" defaultChecked={product?.bestseller} />
                      <Label htmlFor="bestseller" className="text-sm">Show as Bestseller</Label>
                   </div>
                 </div>
               </div>
 
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                    <Label>Title (English) <span className="text-destructive">*</span></Label>
                   <Input
                     placeholder="Enter product name in English"
                     defaultValue={product?.name || ""}
                      className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                    <Label>Title (Malaysia) <span className="text-destructive">*</span></Label>
                   <Input
                     placeholder="Enter product name in Malay"
                      className="bg-background"
                   />
                 </div>
               </div>
 
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                    <Label>Description (English) <span className="text-destructive">*</span></Label>
                   <Textarea
                     placeholder="Enter product description in English"
                     defaultValue={product?.description || ""}
                      className="bg-background min-h-[100px]"
                   />
                 </div>
                 <div className="space-y-2">
                    <Label>Description (Malaysia) <span className="text-destructive">*</span></Label>
                   <Textarea
                     placeholder="Enter product description in Malay"
                      className="bg-background min-h-[100px]"
                   />
                 </div>
               </div>
             </div>
 
             {/* Category & Pricing */}
             <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Category & Pricing</h3>
               
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                    <Label>Division <span className="text-destructive">*</span></Label>
                   <Select defaultValue={product?.division?.toLowerCase() || ""}>
                      <SelectTrigger className="bg-background">
                       <SelectValue placeholder="Select Division" />
                     </SelectTrigger>
                     <SelectContent>
                       {divisionsData.map((div) => (
                         <SelectItem key={div.id} value={div.name.toLowerCase()}>
                           {div.name}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2">
                    <Label>Category <span className="text-destructive">*</span></Label>
                   <Select defaultValue={product?.category?.toLowerCase() || ""}>
                      <SelectTrigger className="bg-background">
                       <SelectValue placeholder="Select Category" />
                     </SelectTrigger>
                     <SelectContent>
                       {categoriesData.map((cat) => (
                         <SelectItem key={cat.id} value={cat.name.toLowerCase()}>
                           {cat.name}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
               </div>
 
               <div className="grid gap-4 sm:grid-cols-3">
                 <div className="space-y-2">
                    <Label>Current Price (RM) <span className="text-destructive">*</span></Label>
                   <Input
                     type="number"
                     step="0.01"
                     defaultValue={product?.price || "0.0"}
                      className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                    <Label>Old Price (RM)</Label>
                   <Input
                     type="number"
                     step="0.01"
                     placeholder="0.00 (optional)"
                     defaultValue={product?.oldPrice || ""}
                      className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                    <Label>Position</Label>
                   <Input
                     placeholder="Auto"
                      className="bg-background"
                   />
                 </div>
               </div>
             </div>
           </div>
 
            <div className="flex items-center justify-end gap-3 p-4 border-t border-border bg-muted/30">
             <button
               onClick={() => navigate("/products")}
                className="btn-outline"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/products")}
                className="btn-primary"
             >
               {isNewView ? "Create Product" : "Update Product"}
             </button>
           </div>
         </div>
       </div>
     );
   }
 
   // List View
   return (
     <div className="space-y-6">
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
            <h1 className="page-title">Products</h1>
            <p className="page-subtitle">Manage your food menu and inventory</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
           <select
             value={categoryFilter}
             onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm"
           >
             <option value="all">All</option>
             {categoriesData.map((cat) => (
               <option key={cat.id} value={cat.name.toLowerCase()}>
                 {cat.name}
               </option>
             ))}
           </select>
            <button className="btn-outline">
             + Division
           </button>
            <button className="btn-outline">
             + Category
           </button>
           <button
             onClick={() => navigate("/products/new")}
              className="btn-primary flex items-center gap-2"
           >
             <Plus className="h-4 w-4" />
             Product
           </button>
         </div>
       </div>
 
       {/* Tabs */}
         <TabNavigation
           tabs={productTabs}
           activeTab={activeTab}
           onTabChange={setActiveTab}
         />
 
       {activeTab === "products" && (
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                  <tr className="bg-muted/30 border-b border-border">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-16">Photo</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Division</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Old Price</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">Bestseller</th>
                   <th className="px-4 py-3"></th>
                 </tr>
               </thead>
                <tbody className="divide-y divide-border">
                 {productsData.map((product) => (
                   <tr key={product.id}>
                     <td className="px-4 py-3">
                        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-xl">
                         {product.photo}
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <div>
                          <span className="font-medium text-primary">{product.name}</span>
                          <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
                       </div>
                     </td>
                      <td className="px-4 py-3 text-muted-foreground">{product.division}</td>
                      <td className="px-4 py-3 text-muted-foreground">{product.category}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground line-through">
                       {product.oldPrice ? `RM ${product.oldPrice}` : "—"}
                     </td>
                      <td className="px-4 py-3 text-right font-semibold text-foreground">
                       RM {product.price}
                     </td>
                     <td className="px-4 py-3 text-center">
                         <span className={`text-xs font-semibold ${product.bestseller ? "text-success" : "text-muted-foreground"}`}>
                         {product.bestseller ? "YES" : "NO"}
                       </span>
                     </td>
                     <td className="px-4 py-3">
                         <div className="action-group">
                        <button
                          className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-grab active:cursor-grabbing transition-colors"
                          title="Drag to reorder"
                        >
                          <GripVertical className="h-4 w-4" />
                        </button>
                         <button
                           onClick={() => navigate(`/products/${product.id}`)}
                            className="btn-primary btn-sm"
                         >
                           Edit
                         </button>
                         <button
                           onClick={() => navigate(`/products/${product.id}`)}
                            className="btn-outline btn-sm"
                         >
                           View
                         </button>
                          <button className="btn-outline btn-sm hover:bg-destructive hover:text-destructive-foreground hover:border-destructive">
                           Delete
                         </button>
                       </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       )}
 
       {activeTab === "divisions" && (
         <div className="rounded-xl border border-border bg-card shadow-sm p-6">
           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             {divisionsData.map((division) => (
               <DivisionCard
                 key={division.id}
                 name={division.name}
                 productCount={division.productCount}
               />
             ))}
           </div>
         </div>
       )}
 
       {activeTab === "categories" && (
         <div className="rounded-xl border border-border bg-card shadow-sm p-6">
           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             {categoriesData.map((category) => (
               <CategoryCard
                 key={category.id}
                 name={category.name}
                 productCount={category.productCount}
               />
             ))}
           </div>
         </div>
       )}
 
       {activeTab === "bestsellers" && (
         <div className="rounded-xl border border-border bg-card shadow-sm p-6">
           <div className="space-y-4">
             {productsData.filter((p) => p.bestseller).map((product, index) => (
               <div key={product.id} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                   {index + 1}
                 </div>
                 <div className="h-14 w-14 rounded-xl bg-muted flex items-center justify-center text-2xl">
                   {product.photo}
                 </div>
                 <div className="flex-1">
                   <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                   <p className="text-sm text-muted-foreground">{product.category}</p>
                 </div>
                 <span className="text-lg font-semibold text-foreground">RM {product.price}</span>
                <button
                  className="p-2 rounded-lg text-muted-foreground hover:bg-muted cursor-grab active:cursor-grabbing transition-colors"
                  title="Drag to reorder"
                >
                  <GripVertical className="h-5 w-5" />
                </button>
               </div>
             ))}
             {productsData.filter((p) => p.bestseller).length === 0 && (
               <p className="text-center text-muted-foreground py-8">No bestsellers marked yet.</p>
             )}
           </div>
         </div>
       )}
     </div>
   );
 }