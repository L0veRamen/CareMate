import React, { useState } from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { PomodoroTimer } from '../../features/PomodoroTimer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Timer } from 'lucide-react';

interface LeoDashboardProps {
  onNavigate: (screen: string) => void;
}

export function LeoDashboard({ onNavigate }: LeoDashboardProps) {
  const [showPomodoro, setShowPomodoro] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">What's up, Leo! 🔥</h1>
          <p className="text-sm text-gray-600">Sunday, October 5, 2025</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Alert */}
        <AlertBanner type="warning">
          Yo, you need more sleep 😴 You've been getting only 5.5 hours this week. Aim for 8-9 hours tonight!
        </AlertBanner>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="😴"
            label="Sleep"
            value="5.5"
            unit="hours"
            status="critical"
            trend="down"
            trendPercentage="-18%"
          />
          <MetricDisplay
            icon="🎮"
            label="Screen Time"
            value="6.2"
            unit="hrs/day"
            status="warning"
            trend="up"
            trendPercentage="+15%"
          />
          <MetricDisplay
            icon="💪"
            label="Physical Activity"
            value="45"
            unit="min/day"
            status="normal"
            trend="stable"
          />
          <MetricDisplay
            icon="😊"
            label="Mood Score"
            value="7.2/10"
            status="normal"
            trend="up"
            trendPercentage="+5%"
          />
        </div>

        {/* Quick Tools */}
        <div className="space-y-3">
          <h2 className="text-gray-900">Study Tools</h2>
          
          <HealthButton
            size="large"
            variant="primary"
            onClick={() => setShowPomodoro(true)}
            className="w-full"
          >
            <Timer className="w-5 h-5" />
            Start Pomodoro Timer
          </HealthButton>
          
          <HealthButton
            size="large"
            variant="secondary"
            onClick={() => onNavigate('leo-log')}
            className="w-full"
          >
            📝 Log Your Day
          </HealthButton>
        </div>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">Tips for You</h2>
          
          <RecommendationCard
            emoji="💤"
            category="Sleep Better"
            action="Put your phone away by 10 PM and aim for 9 hours of sleep tonight"
            rationale="You're 16 and your brain is still developing! Teens need 8-10 hours. You've only been getting 5.5 hours, which hurts your grades, mood, and health."
          />
          
          <RecommendationCard
            emoji="📱"
            category="Screen Time"
            action="Try the 20-20-20 rule: Every 20 mins, look at something 20 feet away for 20 seconds"
            rationale="Your screen time is 6.2 hours/day. This causes eye strain, disrupts sleep, and affects focus. Take breaks to protect your eyes and brain."
          />
          
          <RecommendationCard
            emoji="🏃"
            category="Get Moving"
            action="Do 15 minutes of any activity you enjoy during study breaks"
            rationale="Physical activity boosts brain power, improves focus, and releases feel-good chemicals. Even a quick walk or dance session helps!"
          />
          
          <RecommendationCard
            emoji="📚"
            category="Study Smart"
            action="Use the Pomodoro technique: 25 min focus + 5 min break"
            rationale="Your brain works best in focused bursts. The Pomodoro timer helps you stay on task and prevents burnout. Try it for homework!"
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
        labels={{
          home: 'Home',
          trends: 'Trends',
          summary: 'Summary',
        }}
      />

      {/* Pomodoro Timer Modal */}
      <Dialog open={showPomodoro} onOpenChange={setShowPomodoro}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Focus Timer</DialogTitle>
          </DialogHeader>
          <PomodoroTimer 
            onSessionComplete={() => {
              // Could add achievement tracking here
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
