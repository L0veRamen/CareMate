import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface AndreSummaryProps {
  onNavigate: (screen: string) => void;
  language?: 'en' | 'fr';
}

export function AndreSummary({ onNavigate, language = 'fr' }: AndreSummaryProps) {
  const { exportPDF } = useApp();
  // Use provided language prop or fallback to context (though context is preferred source of truth)
  // Since the prop is passed from App, we respect it, but we should ensure consistency.
  const t = getTranslation(language);
  const p = t.personas.andre.summary;
  
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
                <span className="text-gray-900">André Tremblay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.age}</span>
                <span className="text-gray-900">72 {t.units.years}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.condition}</span>
                <span className="text-gray-900">{p.type2Diabetes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.period}</span>
                <span className="text-gray-900">{p.last30Days}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Glucose Trends */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.glucoseTrends}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.average}</span>
                <span className="text-[#F59E0B]">7.4 mmol/L</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.range}</span>
                <span className="text-gray-900">5.2 - 9.8 mmol/L</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.inTarget}</span>
                <span className="text-gray-900">52%</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#F59E0B]">
                <TrendingUp className="w-4 h-4" />
                <span>{p.upVsLastMonth}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Blood Pressure Trends */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.bpTrends}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.average}</span>
                <span className="text-[#10B981]">126/80 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.systolicRange}</span>
                <span className="text-gray-900">118 - 138 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.diastolicRange}</span>
                <span className="text-gray-900">75 - 86 mmHg</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#10B981]">
                <TrendingDown className="w-4 h-4" />
                <span>{p.improved}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Lifestyle Metrics */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.lifestyle}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.avgSleep}</span>
                <span className="text-gray-900">7.1 {t.units.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.avgSteps}</span>
                <span className="text-gray-900">4,892 {t.units.steps}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.medicationAdherence}</span>
                <span className="text-[#10B981]">96%</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.clinicalNotes}</h3>
            <p className="text-sm text-gray-900">
              {p.notes}
            </p>
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
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="summary"
        onNavigate={(tab) => {
          if (tab === 'home') onNavigate('andre-dashboard');
          if (tab === 'trends') onNavigate('andre-trends');
        }}
        labels={t.nav}
      />
    </div>
  );
}
