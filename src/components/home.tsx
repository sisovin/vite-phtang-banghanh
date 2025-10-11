import { useState } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { LandingPage } from "./layout/LandingPage";
import { Dashboard } from "./dashboard/Dashboard";
import { TemplateGallery } from "./templates/TemplateGallery";
import { AIContentGenerator } from "./ai-generator/AIContentGenerator";
import { AuthForm } from "./auth/AuthForm";

function Home() {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'dashboard' | 'templates' | 'generator'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  const handleSelectTemplate = (template: any) => {
    setSelectedTemplate(template);
    setCurrentView('generator');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedTemplate(null);
  };

  const handleBrowseTemplates = () => {
    setCurrentView('templates');
  };

  // Landing page view (unauthenticated)
  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onGetStarted={handleGetStarted}
          onLogin={() => setCurrentView('auth')}
          isAuthenticated={false}
        />
        <LandingPage 
          onGetStarted={handleGetStarted}
          onLogin={() => setCurrentView('auth')}
        />
        <Footer />
      </div>
    );
  }

  // Auth form view
  if (currentView === 'auth') {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onGetStarted={handleGetStarted}
          onLogin={() => setCurrentView('auth')}
          isAuthenticated={false}
        />
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <AuthForm onLogin={handleLogin} />
        </div>
        <Footer />
      </div>
    );
  }

  // Authenticated views
  return (
    <div className="min-h-screen bg-background">
      <Header 
        onGetStarted={handleGetStarted}
        onLogin={() => setCurrentView('auth')}
        isAuthenticated={true}
      />
      
      <main className="min-h-[calc(100vh-4rem)]">
        {currentView === 'dashboard' && (
          <Dashboard 
            onBrowseTemplates={handleBrowseTemplates}
            onSelectTemplate={handleSelectTemplate}
          />
        )}
        
        {currentView === 'templates' && (
          <TemplateGallery 
            onSelectTemplate={handleSelectTemplate}
            onBack={handleBackToDashboard}
          />
        )}
        
        {currentView === 'generator' && selectedTemplate && (
          <AIContentGenerator 
            template={selectedTemplate}
            onBack={handleBackToDashboard}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;