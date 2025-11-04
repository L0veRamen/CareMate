import React from 'react';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AndreTrendsProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'fr';
}

export function AndreTrends({ onNavigate, language }: AndreTrendsProps) {
  const content = {
    en: {
      title: 'Health Trends',
      subtitle: 'Last 30 days',
      glucose: {
        title: '🩸 Blood Sugar',
        avg: 'Average',
        range: 'Range',
        inTarget: 'In target (4-7)',
        trend: 'Up 8% vs last month',
      },
      bloodPressure: {
        title: '❤️ Blood Pressure',
        avg: 'Average',
        systolic: 'Systolic range',
        diastolic: 'Diastolic range',
        trend: 'Improved vs last month',
      },
      sleep: {
        title: '😴 Sleep',
        avg: 'Average',
        range: 'Range',
        quality: 'Quality',
        trend: 'Stable',
      },
      activity: {
        title: '🚶 Daily Steps',
        avg: 'Average',
        best: 'Best day',
        goalDays: 'Days over 5,000',
        trend: 'Up 12% vs last month',
      },
      nav: {
        home: 'Home',
        trends: 'Trends',
        summary: 'Summary',
      },
    },
    fr: {
      title: 'Tendances santé',
      subtitle: '30 derniers jours',
      glucose: {
        title: '🩸 Glycémie',
        avg: 'Moyenne',
        range: 'Plage',
        inTarget: 'Dans la cible (4-7)',
        trend: 'Augmentation de 8% vs mois dernier',
      },
      bloodPressure: {
        title: '❤️ Tension artérielle',
        avg: 'Moyenne',
        systolic: 'Plage systolique',
        diastolic: 'Plage diastolique',
        trend: 'Amélioration vs mois dernier',
      },
      sleep: {
        title: '😴 Sommeil',
        avg: 'Moyenne',
        range: 'Plage',
        quality: 'Qualité',
        trend: 'Stable',
      },
      activity: {
        title: '🚶 Pas quotidiens',
        avg: 'Moyenne',
        best: 'Meilleur jour',
        goalDays: 'Jours > 5,000',
        trend: 'Augmentation de 12% vs mois dernier',
      },
      nav: {
        home: 'Accueil',
        trends: 'Tendances',
        summary: 'Résumé',
      },
    },
  };
  
  const t = content[language];
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">{t.title}</h1>
          <p className="text-sm text-gray-600">{t.subtitle}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4">
        {/* Blood Sugar Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{t.glucose.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.glucose.avg}</span>
              <span className="text-[#F59E0B]">7.4 mmol/L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.glucose.range}</span>
              <span className="text-gray-900">5.2 - 9.8 mmol/L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.glucose.inTarget}</span>
              <span className="text-gray-900">52%</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{t.glucose.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Blood Pressure Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{t.bloodPressure.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.bloodPressure.avg}</span>
              <span className="text-[#10B981]">126/80 mmHg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.bloodPressure.systolic}</span>
              <span className="text-gray-900">118 - 138 mmHg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.bloodPressure.diastolic}</span>
              <span className="text-gray-900">75 - 86 mmHg</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>{t.bloodPressure.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{t.sleep.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.sleep.avg}</span>
              <span className="text-[#10B981]">{language === 'fr' ? '7.1 heures' : '7.1 hours'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.sleep.range}</span>
              <span className="text-gray-900">{language === 'fr' ? '6.2 - 8.5 heures' : '6.2 - 8.5 hours'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.sleep.quality}</span>
              <span className="text-gray-900">{language === 'fr' ? 'Bonne' : 'Good'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>{t.sleep.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{t.activity.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.activity.avg}</span>
              <span className="text-[#10B981]">{language === 'fr' ? '4,892 pas' : '4,892 steps'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.activity.best}</span>
              <span className="text-gray-900">7,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.activity.goalDays}</span>
              <span className="text-gray-900">18/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{t.activity.trend}</span>
            </div>
          </div>
        </HealthCard>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="trends"
        onNavigate={(tab) => {
          if (tab === 'home') onNavigate('andre-dashboard');
          if (tab === 'summary') onNavigate('andre-summary');
        }}
        labels={t.nav}
      />
    </div>
  );
}
