import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Target, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { LandingNavbar } from '@/components/Layout/LandingNavbar';
import { BackButton } from '@/components/ui/back-button';

const Careers = () => {
  const { isAuthenticated } = useAuth();

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of our AI algorithms for trend prediction and market analysis."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our dropshipping intelligence platform."
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Analyze market trends and develop predictive models for e-commerce insights."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Scale our infrastructure to handle massive data processing and real-time analytics."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive interfaces that make complex data accessible to entrepreneurs."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our customers succeed with TrendSpy AI and drive platform adoption."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipend"
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and autonomous work culture"
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Learning budget, conference attendance, and mentorship programs"
    },
    {
      icon: Users,
      title: "Equity & Ownership",
      description: "Competitive equity package so you can share in our success"
    },
    {
      icon: Target,
      title: "Mission Driven",
      description: "Work on meaningful projects that empower entrepreneurs worldwide"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Unlimited PTO, parental leave, and respect for personal time"
    }
  ];

  const content = (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        {isAuthenticated && <BackButton />}
        
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Join Our Team</Badge>
          <h1 className="text-4xl font-bold mb-6">
            Build the future of
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> e-commerce intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a passionate team of innovators working to democratize e-commerce success through AI-powered insights.
          </p>
        </div>

        {/* Company Values */}
        <Card className="fluent-card mb-12">
          <CardHeader>
            <CardTitle className="text-center">Why TrendSpy AI?</CardTitle>
            <CardDescription className="text-center">
              We're building more than just a product - we're creating the future of e-commerce
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Mission Driven</h3>
                <p className="text-sm text-muted-foreground">Empowering entrepreneurs to build successful businesses through data-driven insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Innovation First</h3>
                <p className="text-sm text-muted-foreground">Pushing the boundaries of AI and machine learning in e-commerce</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">People Focused</h3>
                <p className="text-sm text-muted-foreground">Building a diverse, inclusive team where everyone can do their best work</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="fluent-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="fluent-card hover:shadow-fluentHover transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <Card className="fluent-card">
          <CardHeader>
            <CardTitle className="text-center">Don't see a perfect fit?</CardTitle>
            <CardDescription className="text-center">
              We're always looking for talented people to join our team
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Send us your resume and tell us how you'd like to contribute to TrendSpy AI's mission.
            </p>
            <Button size="lg">
              Send Resume
            </Button>
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

export default Careers;
