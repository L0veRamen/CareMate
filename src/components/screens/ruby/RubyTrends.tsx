import React from 'react';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface RubyTrendsProps {
  onNavigate: (screen: string) => void;
}

export function RubyTrends({ onNavigate }: RubyTrendsProps) {
  const { language } = useApp();
  const t = getTranslation(language);
  const p = t.personas.ruby.trends;

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
        {/* Stress Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.stress.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.stress.avg}</span>
              <span className="text-[#F59E0B]">{p.stress.valAvg}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.stress.highDays}</span>
              <span className="text-gray-900">12/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.stress.lowDays}</span>
              <span className="text-gray-900">8/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>{p.stress.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.sleep.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.avg}</span>
              <span className="text-[#F59E0B]">{p.sleep.valAvg}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.range}</span>
              <span className="text-gray-900">5.0 - 7.8 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.goodDays}</span>
              <span className="text-gray-900">14/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>{p.sleep.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.activity.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.activeDays}</span>
              <span className="text-[#10B981]">18/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.avgSessions}</span>
              <span className="text-gray-900">4.2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.bestWeek}</span>
              <span className="text-gray-900">6 {t.units.sessions}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.activity.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Mindfulness Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.mindfulness.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mindfulness.avgDaily}</span>
              <span className="text-[#10B981]">12 {t.units.minutes}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mindfulness.practiceDays}</span>
              <span className="text-gray-900">22/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mindfulness.streak}</span>
              <span className="text-gray-900">9 {t.units.days}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.mindfulness.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Insights */}
        <HealthCard className="bg-[#DBEAFE]">
          <div className="space-y-2">
            <h3 className="text-[#1E40AF]">{p.insight.title}</h3>
            <p className="text-sm text-[#1E40AF]">
              {p.insight.text}
            </p>
          </div>
        </HealthCard>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="trends"
        onNavigate={(tab) => {
          if (tab === 'home') onNavigate('ruby-dashboard');
          if (tab === 'summary') onNavigate('ruby-summary');
        }}
        labels={t.nav}
      />
    </div>
  );
}
