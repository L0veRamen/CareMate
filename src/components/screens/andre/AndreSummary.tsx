import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { BottomNav } from '../../health/BottomNav';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';
import { useApp } from '../../../App';

interface AndreSummaryProps {
  onNavigate: (screen: string) => void;
  language?: 'en' | 'fr';
}

export function AndreSummary({ onNavigate, language = 'fr' }: AndreSummaryProps) {
  const content = {
    en: {
      title: 'Clinical Summary',
      subtitle: 'For your doctor',
      downloadAlert: 'Downloading PDF...',
      download: 'Download PDF',
      patientInfo: 'Patient Information',
      name: 'Name:',
      age: 'Age:',
      condition: 'Condition:',
      period: 'Period:',
      years: 'years',
      type2Diabetes: 'Type 2 Diabetes',
      last30Days: 'Last 30 days',
      glucoseTrends: '🩸 Blood Sugar - Trends',
      average: 'Average',
      range: 'Range',
      inTarget: '% in target (4-7)',
      trend: 'Trend',
      upVsLastMonth: 'Up 8% vs last month',
      bpTrends: '❤️ Blood Pressure - Trends',
      systolicRange: 'Systolic range',
      diastolicRange: 'Diastolic range',
      improved: 'Improved vs last month',
      lifestyle: 'Lifestyle',
      avgSleep: '😴 Average sleep',
      hours: 'hours',
      avgSteps: '🚶 Average steps/day',
      steps: 'steps',
      medicationAdherence: '💊 Medication adherence',
      clinicalNotes: 'Clinical Notes',
      notes: 'Patient shows good medication adherence. Blood pressure has improved. Blood sugar requires attention - consider adjusting metformin dose.',
      nav: {
        home: 'Home',
        trends: 'Trends',
        summary: 'Summary',
      },
    },
    fr: {
      title: 'Résumé clinique',
      subtitle: 'Pour votre médecin',
      downloadAlert: 'Téléchargement du PDF en cours...',
      download: 'Télécharger le PDF',
      patientInfo: 'Informations du patient',
      name: 'Nom:',
      age: 'Âge:',
      condition: 'Condition:',
      period: 'Période:',
      years: 'ans',
      type2Diabetes: 'Diabète de type 2',
      last30Days: '30 derniers jours',
      glucoseTrends: '🩸 Glycémie - Tendances',
      average: 'Moyenne',
      range: 'Plage',
      inTarget: '% dans la cible (4-7)',
      trend: 'Tendance',
      upVsLastMonth: 'Augmentation de 8% vs mois dernier',
      bpTrends: '❤️ Tension artérielle - Tendances',
      systolicRange: 'Plage systolique',
      diastolicRange: 'Plage diastolique',
      improved: 'Amélioration vs mois dernier',
      lifestyle: 'Mode de vie',
      avgSleep: '😴 Sommeil moyen',
      hours: 'heures',
      avgSteps: '🚶 Pas moyens/jour',
      steps: 'pas',
      medicationAdherence: '💊 Observance médicaments',
      clinicalNotes: 'Notes cliniques',
      notes: 'Le patient montre une bonne observance du traitement. La tension artérielle s\'est améliorée. La glycémie nécessite une attention - considérer un ajustement de la dose de metformine.',
      nav: {
        home: 'Accueil',
        trends: 'Tendances',
        summary: 'Résumé',
      },
    },
  };
  
  const t = content[language];
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
          <h1 className="text-gray-900 mb-1">{t.title}</h1>
          <p className="text-sm text-gray-600">{t.subtitle}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Patient Info */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{t.patientInfo}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t.name}</span>
                <span className="text-gray-900">André Tremblay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.age}</span>
                <span className="text-gray-900">72 {t.years}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.condition}</span>
                <span className="text-gray-900">{t.type2Diabetes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.period}</span>
                <span className="text-gray-900">{t.last30Days}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Glucose Trends */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{t.glucoseTrends}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.average}</span>
                <span className="text-[#F59E0B]">7.4 mmol/L</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.range}</span>
                <span className="text-gray-900">5.2 - 9.8 mmol/L</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.inTarget}</span>
                <span className="text-gray-900">52%</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#F59E0B]">
                <TrendingUp className="w-4 h-4" />
                <span>{t.upVsLastMonth}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Blood Pressure Trends */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{t.bpTrends}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.average}</span>
                <span className="text-[#10B981]">126/80 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.systolicRange}</span>
                <span className="text-gray-900">118 - 138 mmHg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.diastolicRange}</span>
                <span className="text-gray-900">75 - 86 mmHg</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#10B981]">
                <TrendingDown className="w-4 h-4" />
                <span>{t.improved}</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Lifestyle Metrics */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{t.lifestyle}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.avgSleep}</span>
                <span className="text-gray-900">7.1 {t.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.avgSteps}</span>
                <span className="text-gray-900">4,892 {t.steps}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t.medicationAdherence}</span>
                <span className="text-[#10B981]">96%</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        {/* Notes */}
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900 border-b border-[#E5E7EB] pb-3">{t.clinicalNotes}</h3>
            <p className="text-sm text-gray-900">
              {t.notes}
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
