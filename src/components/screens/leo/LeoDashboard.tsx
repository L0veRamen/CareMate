import React, { useState } from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { PomodoroTimer } from '../../features/PomodoroTimer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Timer } from 'lucide-react';
import { LanguageToggle } from '../../health/LanguageToggle';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';
import { formatDashboardDate } from '../../../utils/date';

interface LeoDashboardProps {
  onNavigate: (screen: string) => void;
}

export function LeoDashboard({ onNavigate }: LeoDashboardProps) {
  const { language, setLanguage } = useApp();
  const [showPomodoro, setShowPomodoro] = useState(false);
  const t = getTranslation(language);
  const p = t.personas.leo;
  const pomodoroContent = t.features.pomodoroTimer;
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
        <AlertBanner type="warning">
          {p.alert}
        </AlertBanner>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="😴"
            label={t.metrics.sleep}
            value="5.5"
            unit={t.units.hours}
            status="critical"
            trend="down"
            trendPercentage="-18%"
          />
          <MetricDisplay
            icon="🎮"
            label={t.metrics.screenTime}
            value="6.2"
            unit={t.units.hrsDay}
            status="warning"
            trend="up"
            trendPercentage="+15%"
          />
          <MetricDisplay
            icon="💪"
            label={t.metrics.activity}
            value="45"
            unit={t.units.minDay}
            status="normal"
            trend="stable"
          />
          <MetricDisplay
            icon="😊"
            label={t.metrics.mood}
            value="7.2/10"
            status="normal"
            trend="up"
            trendPercentage="+5%"
          />
        </div>

        {/* Quick Tools */}
        <div className="space-y-3">
          <h2 className="text-gray-900">{p.studyTools}</h2>
          
          <HealthButton
            size="large"
            variant="primary"
            onClick={() => setShowPomodoro(true)}
            className="w-full"
          >
            <Timer className="w-5 h-5" />
            {p.startPomodoro}
          </HealthButton>
          
          <HealthButton
            size="large"
            variant="secondary"
            onClick={() => onNavigate('leo-log')}
            className="w-full"
          >
            📝 {p.logDay}
          </HealthButton>
        </div>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">{p.tipsTitle}</h2>
          
          <RecommendationCard
            emoji="💤"
            category={p.recommendations.sleep.category}
            action={p.recommendations.sleep.action}
            rationale={p.recommendations.sleep.rationale}
          />
          
          <RecommendationCard
            emoji="📱"
            category={p.recommendations.screenTime.category}
            action={p.recommendations.screenTime.action}
            rationale={p.recommendations.screenTime.rationale}
          />
          
          <RecommendationCard
            emoji="🏃"
            category={p.recommendations.movement.category}
            action={p.recommendations.movement.action}
            rationale={p.recommendations.movement.rationale}
          />
          
          <RecommendationCard
            emoji="📚"
            category={p.recommendations.study.category}
            action={p.recommendations.study.action}
            rationale={p.recommendations.study.rationale}
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="home"
        onNavigate={(tab) => {
          if (tab === 'trends') onNavigate('leo-trends');
          if (tab === 'summary') onNavigate('leo-summary');
        }}
        labels={t.nav}
      />

      {/* Pomodoro Timer Modal */}
      <Dialog open={showPomodoro} onOpenChange={setShowPomodoro}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{p.pomodoroTitle}</DialogTitle>
          </DialogHeader>
          <PomodoroTimer 
            content={pomodoroContent}
            onSessionComplete={() => {
              // Could add achievement tracking here
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
