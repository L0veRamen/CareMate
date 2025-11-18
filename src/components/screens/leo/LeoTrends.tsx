import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface LeoTrendsProps {
  onNavigate: (screen: string) => void;
}

export function LeoTrends({ onNavigate }: LeoTrendsProps) {
  const { language } = useApp();
  const t = getTranslation(language);
  const p = t.personas.leo.trends;

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
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.sleep.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.avg}</span>
              <span className="text-[#EF4444]">5.5 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.range}</span>
              <span className="text-gray-900">4.0 - 7.5 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.sleep.goodDays}</span>
              <span className="text-gray-900">4/30 😬</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#EF4444] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>{p.sleep.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Screen Time Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.screenTime.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.screenTime.avg}</span>
              <span className="text-[#F59E0B]">6.2 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.screenTime.peak}</span>
              <span className="text-gray-900">9.5 {t.units.hours}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.screenTime.beforeBed}</span>
              <span className="text-gray-900">2.3 {t.units.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.screenTime.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.activity.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.activeDays}</span>
              <span className="text-[#10B981]">15/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.type}</span>
              <span className="text-gray-900">Basketball, Walking</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.activity.streak}</span>
              <span className="text-gray-900">5 {t.units.days} 🔥</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>{p.activity.trend}</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Mood Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">{p.mood.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mood.common}</span>
              <span className="text-gray-900">Good 😊</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mood.greatDays}</span>
              <span className="text-gray-900">8/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{p.mood.roughDays}</span>
              <span className="text-gray-900">3/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>{p.mood.trend}</span>
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
          if (tab === 'home') onNavigate('leo-dashboard');
          if (tab === 'summary') onNavigate('leo-summary');
        }}
        labels={t.nav}
      />
    </div>
  );
}
