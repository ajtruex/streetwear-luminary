import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { LayoutProvider } from "./contexts/LayoutContext";
import LayoutToggle from "./components/LayoutToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LayoutProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
{/*           <LayoutToggle /> */}
          <Routes>
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LayoutProvider>
  </QueryClientProvider>
);

export default App;
