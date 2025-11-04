import type { Language } from './types';

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
    'general-wellness': string;
    'diabetes-management': string;
    'stress-management': string;
    'student-health': string;
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
  };
  
  // Units
  units: {
    mgdl: string;
    mmhg: string;
    hours: string;
    minutes: string;
    days: string;
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
  };
  
  // Persona Selection
  selectPersona: string;
  personaDescription: string;
  useThisPersona: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    appName: 'CareMate',
    tagline: 'Your Health Companion',
    loading: 'Loading...',
    error: 'Error',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    
    // Landing/Setup
    quickSetup: 'Quick Setup',
    setupTime: '30 seconds',
    yourName: 'Your Name',
    age: 'Age',
    years: 'years',
    primaryHealthGoal: 'Primary Health Goal',
    selectOne: 'Select One',
    language: 'Language',
    getStarted: 'Get Started',
    privacyNotice: 'Privacy: Data stored locally on your device only.',
    welcomeBack: 'Welcome back',
    
    // Health Goals
    goals: {
      'general-wellness': 'General Wellness',
      'diabetes-management': 'Diabetes Management',
      'stress-management': 'Stress Management',
      'student-health': 'Student Health'
    },
    
    // Dashboard
    hello: 'Hello',
    weekSummary: 'Week Summary',
    alerts: 'Alerts',
    todayMetrics: "Today's Metrics",
    aiInsight: 'AI Insight',
    topRecommendations: 'Top Recommendations',
    actions: 'Actions',
    
    // Metrics
    metrics: {
      bloodGlucose: 'Blood Glucose',
      bloodPressure: 'Blood Pressure',
      sleep: 'Sleep',
      activity: 'Activity',
      stress: 'Stress Level',
      mood: 'Mood',
      notes: 'Notes'
    },
    
    // Units
    units: {
      mgdl: 'mg/dL',
      mmhg: 'mmHg',
      hours: 'hours',
      minutes: 'minutes',
      days: 'days'
    },
    
    // Stats
    average: 'Average',
    daysLogged: 'Days Logged',
    notLogged: 'Not logged',
    
    // Actions
    logData: 'Log Data',
    viewTrends: 'View Trends',
    exportPDF: 'Export PDF Summary',
    getTodayInsight: "Get Today's Insight",
    getPersonalizedInsight: 'Get your personalized insight',
    
    // Trends
    last7Days: 'Last 7 Days',
    trends: 'Trends',
    improving: 'Improving',
    worsening: 'Worsening',
    stable: 'Stable',
    
    // Alerts
    alertTitles: {
      highGlucose: 'Elevated Blood Sugar',
      lowGlucose: 'Low Blood Sugar',
      highBP: 'High Blood Pressure',
      poorSleep: 'Insufficient Sleep',
      lowActivity: 'Low Physical Activity',
      highStress: 'High Stress Levels'
    },
    
    // Recommendations
    recommendationCategories: {
      nutrition: 'Nutrition',
      activity: 'Physical Activity',
      sleep: 'Sleep',
      stress: 'Stress Management',
      general: 'General Health'
    },
    
    // Data Input Form
    logYourHealth: 'Log Your Health Data',
    dateAndTime: 'Date & Time',
    required: 'Required',
    optional: 'Optional',
    addNotes: 'Add notes about your day',
    submitData: 'Submit Data',
    dataLogged: 'Data logged successfully!',
    
    // AI Insight
    aiInsightTitle: 'Your Daily Insight',
    aiInsightDescription: 'AI-powered personalized health insight based on your data',
    generatingInsight: 'Generating your insight...',
    insightReady: 'Your insight is ready!',
    observation: 'Observation',
    context: 'Context',
    todayAction: "Today's Action",
    tryAgainTomorrow: 'You can get a new insight tomorrow',
    insightError: 'Could not generate insight. Please try again later.',
    
    // PDF Export
    exportSummary: 'Export Health Summary',
    healthSummary: 'Health Summary Report',
    generatedOn: 'Generated on',
    patientInfo: 'Patient Information',
    weeklyOverview: 'Weekly Overview',
    detailedReadings: 'Detailed Readings',
    clinicalNotes: 'Clinical Notes',
    download: 'Download PDF',
    
    // Settings
    settings: 'Settings',
    editProfile: 'Edit Profile',
    clearAllData: 'Clear All Data',
    about: 'About CareMate',
    confirmClear: 'Are you sure you want to clear all data? This cannot be undone.',
    dataClearedSuccess: 'All data has been cleared.',
    
    // Empty States
    noDataYet: 'No data yet',
    startLogging: 'Start logging to see your health metrics',
    noAlertsGood: "You're doing great! No alerts at this time.",
    
    // Validation
    validation: {
      nameRequired: 'Name is required',
      ageRequired: 'Age is required',
      goalRequired: 'Please select a health goal',
      nameMinLength: 'Name must be at least 2 characters',
      ageRange: 'Age must be between 1 and 120'
    },
    
    // Persona Selection
    selectPersona: 'Select a User Profile',
    personaDescription: 'Choose a pre-configured profile to explore the app',
    useThisPersona: 'Use This Profile'
  },
  
  fr: {
    // Common
    appName: 'CareMate',
    tagline: 'Votre Compagnon Santé',
    loading: 'Chargement...',
    error: 'Erreur',
    save: 'Enregistrer',
    cancel: 'Annuler',
    close: 'Fermer',
    back: 'Retour',
    next: 'Suivant',
    
    // Landing/Setup
    quickSetup: 'Configuration Rapide',
    setupTime: '30 secondes',
    yourName: 'Votre Nom',
    age: 'Âge',
    years: 'ans',
    primaryHealthGoal: 'Objectif Santé Principal',
    selectOne: 'Sélectionnez',
    language: 'Langue',
    getStarted: 'Commencer',
    privacyNotice: 'Confidentialité : Données stockées localement sur votre appareil uniquement.',
    welcomeBack: 'Bon retour',
    
    // Health Goals
    goals: {
      'general-wellness': 'Bien-être Général',
      'diabetes-management': 'Gestion du Diabète',
      'stress-management': 'Gestion du Stress',
      'student-health': 'Santé Étudiante'
    },
    
    // Dashboard
    hello: 'Bonjour',
    weekSummary: 'Résumé Hebdomadaire',
    alerts: 'Alertes',
    todayMetrics: "Métriques d'Aujourd'hui",
    aiInsight: 'Aperçu IA',
    topRecommendations: 'Principales Recommandations',
    actions: 'Actions',
    
    // Metrics
    metrics: {
      bloodGlucose: 'Glycémie',
      bloodPressure: 'Tension Artérielle',
      sleep: 'Sommeil',
      activity: 'Activité',
      stress: 'Niveau de Stress',
      mood: 'Humeur',
      notes: 'Notes'
    },
    
    // Units
    units: {
      mgdl: 'mg/dL',
      mmhg: 'mmHg',
      hours: 'heures',
      minutes: 'minutes',
      days: 'jours'
    },
    
    // Stats
    average: 'Moyenne',
    daysLogged: 'Jours Enregistrés',
    notLogged: 'Non enregistré',
    
    // Actions
    logData: 'Enregistrer Données',
    viewTrends: 'Voir Tendances',
    exportPDF: 'Exporter Résumé PDF',
    getTodayInsight: "Obtenir l'Aperçu d'Aujourd'hui",
    getPersonalizedInsight: 'Obtenez votre aperçu personnalisé',
    
    // Trends
    last7Days: '7 Derniers Jours',
    trends: 'Tendances',
    improving: 'En Amélioration',
    worsening: 'En Détérioration',
    stable: 'Stable',
    
    // Alerts
    alertTitles: {
      highGlucose: 'Glycémie Élevée',
      lowGlucose: 'Glycémie Basse',
      highBP: 'Tension Artérielle Élevée',
      poorSleep: 'Sommeil Insuffisant',
      lowActivity: 'Activité Physique Faible',
      highStress: 'Niveaux de Stress Élevés'
    },
    
    // Recommendations
    recommendationCategories: {
      nutrition: 'Nutrition',
      activity: 'Activité Physique',
      sleep: 'Sommeil',
      stress: 'Gestion du Stress',
      general: 'Santé Générale'
    },
    
    // Data Input Form
    logYourHealth: 'Enregistrer Vos Données de Santé',
    dateAndTime: 'Date et Heure',
    required: 'Requis',
    optional: 'Optionnel',
    addNotes: 'Ajoutez des notes sur votre journée',
    submitData: 'Soumettre les Données',
    dataLogged: 'Données enregistrées avec succès!',
    
    // AI Insight
    aiInsightTitle: 'Votre Aperçu Quotidien',
    aiInsightDescription: 'Aperçu santé personnalisé basé sur vos données',
    generatingInsight: 'Génération de votre aperçu...',
    insightReady: 'Votre aperçu est prêt!',
    observation: 'Observation',
    context: 'Contexte',
    todayAction: "Action d'Aujourd'hui",
    tryAgainTomorrow: 'Vous pourrez obtenir un nouvel aperçu demain',
    insightError: 'Impossible de générer un aperçu. Réessayez plus tard.',
    
    // PDF Export
    exportSummary: 'Exporter Résumé Santé',
    healthSummary: 'Rapport de Résumé Santé',
    generatedOn: 'Généré le',
    patientInfo: 'Informations Patient',
    weeklyOverview: 'Aperçu Hebdomadaire',
    detailedReadings: 'Lectures Détaillées',
    clinicalNotes: 'Notes Cliniques',
    download: 'Télécharger PDF',
    
    // Settings
    settings: 'Paramètres',
    editProfile: 'Modifier le Profil',
    clearAllData: 'Effacer Toutes les Données',
    about: 'À Propos de CareMate',
    confirmClear: 'Êtes-vous sûr de vouloir effacer toutes les données? Cette action est irréversible.',
    dataClearedSuccess: 'Toutes les données ont été effacées.',
    
    // Empty States
    noDataYet: 'Aucune donnée pour le moment',
    startLogging: 'Commencez à enregistrer pour voir vos métriques de santé',
    noAlertsGood: 'Vous allez bien! Aucune alerte pour le moment.',
    
    // Validation
    validation: {
      nameRequired: 'Le nom est requis',
      ageRequired: "L'âge est requis",
      goalRequired: 'Veuillez sélectionner un objectif santé',
      nameMinLength: 'Le nom doit contenir au moins 2 caractères',
      ageRange: "L'âge doit être entre 1 et 120"
    },
    
    // Persona Selection
    selectPersona: 'Sélectionner un Profil Utilisateur',
    personaDescription: "Choisissez un profil préconfiguré pour explorer l'application",
    useThisPersona: 'Utiliser Ce Profil'
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};
