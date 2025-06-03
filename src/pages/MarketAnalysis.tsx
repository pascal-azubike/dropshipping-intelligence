import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BackButton } from '@/components/ui/back-button';
import { TrendingUp, Globe, Brain, Target, Users, DollarSign, BarChart3, Zap, Search } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';
import { useNavigate } from 'react-router-dom';

interface MarketNiche {
  id: string;
  name: string;
  growth: number;
  marketSize: string;
  competition: 'Low' | 'Medium' | 'High';
  profitability: number;
  trends: string[];
  topProducts: string[];
  aiInsight: string;
  opportunity: 'High' | 'Medium' | 'Low';
}

const marketNiches: MarketNiche[] = [
  {
    id: '1',
    name: 'Smart Home Automation',
    growth: 156,
    marketSize: '$24.8B',
    competition: 'Medium',
    profitability: 73,
    trends: ['Voice Control', 'Energy Efficiency', 'Security Integration'],
    topProducts: ['Smart Lights', 'Security Cameras', 'Smart Plugs'],
    aiInsight: 'Massive growth driven by IoT adoption and energy consciousness. Early market with room for innovation.',
    opportunity: 'High'
  },
  {
    id: '2',
    name: 'Sustainable Living',
    growth: 289,
    marketSize: '$15.6B',
    competition: 'Low',
    profitability: 81,
    trends: ['Zero Waste', 'Eco-Friendly Materials', 'Renewable Energy'],
    topProducts: ['Bamboo Products', 'Solar Chargers', 'Reusable Containers'],
    aiInsight: 'Climate consciousness driving explosive growth. Low competition window closing fast.',
    opportunity: 'High'
  },
  {
    id: '3',
    name: 'Pet Tech & Wellness',
    growth: 198,
    marketSize: '$19.2B',
    competition: 'Medium',
    profitability: 69,
    trends: ['Pet Health Monitoring', 'Smart Feeding', 'GPS Tracking'],
    topProducts: ['Smart Collars', 'Automatic Feeders', 'Pet Cameras'],
    aiInsight: 'Pet humanization trend creating premium market opportunities with loyal customers.',
    opportunity: 'High'
  },
  {
    id: '4',
    name: 'Remote Work Solutions',
    growth: 167,
    marketSize: '$32.4B',
    competition: 'High',
    profitability: 56,
    trends: ['Ergonomic Design', 'Productivity Tools', 'Home Office Setup'],
    topProducts: ['Standing Desks', 'Webcam Lights', 'Noise Cancelling'],
    aiInsight: 'Permanent shift to remote work creating sustained demand for office optimization.',
    opportunity: 'Medium'
  },
  {
    id: '5',
    name: 'Mental Health & Wellness',
    growth: 234,
    marketSize: '$13.2B',
    competition: 'Low',
    profitability: 78,
    trends: ['Mindfulness', 'Sleep Optimization', 'Stress Relief'],
    topProducts: ['Meditation Apps', 'Sleep Trackers', 'Aromatherapy'],
    aiInsight: 'Mental health awareness boom creating new product categories with premium pricing.',
    opportunity: 'High'
  },
  {
    id: '6',
    name: 'Gaming & Esports',
    growth: 145,
    marketSize: '$45.8B',
    competition: 'High',
    profitability: 62,
    trends: ['Mobile Gaming', 'Streaming Setup', 'VR Gaming'],
    topProducts: ['Gaming Chairs', 'RGB Keyboards', 'Streaming Lights'],
    aiInsight: 'Esports mainstreaming driving peripheral demand. Focus on mobile gaming accessories.',
    opportunity: 'Medium'
  }
];

const MarketAnalysis = () => {
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const { setCurrentNiche } = usePersonalization();
  const navigate = useNavigate();

  const handleNicheSelect = (niche: MarketNiche) => {
    setSelectedNiche(niche.id);
    setCurrentNiche(niche.name);
  };

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case 'High': return 'text-green-600 bg-green-50 dark:bg-green-950/20 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200';
      case 'Low': return 'text-red-600 bg-red-50 dark:bg-red-950/20 border-red-200';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950/20 border-gray-200';
    }
  };

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-500 bg-green-50 dark:bg-green-950/20';
      case 'Medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20';
      case 'High': return 'text-red-500 bg-red-50 dark:bg-red-950/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 lg:px-8 xl:px-12 py-6">
      <BackButton />
      
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">AI Market Intelligence</h1>
          <p className="text-muted-foreground">Discover trending niches and market opportunities with AI-powered analysis</p>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate('/cross-niche-discovery')}
            className="h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
          >
            <Search className="h-5 w-5 mr-2" />
            <div className="text-left">
              <div className="font-semibold">Discover New Niches</div>
              <div className="text-sm opacity-90">Browse top products across all markets</div>
            </div>
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/product-trends')}
            className="h-16"
          >
            <BarChart3 className="h-5 w-5 mr-2" />
            <div className="text-left">
              <div className="font-semibold">Advanced Product Analysis</div>
              <div className="text-sm text-muted-foreground">Deep dive into current niche</div>
            </div>
          </Button>
        </div>

        {/* Market Overview */}
        <Card className="fluent-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xl font-bold">Global E-commerce Market Analysis</div>
                <div className="text-muted-foreground">Real-time insights across 50+ market segments</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white/50 dark:bg-black/10 rounded-fluent">
                <div className="text-2xl font-bold text-blue-600">$5.7T</div>
                <div className="text-sm text-muted-foreground">Total Market Size</div>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-black/10 rounded-fluent">
                <div className="text-2xl font-bold text-green-600">+187%</div>
                <div className="text-sm text-muted-foreground">Avg Growth Rate</div>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-black/10 rounded-fluent">
                <div className="text-2xl font-bold text-purple-600">23</div>
                <div className="text-sm text-muted-foreground">High Opportunity</div>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-black/10 rounded-fluent">
                <div className="text-2xl font-bold text-orange-600">67%</div>
                <div className="text-sm text-muted-foreground">Avg Profit Margin</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Niches Grid */}
        <div className="grid gap-6">
          {marketNiches.map((niche, index) => (
            <Card 
              key={niche.id}
              className={`fluent-card hover:shadow-fluentHover transition-all duration-300 animate-scale-in cursor-pointer ${
                selectedNiche === niche.id ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleNicheSelect(niche)}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl font-bold">{niche.name}</h3>
                      <Badge className={getOpportunityColor(niche.opportunity)}>
                        <Target className="h-3 w-3 mr-1" />
                        {niche.opportunity} Opportunity
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{niche.marketSize}</div>
                      <div className="text-sm text-muted-foreground">Market Size</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="font-bold text-green-600">+{niche.growth}%</div>
                        <div className="text-xs text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-bold text-blue-600">{niche.profitability}%</div>
                        <div className="text-xs text-muted-foreground">Avg Profit</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4 text-purple-500" />
                      <div>
                        <Badge variant="outline" className={getCompetitionColor(niche.competition)}>
                          {niche.competition} Competition
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-orange-500" />
                      <div>
                        <div className="font-bold">{niche.topProducts.length}</div>
                        <div className="text-xs text-muted-foreground">Top Products</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trends & Products */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Trending Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {niche.trends.map((trend, idx) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          <Zap className="h-3 w-3 mr-1" />
                          {trend}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Top Product Categories:</div>
                    <div className="flex flex-wrap gap-2">
                      {niche.topProducts.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Insight */}
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-fluent border-l-4 border-orange-500">
                    <div className="flex items-start space-x-2">
                      <Brain className="h-4 w-4 text-orange-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-orange-700 dark:text-orange-300 text-sm">AI Market Intelligence</div>
                        <div className="text-sm text-orange-600 dark:text-orange-400">{niche.aiInsight}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <Button 
                    className="w-full fluent-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNicheSelect(niche);
                    }}
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Focus on {niche.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
