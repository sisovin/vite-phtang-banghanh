import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Presentation, 
  Plus, 
  Clock, 
  BookOpen, 
  TrendingUp,
  Users,
  BarChart3,
  Workflow,
  Calendar,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardProps {
  onBrowseTemplates: () => void;
  onSelectTemplate: (template: any) => void;
}

export function Dashboard({ onBrowseTemplates, onSelectTemplate }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for saved presentations
  const savedPresentations = [
    {
      id: 1,
      title: "Q4 Marketing Strategy",
      template: "Marketing",
      lastModified: "2 hours ago",
      slides: 12,
      status: "draft"
    },
    {
      id: 2,
      title: "Product Launch Plan",
      template: "Business",
      lastModified: "1 day ago",
      slides: 8,
      status: "completed"
    },
    {
      id: 3,
      title: "SWOT Analysis 2024",
      template: "SWOT",
      lastModified: "3 days ago",
      slides: 6,
      status: "completed"
    }
  ];

  // Mock data for recent templates
  const recentTemplates = [
    {
      id: 1,
      name: "Business Pitch",
      category: "Business",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
      slides: 10,
      popular: true
    },
    {
      id: 2,
      name: "Marketing Campaign",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80",
      slides: 8,
      popular: false
    },
    {
      id: 3,
      name: "Project Timeline",
      category: "Timeline",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80",
      slides: 6,
      popular: true
    }
  ];

  const handleTemplateSelect = (template: any) => {
    onSelectTemplate(template);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Presentation className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">PhtangBanghanh</h1>
                <p className="text-sm text-muted-foreground">AI Presentation Generator</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search presentations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button onClick={onBrowseTemplates} className="gap-2">
                <Plus className="h-4 w-4" />
                New Presentation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Presentation className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Total Presentations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4</p>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Saved Presentations */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Presentations</CardTitle>
                    <CardDescription>
                      Manage and continue working on your saved presentations
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedPresentations.map((presentation) => (
                    <div
                      key={presentation.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleTemplateSelect(presentation)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Presentation className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{presentation.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary">{presentation.template}</Badge>
                            <span>•</span>
                            <span>{presentation.slides} slides</span>
                            <span>•</span>
                            <span>Modified {presentation.lastModified}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={presentation.status === 'completed' ? 'default' : 'outline'}
                        >
                          {presentation.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Templates */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recently Used Templates</CardTitle>
                    <CardDescription>
                      Quick access to your frequently used templates
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={onBrowseTemplates}>
                    View All Templates
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="group cursor-pointer"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      <div className="relative overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all">
                        <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                          <img
                            src={template.thumbnail}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {template.name}
                            </h3>
                            {template.popular && (
                              <Badge variant="secondary" className="text-xs">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline">{template.category}</Badge>
                            <span>•</span>
                            <span>{template.slides} slides</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={onBrowseTemplates} 
                  className="w-full justify-start gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Browse Templates
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                >
                  <Users className="h-4 w-4" />
                  Team Presentations
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Template Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Business", icon: BarChart3, count: 24 },
                  { name: "Marketing", icon: TrendingUp, count: 18 },
                  { name: "SWOT Analysis", icon: Workflow, count: 12 },
                  { name: "Timeline", icon: Calendar, count: 15 },
                  { name: "Process", icon: Workflow, count: 9 }
                ].map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={onBrowseTemplates}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💡 Pro Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use specific keywords when generating AI content to get more targeted and relevant slide content for your presentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}