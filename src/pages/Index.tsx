import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Users, Zap, BarChart3, Target, Sparkles, ChevronRight, Star, CheckCircle } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="fluent-button">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered Dropshipping Intelligence
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Find Winning Products
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Before Everyone Else
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Advanced AI analyzes millions of data points across social media, search trends, and competitor stores to discover trending products with high profit potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/signup">
                <Button size="lg" className="fluent-button text-lg px-8 py-3">
                  <Brain className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need to
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Dominate Dropshipping</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered platform gives you the competitive edge with real-time market intelligence and automated insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI Trend Detection</CardTitle>
                  <CardDescription>
                    Discover viral products before they explode with our advanced AI that monitors TikTok, Instagram, and YouTube trends.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Profit Analysis</CardTitle>
                  <CardDescription>
                    Get detailed profit margin calculations, supplier pricing, and competition analysis for every product opportunity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl">Competitor Intelligence</CardTitle>
                  <CardDescription>
                    Monitor competitor stores, track their product launches, pricing changes, and traffic sources in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Supplier Network</CardTitle>
                  <CardDescription>
                    Access verified suppliers with pricing, shipping times, and quality ratings. Compare and contact instantly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Market Analytics</CardTitle>
                  <CardDescription>
                    Deep market insights with search volume, demand trends, and saturation levels for informed decision making.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="fluent-card group hover:shadow-fluentHover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-fluent flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                    <Brain className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">Smart Automation</CardTitle>
                  <CardDescription>
                    Automated alerts for trending products, price changes, and market opportunities. Never miss a winning product again.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Find Your Next
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Winning Product?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful dropshippers who use TrendSpy AI to stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="fluent-button text-lg px-8 py-3">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Your Free Trial
                </Button>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>4.9/5 from 2,000+ users</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Logo className="h-6 w-6" />
                
              </div>
              <p className="text-sm text-muted-foreground">
                The most advanced AI-powered dropshipping intelligence platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TrendSpy AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;

