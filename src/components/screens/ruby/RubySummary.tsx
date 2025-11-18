import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download, TrendingUp } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface RubySummaryProps {
  onNavigate: (screen: string) => void;
}

export function RubySummary({ onNavigate }: RubySummaryProps) {
  const { exportPDF, language } = useApp();
  const t = getTranslation(language);
  const p = t.personas.ruby.summary;
  
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
          <h1 className="text-gray-900 mb-1">{p.title}</h1>
          <p className="text-sm text-gray-600">{p.subtitle}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Patient Info */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.patientInfo}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{p.name}</span>
                <span className="text-gray-900">Ruby Chen</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.age}</span>
                <span className="text-gray-900">34 {t.units.years}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.concern}</span>
                <span className="text-gray-900">Stress & Sleep</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.period}</span>
                <span className="text-gray-900">{t.last7Days.replace('7', '30')}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Stress Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.stress.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.stress.avg}</span>
                <span className="text-[#F59E0B]">Medium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.stress.highDays}</span>
                <span className="text-gray-900">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.stress.triggers}</span>
                <span className="text-gray-900">Work deadlines</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Sleep Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.sleep.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.sleep.avg}</span>
                <span className="text-[#F59E0B]">6.5 {t.units.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.sleep.quality}</span>
                <span className="text-gray-900">Fair</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.sleep.rec}</span>
                <span className="text-gray-900">Target 7-8 {t.units.hours}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Lifestyle Overview */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.lifestyle.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.lifestyle.exercise}</span>
                <span className="text-[#10B981]">4.2 /week</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.lifestyle.mindfulness}</span>
                <span className="text-[#10B981]">12 {t.units.minDay}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.lifestyle.tracking}</span>
                <span className="text-[#10B981]">87%</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Clinical Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.clinical.title}</h3>
            <p className="text-sm text-gray-900">
              {p.clinical.notes}
            </p>
          </div>
        </HealthCard>
        
        {/* Recommendations */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.recs.title}</h3>
            <ul className="text-sm text-gray-900 space-y-2 list-disc list-inside">
              {p.recs.list.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
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
          {t.download}
        </HealthButton>
        
        <div className="bg-[#DBEAFE] rounded-lg p-4">
          <p className="text-sm text-[#1E40AF]">
            💡 {p.note}
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
        labels={t.nav}
      />
    </div>
  );
}
