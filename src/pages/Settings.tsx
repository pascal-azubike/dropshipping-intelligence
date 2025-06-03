import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useToast } from "@/hooks/use-toast";
import { User, Bell, Palette, Save, Target, X, Plus } from "lucide-react";

const Settings = () => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  
  const [accountData, setAccountData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [notifications, setNotifications] = useState({
    newTrends: true,
    priceAlerts: true,
    competitorUpdates: false,
    weeklyReports: true,
    emailNotifications: true,
    pushNotifications: false
  });

  // Personalization preferences state
  const [selectedNiches, setSelectedNiches] = useState<string[]>(['Tech', 'Fashion']);
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([
    'Wireless Earbuds', 'Dog Car Seat', 'Acne Patch', 'Mini Humidifier', 'Smart Notebook'
  ]);
  const [customNiche, setCustomNiche] = useState('');
  const [newProduct, setNewProduct] = useState('');

  const availableNiches = ['Tech', 'Fashion', 'Beauty', 'Home', 'Fitness', 'Kitchen', 'Sports', 'Automotive'];
  const suggestedProducts = ['Wireless Earbuds', 'LED Strip Lights', 'Portable Blender', 'Phone Cases', 'Gaming Headsets', 'Yoga Mats', 'Car Phone Mounts', 'Blue Light Glasses'];

  const handleNicheAdd = (niche: string) => {
    if (selectedNiches.length < 5 && !selectedNiches.includes(niche)) {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  const handleNicheRemove = (niche: string) => {
    setSelectedNiches(selectedNiches.filter(n => n !== niche));
  };

  const handleCustomNicheAdd = () => {
    if (customNiche.trim() && selectedNiches.length < 5 && !selectedNiches.includes(customNiche)) {
      setSelectedNiches([...selectedNiches, customNiche.trim()]);
      setCustomNiche('');
    }
  };

  const handleProductAdd = (product: string) => {
    if (favoriteProducts.length < 5 && !favoriteProducts.includes(product)) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const handleProductRemove = (product: string) => {
    setFavoriteProducts(favoriteProducts.filter(p => p !== product));
  };

  const handleNewProductAdd = () => {
    if (newProduct.trim() && favoriteProducts.length < 5 && !favoriteProducts.includes(newProduct)) {
      setFavoriteProducts([...favoriteProducts, newProduct.trim()]);
      setNewProduct('');
    }
  };

  const handleAccountSave = () => {
    // Validate passwords if changing
    if (accountData.newPassword) {
      if (accountData.newPassword !== accountData.confirmPassword) {
        toast({
          title: "Password mismatch",
          description: "New passwords do not match",
          variant: "destructive"
        });
        return;
      }
    }

    toast({
      title: "Account updated",
      description: "Your account settings have been saved"
    });
  };

  const handleNotificationsSave = () => {
    localStorage.setItem('dropship_notifications', JSON.stringify(notifications));
    
    toast({
      title: "Notifications updated",
      description: "Your notification preferences have been saved"
    });
  };

  const handlePersonalizationSave = () => {
    localStorage.setItem('dropship_niches', JSON.stringify(selectedNiches));
    localStorage.setItem('dropship_products', JSON.stringify(favoriteProducts));
    
    toast({
      title: "Preferences saved",
      description: "Your personalization preferences have been updated"
    });
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    toast({
      title: "Theme updated",
      description: `Theme changed to ${newTheme}`
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Account</span>
          </TabsTrigger>
          <TabsTrigger value="personalization" className="flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span>Personalization</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="theme" className="flex items-center space-x-2">
            <Palette className="h-4 w-4" />
            <span>Theme</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your personal details and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    className="fluent-input"
                    value={accountData.name}
                    onChange={(e) => setAccountData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="fluent-input"
                    value={accountData.email}
                    onChange={(e) => setAccountData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className="fluent-input"
                      value={accountData.currentPassword}
                      onChange={(e) => setAccountData(prev => ({ ...prev, currentPassword: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="fluent-input"
                        value={accountData.newPassword}
                        onChange={(e) => setAccountData(prev => ({ ...prev, newPassword: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="fluent-input"
                        value={accountData.confirmPassword}
                        onChange={(e) => setAccountData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={handleAccountSave} className="fluent-button">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personalization">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Personalization Preferences</span>
              </CardTitle>
              <CardDescription>Define your preferred niches and products for personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Niche Selection */}
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Your Niches (Max 5)</Label>
                  <p className="text-sm text-muted-foreground">Select niches that interest you for focused recommendations</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedNiches.map(niche => (
                    <Badge key={niche} variant="secondary" className="flex items-center space-x-1">
                      <span>{niche}</span>
                      <button
                        onClick={() => handleNicheRemove(niche)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Select from popular niches</Label>
                    <Select onValueChange={handleNicheAdd} disabled={selectedNiches.length >= 5}>
                      <SelectTrigger className="fluent-input">
                        <SelectValue placeholder="Choose a niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableNiches
                          .filter(niche => !selectedNiches.includes(niche))
                          .map(niche => (
                            <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Label>Or add custom niche</Label>
                      <Input
                        placeholder="e.g., Eco-friendly, Kids learning"
                        value={customNiche}
                        onChange={(e) => setCustomNiche(e.target.value)}
                        className="fluent-input"
                        disabled={selectedNiches.length >= 5}
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={handleCustomNicheAdd}
                      disabled={!customNiche.trim() || selectedNiches.length >= 5}
                      className="mt-6"
                      size="sm"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Favorite Products */}
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Your Top 5 Products of Interest</Label>
                  <p className="text-sm text-muted-foreground">Products you want to track and analyze</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {favoriteProducts.map(product => (
                    <Badge key={product} variant="outline" className="flex items-center space-x-1">
                      <span>{product}</span>
                      <button
                        onClick={() => handleProductRemove(product)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Select from trending products</Label>
                    <Select onValueChange={handleProductAdd} disabled={favoriteProducts.length >= 5}>
                      <SelectTrigger className="fluent-input">
                        <SelectValue placeholder="Choose a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {suggestedProducts
                          .filter(product => !favoriteProducts.includes(product))
                          .map(product => (
                            <SelectItem key={product} value={product}>{product}</SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Label>Or add custom product</Label>
                      <Input
                        placeholder="e.g., Smart Water Bottle"
                        value={newProduct}
                        onChange={(e) => setNewProduct(e.target.value)}
                        className="fluent-input"
                        disabled={favoriteProducts.length >= 5}
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={handleNewProductAdd}
                      disabled={!newProduct.trim() || favoriteProducts.length >= 5}
                      className="mt-6"
                      size="sm"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button onClick={handlePersonalizationSave} className="fluent-button">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Product Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newTrends">New Trending Products</Label>
                      <p className="text-sm text-muted-foreground">Get notified about new trending products</p>
                    </div>
                    <Switch
                      id="newTrends"
                      checked={notifications.newTrends}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, newTrends: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="priceAlerts">Price Alerts</Label>
                      <p className="text-sm text-muted-foreground">Alert when prices change significantly</p>
                    </div>
                    <Switch
                      id="priceAlerts"
                      checked={notifications.priceAlerts}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, priceAlerts: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="competitorUpdates">Competitor Updates</Label>
                      <p className="text-sm text-muted-foreground">Updates about tracked competitors</p>
                    </div>
                    <Switch
                      id="competitorUpdates"
                      checked={notifications.competitorUpdates}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, competitorUpdates: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Delivery Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailNotifications: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushNotifications: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weeklyReports">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive weekly summary emails</p>
                    </div>
                    <Switch
                      id="weeklyReports"
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weeklyReports: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleNotificationsSave} className="fluent-button">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme">
          <Card className="fluent-card">
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize the appearance of your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={theme} onValueChange={handleThemeChange}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light" className="flex-1">
                      <div>
                        <div className="font-medium">Light</div>
                        <div className="text-sm text-muted-foreground">Clean and bright interface</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark" className="flex-1">
                      <div>
                        <div className="font-medium">Dark</div>
                        <div className="text-sm text-muted-foreground">Dark mode for reduced eye strain</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="system" />
                    <Label htmlFor="system" className="flex-1">
                      <div>
                        <div className="font-medium">System</div>
                        <div className="text-sm text-muted-foreground">Use your system's theme preference</div>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
