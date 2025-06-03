
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BackButton } from '@/components/ui/back-button';
import { ShoppingCart, Plus, Brain, TrendingUp } from 'lucide-react';
import { mockSuppliers } from '@/data/mockData';
import { usePersonalization } from '@/hooks/usePersonalization';

const SupplierProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentNiche } = usePersonalization();
  
  const supplier = mockSuppliers.find(s => s.id === id);
  
  if (!supplier) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Supplier Not Found</h2>
          <Button onClick={() => navigate('/suppliers')}>Back to Suppliers</Button>
        </div>
      </div>
    );
  }

  // Enhanced product inventory with more details
  const enhancedProducts = [
    { name: 'Wireless Earbuds Pro Max', price: 12.50, inStock: 5000, moq: 50, category: 'Audio', rating: 4.8, sales: 2500 },
    { name: 'Smart Phone Stand Adjustable', price: 3.20, inStock: 8000, moq: 100, category: 'Accessories', rating: 4.6, sales: 1800 },
    { name: 'Bluetooth Speaker Mini Portable', price: 8.90, inStock: 3000, moq: 30, category: 'Audio', rating: 4.7, sales: 1200 },
    { name: 'USB-C Cable 3ft Braided', price: 1.80, inStock: 15000, moq: 200, category: 'Cables', rating: 4.5, sales: 3200 },
    { name: 'LED Ring Light 10 inch', price: 15.99, inStock: 2500, moq: 25, category: 'Photography', rating: 4.9, sales: 950 },
    { name: 'Wireless Charging Pad Fast', price: 8.50, inStock: 4500, moq: 50, category: 'Charging', rating: 4.4, sales: 1500 },
    { name: 'Phone Camera Lens Kit', price: 22.30, inStock: 1200, moq: 20, category: 'Photography', rating: 4.8, sales: 680 },
    { name: 'Magnetic Car Mount Strong', price: 6.75, inStock: 6000, moq: 75, category: 'Car Accessories', rating: 4.3, sales: 2100 }
  ];

  const totalProducts = enhancedProducts.length + 142;
  const avgOrderValue = 156;
  const fulfillmentTime = 3;
  const qualityRating = 9.2;

  return (
    <div className="min-h-screen bg-background px-4 lg:px-8 xl:px-12 py-6">
      <BackButton />
      
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">{supplier.name} - Product Catalog</h1>
          <p className="text-muted-foreground">Browse available products with real-time pricing and inventory</p>
        </div>

        {/* Supplier Stats */}
        <Card className="fluent-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-fluent">
                <div className="text-3xl font-bold text-blue-600">{totalProducts}</div>
                <div className="text-sm text-muted-foreground">Total Products</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-fluent">
                <div className="text-3xl font-bold text-green-600">${avgOrderValue}</div>
                <div className="text-sm text-muted-foreground">Avg Order Value</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-fluent">
                <div className="text-3xl font-bold text-purple-600">{fulfillmentTime}d</div>
                <div className="text-sm text-muted-foreground">Fulfillment Time</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-fluent">
                <div className="text-3xl font-bold text-orange-600">{qualityRating}/10</div>
                <div className="text-sm text-muted-foreground">Quality Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <Card className="fluent-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span>Available Products - {currentNiche} Category</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {enhancedProducts.map((product, index) => {
                const suggestedPrice = product.price * 2.8;
                const profitMargin = ((suggestedPrice - product.price) / suggestedPrice * 100);
                
                return (
                  <div key={index} className="p-6 border rounded-fluent hover:shadow-md transition-all duration-200 bg-card">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          SKU: #{1000 + index} • Rating: {product.rating}/5 • {product.sales} sales/month
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Cost Price:</span>
                            <div className="font-bold text-lg">${product.price}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Suggested Retail:</span>
                            <div className="font-bold text-lg text-green-600">${suggestedPrice.toFixed(2)}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Profit Margin:</span>
                            <div className="font-bold text-lg text-blue-600">{profitMargin.toFixed(0)}%</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">MOQ:</span>
                            <div className="font-bold text-lg">{product.moq} units</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <Badge 
                          variant="outline" 
                          className={product.inStock > 2000 ? 'text-green-600 bg-green-50' : product.inStock > 500 ? 'text-yellow-600 bg-yellow-50' : 'text-red-600 bg-red-50'}
                        >
                          {product.inStock.toLocaleString()} in stock
                        </Badge>
                        <div className="space-y-1">
                          <Button size="sm" className="w-full">
                            <Plus className="h-3 w-3 mr-1" />
                            Add to Store
                          </Button>
                          <Button size="sm" variant="outline" className="w-full">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            View Trends
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Profit Calculator */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-fluent">
                      <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                        Profit Calculator (based on 100 units)
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-muted-foreground">Cost: </span>
                          <span className="font-medium">${(product.price * 100).toFixed(0)}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Revenue: </span>
                          <span className="font-medium">${(suggestedPrice * 100).toFixed(0)}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Profit: </span>
                          <span className="font-medium text-green-600">${((suggestedPrice - product.price) * 100).toFixed(0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendation */}
        <Card className="fluent-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Brain className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  AI Sourcing Recommendation for {currentNiche}
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  This supplier offers excellent value for {currentNiche} products with competitive pricing and high quality ratings. 
                  The LED Ring Light and Wireless Earbuds show highest profit margins with strong market demand. 
                  Recommended to start with smaller MOQ items to test market response.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplierProducts;
