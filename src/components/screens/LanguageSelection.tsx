import { HealthButton } from '../health/HealthButton';
import { Heart, Activity, Brain } from 'lucide-react';

interface LanguageSelectionProps {
  onSelectLanguage: (lang: 'en' | 'fr') => void;
}

export function LanguageSelection({ onSelectLanguage }: LanguageSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#F9FAFB] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        {/* Logo & Branding */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-3xl flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-white" fill="white" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-gray-900">CareMate</h1>
            <p className="text-gray-600">
              Your Virtual Health Assistant<br />
              <span className="text-sm">Votre assistant santé virtuel</span>
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <span className="text-xl">👴</span>
              </div>
              <p className="text-xs text-gray-600">Seniors</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg">
              <div className="w-10 h-10 bg-[#FEF3C7] rounded-full flex items-center justify-center">
                <span className="text-xl">👩‍💼</span>
              </div>
              <p className="text-xs text-gray-600">Adults</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white/60 rounded-lg">
              <div className="w-10 h-10 bg-[#D1FAE5] rounded-full flex items-center justify-center">
                <span className="text-xl">🧑‍🎓</span>
              </div>
              <p className="text-xs text-gray-600">Teens</p>
            </div>
          </div>
        </div>
        
        {/* Language Selection */}
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-700">
            Choose your language / Choisissez votre langue
          </p>
          
          <HealthButton
            size="large"
            variant="primary"
            onClick={() => onSelectLanguage('en')}
            className="w-full"
          >
            🇬🇧 English
          </HealthButton>
          
          <HealthButton
            size="large"
            variant="secondary"
            onClick={() => onSelectLanguage('fr')}
            className="w-full"
          >
            🇫🇷 Français
          </HealthButton>
        </div>
        
        {/* Footer */}
        <div className="text-center space-y-2 pt-4">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Brain className="w-3 h-3" />
              AI-Powered
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              WCAG AA
            </span>
            <span>•</span>
            <span>🇨🇦 Canada</span>
          </div>
          <p className="text-xs text-gray-500">
            For demonstration purposes only
          </p>
        </div>
      </div>
    </div>
  );
}
