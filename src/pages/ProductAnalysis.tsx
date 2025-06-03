import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Target, Users, AlertTriangle, TrendingUp, DollarSign, ShoppingCart, BarChart3, Star, Globe, Calendar, Zap, Eye } from 'lucide-react';
import { mockProducts, mockChartData } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const ProductAnalysis = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Create enhanced products array that matches the ProductTrends page
  const enhancedProducts = Array.from({ length: 10 }, (_, i) => {
    const baseProduct = mockProducts[i % mockProducts.length];
    return {
      ...baseProduct,
      id: `enhanced-${i}`,
      name: `${baseProduct.name} ${i + 1}`,
    };
  });

  // Try to find the product from enhanced products first, then fallback to mockProducts
  let product = enhancedProducts.find(p => p.id === id);
  if (!product) {
    product = mockProducts.find(p => p.id === id);
  }
  
  if (!product) {
    return (
      <div className="space-y-6 mx-4 lg:mx-8 xl:mx-12">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Product Not Found</h1>
            <p className="text-muted-foreground">The requested product could not be found</p>
          </div>
        </div>
        <Card className="fluent-card">
          <CardContent className="py-12 text-center">
            <h3 className="text-lg font-medium mb-2">Product not found</h3>
            <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/product-trends')}>
              Browse Products
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Enhanced product data for comprehensive analysis
  const analysisData = {
    ...product,
    profitMargin: Math.floor(Math.random() * 40) + 30,
    supplierCount: Math.floor(Math.random() * 50) + 5,
    competitionLevel: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
    saturationLevel: Math.floor(Math.random() * 100),
    breakoutPotential: Math.floor(Math.random() * 100),
    averageCPC: Math.random() * 2 + 0.5,
    conversionRate: Math.random() * 5 + 2,
    seasonalTrend: Math.floor(Math.random() * 30) + 10,
    customerRating: Math.random() * 2 + 3,
    returnRate: Math.random() * 10 + 2,
    avgShippingCost: Math.random() * 15 + 5,
    marketSize: Math.floor(Math.random() * 50000000) + 10000000,
    yearOverYearGrowth: Math.floor(Math.random() * 40) + 10
  };

  // Additional chart data
  const seasonalData = [
    { month: 'Jan', sales: 4000, competition: 2400 },
    { month: 'Feb', sales: 3000, competition: 1398 },
    { month: 'Mar', sales: 2000, competition: 9800 },
    { month: 'Apr', sales: 2780, competition: 3908 },
    { month: 'May', sales: 1890, competition: 4800 },
    { month: 'Jun', sales: 2390, competition: 3800 },
    { month: 'Jul', sales: 3490, competition: 4300 },
    { month: 'Aug', sales: 4490, competition: 4100 },
    { month: 'Sep', sales: 3890, competition: 3700 },
    { month: 'Oct', sales: 4290, competition: 4200 },
    { month: 'Nov', sales: 5290, competition: 4900 },
    { month: 'Dec', sales: 6290, competition: 5100 }
  ];

  const demographicData = [
    { name: '18-24', value: 15, color: '#8884d8' },
    { name: '25-34', value: 35, color: '#82ca9d' },
    { name: '35-44', value: 25, color: '#ffc658' },
    { name: '45-54', value: 15, color: '#ff7300' },
    { name: '55+', value: 10, color: '#00c49f' }
  ];

  const competitorData = [
    { name: 'Competitor A', marketShare: 25, price: product.price * 0.9 },
    { name: 'Competitor B', marketShare: 20, price: product.price * 1.1 },
    { name: 'Competitor C', marketShare: 15, price: product.price * 0.8 },
    { name: 'Your Product', marketShare: 12, price: product.price },
    { name: 'Others', marketShare: 28, price: product.price * 1.2 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <Button variant="outline" onClick={() => navigate(-1)} className="w-fit">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name} - Comprehensive Analysis</h1>
          <p className="text-muted-foreground">Complete business intelligence with market positioning and profitability insights</p>
        </div>
      </div>

      {/* Product Overview */}
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Card className="fluent-card">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Left: Image */}
              <div className="w-full sm:w-1/4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-fluent"
                />
              </div>

              {/* Right: Product Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <div className="text-2xl font-bold text-primary">${product.price}</div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{analysisData.customerRating.toFixed(1)}/5.0 rating</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <div className="text-xl font-bold text-green-500">{analysisData.profitMargin}%</div>
                    <div className="text-xs text-muted-foreground">Profit Margin</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-500">{product.trendScore}/10</div>
                    <div className="text-xs text-muted-foreground">AI Trend Score</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-500">{analysisData.supplierCount}</div>
                    <div className="text-xs text-muted-foreground">Suppliers Found</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">${analysisData.averageCPC.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">Avg. CPC</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        <Card className="fluent-card text-center p-3 md:p-4">
          <Eye className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-blue-500" />
          <div className="text-base md:text-lg font-bold">{product.searches.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Monthly Searches</div>
        </Card>
        <Card className="fluent-card text-center p-3 md:p-4">
          <TrendingUp className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-green-500" />
          <div className="text-base md:text-lg font-bold">+{product.growth}%</div>
          <div className="text-xs text-muted-foreground">Growth Rate</div>
        </Card>
        <Card className="fluent-card text-center p-3 md:p-4">
          <DollarSign className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-orange-500" />
          <div className="text-base md:text-lg font-bold">{analysisData.conversionRate.toFixed(1)}%</div>
          <div className="text-xs text-muted-foreground">Conversion Rate</div>
        </Card>
        <Card className="fluent-card text-center p-3 md:p-4">
          <Users className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-purple-500" />
          <div className="text-base md:text-lg font-bold">${(analysisData.marketSize / 1000000).toFixed(0)}M</div>
          <div className="text-xs text-muted-foreground">Market Size</div>
        </Card>
        <Card className="fluent-card text-center p-3 md:p-4">
          <Calendar className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-red-500" />
          <div className="text-base md:text-lg font-bold">{analysisData.seasonalTrend}%</div>
          <div className="text-xs text-muted-foreground">Seasonal Peak</div>
        </Card>
        <Card className="fluent-card text-center p-3 md:p-4">
          <Zap className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-yellow-500" />
          <div className="text-base md:text-lg font-bold">{analysisData.returnRate.toFixed(1)}%</div>
          <div className="text-xs text-muted-foreground">Return Rate</div>
        </Card>
      </div>

      {/* Market Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="fluent-card">
          <CardHeader className="p-4 md:p-6">
            <CardTitle>Market Saturation & Opportunity</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm md:text-base">Market Saturation</span>
                  <span className="font-medium text-sm md:text-base">{analysisData.saturationLevel}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 md:h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-red-500 h-2 md:h-3 rounded-full" 
                    style={{width: `${analysisData.saturationLevel}%`}}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm md:text-base">Breakout Potential</span>
                  <span className="font-medium text-sm md:text-base">{analysisData.breakoutPotential}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 md:h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 md:h-3 rounded-full" 
                    style={{width: `${analysisData.breakoutPotential}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fluent-card">
          <CardHeader className="p-4 md:p-6">
            <CardTitle>Customer Demographics</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="fluent-card">
          <CardHeader className="p-4 md:p-6">
            <CardTitle>Seasonal Trends Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={seasonalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#0078D4" fill="#0078D4" fillOpacity={0.6} name="Sales Volume" />
                <Area type="monotone" dataKey="competition" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Competition Level" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="fluent-card">
          <CardHeader className="p-4 md:p-6">
            <CardTitle>Competitive Landscape</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="marketShare" fill="#8884d8" name="Market Share %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="fluent-card">
        <CardHeader className="p-4 md:p-6">
          <CardTitle>Detailed Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-sm">
            <div>
              <span className="text-muted-foreground">Monthly Revenue Potential:</span>
              <span className="font-medium ml-2">${(product.searches * analysisData.conversionRate * product.price / 10000).toFixed(0)}K</span>
            </div>
            <div>
              <span className="text-muted-foreground">Avg Shipping Cost:</span>
              <span className="font-medium ml-2">${analysisData.avgShippingCost.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Year-over-Year Growth:</span>
              <span className="font-medium text-green-500 ml-2">+{analysisData.yearOverYearGrowth}%</span>
            </div>
            <div>
              <span className="text-muted-foreground">Competition Level:</span>
              <Badge 
                variant="outline" 
                className={
                  analysisData.competitionLevel === 'Low' ? 'text-green-600 bg-green-50 dark:bg-green-950/20' :
                  analysisData.competitionLevel === 'Medium' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20' :
                  'text-red-600 bg-red-50 dark:bg-red-950/20'
                }
              >
                {analysisData.competitionLevel}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Business Intelligence */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">AI Business Intelligence & Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="fluent-card border-l-4 border-green-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <Target className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-medium text-green-700 dark:text-green-300 mb-1">Market Opportunity</div>
                  <div className="text-sm text-green-600 dark:text-green-400 line-clamp-3">
                    Exceptional profit potential with {analysisData.profitMargin}% margin. Market shows {analysisData.yearOverYearGrowth}% YoY growth with low saturation at {analysisData.saturationLevel}%.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="fluent-card border-l-4 border-blue-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-medium text-blue-700 dark:text-blue-300 mb-1">Sourcing Strategy</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 line-clamp-3">
                    {analysisData.supplierCount} verified suppliers. Target cost: ${(product.price * 0.6).toFixed(2)} - ${(product.price * 0.8).toFixed(2)} for optimal margins.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="fluent-card border-l-4 border-orange-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-medium text-orange-700 dark:text-orange-300 mb-1">Risk Assessment</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400 line-clamp-3">
                    {analysisData.competitionLevel} competition. Monitor seasonal trends ({analysisData.seasonalTrend}% peak) and customer satisfaction ({analysisData.customerRating}/5.0).
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 md:gap-4">
        <Button className="fluent-button w-full sm:w-auto" onClick={() => navigate('/suppliers')}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Find Suppliers
        </Button>
        <Button variant="outline" className="fluent-button w-full sm:w-auto">
          <BarChart3 className="h-4 w-4 mr-2" />
          Track Product
        </Button>
        <Button variant="outline" className="fluent-button w-full sm:w-auto">
          <TrendingUp className="h-4 w-4 mr-2" />
          Set Price Alerts
        </Button>
        <Button variant="outline" className="fluent-button w-full sm:w-auto">
          <Globe className="h-4 w-4 mr-2" />
          Market Research
        </Button>
      </div>
    </div>
  );
};

export default ProductAnalysis;
