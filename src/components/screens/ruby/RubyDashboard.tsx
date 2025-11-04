import React, { useState } from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { BreathingExercise } from '../../features/BreathingExercise';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';

interface RubyDashboardProps {
  onNavigate: (screen: string) => void;
}

export function RubyDashboard({ onNavigate }: RubyDashboardProps) {
  const [showBreathing, setShowBreathing] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">Hey Ruby! 👋</h1>
          <p className="text-sm text-gray-600">Sunday, October 5, 2025</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Alert */}
        <AlertBanner type="info">
          Your stress levels have been elevated for 3 consecutive days. Try the breathing exercise below.
        </AlertBanner>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="😌"
            label="Stress Level"
            value="7/10"
            status="warning"
            trend="up"
            trendPercentage="+2"
          />
          <MetricDisplay
            icon="😴"
            label="Sleep Quality"
            value="6.2"
            unit="hours"
            status="warning"
            trend="down"
            trendPercentage="-12%"
          />
          <MetricDisplay
            icon="💪"
            label="Exercise"
            value="3"
            unit="sessions"
            status="normal"
            trend="up"
            trendPercentage="+1"
          />
          <MetricDisplay
            icon="🧘"
            label="Mindfulness"
            value="8"
            unit="min/day"
            status="warning"
            trend="down"
            trendPercentage="-33%"
          />
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-gray-900">Quick Relief</h2>
          
          <HealthButton
            size="large"
            variant="primary"
            onClick={() => setShowBreathing(true)}
            className="w-full"
          >
            🌬️ Start Breathing Exercise
          </HealthButton>
          
          <HealthButton
            size="large"
            variant="secondary"
            onClick={() => onNavigate('ruby-log')}
            className="w-full"
          >
            📝 Log Wellness Data
          </HealthButton>
        </div>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">Today's Recommendations</h2>
          
          <RecommendationCard
            emoji="🧘‍♀️"
            category="Stress Management"
            action="Practice the 4-7-8 breathing technique when you feel overwhelmed"
            rationale="Your stress levels have been high for 3 days. This breathing exercise activates your parasympathetic nervous system, reducing cortisol and promoting calm."
          />
          
          <RecommendationCard
            emoji="💤"
            category="Sleep Hygiene"
            action="Aim for 7-8 hours of sleep tonight by going to bed at 10:30 PM"
            rationale="You've averaged only 6.2 hours this week. Poor sleep increases stress hormones and reduces cognitive performance at work."
          />
          
          <RecommendationCard
            emoji="🚶‍♀️"
            category="Movement Break"
            action="Take a 10-minute walk during your lunch break"
            rationale="Even brief outdoor activity reduces stress and improves afternoon focus. You have no family doctor, so prevention is key."
          />
          
          <RecommendationCard
            emoji="📱"
            category="Digital Wellness"
            action="Set 'Do Not Disturb' from 9 PM onwards"
            rationale="Blue light and notifications before bed disrupt sleep quality. Your sleep scores dropped when you used your phone late."
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
        labels={{
          home: 'Home',
          trends: 'Trends',
          summary: 'Summary',
        }}
      />

      {/* Breathing Exercise Modal */}
      <Dialog open={showBreathing} onOpenChange={setShowBreathing}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Guided Breathing</DialogTitle>
          </DialogHeader>
          <BreathingExercise 
            onComplete={() => {
              setTimeout(() => setShowBreathing(false), 2000);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
