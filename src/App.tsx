import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { PersonalizationProvider } from '@/hooks/usePersonalization';
import { ThemeProvider } from '@/hooks/useTheme';
import { AppLayout } from '@/components/Layout/AppLayout';
import Dashboard from '@/pages/Dashboard';
import ProductTrends from '@/pages/ProductTrends';
import ProductAnalysis from '@/pages/ProductAnalysis';
import MarketAnalysis from '@/pages/MarketAnalysis';
import CrossNicheDiscovery from '@/pages/CrossNicheDiscovery';
import Suppliers from '@/pages/Suppliers';
import SupplierFinder from '@/pages/SupplierFinder';
import SupplierProducts from '@/pages/SupplierProducts';
import Competitors from '@/pages/Competitors';
import CompetitorAnalysis from '@/pages/CompetitorAnalysis';
import CompetitorTracker from '@/pages/CompetitorTracker';
import SavedProducts from '@/pages/SavedProducts';
import ActivityLog from '@/pages/ActivityLog';
import Settings from '@/pages/Settings';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import FAQ from '@/pages/FAQ';
import HelpCenter from '@/pages/HelpCenter';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="app-theme">
        <PersonalizationProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Index />} />
              
              {/* Resource Pages - Will be wrapped with AppLayout for authenticated users */}
              <Route path="/about" element={<AppLayout><AboutUs /></AppLayout>} />
              <Route path="/contact" element={<AppLayout><ContactUs /></AppLayout>} />
              <Route path="/faq" element={<AppLayout><FAQ /></AppLayout>} />
              <Route path="/help" element={<AppLayout><HelpCenter /></AppLayout>} />
              <Route path="/blog" element={<AppLayout><Blog /></AppLayout>} />
              <Route path="/careers" element={<AppLayout><Careers /></AppLayout>} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
              <Route path="/product-trends" element={<AppLayout><ProductTrends /></AppLayout>} />
              <Route path="/product-analysis/:id" element={<AppLayout><ProductAnalysis /></AppLayout>} />
              <Route path="/market-analysis" element={<AppLayout><MarketAnalysis /></AppLayout>} />
              <Route path="/cross-niche-discovery" element={<AppLayout><CrossNicheDiscovery /></AppLayout>} />
              <Route path="/suppliers" element={<AppLayout><Suppliers /></AppLayout>} />
              <Route path="/supplier-finder" element={<AppLayout><SupplierFinder /></AppLayout>} />
              <Route path="/supplier-products/:id" element={<AppLayout><SupplierProducts /></AppLayout>} />
              <Route path="/competitors" element={<AppLayout><Competitors /></AppLayout>} />
              <Route path="/competitor-analysis/:id" element={<AppLayout><CompetitorAnalysis /></AppLayout>} />
              <Route path="/competitor-tracker" element={<AppLayout><CompetitorTracker /></AppLayout>} />
              <Route path="/saved-products" element={<AppLayout><SavedProducts /></AppLayout>} />
              <Route path="/activity-log" element={<AppLayout><ActivityLog /></AppLayout>} />
              <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </Router>
        </PersonalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
