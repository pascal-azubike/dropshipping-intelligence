import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ShoppingCart, ExternalLink, Brain } from 'lucide-react';
import { TrendingProduct } from '@/types/trendingProducts';
import { getCompetitionColor } from '@/utils/productUtils';
import { useNavigate } from 'react-router-dom';

interface TrendingProductItemProps {
  product: TrendingProduct;
  index: number;
}

export const TrendingProductItem: React.FC<TrendingProductItemProps> = ({ product, index }) => {
  const navigate = useNavigate();

  const handleDeepAnalysis = () => {
    navigate(`/product-analysis/${product.id}`);
  };

  const handleFindSuppliers = () => {
    navigate('/suppliers');
  };

  return (
    <div className="max-w-4xl mx-auto p-3 md:p-4 rounded-fluent bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/30 transition-all duration-300 border border-muted/50">
      <div className="flex flex-col gap-4">
        {/* Product Header: Image and Info */}
        <div className="flex gap-4">
          {/* Left: Image */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-fluent object-cover shadow-sm"
          />

          {/* Right: Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-semibold text-base md:text-lg truncate mb-1">{product.name}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="font-medium">${product.price}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="truncate">{product.searchVolume.toLocaleString()} searches/mo</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{product.supplierCount} suppliers</span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-medium w-fit">
                AI Score: {product.trendScore}/10
              </Badge>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-1.5 bg-muted/30 p-1.5 rounded-md">
            <TrendingUp className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-muted-foreground">Growth</span>
              <span className="font-medium text-green-600">+{product.growth}%</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-muted/30 p-1.5 rounded-md">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Profit</span>
              <span className="font-medium text-blue-600">{product.profitMargin}%</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-muted/30 p-1.5 rounded-md">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Demand</span>
              <span className="font-medium">{product.demandLevel}/100</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-muted/30 p-1.5 rounded-md">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Competition</span>
              <Badge variant="outline" className={`${getCompetitionColor(product.competition)} text-xs px-1.5 py-0 h-5`}>
                {product.competition}
              </Badge>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 sm:flex-none text-xs md:text-sm"
            onClick={handleFindSuppliers}
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
            <span className="hidden sm:inline">Find Suppliers</span>
            <span className="sm:hidden">Suppliers</span>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 sm:flex-none text-xs md:text-sm"
            onClick={handleDeepAnalysis}
          >
            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
            <span className="hidden sm:inline">Deep Analysis</span>
            <span className="sm:hidden">Analysis</span>
          </Button>
        </div>

        {/* AI Insight */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <Brain className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h5 className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">AI Insight</h5>
              <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed line-clamp-2">{product.aiInsight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
