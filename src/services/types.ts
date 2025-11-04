// Core Types for CareMate Core Application

export type Language = 'en' | 'fr';

export type HealthGoal = 
  | 'general-wellness' 
  | 'diabetes-management' 
  | 'stress-management' 
  | 'student-health';

export type AlertSeverity = 'critical' | 'warning' | 'info';

export type TrendDirection = 'improving' | 'worsening' | 'stable';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  healthGoal: HealthGoal;
  language: Language;
  createdAt: Date;
}

export interface HealthData {
  id: string;
  userId: string;
  date: Date;
  bloodGlucose?: number; // mg/dL (70-180 normal)
  bloodPressureSystolic?: number; // mmHg (90-140 normal)
  bloodPressureDiastolic?: number; // mmHg (60-90 normal)
  sleepHours?: number; // 0-24 hours
  activityMinutes?: number; // 0-1440 minutes
  stressLevel?: number; // 1-10 scale
  moodRating?: number; // 1-5 scale (emojis)
  notes?: string;
}

export interface Alert {
  id: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  category: 'glucose' | 'blood-pressure' | 'sleep' | 'activity' | 'stress' | 'general';
  createdAt: Date;
}

export interface Recommendation {
  id: string;
  category: 'nutrition' | 'activity' | 'sleep' | 'stress' | 'general';
  icon: string;
  title: string;
  description: string;
  priority: number; // 1-5, where 1 is highest
}

export interface WeekSummary {
  avgGlucose: number;
  avgSystolic: number;
  avgDiastolic: number;
  avgSleep: number;
  avgActivity: number;
  avgStress: number;
  avgMood: number;
  daysLogged: number;
  glucoseTrend?: TrendDirection;
  sleepTrend?: TrendDirection;
  bpTrend?: TrendDirection;
}

export interface AIInsight {
  observation: string;
  context: string;
  todayAction: string;
  generatedAt: Date;
  expiresAt: Date;
}

export interface TrendData {
  date: string;
  glucose?: number;
  systolic?: number;
  diastolic?: number;
  sleep?: number;
  activity?: number;
  stress?: number;
  mood?: number;
}

// Persona type for pre-populated user profiles
export interface Persona extends UserProfile {
  healthData: HealthData[];
  description: string;
  condition?: string;
}
