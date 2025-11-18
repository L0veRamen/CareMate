import type { HealthData, AIInsight, UserProfile, WeekSummary, Language } from './types';

class AIInsightService {
  private readonly API_ENDPOINT = 'https://api.anthropic.com/v1/messages';
  
  async generateInsight(
    profile: UserProfile,
    recentData: HealthData[],
    summary: WeekSummary,
    language: Language = 'en'
  ): Promise<AIInsight> {
    try {
      // Prepare data summary for the prompt
      const dataSummary = this.prepareDataSummary(recentData, summary, language);
      
      // Create the prompt
      const prompt = this.createPrompt(profile, dataSummary, language);
      
      // Call Claude API
      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 500,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate AI insight');
      }

      const data = await response.json();
      const insightText = data.content[0].text;
      
      // Parse the response
      const parsedInsight = this.parseInsightResponse(insightText);
      
      // Create insight object with expiration
      const now = new Date();
      const expiresAt = new Date(now);
      expiresAt.setHours(23, 59, 59, 999); // Expires at end of day
      
      return {
        observation: parsedInsight.observation,
        context: parsedInsight.context,
        todayAction: parsedInsight.todayAction,
        generatedAt: now,
        expiresAt: expiresAt
      };
    } catch (error) {
      console.error('Error generating AI insight:', error);
      throw error;
    }
  }

  private prepareDataSummary(
    data: HealthData[], 
    summary: WeekSummary, 
    language: Language
  ): string {
    const lines: string[] = [];
    
    if (language === 'en') {
      lines.push('Past 7 Days Summary:');
      if (summary.avgGlucose > 0) {
        lines.push(`- Average Blood Glucose: ${summary.avgGlucose} mg/dL`);
      }
      if (summary.avgSystolic > 0) {
        lines.push(`- Average Blood Pressure: ${summary.avgSystolic}/${summary.avgDiastolic} mmHg`);
      }
      if (summary.avgSleep > 0) {
        lines.push(`- Average Sleep: ${summary.avgSleep} hours`);
      }
      if (summary.avgActivity > 0) {
        lines.push(`- Average Activity: ${summary.avgActivity} minutes`);
      }
      if (summary.avgStress > 0) {
        lines.push(`- Average Stress Level: ${summary.avgStress}/10`);
      }
      if (summary.avgMood > 0) {
        lines.push(`- Average Mood: ${summary.avgMood}/5`);
      }
      lines.push(`- Days Logged: ${summary.daysLogged}/7`);
    } else {
      lines.push('Résumé des 7 derniers jours:');
      if (summary.avgGlucose > 0) {
        lines.push(`- Glycémie moyenne: ${summary.avgGlucose} mg/dL`);
      }
      if (summary.avgSystolic > 0) {
        lines.push(`- Tension artérielle moyenne: ${summary.avgSystolic}/${summary.avgDiastolic} mmHg`);
      }
      if (summary.avgSleep > 0) {
        lines.push(`- Sommeil moyen: ${summary.avgSleep} heures`);
      }
      if (summary.avgActivity > 0) {
        lines.push(`- Activité moyenne: ${summary.avgActivity} minutes`);
      }
      if (summary.avgStress > 0) {
        lines.push(`- Niveau de stress moyen: ${summary.avgStress}/10`);
      }
      if (summary.avgMood > 0) {
        lines.push(`- Humeur moyenne: ${summary.avgMood}/5`);
      }
      lines.push(`- Jours enregistrés: ${summary.daysLogged}/7`);
    }

    // Add recent notes if any
    const recentNotes = data
      .filter(d => d.notes)
      .slice(0, 3)
      .map(d => d.notes);
    
    if (recentNotes.length > 0) {
      lines.push('');
      lines.push(language === 'en' ? 'Recent Notes:' : 'Notes récentes:');
      recentNotes.forEach(note => lines.push(`- "${note}"`));
    }

    return lines.join('\n');
  }

  private createPrompt(
    profile: UserProfile, 
    dataSummary: string, 
    language: Language
  ): string {
    if (language === 'en') {
      return `You are a health advisor providing a personalized daily insight for ${profile.name}, age ${profile.age}, with health goal: ${profile.healthGoal}.

${dataSummary}

Provide a brief, supportive insight in this EXACT format:

OBSERVATION: [One sentence about what you notice in their data - be specific with numbers]

CONTEXT: [One sentence explaining what this means for their health]

TODAY'S ACTION: [One specific, actionable thing they can do today - be concrete]

Keep each section to one sentence. Be encouraging and practical. Focus on the most important pattern you see.`;
    } else {
      return `Vous êtes un conseiller santé fournissant un aperçu quotidien personnalisé pour ${profile.name}, âge ${profile.age}, avec objectif santé: ${profile.healthGoal}.

${dataSummary}

Fournissez un aperçu bref et encourageant dans ce format EXACT:

OBSERVATION: [Une phrase sur ce que vous remarquez dans leurs données - soyez précis avec les chiffres]

CONTEXTE: [Une phrase expliquant ce que cela signifie pour leur santé]

ACTION D'AUJOURD'HUI: [Une chose spécifique et réalisable qu'ils peuvent faire aujourd'hui - soyez concret]

Limitez chaque section à une phrase. Soyez encourageant et pratique. Concentrez-vous sur le modèle le plus important que vous voyez.`;
    }
  }

  private parseInsightResponse(response: string): {
    observation: string;
    context: string;
    todayAction: string;
  } {
    // Try to parse structured response
    const observationMatch = response.match(/OBSERVATION[:\s]+(.+?)(?=CONTEXT|CONTEXTE|$)/is);
    const contextMatch = response.match(/(?:CONTEXT|CONTEXTE)[:\s]+(.+?)(?=TODAY'S ACTION|ACTION D'AUJOURD'HUI|$)/is);
    const actionMatch = response.match(/(?:TODAY'S ACTION|ACTION D'AUJOURD'HUI)[:\s]+(.+?)$/is);

    if (observationMatch && contextMatch && actionMatch) {
      return {
        observation: observationMatch[1].trim(),
        context: contextMatch[1].trim(),
        todayAction: actionMatch[1].trim()
      };
    }

    // Fallback: split by sentences
    const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    return {
      observation: sentences[0]?.trim() || 'Keep tracking your health metrics.',
      context: sentences[1]?.trim() || 'Consistent tracking helps you understand your health patterns.',
      todayAction: sentences[2]?.trim() || 'Continue logging your daily health data.'
    };
  }

  // Mock insight for development/testing without API
  generateMockInsight(
    _profile: UserProfile,
    summary: WeekSummary,
    language: Language = 'en'
  ): AIInsight {
    const now = new Date();
    const expiresAt = new Date(now);
    expiresAt.setHours(23, 59, 59, 999);

    if (language === 'en') {
      return {
        observation: `Your average sleep of ${summary.avgSleep} hours is below the recommended 7-8 hours.`,
        context: 'Insufficient sleep can affect glucose control, blood pressure, and overall stress levels.',
        todayAction: 'Set a bedtime alarm for 10 PM tonight to ensure you get at least 7 hours of rest.',
        generatedAt: now,
        expiresAt: expiresAt
      };
    } else {
      return {
        observation: `Votre sommeil moyen de ${summary.avgSleep} heures est en dessous des 7-8 heures recommandées.`,
        context: 'Un sommeil insuffisant peut affecter le contrôle de la glycémie, la tension artérielle et les niveaux de stress.',
        todayAction: 'Réglez une alarme pour le coucher à 22h ce soir pour assurer au moins 7 heures de repos.',
        generatedAt: now,
        expiresAt: expiresAt
      };
    }
  }
}

export const aiInsightService = new AIInsightService();
