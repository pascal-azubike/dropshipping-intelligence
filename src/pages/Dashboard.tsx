
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { usePersonalization } from "@/hooks/usePersonalization";
import { NicheFocus } from "@/components/ui/niche-focus";
import { TrendingProducts } from "@/components/dashboard/TrendingProducts";
import { MarketInsights } from "@/components/dashboard/MarketInsights";
import { TrendingUp, Search, Users, BookmarkPlus, Activity, Brain, AlertTriangle, Target, Zap, Settings, BarChart3, DollarSign, Eye, ShoppingCart } from "lucide-react";
import { mockTrendingHighlights, mockRecentActivity, mockDashboardStats } from "@/data/mockData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentNiche } = usePersonalization();

  const enhancedStats = [
    { label: 'Trending Products', value: '127', change: '+12%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Profitable Niches', value: '23', change: '+5%', icon: Target, color: 'text-blue-500' },
    { label: 'Verified Suppliers', value: '89', change: '+18%', icon: Users, color: 'text-purple-500' },
    { label: 'Avg Profit Margin', value: '67%', change: '+3%', icon: DollarSign, color: 'text-green-500' },
    { label: 'Competition Level', value: 'Low', change: 'Favorable', icon: AlertTriangle, color: 'text-yellow-500' },
    { label: 'Market Opportunities', value: '15', change: '+8%', icon: Zap, color: 'text-red-500' }
  ];

  return (
    <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
      {/* Welcome Section */}
      <div className="animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground">AI-powered dropshipping insights for {currentNiche} niche</p>
      </div>

      {/* Current Focus */}
      <Card className="fluent-card bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/10 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <span>Market Analysis Focus</span>
          </CardTitle>
          <CardDescription>AI analyzing real-time market data for your selected niche</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Currently analyzing {currentNiche} market trends</div>
              <div className="text-lg font-semibold">Finding profitable products and reliable suppliers</div>
            </div>
            <NicheFocus showSettings={true} />
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {enhancedStats.map((stat, index) => (
          <Card key={index} className="fluent-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-xs text-green-500 font-medium">{stat.change}</span>
              </div>
              <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Insights */}
      <MarketInsights />

      {/* Trending Products with Niche Discovery */}
      <TrendingProducts />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer" onClick={() => navigate('/product-trends')}>
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Advanced Product Analysis</h3>
            <p className="text-sm text-muted-foreground">Deep dive into product trends and profitability</p>
          </CardContent>
        </Card>
        
        <Card className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer" onClick={() => navigate('/suppliers')}>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Smart Supplier Matching</h3>
            <p className="text-sm text-muted-foreground">Find verified suppliers with competitive pricing</p>
          </CardContent>
        </Card>
        
        <Card className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer" onClick={() => navigate('/competitors')}>
          <CardContent className="p-6 text-center">
            <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Competitor Intelligence</h3>
            <p className="text-sm text-muted-foreground">Monitor competitor strategies and pricing</p>
          </CardContent>
        </Card>
        
        <Card className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer" onClick={() => navigate('/market-analysis')}>
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Niche Discovery</h3>
            <p className="text-sm text-muted-foreground">Find high-potential market opportunities</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="fluent-card">
          <CardHeader>
            <CardTitle>Live Market Data - {currentNiche}</CardTitle>
            <CardDescription>Real-time analysis from multiple platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-fluent">
                <div>
                  <div className="font-medium">Google Trends Volume</div>
                  <div className="text-sm text-muted-foreground">{currentNiche} category searches</div>
                </div>
                <div className="text-green-500 font-medium">+34%</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-fluent">
                <div>
                  <div className="font-medium">TikTok Engagement</div>
                  <div className="text-sm text-muted-foreground">Viral content in {currentNiche}</div>
                </div>
                <div className="text-green-500 font-medium">+67%</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-fluent">
                <div>
                  <div className="font-medium">Amazon Best Sellers</div>
                  <div className="text-sm text-muted-foreground">{currentNiche} category rankings</div>
                </div>
                <div className="text-green-500 font-medium">+45%</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-fluent">
                <div>
                  <div className="font-medium">Shopify Stores</div>
                  <div className="text-sm text-muted-foreground">New competitors detected</div>
                </div>
                <div className="text-orange-500 font-medium">3 alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fluent-card">
          <CardHeader>
            <CardTitle>AI Assistant Activity</CardTitle>
            <CardDescription>Recent analysis and discoveries for {currentNiche}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockRecentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-muted/50">
                  <div className="text-sm">{activity.action.replace('product', currentNiche + ' products')}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
