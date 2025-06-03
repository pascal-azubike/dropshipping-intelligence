import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export const LandingNavbar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <Logo size="sm" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/product-trends" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/product-trends') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Product Trends
              </Link>
              <Link 
                to="/competitors" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/competitors') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Competitors
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/help-center" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/help-center') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Help Center
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
