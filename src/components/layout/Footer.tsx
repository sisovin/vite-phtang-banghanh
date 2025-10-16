import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Presentation,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Templates", href: "#templates" },
        { name: "AI Generator", href: "#ai-generator" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Enterprise", href: "#enterprise" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "Blog", href: "#blog" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
        { name: "Security", href: "#security" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "YouTube", icon: Youtube, href: "#youtube" },
    { name: "GitHub", icon: Github, href: "#github" }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Generate content with advanced AI"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security"
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Create presentations in minutes"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Work together seamlessly"
    }
  ];

  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest updates on new templates, AI features, and presentation tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="gap-2">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Presentation className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">PhtangBanghanh</h2>
                <p className="text-sm text-muted-foreground">AI Presentation Generator</p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-md">
              Create professional presentations in minutes with our AI-powered platform.
              Choose from hundreds of templates and let AI generate compelling content for your slides.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="bg-background rounded-lg p-2 border">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm">{feature.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-semibold text-base">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@phtangbanghanh.com"
                className="flex items-center gap-3 hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors" />
                <span>hello@phtangbanghanh.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 hover:text-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-1 lg:col-span-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-base">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} PhtangBanghanh. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#cookies" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors group"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}