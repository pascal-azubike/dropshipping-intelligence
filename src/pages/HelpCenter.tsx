import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, MessageCircle, FileText, Lightbulb, Users } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { BackButton } from '@/components/ui/back-button';

const HelpCenter = () => {
  const { isAuthenticated } = useAuth();

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of TrendSpy AI",
      icon: Lightbulb,
      articles: [
        "Setting up your first analysis",
        "Understanding trend predictions",
        "Connecting your store",
        "Basic navigation guide"
      ]
    },
    {
      title: "Product Research",
      description: "Master product discovery and analysis",
      icon: BookOpen,
      articles: [
        "Advanced search techniques",
        "Reading trend indicators",
        "Competitor analysis tools",
        "Market timing strategies"
      ]
    },
    {
      title: "Supplier Management",
      description: "Find and manage reliable suppliers",
      icon: Users,
      articles: [
        "Supplier verification process",
        "Negotiating better terms",
        "Quality control tips",
        "Communication best practices"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      articles: [
        "Complete platform walkthrough",
        "Advanced filtering techniques",
        "Setting up alerts",
        "Integration tutorials"
      ]
    }
  ];

  const content = (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        {isAuthenticated && <BackButton />}
        
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Help Center</Badge>
          <h1 className="text-4xl font-bold mb-6">
            How can we
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> help you?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find guides, tutorials, and resources to help you succeed with TrendSpy AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpCategories.map((category, index) => (
            <Card key={index} className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      • {article}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 text-primary mr-2" />
                Live Chat Support
              </CardTitle>
              <CardDescription>
                Get instant help from our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our support team is available 24/7 to help you with any questions or issues you might have.
              </p>
              <Button className="w-full">
                Start Live Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="fluent-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 text-primary mr-2" />
                Documentation
              </CardTitle>
              <CardDescription>
                Comprehensive guides and API references
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access detailed documentation, API references, and integration guides.
              </p>
              <Button variant="outline" className="w-full">
                View Documentation
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="fluent-card">
          <CardHeader>
            <CardTitle className="text-center">Popular Resources</CardTitle>
            <CardDescription className="text-center">
              Most accessed help articles and guides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Platform Setup Guide</h4>
                <p className="text-sm text-muted-foreground">Complete walkthrough of setting up your TrendSpy AI account</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Trend Analysis 101</h4>
                <p className="text-sm text-muted-foreground">Learn how to interpret and act on trend data</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Supplier Verification</h4>
                <p className="text-sm text-muted-foreground">Best practices for vetting and working with suppliers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <>
        <LandingNavbar />
        {content}
      </>
    );
  }

  return content;
};

export default HelpCenter;
