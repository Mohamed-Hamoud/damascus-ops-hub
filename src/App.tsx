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
 import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* Placeholder routes for other sections */}
              <Route path="/banners" element={<ComingSoon title="Banners" />} />
              <Route path="/promotions" element={<ComingSoon title="Promotions" />} />
              <Route path="/customers" element={<ComingSoon title="Customers" />} />
              <Route path="/evaluations" element={<ComingSoon title="Evaluations" />} />
              <Route path="/support" element={<ComingSoon title="Support" />} />
              <Route path="/branches" element={<ComingSoon title="Branches" />} />
              <Route path="/restaurant-app" element={<ComingSoon title="Restaurant App" />} />
              <Route path="/reports" element={<ComingSoon title="Reports" />} />
               <Route path="/points" element={<ComingSoon title="Points" />} />
               <Route path="/feedbacks" element={<Feedbacks />} />
               <Route path="/security" element={<Security />} />
               <Route path="/settings" element={<Settings />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground">This page is coming soon.</p>
    </div>
  );
}

export default App;
