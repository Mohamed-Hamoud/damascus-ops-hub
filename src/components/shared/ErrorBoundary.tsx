 import { Component, ReactNode } from "react";
 import { AlertTriangle, RefreshCw } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 interface ErrorBoundaryProps {
   children: ReactNode;
   fallback?: ReactNode;
 }
 
 interface ErrorBoundaryState {
   hasError: boolean;
   error?: Error;
 }
 
 export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
     super(props);
     this.state = { hasError: false };
   }
 
   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
     return { hasError: true, error };
   }
 
   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
     console.error("Error caught by boundary:", error, errorInfo);
   }
 
   handleRetry = () => {
     this.setState({ hasError: false, error: undefined });
   };
 
   render() {
     if (this.state.hasError) {
       if (this.props.fallback) {
         return this.props.fallback;
       }
 
       return (
         <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
           <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
             <AlertTriangle className="h-8 w-8 text-destructive" />
           </div>
           <h3 className="text-base font-semibold text-foreground">
             Something went wrong
           </h3>
           <p className="text-sm text-muted-foreground mt-1 max-w-sm">
             An unexpected error occurred. Please try again.
           </p>
           <Button onClick={this.handleRetry} className="mt-4" variant="outline">
             <RefreshCw className="h-4 w-4 mr-2" />
             Try Again
           </Button>
         </div>
       );
     }
 
     return this.props.children;
   }
 }
 
 // Inline error display for sections
 interface ErrorDisplayProps {
   title?: string;
   message: string;
   onRetry?: () => void;
   compact?: boolean;
 }
 
 export function ErrorDisplay({
   title = "Error",
   message,
   onRetry,
   compact = false,
 }: ErrorDisplayProps) {
   return (
     <div
       className={`flex flex-col items-center justify-center text-center ${
         compact ? "py-6 px-4" : "py-12 px-6"
       }`}
     >
       <div
         className={`rounded-full bg-destructive/10 flex items-center justify-center ${
           compact ? "h-10 w-10 mb-2" : "h-14 w-14 mb-3"
         }`}
       >
         <AlertTriangle
           className={`text-destructive ${compact ? "h-5 w-5" : "h-7 w-7"}`}
         />
       </div>
       <h3
         className={`font-semibold text-foreground ${
           compact ? "text-sm" : "text-base"
         }`}
       >
         {title}
       </h3>
       <p
         className={`text-muted-foreground mt-1 ${compact ? "text-xs" : "text-sm"}`}
       >
         {message}
       </p>
       {onRetry && (
         <Button
           onClick={onRetry}
           size={compact ? "sm" : "default"}
           variant="outline"
           className="mt-3"
         >
           <RefreshCw className="h-4 w-4 mr-2" />
           Retry
         </Button>
       )}
     </div>
   );
 }