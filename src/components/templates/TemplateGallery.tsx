import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  Star,
  Eye,
  Download,
  BarChart3,
  TrendingUp,
  Workflow,
  Calendar,
  Users
} from "lucide-react";

interface TemplateGalleryProps {
  onSelectTemplate: (template: any) => void;
  onBack: () => void;
}

export function TemplateGallery({ onSelectTemplate, onBack }: TemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock template data
  const templates = [
    {
      id: 1,
      name: "Business Pitch Deck",
      category: "Business",
      description: "Professional pitch deck template for startups and business presentations",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
      slides: 12,
      downloads: 1250,
      rating: 4.8,
      popular: true,
      premium: false
    },
    {
      id: 2,
      name: "Marketing Campaign Overview",
      category: "Marketing",
      description: "Comprehensive template for marketing campaign presentations",
      thumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
      slides: 10,
      downloads: 890,
      rating: 4.6,
      popular: true,
      premium: false
    },
    {
      id: 3,
      name: "SWOT Analysis Framework",
      category: "SWOT",
      description: "Strategic planning template with SWOT analysis components",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      slides: 8,
      downloads: 670,
      rating: 4.7,
      popular: false,
      premium: false
    },
    {
      id: 4,
      name: "Project Timeline Roadmap",
      category: "Timeline",
      description: "Visual timeline template for project planning and milestones",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
      slides: 6,
      downloads: 540,
      rating: 4.5,
      popular: false,
      premium: false
    },
    {
      id: 5,
      name: "Process Flow Diagram",
      category: "Process",
      description: "Step-by-step process visualization template",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      slides: 9,
      downloads: 420,
      rating: 4.4,
      popular: false,
      premium: false
    },
    {
      id: 6,
      name: "Team Structure & Roles",
      category: "Business",
      description: "Organizational chart and team presentation template",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      slides: 7,
      downloads: 380,
      rating: 4.3,
      popular: false,
      premium: true
    },
    {
      id: 7,
      name: "Social Media Strategy",
      category: "Marketing",
      description: "Complete social media marketing strategy template",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
      slides: 14,
      downloads: 720,
      rating: 4.6,
      popular: true,
      premium: true
    },
    {
      id: 8,
      name: "Competitive Analysis",
      category: "SWOT",
      description: "Market research and competitor analysis framework",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      slides: 11,
      downloads: 590,
      rating: 4.5,
      popular: false,
      premium: false
    }
  ];

  const categories = [
    { id: "all", name: "All Templates", icon: Grid3X3, count: templates.length },
    { id: "Business", name: "Business", icon: BarChart3, count: templates.filter(t => t.category === "Business").length },
    { id: "Marketing", name: "Marketing", icon: TrendingUp, count: templates.filter(t => t.category === "Marketing").length },
    { id: "SWOT", name: "SWOT Analysis", icon: Workflow, count: templates.filter(t => t.category === "SWOT").length },
    { id: "Timeline", name: "Timeline", icon: Calendar, count: templates.filter(t => t.category === "Timeline").length },
    { id: "Process", name: "Process", icon: Workflow, count: templates.filter(t => t.category === "Process").length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template: any) => {
    onSelectTemplate(template);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Template Gallery</h1>
                <p className="text-sm text-muted-foreground">
                  Choose from {templates.length} professional templates
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="h-4 w-4" />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge 
                        variant={selectedCategory === category.id ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sort by</label>
                    <select className="w-full p-2 border rounded-md text-sm">
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Highest Rated</option>
                      <option>Most Downloaded</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Type</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Free Templates</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Premium Templates</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Templates */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredTemplates.length} templates
              </p>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="Business">Business</TabsTrigger>
                  <TabsTrigger value="Marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="SWOT">SWOT</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <Card 
                    key={template.id} 
                    className="group cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100">
                        <img
                          src={template.thumbnail}
                          alt={template.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        {template.popular && (
                          <Badge className="bg-orange-500 hover:bg-orange-600">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {template.premium && (
                          <Badge variant="secondary">Premium</Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {template.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {template.downloads}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {template.rating}
                          </span>
                        </div>
                        <Badge variant="outline">{template.slides} slides</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTemplates.map((template) => (
                  <Card 
                    key={template.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="w-32 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                          <img
                            src={template.thumbnail}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg">{template.name}</h3>
                            <div className="flex gap-2">
                              {template.popular && (
                                <Badge className="bg-orange-500">Popular</Badge>
                              )}
                              {template.premium && (
                                <Badge variant="secondary">Premium</Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-3">
                            {template.description}
                          </p>
                          
                          <div className="flex items-center gap-6 text-sm">
                            <Badge variant="outline">{template.category}</Badge>
                            <span className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {template.downloads} downloads
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {template.rating}
                            </span>
                            <span>{template.slides} slides</span>
                          </div>
                        </div>
                        
                        <Button>
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No templates found matching your criteria</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
                <Button variant="outline" onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}