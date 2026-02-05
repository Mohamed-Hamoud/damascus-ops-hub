 import { useState } from "react";
 import { Edit, Eye, Trash2, Plus } from "lucide-react";

/**
 * Products Page
 * DaisyUI components: tabs, table, card, btn, select, badge
 * 
 * HAML structure:
 * .space-y-6
 *   .flex.justify-between
 *     %h1.text-2xl.font-bold Products
 *     .flex.gap-2
 *       %select.select.select-bordered
 *       %button.btn.btn-outline + Division
 *       %button.btn.btn-primary + Product
 *   .tabs.tabs-boxed
 *     %a.tab Products
 *     %a.tab Divisions
 *   .card.bg-base-100
 *     %table.table
 */
 
 const productsData = [
   { id: 1, name: "Ice Lemon Tea", description: "Refreshing iced lemon tea", division: "Bar", category: "Beverages", oldPrice: null, price: "5.00", bestseller: false },
   { id: 2, name: "Spring Rolls", description: "Crispy vegetable spring rolls", division: "Bar", category: "Appetizer", oldPrice: null, price: "7.00", bestseller: false },
   { id: 3, name: "Caesar Salad", description: "Fresh romaine with caesar dressing", division: "Bar", category: "Salad", oldPrice: "19.00", price: "10.00", bestseller: false },
   { id: 4, name: "Chocolate Cake", description: "Rich chocolate layer cake", division: "Bar", category: "Desserts", oldPrice: null, price: "9.00", bestseller: false },
   { id: 5, name: "Chicken Rice", description: "Hainanese style chicken rice with soup", division: "Bar", category: "Main Course", oldPrice: null, price: "12.00", bestseller: false },
   { id: 6, name: "Nasi Lemak", description: "Coconut rice with sambal, anchovies, peanuts an...", division: "Bar", category: "Main Course", oldPrice: "16.00", price: "15.00", bestseller: true },
   { id: 7, name: "Tom Yum Soup", description: "Spicy Thai soup with shrimp", division: "Bar", category: "Soups", oldPrice: null, price: "8.00", bestseller: false },
 ];
 
 const categoriesData = [
   { id: 1, name: "Beverages", productCount: 12, active: true },
   { id: 2, name: "Appetizer", productCount: 8, active: true },
   { id: 3, name: "Main Course", productCount: 24, active: true },
   { id: 4, name: "Desserts", productCount: 6, active: true },
   { id: 5, name: "Salad", productCount: 4, active: true },
   { id: 6, name: "Soups", productCount: 5, active: true },
 ];
 
 const divisionsData = [
   { id: 1, name: "Bar", productCount: 45, active: true },
   { id: 2, name: "Kitchen", productCount: 32, active: true },
 ];
 
 export default function Products() {
   const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("products");
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your food menu and inventory</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
          {/* DaisyUI: select select-bordered select-sm */}
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="select select-bordered w-32 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
          >
            <option value="all">All</option>
            {categoriesData.map((cat) => (
              <option key={cat.id} value={cat.name.toLowerCase()}>
                {cat.name}
              </option>
            ))}
          </select>
          {/* DaisyUI: btn btn-outline */}
          <button className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">+ Division</button>
          <button className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">+ Category</button>
          {/* DaisyUI: btn btn-primary */}
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
             <Plus className="mr-2 h-4 w-4" />
             Product
          </button>
         </div>
       </div>
 
       {/* Tabs */}
      {/* DaisyUI: tabs tabs-boxed */}
      <div className="space-y-4">
        <div className="flex gap-1 p-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm w-fit">
          {["products", "divisions", "categories", "bestsellers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 capitalize ${
                activeTab === tab
                  ? "bg-[#aa1e2c] text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
 
        {activeTab === "products" && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
             <div className="overflow-x-auto">
              {/* DaisyUI: table */}
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
                    <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                      <td className="px-4 py-3">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-xl shadow-sm">
                           🍽️
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
                          {/* DaisyUI: btn btn-primary btn-sm */}
                          <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#aa1e2c] text-white hover:bg-[#8a1824] transition-all duration-200">Edit</button>
                          <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">View</button>
                          <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200">Delete</button>
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
                <div key={division.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-[#aa1e2c]/20">
                   <div className="flex items-center justify-between">
                     <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{division.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{division.productCount} products</p>
                     </div>
                     <div className="flex gap-1">
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-[#aa1e2c] hover:text-white transition-all duration-200">
                         <Edit className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-200">
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
                <div key={category.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-[#aa1e2c]/20">
                   <div className="flex items-center justify-between">
                     <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{category.productCount} products</p>
                     </div>
                     <div className="flex gap-1">
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-[#aa1e2c] hover:text-white transition-all duration-200">
                         <Edit className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-200">
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
               {productsData.filter(p => p.bestseller).map((product, index) => (
                <div key={product.id} className="flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-[#aa1e2c]/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#aa1e2c]/10 text-lg font-bold text-[#aa1e2c] shadow-sm">
                     {index + 1}
                   </div>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-2xl shadow-sm">
                     🍛
                   </div>
                   <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                   </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">RM {product.price}</span>
                 </div>
               ))}
               {productsData.filter(p => p.bestseller).length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">No bestsellers marked yet.</p>
               )}
             </div>
           </div>
        )}
      </div>
     </div>
   );
 }