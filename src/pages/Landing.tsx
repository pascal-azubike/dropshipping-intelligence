import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { LandingFooter } from '@/components/Layout/LandingFooter';

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Discover Winning Products with AI-Powered Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Get real-time market analysis, competitor insights, and trend predictions to make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/product-trends">Explore Trends</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections */}
        // ... rest of the existing code ...
      </main>
      <LandingFooter />
    </div>
  );
}; 