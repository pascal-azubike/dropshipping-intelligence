import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { BackButton } from '@/components/ui/back-button';

const Blog = () => {
  const { isAuthenticated } = useAuth();

  const blogPosts = [
    {
      title: "10 Trending Products to Watch in 2024",
      excerpt: "Discover the hottest product trends that are dominating the dropshipping market this year.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      category: "Trends",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "How AI is Revolutionizing Product Research",
      excerpt: "Learn how artificial intelligence is changing the way dropshippers discover winning products.",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      category: "Technology",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Supplier Vetting: A Complete Guide",
      excerpt: "Everything you need to know about finding and working with reliable suppliers.",
      author: "Emily Watson",
      date: "Dec 10, 2024",
      category: "Suppliers",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Market Analysis: Q4 E-commerce Trends",
      excerpt: "Deep dive into the latest e-commerce market trends and what they mean for dropshippers.",
      author: "David Kim",
      date: "Dec 8, 2024",
      category: "Analysis",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Building a Profitable Dropshipping Store",
      excerpt: "Step-by-step guide to creating a high-converting dropshipping store from scratch.",
      author: "Lisa Park",
      date: "Dec 5, 2024",
      category: "Business",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Social Media Marketing for Dropshippers",
      excerpt: "Proven strategies to leverage social media for your dropshipping business growth.",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      category: "Marketing",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Trends", "Technology", "Suppliers", "Analysis", "Business", "Marketing"];

  const content = (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        {isAuthenticated && <BackButton />}
        
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">TrendSpy AI Blog</Badge>
          <h1 className="text-4xl font-bold mb-6">
            Latest Insights &
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Expert Tips</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with the latest trends, strategies, and insights in dropshipping and e-commerce.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="fluent-card mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-blue-500/20 p-8 flex items-center justify-center">
              <TrendingUp className="h-24 w-24 text-primary" />
            </div>
            <div className="md:w-2/3 p-8">
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6 text-lg">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button>
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="fluent-card hover:shadow-fluentHover transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="fluent-card mt-12">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary mr-2" />
              Stay Updated
            </CardTitle>
            <CardDescription className="text-center">
              Get the latest insights delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Join thousands of successful dropshippers who rely on our weekly insights to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <>
        <LandingNavbar />
        {content}
      </>
    );
  }

  return content;
};

export default Blog;
