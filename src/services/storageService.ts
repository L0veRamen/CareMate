import type { UserProfile, HealthData, AIInsight, Language } from './types';
import { getPersonaById } from './personaData';

const STORAGE_KEYS = {
  USER_PROFILE: 'caremate_user_profile',
  HEALTH_DATA: 'caremate_health_data',
  LANGUAGE: 'caremate_language',
  AI_INSIGHT: 'caremate_ai_insight',
  LAST_ANALYSIS: 'caremate_last_analysis',
  SELECTED_PERSONA: 'caremate_selected_persona'
};

class StorageService {
  // User Profile Methods
  getUserProfile(): UserProfile | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (!stored) return null;
      
      const profile = JSON.parse(stored);
      profile.createdAt = new Date(profile.createdAt);
      return profile;
    } catch (error) {
      console.error('Error reading user profile:', error);
      return null;
    }
  }

  saveUserProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  }

  // Persona Methods
  getSelectedPersonaId(): string | null {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_PERSONA);
  }

  setSelectedPersona(personaId: string): void {
    localStorage.setItem(STORAGE_KEYS.SELECTED_PERSONA, personaId);
    
    // Load the persona data
    const persona = getPersonaById(personaId);
    if (persona) {
      // Save the persona's profile
      this.saveUserProfile({
        id: persona.id,
        name: persona.name,
        age: persona.age,
        healthGoal: persona.healthGoal,
        language: persona.language,
        createdAt: persona.createdAt
      });
      
      // Save the persona's health data
      this.saveHealthData(persona.healthData);
      
      // Set the language only if the user hasn't selected one yet
      const userHasPreference = localStorage.getItem(STORAGE_KEYS.LANGUAGE) !== null;
      if (!userHasPreference) {
        this.setLanguage(persona.language);
      }
    }
  }

  loadPersonaData(personaId: string): void {
    this.setSelectedPersona(personaId);
  }

  // Health Data Methods
  getAllHealthData(): HealthData[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.HEALTH_DATA);
      if (!stored) return [];
      
      const data: HealthData[] = JSON.parse(stored);
      return data.map(item => ({
        ...item,
        date: new Date(item.date)
      }));
    } catch (error) {
      console.error('Error reading health data:', error);
      return [];
    }
  }

  saveHealthData(data: HealthData[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.HEALTH_DATA, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving health data:', error);
    }
  }

  addHealthData(newData: HealthData): void {
    const allData = this.getAllHealthData();
    allData.push(newData);
    // Sort by date descending
    allData.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.saveHealthData(allData);
  }

  getHealthDataForDateRange(startDate: Date, endDate: Date): HealthData[] {
    const allData = this.getAllHealthData();
    return allData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  }

  getLast7DaysData(): HealthData[] {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    return this.getHealthDataForDateRange(startDate, endDate);
  }

  getTodayData(): HealthData | null {
    const allData = this.getAllHealthData();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return allData.find(item => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);
      return itemDate.getTime() === today.getTime();
    }) || null;
  }

  // Language Methods
  getLanguage(): Language {
    const stored = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) return 'fr';
    return 'en';
  }

  setLanguage(language: Language): void {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  }

  // AI Insight Methods
  getAIInsight(): AIInsight | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.AI_INSIGHT);
      if (!stored) return null;
      
      const insight = JSON.parse(stored);
      insight.generatedAt = new Date(insight.generatedAt);
      insight.expiresAt = new Date(insight.expiresAt);
      
      // Check if expired
      if (new Date() > insight.expiresAt) {
        this.clearAIInsight();
        return null;
      }
      
      return insight;
    } catch (error) {
      console.error('Error reading AI insight:', error);
      return null;
    }
  }

  saveAIInsight(insight: AIInsight): void {
    try {
      localStorage.setItem(STORAGE_KEYS.AI_INSIGHT, JSON.stringify(insight));
    } catch (error) {
      console.error('Error saving AI insight:', error);
    }
  }

  clearAIInsight(): void {
    localStorage.removeItem(STORAGE_KEYS.AI_INSIGHT);
  }

  canRequestNewInsight(): boolean {
    const existing = this.getAIInsight();
    return existing === null;
  }

  // Clear All Data
  clearAllData(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  // Check if user has completed setup
  hasCompletedSetup(): boolean {
    return this.getUserProfile() !== null || this.getSelectedPersonaId() !== null;
  }
}

export const storageService = new StorageService();
