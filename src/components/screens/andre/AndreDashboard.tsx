import React from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { LanguageToggle } from '../../health/LanguageToggle';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';
import { formatDashboardDate } from '../../../utils/date';

interface AndreDashboardProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'fr';
}

export function AndreDashboard({ onNavigate, language }: AndreDashboardProps) {
  const { setLanguage } = useApp();
  const t = getTranslation(language);
  const p = t.personas.andre;
  const todayLabel = formatDashboardDate(language);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header with Language Toggle */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-gray-900 mb-1">{p.greeting}</h1>
              <p className="text-sm text-gray-600">{todayLabel}</p>
            </div>
            <LanguageToggle 
              activeLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Alert */}
        <AlertBanner type="warning">
          {p.alert}
        </AlertBanner>
        
        {/* Metrics Grid - 2x2 with 8px spacing */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="🩸"
            label={t.metrics.bloodGlucose}
            value="178"
            unit="mg/dL"
            status="warning"
            trend="up"
            trendPercentage="+18%"
          />
          <MetricDisplay
            icon="❤️"
            label={t.metrics.bloodPressure}
            value="145/92"
            unit="mmHg"
            status="warning"
            trend="up"
            trendPercentage="+6%"
          />
          <MetricDisplay
            icon="😴"
            label={t.metrics.sleep}
            value="5.6"
            unit={t.units.hours}
            status="critical"
            trend="down"
            trendPercentage="-7%"
          />
          <MetricDisplay
            icon="🚶"
            label={t.metrics.activity}
            value="12"
            unit={t.units.minDay}
            status="critical"
            trend="down"
            trendPercentage="-31%"
          />
        </div>
        
        {/* Log Data Button */}
        <HealthButton
          size="large"
          variant="primary"
          onClick={() => onNavigate('andre-log')}
          className="w-full"
        >
          📝 {t.logData}
        </HealthButton>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">{t.topRecommendations}</h2>
          
          <RecommendationCard
            emoji="🍎"
            category={t.recommendationCategories.nutrition}
            action={p.recommendations.nutrition.action}
            rationale={p.recommendations.nutrition.rationale}
          />
          
          <RecommendationCard
            emoji="🚶"
            category={t.recommendationCategories.activity}
            action={p.recommendations.exercise.action}
            rationale={p.recommendations.exercise.rationale}
          />
          
          <RecommendationCard
            emoji="💤"
            category={t.recommendationCategories.sleep}
            action={p.recommendations.sleep.action}
            rationale={p.recommendations.sleep.rationale}
          />
          
          <RecommendationCard
            emoji="📊"
            category={p.recommendations.monitoring.category}
            action={p.recommendations.monitoring.action}
            rationale={p.recommendations.monitoring.rationale}
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="home"
        onNavigate={(tab) => {
          if (tab === 'trends') onNavigate('andre-trends');
          if (tab === 'summary') onNavigate('andre-summary');
        }}
        labels={t.nav}
      />
    </div>
  );
}
