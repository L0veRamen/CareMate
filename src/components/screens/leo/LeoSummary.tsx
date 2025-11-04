import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download } from 'lucide-react';
import { useApp } from '../../../App';

interface LeoSummaryProps {
  onNavigate: (screen: string) => void;
}

export function LeoSummary({ onNavigate }: LeoSummaryProps) {
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
          <p className="text-sm text-gray-600">Share with your doctor or school nurse</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Patient Info */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">About You</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="text-gray-900">Leo Martinez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age:</span>
                <span className="text-gray-900">16 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Focus:</span>
                <span className="text-gray-900">Sleep & Wellness</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking Period:</span>
                <span className="text-gray-900">Last 30 days</span>
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
                <span className="text-[#EF4444]">5.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Recommended</span>
                <span className="text-gray-900">8-10 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Sleep Deficit</span>
                <span className="text-[#EF4444]">-2.5 to -4.5 hours/night</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Digital Wellness */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">📱 Digital Wellness</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily screen time</span>
                <span className="text-[#F59E0B]">6.2 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Before bed</span>
                <span className="text-gray-900">2.3 hours avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Impact</span>
                <span className="text-gray-900">Affects sleep quality</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Physical Activity */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">💪 Physical Activity</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active days</span>
                <span className="text-[#10B981]">15/30 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Main activities</span>
                <span className="text-gray-900">Basketball, Walking</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Consistency</span>
                <span className="text-gray-900">Moderate</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Mental Wellness */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">😊 Mental Wellness</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Overall mood</span>
                <span className="text-[#10B981]">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Great days</span>
                <span className="text-gray-900">27% of days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rough days</span>
                <span className="text-gray-900">10% of days</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Summary Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Summary</h3>
            <p className="text-sm text-gray-900">
              Leo is tracking sleep, screen time, physical activity, and mood. Primary concern 
              is insufficient sleep (averaging 5.5 hours vs. recommended 8-10 hours for teens). 
              High screen time before bed likely contributing to poor sleep. Overall mood is positive. 
              Moderate physical activity engagement.
            </p>
          </div>
        </HealthCard>
        
        {/* Recommendations */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">Recommendations</h3>
            <ul className="text-sm text-gray-900 space-y-2 list-disc list-inside">
              <li>Improve sleep hygiene - target 8-9 hours nightly</li>
              <li>Reduce screen time 1-2 hours before bed</li>
              <li>Maintain regular physical activity schedule</li>
              <li>Consider sleep counseling if patterns don't improve</li>
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
            💡 This summary can be shared with your doctor, school nurse, or counselor. 
            Your privacy is protected - only share what you're comfortable with.
          </p>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="summary"
        onNavigate={(tab) => {
          if (tab === 'home') onNavigate('leo-dashboard');
          if (tab === 'trends') onNavigate('leo-trends');
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
