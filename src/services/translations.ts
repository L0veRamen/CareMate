import type { Language } from "./types";

export interface Translations {
  // Common
  appName: string;
  tagline: string;
  loading: string;
  error: string;
  save: string;
  cancel: string;
  close: string;
  back: string;
  next: string;

  // Landing/Setup
  quickSetup: string;
  setupTime: string;
  yourName: string;
  age: string;
  years: string;
  primaryHealthGoal: string;
  selectOne: string;
  language: string;
  getStarted: string;
  privacyNotice: string;
  welcomeBack: string;

  // Health Goals
  goals: {
    "general-wellness": string;
    "diabetes-management": string;
    "stress-management": string;
    "student-health": string;
  };

  // Dashboard
  hello: string;
  weekSummary: string;
  alerts: string;
  todayMetrics: string;
  aiInsight: string;
  topRecommendations: string;
  actions: string;

  // Metrics
  metrics: {
    bloodGlucose: string;
    bloodPressure: string;
    sleep: string;
    activity: string;
    stress: string;
    mood: string;
    notes: string;
    screenTime: string;
    mindfulness: string;
    steps: string;
  };

  // Units
  units: {
    mgdl: string;
    mmhg: string;
    hours: string;
    minutes: string;
    days: string;
    steps: string;
    sessions: string;
    hrsDay: string;
    minDay: string;
  };

  // Stats
  average: string;
  daysLogged: string;
  notLogged: string;

  // Actions
  logData: string;
  viewTrends: string;
  exportPDF: string;
  getTodayInsight: string;
  getPersonalizedInsight: string;

  // Trends
  last7Days: string;
  trends: string;
  improving: string;
  worsening: string;
  stable: string;

  // Alerts
  alertTitles: {
    highGlucose: string;
    lowGlucose: string;
    highBP: string;
    poorSleep: string;
    lowActivity: string;
    highStress: string;
  };

  // Recommendations
  recommendationCategories: {
    nutrition: string;
    activity: string;
    sleep: string;
    stress: string;
    general: string;
  };

  // Data Input Form
  logYourHealth: string;
  dateAndTime: string;
  required: string;
  optional: string;
  addNotes: string;
  submitData: string;
  dataLogged: string;
  target: string;
  recommended: string;

  // Health Logging Screen
  logForm: {
    title: string;
    glucoseHeading: string;
    glucoseLabel: string;
    glucoseTarget: string;
    bloodPressureHeading: string;
    systolic: string;
    diastolic: string;
    bloodPressureTarget: string;
    sleepHeading: string;
    sleepHours: string;
    sleepRecommended: string;
    stepsHeading: string;
    stepsLabel: string;
    stepsGoal: string;
    exampleGlucose: string;
    exampleSteps: string;
  };

  // AI Insight
  aiInsightTitle: string;
  aiInsightDescription: string;
  generatingInsight: string;
  insightReady: string;
  observation: string;
  context: string;
  todayAction: string;
  tryAgainTomorrow: string;
  insightError: string;

  // PDF Export
  exportSummary: string;
  healthSummary: string;
  generatedOn: string;
  patientInfo: string;
  weeklyOverview: string;
  detailedReadings: string;
  clinicalNotes: string;
  download: string;

  // Settings
  settings: string;
  editProfile: string;
  clearAllData: string;
  about: string;
  confirmClear: string;
  dataClearedSuccess: string;

  // Empty States
  noDataYet: string;
  startLogging: string;
  noAlertsGood: string;

  // Validation
  validation: {
    nameRequired: string;
    ageRequired: string;
    goalRequired: string;
    nameMinLength: string;
    ageRange: string;
    valueRequired: string;
  };

  // Persona Selection
  selectPersona: string;
  personaDescription: string;
  useThisPersona: string;
  resetDemo: string;
  backToLanguage: string;

  personaSelection: {
    andre: {
      role: string;
      desc: string;
      tag: string;
    };
    ruby: {
      role: string;
      desc: string;
      tag: string;
    };
    leo: {
      role: string;
      desc: string;
      tag: string;
    };
    tracking: string;
  };

  // Personas
  personas: {
    andre: {
      greeting: string;
      alert: string;
      recommendations: {
        nutrition: { action: string; rationale: string };
        exercise: { action: string; rationale: string };
        sleep: { action: string; rationale: string };
        monitoring: { category: string; action: string; rationale: string };
      };
      trends: {
        title: string;
        subtitle: string;
        glucose: {
          title: string;
          avg: string;
          range: string;
          inTarget: string;
          trend: string;
        };
        bloodPressure: {
          title: string;
          avg: string;
          systolic: string;
          diastolic: string;
          trend: string;
        };
        sleep: {
          title: string;
          avg: string;
          range: string;
          quality: string;
          trend: string;
        };
        activity: {
          title: string;
          avg: string;
          best: string;
          goalDays: string;
          trend: string;
        };
      };
      summary: {
        title: string;
        subtitle: string;
        patientInfo: string;
        name: string;
        age: string;
        condition: string;
        period: string;
        years: string;
        type2Diabetes: string;
        last30Days: string;
        glucoseTrends: string;
        average: string;
        range: string;
        inTarget: string;
        trend: string;
        upVsLastMonth: string;
        bpTrends: string;
        systolicRange: string;
        diastolicRange: string;
        improved: string;
        lifestyle: string;
        avgSleep: string;
        avgSteps: string;
        medicationAdherence: string;
        clinicalNotes: string;
        notes: string;
      };
    };
    ruby: {
      greeting: string;
      alert: string;
      quickRelief: string;
      startBreathing: string;
      logWellness: string;
      breathingTitle: string;
      recommendations: {
        stress: { action: string; rationale: string };
        sleep: { action: string; rationale: string };
        movement: { category: string; action: string; rationale: string };
        digital: { category: string; action: string; rationale: string };
      };
      trends: {
        title: string;
        subtitle: string;
        stress: {
          title: string;
          avg: string;
          highDays: string;
          lowDays: string;
          trend: string;
          valAvg: string;
        };
        sleep: {
          title: string;
          avg: string;
          range: string;
          goodDays: string;
          trend: string;
          valAvg: string;
        };
        activity: {
          title: string;
          activeDays: string;
          avgSessions: string;
          bestWeek: string;
          trend: string;
        };
        mindfulness: {
          title: string;
          avgDaily: string;
          practiceDays: string;
          streak: string;
          trend: string;
        };
        insight: { title: string; text: string };
      };
      summary: {
        title: string;
        subtitle: string;
        patientInfo: string;
        name: string;
        age: string;
        concern: string;
        period: string;
        stress: {
          title: string;
          avg: string;
          highDays: string;
          triggers: string;
        };
        sleep: { title: string; avg: string; quality: string; rec: string };
        lifestyle: {
          title: string;
          exercise: string;
          mindfulness: string;
          tracking: string;
        };
        clinical: { title: string; notes: string };
        recs: { title: string; list: string[] };
        note: string;
      };
      log: {
        title: string;
        stress: {
          title: string;
          question: string;
          labels: string[];
        };
        sleep: {
          title: string;
          label: string;
          recommended: string;
        };
        activity: {
          title: string;
          question: string;
          guidance: string;
        };
        mindfulness: {
          title: string;
          label: string;
          goal: string;
        };
      };
    };
    leo: {
      greeting: string;
      alert: string;
      studyTools: string;
      startPomodoro: string;
      logDay: string;
      pomodoroTitle: string;
      tipsTitle: string;
      recommendations: {
        sleep: { category: string; action: string; rationale: string };
        screenTime: { category: string; action: string; rationale: string };
        movement: { category: string; action: string; rationale: string };
        study: { category: string; action: string; rationale: string };
      };
      trends: {
        title: string;
        subtitle: string;
        sleep: {
          title: string;
          avg: string;
          range: string;
          goodDays: string;
          trend: string;
        };
        screenTime: {
          title: string;
          avg: string;
          peak: string;
          beforeBed: string;
          trend: string;
        };
        activity: {
          title: string;
          activeDays: string;
          type: string;
          streak: string;
          trend: string;
        };
        mood: {
          title: string;
          common: string;
          greatDays: string;
          roughDays: string;
          trend: string;
        };
        insight: { title: string; text: string };
      };
      summary: {
        title: string;
        subtitle: string;
        about: {
          title: string;
          name: string;
          age: string;
          focus: string;
          period: string;
        };
        sleep: { title: string; avg: string; rec: string; deficit: string };
        digital: {
          title: string;
          daily: string;
          beforeBed: string;
          impact: string;
        };
        activity: {
          title: string;
          activeDays: string;
          main: string;
          consistency: string;
        };
        mental: {
          title: string;
          overall: string;
          great: string;
          rough: string;
        };
        notes: { title: string; text: string };
        recs: { title: string; list: string[] };
        footer: string;
      };
      log: {
        title: string;
        mood: {
          title: string;
          question: string;
          options: Array<{ emoji: string; label: string; value: string }>;
        };
        sleep: {
          title: string;
          label: string;
          note: string;
        };
        screenTime: {
          title: string;
          label: string;
          note: string;
        };
        activity: {
          title: string;
          question: string;
          detail: string;
        };
      };
    };
  };

  // Feature-specific translations
  features: {
    breathingExercise: {
      title: string;
      technique: string;
      cyclesLabel: string;
      phases: Record<
        'inhale' | 'hold' | 'exhale' | 'rest',
        {
          label: string;
          instruction: string;
        }
      >;
      controls: {
        start: string;
        resume: string;
        pause: string;
      };
      benefitsTitle: string;
      benefits: string[];
    };
    pomodoroTimer: {
      sessions: {
        focus: { label: string; emoji: string };
        shortBreak: { label: string; emoji: string };
        longBreak: { label: string; emoji: string };
      };
      statsLabel: string;
      stateReady: string;
      stateInProgress: string;
      start: string;
      pause: string;
      skipTo: string;
      quickSessions: {
        focus: string;
        short: string;
        long: string;
      };
      tipsTitle: string;
      tips: string[];
      notifications: {
        title: string;
        focusComplete: string;
        breakComplete: string;
      };
    };
  };

  nav: {
    home: string;
    trends: string;
    summary: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    appName: "CareMate",
    tagline: "Your Health Companion",
    loading: "Loading...",
    error: "Error",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    back: "Back",
    next: "Next",

    // Landing/Setup
    quickSetup: "Quick Setup",
    setupTime: "30 seconds",
    yourName: "Your Name",
    age: "Age",
    years: "years",
    primaryHealthGoal: "Primary Health Goal",
    selectOne: "Select One",
    language: "Language",
    getStarted: "Get Started",
    privacyNotice: "Privacy: Data stored locally on your device only.",
    welcomeBack: "Welcome back",

    // Health Goals
    goals: {
      "general-wellness": "General Wellness",
      "diabetes-management": "Diabetes Management",
      "stress-management": "Stress Management",
      "student-health": "Student Health",
    },

    // Dashboard
    hello: "Hello",
    weekSummary: "Week Summary",
    alerts: "Alerts",
    todayMetrics: "Today's Metrics",
    aiInsight: "AI Insight",
    topRecommendations: "Top Recommendations",
    actions: "Actions",

    // Metrics
    metrics: {
      bloodGlucose: "Blood Glucose",
      bloodPressure: "Blood Pressure",
      sleep: "Sleep",
      activity: "Activity",
      stress: "Stress Level",
      mood: "Mood",
      notes: "Notes",
      screenTime: "Screen Time",
      mindfulness: "Mindfulness",
      steps: "Steps",
    },

    // Units
    units: {
      mgdl: "mg/dL",
      mmhg: "mmHg",
      hours: "hours",
      minutes: "minutes",
      days: "days",
      steps: "steps",
      sessions: "sessions",
      hrsDay: "hrs/day",
      minDay: "min/day",
    },

    // Stats
    average: "Average",
    daysLogged: "Days Logged",
    notLogged: "Not logged",

    // Actions
    logData: "Log Data",
    viewTrends: "View Trends",
    exportPDF: "Export PDF Summary",
    getTodayInsight: "Get Today's Insight",
    getPersonalizedInsight: "Get your personalized insight",

    // Trends
    last7Days: "Last 7 Days",
    trends: "Trends",
    improving: "Improving",
    worsening: "Worsening",
    stable: "Stable",

    // Alerts
    alertTitles: {
      highGlucose: "Elevated Blood Sugar",
      lowGlucose: "Low Blood Sugar",
      highBP: "High Blood Pressure",
      poorSleep: "Insufficient Sleep",
      lowActivity: "Low Physical Activity",
      highStress: "High Stress Levels",
    },

    // Recommendations
    recommendationCategories: {
      nutrition: "Nutrition",
      activity: "Physical Activity",
      sleep: "Sleep",
      stress: "Stress Management",
      general: "General Health",
    },

    // Data Input Form
    logYourHealth: "Log Your Health Data",
    dateAndTime: "Date & Time",
    required: "Required",
    optional: "Optional",
    addNotes: "Add notes about your day",
    submitData: "Submit Data",
    dataLogged: "Data logged successfully!",
    target: "Target",
    recommended: "Recommended",
    logForm: {
      title: "Log Health Data",
      glucoseHeading: "🩸 Blood Glucose",
      glucoseLabel: "Blood sugar level (mmol/L)",
      glucoseTarget: "Target: 4.0 - 7.0 mmol/L",
      bloodPressureHeading: "❤️ Blood Pressure",
      systolic: "Systolic",
      diastolic: "Diastolic",
      bloodPressureTarget: "Target: <130/80 mmHg",
      sleepHeading: "😴 Sleep Hours",
      sleepHours: "Hours",
      sleepRecommended: "Recommended: 7-9 hours",
      stepsHeading: "🚶 Steps",
      stepsLabel: "Steps today",
      stepsGoal: "Goal: 5,000 steps/day",
      exampleGlucose: "e.g., 6.5",
      exampleSteps: "e.g., 5000",
    },

    // AI Insight
    aiInsightTitle: "Your Daily Insight",
    aiInsightDescription:
      "AI-powered personalized health insight based on your data",
    generatingInsight: "Generating your insight...",
    insightReady: "Your insight is ready!",
    observation: "Observation",
    context: "Context",
    todayAction: "Today's Action",
    tryAgainTomorrow: "You can get a new insight tomorrow",
    insightError: "Could not generate insight. Please try again later.",

    // PDF Export
    exportSummary: "Export Health Summary",
    healthSummary: "Health Summary Report",
    generatedOn: "Generated on",
    patientInfo: "Patient Information",
    weeklyOverview: "Weekly Overview",
    detailedReadings: "Detailed Readings",
    clinicalNotes: "Clinical Notes",
    download: "Download PDF",

    // Settings
    settings: "Settings",
    editProfile: "Edit Profile",
    clearAllData: "Clear All Data",
    about: "About CareMate",
    confirmClear:
      "Are you sure you want to clear all data? This cannot be undone.",
    dataClearedSuccess: "All data has been cleared.",

    // Empty States
    noDataYet: "No data yet",
    startLogging: "Start logging to see your health metrics",
    noAlertsGood: "You're doing great! No alerts at this time.",

    // Validation
    validation: {
      nameRequired: "Name is required",
      ageRequired: "Age is required",
      goalRequired: "Please select a health goal",
      nameMinLength: "Name must be at least 2 characters",
      ageRange: "Age must be between 1 and 120",
      valueRequired: "Please enter a value",
    },

    // Persona Selection
    selectPersona: "Select a User Profile",
    personaDescription: "Choose a pre-configured profile to explore the app",
    useThisPersona: "Use This Profile",
    resetDemo: "Reset Demo",
    backToLanguage: "← Back to Language Selection",

    personaSelection: {
      andre: {
        role: "Manager with Type 2 Diabetes",
        desc: "Manager with Type 2 Diabetes",
        tag: "Diabetes",
      },
      ruby: {
        role: "Young Professional",
        desc: "Young Professional - Recently diagnosed with hypertension, managing work stress",
        tag: "Hypertension",
      },
      leo: {
        role: "Student",
        desc: "Student Managing Exam Stress",
        tag: "Student Health",
      },
      tracking: "tracking",
    },

    // Personas
    personas: {
      andre: {
        greeting: "Hello, André! 👋",
        alert:
          "Your blood sugar this morning was high (178 mg/dL). See recommendations below.",
        recommendations: {
          nutrition: {
            action: "Limit refined carbs to 30-45g per meal",
            rationale:
              "Your blood sugar was high on 5 of 7 days this week, showing an 18% upward trend. Reducing carb portions helps stabilize glucose levels.",
          },
          exercise: {
            action:
              "Take a 15-20 minute walk within 30 minutes after your main meal",
            rationale:
              "Post-meal activity significantly reduces blood sugar spikes. You only exercised 2 days this week.",
          },
          sleep: {
            action:
              "Try to go to bed at 10 PM each night to get 7-8 hours of sleep",
            rationale:
              "You're averaging 5.6 hours per night. Poor sleep increases insulin resistance and makes blood sugar harder to control.",
          },
          monitoring: {
            category: "Monitoring",
            action:
              "Check your blood sugar before breakfast and 2 hours after your main meal daily this week",
            rationale:
              "Frequent monitoring helps you identify which foods and activities affect your blood sugar.",
          },
        },
        trends: {
          title: "Health Trends",
          subtitle: "Last 30 days",
          glucose: {
            title: "🩸 Blood Sugar",
            avg: "Average",
            range: "Range",
            inTarget: "In target (4-7)",
            trend: "Up 8% vs last month",
          },
          bloodPressure: {
            title: "❤️ Blood Pressure",
            avg: "Average",
            systolic: "Systolic range",
            diastolic: "Diastolic range",
            trend: "Improved vs last month",
          },
          sleep: {
            title: "😴 Sleep",
            avg: "Average",
            range: "Range",
            quality: "Quality",
            trend: "Stable",
          },
          activity: {
            title: "🚶 Daily Steps",
            avg: "Average",
            best: "Best day",
            goalDays: "Days over 5,000",
            trend: "Up 12% vs last month",
          },
        },
        summary: {
          title: "Clinical Summary",
          subtitle: "For your doctor",
          patientInfo: "Patient Information",
          name: "Name:",
          age: "Age:",
          condition: "Condition:",
          period: "Period:",
          years: "years",
          type2Diabetes: "Type 2 Diabetes",
          last30Days: "Last 30 days",
          glucoseTrends: "🩸 Blood Sugar - Trends",
          average: "Average",
          range: "Range",
          inTarget: "% in target (4-7)",
          trend: "Trend",
          upVsLastMonth: "Up 8% vs last month",
          bpTrends: "❤️ Blood Pressure - Trends",
          systolicRange: "Systolic range",
          diastolicRange: "Diastolic range",
          improved: "Improved vs last month",
          lifestyle: "Lifestyle",
          avgSleep: "😴 Average sleep",
          avgSteps: "🚶 Average steps/day",
          medicationAdherence: "💊 Medication adherence",
          clinicalNotes: "Clinical Notes",
          notes:
            "Patient shows good medication adherence. Blood pressure has improved. Blood sugar requires attention - consider adjusting metformin dose.",
        },
      },
      ruby: {
        greeting: "Hey Ruby! 👋",
        alert:
          "Your stress levels have been elevated for 3 consecutive days. Try the breathing exercise below.",
        quickRelief: "Quick Relief",
        startBreathing: "Start Breathing Exercise",
        logWellness: "Log Wellness Data",
        breathingTitle: "Guided Breathing",
        recommendations: {
          stress: {
            action:
              "Practice the 4-7-8 breathing technique when you feel overwhelmed",
            rationale:
              "Your stress levels have been high for 3 days. This breathing exercise activates your parasympathetic nervous system, reducing cortisol and promoting calm.",
          },
          sleep: {
            action:
              "Aim for 7-8 hours of sleep tonight by going to bed at 10:30 PM",
            rationale:
              "You've averaged only 6.2 hours this week. Poor sleep increases stress hormones and reduces cognitive performance at work.",
          },
          movement: {
            category: "Movement Break",
            action: "Take a 10-minute walk during your lunch break",
            rationale:
              "Even brief outdoor activity reduces stress and improves afternoon focus. You have no family doctor, so prevention is key.",
          },
          digital: {
            category: "Digital Wellness",
            action: "Set 'Do Not Disturb' from 9 PM onwards",
            rationale:
              "Blue light and notifications before bed disrupt sleep quality. Your sleep scores dropped when you used your phone late.",
          },
        },
        trends: {
          title: "Your Health Trends",
          subtitle: "Last 30 days",
          stress: {
            title: "😌 Stress Level",
            avg: "Average",
            highDays: "High stress days",
            lowDays: "Low stress days",
            trend: "Stable vs last month",
            valAvg: "Medium",
          },
          sleep: {
            title: "😴 Sleep Quality",
            avg: "Average",
            range: "Range",
            goodDays: "Days with 7+ hours",
            trend: "Down 5% vs last month",
            valAvg: "6.5 hours",
          },
          activity: {
            title: "💪 Physical Activity",
            activeDays: "Active days",
            avgSessions: "Average sessions/week",
            bestWeek: "Best week",
            trend: "Up 15% vs last month",
          },
          mindfulness: {
            title: "🧘 Mindfulness Practice",
            avgDaily: "Average daily",
            practiceDays: "Practice days",
            streak: "Longest streak",
            trend: "Up 25% vs last month",
          },
          insight: {
            title: "💡 Insights",
            text: "Your mindfulness practice is really paying off! Days with meditation correlate with lower reported stress levels. Keep it up!",
          },
        },
        summary: {
          title: "Health Summary",
          subtitle: "For your healthcare provider",
          patientInfo: "Patient Information",
          name: "Name:",
          age: "Age:",
          concern: "Primary Concern:",
          period: "Period:",
          stress: {
            title: "😌 Stress Management",
            avg: "Average Level",
            highDays: "High stress days",
            triggers: "Triggers",
          },
          sleep: {
            title: "😴 Sleep Patterns",
            avg: "Average Duration",
            quality: "Quality",
            rec: "Recommendation",
          },
          lifestyle: {
            title: "Lifestyle Activities",
            exercise: "💪 Exercise frequency",
            mindfulness: "🧘 Mindfulness practice",
            tracking: "📊 Data tracking",
          },
          clinical: {
            title: "Clinical Notes",
            notes:
              "Patient reports high work-related stress and insufficient sleep (averaging 6.5 hours). Positive engagement with mindfulness practices and regular exercise. Would benefit from sleep hygiene counseling and stress management strategies.",
          },
          recs: {
            title: "Recommendations",
            list: [
              "Sleep study to rule out sleep disorders",
              "Cognitive behavioral therapy for stress management",
              "Continue current exercise and mindfulness routine",
              "Follow-up in 3 months to reassess",
            ],
          },
          note: "This summary is designed to share with walk-in clinics or specialists when you don't have a regular family doctor.",
        },
        log: {
          title: "Log Your Day",
          stress: {
            title: "😌 Stress Level",
            question: "How stressed are you?",
            labels: ["Very Low", "Low", "Medium", "High", "Very High"],
          },
          sleep: {
            title: "😴 Sleep Duration",
            label: "Hours slept",
            recommended: "Recommended: 7-9 hours",
          },
          activity: {
            title: "💪 Physical Activity",
            question: "Did you exercise today?",
            guidance: "At least 20 minutes of moderate activity",
          },
          mindfulness: {
            title: "🧘 Mindfulness Practice",
            label: "Minutes practiced",
            goal: "Goal: 10 minutes daily",
          },
        },
      },
      leo: {
        greeting: "What's up, Leo! 🔥",
        alert:
          "Yo, you need more sleep 😴 You've been getting only 5.5 hours this week. Aim for 8-9 hours tonight!",
        studyTools: "Study Tools",
        startPomodoro: "Start Pomodoro Timer",
        logDay: "Log Your Day",
        pomodoroTitle: "Focus Timer",
        tipsTitle: "Tips for You",
        recommendations: {
          sleep: {
            category: "Sleep Better",
            action:
              "Put your phone away by 10 PM and aim for 9 hours of sleep tonight",
            rationale:
              "You're 16 and your brain is still developing! Teens need 8-10 hours. You've only been getting 5.5 hours, which hurts your grades, mood, and health.",
          },
          screenTime: {
            category: "Screen Time",
            action:
              "Try the 20-20-20 rule: Every 20 mins, look at something 20 feet away for 20 seconds",
            rationale:
              "Your screen time is 6.2 hours/day. This causes eye strain, disrupts sleep, and affects focus. Take breaks to protect your eyes and brain.",
          },
          movement: {
            category: "Get Moving",
            action:
              "Do 15 minutes of any activity you enjoy during study breaks",
            rationale:
              "Physical activity boosts brain power, improves focus, and releases feel-good chemicals. Even a quick walk or dance session helps!",
          },
          study: {
            category: "Study Smart",
            action: "Use the Pomodoro technique: 25 min focus + 5 min break",
            rationale:
              "Your brain works best in focused bursts. The Pomodoro timer helps you stay on task and prevents burnout. Try it for homework!",
          },
        },
        trends: {
          title: "Your Trends 📊",
          subtitle: "Last 30 days",
          sleep: {
            title: "😴 Sleep Patterns",
            avg: "Average",
            range: "Range",
            goodDays: "Days with 8+ hours",
            trend: "Down 10% vs last month - not good!",
          },
          screenTime: {
            title: "📱 Screen Time",
            avg: "Daily average",
            peak: "Peak day",
            beforeBed: "Before bed (avg)",
            trend: "Up 8% - try to reduce this",
          },
          activity: {
            title: "💪 Physical Activity",
            activeDays: "Active days",
            type: "Type",
            streak: "Best streak",
            trend: "About the same as last month",
          },
          mood: {
            title: "😊 Mood Tracking",
            common: "Most common",
            greatDays: "Great days",
            roughDays: "Rough days",
            trend: "Overall improving! 💯",
          },
          insight: {
            title: "💡 What we noticed",
            text: "Your mood is better on days when you get at least 7 hours of sleep and stay active. The main thing holding you back? Too much screen time before bed. Try putting your phone away 1 hour before sleep!",
          },
        },
        summary: {
          title: "Health Summary",
          subtitle: "Share with your doctor or school nurse",
          about: {
            title: "About You",
            name: "Name:",
            age: "Age:",
            focus: "Focus:",
            period: "Tracking Period:",
          },
          sleep: {
            title: "😴 Sleep Patterns",
            avg: "Average Duration",
            rec: "Recommended",
            deficit: "Sleep Deficit",
          },
          digital: {
            title: "📱 Digital Wellness",
            daily: "Daily screen time",
            beforeBed: "Before bed",
            impact: "Impact",
          },
          activity: {
            title: "💪 Physical Activity",
            activeDays: "Active days",
            main: "Main activities",
            consistency: "Consistency",
          },
          mental: {
            title: "😊 Mental Wellness",
            overall: "Overall mood",
            great: "Great days",
            rough: "Rough days",
          },
          notes: {
            title: "Summary",
            text: "Leo is tracking sleep, screen time, physical activity, and mood. Primary concern is insufficient sleep (averaging 5.5 hours vs. recommended 8-10 hours for teens). High screen time before bed likely contributing to poor sleep. Overall mood is positive. Moderate physical activity engagement.",
          },
          recs: {
            title: "Recommendations",
            list: [
              "Improve sleep hygiene - target 8-9 hours nightly",
              "Reduce screen time 1-2 hours before bed",
              "Maintain regular physical activity schedule",
              "Consider sleep counseling if patterns don't improve",
            ],
          },
          footer:
            "This summary can be shared with your doctor, school nurse, or counselor. Your privacy is protected - only share what you're comfortable with.",
        },
        log: {
          title: "How Was Your Day?",
          mood: {
            title: "😊 How are you feeling?",
            question: "Tap the emoji that matches your mood",
            options: [
              { emoji: "😢", label: "Rough", value: "rough" },
              { emoji: "😕", label: "Meh", value: "meh" },
              { emoji: "😊", label: "Good", value: "good" },
              { emoji: "😄", label: "Great", value: "great" },
              { emoji: "🔥", label: "Amazing", value: "amazing" },
            ],
          },
          sleep: {
            title: "😴 Sleep Last Night",
            label: "Hours",
            note: "You need 8-10 hours for optimal health",
          },
          screenTime: {
            title: "📱 Screen Time Today",
            label: "Hours",
            note: "Outside of school/homework",
          },
          activity: {
            title: "💪 Did you move today?",
            question: "At least 20 minutes of activity",
            detail: "Sports, walking, biking, dancing - anything counts!",
          },
        },
      },
    },

    features: {
      breathingExercise: {
        title: "Breathing Exercise",
        technique: "4-7-8 Technique",
        cyclesLabel: "cycles",
        phases: {
          inhale: {
            label: "Breathe In",
            instruction: "Inhale deeply through your nose",
          },
          hold: {
            label: "Hold",
            instruction: "Hold your breath gently",
          },
          exhale: {
            label: "Breathe Out",
            instruction: "Exhale slowly through your mouth",
          },
          rest: {
            label: "Rest",
            instruction: "Relax for a moment",
          },
        },
        controls: {
          start: "Start",
          resume: "Resume",
          pause: "Pause",
        },
        benefitsTitle: "Benefits:",
        benefits: [
          "• Reduces anxiety and stress",
          "• Lowers heart rate and blood pressure",
          "• Improves focus and mental clarity",
          "• Helps with sleep when done before bed",
        ],
      },
      pomodoroTimer: {
        sessions: {
          focus: { label: "Focus Time", emoji: "📚" },
          shortBreak: { label: "Short Break", emoji: "☕" },
          longBreak: { label: "Long Break", emoji: "🎉" },
        },
        statsLabel: "{count} focus sessions completed today",
        stateReady: "Ready",
        stateInProgress: "In Progress",
        start: "Start",
        pause: "Pause",
        skipTo: "Skip to {label}",
        quickSessions: {
          focus: "Focus",
          short: "Short",
          long: "Long",
        },
        tipsTitle: "Study Tips:",
        tips: [
          "• Eliminate distractions during focus time",
          "• Take breaks seriously - move around!",
          "• After 4 pomodoros, take a longer break",
          "• Track what you accomplished each session",
        ],
        notifications: {
          title: "Pomodoro Timer",
          focusComplete: "Time for a break!",
          breakComplete: "Ready to focus?",
        },
      },
    },
    nav: {
      home: "Home",
      trends: "Trends",
      summary: "Summary",
    },
  },

  fr: {
    // Common
    appName: "CareMate",
    tagline: "Votre Compagnon Santé",
    loading: "Chargement...",
    error: "Erreur",
    save: "Enregistrer",
    cancel: "Annuler",
    close: "Fermer",
    back: "Retour",
    next: "Suivant",

    // Landing/Setup
    quickSetup: "Configuration Rapide",
    setupTime: "30 secondes",
    yourName: "Votre Nom",
    age: "Âge",
    years: "ans",
    primaryHealthGoal: "Objectif Santé Principal",
    selectOne: "Sélectionnez",
    language: "Langue",
    getStarted: "Commencer",
    privacyNotice:
      "Confidentialité : Données stockées localement sur votre appareil uniquement.",
    welcomeBack: "Bon retour",

    // Health Goals
    goals: {
      "general-wellness": "Bien-être Général",
      "diabetes-management": "Gestion du Diabète",
      "stress-management": "Gestion du Stress",
      "student-health": "Santé Étudiante",
    },

    // Dashboard
    hello: "Bonjour",
    weekSummary: "Résumé Hebdomadaire",
    alerts: "Alertes",
    todayMetrics: "Métriques d'Aujourd'hui",
    aiInsight: "Aperçu IA",
    topRecommendations: "Principales Recommandations",
    actions: "Actions",

    // Metrics
    metrics: {
      bloodGlucose: "Glycémie",
      bloodPressure: "Tension Artérielle",
      sleep: "Sommeil",
      activity: "Activité",
      stress: "Niveau de Stress",
      mood: "Humeur",
      notes: "Notes",
      screenTime: "Temps d'écran",
      mindfulness: "Pleine Conscience",
      steps: "Pas",
    },

    // Units
    units: {
      mgdl: "mg/dL",
      mmhg: "mmHg",
      hours: "heures",
      minutes: "minutes",
      days: "jours",
      steps: "pas",
      sessions: "séances",
      hrsDay: "h/jour",
      minDay: "min/jour",
    },

    // Stats
    average: "Moyenne",
    daysLogged: "Jours Enregistrés",
    notLogged: "Non enregistré",

    // Actions
    logData: "Enregistrer Données",
    viewTrends: "Voir Tendances",
    exportPDF: "Exporter Résumé PDF",
    getTodayInsight: "Obtenir l'Aperçu d'Aujourd'hui",
    getPersonalizedInsight: "Obtenez votre aperçu personnalisé",

    // Trends
    last7Days: "7 Derniers Jours",
    trends: "Tendances",
    improving: "En Amélioration",
    worsening: "En Détérioration",
    stable: "Stable",

    // Alerts
    alertTitles: {
      highGlucose: "Glycémie Élevée",
      lowGlucose: "Glycémie Basse",
      highBP: "Tension Artérielle Élevée",
      poorSleep: "Sommeil Insuffisant",
      lowActivity: "Activité Physique Faible",
      highStress: "Niveaux de Stress Élevés",
    },

    // Recommendations
    recommendationCategories: {
      nutrition: "Nutrition",
      activity: "Activité Physique",
      sleep: "Sommeil",
      stress: "Gestion du Stress",
      general: "Santé Générale",
    },

    // Data Input Form
    logYourHealth: "Enregistrer Vos Données",
    dateAndTime: "Date et Heure",
    required: "Requis",
    optional: "Optionnel",
    addNotes: "Ajoutez des notes sur votre journée",
    submitData: "Soumettre les Données",
    dataLogged: "Données enregistrées avec succès!",
    target: "Cible",
    recommended: "Recommandé",
    logForm: {
      title: "Enregistrer les Données de Santé",
      glucoseHeading: "🩸 Glycémie",
      glucoseLabel: "Taux de glycémie (mmol/L)",
      glucoseTarget: "Cible : 4.0 - 7.0 mmol/L",
      bloodPressureHeading: "❤️ Tension Artérielle",
      systolic: "Systolique",
      diastolic: "Diastolique",
      bloodPressureTarget: "Cible : <130/80 mmHg",
      sleepHeading: "😴 Heures de Sommeil",
      sleepHours: "Heures",
      sleepRecommended: "Recommandé : 7-9 heures",
      stepsHeading: "🚶 Pas",
      stepsLabel: "Pas aujourd'hui",
      stepsGoal: "Objectif : 5 000 pas/jour",
      exampleGlucose: "Ex : 6,5",
      exampleSteps: "Ex : 5000",
    },

    // AI Insight
    aiInsightTitle: "Votre Aperçu Quotidien",
    aiInsightDescription: "Aperçu santé personnalisé basé sur vos données",
    generatingInsight: "Génération de votre aperçu...",
    insightReady: "Votre aperçu est prêt!",
    observation: "Observation",
    context: "Contexte",
    todayAction: "Action d'Aujourd'hui",
    tryAgainTomorrow: "Vous pourrez obtenir un nouvel aperçu demain",
    insightError: "Impossible de générer un aperçu. Réessayez plus tard.",

    // PDF Export
    exportSummary: "Exporter Résumé Santé",
    healthSummary: "Rapport de Résumé Santé",
    generatedOn: "Généré le",
    patientInfo: "Informations Patient",
    weeklyOverview: "Aperçu Hebdomadaire",
    detailedReadings: "Lectures Détaillées",
    clinicalNotes: "Notes Cliniques",
    download: "Télécharger PDF",

    // Settings
    settings: "Paramètres",
    editProfile: "Modifier le Profil",
    clearAllData: "Effacer Toutes les Données",
    about: "À Propos de CareMate",
    confirmClear:
      "Êtes-vous sûr de vouloir effacer toutes les données? Cette action est irréversible.",
    dataClearedSuccess: "Toutes les données ont été effacées.",

    // Empty States
    noDataYet: "Aucune donnée pour le moment",
    startLogging: "Commencez à enregistrer pour voir vos métriques de santé",
    noAlertsGood: "Vous allez bien! Aucune alerte pour le moment.",

    // Validation
    validation: {
      nameRequired: "Le nom est requis",
      ageRequired: "L'âge est requis",
      goalRequired: "Veuillez sélectionner un objectif santé",
      nameMinLength: "Le nom doit contenir au moins 2 caractères",
      ageRange: "L'âge doit être entre 1 et 120",
      valueRequired: "Veuillez entrer une valeur",
    },

    // Persona Selection
    selectPersona: "Sélectionner un Profil Utilisateur",
    personaDescription:
      "Choisissez un profil préconfiguré pour explorer l'application",
    useThisPersona: "Utiliser Ce Profil",
    resetDemo: "Réinitialiser",
    backToLanguage: "← Retour au choix de la langue",

    personaSelection: {
      andre: {
        role: "Gestionnaire avec Diabète Type 2",
        desc: "Gestionnaire avec Diabète Type 2",
        tag: "Diabète",
      },
      ruby: {
        role: "Jeune Professionnelle",
        desc: "Jeune pro - Récemment diagnostiquée avec hypertension, gère le stress au travail",
        tag: "Hypertension",
      },
      leo: {
        role: "Étudiant",
        desc: "Étudiant gérant le stress des examens",
        tag: "Santé Étudiante",
      },
      tracking: "suivi",
    },

    // Personas
    personas: {
      andre: {
        greeting: "Bonjour, André! 👋",
        alert:
          "Votre glycémie ce matin était élevée (178 mg/dL). Consultez les recommandations ci-dessous.",
        recommendations: {
          nutrition: {
            action: "Limitez les glucides raffinés à 30-45g par repas",
            rationale:
              "Votre glycémie a été élevée à 5 reprises cette semaine et montre une tendance à la hausse de 18%. Réduire les portions de glucides aide à stabiliser la glycémie.",
          },
          exercise: {
            action:
              "Faites une marche de 15-20 minutes dans les 30 minutes suivant votre repas principal",
            rationale:
              "L'activité après les repas réduit considérablement les pics de glycémie. Vous n'avez fait d'exercice que 2 jours cette semaine.",
          },
          sleep: {
            action:
              "Essayez de vous coucher à 22h chaque soir pour obtenir 7-8 heures de sommeil",
            rationale:
              "Vous dormez en moyenne 5,6 heures par nuit. Le manque de sommeil augmente la résistance à l'insuline et complique le contrôle de la glycémie.",
          },
          monitoring: {
            category: "Surveillance",
            action:
              "Vérifiez votre glycémie avant le petit-déjeuner et 2 heures après votre repas principal quotidiennement cette semaine",
            rationale:
              "La surveillance fréquente vous aide à identifier les aliments et activités qui affectent votre glycémie.",
          },
        },
        trends: {
          title: "Tendances santé",
          subtitle: "30 derniers jours",
          glucose: {
            title: "🩸 Glycémie",
            avg: "Moyenne",
            range: "Plage",
            inTarget: "Dans la cible (4-7)",
            trend: "Augmentation de 8% vs mois dernier",
          },
          bloodPressure: {
            title: "❤️ Tension artérielle",
            avg: "Moyenne",
            systolic: "Plage systolique",
            diastolic: "Plage diastolique",
            trend: "Amélioration vs mois dernier",
          },
          sleep: {
            title: "😴 Sommeil",
            avg: "Moyenne",
            range: "Plage",
            quality: "Qualité",
            trend: "Stable",
          },
          activity: {
            title: "🚶 Pas quotidiens",
            avg: "Moyenne",
            best: "Meilleur jour",
            goalDays: "Jours > 5,000",
            trend: "Augmentation de 12% vs mois dernier",
          },
        },
        summary: {
          title: "Résumé clinique",
          subtitle: "Pour votre médecin",
          patientInfo: "Informations du patient",
          name: "Nom:",
          age: "Âge:",
          condition: "Condition:",
          period: "Période:",
          years: "ans",
          type2Diabetes: "Diabète de type 2",
          last30Days: "30 derniers jours",
          glucoseTrends: "🩸 Glycémie - Tendances",
          average: "Moyenne",
          range: "Plage",
          inTarget: "% dans la cible (4-7)",
          trend: "Tendance",
          upVsLastMonth: "Augmentation de 8% vs mois dernier",
          bpTrends: "❤️ Tension artérielle - Tendances",
          systolicRange: "Plage systolique",
          diastolicRange: "Plage diastolique",
          improved: "Amélioration vs mois dernier",
          lifestyle: "Mode de vie",
          avgSleep: "😴 Sommeil moyen",
          avgSteps: "🚶 Pas moyens/jour",
          medicationAdherence: "💊 Observance médicaments",
          clinicalNotes: "Notes cliniques",
          notes:
            "Le patient montre une bonne observance du traitement. La tension artérielle s'est améliorée. La glycémie nécessite une attention - considérer un ajustement de la dose de metformine.",
        },
      },
      ruby: {
        greeting: "Salut Ruby! 👋",
        alert:
          "Vos niveaux de stress ont été élevés pendant 3 jours consécutifs. Essayez l'exercice de respiration ci-dessous.",
        quickRelief: "Soulagement Rapide",
        startBreathing: "Commencer l'Exercice de Respiration",
        logWellness: "Enregistrer le Bien-être",
        breathingTitle: "Respiration guidée",
        recommendations: {
          stress: {
            action:
              "Pratiquez la technique de respiration 4-7-8 lorsque vous vous sentez dépassée",
            rationale:
              "Vos niveaux de stress sont élevés depuis 3 jours. Cet exercice active votre système nerveux parasympathique, réduisant le cortisol et favorisant le calme.",
          },
          sleep: {
            action:
              "Visez 7-8 heures de sommeil ce soir en vous couchant à 22h30",
            rationale:
              "Vous n'avez dormi que 6,2 heures en moyenne cette semaine. Un mauvais sommeil augmente les hormones de stress et réduit les performances cognitives au travail.",
          },
          movement: {
            category: "Pause Mouvement",
            action:
              "Faites une marche de 10 minutes pendant votre pause déjeuner",
            rationale:
              "Même une brève activité en plein air réduit le stress et améliore la concentration l'après-midi. Vous n'avez pas de médecin de famille, la prévention est donc clé.",
          },
          digital: {
            category: "Bien-être Numérique",
            action: "Activez 'Ne pas déranger' à partir de 21h",
            rationale:
              "La lumière bleue et les notifications avant le coucher perturbent la qualité du sommeil. Vos scores de sommeil ont chuté lorsque vous avez utilisé votre téléphone tard.",
          },
        },
        trends: {
          title: "Vos Tendances Santé",
          subtitle: "30 derniers jours",
          stress: {
            title: "😌 Niveau de Stress",
            avg: "Moyenne",
            highDays: "Jours stress élevé",
            lowDays: "Jours stress faible",
            trend: "Stable vs mois dernier",
            valAvg: "Moyen",
          },
          sleep: {
            title: "😴 Qualité de Sommeil",
            avg: "Moyenne",
            range: "Plage",
            goodDays: "Jours avec 7h+",
            trend: "Baisse de 5% vs mois dernier",
            valAvg: "6.5 heures",
          },
          activity: {
            title: "💪 Activité Physique",
            activeDays: "Jours actifs",
            avgSessions: "Moyenne séances/sem",
            bestWeek: "Meilleure semaine",
            trend: "Hausse de 15% vs mois dernier",
          },
          mindfulness: {
            title: "🧘 Pratique Pleine Conscience",
            avgDaily: "Moyenne quotidienne",
            practiceDays: "Jours de pratique",
            streak: "Meilleure série",
            trend: "Hausse de 25% vs mois dernier",
          },
          insight: {
            title: "💡 Aperçu",
            text: "Votre pratique de la pleine conscience porte ses fruits! Les jours avec méditation correspondent à des niveaux de stress plus faibles. Continuez!",
          },
        },
        summary: {
          title: "Résumé Santé",
          subtitle: "Pour votre professionnel de santé",
          patientInfo: "Informations Patient",
          name: "Nom:",
          age: "Âge:",
          concern: "Préoccupation:",
          period: "Période:",
          stress: {
            title: "😌 Gestion du Stress",
            avg: "Niveau Moyen",
            highDays: "Jours stress élevé",
            triggers: "Déclencheurs",
          },
          sleep: {
            title: "😴 Sommeil",
            avg: "Durée Moyenne",
            quality: "Qualité",
            rec: "Recommandation",
          },
          lifestyle: {
            title: "Activités & Mode de Vie",
            exercise: "💪 Fréquence sport",
            mindfulness: "🧘 Pleine conscience",
            tracking: "📊 Suivi données",
          },
          clinical: {
            title: "Notes Cliniques",
            notes:
              "La patiente signale un stress élevé lié au travail et un sommeil insuffisant (moy. 6.5h). Engagement positif dans la pleine conscience et l'exercice. Bénéficierait de conseils sur l'hygiène du sommeil et la gestion du stress.",
          },
          recs: {
            title: "Recommandations",
            list: [
              "Étude du sommeil pour écarter les troubles",
              "Thérapie cognitivo-comportementale pour le stress",
              "Continuer la routine d'exercice actuelle",
              "Suivi dans 3 mois",
            ],
          },
          note: "Ce résumé est conçu pour être partagé avec les cliniques sans rendez-vous ou spécialistes.",
        },
        log: {
          title: "Consigner votre journée",
          stress: {
            title: "😌 Niveau de stress",
            question: "Quel est votre niveau de stress ?",
            labels: ["Très faible", "Faible", "Moyen", "Élevé", "Très élevé"],
          },
          sleep: {
            title: "😴 Durée du sommeil",
            label: "Heures dormies",
            recommended: "Recommandé : 7-9 heures",
          },
          activity: {
            title: "💪 Activité physique",
            question: "Avez-vous fait de l'exercice aujourd'hui ?",
            guidance: "Au moins 20 minutes d'activité modérée",
          },
          mindfulness: {
            title: "🧘 Pleine conscience",
            label: "Minutes pratiquées",
            goal: "Objectif : 10 minutes par jour",
          },
        },
      },
      leo: {
        greeting: "Quoi de neuf, Leo! 🔥",
        alert:
          "Yo, tu as besoin de plus de sommeil 😴 Tu n'as eu que 5,5 heures cette semaine. Vise 8-9 heures ce soir!",
        studyTools: "Outils d'Étude",
        startPomodoro: "Lancer le Timer Pomodoro",
        logDay: "Enregistrer ta Journée",
        pomodoroTitle: "Minuteur de concentration",
        tipsTitle: "Conseils pour Toi",
        recommendations: {
          sleep: {
            category: "Mieux Dormir",
            action:
              "Range ton téléphone à 22h et vise 9 heures de sommeil ce soir",
            rationale:
              "Tu as 16 ans et ton cerveau se développe encore! Les ados ont besoin de 8-10 heures. Tu n'en as eu que 5,5, ce qui nuit à tes notes, ton humeur et ta santé.",
          },
          screenTime: {
            category: "Temps d'Écran",
            action:
              "Essaie la règle 20-20-20: Toutes les 20 min, regarde un objet à 20 pieds (6m) pendant 20 secondes",
            rationale:
              "Ton temps d'écran est de 6,2 h/jour. Cela fatigue les yeux, perturbe le sommeil et affecte la concentration. Fais des pauses pour protéger tes yeux et ton cerveau.",
          },
          movement: {
            category: "Bouge-toi",
            action:
              "Fais 15 minutes de n'importe quelle activité que tu aimes pendant les pauses d'étude",
            rationale:
              "L'activité physique booste le cerveau, améliore la concentration et libère des hormones de bien-être. Même une marche rapide ou une séance de danse aide!",
          },
          study: {
            category: "Étudier Malin",
            action:
              "Utilise la technique Pomodoro: 25 min de concentration + 5 min de pause",
            rationale:
              "Ton cerveau travaille mieux par rafales. Le timer Pomodoro t'aide à rester concentré et évite le burnout. Essaie-le pour tes devoirs!",
          },
        },
        trends: {
          title: "Tes Tendances 📊",
          subtitle: "30 derniers jours",
          sleep: {
            title: "😴 Sommeil",
            avg: "Moyenne",
            range: "Plage",
            goodDays: "Jours avec 8h+",
            trend: "Baisse de 10% - attention!",
          },
          screenTime: {
            title: "📱 Temps d'Écran",
            avg: "Moyenne quotidienne",
            peak: "Pic",
            beforeBed: "Avant le coucher (moy)",
            trend: "Hausse de 8% - essaie de réduire",
          },
          activity: {
            title: "💪 Activité Physique",
            activeDays: "Jours actifs",
            type: "Type",
            streak: "Meilleure série",
            trend: "Similaire au mois dernier",
          },
          mood: {
            title: "😊 Humeur",
            common: "Plus fréquent",
            greatDays: "Jours top",
            roughDays: "Jours durs",
            trend: "Amélioration globale! 💯",
          },
          insight: {
            title: "💡 Observation",
            text: "Ton humeur est meilleure quand tu dors au moins 7h et que tu bouges. Le frein principal? Trop d'écran avant de dormir. Essaie de poser le téléphone 1h avant le lit!",
          },
        },
        summary: {
          title: "Résumé Santé",
          subtitle: "Partager avec médecin ou infirmière scolaire",
          about: {
            title: "À Propos",
            name: "Nom:",
            age: "Âge:",
            focus: "Focus:",
            period: "Période:",
          },
          sleep: {
            title: "😴 Sommeil",
            avg: "Durée Moyenne",
            rec: "Recommandé",
            deficit: "Déficit de Sommeil",
          },
          digital: {
            title: "📱 Bien-être Numérique",
            daily: "Écran quotidien",
            beforeBed: "Avant le coucher",
            impact: "Impact",
          },
          activity: {
            title: "💪 Activité Physique",
            activeDays: "Jours actifs",
            main: "Activités principales",
            consistency: "Régularité",
          },
          mental: {
            title: "😊 Bien-être Mental",
            overall: "Humeur globale",
            great: "Jours top",
            rough: "Jours difficiles",
          },
          notes: {
            title: "Résumé",
            text: "Leo suit son sommeil, temps d'écran, activité et humeur. Préoccupation principale: manque de sommeil (moy. 5.5h vs recommandation 8-10h). Temps d'écran élevé le soir contribue probablement au problème. Humeur globale positive. Activité physique modérée.",
          },
          recs: {
            title: "Recommandations",
            list: [
              "Améliorer l'hygiène de sommeil - viser 8-9h",
              "Réduire les écrans 1-2h avant le coucher",
              "Maintenir une activité physique régulière",
              "Considérer un soutien si le sommeil ne s'améliore pas",
            ],
          },
          footer:
            "Ce résumé peut être partagé avec un médecin ou conseiller. Ta vie privée est protégée - ne partage que ce que tu veux.",
        },
        log: {
          title: "Comment s'est passée ta journée ?",
          mood: {
            title: "😊 Comment te sens-tu ?",
            question: "Choisis l'emoji qui correspond à ton humeur",
            options: [
              { emoji: "😢", label: "Journée difficile", value: "rough" },
              { emoji: "😕", label: "Bof", value: "meh" },
              { emoji: "😊", label: "Bien", value: "good" },
              { emoji: "😄", label: "Super", value: "great" },
              { emoji: "🔥", label: "Incroyable", value: "amazing" },
            ],
          },
          sleep: {
            title: "😴 Sommeil la nuit dernière",
            label: "Heures",
            note: "Tu as besoin de 8-10 heures pour être en forme",
          },
          screenTime: {
            title: "📱 Temps d'écran aujourd'hui",
            label: "Heures",
            note: "En dehors des cours/devoirs",
          },
          activity: {
            title: "💪 Tu as bougé aujourd'hui ?",
            question: "Au moins 20 minutes d'activité",
            detail: "Sport, marche, vélo, danse - tout compte !",
          },
        },
      },
    },

    features: {
      breathingExercise: {
        title: "Respiration guidée",
        technique: "Technique 4-7-8",
        cyclesLabel: "cycles",
        phases: {
          inhale: {
            label: "Inspirez",
            instruction: "Inspirez profondément par le nez",
          },
          hold: {
            label: "Retenez",
            instruction: "Retenez votre souffle en douceur",
          },
          exhale: {
            label: "Expirez",
            instruction: "Relâchez l'air lentement par la bouche",
          },
          rest: {
            label: "Repos",
            instruction: "Relâchez-vous un instant",
          },
        },
        controls: {
          start: "Commencer",
          resume: "Reprendre",
          pause: "Pause",
        },
        benefitsTitle: "Bénéfices :",
        benefits: [
          "• Réduit l'anxiété et le stress",
          "• Diminue la fréquence cardiaque et la tension artérielle",
          "• Améliore la concentration et la clarté mentale",
          "• Favorise le sommeil si pratiqué avant le coucher",
        ],
      },
      pomodoroTimer: {
        sessions: {
          focus: { label: "Temps de concentration", emoji: "📚" },
          shortBreak: { label: "Pause courte", emoji: "☕" },
          longBreak: { label: "Pause longue", emoji: "🎉" },
        },
        statsLabel: "{count} sessions de concentration terminées aujourd'hui",
        stateReady: "Prêt",
        stateInProgress: "En cours",
        start: "Démarrer",
        pause: "Pause",
        skipTo: "Passer à {label}",
        quickSessions: {
          focus: "Focus",
          short: "Courte",
          long: "Longue",
        },
        tipsTitle: "Conseils d'étude :",
        tips: [
          "• Éliminez les distractions pendant vos périodes de focus",
          "• Profitez des pauses : bougez et étirez-vous",
          "• Après 4 pomodoros, accordez-vous une pause plus longue",
          "• Note ce que tu accomplis à chaque session",
        ],
        notifications: {
          title: "Minuteur Pomodoro",
          focusComplete: "C'est l'heure de faire une pause !",
          breakComplete: "Prêt à te reconcentrer ?",
        },
      },
    },

    nav: {
      home: "Accueil",
      trends: "Tendances",
      summary: "Résumé",
    },
  },
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};
