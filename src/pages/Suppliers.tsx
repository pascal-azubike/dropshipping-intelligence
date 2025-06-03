import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Star, MapPin, Shield, ExternalLink, Brain, Clock, ShoppingCart, Plus, TrendingUp } from "lucide-react";
import { mockSuppliers } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { BackButton } from "@/components/ui/back-button";
import { NicheFocus } from "@/components/ui/niche-focus";
import { usePersonalization } from "@/hooks/usePersonalization";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Suppliers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const { toast } = useToast();
  const { currentNiche } = usePersonalization();

  // Enhanced suppliers with product inventory
  const enhancedSuppliers = mockSuppliers.map(supplier => ({
    ...supplier,
    productInventory: [
      { name: 'Wireless Earbuds Pro', price: 12.50, inStock: 5000, moq: 50 },
      { name: 'Smart Phone Stand', price: 3.20, inStock: 8000, moq: 100 },
      { name: 'Bluetooth Speaker Mini', price: 8.90, inStock: 3000, moq: 30 },
      { name: 'USB-C Cable 3ft', price: 1.80, inStock: 15000, moq: 200 }
    ].slice(0, Math.floor(Math.random() * 4) + 1),
    totalProducts: Math.floor(Math.random() * 500) + 100,
    avgOrderValue: Math.floor(Math.random() * 200) + 100,
    fulfillmentTime: Math.floor(Math.random() * 5) + 1,
    qualityRating: (Math.random() * 2 + 8).toFixed(1),
    communicationRating: (Math.random() * 1 + 9).toFixed(1)
  }));

  const filteredSuppliers = enhancedSuppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceFilter === "all" || 
      (priceFilter === "low" && supplier.price < 20) ||
      (priceFilter === "medium" && supplier.price >= 20 && supplier.price <= 50) ||
      (priceFilter === "high" && supplier.price > 50);
    const matchesLocation = locationFilter === "all" || supplier.location.includes(locationFilter);
    const matchesVerified = !verifiedOnly || supplier.verified;
    return matchesSearch && matchesPrice && matchesLocation && matchesVerified;
  });

  const handleSupplierSelect = (supplierId: string, checked: boolean) => {
    if (checked) {
      setSelectedSuppliers([...selectedSuppliers, supplierId]);
    } else {
      setSelectedSuppliers(selectedSuppliers.filter(id => id !== supplierId));
    }
  };

  const handleVisitSupplier = (supplierName: string) => {
    toast({
      title: "Opening Supplier Contact",
      description: `Contacting ${supplierName}...`,
    });
  };

  return (
    <div className="space-y-6 mx-4 lg:mx-8 xl:mx-12">
      <div className="animate-fade-in">
        <BackButton />
        <h1 className="text-3xl font-bold mb-2">Smart Supplier Intelligence</h1>
        <p className="text-muted-foreground">Find verified suppliers with real-time inventory, pricing, and quality metrics</p>
      </div>

      {/* Enhanced Filters */}
      <Card className="fluent-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Advanced Supplier Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search suppliers or products..."
                className="pl-10 fluent-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $20</SelectItem>
                <SelectItem value="medium">$20 - $50</SelectItem>
                <SelectItem value="high">Over $50</SelectItem>
              </SelectContent>
            </Select>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="fluent-input">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="China">China</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Switch
                id="verified-only"
                checked={verifiedOnly}
                onCheckedChange={setVerifiedOnly}
              />
              <Label htmlFor="verified-only" className="text-sm">
                Verified Only
              </Label>
            </div>
            <Button variant="outline" className="fluent-button">
              <Plus className="h-4 w-4 mr-2" />
              Compare ({selectedSuppliers.length})
            </Button>
          </div>
          <NicheFocus showSettings={true} />
        </CardContent>
      </Card>

      {/* Enhanced Suppliers List */}
      <div className="space-y-6">
        {filteredSuppliers.map((supplier, index) => (
          <Card 
            key={supplier.id}
            className="fluent-card hover:shadow-fluentHover transition-all duration-300 animate-scale-in overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-0">
              {/* Supplier Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 border-b">
                <div className="flex items-start space-x-4">
                  <Checkbox
                    checked={selectedSuppliers.includes(supplier.id)}
                    onCheckedChange={(checked) => handleSupplierSelect(supplier.id, !!checked)}
                    className="mt-1"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-bold">{supplier.name}</h3>
                        {supplier.verified && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            <Shield className="h-3 w-3 mr-1" />
                            AI Verified
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {supplier.totalProducts} Products
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">${supplier.price.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">starting price</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{supplier.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{supplier.fulfillmentTime}d fulfillment</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{supplier.rating}/5 rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supplier Metrics */}
              <div className="p-6 bg-muted/20 border-b">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{supplier.qualityRating}/10</div>
                    <div className="text-xs text-muted-foreground">Quality Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{supplier.communicationRating}/10</div>
                    <div className="text-xs text-muted-foreground">Communication</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">${supplier.avgOrderValue}</div>
                    <div className="text-xs text-muted-foreground">Avg Order Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{supplier.shipping}</div>
                    <div className="text-xs text-muted-foreground">Shipping Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{supplier.fulfillmentTime}d</div>
                    <div className="text-xs text-muted-foreground">Processing Time</div>
                  </div>
                </div>
              </div>

              {/* Product Preview */}
              <div className="p-6 border-b">
                <div className="text-sm font-medium mb-3 text-muted-foreground">
                  Featured Products in {currentNiche}:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {supplier.productInventory.slice(0, 2).map((product: any, idx: number) => (
                    <div key={idx} className="p-3 border rounded-fluent bg-card hover:bg-muted/20 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-muted-foreground">MOQ: {product.moq} units</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">${product.price}</div>
                          <div className="text-xs text-green-600">
                            {((product.price * 2.5 - product.price) / (product.price * 2.5) * 100).toFixed(0)}% profit margin
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {supplier.aiRecommendation && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-fluent border-l-4 border-blue-500">
                    <div className="flex items-start space-x-2">
                      <Brain className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-700 dark:text-blue-300 text-sm">
                          AI Recommendation for {currentNiche}
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">
                          {supplier.aiRecommendation}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Fast Shipping</Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Quality Assured</Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Bulk Discounts</Badge>
                    {supplier.verified && (
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Verified</Badge>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      size="sm"
                      className="fluent-button"
                      onClick={() => navigate(`/supplier-products/${supplier.id}`)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      View All Products ({supplier.totalProducts})
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="fluent-button"
                      onClick={() => handleVisitSupplier(supplier.name)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Contact Supplier
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSuppliers.length === 0 && (
        <Card className="fluent-card">
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No suppliers found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Suppliers;
