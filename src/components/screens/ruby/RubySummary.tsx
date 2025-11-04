import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download, TrendingUp } from 'lucide-react';
import { useApp } from '../../../App';

interface RubySummaryProps {
  onNavigate: (screen: string) => void;
}

export function RubySummary({ onNavigate }: RubySummaryProps) {
  const { exportPDF } = useApp();
  
  const handleExport = async () => {
    try {
      await exportPDF();
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-gray-900 mb-1">Health Summary</h1>
          <p className="text-sm text-gray-600">For your healthcare provider</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Patient Info */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Patient Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="text-gray-900">Ruby Chen</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age:</span>
                <span className="text-gray-900">34 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Primary Concern:</span>
                <span className="text-gray-900">Stress & Sleep</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Period:</span>
                <span className="text-gray-900">Last 30 days</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Stress Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">😌 Stress Management</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Average Level</span>
                <span className="text-[#F59E0B]">Medium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">High stress days</span>
                <span className="text-gray-900">40% of days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Triggers</span>
                <span className="text-gray-900">Work deadlines</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">😴 Sleep Patterns</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Average Duration</span>
                <span className="text-[#F59E0B]">6.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Quality</span>
                <span className="text-gray-900">Fair</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Recommendation</span>
                <span className="text-gray-900">Target 7-8 hours</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Lifestyle Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Lifestyle Activities</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">💪 Exercise frequency</span>
                <span className="text-[#10B981]">4.2 times/week</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">🧘 Mindfulness practice</span>
                <span className="text-[#10B981]">12 min/day avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">📊 Data tracking</span>
                <span className="text-[#10B981]">87% adherence</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Clinical Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Clinical Notes</h3>
            <p className="text-sm text-gray-900">
              Patient reports high work-related stress and insufficient sleep (averaging 6.5 hours). 
              Positive engagement with mindfulness practices and regular exercise. 
              Would benefit from sleep hygiene counseling and stress management strategies.
            </p>
          </div>
        </HealthCard>
        
        {/* Recommendations */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Recommendations</h3>
            <ul className="text-sm text-gray-900 space-y-2 list-disc list-inside">
              <li>Sleep study to rule out sleep disorders</li>
              <li>Cognitive behavioral therapy for stress management</li>
              <li>Continue current exercise and mindfulness routine</li>
              <li>Follow-up in 3 months to reassess</li>
            </ul>
          </div>
        </HealthCard>
        
        {/* Export Button */}
        <HealthButton
          size="large"
          variant="primary"
          onClick={handleExport}
          className="w-full flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </HealthButton>
        
        <div className="bg-[#DBEAFE] rounded-lg p-4">
          <p className="text-sm text-[#1E40AF]">
            💡 This summary is designed to share with walk-in clinics or specialists 
            when you don't have a regular family doctor.
          </p>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="summary"
        onNavigate={(tab) => {
          if (tab === 'home') onNavigate('ruby-dashboard');
          if (tab === 'trends') onNavigate('ruby-trends');
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
