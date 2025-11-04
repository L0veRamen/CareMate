import React, { useState, useEffect, createContext, useContext } from 'react';
import { LanguageSelection } from './components/screens/LanguageSelection';
import { OnboardingWelcome } from './components/screens/OnboardingWelcome';
import { AndreDashboard } from './components/screens/andre/AndreDashboard';
import { AndreLogData } from './components/screens/andre/AndreLogData';
import { AndreSummary } from './components/screens/andre/AndreSummary';
import { AndreTrends } from './components/screens/andre/AndreTrends';
import { RubyDashboard } from './components/screens/ruby/RubyDashboard';
import { RubyLogData } from './components/screens/ruby/RubyLogData';
import { RubyProfile } from './components/screens/ruby/RubyProfile';
import { RubyTrends } from './components/screens/ruby/RubyTrends';
import { RubySummary } from './components/screens/ruby/RubySummary';
import { LeoDashboard } from './components/screens/leo/LeoDashboard';
import { LeoLogData } from './components/screens/leo/LeoLogData';
import { LeoOnboarding } from './components/screens/leo/LeoOnboarding';
import { LeoTrends } from './components/screens/leo/LeoTrends';
import { LeoSummary } from './components/screens/leo/LeoSummary';
import { Users } from 'lucide-react';

// Import the services we created
import { storageService } from './services/storageService';
import { analysisEngine } from './services/analysisEngine';
import { aiInsightService } from './services/aiInsightService';
import { pdfExportService } from './services/pdfExportService';
import { PERSONAS } from './services/personaData';
import type { UserProfile, HealthData, Alert, Recommendation, WeekSummary, AIInsight, Language } from './services/types';

// Create Context for global app state
interface AppContextType {
  profile: UserProfile | null;
  healthData: HealthData[];
  weekSummary: WeekSummary | null;
  alerts: Alert[];
  recommendations: Recommendation[];
  aiInsight: AIInsight | null;
  language: Language;
  setLanguage: (lang: Language) => void;
  refreshData: () => void;
  loadPersona: (personaId: string) => void;
  addHealthData: (data: HealthData) => void;
  generateAIInsight: () => Promise<void>;
  exportPDF: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

type Screen = 
  | 'language'
  | 'persona-select'
  | 'onboarding'
  | 'andre-dashboard'
  | 'andre-log'
  | 'andre-trends'
  | 'andre-summary'
  | 'ruby-dashboard'
  | 'ruby-log'
  | 'ruby-profile'
  | 'ruby-trends'
  | 'ruby-summary'
  | 'leo-dashboard'
  | 'leo-log'
  | 'leo-onboarding'
  | 'leo-trends'
  | 'leo-summary';

type Persona = 'andre' | 'ruby' | 'leo' | null;

export default function App() {
  // UI State
  const [screen, setScreen] = useState<Screen>('language');
  const [persona, setPersona] = useState<Persona>(null);

  // Data State
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [healthData, setHealthData] = useState<HealthData[]>([]);
  const [weekSummary, setWeekSummary] = useState<WeekSummary | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [aiInsight, setAIInsight] = useState<AIInsight | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  // Initialize app - check if user already exists
  useEffect(() => {
    const existingProfile = storageService.getUserProfile();
    const storedLanguage = storageService.getLanguage();
    
    setLanguage(storedLanguage);
    
    if (existingProfile) {
      setProfile(existingProfile);
      refreshData();
      
      // Map profile ID to persona and go to dashboard
      const personaId = existingProfile.id;
      if (personaId === 'andre') {
        setPersona('andre');
        setScreen('andre-dashboard');
      } else if (personaId === 'ruby') {
        setPersona('ruby');
        setScreen('ruby-dashboard');
      } else if (personaId === 'leo') {
        setPersona('leo');
        setScreen('leo-dashboard');
      }
    }
  }, []);

  // Refresh all data from storage and run analysis
  const refreshData = () => {
    const data = storageService.getAllHealthData();
    setHealthData(data);

    if (data.length > 0) {
      const last7Days = storageService.getLast7DaysData();
      const summary = analysisEngine.calculateWeekSummary(last7Days);
      const newAlerts = analysisEngine.generateAlerts(last7Days, language);
      const newRecommendations = analysisEngine.generateRecommendations(
        last7Days,
        summary,
        newAlerts,
        language
      );

      setWeekSummary(summary);
      setAlerts(newAlerts);
      setRecommendations(newRecommendations);
    }

    // Load cached AI insight if available
    const cachedInsight = storageService.getAIInsight();
    setAIInsight(cachedInsight);
  };

  // Load a persona's data
  const loadPersona = (personaId: string) => {
    storageService.loadPersonaData(personaId);
    const loadedProfile = storageService.getUserProfile();
    const loadedLanguage = storageService.getLanguage();
    
    setProfile(loadedProfile);
    setLanguage(loadedLanguage);
    refreshData();
  };

  // Add new health data
  const addHealthData = (data: HealthData) => {
    storageService.addHealthData(data);
    refreshData();
  };

  // Generate AI insight
  const generateAIInsight = async () => {
    if (!profile) return;
    
    const canRequest = storageService.canRequestNewInsight();
    if (!canRequest) {
      alert('You can only generate one insight per day. Check back tomorrow!');
      return;
    }

    try {
      const last7Days = storageService.getLast7DaysData();
      const summary = analysisEngine.calculateWeekSummary(last7Days);
      
      // Try to generate with API, fallback to mock
      let insight: AIInsight;
      try {
        insight = await aiInsightService.generateInsight(
          profile,
          last7Days,
          summary,
          language
        );
      } catch (error) {
        console.warn('AI API failed, using mock insight:', error);
        insight = aiInsightService.generateMockInsight(profile, summary, language);
      }

      storageService.saveAIInsight(insight);
      setAIInsight(insight);
    } catch (error) {
      console.error('Error generating insight:', error);
      alert('Failed to generate insight. Please try again.');
    }
  };

  // Export PDF
  const exportPDF = async () => {
    if (!profile) return;

    try {
      const allData = storageService.getAllHealthData();
      const last7Days = storageService.getLast7DaysData();
      const summary = analysisEngine.calculateWeekSummary(last7Days);
      const currentAlerts = analysisEngine.generateAlerts(last7Days, language);

      const pdfBlob = await pdfExportService.generatePDF({
        profile,
        healthData: allData,
        summary,
        alerts: currentAlerts,
        language
      });

      pdfExportService.downloadPDF(
        pdfBlob,
        `health-summary-${profile.name}-${new Date().toISOString().split('T')[0]}.pdf`
      );
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  // Context value
  const contextValue: AppContextType = {
    profile,
    healthData,
    weekSummary,
    alerts,
    recommendations,
    aiInsight,
    language,
    setLanguage: (lang) => {
      setLanguage(lang);
      storageService.setLanguage(lang);
      refreshData(); // Refresh to update language-dependent content
    },
    refreshData,
    loadPersona,
    addHealthData,
    generateAIInsight,
    exportPDF
  };

  const handleLanguageSelect = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    storageService.setLanguage(lang);
    setScreen('persona-select');
  };

  const handlePersonaSelect = (selectedPersona: Persona) => {
    setPersona(selectedPersona);
    
    // Load the persona's data
    if (selectedPersona) {
      loadPersona(selectedPersona);
    }
    
    // Navigate to onboarding
    if (selectedPersona === 'andre') {
      setScreen('onboarding');
    } else if (selectedPersona === 'ruby') {
      setScreen('onboarding');
    } else if (selectedPersona === 'leo') {
      setScreen('leo-onboarding');
    }
  };

  const handleOnboardingComplete = () => {
    if (persona === 'andre') {
      setScreen('andre-dashboard');
    } else if (persona === 'ruby') {
      setScreen('ruby-profile');
    } else if (persona === 'leo') {
      setScreen('leo-dashboard');
    }
  };

  const handleNavigation = (target: Screen) => {
    setScreen(target);
  };

  const handleReset = () => {
    // Clear all data
    if (confirm('Are you sure you want to reset? This will clear all data.')) {
      storageService.clearAllData();
      setScreen('language');
      setPersona(null);
      setProfile(null);
      setHealthData([]);
      setWeekSummary(null);
      setAlerts([]);
      setRecommendations([]);
      setAIInsight(null);
    }
  };

  // Persona selection screen with updated info
  if (screen === 'persona-select') {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Select a Persona</h1>
            <p className="text-gray-600">
              Choose a user profile to explore CareMate with realistic health data
            </p>
          </div>

          <div className="space-y-4">
            {/* André - Updated to match our persona data */}
            <button
              onClick={() => handlePersonaSelect('andre')}
              className="w-full p-6 bg-white rounded-xl border-2 border-[#E5E7EB] hover:border-[#2563EB] transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">👨‍💼</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">André (72)</h3>
                  <p className="text-sm text-gray-600 mb-2">Manager with Type 2 Diabetes</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#DBEAFE] text-[#2563EB] rounded text-xs font-medium">Français</span>
                    <span className="px-2 py-1 bg-[#DBEAFE] text-[#2563EB] rounded text-xs font-medium">English</span>
                    <span className="px-2 py-1 bg-[#FEE2E2] text-[#EF4444] rounded text-xs font-medium">Diabetes</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">7 days of glucose & BP tracking</p>
                </div>
              </div>
            </button>

            {/* Ruby - Updated to match our persona data */}
            <button
              onClick={() => handlePersonaSelect('ruby')}
              className="w-full p-6 bg-white rounded-xl border-2 border-[#E5E7EB] hover:border-[#2563EB] transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">👩</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ruby (34)</h3>
                  <p className="text-sm text-gray-600 mb-2">Young Professional - Recently diagnosed with hypertension, managing work stress</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#DBEAFE] text-[#2563EB] rounded text-xs font-medium">English</span>
                    <span className="px-2 py-1 bg-[#FEF3C7] text-[#F59E0B] rounded text-xs font-medium">Hypertension</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">7 days of BP & activity tracking</p>
                </div>
              </div>
            </button>

            {/* Leo - Updated to match our persona data */}
            <button
              onClick={() => handlePersonaSelect('leo')}
              className="w-full p-6 bg-white rounded-xl border-2 border-[#E5E7EB] hover:border-[#2563EB] transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">🧑‍🎓</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Leo (17)</h3>
                  <p className="text-sm text-gray-600 mb-2">Student Managing Exam Stress</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#DBEAFE] text-[#2563EB] rounded text-xs font-medium">English</span>
                    <span className="px-2 py-1 bg-[#D1FAE5] text-[#10B981] rounded text-xs font-medium">Student Health</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">7 days of stress & sleep tracking</p>
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={handleReset}
            className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Language Selection
          </button>
        </div>
      </div>
    );
  }

  // Wrap everything in AppContext provider
  return (
    <AppContext.Provider value={contextValue}>
      {screen === 'language' && (
        <LanguageSelection onSelectLanguage={handleLanguageSelect} />
      )}
      {screen === 'onboarding' && (
        <OnboardingWelcome
          language={language}
          onContinue={handleOnboardingComplete}
          personaType={persona || 'andre'}
        />
      )}
      {screen === 'andre-dashboard' && (
        <AndreDashboard 
          onNavigate={handleNavigation} 
          language={language}
        />
      )}
      {screen === 'andre-log' && (
        <AndreLogData
          onBack={() => setScreen('andre-dashboard')}
          onSave={() => setScreen('andre-dashboard')}
          language={language}
        />
      )}
      {screen === 'andre-trends' && (
        <AndreTrends 
          onNavigate={handleNavigation} 
          language={language}
        />
      )}
      {screen === 'andre-summary' && (
        <AndreSummary 
          onNavigate={handleNavigation} 
          language={language}
        />
      )}
      {screen === 'ruby-dashboard' && (
        <RubyDashboard onNavigate={handleNavigation} />
      )}
      {screen === 'ruby-log' && (
        <RubyLogData
          onBack={() => setScreen('ruby-dashboard')}
          onSave={() => setScreen('ruby-dashboard')}
        />
      )}
      {screen === 'ruby-profile' && (
        <RubyProfile
          onBack={() => setScreen('persona-select')}
          onComplete={() => setScreen('ruby-dashboard')}
        />
      )}
      {screen === 'ruby-trends' && (
        <RubyTrends onNavigate={handleNavigation} />
      )}
      {screen === 'ruby-summary' && (
        <RubySummary onNavigate={handleNavigation} />
      )}
      {screen === 'leo-onboarding' && (
        <LeoOnboarding onComplete={handleOnboardingComplete} />
      )}
      {screen === 'leo-dashboard' && (
        <LeoDashboard onNavigate={handleNavigation} />
      )}
      {screen === 'leo-log' && (
        <LeoLogData
          onBack={() => setScreen('leo-dashboard')}
          onSave={() => setScreen('leo-dashboard')}
        />
      )}
      {screen === 'leo-trends' && (
        <LeoTrends onNavigate={handleNavigation} />
      )}
      {screen === 'leo-summary' && (
        <LeoSummary onNavigate={handleNavigation} />
      )}

      {/* Reset button - fixed in top right */}
      {screen !== 'language' && screen !== 'persona-select' && (
        <button
          onClick={handleReset}
          className="fixed top-4 right-4 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all shadow-sm z-50"
        >
          ← Reset Demo
        </button>
      )}
    </AppContext.Provider>
  );
}

// Export the hook for use in child components
export { AppContext };
