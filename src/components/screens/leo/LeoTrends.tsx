import React from 'react';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface LeoTrendsProps {
  onNavigate: (screen: string) => void;
}

export function LeoTrends({ onNavigate }: LeoTrendsProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">Your Trends 📊</h1>
          <p className="text-sm text-gray-600">Last 30 days</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-4">
        {/* Sleep Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">😴 Sleep Patterns</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average</span>
              <span className="text-[#EF4444]">5.5 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Range</span>
              <span className="text-gray-900">4.0 - 7.5 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Days with 8+ hours</span>
              <span className="text-gray-900">4/30 😬</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#EF4444] pt-2 border-t border-[#E5E7EB]">
              <TrendingDown className="w-4 h-4" />
              <span>Down 10% vs last month - not good!</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Screen Time Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">📱 Screen Time</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Daily average</span>
              <span className="text-[#F59E0B]">6.2 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Peak day</span>
              <span className="text-gray-900">9.5 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Before bed (avg)</span>
              <span className="text-gray-900">2.3 hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#F59E0B] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>Up 8% - try to reduce this</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Activity Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">💪 Physical Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active days</span>
              <span className="text-[#10B981]">15/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Type</span>
              <span className="text-gray-900">Basketball, Walking</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Best streak</span>
              <span className="text-gray-900">5 days 🔥</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-[#E5E7EB]">
              <Minus className="w-4 h-4" />
              <span>About the same as last month</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Mood Trends */}
        <HealthCard>
          <h3 className="text-gray-900 mb-4">😊 Mood Tracking</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Most common</span>
              <span className="text-gray-900">Good 😊</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Great days</span>
              <span className="text-gray-900">8/30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Rough days</span>
              <span className="text-gray-900">3/30</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#10B981] pt-2 border-t border-[#E5E7EB]">
              <TrendingUp className="w-4 h-4" />
              <span>Overall improving! 💯</span>
            </div>
          </div>
        </HealthCard>
        
        {/* Insights */}
        <HealthCard className="bg-[#DBEAFE]">
          <div className="space-y-2">
            <h3 className="text-[#1E40AF]">💡 What we noticed</h3>
            <p className="text-sm text-[#1E40AF]">
              Your mood is better on days when you get at least 7 hours of sleep and stay active. 
              The main thing holding you back? Too much screen time before bed. 
              Try putting your phone away 1 hour before sleep!
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
        labels={{
          home: 'Home',
          trends: 'Trends',
          summary: 'Summary',
        }}
      />
    </div>
  );
}
