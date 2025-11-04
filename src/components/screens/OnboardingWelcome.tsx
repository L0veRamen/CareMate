import React from 'react';
import { HealthButton } from '../health/HealthButton';
import { Heart, Shield, TrendingUp } from 'lucide-react';

interface OnboardingWelcomeProps {
  language: 'en' | 'fr';
  onContinue: () => void;
  personaType?: 'andre' | 'ruby' | 'leo';
}

export function OnboardingWelcome({ language, onContinue, personaType = 'andre' }: OnboardingWelcomeProps) {
  const content = {
    en: {
      title: 'Welcome to CareMate',
      subtitle: 'Your personalized health companion',
      features: [
        { icon: Heart, text: 'Daily health recommendations' },
        { icon: TrendingUp, text: 'Track your health metrics' },
        { icon: Shield, text: 'Secure and private' },
      ],
      privacy: personaType === 'leo' 
        ? "Your privacy matters. We don't share your data without permission."
        : 'Your health data is encrypted and private',
      button: 'Get Started',
    },
    fr: {
      title: 'Bienvenue sur CareMate',
      subtitle: 'Votre compagnon santé personnalisé',
      features: [
        { icon: Heart, text: 'Recommandations santé quotidiennes' },
        { icon: TrendingUp, text: 'Suivez vos métriques de santé' },
        { icon: Shield, text: 'Sécurisé et privé' },
      ],
      privacy: 'Vos données de santé sont cryptées et privées',
      button: 'Commencer',
    },
  };
  
  const t = content[language];
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-gray-900">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>
          
          <div className="space-y-4">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E5E7EB]">
                  <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <p className="text-gray-900">{feature.text}</p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-[#DBEAFE] rounded-lg p-4">
            <p className="text-sm text-[#1E40AF]">{t.privacy}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-md mx-auto">
          <HealthButton
            size="large"
            variant="primary"
            onClick={onContinue}
            className="w-full"
          >
            {t.button}
          </HealthButton>
        </div>
      </div>
    </div>
  );
}
