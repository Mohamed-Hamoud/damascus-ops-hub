 import { useState } from "react";
 import { useNavigate, useParams, useLocation } from "react-router-dom";
 import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
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
   const [activeTab, setActiveTab] = useState("products");
 
   const product = id ? productsData.find((p) => p.id === parseInt(id)) : null;
 
   // Form View (Create/Edit)
   if (isFormView) {
     return (
       <div className="space-y-6">
         <button
           onClick={() => navigate("/products")}
           className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
         >
           <ArrowLeft className="h-4 w-4" />
           Products
         </button>
 
         <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {isNewView ? "New Product" : "Edit Product"}
         </h1>
 
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
           <div className="p-6 border-b border-gray-200 dark:border-gray-700">
             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
               {isNewView ? "New Product" : "Edit Product"}
             </h2>
           </div>
 
           <div className="p-6 space-y-8">
             {/* Basic Information */}
             <div className="space-y-4">
               <h3 className="text-base font-semibold text-gray-900 dark:text-white">Basic Information</h3>
               
               <div className="flex gap-6">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Photo</Label>
                   <div className="h-24 w-24 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center text-3xl bg-gray-50 dark:bg-gray-800">
                     {product?.photo || <Plus className="h-6 w-6 text-gray-400" />}
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Display Option</Label>
                   <div className="flex items-center gap-2 mt-2">
                     <Checkbox id="bestseller" defaultChecked={product?.bestseller} />
                     <Label htmlFor="bestseller" className="text-sm text-gray-700 dark:text-gray-300">Show as Bestseller</Label>
                   </div>
                 </div>
               </div>
 
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Title (English) <span className="text-red-500">*</span></Label>
                   <Input
                     placeholder="Enter product name in English"
                     defaultValue={product?.name || ""}
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Title (Malaysia) <span className="text-red-500">*</span></Label>
                   <Input
                     placeholder="Enter product name in Malay"
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
               </div>
 
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Description (English) <span className="text-red-500">*</span></Label>
                   <Textarea
                     placeholder="Enter product description in English"
                     defaultValue={product?.description || ""}
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 min-h-[100px]"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Description (Malaysia) <span className="text-red-500">*</span></Label>
                   <Textarea
                     placeholder="Enter product description in Malay"
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 min-h-[100px]"
                   />
                 </div>
               </div>
             </div>
 
             {/* Category & Pricing */}
             <div className="space-y-4">
               <h3 className="text-base font-semibold text-gray-900 dark:text-white">Category & Pricing</h3>
               
               <div className="grid gap-4 sm:grid-cols-2">
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Division <span className="text-red-500">*</span></Label>
                   <Select defaultValue={product?.division?.toLowerCase() || ""}>
                     <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
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
                   <Label className="text-gray-700 dark:text-gray-300">Category <span className="text-red-500">*</span></Label>
                   <Select defaultValue={product?.category?.toLowerCase() || ""}>
                     <SelectTrigger className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
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
                   <Label className="text-gray-700 dark:text-gray-300">Current Price (RM) <span className="text-red-500">*</span></Label>
                   <Input
                     type="number"
                     step="0.01"
                     defaultValue={product?.price || "0.0"}
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Old Price (RM)</Label>
                   <Input
                     type="number"
                     step="0.01"
                     placeholder="0.00 (optional)"
                     defaultValue={product?.oldPrice || ""}
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-gray-700 dark:text-gray-300">Position</Label>
                   <Input
                     placeholder="Auto"
                     className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                   />
                 </div>
               </div>
             </div>
           </div>
 
           <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
             <button
               onClick={() => navigate("/products")}
               className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
             >
               Cancel
             </button>
             <button
               onClick={() => navigate("/products")}
               className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
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
           <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h1>
           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your food menu and inventory</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
           <select
             value={categoryFilter}
             onChange={(e) => setCategoryFilter(e.target.value)}
             className="h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
           >
             <option value="all">All</option>
             {categoriesData.map((cat) => (
               <option key={cat.id} value={cat.name.toLowerCase()}>
                 {cat.name}
               </option>
             ))}
           </select>
           <button className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
             + Division
           </button>
           <button className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
             + Category
           </button>
           <button
             onClick={() => navigate("/products/new")}
             className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] flex items-center gap-2"
           >
             <Plus className="h-4 w-4" />
             Product
           </button>
         </div>
       </div>
 
       {/* Tabs */}
       <div className="border-b border-gray-200 dark:border-gray-700">
         <div className="flex gap-6">
           {["products", "divisions", "categories", "bestsellers"].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-3 text-sm font-medium capitalize border-b-2 ${
                 activeTab === tab
                   ? "border-[#aa1e2c] text-[#aa1e2c]"
                   : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
               }`}
             >
               {tab}
             </button>
           ))}
         </div>
       </div>
 
       {activeTab === "products" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead>
                 <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider w-16">Photo</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Product</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Division</th>
                   <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</th>
                   <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Old Price</th>
                   <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Price</th>
                   <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Bestseller</th>
                   <th className="px-4 py-3"></th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                 {productsData.map((product) => (
                   <tr key={product.id}>
                     <td className="px-4 py-3">
                       <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl">
                         {product.photo}
                       </div>
                     </td>
                     <td className="px-4 py-3">
                       <div>
                         <span className="font-medium text-[#aa1e2c]">{product.name}</span>
                         <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{product.description}</p>
                       </div>
                     </td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{product.division}</td>
                     <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{product.category}</td>
                     <td className="px-4 py-3 text-right text-gray-400 line-through">
                       {product.oldPrice ? `RM ${product.oldPrice}` : "—"}
                     </td>
                     <td className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">
                       RM {product.price}
                     </td>
                     <td className="px-4 py-3 text-center">
                       <span className={`text-xs font-semibold ${product.bestseller ? "text-green-600 dark:text-green-400" : "text-gray-400"}`}>
                         {product.bestseller ? "YES" : "NO"}
                       </span>
                     </td>
                     <td className="px-4 py-3">
                       <div className="flex items-center gap-1">
                         <button
                           onClick={() => navigate(`/products/${product.id}`)}
                           className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824]"
                         >
                           Edit
                         </button>
                         <button
                           onClick={() => navigate(`/products/${product.id}`)}
                           className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                         >
                           View
                         </button>
                         <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500">
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
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6">
           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             {divisionsData.map((division) => (
               <div key={division.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{division.name}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400">{division.productCount} products</p>
                   </div>
                   <div className="flex gap-1">
                     <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-[#aa1e2c] hover:text-white">
                       <Edit className="h-4 w-4" />
                     </button>
                     <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white">
                       <Trash2 className="h-4 w-4" />
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       )}
 
       {activeTab === "categories" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6">
           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             {categoriesData.map((category) => (
               <div key={category.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.name}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400">{category.productCount} products</p>
                   </div>
                   <div className="flex gap-1">
                     <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-[#aa1e2c] hover:text-white">
                       <Edit className="h-4 w-4" />
                     </button>
                     <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white">
                       <Trash2 className="h-4 w-4" />
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       )}
 
       {activeTab === "bestsellers" && (
         <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6">
           <div className="space-y-4">
             {productsData.filter((p) => p.bestseller).map((product, index) => (
               <div key={product.id} className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#aa1e2c]/10 text-lg font-bold text-[#aa1e2c]">
                   {index + 1}
                 </div>
                 <div className="h-14 w-14 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl">
                   {product.photo}
                 </div>
                 <div className="flex-1">
                   <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                 </div>
                 <span className="text-lg font-semibold text-gray-900 dark:text-white">RM {product.price}</span>
               </div>
             ))}
             {productsData.filter((p) => p.bestseller).length === 0 && (
               <p className="text-center text-gray-500 dark:text-gray-400 py-8">No bestsellers marked yet.</p>
             )}
           </div>
         </div>
       )}
     </div>
   );
 }