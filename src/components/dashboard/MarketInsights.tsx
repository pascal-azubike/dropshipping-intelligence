import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, AlertTriangle, Target, Zap, Clock } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';

interface MarketInsight {
  id: string;
  type: 'opportunity' | 'warning' | 'trend' | 'strategy';
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  urgency: 'Immediate' | 'This Week' | 'This Month';
  confidence: number;
  source: string;
}

const mockInsights: MarketInsight[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Eco-Friendly Products Surge',
    description: 'Sustainable tech products showing 340% increase in searches. Limited supplier competition.',
    impact: 'High',
    urgency: 'This Week',
    confidence: 94,
    source: 'Google Trends, Amazon BSR'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Pricing War Alert',
    description: 'Major competitors dropping prices on wireless earbuds by 25%. Consider pivoting or unique positioning.',
    impact: 'High',
    urgency: 'Immediate',
    confidence: 89,
    source: 'Competitor Analysis'
  },
  {
    id: '3',
    type: 'trend',
    title: 'TikTok Viral Product Wave',
    description: 'LED room lighting gaining massive traction on TikTok. 500% search increase in 7 days.',
    impact: 'Medium',
    urgency: 'Immediate',
    confidence: 96,
    source: 'TikTok API, Social Listening'
  }
];

export const MarketInsights = () => {
  const { currentNiche } = usePersonalization();

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <Target className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'trend': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      case 'strategy': return <Zap className="h-4 w-4 text-purple-500" />;
      default: return <Brain className="h-4 w-4 text-gray-500" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Immediate': return 'text-red-600 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800';
      case 'This Week': return 'text-orange-600 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800';
      case 'This Month': return 'text-blue-600 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-700 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800';
      case 'Medium': return 'text-yellow-700 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800';
      case 'Low': return 'text-gray-700 bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
      default: return 'text-gray-700 bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <Card className="">
      <CardHeader className="space-y-1.5">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Market Intelligence - {currentNiche}</span>
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Real-time insights from Google Trends, TikTok, Amazon & Shopify
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockInsights.map((insight) => (
            <div
              key={insight.id}
              className="p-3 md:p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
            >
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {getInsightIcon(insight.type)}
                  <h4 className="font-semibold text-sm md:text-base">{insight.title}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={`${getUrgencyColor(insight.urgency)} text-xs`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {insight.urgency}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
              
              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                <span className="text-muted-foreground">Source: {insight.source}</span>
                <Badge 
                  variant="outline" 
                  className={`${getImpactColor(insight.impact)} text-xs`}
                >
                  {insight.impact} Impact
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
