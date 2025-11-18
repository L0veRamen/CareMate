import React from 'react';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface AndreTrendsProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'fr';
}

export function AndreTrends({ onNavigate, language }: AndreTrendsProps) {
  const t = getTranslation(language);
  const p = t.personas.andre.trends;
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">{p.title}</h1>
          <p className="text-sm text-gray-600">{p.subtitle}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4">
        {/* Blood Sugar Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.glucose.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.glucose.avg}</span>
              <span className="text-[#F59E0B]">7.4 mmol/L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.glucose.range}</span>
              <span className="text-gray-900">5.2 - 9.8 mmol/L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.glucose.inTarget}</span>
              <span className="text-gray-900">52%</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.glucose.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Blood Pressure Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.bloodPressure.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.bloodPressure.avg}</span>
              <span className="text-[#10B981]">126/80 mmHg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.bloodPressure.systolic}</span>
              <span className="text-gray-900">118 - 138 mmHg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.bloodPressure.diastolic}</span>
              <span className="text-gray-900">75 - 86 mmHg</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>{p.bloodPressure.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.sleep.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.avg}</span>
              <span className="text-[#10B981]">7.1 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.range}</span>
              <span className="text-gray-900">6.2 - 8.5 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.quality}</span>
              <span className="text-gray-900">{language === 'fr' ? 'Bonne' : 'Good'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>{p.sleep.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.activity.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.avg}</span>
              <span className="text-[#10B981]">4,892 {t.units.steps}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.best}</span>
              <span className="text-gray-900">7,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.goalDays}</span>
              <span className="text-gray-900">18/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.activity.trend}</span>
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
