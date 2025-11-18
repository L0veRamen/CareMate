import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download } from 'lucide-react';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface LeoSummaryProps {
  onNavigate: (screen: string) => void;
}

export function LeoSummary({ onNavigate }: LeoSummaryProps) {
  const { exportPDF, language } = useApp();
  const t = getTranslation(language);
  const p = t.personas.leo.summary;
  
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
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.about.title}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{p.about.name}</span>
                <span className="text-gray-900">Leo Martinez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.about.age}</span>
                <span className="text-gray-900">16 {t.units.years}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.about.focus}</span>
                <span className="text-gray-900">Sleep & Wellness</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{p.about.period}</span>
                <span className="text-gray-900">{t.last7Days.replace('7', '30')}</span>
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
                <span className="text-[#EF4444]">5.5 {t.units.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.sleep.rec}</span>
                <span className="text-gray-900">8-10 {t.units.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.sleep.deficit}</span>
                <span className="text-[#EF4444]">-2.5 to -4.5 {t.units.hrsDay}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Digital Wellness */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.digital.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.digital.daily}</span>
                <span className="text-[#F59E0B]">6.2 {t.units.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.digital.beforeBed}</span>
                <span className="text-gray-900">2.3 {t.units.hours} avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.digital.impact}</span>
                <span className="text-gray-900">Affects sleep quality</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Physical Activity */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.activity.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.activity.activeDays}</span>
                <span className="text-[#10B981]">15/30 {t.units.days}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.activity.main}</span>
                <span className="text-gray-900">Basketball, Walking</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.activity.consistency}</span>
                <span className="text-gray-900">Moderate</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Mental Wellness */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.mental.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.mental.overall}</span>
                <span className="text-[#10B981]">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.mental.great}</span>
                <span className="text-gray-900">27%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{p.mental.rough}</span>
                <span className="text-gray-900">10%</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Summary Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{p.notes.title}</h3>
            <p className="text-sm text-gray-900">
              {p.notes.text}
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
            💡 {p.footer}
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
        labels={t.nav}
      />
    </div>
  );
}
