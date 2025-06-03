
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Target, AlertTriangle, TrendingUp, TrendingDown, Minus, Users, DollarSign } from 'lucide-react';
import { mockCompetitors, mockChartData } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usePersonalization } from '@/hooks/usePersonalization';

const CompetitorAnalysis = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentNiche } = usePersonalization();
  
  const competitor = mockCompetitors.find(c => c.id === id);
  
  if (!competitor) {
    return <div>Competitor not found</div>;
  }

  // Enhanced competitor data
  const analysisData = {
    ...competitor,
    productPortfolio: [
      { name: 'Premium Wireless Earbuds', price: 89.99, sales: 1200, rank: '#3 in category', trend: 'rising' },
      { name: 'Smart Phone Accessories', price: 24.99, sales: 800, rank: '#7 in category', trend: 'stable' },
      { name: 'Tech Gadgets Bundle', price: 149.99, sales: 450, rank: '#12 in category', trend: 'falling' }
    ],
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
  };

  return (
    <div className="space-y-6 mx-4 lg:mx-8 xl:mx-12">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{competitor.name} - Complete Business Intelligence</h1>
          <p className="text-muted-foreground">Comprehensive competitor analysis with product portfolio and market positioning</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="fluent-card text-center p-4">
          <div className="text-2xl font-bold text-green-500">${analysisData.monthlyRevenue.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Monthly Revenue</div>
        </Card>
        <Card className="fluent-card text-center p-4">
          <div className="text-2xl font-bold text-blue-500">${analysisData.averageOrderValue}</div>
          <div className="text-sm text-muted-foreground">Avg Order Value</div>
        </Card>
        <Card className="fluent-card text-center p-4">
          <div className="text-2xl font-bold text-purple-500">{analysisData.conversionRate}%</div>
          <div className="text-sm text-muted-foreground">Conversion Rate</div>
        </Card>
        <Card className="fluent-card text-center p-4">
          <div className="text-2xl font-bold text-orange-500">{analysisData.marketShare}%</div>
          <div className="text-sm text-muted-foreground">Market Share</div>
        </Card>
      </div>

      {/* Threat Assessment */}
      <Card className="fluent-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Threat Assessment</span>
            <Badge 
              variant="outline"
              className={
                analysisData.threatLevel === 'Critical' ? 'text-red-600 bg-red-50 dark:bg-red-950/20' :
                analysisData.threatLevel === 'High' ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/20' :
                analysisData.threatLevel === 'Medium' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20' :
                'text-green-600 bg-green-50 dark:bg-green-950/20'
              }
            >
              {analysisData.threatLevel} Threat
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium mb-2">Recent Activity</h4>
              <p className="text-sm text-muted-foreground">{competitor.change}</p>
              <p className="text-xs text-muted-foreground mt-1">Last updated: {competitor.lastUpdate}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Product Count</h4>
              <p className="text-2xl font-bold">{competitor.productCount}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Average Price</h4>
              <p className="text-2xl font-bold">${competitor.avgPrice}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Portfolio */}
      <Card className="fluent-card">
        <CardHeader>
          <CardTitle>Product Portfolio & Pricing Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left p-3">Product</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Est. Sales</th>
                  <th className="text-left p-3">Market Rank</th>
                  <th className="text-left p-3">Trend</th>
                </tr>
              </thead>
              <tbody>
                {analysisData.productPortfolio.map((product, index) => (
                  <tr key={index} className="border-b hover:bg-muted/20">
                    <td className="p-3">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{currentNiche} Category</div>
                    </td>
                    <td className="p-3">
                      <div className="font-medium">${product.price}</div>
                      <div className="text-xs text-muted-foreground">vs avg ${(product.price * 1.2).toFixed(2)}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-medium">{product.sales}/mo</div>
                      <div className="text-xs text-green-600">Est. revenue: ${(product.price * product.sales).toLocaleString()}</div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline">{product.rank}</Badge>
                    </td>
                    <td className="p-3">
                      <Badge 
                        variant="outline" 
                        className={
                          product.trend === 'rising' ? 'text-green-600' :
                          product.trend === 'falling' ? 'text-red-600' :
                          'text-yellow-600'
                        }
                      >
                        {product.trend === 'rising' ? <TrendingUp className="h-3 w-3 mr-1" /> :
                         product.trend === 'falling' ? <TrendingDown className="h-3 w-3 mr-1" /> :
                         <Minus className="h-3 w-3 mr-1" />}
                        {product.trend}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Traffic Sources & Performance */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="fluent-card">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Organic Search</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${analysisData.trafficSources.organic}%`}}></div>
                  </div>
                  <span className="text-sm font-medium">{analysisData.trafficSources.organic}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Paid Advertising</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: `${analysisData.trafficSources.paid}%`}}></div>
                  </div>
                  <span className="text-sm font-medium">{analysisData.trafficSources.paid}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Social Media</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: `${analysisData.trafficSources.social}%`}}></div>
                  </div>
                  <span className="text-sm font-medium">{analysisData.trafficSources.social}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Direct Traffic</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: `${analysisData.trafficSources.direct}%`}}></div>
                  </div>
                  <span className="text-sm font-medium">{analysisData.trafficSources.direct}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fluent-card">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="searches" stroke="#0078D4" strokeWidth={2} name="Traffic" />
                <Line type="monotone" dataKey="mentions" stroke="#10B981" strokeWidth={2} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Strategic Insights */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">AI Strategic Intelligence</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="fluent-card border-l-4 border-red-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <div className="font-medium text-red-700 dark:text-red-300 mb-1">Competitive Threat Assessment</div>
                  <div className="text-sm text-red-600 dark:text-red-400">
                    {analysisData.threatLevel} threat level due to aggressive pricing strategy and strong market position in {currentNiche}. 
                    Monitor their product launches and pricing changes closely.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="fluent-card border-l-4 border-blue-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <Target className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-medium text-blue-700 dark:text-blue-300 mb-1">Market Opportunity</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {competitor.aiInsight || `Gap identified in their premium product range. Consider targeting higher-end ${currentNiche} products with better features and competitive pricing.`}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
