import React from 'react';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface RubyTrendsProps {
  onNavigate: (screen: string) => void;
}

export function RubyTrends({ onNavigate }: RubyTrendsProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">Your Health Trends</h1>
          <p className="text-sm text-gray-600">Last 30 days</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4">
        {/* Stress Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">😌 Stress Level</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average</span>
              <span className="text-[#F59E0B]">Medium</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">High stress days</span>
              <span className="text-gray-900">12/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Low stress days</span>
              <span className="text-gray-900">8/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>Stable vs last month</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">😴 Sleep Quality</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average</span>
              <span className="text-[#F59E0B]">6.5 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Range</span>
              <span className="text-gray-900">5.0 - 7.8 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Days with 7+ hours</span>
              <span className="text-gray-900">14/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>Down 5% vs last month</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">💪 Physical Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active days</span>
              <span className="text-[#10B981]">18/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average sessions/week</span>
              <span className="text-gray-900">4.2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Best week</span>
              <span className="text-gray-900">6 sessions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>Up 15% vs last month</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Mindfulness Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">🧘 Mindfulness Practice</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average daily</span>
              <span className="text-[#10B981]">12 minutes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Practice days</span>
              <span className="text-gray-900">22/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Longest streak</span>
              <span className="text-gray-900">9 days</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>Up 25% vs last month</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Insights */}
        <HealthCard className="bg-[#DBEAFE]">
          <div className="space-y-2">
            <h3 className="text-[#1E40AF]">💡 Insights</h3>
            <p className="text-sm text-[#1E40AF]">
              Your mindfulness practice is really paying off! Days with meditation correlate with 
              lower reported stress levels. Keep it up!
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
        labels={{
          home: 'Home',
          trends: 'Trends',
          summary: 'Summary',
        }}
      />
    </div>
  );
}
