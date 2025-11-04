import React from 'react';
import { MetricDisplay } from '../../health/MetricDisplay';
import { RecommendationCard } from '../../health/RecommendationCard';
import { AlertBanner } from '../../health/AlertBanner';
import { HealthButton } from '../../health/HealthButton';
import { BottomNav } from '../../health/BottomNav';
import { LanguageToggle } from '../../health/LanguageToggle';

interface AndreDashboardProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'fr';
}

export function AndreDashboard({ onNavigate, language }: AndreDashboardProps) {
  const [currentLanguage, setCurrentLanguage] = React.useState<'en' | 'fr'>(language);

  const content = {
    en: {
      greeting: 'Hello, André! 👋',
      date: 'Sunday, October 5, 2025',
      alert: 'Your blood sugar this morning was high (178 mg/dL). See recommendations below.',
      glucose: 'Blood Sugar',
      bloodPressure: 'Blood Pressure',
      sleep: 'Sleep',
      activity: 'Physical Activity',
      hours: 'hours',
      minutes: 'min/day',
      logData: 'Log Health Data',
      recommendations: 'Today\'s Recommendations',
      nutrition: {
        category: 'Nutrition',
        action: 'Limit refined carbs to 30-45g per meal',
        rationale: 'Your blood sugar was high on 5 of 7 days this week, showing an 18% upward trend. Reducing carb portions helps stabilize glucose levels.',
      },
      exercise: {
        category: 'Exercise',
        action: 'Take a 15-20 minute walk within 30 minutes after your main meal',
        rationale: 'Post-meal activity significantly reduces blood sugar spikes. You only exercised 2 days this week.',
      },
      sleepRec: {
        category: 'Sleep',
        action: 'Try to go to bed at 10 PM each night to get 7-8 hours of sleep',
        rationale: 'You\'re averaging 5.6 hours per night. Poor sleep increases insulin resistance and makes blood sugar harder to control.',
      },
      monitoring: {
        category: 'Monitoring',
        action: 'Check your blood sugar before breakfast and 2 hours after your main meal daily this week',
        rationale: 'Frequent monitoring helps you identify which foods and activities affect your blood sugar.',
      },
      nav: {
        home: 'Home',
        trends: 'Trends',
        summary: 'Summary',
      },
    },
    fr: {
      greeting: 'Bonjour, André! 👋',
      date: 'Dimanche, 5 octobre 2025',
      alert: 'Votre glycémie ce matin était élevée (178 mg/dL). Consultez les recommandations ci-dessous.',
      glucose: 'Glycémie',
      bloodPressure: 'Tension artérielle',
      sleep: 'Sommeil',
      activity: 'Activité physique',
      hours: 'heures',
      minutes: 'min/jour',
      logData: 'Enregistrer les données',
      recommendations: 'Recommandations d\'aujourd\'hui',
      nutrition: {
        category: 'Alimentation',
        action: 'Limitez les glucides raffinés à 30-45g par repas',
        rationale: 'Votre glycémie a été élevée à 5 reprises cette semaine et montre une tendance à la hausse de 18%. Réduire les portions de glucides aide à stabiliser la glycémie.',
      },
      exercise: {
        category: 'Exercice',
        action: 'Faites une marche de 15-20 minutes dans les 30 minutes suivant votre repas principal',
        rationale: 'L\'activité après les repas réduit considérablement les pics de glycémie. Vous n\'avez fait d\'exercice que 2 jours cette semaine.',
      },
      sleepRec: {
        category: 'Sommeil',
        action: 'Essayez de vous coucher à 22h chaque soir pour obtenir 7-8 heures de sommeil',
        rationale: 'Vous dormez en moyenne 5,6 heures par nuit. Le manque de sommeil augmente la résistance à l\'insuline et complique le contrôle de la glycémie.',
      },
      monitoring: {
        category: 'Surveillance',
        action: 'Vérifiez votre glycémie avant le petit-déjeuner et 2 heures après votre repas principal quotidiennement cette semaine',
        rationale: 'La surveillance fréquente vous aide à identifier les aliments et activités qui affectent votre glycémie.',
      },
      nav: {
        home: 'Accueil',
        trends: 'Tendances',
        summary: 'Résumé',
      },
    },
  };
  
  const t = content[currentLanguage];
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-[88px]">
      {/* Header with Language Toggle */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-gray-900 mb-1">{t.greeting}</h1>
              <p className="text-sm text-gray-600">{t.date}</p>
            </div>
            <LanguageToggle 
              activeLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Alert */}
        <AlertBanner type="warning">
          {t.alert}
        </AlertBanner>
        
        {/* Metrics Grid - 2x2 with 8px spacing */}
        <div className="grid grid-cols-2 gap-4">
          <MetricDisplay
            icon="🩸"
            label={t.glucose}
            value="178"
            unit="mg/dL"
            status="warning"
            trend="up"
            trendPercentage="+18%"
          />
          <MetricDisplay
            icon="❤️"
            label={t.bloodPressure}
            value="145/92"
            unit="mmHg"
            status="warning"
            trend="up"
            trendPercentage="+6%"
          />
          <MetricDisplay
            icon="😴"
            label={t.sleep}
            value="5.6"
            unit={t.hours}
            status="critical"
            trend="down"
            trendPercentage="-7%"
          />
          <MetricDisplay
            icon="🚶"
            label={t.activity}
            value="12"
            unit={t.minutes}
            status="critical"
            trend="down"
            trendPercentage="-31%"
          />
        </div>
        
        {/* Log Data Button */}
        <HealthButton
          size="large"
          variant="primary"
          onClick={() => onNavigate('andre-log')}
          className="w-full"
        >
          📝 {t.logData}
        </HealthButton>
        
        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-gray-900">{t.recommendations}</h2>
          
          <RecommendationCard
            emoji="🍎"
            category={t.nutrition.category}
            action={t.nutrition.action}
            rationale={t.nutrition.rationale}
          />
          
          <RecommendationCard
            emoji="🚶"
            category={t.exercise.category}
            action={t.exercise.action}
            rationale={t.exercise.rationale}
          />
          
          <RecommendationCard
            emoji="💤"
            category={t.sleepRec.category}
            action={t.sleepRec.action}
            rationale={t.sleepRec.rationale}
          />
          
          <RecommendationCard
            emoji="📊"
            category={t.monitoring.category}
            action={t.monitoring.action}
            rationale={t.monitoring.rationale}
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav
        active="home"
        onNavigate={(tab) => {
          if (tab === 'trends') onNavigate('andre-trends');
          if (tab === 'summary') onNavigate('andre-summary');
        }}
        labels={t.nav}
      />
    </div>
  );
}
