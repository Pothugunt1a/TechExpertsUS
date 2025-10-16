import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import DMS from "@/pages/DMS";
import ICS from "@/pages/ICS";
import PMS from "@/pages/PMS";
import Consulting from "@/pages/Consulting";
import Outsourcing from "@/pages/Outsourcing";
import StaffingSolutions from "@/pages/StaffingSolutions";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/dms" component={DMS} />
      <Route path="/services/ics" component={ICS} />
      <Route path="/services/pms" component={PMS} />
      <Route path="/consult/consulting" component={Consulting} />
      <Route path="/consult/outsourcing" component={Outsourcing} />
      <Route path="/consult/staffing" component={StaffingSolutions} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main className="pt-20">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
