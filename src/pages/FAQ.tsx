
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useAuth } from '@/hooks/useAuth';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { LandingFooter } from '@/components/Layout/LandingFooter';
import { BackButton } from '@/components/ui/back-button';

const FAQ = () => {
  const { isAuthenticated } = useAuth();

  const faqs = [
    {
      question: "How does TrendSpy AI identify trending products?",
      answer: "Our AI analyzes millions of data points from multiple sources including social media, search trends, e-commerce platforms, and market data to identify products with high growth potential."
    },
    {
      question: "What makes TrendSpy AI different from other tools?",
      answer: "We combine real-time data analysis with advanced machine learning algorithms to provide not just trend identification, but also supplier matching, competition analysis, and profit margin predictions."
    },
    {
      question: "How accurate are the trend predictions?",
      answer: "Our AI models have a 87% accuracy rate in predicting product trends over a 30-day period, based on historical data validation and continuous learning algorithms."
    },
    {
      question: "Can I integrate TrendSpy AI with my existing store?",
      answer: "Yes, we offer integrations with major e-commerce platforms including Shopify, WooCommerce, and Amazon. Our API allows seamless data flow between platforms."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support, comprehensive documentation, video tutorials, and a dedicated success manager for enterprise customers."
    },
    {
      question: "How often is the data updated?",
      answer: "Our data is updated in real-time. Product trends, supplier information, and market analysis are continuously refreshed to ensure you have the most current insights."
    }
  ];

  const content = (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {isAuthenticated && <BackButton />}
        
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Frequently Asked Questions</Badge>
          <h1 className="text-4xl font-bold mb-6">
            Everything you need to know about
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> TrendSpy AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered dropshipping intelligence platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="fluent-card">
              <Collapsible>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left flex items-center">
                        <HelpCircle className="h-5 w-5 text-primary mr-3" />
                        {faq.question}
                      </CardTitle>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <Card className="fluent-card mt-12">
          <CardHeader>
            <CardTitle className="text-center">Still have questions?</CardTitle>
            <CardDescription className="text-center">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Our support team is available 24/7 to help you succeed with TrendSpy AI.
            </p>
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

export default FAQ;
