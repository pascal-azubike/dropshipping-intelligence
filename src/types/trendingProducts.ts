
export interface TrendingProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  growth: number;
  trendScore: number;
  searchVolume: number;
  competition: 'Low' | 'Medium' | 'High';
  profitMargin: number;
  demandLevel: number;
  supplierCount: number;
  aiInsight: string;
}
