 /**
  * Shared TypeScript Interfaces
  * 
  * This file contains all shared type definitions used across the application.
  * When migrating to Rails, these can be used as reference for ActiveRecord models
  * and serializer structures.
  */
 
 // ============================================
 // ORDER TYPES
 // ============================================
 
 export type OrderStatus = 
   | "new" 
   | "pending" 
   | "accepted" 
   | "delivering" 
   | "completed" 
   | "cancelled" 
   | "failed";
 
 export interface Order {
   id: string;
   internalId: string;
   date: string;
   time: string;
   customer: string;
   branch: string;
   amount: string;
   delivery: string;
   status: OrderStatus;
 }
 
 export interface OrderItem {
   id: number;
   name: string;
   quantity: number;
   price: number;
   modifiers?: string[];
   addOns?: string[];
 }
 
 // ============================================
 // CUSTOMER TYPES
 // ============================================
 
 export interface Customer {
   id: number;
   created: string;
   name: string;
   email: string;
   phone?: string;
   discounts: boolean;
   activeVoucher: boolean;
   orders: number;
   totalSpent: number;
   lastOrder: number;
 }
 
 // ============================================
 // PRODUCT TYPES
 // ============================================
 
 export interface Product {
   id: number;
   photo: string;
   name: string;
   nameMs?: string; // Malay translation
   description: string;
   descriptionMs?: string; // Malay translation
   division: string;
   category: string;
   oldPrice: string | null;
   price: string;
   bestseller: boolean;
   position?: number;
 }
 
 export interface ProductCategory {
   id: number;
   name: string;
   productCount: number;
 }
 
 export interface ProductDivision {
   id: number;
   name: string;
   productCount: number;
 }
 
 export interface ProductModifier {
   id: number;
   name: string;
   price: number;
   required: boolean;
 }
 
 export interface ProductAddOn {
   id: number;
   name: string;
   price: number;
 }
 
 // ============================================
 // PROMOTION TYPES
 // ============================================
 
 export interface Voucher {
   id: number;
   title: string;
   code: string;
   remaining: number;
   limit: number;
   points: number;
   minOrder: number;
   startDate: string;
   endDate: string;
   discountType: "fixed" | "percentage";
   discountValue: number;
 }
 
 export interface DeliveryRule {
   id: number;
   minDistance: number;
   maxDistance: number;
   multiplier: number;
   minOrder: number;
   maxOrder: number;
   discount: number;
 }
 
 // ============================================
 // SUPPORT TYPES
 // ============================================
 
 export type TicketStatus = "open" | "pending" | "resolved" | "closed";
 export type TicketPriority = "low" | "medium" | "high" | "urgent";
 
 export interface SupportTicket {
   id: string;
   subject: string;
   customer: string;
   status: TicketStatus;
   priority: TicketPriority;
   agent?: string;
   created: string;
   updated: string;
 }
 
 export interface SupportTeam {
   id: number;
   name: string;
   members: number;
 }
 
 export interface SLAPolicy {
   id: number;
   name: string;
   responseTime: number; // in minutes
   resolutionTime: number; // in hours
 }
 
 // ============================================
 // BRANCH TYPES
 // ============================================
 
 export interface Branch {
   id: number;
   name: string;
   address: string;
   phone: string;
   status: "active" | "inactive";
   ordersToday: number;
 }
 
 // ============================================
 // BANNER TYPES
 // ============================================
 
 export interface Banner {
   id: number;
   title: string;
   image: string;
   link?: string;
   position: number;
   active: boolean;
   startDate?: string;
   endDate?: string;
 }
 
 // ============================================
 // EVALUATION TYPES
 // ============================================
 
 export interface Evaluation {
   id: number;
   orderId: string;
   customer: string;
   foodRating: number;
   deliveryRating: number;
   comment?: string;
   created: string;
 }
 
 // ============================================
 // COMMON TYPES
 // ============================================
 
 export interface PaginationMeta {
   currentPage: number;
   totalPages: number;
   totalItems: number;
   itemsPerPage: number;
 }
 
 export interface FilterOption {
   label: string;
   value: string;
 }
 
 export interface TableColumn<T> {
   key: string;
   header: string;
   className?: string;
   render?: (item: T) => React.ReactNode;
 }
 
 export interface StatCardData {
   title: string;
   value: string | number;
   trend?: {
     value: number;
     isPositive: boolean;
   };
   variant?: "default" | "success" | "warning" | "destructive";
 }
 
 // ============================================
 // NAV TYPES
 // ============================================
 
 export interface NavItem {
   title: string;
   url: string;
   icon: React.ComponentType<{ className?: string }>;
 }
 
 export interface TabItem {
   id: string;
   label: string;
 }