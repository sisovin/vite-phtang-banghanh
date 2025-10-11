import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Sparkles, 
  RefreshCw, 
  Save, 
  Download,
  Eye,
  Edit,
  Plus,
  Trash2,
  Copy,
  Wand2,
  FileText,
  Image,
  BarChart3
} from "lucide-react";

interface AIContentGeneratorProps {
  template: any;
  onBack: () => void;
}

export function AIContentGenerator({ template, onBack }: AIContentGeneratorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  
  // Form state
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("");
  const [audience, setAudience] = useState("");
  const [duration, setDuration] = useState("");
  
  // Generated content state
  const [generatedSlides, setGeneratedSlides] = useState([
    {
      id: 1,
      title: "Introduction",
      content: "Welcome to our presentation on [Topic]. Today we'll explore key insights and strategies that will help drive success.",
      type: "title",
      notes: "Start with a strong hook to capture audience attention"
    },
    {
      id: 2,
      title: "Problem Statement",
      content: "Current challenges in the market include increasing competition, changing customer expectations, and technological disruption.",
      type: "content",
      notes: "Use specific data points to support the problem statement"
    },
    {
      id: 3,
      title: "Our Solution",
      content: "Our innovative approach addresses these challenges through strategic implementation of cutting-edge solutions.",
      type: "content",
      notes: "Highlight unique value propositions and differentiators"
    }
  ]);

  const steps = [
    { id: 1, title: "Input Details", description: "Provide topic and preferences" },
    { id: 2, title: "Generate Content", description: "AI creates your slides" },
    { id: 3, title: "Review & Edit", description: "Customize generated content" },
    { id: 4, title: "Finalize", description: "Save and export presentation" }
  ];

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual" },
    { value: "persuasive", label: "Persuasive" },
    { value: "educational", label: "Educational" },
    { value: "inspirational", label: "Inspirational" }
  ];

  const audienceOptions = [
    { value: "executives", label: "Executives" },
    { value: "team", label: "Team Members" },
    { value: "clients", label: "Clients" },
    { value: "investors", label: "Investors" },
    { value: "general", label: "General Audience" }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate AI generation process
    const progressSteps = [20, 40, 60, 80, 100];
    for (const step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setGenerationProgress(step);
    }
    
    // Simulate generated content based on inputs
    const newSlides = [
      {
        id: 1,
        title: `${topic} - Introduction`,
        content: `Welcome to our comprehensive presentation on ${topic}. Today we'll explore key insights, strategies, and actionable recommendations.`,
        type: "title",
        notes: "Customize this introduction based on your specific audience"
      },
      {
        id: 2,
        title: "Key Objectives",
        content: `Our main objectives include: understanding ${keywords.split(',')[0]}, implementing ${keywords.split(',')[1] || 'best practices'}, and achieving measurable results.`,
        type: "content",
        notes: "Add specific metrics and KPIs relevant to your goals"
      },
      {
        id: 3,
        title: "Current Situation",
        content: `The current landscape presents both challenges and opportunities. Key factors include market trends, competitive dynamics, and emerging technologies.`,
        type: "content",
        notes: "Include relevant data and statistics to support your points"
      },
      {
        id: 4,
        title: "Proposed Strategy",
        content: `Our strategic approach focuses on leveraging ${keywords.split(',')[0]} to drive innovation and growth while maintaining operational excellence.`,
        type: "content",
        notes: "Detail specific action items and timelines"
      },
      {
        id: 5,
        title: "Expected Outcomes",
        content: `Implementation of this strategy will result in improved performance, enhanced efficiency, and sustainable competitive advantage.`,
        type: "content",
        notes: "Quantify expected results with specific metrics"
      },
      {
        id: 6,
        title: "Next Steps",
        content: `Moving forward, we recommend immediate action on priority initiatives, regular progress reviews, and continuous optimization.`,
        type: "content",
        notes: "Assign clear ownership and deadlines for each action item"
      }
    ];
    
    setGeneratedSlides(newSlides);
    setIsGenerating(false);
    setCurrentStep(3);
  };

  const handleSlideEdit = (slideId: number, field: string, value: string) => {
    setGeneratedSlides(slides => 
      slides.map(slide => 
        slide.id === slideId ? { ...slide, [field]: value } : slide
      )
    );
  };

  const addSlide = () => {
    const newSlide = {
      id: Date.now(),
      title: "New Slide",
      content: "Add your content here...",
      type: "content",
      notes: "Add speaker notes here"
    };
    setGeneratedSlides([...generatedSlides, newSlide]);
  };

  const deleteSlide = (slideId: number) => {
    setGeneratedSlides(slides => slides.filter(slide => slide.id !== slideId));
  };

  const duplicateSlide = (slideId: number) => {
    const slideToClone = generatedSlides.find(slide => slide.id === slideId);
    if (slideToClone) {
      const newSlide = { ...slideToClone, id: Date.now(), title: `${slideToClone.title} (Copy)` };
      setGeneratedSlides([...generatedSlides, newSlide]);
    }
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
                Back to Templates
              </Button>
              <div>
                <h1 className="text-2xl font-bold">AI Content Generator</h1>
                <p className="text-sm text-muted-foreground">
                  Using template: {template.name}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {currentStep >= 3 && (
                <>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center gap-3 ${
                    currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.id}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-px mx-4 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Step 1: Input Details */}
        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  Tell us about your presentation
                </CardTitle>
                <CardDescription>
                  Provide details about your topic and preferences to generate tailored content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="topic">Presentation Topic *</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., Q4 Marketing Strategy, Product Launch Plan"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Input
                    id="keywords"
                    placeholder="e.g., digital marketing, ROI, customer acquisition"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Target Audience</Label>
                    <Select value={audience} onValueChange={setAudience}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        {audienceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Presentation Duration</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <Button variant="outline" onClick={onBack}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep(2)}
                    disabled={!topic.trim()}
                  >
                    Continue
                    <Sparkles className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Generate Content */}
        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Generate AI Content
                </CardTitle>
                <CardDescription>
                  Review your inputs and generate presentation content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Summary */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h3 className="font-medium">Your Inputs:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Topic:</span> {topic}
                    </div>
                    <div>
                      <span className="font-medium">Keywords:</span> {keywords || "None specified"}
                    </div>
                    <div>
                      <span className="font-medium">Tone:</span> {tone || "Not specified"}
                    </div>
                    <div>
                      <span className="font-medium">Audience:</span> {audience || "Not specified"}
                    </div>
                  </div>
                </div>

                {isGenerating && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 text-primary">
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        <span className="font-medium">Generating your presentation...</span>
                      </div>
                    </div>
                    <Progress value={generationProgress} className="w-full" />
                    <p className="text-center text-sm text-muted-foreground">
                      {generationProgress < 30 && "Analyzing your topic..."}
                      {generationProgress >= 30 && generationProgress < 60 && "Creating slide structure..."}
                      {generationProgress >= 60 && generationProgress < 90 && "Generating content..."}
                      {generationProgress >= 90 && "Finalizing presentation..."}
                    </p>
                  </div>
                )}

                {!isGenerating && (
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back
                    </Button>
                    <Button onClick={handleGenerate}>
                      Generate Content
                      <Sparkles className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Review & Edit */}
        {currentStep === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Slide List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Slides</CardTitle>
                    <Button size="sm" onClick={addSlide}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {generatedSlides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {index + 1}. {slide.title}
                        </span>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => duplicateSlide(slide.id)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => deleteSlide(slide.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {slide.content}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Slide Editor */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="h-5 w-5" />
                    Edit Slide Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {generatedSlides.length > 0 && (
                    <Tabs defaultValue="content" className="w-full">
                      <TabsList>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="notes">Speaker Notes</TabsTrigger>
                        <TabsTrigger value="design">Design</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="content" className="space-y-4">
                        <div className="space-y-2">
                          <Label>Slide Title</Label>
                          <Input
                            value={generatedSlides[0]?.title || ""}
                            onChange={(e) => handleSlideEdit(generatedSlides[0]?.id, 'title', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Content</Label>
                          <Textarea
                            rows={8}
                            value={generatedSlides[0]?.content || ""}
                            onChange={(e) => handleSlideEdit(generatedSlides[0]?.id, 'content', e.target.value)}
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Regenerate
                          </Button>
                          <Button size="sm" variant="outline">
                            <Image className="h-4 w-4 mr-2" />
                            Add Image
                          </Button>
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Add Chart
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="notes" className="space-y-4">
                        <div className="space-y-2">
                          <Label>Speaker Notes</Label>
                          <Textarea
                            rows={6}
                            placeholder="Add speaker notes for this slide..."
                            value={generatedSlides[0]?.notes || ""}
                            onChange={(e) => handleSlideEdit(generatedSlides[0]?.id, 'notes', e.target.value)}
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="design" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Layout</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select layout" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="title">Title Slide</SelectItem>
                                <SelectItem value="content">Content</SelectItem>
                                <SelectItem value="two-column">Two Column</SelectItem>
                                <SelectItem value="image-text">Image + Text</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Theme</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select theme" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="modern">Modern</SelectItem>
                                <SelectItem value="classic">Classic</SelectItem>
                                <SelectItem value="minimal">Minimal</SelectItem>
                                <SelectItem value="bold">Bold</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}