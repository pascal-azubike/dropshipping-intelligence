
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Users, Zap, Award, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { LandingFooter } from '@/components/Layout/LandingFooter';
import { BackButton } from '@/components/ui/back-button';

const AboutUs = () => {
  const { isAuthenticated } = useAuth();

  const content = (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {isAuthenticated && <BackButton />}
        
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About TrendSpy AI</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Dropshipping Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize e-commerce success by providing AI-powered insights that help entrepreneurs discover profitable products and build thriving businesses.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="fluent-card">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To empower entrepreneurs worldwide with AI-driven market intelligence, making product discovery and dropshipping success accessible to everyone, regardless of their experience level.
              </p>
            </CardContent>
          </Card>

          <Card className="fluent-card">
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted platform for e-commerce intelligence, enabling millions of entrepreneurs to build successful businesses through data-driven decisions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fluent-card text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI-Powered Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced machine learning algorithms analyze millions of data points to identify trending products with high profit potential.
                </p>
              </CardContent>
            </Card>

            <Card className="fluent-card text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Real-Time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get instant access to market trends, competitor analysis, and supplier information updated in real-time across all major platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="fluent-card text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform has helped thousands of entrepreneurs identify profitable products, with an average 87% accuracy rate in trend predictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fluent-card text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JS</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">John Smith</h3>
                <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former Amazon executive with 15+ years in e-commerce and AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="fluent-card text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SC</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Machine learning expert and former Google AI researcher specializing in market prediction algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="fluent-card text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MR</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Mike Rodriguez</h3>
                <p className="text-primary font-medium mb-2">VP of Product</p>
                <p className="text-muted-foreground text-sm">
                  Product strategist with deep expertise in e-commerce platforms and user experience design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <Card className="fluent-card bg-gradient-to-r from-primary/10 to-blue-600/10">
          <CardContent className="p-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10M+</div>
                <div className="text-muted-foreground">Products Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">87%</div>
                <div className="text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Real-time Updates</div>
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
        <LandingFooter />
      </>
    );
  }

  return content;
};

export default AboutUs;
