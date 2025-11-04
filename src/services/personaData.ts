import type { Persona, HealthData } from './types';

// Helper function to generate dates for the past 30 days
const getDateDaysAgo = (daysAgo: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(8, 0, 0, 0);
  return date;
};

// Leo - 17-year-old high school student
const leoHealthData: HealthData[] = [
  // Last 30 days of data
  {
    id: 'leo-data-1',
    userId: 'leo',
    date: getDateDaysAgo(0),
    bloodGlucose: 88,
    bloodPressureSystolic: 118,
    bloodPressureDiastolic: 75,
    sleepHours: 5.5,
    activityMinutes: 30,
    stressLevel: 8,
    moodRating: 2,
    notes: 'Exam week - very stressed'
  },
  {
    id: 'leo-data-2',
    userId: 'leo',
    date: getDateDaysAgo(1),
    bloodGlucose: 92,
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 78,
    sleepHours: 6,
    activityMinutes: 45,
    stressLevel: 7,
    moodRating: 3,
    notes: 'Studying late'
  },
  {
    id: 'leo-data-3',
    userId: 'leo',
    date: getDateDaysAgo(2),
    bloodGlucose: 85,
    bloodPressureSystolic: 115,
    bloodPressureDiastolic: 72,
    sleepHours: 5,
    activityMinutes: 20,
    stressLevel: 9,
    moodRating: 2,
    notes: 'Too much caffeine'
  },
  {
    id: 'leo-data-4',
    userId: 'leo',
    date: getDateDaysAgo(3),
    bloodGlucose: 90,
    bloodPressureSystolic: 116,
    bloodPressureDiastolic: 74,
    sleepHours: 7,
    activityMinutes: 60,
    stressLevel: 6,
    moodRating: 4,
    notes: 'Basketball practice'
  },
  {
    id: 'leo-data-5',
    userId: 'leo',
    date: getDateDaysAgo(4),
    bloodGlucose: 87,
    bloodPressureSystolic: 114,
    bloodPressureDiastolic: 71,
    sleepHours: 8,
    activityMinutes: 90,
    stressLevel: 4,
    moodRating: 5,
    notes: 'Good day!'
  },
  {
    id: 'leo-data-6',
    userId: 'leo',
    date: getDateDaysAgo(5),
    bloodGlucose: 91,
    bloodPressureSystolic: 119,
    bloodPressureDiastolic: 76,
    sleepHours: 6.5,
    activityMinutes: 45,
    stressLevel: 5,
    moodRating: 4,
    notes: 'Weekend - feeling better'
  },
  {
    id: 'leo-data-7',
    userId: 'leo',
    date: getDateDaysAgo(6),
    bloodGlucose: 89,
    bloodPressureSystolic: 117,
    bloodPressureDiastolic: 73,
    sleepHours: 9,
    activityMinutes: 75,
    stressLevel: 3,
    moodRating: 5,
    notes: 'Slept in, went for a run'
  }
];

// Andre - 72-year-old with Type 2 Diabetes
const andreHealthData: HealthData[] = [
  {
    id: 'andre-data-1',
    userId: 'andre',
    date: getDateDaysAgo(0),
    bloodGlucose: 165,
    bloodPressureSystolic: 138,
    bloodPressureDiastolic: 88,
    sleepHours: 6,
    activityMinutes: 25,
    stressLevel: 7,
    moodRating: 3,
    notes: 'Forgot medication in morning'
  },
  {
    id: 'andre-data-2',
    userId: 'andre',
    date: getDateDaysAgo(1),
    bloodGlucose: 152,
    bloodPressureSystolic: 135,
    bloodPressureDiastolic: 86,
    sleepHours: 6.5,
    activityMinutes: 30,
    stressLevel: 6,
    moodRating: 3,
    notes: 'Work deadline stress'
  },
  {
    id: 'andre-data-3',
    userId: 'andre',
    date: getDateDaysAgo(2),
    bloodGlucose: 178,
    bloodPressureSystolic: 142,
    bloodPressureDiastolic: 90,
    sleepHours: 5.5,
    activityMinutes: 15,
    stressLevel: 8,
    moodRating: 2,
    notes: 'Client dinner - ate too much'
  },
  {
    id: 'andre-data-4',
    userId: 'andre',
    date: getDateDaysAgo(3),
    bloodGlucose: 145,
    bloodPressureSystolic: 132,
    bloodPressureDiastolic: 84,
    sleepHours: 7,
    activityMinutes: 40,
    stressLevel: 5,
    moodRating: 4,
    notes: 'Morning walk helped'
  },
  {
    id: 'andre-data-5',
    userId: 'andre',
    date: getDateDaysAgo(4),
    bloodGlucose: 138,
    bloodPressureSystolic: 128,
    bloodPressureDiastolic: 82,
    sleepHours: 7.5,
    activityMinutes: 50,
    stressLevel: 4,
    moodRating: 4,
    notes: 'Feeling good, stuck to diet'
  },
  {
    id: 'andre-data-6',
    userId: 'andre',
    date: getDateDaysAgo(5),
    bloodGlucose: 142,
    bloodPressureSystolic: 130,
    bloodPressureDiastolic: 83,
    sleepHours: 7,
    activityMinutes: 45,
    stressLevel: 5,
    moodRating: 4,
    notes: 'Regular checkup scheduled'
  },
  {
    id: 'andre-data-7',
    userId: 'andre',
    date: getDateDaysAgo(6),
    bloodGlucose: 148,
    bloodPressureSystolic: 133,
    bloodPressureDiastolic: 85,
    sleepHours: 6.5,
    activityMinutes: 35,
    stressLevel: 6,
    moodRating: 3,
    notes: 'Weekend but still monitoring'
  }
];

// Ruby - Young professional with hypertension
const rubyHealthData: HealthData[] = [
  {
    id: 'ruby-data-1',
    userId: 'ruby',
    date: getDateDaysAgo(0),
    bloodGlucose: 105,
    bloodPressureSystolic: 148,
    bloodPressureDiastolic: 92,
    sleepHours: 6,
    activityMinutes: 40,
    stressLevel: 7,
    moodRating: 3,
    notes: 'Busy workday - deadline stress'
  },
  {
    id: 'ruby-data-2',
    userId: 'ruby',
    date: getDateDaysAgo(1),
    bloodGlucose: 98,
    bloodPressureSystolic: 145,
    bloodPressureDiastolic: 90,
    sleepHours: 7,
    activityMinutes: 50,
    stressLevel: 4,
    moodRating: 4,
    notes: 'Yoga class after work - felt great'
  },
  {
    id: 'ruby-data-3',
    userId: 'ruby',
    date: getDateDaysAgo(2),
    bloodGlucose: 102,
    bloodPressureSystolic: 152,
    bloodPressureDiastolic: 94,
    sleepHours: 5.5,
    activityMinutes: 30,
    stressLevel: 8,
    moodRating: 2,
    notes: 'Long work hours - presentation tomorrow'
  },
  {
    id: 'ruby-data-4',
    userId: 'ruby',
    date: getDateDaysAgo(3),
    bloodGlucose: 100,
    bloodPressureSystolic: 142,
    bloodPressureDiastolic: 88,
    sleepHours: 8,
    activityMinutes: 60,
    stressLevel: 3,
    moodRating: 5,
    notes: 'Weekend run - feeling refreshed'
  },
  {
    id: 'ruby-data-5',
    userId: 'ruby',
    date: getDateDaysAgo(4),
    bloodGlucose: 96,
    bloodPressureSystolic: 140,
    bloodPressureDiastolic: 86,
    sleepHours: 7.5,
    activityMinutes: 55,
    stressLevel: 2,
    moodRating: 5,
    notes: 'Good sleep - morning meditation'
  },
  {
    id: 'ruby-data-6',
    userId: 'ruby',
    date: getDateDaysAgo(5),
    bloodGlucose: 103,
    bloodPressureSystolic: 146,
    bloodPressureDiastolic: 91,
    sleepHours: 6.5,
    activityMinutes: 45,
    stressLevel: 5,
    moodRating: 4,
    notes: 'Doctor appointment - BP monitoring'
  },
  {
    id: 'ruby-data-7',
    userId: 'ruby',
    date: getDateDaysAgo(6),
    bloodGlucose: 99,
    bloodPressureSystolic: 143,
    bloodPressureDiastolic: 89,
    sleepHours: 7,
    activityMinutes: 50,
    stressLevel: 4,
    moodRating: 4,
    notes: 'Gym session - staying active'
  }
];

// Persona Profiles
export const PERSONAS: Persona[] = [
  {
    id: 'leo',
    name: 'Leo',
    age: 17,
    healthGoal: 'student-health',
    language: 'en',
    createdAt: new Date('2025-10-01'),
    description: 'High school student managing exam stress and sleep',
    condition: 'Stress management, Sleep issues',
    healthData: leoHealthData
  },
  {
    id: 'andre',
    name: 'André',
    age: 72,
    healthGoal: 'diabetes-management',
    language: 'fr',
    createdAt: new Date('2025-09-15'),
    description: 'Manager with Type 2 Diabetes monitoring glucose and BP',
    condition: 'Type 2 Diabetes, Pre-hypertension',
    healthData: andreHealthData
  },
  {
    id: 'ruby',
    name: 'Ruby',
    age: 34,
    healthGoal: 'general-wellness',
    language: 'en',
    createdAt: new Date('2025-09-01'),
    description: 'Young professional recently diagnosed with hypertension, managing work stress and lifestyle factors',
    condition: 'Hypertension',
    healthData: rubyHealthData
  }
];

// Helper function to get persona by ID
export const getPersonaById = (id: string): Persona | undefined => {
  return PERSONAS.find(p => p.id === id);
};

// Helper function to get all personas
export const getAllPersonas = (): Persona[] => {
  return PERSONAS;
};
