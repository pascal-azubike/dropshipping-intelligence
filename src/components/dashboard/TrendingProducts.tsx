
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Brain, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePersonalization } from '@/hooks/usePersonalization';
import { mockTrendingProducts } from '@/data/trendingProductsData';
import { TrendingProductItem } from './TrendingProductItem';

export const TrendingProducts = () => {
  const { currentNiche } = usePersonalization();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Niche Discovery Feature */}
      <Card className="fluent-card bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 md:h-8 md:w-8 text-purple-600 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-purple-800 dark:text-purple-300">Discover High-Potential Niches</h3>
                <p className="text-sm md:text-base text-purple-600 dark:text-purple-400">AI-powered market analysis to find untapped opportunities</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/market-analysis')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full lg:w-auto"
            >
              <Target className="h-4 w-4 mr-2" />
              Analyze All Markets
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Products */}
      <Card className="fluent-card">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="truncate">Top 15 Trending Products in {currentNiche}</span>
          </CardTitle>
          <CardDescription className="text-sm md:text-base">AI-analyzed trending products with real-time profitability insights</CardDescription>
        </CardHeader>
        <CardContent className="p-3 md:p-6">
          <div className="space-y-4">
            {mockTrendingProducts.map((product, index) => (
              <TrendingProductItem
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
