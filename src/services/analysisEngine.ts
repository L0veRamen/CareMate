import type { 
  HealthData, 
  Alert, 
  Recommendation, 
  WeekSummary, 
  TrendDirection,
  Language 
} from './types';

class AnalysisEngine {
  // Calculate averages and trends for the past 7 days
  calculateWeekSummary(data: HealthData[]): WeekSummary {
    if (data.length === 0) {
      return {
        avgGlucose: 0,
        avgSystolic: 0,
        avgDiastolic: 0,
        avgSleep: 0,
        avgActivity: 0,
        avgStress: 0,
        avgMood: 0,
        daysLogged: 0
      };
    }

    const totals = data.reduce((acc, item) => {
      return {
        glucose: acc.glucose + (item.bloodGlucose || 0),
        systolic: acc.systolic + (item.bloodPressureSystolic || 0),
        diastolic: acc.diastolic + (item.bloodPressureDiastolic || 0),
        sleep: acc.sleep + (item.sleepHours || 0),
        activity: acc.activity + (item.activityMinutes || 0),
        stress: acc.stress + (item.stressLevel || 0),
        mood: acc.mood + (item.moodRating || 0),
        glucoseCount: acc.glucoseCount + (item.bloodGlucose ? 1 : 0),
        bpCount: acc.bpCount + (item.bloodPressureSystolic ? 1 : 0),
        sleepCount: acc.sleepCount + (item.sleepHours ? 1 : 0),
        activityCount: acc.activityCount + (item.activityMinutes ? 1 : 0),
        stressCount: acc.stressCount + (item.stressLevel ? 1 : 0),
        moodCount: acc.moodCount + (item.moodRating ? 1 : 0)
      };
    }, {
      glucose: 0, systolic: 0, diastolic: 0, sleep: 0, activity: 0, stress: 0, mood: 0,
      glucoseCount: 0, bpCount: 0, sleepCount: 0, activityCount: 0, stressCount: 0, moodCount: 0
    });

    return {
      avgGlucose: totals.glucoseCount > 0 ? Math.round(totals.glucose / totals.glucoseCount) : 0,
      avgSystolic: totals.bpCount > 0 ? Math.round(totals.systolic / totals.bpCount) : 0,
      avgDiastolic: totals.bpCount > 0 ? Math.round(totals.diastolic / totals.bpCount) : 0,
      avgSleep: totals.sleepCount > 0 ? Math.round(totals.sleep / totals.sleepCount * 10) / 10 : 0,
      avgActivity: totals.activityCount > 0 ? Math.round(totals.activity / totals.activityCount) : 0,
      avgStress: totals.stressCount > 0 ? Math.round(totals.stress / totals.stressCount * 10) / 10 : 0,
      avgMood: totals.moodCount > 0 ? Math.round(totals.mood / totals.moodCount * 10) / 10 : 0,
      daysLogged: data.length,
      glucoseTrend: this.calculateTrend(data, 'bloodGlucose'),
      sleepTrend: this.calculateTrend(data, 'sleepHours'),
      bpTrend: this.calculateTrend(data, 'bloodPressureSystolic')
    };
  }

  // Calculate trend direction for a specific metric
  private calculateTrend(
    data: HealthData[], 
    key: keyof HealthData
  ): TrendDirection {
    if (data.length < 2) return 'stable';

    const values = data
      .map(item => item[key])
      .filter((val): val is number => typeof val === 'number');

    if (values.length < 2) return 'stable';

    const firstHalf = values.slice(0, Math.ceil(values.length / 2));
    const secondHalf = values.slice(Math.ceil(values.length / 2));

    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;

    const percentChange = ((secondAvg - firstAvg) / firstAvg) * 100;

    // For metrics where lower is better (glucose, BP, stress)
    if (key === 'bloodGlucose' || key === 'bloodPressureSystolic' || key === 'stressLevel') {
      if (percentChange <= -10) return 'improving';
      if (percentChange >= 10) return 'worsening';
      return 'stable';
    }
    
    // For metrics where higher is better (sleep, activity, mood)
    if (percentChange >= 10) return 'improving';
    if (percentChange <= -10) return 'worsening';
    return 'stable';
  }

  // Generate alerts based on health data patterns
  generateAlerts(data: HealthData[], language: Language = 'en'): Alert[] {
    const alerts: Alert[] = [];
    const last7Days = data.slice(0, 7);

    // Glucose Alerts
    const highGlucoseDays = last7Days.filter(d => d.bloodGlucose && d.bloodGlucose > 180).length;
    const lowGlucoseDays = last7Days.filter(d => d.bloodGlucose && d.bloodGlucose < 70).length;

    if (highGlucoseDays >= 3) {
      alerts.push({
        id: `alert-glucose-high-${Date.now()}`,
        severity: highGlucoseDays >= 5 ? 'critical' : 'warning',
        title: language === 'en' ? 'Elevated Blood Sugar' : 'Glycémie Élevée',
        message: language === 'en' 
          ? `Your glucose was high on ${highGlucoseDays} of 7 days this week. Consider reviewing your diet and medication with your doctor.`
          : `Votre glycémie était élevée ${highGlucoseDays} jours sur 7 cette semaine. Consultez votre médecin pour réviser votre régime et médication.`,
        category: 'glucose',
        createdAt: new Date()
      });
    }

    if (lowGlucoseDays >= 2) {
      alerts.push({
        id: `alert-glucose-low-${Date.now()}`,
        severity: 'warning',
        title: language === 'en' ? 'Low Blood Sugar Episodes' : 'Épisodes de Glycémie Basse',
        message: language === 'en'
          ? `You had ${lowGlucoseDays} episodes of low blood sugar this week. Please consult your healthcare provider.`
          : `Vous avez eu ${lowGlucoseDays} épisodes de glycémie basse cette semaine. Veuillez consulter votre professionnel de santé.`,
        category: 'glucose',
        createdAt: new Date()
      });
    }

    // Blood Pressure Alerts
    const highBPDays = last7Days.filter(d => 
      d.bloodPressureSystolic && d.bloodPressureSystolic > 140
    ).length;

    if (highBPDays >= 3) {
      alerts.push({
        id: `alert-bp-high-${Date.now()}`,
        severity: highBPDays >= 5 ? 'critical' : 'warning',
        title: language === 'en' ? 'High Blood Pressure' : 'Tension Artérielle Élevée',
        message: language === 'en'
          ? `Your blood pressure was elevated on ${highBPDays} of 7 days. This requires medical attention.`
          : `Votre tension artérielle était élevée ${highBPDays} jours sur 7. Cela nécessite une attention médicale.`,
        category: 'blood-pressure',
        createdAt: new Date()
      });
    }

    // Sleep Alerts
    const poorSleepDays = last7Days.filter(d => 
      d.sleepHours && d.sleepHours < 6
    ).length;

    if (poorSleepDays >= 4) {
      alerts.push({
        id: `alert-sleep-${Date.now()}`,
        severity: 'warning',
        title: language === 'en' ? 'Insufficient Sleep' : 'Sommeil Insuffisant',
        message: language === 'en'
          ? `You slept less than 6 hours on ${poorSleepDays} nights this week. Aim for 7-9 hours for better health.`
          : `Vous avez dormi moins de 6 heures pendant ${poorSleepDays} nuits cette semaine. Visez 7-9 heures pour une meilleure santé.`,
        category: 'sleep',
        createdAt: new Date()
      });
    }

    // Activity Alerts
    const lowActivityDays = last7Days.filter(d => 
      d.activityMinutes !== undefined && d.activityMinutes < 20
    ).length;

    if (lowActivityDays >= 5) {
      alerts.push({
        id: `alert-activity-${Date.now()}`,
        severity: 'info',
        title: language === 'en' ? 'Low Physical Activity' : 'Activité Physique Faible',
        message: language === 'en'
          ? `You had minimal activity on ${lowActivityDays} days. Try to add at least 30 minutes of movement daily.`
          : `Vous avez eu une activité minimale pendant ${lowActivityDays} jours. Essayez d'ajouter au moins 30 minutes d'activité quotidienne.`,
        category: 'activity',
        createdAt: new Date()
      });
    }

    // Stress Alerts
    const highStressDays = last7Days.filter(d => 
      d.stressLevel && d.stressLevel >= 7
    ).length;

    if (highStressDays >= 4) {
      alerts.push({
        id: `alert-stress-${Date.now()}`,
        severity: 'warning',
        title: language === 'en' ? 'High Stress Levels' : 'Niveaux de Stress Élevés',
        message: language === 'en'
          ? `You reported high stress on ${highStressDays} of 7 days. Consider stress management techniques or speaking with a counselor.`
          : `Vous avez signalé un stress élevé ${highStressDays} jours sur 7. Considérez des techniques de gestion du stress ou parlez à un conseiller.`,
        category: 'stress',
        createdAt: new Date()
      });
    }

    return alerts;
  }

  // Generate personalized recommendations
  generateRecommendations(
    _data: HealthData[], 
    summary: WeekSummary, 
    _alerts: Alert[],
    language: Language = 'en'
  ): Recommendation[] {
    const recommendations: Recommendation[] = [];

    // Glucose management recommendations
    if (summary.avgGlucose > 140) {
      recommendations.push({
        id: 'rec-glucose-diet',
        category: 'nutrition',
        icon: '🍎',
        title: language === 'en' ? 'Nutrition' : 'Nutrition',
        description: language === 'en'
          ? 'Reduce refined sugars and focus on complex carbohydrates. Consider smaller, more frequent meals.'
          : 'Réduisez les sucres raffinés et privilégiez les glucides complexes. Envisagez des repas plus petits et fréquents.',
        priority: 1
      });
    }

    // Blood pressure recommendations
    if (summary.avgSystolic > 130) {
      recommendations.push({
        id: 'rec-bp-sodium',
        category: 'nutrition',
        icon: '🧂',
        title: language === 'en' ? 'Reduce Sodium' : 'Réduire le Sodium',
        description: language === 'en'
          ? 'Limit sodium intake to less than 2,300mg per day. Avoid processed foods and add less salt to meals.'
          : 'Limitez l\'apport en sodium à moins de 2 300 mg par jour. Évitez les aliments transformés et ajoutez moins de sel aux repas.',
        priority: 1
      });
    }

    // Sleep recommendations
    if (summary.avgSleep < 7) {
      recommendations.push({
        id: 'rec-sleep',
        category: 'sleep',
        icon: '💤',
        title: language === 'en' ? 'Sleep' : 'Sommeil',
        description: language === 'en'
          ? 'Aim for 7-8 hours of sleep. Establish a consistent bedtime routine and avoid screens 1 hour before bed.'
          : 'Visez 7-8 heures de sommeil. Établissez une routine de coucher régulière et évitez les écrans 1 heure avant le coucher.',
        priority: 2
      });
    }

    // Activity recommendations
    if (summary.avgActivity < 30) {
      recommendations.push({
        id: 'rec-activity',
        category: 'activity',
        icon: '🚶',
        title: language === 'en' ? 'Physical Activity' : 'Activité Physique',
        description: language === 'en'
          ? 'Start with a 15-minute walk daily and gradually increase. Even light movement can improve your health.'
          : 'Commencez par une marche de 15 minutes par jour et augmentez progressivement. Même un mouvement léger peut améliorer votre santé.',
        priority: 2
      });
    }

    // Stress management recommendations
    if (summary.avgStress >= 6) {
      recommendations.push({
        id: 'rec-stress',
        category: 'stress',
        icon: '🧘',
        title: language === 'en' ? 'Stress Management' : 'Gestion du Stress',
        description: language === 'en'
          ? 'Try deep breathing exercises, meditation, or yoga. Even 5 minutes of mindfulness can help reduce stress.'
          : 'Essayez des exercices de respiration profonde, de méditation ou de yoga. Même 5 minutes de pleine conscience peuvent réduire le stress.',
        priority: 1
      });
    }

    // General wellness recommendation
    if (recommendations.length === 0) {
      recommendations.push({
        id: 'rec-general',
        category: 'general',
        icon: '✨',
        title: language === 'en' ? 'Keep It Up!' : 'Continuez!',
        description: language === 'en'
          ? 'You\'re doing great! Keep maintaining your healthy habits and continue tracking your progress.'
          : 'Vous faites du bon travail! Continuez à maintenir vos habitudes saines et à suivre vos progrès.',
        priority: 3
      });
    }

    // Sort by priority
    return recommendations.sort((a, b) => a.priority - b.priority).slice(0, 3);
  }
}

export const analysisEngine = new AnalysisEngine();
