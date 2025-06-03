import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { TopNavbar } from './TopNavbar';
import { SidebarTrigger, SidebarProvider } from '@/components/ui/sidebar';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background">
        <TopNavbar />
        <div className="flex h-[calc(100vh-var(--navbar-height))] pt-[var(--navbar-height)] ">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6 mt-12">
              {children}
            </div>
          </main>
        </div>
        <SidebarTrigger />
      </div>
    </SidebarProvider>
  );
};
