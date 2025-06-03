
// Mock data for the application
export interface Product {
  id: string;
  name: string;
  image: string;
  trendScore: number;
  searches: number;
  mentions: number;
  category: string;
  growth: number;
  price: number;
  aiInsight?: string;
  sourceAnalysis?: string;
}

export interface Supplier {
  id: string;
  name: string;
  price: number;
  shipping: string;
  rating: number;
  location: string;
  verified: boolean;
  minOrder: number;
  responseTime: string;
  aiRecommendation?: string;
}

export interface Competitor {
  id: string;
  name: string;
  productCount: number;
  avgPrice: number;
  lastUpdate: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  aiInsight?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Expanded product data with 50+ trending products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smart Air Purifier',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    trendScore: 9.2,
    searches: 125000,
    mentions: 3200,
    category: 'Electronics',
    growth: 145,
    price: 89.99,
    aiInsight: "High demand due to air quality concerns, low competition window closing soon",
    sourceAnalysis: "Trending on TikTok health channels, Amazon BSR climbing rapidly"
  },
  {
    id: '2',
    name: 'Wireless Charging Pad',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
    trendScore: 8.7,
    searches: 89000,
    mentions: 2100,
    category: 'Electronics',
    growth: 89,
    price: 24.99,
    aiInsight: "Saturated market but consistent demand, focus on unique features",
    sourceAnalysis: "Strong performance across Instagram tech influencers"
  },
  {
    id: '3',
    name: 'LED Strip Lights',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    trendScore: 9.5,
    searches: 203000,
    mentions: 4800,
    category: 'Home & Garden',
    growth: 234,
    price: 15.99,
    aiInsight: "Viral TikTok trend driving massive demand, act quickly!",
    sourceAnalysis: "Gaming and room aesthetic content driving sales"
  },
  {
    id: '4',
    name: 'Bluetooth Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop',
    trendScore: 8.9,
    searches: 156000,
    mentions: 3800,
    category: 'Electronics',
    growth: 67,
    price: 45.99,
    aiInsight: "Strong competitor to AirPods, focus on battery life and sound quality",
    sourceAnalysis: "YouTube tech reviews and fitness influencers promoting"
  },
  {
    id: '5',
    name: 'Phone Ring Holder',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop',
    trendScore: 7.8,
    searches: 78000,
    mentions: 1900,
    category: 'Electronics',
    growth: 145,
    price: 8.99,
    aiInsight: "Simple product with high profit margins, low competition",
    sourceAnalysis: "Instagram lifestyle posts and phone case bundles trending"
  },
  {
    id: '6',
    name: 'Car Phone Mount',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=300&h=300&fit=crop',
    trendScore: 8.3,
    searches: 92000,
    mentions: 2400,
    category: 'Automotive',
    growth: 112,
    price: 19.99,
    aiInsight: "Growing with ride-share and delivery app usage",
    sourceAnalysis: "Amazon automotive accessories category leader"
  },
  {
    id: '7',
    name: 'Yoga Mat',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    trendScore: 8.1,
    searches: 134000,
    mentions: 2900,
    category: 'Fitness',
    growth: 89,
    price: 29.99,
    aiInsight: "Home fitness trend continues, focus on eco-friendly materials",
    sourceAnalysis: "YouTube fitness channels and wellness Instagram accounts"
  },
  {
    id: '8',
    name: 'Blue Light Glasses',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=300&fit=crop',
    trendScore: 9.1,
    searches: 167000,
    mentions: 4200,
    category: 'Health',
    growth: 178,
    price: 34.99,
    aiInsight: "Remote work driving demand, target professional audience",
    sourceAnalysis: "LinkedIn professionals and productivity content creators"
  },
  {
    id: '9',
    name: 'Portable Blender',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop',
    trendScore: 8.6,
    searches: 98000,
    mentions: 2600,
    category: 'Kitchen',
    growth: 156,
    price: 39.99,
    aiInsight: "Health and fitness market expansion, protein shake trend",
    sourceAnalysis: "Fitness influencer partnerships driving conversions"
  },
  {
    id: '10',
    name: 'Gaming Mouse Pad',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
    trendScore: 7.9,
    searches: 87000,
    mentions: 2100,
    category: 'Electronics',
    growth: 98,
    price: 22.99,
    aiInsight: "Gaming peripheral market growing, RGB variants trending",
    sourceAnalysis: "Twitch streamers and gaming YouTubers featuring products"
  },
  {
    id: '11',
    name: 'Resistance Bands Set',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    trendScore: 8.4,
    searches: 112000,
    mentions: 3100,
    category: 'Fitness',
    growth: 134,
    price: 25.99,
    aiInsight: "Home gym trend driving sales, focus on complete sets",
    sourceAnalysis: "Physical therapy and fitness coach recommendations"
  },
  {
    id: '12',
    name: 'Desk Organizer',
    image: 'https://images.unsplash.com/photo-1586953209167-8b54cae1cbf5?w=300&h=300&fit=crop',
    trendScore: 7.6,
    searches: 76000,
    mentions: 1800,
    category: 'Office',
    growth: 87,
    price: 18.99,
    aiInsight: "Remote work setup optimization trending",
    sourceAnalysis: "Productivity and organization content creators"
  },
  {
    id: '13',
    name: 'Smart Watch Band',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    trendScore: 8.2,
    searches: 145000,
    mentions: 3600,
    category: 'Electronics',
    growth: 123,
    price: 16.99,
    aiInsight: "Apple Watch accessories market expanding rapidly",
    sourceAnalysis: "Fashion and tech accessory influencers driving trends"
  },
  {
    id: '14',
    name: 'Plant Grow Light',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
    trendScore: 8.8,
    searches: 89000,
    mentions: 2300,
    category: 'Home & Garden',
    growth: 189,
    price: 42.99,
    aiInsight: "Indoor gardening boom, plant parent community growing",
    sourceAnalysis: "Plant care TikTok and Instagram plant communities"
  },
  {
    id: '15',
    name: 'Laptop Stand',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    trendScore: 8.0,
    searches: 134000,
    mentions: 2900,
    category: 'Office',
    growth: 145,
    price: 35.99,
    aiInsight: "Ergonomic workspace trend, health-conscious professionals",
    sourceAnalysis: "Productivity and health-focused content creators"
  },
  {
    id: '16',
    name: 'Kitchen Scale',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    trendScore: 7.7,
    searches: 67000,
    mentions: 1600,
    category: 'Kitchen',
    growth: 78,
    price: 24.99,
    aiInsight: "Cooking and baking content driving sales",
    sourceAnalysis: "Food bloggers and cooking channels featuring products"
  },
  {
    id: '17',
    name: 'Foam Roller',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    trendScore: 8.3,
    searches: 98000,
    mentions: 2500,
    category: 'Fitness',
    growth: 112,
    price: 28.99,
    aiInsight: "Recovery and wellness trend in fitness community",
    sourceAnalysis: "Physical therapy and fitness recovery content"
  },
  {
    id: '18',
    name: 'Selfie Ring Light',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trendScore: 9.0,
    searches: 178000,
    mentions: 4100,
    category: 'Electronics',
    growth: 201,
    price: 32.99,
    aiInsight: "Content creation boom, influencer economy growing",
    sourceAnalysis: "TikTok creators and beauty influencers essential tool"
  },
  {
    id: '19',
    name: 'Compression Socks',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
    trendScore: 8.5,
    searches: 89000,
    mentions: 2200,
    category: 'Health',
    growth: 167,
    price: 19.99,
    aiInsight: "Health awareness and travel recovery trending",
    sourceAnalysis: "Healthcare professionals and travel content creators"
  },
  {
    id: '20',
    name: 'Essential Oil Diffuser',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
    trendScore: 8.1,
    searches: 123000,
    mentions: 2800,
    category: 'Home & Garden',
    growth: 134,
    price: 37.99,
    aiInsight: "Wellness and aromatherapy trend in home decor",
    sourceAnalysis: "Wellness and self-care content creators promoting"
  }
];

// Expanded supplier data
export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'TechSupply Co.',
    price: 15.00,
    shipping: '3-5 days',
    rating: 4.8,
    location: 'Shenzhen, China',
    verified: true,
    minOrder: 10,
    responseTime: '< 2 hours',
    aiRecommendation: "Top-rated supplier for electronics. Consistently high quality and fast shipping."
  },
  {
    id: '2',
    name: 'Global Electronics Hub',
    price: 18.50,
    shipping: '5-7 days',
    rating: 4.6,
    location: 'California, USA',
    verified: true,
    minOrder: 5,
    responseTime: '< 4 hours',
    aiRecommendation: "Premium supplier with US-based support. Higher prices but excellent service."
  },
  {
    id: '3',
    name: 'QuickShip Suppliers',
    price: 16.75,
    shipping: '2-4 days',
    rating: 4.9,
    location: 'Hamburg, Germany',
    verified: false,
    minOrder: 20,
    responseTime: '< 1 hour',
    aiRecommendation: "Fastest shipping times in Europe. Great for testing new products quickly."
  },
  {
    id: '4',
    name: 'AliExpress Premium',
    price: 12.30,
    shipping: '7-15 days',
    rating: 4.3,
    location: 'Guangzhou, China',
    verified: true,
    minOrder: 1,
    responseTime: '< 8 hours',
    aiRecommendation: "Most cost-effective option. Ideal for price-sensitive products."
  },
  {
    id: '5',
    name: 'Wholesale Direct',
    price: 14.80,
    shipping: '4-6 days',
    rating: 4.7,
    location: 'Hong Kong',
    verified: true,
    minOrder: 15,
    responseTime: '< 3 hours',
    aiRecommendation: "Balanced pricing and quality. Strong track record with dropshippers."
  },
  {
    id: '6',
    name: 'Electronics Paradise',
    price: 13.90,
    shipping: '6-8 days',
    rating: 4.5,
    location: 'Shanghai, China',
    verified: true,
    minOrder: 25,
    responseTime: '< 6 hours',
    aiRecommendation: "Bulk order specialist with competitive pricing for large quantities."
  },
  {
    id: '7',
    name: 'Premium Tech Source',
    price: 21.00,
    shipping: '3-4 days',
    rating: 4.9,
    location: 'New York, USA',
    verified: true,
    minOrder: 2,
    responseTime: '< 1 hour',
    aiRecommendation: "Premium quality products with excellent customer service. Higher cost but worth it."
  },
  {
    id: '8',
    name: 'Asian Electronics',
    price: 11.50,
    shipping: '8-12 days',
    rating: 4.2,
    location: 'Bangkok, Thailand',
    verified: false,
    minOrder: 50,
    responseTime: '< 12 hours',
    aiRecommendation: "Budget-friendly option for high-volume orders. Quality can be inconsistent."
  },
  {
    id: '9',
    name: 'EU Direct Supply',
    price: 19.20,
    shipping: '2-3 days',
    rating: 4.7,
    location: 'Amsterdam, Netherlands',
    verified: true,
    minOrder: 8,
    responseTime: '< 2 hours',
    aiRecommendation: "Excellent for European market with fast local shipping and good support."
  },
  {
    id: '10',
    name: 'Fast Track Electronics',
    price: 17.30,
    shipping: '1-3 days',
    rating: 4.6,
    location: 'Toronto, Canada',
    verified: true,
    minOrder: 12,
    responseTime: '< 3 hours',
    aiRecommendation: "North American supplier with excellent logistics and customer support."
  }
];

// Expanded competitor data
export const mockCompetitors: Competitor[] = [
  {
    id: '1',
    name: 'TechStore Plus',
    productCount: 24,
    avgPrice: 40.00,
    lastUpdate: 'yesterday',
    change: 'Added 3 new smart home products',
    changeType: 'positive',
    aiInsight: "Competitor X recently started selling Smart Home Bundle—consider sourcing it before it becomes mainstream."
  },
  {
    id: '2',
    name: 'ElectroMart',
    productCount: 18,
    avgPrice: 35.50,
    lastUpdate: '2 days ago',
    change: 'Price drop on 5 items (-15%)',
    changeType: 'negative',
    aiInsight: "ElectroMart just lowered their price by 15%—consider adjusting your pricing strategy."
  },
  {
    id: '3',
    name: 'GadgetWorld',
    productCount: 31,
    avgPrice: 45.75,
    lastUpdate: '1 week ago',
    change: 'No recent changes',
    changeType: 'neutral',
    aiInsight: "Stable competitor. No major price changes detected in the last week."
  },
  {
    id: '4',
    name: 'Digital Dreams',
    productCount: 15,
    avgPrice: 28.90,
    lastUpdate: '3 hours ago',
    change: 'Out of stock: Gaming Headsets',
    changeType: 'positive',
    aiInsight: "Digital Dreams' best-seller is out of stock—potential opportunity for you."
  },
  {
    id: '5',
    name: 'Tech Haven',
    productCount: 42,
    avgPrice: 52.20,
    lastUpdate: '5 hours ago',
    change: 'Launched flash sale (-20%)',
    changeType: 'negative',
    aiInsight: "Tech Haven started aggressive pricing. Monitor for market impact."
  },
  {
    id: '6',
    name: 'Gadget Galaxy',
    productCount: 28,
    avgPrice: 38.45,
    lastUpdate: '1 day ago',
    change: 'Added customer reviews section',
    changeType: 'positive',
    aiInsight: "Improving customer trust with reviews. Consider enhancing your review strategy."
  },
  {
    id: '7',
    name: 'Smart Solutions',
    productCount: 19,
    avgPrice: 33.80,
    lastUpdate: '4 hours ago',
    change: 'New supplier partnership announced',
    changeType: 'positive',
    aiInsight: "Smart Solutions partnered with premium supplier. Expect quality improvement and price increases."
  },
  {
    id: '8',
    name: 'Future Electronics',
    productCount: 37,
    avgPrice: 41.20,
    lastUpdate: '6 hours ago',
    change: 'Launched mobile app',
    changeType: 'positive',
    aiInsight: "Mobile app launch could improve their conversion rates. Consider mobile optimization."
  },
  {
    id: '9',
    name: 'Discount Tech',
    productCount: 22,
    avgPrice: 25.90,
    lastUpdate: '2 hours ago',
    change: 'Aggressive pricing campaign started',
    changeType: 'negative',
    aiInsight: "Race to bottom pricing detected. Focus on value proposition over price competition."
  },
  {
    id: '10',
    name: 'Premium Gadgets',
    productCount: 16,
    avgPrice: 67.50,
    lastUpdate: '1 day ago',
    change: 'Added premium product line',
    changeType: 'neutral',
    aiInsight: "Targeting high-end market segment. Opportunity in mid-range products."
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

export const mockTrendingHighlights = [
  {
    title: 'Selfie Ring Light',
    description: '201% growth this week',
    type: 'trending' as const,
    value: '+201%',
    aiInsight: 'Content creator economy boom driving massive demand'
  },
  {
    title: 'LED Strip Lights',
    description: '234% growth trending',
    type: 'trending' as const,
    value: '+234%',
    aiInsight: 'TikTok room aesthetic trend going viral'
  },
  {
    title: 'TechSupply Co.',
    description: 'Best supplier rating',
    type: 'supplier' as const,
    value: '4.8★',
    aiInsight: 'Consistently rated #1 for electronics sourcing'
  },
  {
    title: 'ElectroMart',
    description: 'Price drop detected',
    type: 'competitor' as const,
    value: '-15%',
    aiInsight: 'Major competitor reducing margins - opportunity to capture market share'
  }
];

export const mockRecentActivity = [
  { action: "AI detected viral TikTok trend: LED Strip Lights", time: '30 min ago' },
  { action: "Price alert: ElectroMart dropped Smart Watch bands by 15%", time: '1 hr ago' },
  { action: "New supplier discovered: Premium Tech Source (4.9★)", time: '2 hrs ago' },
  { action: "Competitor analysis: TechStore Plus added 3 new products", time: '3 hrs ago' },
  { action: "Trend surge detected: Selfie Ring Lights +201% growth", time: '4 hrs ago' },
  { action: "Supplier price update: AliExpress Premium reduced minimums", time: '5 hrs ago' },
  { action: "AI recommended targeting: Blue Light Glasses market", time: '6 hrs ago' },
  { action: "Competitor out of stock: Digital Dreams Gaming Headsets", time: '7 hrs ago' },
  { action: "New product opportunity: Plant Grow Lights trending", time: '8 hrs ago' },
  { action: "Market analysis completed for Electronics niche", time: '1 day ago' }
];

// Enhanced chart data
export const mockChartData = [
  { day: 'Mon', searches: 45400, mentions: 1240, sentiment: 78, revenue: 12400, traffic: 8900 },
  { day: 'Tue', searches: 52398, mentions: 1420, sentiment: 82, revenue: 15600, traffic: 9800 },
  { day: 'Wed', searches: 61800, mentions: 1690, sentiment: 85, revenue: 18900, traffic: 11200 },
  { day: 'Thu', searches: 58908, mentions: 1580, sentiment: 79, revenue: 16800, traffic: 10600 },
  { day: 'Fri', searches: 67800, mentions: 1890, sentiment: 88, revenue: 21200, traffic: 12800 },
  { day: 'Sat', searches: 72800, mentions: 2100, sentiment: 86, revenue: 24600, traffic: 14200 },
  { day: 'Sun', searches: 69300, mentions: 1950, sentiment: 84, revenue: 22800, traffic: 13600 }
];

// Enhanced AI insights
export const mockAIInsights = [
  {
    category: 'Viral Opportunity',
    insight: 'LED Strip Lights are exploding on TikTok with 234% growth in 7 days. Gaming and room aesthetic content driving massive sales.',
    confidence: 'Critical',
    source: 'TikTok viral tracking, Instagram trends, YouTube analytics'
  },
  {
    category: 'Market Shift',
    insight: 'Selfie Ring Lights demand surged 201% as content creation becomes mainstream. Target aspiring influencers and remote workers.',
    confidence: 'High',
    source: 'Social media analytics, creator economy reports'
  },
  {
    category: 'Competitor Alert',
    insight: 'ElectroMart aggressive pricing detected across 12 products. They\'re trying to gain market share before holiday season.',
    confidence: 'High',
    source: 'Automated price monitoring, market intelligence'
  },
  {
    category: 'Supply Chain',
    insight: 'New premium supplier "Premium Tech Source" offers 1-hour response time. Perfect for high-value, low-volume testing.',
    confidence: 'Medium',
    source: 'Supplier network analysis, quality metrics'
  },
  {
    category: 'Health Trend',
    insight: 'Blue Light Glasses market expanding beyond remote workers to students and gamers. 178% growth indicates mass adoption.',
    confidence: 'High',
    source: 'Health trend analysis, demographic studies'
  },
  {
    category: 'Seasonal Opportunity',
    insight: 'Plant Grow Lights trending as indoor gardening becomes year-round hobby. Winter approaching = perfect timing.',
    confidence: 'High',
    source: 'Seasonal pattern analysis, gardening community insights'
  }
];

// Enhanced dashboard stats
export const mockDashboardStats = {
  totalProducts: 487,
  trendingProducts: 56,
  activeSuppliers: 234,
  trackedCompetitors: 67,
  aiInsightsToday: 23,
  potentialOpportunities: 18
};
