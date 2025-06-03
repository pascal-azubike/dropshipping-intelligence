import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, TrendingDown, Minus, Brain, AlertTriangle, Plus, BarChart3, Target } from "lucide-react";
import { mockCompetitors } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { BackButton } from "@/components/ui/back-button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { NicheFocus } from "@/components/ui/niche-focus";
import { usePersonalization } from "@/hooks/usePersonalization";

const Competitors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("threat_level");
  const [showProductAnalysis, setShowProductAnalysis] = useState(true);
  const { toast } = useToast();
  const { currentNiche } = usePersonalization();
  const navigate = useNavigate();

  // Enhanced competitors with product portfolio
  const enhancedCompetitors = mockCompetitors.map(competitor => ({
    ...competitor,
    productPortfolio: [
      { name: 'Premium Wireless Earbuds', price: 89.99, sales: 1200, rank: '#3 in category', trend: 'rising' },
      { name: 'Smart Phone Accessories', price: 24.99, sales: 800, rank: '#7 in category', trend: 'stable' },
      { name: 'Tech Gadgets Bundle', price: 149.99, sales: 450, rank: '#12 in category', trend: 'falling' }
    ].slice(0, Math.floor(Math.random() * 3) + 1),
    monthlyRevenue: Math.floor(Math.random() * 50000) + 20000,
    averageOrderValue: Math.floor(Math.random() * 100) + 50,
    conversionRate: (Math.random() * 3 + 2).toFixed(1),
    trafficSources: {
      organic: Math.floor(Math.random() * 40) + 30,
      paid: Math.floor(Math.random() * 30) + 20,
      social: Math.floor(Math.random() * 20) + 10,
      direct: Math.floor(Math.random() * 20) + 10
    },
    threatLevel: ['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)],
    marketShare: (Math.random() * 15 + 2).toFixed(1)
  }));

  const sortedCompetitors = [...enhancedCompetitors].sort((a, b) => {
    if (sortBy === "threat_level") {
      const threatOrder = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
      return threatOrder[b.threatLevel as keyof typeof threatOrder] - threatOrder[a.threatLevel as keyof typeof threatOrder];
    }
    if (sortBy === "revenue") return b.monthlyRevenue - a.monthlyRevenue;
    if (sortBy === "market_share") return parseFloat(b.marketShare) - parseFloat(a.marketShare);
    return 0;
  });

  const filteredCompetitors = sortedCompetitors.filter(competitor =>
    competitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCompetitor = () => {
    toast({
      title: "AI Discovery Started",
      description: "Scanning the market for new competitors in your niche...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <BackButton />
        <h1 className="text-3xl font-bold mb-2">Advanced Competitor Intelligence</h1>
        <p className="text-muted-foreground">Monitor competitor products, pricing strategies, and market positioning with AI analysis</p>
      </div>

      {/* AI Insights Banner */}
      <Card className="fluent-card bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <div className="font-medium">AI monitoring {currentNiche} competitor activities across platforms</div>
              <div className="text-sm text-muted-foreground">
                Real-time tracking of pricing, product launches, traffic, and customer reviews from Shopify, Amazon, and eBay stores
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Search and Filters */}
      <Card className="fluent-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Competitor Search & Analysis Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search competitors or let AI discover new ones..."
                className="pl-10 fluent-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="threat_level">Threat Level</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="market_share">Market Share</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddCompetitor} className="fluent-button">
              <Plus className="h-4 w-4 mr-2" />
              AI Discover
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                id="product-analysis"
                checked={showProductAnalysis}
                onCheckedChange={setShowProductAnalysis}
              />
              <Label htmlFor="product-analysis" className="text-sm">
                Product Analysis
              </Label>
            </div>
          </div>
          <NicheFocus showSettings={true} />
        </CardContent>
      </Card>

      {/* Enhanced Competitors List */}
      <div className="space-y-4">
        {filteredCompetitors.map((competitor, index) => (
          <Card 
            key={competitor.id}
            className="fluent-card hover:shadow-fluentHover transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4">
                {/* Header with Threat Level */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{competitor.name}</h3>
                      <Badge 
                        variant="outline"
                        className={
                          competitor.threatLevel === 'Critical' ? 'text-red-600 bg-red-50 dark:bg-red-950/20' :
                          competitor.threatLevel === 'High' ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/20' :
                          competitor.threatLevel === 'Medium' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20' :
                          'text-green-600 bg-green-50 dark:bg-green-950/20'
                        }
                      >
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {competitor.threatLevel} Threat
                      </Badge>
                      <Badge variant="secondary">
                        {competitor.marketShare}% Market Share
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Monthly Revenue: </span>
                        <span className="font-medium">${competitor.monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">AOV: </span>
                        <span className="font-medium">${competitor.averageOrderValue}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Conversion: </span>
                        <span className="font-medium">{competitor.conversionRate}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Products: </span>
                        <span className="font-medium">{competitor.productCount}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Portfolio Preview */}
                {showProductAnalysis && (
                  <div className="p-3 md:p-4 bg-muted/30 rounded-fluent">
                    <div className="text-sm font-medium mb-3">Top Products in {currentNiche}:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {competitor.productPortfolio.map((product: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center p-2 bg-background rounded border">
                          <div className="min-w-0">
                            <div className="font-medium text-sm truncate">{product.name}</div>
                            <div className="text-xs text-muted-foreground">{product.rank}</div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-2">
                            <div className="font-medium">${product.price}</div>
                            <div className="flex items-center space-x-1">
                              {product.trend === 'rising' ? 
                                <TrendingUp className="h-3 w-3 text-green-500" /> :
                                product.trend === 'falling' ? 
                                <TrendingDown className="h-3 w-3 text-red-500" /> :
                                <Minus className="h-3 w-3 text-yellow-500" />
                              }
                              <span className="text-xs">{product.sales}/mo</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Insights */}
                {competitor.aiInsight && (
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-fluent border-l-4 border-orange-500">
                    <div className="flex items-start space-x-2">
                      <Brain className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-orange-700 dark:text-orange-300 text-sm">AI Competitive Intelligence</div>
                        <div className="text-sm text-orange-600 dark:text-orange-400 line-clamp-2">{competitor.aiInsight}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-2 border-t border-muted/50">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Real-time Monitoring</Badge>
                    <Badge variant="outline">Price Tracking</Badge>
                    <Badge variant="outline">Product Analysis</Badge>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="fluent-button w-full sm:w-auto"
                    onClick={() => navigate(`/competitor-analysis/${competitor.id}`)}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Deep Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCompetitors.length === 0 && (
        <Card className="fluent-card">
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No competitors found</h3>
            <p className="text-muted-foreground">Try searching for different competitors or let AI discover them for you</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Competitors;
