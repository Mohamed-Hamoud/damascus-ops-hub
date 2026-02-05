 import { useState } from "react";
 import { Edit, Eye, Trash2, Plus } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 
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
 
   return (
     <div className="space-y-6">
       {/* Page Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage your food menu and inventory</p>
         </div>
         <div className="flex flex-wrap items-center gap-2">
           <Select value={categoryFilter} onValueChange={setCategoryFilter}>
             <SelectTrigger className="w-32">
               <SelectValue placeholder="Category" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="all">All</SelectItem>
               {categoriesData.map((cat) => (
                 <SelectItem key={cat.id} value={cat.name.toLowerCase()}>
                   {cat.name}
                 </SelectItem>
               ))}
             </SelectContent>
           </Select>
          <Button variant="outline" className="transition-all duration-200 hover:bg-secondary">+ Division</Button>
          <Button variant="outline" className="transition-all duration-200 hover:bg-secondary">+ Category</Button>
          <Button className="transition-all duration-200 hover:shadow-md">
             <Plus className="mr-2 h-4 w-4" />
             Product
           </Button>
         </div>
       </div>
 
       {/* Tabs */}
       <Tabs defaultValue="products" className="space-y-4">
        <TabsList className="bg-card border shadow-sm p-1">
           <TabsTrigger value="products">Products</TabsTrigger>
           <TabsTrigger value="divisions">Divisions</TabsTrigger>
           <TabsTrigger value="categories">Categories</TabsTrigger>
           <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
         </TabsList>
 
         <TabsContent value="products">
          <div className="rounded-xl border bg-card card-shadow overflow-hidden">
             <div className="overflow-x-auto">
               <Table>
                 <TableHeader>
                   <TableRow className="bg-muted/50">
                     <TableHead className="font-semibold w-16">Photo</TableHead>
                     <TableHead className="font-semibold">Product</TableHead>
                     <TableHead className="font-semibold">Division</TableHead>
                     <TableHead className="font-semibold">Category</TableHead>
                     <TableHead className="font-semibold text-right">Old Price</TableHead>
                     <TableHead className="font-semibold text-right">Price</TableHead>
                     <TableHead className="font-semibold text-center">Bestseller</TableHead>
                     <TableHead className="font-semibold"></TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   {productsData.map((product) => (
                    <TableRow key={product.id} className="hover:bg-muted/30 transition-colors duration-150">
                       <TableCell>
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-xl shadow-sm">
                           🍽️
                         </div>
                       </TableCell>
                       <TableCell>
                         <div>
                           <span className="font-medium text-primary">{product.name}</span>
                           <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
                         </div>
                       </TableCell>
                       <TableCell className="text-muted-foreground">{product.division}</TableCell>
                       <TableCell className="text-muted-foreground">{product.category}</TableCell>
                       <TableCell className="text-right text-muted-foreground">
                         {product.oldPrice ? `RM ${product.oldPrice}` : "—"}
                       </TableCell>
                       <TableCell className="text-right font-semibold">
                         RM {product.price}
                       </TableCell>
                       <TableCell className="text-center">
                         <span className={`text-xs font-semibold ${product.bestseller ? "text-success" : "text-muted-foreground"}`}>
                           {product.bestseller ? "YES" : "NO"}
                         </span>
                       </TableCell>
                       <TableCell>
                         <div className="flex items-center gap-1">
                          <Button size="sm" className="transition-all duration-200">Edit</Button>
                          <Button variant="outline" size="sm" className="transition-all duration-200 hover:bg-secondary">View</Button>
                          <Button variant="outline" size="sm" className="transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive">Delete</Button>
                         </div>
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </div>
           </div>
         </TabsContent>
 
         <TabsContent value="divisions">
          <div className="rounded-xl border bg-card card-shadow p-6">
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {divisionsData.map((division) => (
                <div key={division.id} className="rounded-xl border bg-gradient-to-br from-background to-muted/20 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20">
                   <div className="flex items-center justify-between">
                     <div>
                      <h3 className="font-semibold text-lg">{division.name}</h3>
                       <p className="text-sm text-muted-foreground">{division.productCount} products</p>
                     </div>
                     <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
                         <Edit className="h-4 w-4" />
                       </Button>
                      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground">
                         <Trash2 className="h-4 w-4" />
                       </Button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </TabsContent>
 
         <TabsContent value="categories">
          <div className="rounded-xl border bg-card card-shadow p-6">
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {categoriesData.map((category) => (
                <div key={category.id} className="rounded-xl border bg-gradient-to-br from-background to-muted/20 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20">
                   <div className="flex items-center justify-between">
                     <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                       <p className="text-sm text-muted-foreground">{category.productCount} products</p>
                     </div>
                     <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
                         <Edit className="h-4 w-4" />
                       </Button>
                      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground">
                         <Trash2 className="h-4 w-4" />
                       </Button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </TabsContent>
 
         <TabsContent value="bestsellers">
          <div className="rounded-xl border bg-card card-shadow p-6">
             <div className="space-y-4">
               {productsData.filter(p => p.bestseller).map((product, index) => (
                <div key={product.id} className="flex items-center gap-4 rounded-xl border bg-gradient-to-r from-background to-muted/20 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary shadow-sm">
                     {index + 1}
                   </div>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-2xl shadow-sm">
                     🍛
                   </div>
                   <div className="flex-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                     <p className="text-sm text-muted-foreground">{product.category}</p>
                   </div>
                   <span className="text-lg font-semibold">RM {product.price}</span>
                 </div>
               ))}
               {productsData.filter(p => p.bestseller).length === 0 && (
                 <p className="text-center text-muted-foreground py-8">No bestsellers marked yet.</p>
               )}
             </div>
           </div>
         </TabsContent>
       </Tabs>
     </div>
   );
 }