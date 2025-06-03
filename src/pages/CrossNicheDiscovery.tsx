
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Search, TrendingUp, Brain, BarChart3, ShoppingCart, Globe, Target } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { BackButton } from "@/components/ui/back-button";

const CrossNicheDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("profitability");
  const [timeRange, setTimeRange] = useState("7d");
  const [showAdvancedMetrics, setShowAdvancedMetrics] = useState(true);
  const [priceRange, setPriceRange] = useState("all");
  
  const navigate = useNavigate();

  // Generate cross-niche products (expand mockProducts to represent all niches)
  const crossNicheProducts = Array.from({ length: 50 }, (_, i) => {
    const baseProduct = mockProducts[i % mockProducts.length];
    const niches = ['Tech', 'Fashion', 'Home & Garden', 'Beauty', 'Sports', 'Pet Supplies', 'Health & Wellness', 'Automotive', 'Books & Media', 'Food & Beverage'];
    const randomNiche = niches[Math.floor(Math.random() * niches.length)];
    
    return {
      ...baseProduct,
      id: `cross-${i}`,
      name: `${baseProduct.name} ${i + 1}`,
      category: randomNiche,
      profitMargin: Math.floor(Math.random() * 40) + 30,
      supplierCount: Math.floor(Math.random() * 50) + 5,
      competitionLevel: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      demandTrend: Math.random() > 0.5 ? 'rising' : 'stable',
      saturationLevel: Math.floor(Math.random() * 100),
      breakoutPotential: Math.floor(Math.random() * 100),
      averageCPC: (Math.random() * 2 + 0.5).toFixed(2),
      conversionRate: (Math.random() * 5 + 2).toFixed(1)
    };
  });

  const filteredProducts = crossNicheProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = priceRange === "all" || 
      (priceRange === "low" && product.price < 25) ||
      (priceRange === "medium" && product.price >= 25 && product.price <= 100) ||
      (priceRange === "high" && product.price > 100);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "profitability") return b.profitMargin - a.profitMargin;
    if (sortBy === "popularity") return b.trendScore - a.trendScore;
    if (sortBy === "growth") return b.growth - a.growth;
    if (sortBy === "competition") return a.saturationLevel - b.saturationLevel;
    return 0;
  });

  const categories = ["all", ...Array.from(new Set(crossNicheProducts.map(p => p.category)))];

  return (
    <div className="space-y-6 mx-4 lg:mx-8 xl:mx-12">
      <div className="animate-fade-in">
        <BackButton />
        <h1 className="text-3xl font-bold mb-2">Cross-Niche Product Discovery</h1>
        <p className="text-muted-foreground">Discover top-selling products across all market niches with AI-powered insights</p>
      </div>

      {/* Header Card */}
      <Card className="fluent-card bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-green-600" />
              <div>
                <div className="font-medium">Global Market Analysis</div>
                <div className="text-sm text-muted-foreground">
                  Analyzing top-selling products across {categories.length - 1} market niches
                </div>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400">
              {sortedProducts.length} Products Found
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Search and Filters */}
      <Card className="fluent-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Advanced Cross-Niche Search & Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search across all niches..."
                className="pl-10 fluent-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="All Niches" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Niches" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="profitability">Profitability</SelectItem>
                <SelectItem value="popularity">AI Trend Score</SelectItem>
                <SelectItem value="growth">Growth Rate</SelectItem>
                <SelectItem value="competition">Low Competition</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $25</SelectItem>
                <SelectItem value="medium">$25 - $100</SelectItem>
                <SelectItem value="high">Over $100</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Switch
                id="advanced-metrics"
                checked={showAdvancedMetrics}
                onCheckedChange={setShowAdvancedMetrics}
              />
              <Label htmlFor="advanced-metrics" className="text-sm flex items-center space-x-1">
                <BarChart3 className="h-3 w-3" />
                <span>Advanced</span>
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.slice(0, 30).map((product, index) => (
          <Card 
            key={product.id} 
            className="fluent-card hover:shadow-fluentHover transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardHeader className="pb-4">
              <div className="aspect-video bg-muted rounded-fluent mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </div>
                <div className="flex flex-col space-y-1">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400">
                    {product.profitMargin}% profit
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AI: {product.trendScore}/10
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium">${product.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Growth:</span>
                    <span className="font-medium text-green-500">+{product.growth}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Suppliers:</span>
                    <span className="font-medium">{product.supplierCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Competition:</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        product.competitionLevel === 'Low' ? 'text-green-600' :
                        product.competitionLevel === 'Medium' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}
                    >
                      {product.competitionLevel}
                    </Badge>
                  </div>
                </div>

                {showAdvancedMetrics && (
                  <div className="space-y-2 pt-2 border-t border-muted/50">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Conversion Rate:</span>
                      <span className="font-medium">{product.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg CPC:</span>
                      <span className="font-medium">${product.averageCPC}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Market Saturation:</span>
                      <span className="font-medium">{product.saturationLevel}%</span>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="fluent-button"
                    onClick={() => navigate(`/product-analysis/${product.id}`)}
                  >
                    <BarChart3 className="h-3 w-3 mr-1" />
                    Deep Analysis
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Find Suppliers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <Card className="fluent-card">
          <CardContent className="py-12 text-center">
            <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CrossNicheDiscovery;
