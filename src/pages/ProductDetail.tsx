 import { useParams, useNavigate } from "react-router-dom";
 import { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
 import { FormModal, DeleteModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/shared/PageHeader";
 
 /**
  * Product Detail Page
  * DaisyUI: card, btn, badge, modal
  */
 
 const productData = {
   id: 7,
   name: "Ice Lemon Tea",
   division: "Bar",
   category: "Beverages",
   oldPrice: null,
   currentPrice: 5.00,
   titleEN: "Ice Lemon Tea",
   titleMS: "-",
   descriptionEN: "Refreshing iced lemon tea",
   descriptionMS: "-",
   photo: "🍹",
   bestseller: false,
   position: 4,
   modifiers: [
     { 
       id: 1, 
       nameEN: "Barbican Flavors", 
       nameMS: "Barbican Flavors",
       minAmount: 1, 
       maxAmount: 1, 
       options: [
         { id: 1, nameEN: "Barbican Flavors", nameMS: "Barbican Flavors", price: 10.00 }
       ] 
     },
   ],
   addOns: [] as { id: number; nameEN: string; nameMS: string; price: number }[],
 };
 
 export default function ProductDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [editModalOpen, setEditModalOpen] = useState(false);
   const [modifierModalOpen, setModifierModalOpen] = useState(false);
   const [addOnModalOpen, setAddOnModalOpen] = useState(false);
   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
   const [editingModifier, setEditingModifier] = useState<typeof productData.modifiers[0] | null>(null);
 
   const [modifierForm, setModifierForm] = useState({
     titleEN: "",
     titleMS: "",
     position: 0,
     minQty: 0,
     maxQty: 0,
     options: [{ nameEN: "", nameMS: "", price: 0 }],
   });
 
   const openEditModifier = (modifier: typeof productData.modifiers[0]) => {
     setEditingModifier(modifier);
     setModifierForm({
       titleEN: modifier.nameEN,
       titleMS: modifier.nameMS,
       position: 0,
       minQty: modifier.minAmount,
       maxQty: modifier.maxAmount,
       options: modifier.options.map(o => ({ nameEN: o.nameEN, nameMS: o.nameMS, price: o.price })),
     });
     setModifierModalOpen(true);
   };
 
   const addOption = () => {
     setModifierForm({
       ...modifierForm,
       options: [...modifierForm.options, { nameEN: "", nameMS: "", price: 0 }],
     });
   };
 
   const removeOption = (index: number) => {
     setModifierForm({
       ...modifierForm,
       options: modifierForm.options.filter((_, i) => i !== index),
     });
   };
 
   return (
     <div className="space-y-6">
      <PageHeader
        title={productData.name}
        backLink="/products"
        backLabel="Products"
        actions={
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setEditModalOpen(true)}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </button>
            <button 
              onClick={() => setDeleteModalOpen(true)}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-border bg-card text-foreground hover:bg-destructive hover:text-destructive-foreground hover:border-destructive flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </div>
        }
      />
 
       {/* Product Info Card */}
      <div className="rounded-xl border border-border bg-card p-6">
         <div className="flex flex-col lg:flex-row gap-6">
           {/* Photo */}
          <div className="h-32 w-32 rounded-xl bg-muted flex items-center justify-center text-5xl flex-shrink-0">
             {productData.photo}
           </div>
 
           {/* Info Grid */}
           <div className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
             <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Division</p>
              <p className="text-foreground font-medium mt-1">{productData.division}</p>
             </div>
             <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</p>
              <p className="text-foreground font-medium mt-1">{productData.category}</p>
             </div>
             <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Old Price</p>
              <p className="text-foreground font-medium mt-1">{productData.oldPrice ? `RM ${productData.oldPrice}` : "-"}</p>
             </div>
             <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Current Price</p>
              <p className="text-foreground font-bold mt-1">RM {productData.currentPrice.toFixed(2)}</p>
             </div>
             <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Title (English)</p>
              <p className="text-foreground font-medium mt-1">{productData.titleEN}</p>
             </div>
           </div>
         </div>
 
        <div className="grid gap-4 sm:grid-cols-2 mt-6 pt-6 border-t border-border">
           <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description (English)</p>
            <p className="text-foreground mt-1">{productData.descriptionEN}</p>
           </div>
           <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description (Malaysia)</p>
            <p className="text-foreground mt-1">{productData.descriptionMS}</p>
           </div>
         </div>
       </div>
 
       {/* Modifiers & Add-ons */}
       <div className="grid gap-6 lg:grid-cols-2">
         {/* Modifiers */}
        <div className="rounded-xl border border-border bg-card p-6">
           <div className="flex items-center justify-between mb-4">
            <h3 className="section-title">Modificators</h3>
             <button 
               onClick={() => {
                 setEditingModifier(null);
                 setModifierForm({ titleEN: "", titleMS: "", position: 0, minQty: 0, maxQty: 0, options: [{ nameEN: "", nameMS: "", price: 0 }] });
                 setModifierModalOpen(true);
               }}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
             >
               <Plus className="h-4 w-4" />
               Add Modificator
             </button>
           </div>
           <div className="space-y-4">
             {productData.modifiers.map((modifier) => (
              <div key={modifier.id} className="border border-border rounded-lg p-4">
                 <div className="flex items-start justify-between">
                   <div>
                    <p className="font-medium text-foreground">Name: <span className="font-semibold">{modifier.nameEN} / {modifier.nameMS}</span></p>
                    <p className="text-sm text-muted-foreground mt-1">Min Amount: <span className="font-medium text-foreground">{modifier.minAmount}</span></p>
                    <p className="text-sm text-muted-foreground">Max Amount: <span className="font-medium text-foreground">{modifier.maxAmount}</span></p>
                     {modifier.options.map((opt) => (
                      <div key={opt.id} className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                        <span className="text-sm text-foreground">{opt.nameEN}</span>
                        <span className="text-sm font-semibold text-foreground">{opt.price.toFixed(2)}</span>
                       </div>
                     ))}
                   </div>
                   <div className="flex gap-1">
                     <button 
                       onClick={() => openEditModifier(modifier)}
                      className="h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted"
                     >
                       <Edit className="h-4 w-4" />
                     </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-destructive hover:bg-destructive/10">
                       <Trash2 className="h-4 w-4" />
                     </button>
                   </div>
                 </div>
               </div>
             ))}
             {productData.modifiers.length === 0 && (
              <p className="text-center text-muted-foreground py-4">No modifiers configured</p>
             )}
           </div>
         </div>
 
         {/* Add-ons */}
        <div className="rounded-xl border border-border bg-card p-6">
           <div className="flex items-center justify-between mb-4">
            <h3 className="section-title">Add On</h3>
             <button 
               onClick={() => setAddOnModalOpen(true)}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
             >
               <Plus className="h-4 w-4" />
               Add Add On
             </button>
           </div>
           <div className="space-y-4">
            <p className="font-medium text-foreground">Name: <span className="font-semibold">Add On</span></p>
             {productData.addOns.length === 0 && (
              <p className="text-muted-foreground">No add-ons configured</p>
             )}
           </div>
         </div>
       </div>
 
       {/* Edit Product Modal */}
       <FormModal
         open={editModalOpen}
         onOpenChange={setEditModalOpen}
         title="Edit Product"
         onSubmit={() => setEditModalOpen(false)}
         submitLabel="Update Product"
         size="lg"
       >
         <div className="space-y-6">
           {/* Basic Info */}
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Basic Information</h4>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="sm:col-span-2 flex gap-6">
                 <div className="space-y-2">
                   <Label>Photo</Label>
                  <div className="h-24 w-32 rounded-lg bg-muted flex items-center justify-center text-3xl">
                     {productData.photo}
                   </div>
                  <button className="text-xs text-destructive hover:text-destructive/80">Remove</button>
                 </div>
                 <div className="flex items-center gap-2 pt-6">
                  <input type="checkbox" id="bestseller" className="rounded border-border" defaultChecked={productData.bestseller} />
                   <Label htmlFor="bestseller">Show as Bestseller</Label>
                 </div>
               </div>
               <div className="space-y-2">
                <Label>Title (English) <span className="text-destructive">*</span></Label>
                <Input defaultValue={productData.titleEN} />
               </div>
               <div className="space-y-2">
                <Label>Title (Malaysia) <span className="text-destructive">*</span></Label>
                <Input defaultValue={productData.titleMS} placeholder="Enter product name in Malay" />
               </div>
               <div className="space-y-2">
                <Label>Description (English) <span className="text-destructive">*</span></Label>
                <Textarea defaultValue={productData.descriptionEN} rows={3} />
               </div>
               <div className="space-y-2">
                <Label>Description (Malaysia) <span className="text-destructive">*</span></Label>
                <Textarea defaultValue={productData.descriptionMS} placeholder="Enter product description in Malay" rows={3} />
               </div>
             </div>
           </div>
 
           {/* Category & Pricing */}
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Category & Pricing</h4>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                <Label>Division <span className="text-destructive">*</span></Label>
                <select defaultValue={productData.division} className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                   <option value="Bar">Bar</option>
                   <option value="Kitchen">Kitchen</option>
                 </select>
               </div>
               <div className="space-y-2">
                <Label>Category <span className="text-destructive">*</span></Label>
                <select defaultValue={productData.category} className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                   <option value="Beverages">Beverages</option>
                   <option value="Main Course">Main Course</option>
                   <option value="Appetizer">Appetizer</option>
                 </select>
               </div>
               <div className="space-y-2">
                <Label>Current Price (RM) <span className="text-destructive">*</span></Label>
                <Input type="number" step="0.01" defaultValue={productData.currentPrice} />
               </div>
               <div className="space-y-2">
                 <Label>Old Price (RM)</Label>
                <Input type="number" step="0.01" placeholder="0.00 (optional)" />
               </div>
               <div className="space-y-2">
                 <Label>Position</Label>
                <Input type="number" defaultValue={productData.position} />
               </div>
             </div>
           </div>
         </div>
       </FormModal>
 
       {/* Add/Edit Modifier Modal */}
       <FormModal
         open={modifierModalOpen}
         onOpenChange={setModifierModalOpen}
         title={editingModifier ? "Edit Modifiers" : "Add Modifiers"}
         onSubmit={() => setModifierModalOpen(false)}
         submitLabel="Save"
         size="lg"
       >
         <div className="space-y-6">
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Add Title</h4>
             <div className="grid gap-4 sm:grid-cols-2">
               <div className="space-y-2">
                <Label>Title English <span className="text-destructive">*</span></Label>
                 <Input 
                   value={modifierForm.titleEN} 
                   onChange={(e) => setModifierForm({ ...modifierForm, titleEN: e.target.value })}
                 />
               </div>
               <div className="space-y-2">
                <Label>Title Malaysia <span className="text-destructive">*</span></Label>
                 <Input 
                   value={modifierForm.titleMS} 
                   onChange={(e) => setModifierForm({ ...modifierForm, titleMS: e.target.value })}
                 />
               </div>
             </div>
           </div>
 
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Settings</h4>
             <div className="grid gap-4 sm:grid-cols-3">
               <div className="space-y-2">
                 <Label>Position</Label>
                 <Input 
                   type="number" 
                   value={modifierForm.position}
                   onChange={(e) => setModifierForm({ ...modifierForm, position: parseInt(e.target.value) || 0 })}
                 />
               </div>
               <div className="space-y-2">
                <Label>Min QTY <span className="text-destructive">*</span></Label>
                 <Input 
                   type="number"
                   value={modifierForm.minQty}
                   onChange={(e) => setModifierForm({ ...modifierForm, minQty: parseInt(e.target.value) || 0 })}
                 />
               </div>
               <div className="space-y-2">
                <Label>Max QTY <span className="text-destructive">*</span></Label>
                 <Input 
                   type="number"
                   value={modifierForm.maxQty}
                   onChange={(e) => setModifierForm({ ...modifierForm, maxQty: parseInt(e.target.value) || 0 })}
                 />
               </div>
             </div>
           </div>
 
           <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Add Options</h4>
             <div className="space-y-3">
               {modifierForm.options.map((option, index) => (
                 <div key={index} className="grid gap-4 sm:grid-cols-4 items-end">
                   <div className="space-y-2">
                    <Label>Option English <span className="text-destructive">*</span></Label>
                     <Input 
                       value={option.nameEN}
                       onChange={(e) => {
                         const newOptions = [...modifierForm.options];
                         newOptions[index].nameEN = e.target.value;
                         setModifierForm({ ...modifierForm, options: newOptions });
                       }}
                     />
                   </div>
                   <div className="space-y-2">
                    <Label>Option Malaysia <span className="text-destructive">*</span></Label>
                     <Input 
                       value={option.nameMS}
                       onChange={(e) => {
                         const newOptions = [...modifierForm.options];
                         newOptions[index].nameMS = e.target.value;
                         setModifierForm({ ...modifierForm, options: newOptions });
                       }}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Price (RM)</Label>
                     <Input 
                       type="number"
                       step="0.01"
                       value={option.price}
                       onChange={(e) => {
                         const newOptions = [...modifierForm.options];
                         newOptions[index].price = parseFloat(e.target.value) || 0;
                         setModifierForm({ ...modifierForm, options: newOptions });
                       }}
                     />
                   </div>
                   <button 
                     onClick={() => removeOption(index)}
                    className="h-10 w-10 flex items-center justify-center rounded-lg text-destructive hover:bg-destructive/10"
                   >
                     <Trash2 className="h-4 w-4" />
                   </button>
                 </div>
               ))}
             </div>
             <button 
               onClick={addOption}
              className="mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2"
             >
               <Plus className="h-4 w-4" />
               Add Option
             </button>
           </div>
         </div>
       </FormModal>
 
       {/* Add Add-On Modal */}
       <FormModal
         open={addOnModalOpen}
         onOpenChange={setAddOnModalOpen}
         title="Add Add On"
         onSubmit={() => setAddOnModalOpen(false)}
         submitLabel="Save"
         size="md"
       >
         <div className="space-y-4">
           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-2">
              <Label>Name (English) <span className="text-destructive">*</span></Label>
              <Input />
             </div>
             <div className="space-y-2">
              <Label>Name (Malaysia) <span className="text-destructive">*</span></Label>
              <Input />
             </div>
           </div>
           <div className="space-y-2">
            <Label>Price (RM) <span className="text-destructive">*</span></Label>
            <Input type="number" step="0.01" />
           </div>
         </div>
       </FormModal>
 
       {/* Delete Modal */}
       <DeleteModal
         open={deleteModalOpen}
         onOpenChange={setDeleteModalOpen}
         onConfirm={() => {
           setDeleteModalOpen(false);
           navigate("/products");
         }}
         itemName={productData.name}
       />
     </div>
   );
 }