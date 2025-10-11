import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Presentation, 
  Menu, 
  Sparkles, 
  BookOpen, 
  Users, 
  BarChart3,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

interface HeaderProps {
  onGetStarted?: () => void;
  onLogin?: () => void;
  isAuthenticated?: boolean;
}

export function Header({ onGetStarted, onLogin, isAuthenticated = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "Templates",
      href: "#templates",
      description: "Browse our collection of professional templates",
      icon: BookOpen
    },
    {
      title: "Features",
      href: "#features", 
      description: "Discover AI-powered presentation tools",
      icon: Sparkles
    },
    {
      title: "Pricing",
      href: "#pricing",
      description: "Choose the perfect plan for your needs",
      icon: BarChart3
    },
    {
      title: "About",
      href: "#about",
      description: "Learn more about PhtangBanghanh",
      icon: Users
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Presentation className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PhtangBanghanh</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">AI Presentation Generator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#templates"
                          >
                            <Sparkles className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              AI Templates
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Professional templates powered by AI for every presentation need.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        <NavigationMenuLink href="#business" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Business</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional business presentation templates
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Marketing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Marketing campaign and strategy templates
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#swot" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">SWOT Analysis</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic planning and analysis frameworks
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#features" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" onClick={onLogin}>
                  Sign In
                </Button>
                <Button onClick={onGetStarted} className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4 mr-2" />
                  Upgrade
                </Button>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">U</span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="bg-primary rounded-lg p-2">
                      <Presentation className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-semibold">PhtangBanghanh</h2>
                      <p className="text-xs text-muted-foreground">AI Presentation Generator</p>
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </a>
                  ))}
                  
                  <div className="pt-4 border-t space-y-3">
                    {!isAuthenticated ? (
                      <>
                        <Button variant="outline" className="w-full" onClick={onLogin}>
                          Sign In
                        </Button>
                        <Button className="w-full gap-2" onClick={onGetStarted}>
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full gap-2">
                          <Star className="h-4 w-4" />
                          Upgrade Plan
                        </Button>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground text-sm font-medium">U</span>
                          </div>
                          <div>
                            <div className="font-medium">User Account</div>
                            <div className="text-sm text-muted-foreground">Manage your profile</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}