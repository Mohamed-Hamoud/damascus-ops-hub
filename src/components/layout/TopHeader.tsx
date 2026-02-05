 import { useState } from "react";
 import { useLocation, Link } from "react-router-dom";
import { Search, Bell, ChevronRight, User, Settings, LogOut, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
 
/**
 * TopHeader Component
 * DaisyUI equivalents: navbar, dropdown, avatar, badge, input
 * 
 * HAML structure:
 * %nav.navbar.bg-base-100.border-b
 *   .navbar-start
 *     %nav.breadcrumb
 *   .navbar-end
 *     %input.input.input-bordered{ placeholder: 'Search...' }
 *     .dropdown.dropdown-end
 *       %button.btn.btn-ghost.btn-circle
 *         .indicator
 *           %i.icon-bell
 *           %span.badge.badge-xs
 *     .dropdown.dropdown-end
 *       %button.btn.btn-ghost.btn-circle.avatar
 */
 
 const routeNames: Record<string, string> = {
   "/": "Dashboard",
   "/analytics": "Analytics",
   "/orders": "Orders",
   "/products": "Products",
   "/banners": "Banners",
   "/promotions": "Promotions",
   "/customers": "Customers",
   "/evaluations": "Evaluations",
   "/support": "Support",
   "/branches": "Branches",
   "/restaurant-app": "Restaurant App",
   "/reports": "Reports",
   "/points": "Points",
 };
 
 export function TopHeader() {
   const location = useLocation();
   const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

   const currentRoute = location.pathname;
   const routeName = routeNames[currentRoute] || "Page";
   const isDetailPage = currentRoute.includes("/orders/");
 
   return (
    <header className="sticky top-0 z-40 flex h-16 flex-1 items-center gap-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6">
      {/* DaisyUI: breadcrumbs */}
       <nav className="flex items-center gap-1.5 text-sm">
        <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
           Home
         </Link>
        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
         {isDetailPage ? (
           <>
            <Link to="/orders" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
               Orders
             </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">Order Details</span>
           </>
         ) : (
          <span className="font-medium text-gray-900 dark:text-white">{routeName}</span>
         )}
       </nav>
 
       {/* Spacer */}
       <div className="flex-1" />
 
      {/* DaisyUI: input input-bordered */}
       <div className="hidden md:flex relative w-64">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
           placeholder="Search orders, products..."
          className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa1e2c]/20 focus:border-[#aa1e2c]"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         />
       </div>
 
      {/* DaisyUI: btn btn-ghost btn-circle - Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>

      {/* DaisyUI: dropdown dropdown-end - Notifications */}
      <div className="relative">
        <button 
          onClick={() => setNotificationsOpen(!notificationsOpen)}
          className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 relative"
        >
          <Bell className="h-5 w-5" />
          {/* DaisyUI: badge badge-sm */}
          <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#aa1e2c] text-white text-[10px] font-bold">
            3
          </span>
          <span className="sr-only">Notifications</span>
        </button>
        {notificationsOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setNotificationsOpen(false)} />
            {/* DaisyUI: dropdown-content menu */}
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-20">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-gray-900 dark:text-white">Notifications</span>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <span className="block font-medium text-gray-900 dark:text-white">New order received</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Order #DF-268-FF3A from Aisyah</span>
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <span className="block font-medium text-gray-900 dark:text-white">Order ready for delivery</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Order #DF-537-290126 is prepared</span>
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <span className="block font-medium text-gray-900 dark:text-white">Low stock alert</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Nasi Lemak is running low</span>
                </button>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
                <button className="w-full text-center text-sm text-[#aa1e2c] font-medium hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          </>
        )}
      </div>
 
      {/* DaisyUI: dropdown dropdown-end - User Profile */}
      <div className="relative">
        <button 
          onClick={() => setProfileOpen(!profileOpen)}
          className="h-9 w-9 rounded-full overflow-hidden"
        >
          {/* DaisyUI: avatar */}
          <div className="h-full w-full flex items-center justify-center bg-[#aa1e2c] text-white font-semibold text-sm">
            AD
          </div>
        </button>
        {profileOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
            {/* DaisyUI: dropdown-content menu */}
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-20">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">admin@damascus.my</p>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors">
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 py-1">
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors">
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
             </div>
          </>
        )}
      </div>
     </header>
   );
 }