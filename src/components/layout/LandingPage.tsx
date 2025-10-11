import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Sparkles, 
  Play,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap,
  Shield,
  BarChart3,
  TrendingUp,
  Workflow,
  Calendar,
  BookOpen,
  Award,
  Globe,
  Lightbulb,
  Target,
  Rocket,
  Heart,
  MessageSquare,
  Download
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  const [activeTab, setActiveTab] = useState("business");

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content Generation",
      description: "Generate compelling slide content with advanced AI that understands your topic and audience."
    },
    {
      icon: BookOpen,
      title: "Professional Templates",
      description: "Choose from 500+ professionally designed templates across multiple categories."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create complete presentations in minutes, not hours. Save time and boost productivity."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration and sharing features."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced data protection."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Create presentations in 50+ languages with AI-powered translation."
    }
  ];

  const templateCategories = [
    {
      id: "business",
      name: "Business",
      icon: BarChart3,
      count: 150,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
      description: "Professional business presentations, pitch decks, and corporate templates"
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: TrendingUp,
      count: 120,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
      description: "Marketing campaigns, social media strategies, and promotional materials"
    },
    {
      id: "swot",
      name: "SWOT Analysis",
      icon: Target,
      count: 80,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "Strategic planning frameworks and competitive analysis templates"
    },
    {
      id: "timeline",
      name: "Timeline",
      icon: Calendar,
      count: 90,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
      description: "Project timelines, roadmaps, and milestone tracking presentations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      content: "PhtangBanghanh transformed how we create presentations. What used to take hours now takes minutes, and the quality is outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      content: "The AI content generation is incredible. It understands our business context and creates relevant, engaging content every time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Manager",
      company: "GlobalSales Inc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      content: "Our sales presentations have never looked better. The templates are professional and the customization options are endless.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Presentations Created", value: "2M+", icon: BarChart3 },
    { label: "Templates Available", value: "500+", icon: BookOpen },
    { label: "Time Saved", value: "10M+ hrs", icon: Clock }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5 presentations per month",
        "Basic templates",
        "AI content generation",
        "Export to PDF",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professionals and small teams",
      features: [
        "Unlimited presentations",
        "Premium templates",
        "Advanced AI features",
        "Team collaboration",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "SSO integration",
        "Advanced security",
        "Custom templates",
        "Dedicated support",
        "API access",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered Presentations
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Create Stunning
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Presentations </span>
              in Minutes
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your ideas into professional presentations with AI-powered content generation, 
              beautiful templates, and seamless collaboration tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={onGetStarted} className="gap-2 text-lg px-8">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to create amazing presentations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make presentation creation effortless and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Templates
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional templates for every need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from hundreds of professionally designed templates across multiple categories.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              {templateCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="gap-2">
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {templateCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.name} Templates</h3>
                        <p className="text-muted-foreground">{category.count} templates available</p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <div className="flex gap-4">
                      <Button onClick={onGetStarted}>
                        Browse Templates
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={category.image}
                        alt={`${category.name} template preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold">
                      {category.count}+
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by thousands of professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our users have to say about their experience with PhtangBanghanh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose the perfect plan for you
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as you grow. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== "contact us" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={plan.name === "Free" ? onGetStarted : onLogin}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to transform your presentations?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who create stunning presentations with AI. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={onGetStarted} className="gap-2 text-lg px-8">
              Start Free Trial
              <Rocket className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <MessageSquare className="h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}