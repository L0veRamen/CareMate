import { useState } from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { BreathingExercise } from '../../features/BreathingExercise';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { LanguageToggle } from '../../health/LanguageToggle';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';
import { formatDashboardDate } from '../../../utils/date';

interface RubyDashboardProps {
  onNavigate: (screen: string) => void;
}

export function RubyDashboard({ onNavigate }: RubyDashboardProps) {
  const { language, setLanguage } = useApp();
  const [showBreathing, setShowBreathing] = useState(false);
  const t = getTranslation(language);
  const p = t.personas.ruby;
  const breathingContent = t.features.breathingExercise;
  const todayLabel = formatDashboardDate(language);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
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
        <AlertBanner type="info">
          {p.alert}
        </AlertBanner>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="😌"
            label={t.metrics.stress}
            value="7/10"
            status="warning"
            trend="up"
            trendPercentage="+2"
          />
          <MetricDisplay
            icon="😴"
            label={t.metrics.sleep}
            value="6.2"
            unit={t.units.hours}
            status="warning"
            trend="down"
            trendPercentage="-12%"
          />
          <MetricDisplay
            icon="💪"
            label={t.metrics.activity}
            value="3"
            unit={t.units.sessions}
            status="normal"
            trend="up"
            trendPercentage="+1"
          />
          <MetricDisplay
            icon="🧘"
            label={t.metrics.mindfulness}
            value="8"
            unit={t.units.minDay}
            status="warning"
            trend="down"
            trendPercentage="-33%"
          />
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-gray-900">{p.quickRelief}</h2>
          
          <HealthButton
            size="large"
            variant="primary"
            onClick={() => setShowBreathing(true)}
            className="w-full"
          >
            🌬️ {p.startBreathing}
          </HealthButton>
          
          <HealthButton
            size="large"
            variant="secondary"
            onClick={() => onNavigate('ruby-log')}
            className="w-full"
          >
            📝 {p.logWellness}
          </HealthButton>
        </div>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">{t.topRecommendations}</h2>
          
          <RecommendationCard
            emoji="🧘‍♀️"
            category={t.recommendationCategories.stress}
            action={p.recommendations.stress.action}
            rationale={p.recommendations.stress.rationale}
          />
          
          <RecommendationCard
            emoji="💤"
            category={t.recommendationCategories.sleep}
            action={p.recommendations.sleep.action}
            rationale={p.recommendations.sleep.rationale}
          />
          
          <RecommendationCard
            emoji="🚶‍♀️"
            category={p.recommendations.movement.category}
            action={p.recommendations.movement.action}
            rationale={p.recommendations.movement.rationale}
          />
          
          <RecommendationCard
            emoji="📱"
            category={p.recommendations.digital.category}
            action={p.recommendations.digital.action}
            rationale={p.recommendations.digital.rationale}
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="home"
        onNavigate={(tab) => {
          if (tab === 'trends') onNavigate('ruby-trends');
          if (tab === 'summary') onNavigate('ruby-summary');
        }}
        labels={t.nav}
      />

      {/* Breathing Exercise Modal */}
      <Dialog open={showBreathing} onOpenChange={setShowBreathing}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{p.breathingTitle}</DialogTitle>
          </DialogHeader>
          <BreathingExercise 
            content={breathingContent}
            onComplete={() => {
              setTimeout(() => setShowBreathing(false), 2000);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
