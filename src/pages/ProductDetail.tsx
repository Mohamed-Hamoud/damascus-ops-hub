 import { useParams, useNavigate } from "react-router-dom";
 import { useState } from "react";
 import { Edit, Trash2, Plus } from "lucide-react";
 import { FormModal, DeleteModal } from "@/components/shared/FormModal";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 import { PageHeader } from "@/components/shared/PageHeader";
 import { ProductInfoCard } from "@/components/products/ProductInfoCard";
 import { ProductModifiers, type Modifier } from "@/components/products/ProductModifiers";
 import { ProductAddOns } from "@/components/products/ProductAddOns";
 
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
 
       <ProductInfoCard
         photo={productData.photo}
         division={productData.division}
         category={productData.category}
         oldPrice={productData.oldPrice}
         currentPrice={productData.currentPrice}
         titleEN={productData.titleEN}
         descriptionEN={productData.descriptionEN}
         descriptionMS={productData.descriptionMS}
       />
 
       {/* Modifiers & Add-ons */}
       <div className="grid gap-6 lg:grid-cols-2">
         <ProductModifiers
           modifiers={productData.modifiers}
           onAdd={() => {
             setEditingModifier(null);
             setModifierForm({ titleEN: "", titleMS: "", position: 0, minQty: 0, maxQty: 0, options: [{ nameEN: "", nameMS: "", price: 0 }] });
             setModifierModalOpen(true);
           }}
           onEdit={(modifier) => openEditModifier(modifier as typeof productData.modifiers[0])}
         />
         <ProductAddOns
           addOns={productData.addOns}
           onAdd={() => setAddOnModalOpen(true)}
         />
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