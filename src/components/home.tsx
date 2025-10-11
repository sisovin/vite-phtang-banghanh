import { useState } from "react";
import { Dashboard } from "./dashboard/Dashboard";
import { TemplateGallery } from "./templates/TemplateGallery";
import { AIContentGenerator } from "./ai-generator/AIContentGenerator";
import { AuthForm } from "./auth/AuthForm";

function Home() {
  const [currentView, setCurrentView] = useState<'auth' | 'dashboard' | 'templates' | 'generator'>('auth');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <AuthForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
}

export default Home;