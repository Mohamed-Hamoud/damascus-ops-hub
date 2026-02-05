 import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
 import { Toaster } from "@/components/ui/toaster";
 import { Toaster as Sonner } from "@/components/ui/sonner";
 import { TooltipProvider } from "@/components/ui/tooltip";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { ThemeProvider } from "next-themes";
 import { DashboardLayout } from "./components/layout/DashboardLayout";
 import Dashboard from "./pages/Index";
 import Orders from "./pages/Orders";
 import OrderDetail from "./pages/OrderDetail";
 import Products from "./pages/Products";
 import Analytics from "./pages/Analytics";
 import Feedbacks from "./pages/Feedbacks";
 import Security from "./pages/Security";
 import Settings from "./pages/Settings";
 import Reports from "./pages/Reports";
 import Customers from "./pages/Customers";
 import CustomerDetail from "./pages/CustomerDetail";
 import Banners from "./pages/Banners";
import BannerDetail from "./pages/BannerDetail";
import BannerForm from "./pages/BannerForm";
import BranchDetail from "./pages/BranchDetail";
 import Support from "./pages/Support";
 import ProductDetail from "./pages/ProductDetail";
 import SupportTickets from "./pages/SupportTickets";
 import SupportSettings from "./pages/SupportSettings";
 import Branches from "./pages/Branches";
 import RestaurantApp from "./pages/RestaurantApp";
 import Points from "./pages/Points";
 import NotFound from "./pages/NotFound";
 import Promotions from "./pages/Promotions";
 import Evaluations from "./pages/Evaluations";
 import VoucherForm from "./pages/VoucherForm";
 import VoucherDetail from "./pages/VoucherDetail";

 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       retry: 1,
       refetchOnWindowFocus: false,
     },
   },
 });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
         <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/products" element={<Products />} />
             <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* Placeholder routes for other sections */}
             <Route path="/banners" element={<Banners />} />
            <Route path="/banners/new" element={<BannerForm />} />
            <Route path="/banners/:id" element={<BannerDetail />} />
            <Route path="/banners/:id/edit" element={<BannerForm />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/promotions/vouchers/new" element={<VoucherForm />} />
              <Route path="/promotions/vouchers/:id" element={<VoucherDetail />} />
              <Route path="/promotions/vouchers/:id/edit" element={<VoucherForm />} />
             <Route path="/customers" element={<Customers />} />
             <Route path="/customers/:id" element={<CustomerDetail />} />
              <Route path="/evaluations" element={<Evaluations />} />
             <Route path="/support" element={<Support />} />
              <Route path="/support/tickets" element={<SupportTickets />} />
              <Route path="/support/settings" element={<SupportSettings />} />
              <Route path="/branches" element={<Branches />} />
            <Route path="/branches/:id" element={<BranchDetail />} />
              <Route path="/restaurant-app" element={<RestaurantApp />} />
             <Route path="/reports" element={<Reports />} />
               <Route path="/points" element={<Points />} />
               <Route path="/feedbacks" element={<Feedbacks />} />
               <Route path="/security" element={<Security />} />
               <Route path="/settings" element={<Settings />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
         </ErrorBoundary>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
