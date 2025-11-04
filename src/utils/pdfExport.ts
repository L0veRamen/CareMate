/**
 * PDF Export utilities for Clinical Summary
 * 
 * This implements the PDF template design from the Figma specifications.
 * The actual PDF generation would require a library like jsPDF or html2pdf,
 * but this provides the data structure and formatting logic.
 */

export interface PatientInfo {
  name: string;
  age: number;
  dateOfBirth: string;
  conditions: string[];
  medications: string[];
  healthGoals: string[];
}

export interface ClinicalAlert {
  priority: 'high' | 'moderate' | 'low';
  title: string;
  description: string;
  metrics?: string[];
  recommendation?: string;
}

export interface HealthMetric {
  name: string;
  currentValue: string;
  previousValue: string;
  change: string;
  trend: 'improving' | 'worsening' | 'stable';
  target?: string;
  daysAboveTarget?: number;
  chartData?: Array<{ date: string; value: number }>;
}

export interface PatientAction {
  category: string;
  adherence: number;
  details: string[];
  note?: string;
}

export interface ClinicalSummary {
  generatedDate: string;
  reportingPeriod: string;
  patientInfo: PatientInfo;
  alerts: ClinicalAlert[];
  metrics: HealthMetric[];
  actions: PatientAction[];
  dataLoggingConsistency: {
    bloodGlucose: number;
    bloodPressure: number;
    sleep: number;
    activity: number;
  };
  clinicianSummary: string;
  patientConcerns?: Array<{ concern: string; reportedDate: string }>;
}

/**
 * Format clinical summary for PDF export
 */
export function formatClinicalSummaryForPDF(data: ClinicalSummary): string {
  // This would generate HTML or structured data for PDF generation
  // For now, we return a formatted text representation
  
  let output = '';
  
  output += '='.repeat(60) + '\n';
  output += 'CLINICAL SUMMARY\n';
  output += '='.repeat(60) + '\n\n';
  
  output += `Generated: ${data.generatedDate}\n`;
  output += `Reporting Period: ${data.reportingPeriod}\n\n`;
  
  output += 'PATIENT INFORMATION\n';
  output += '-'.repeat(60) + '\n';
  output += `Name: ${data.patientInfo.name}\n`;
  output += `Age: ${data.patientInfo.age} years\n`;
  output += `Date of Birth: ${data.patientInfo.dateOfBirth}\n\n`;
  
  output += 'Known Conditions:\n';
  data.patientInfo.conditions.forEach(condition => {
    output += `  • ${condition}\n`;
  });
  output += '\n';
  
  output += 'Current Medications:\n';
  data.patientInfo.medications.forEach(medication => {
    output += `  • ${medication}\n`;
  });
  output += '\n';
  
  output += 'Health Goals:\n';
  data.patientInfo.healthGoals.forEach(goal => {
    output += `  • ${goal}\n`;
  });
  output += '\n\n';
  
  if (data.alerts.length > 0) {
    output += 'CLINICAL ALERTS\n';
    output += '-'.repeat(60) + '\n';
    
    data.alerts.forEach(alert => {
      const emoji = alert.priority === 'high' ? '🔴' : alert.priority === 'moderate' ? '🟡' : '🟢';
      output += `${emoji} ${alert.priority.toUpperCase()} PRIORITY\n\n`;
      output += `${alert.title}\n`;
      output += `${alert.description}\n`;
      
      if (alert.metrics && alert.metrics.length > 0) {
        alert.metrics.forEach(metric => {
          output += `  • ${metric}\n`;
        });
      }
      
      if (alert.recommendation) {
        output += `\n📋 Recommendation:\n${alert.recommendation}\n`;
      }
      
      output += '\n' + '-'.repeat(60) + '\n';
    });
    output += '\n';
  }
  
  output += 'KEY HEALTH METRICS\n';
  output += '-'.repeat(60) + '\n';
  data.metrics.forEach(metric => {
    output += `${metric.name}\n`;
    output += `  Current: ${metric.currentValue}\n`;
    output += `  Previous: ${metric.previousValue}\n`;
    output += `  Change: ${metric.change} (${metric.trend})\n`;
    if (metric.target) {
      output += `  Target: ${metric.target}\n`;
    }
    if (metric.daysAboveTarget) {
      output += `  Days above target: ${metric.daysAboveTarget}\n`;
    }
    output += '\n';
  });
  output += '\n';
  
  output += 'PATIENT ACTIONS & ADHERENCE\n';
  output += '-'.repeat(60) + '\n';
  data.actions.forEach(action => {
    output += `${action.category}\n`;
    output += `  Adherence: ${action.adherence}%\n`;
    action.details.forEach(detail => {
      output += `  • ${detail}\n`;
    });
    if (action.note) {
      output += `  Note: ${action.note}\n`;
    }
    output += '\n';
  });
  
  output += '\nDATA LOGGING CONSISTENCY\n';
  output += '-'.repeat(60) + '\n';
  output += `Blood Glucose: ${data.dataLoggingConsistency.bloodGlucose}%\n`;
  output += `Blood Pressure: ${data.dataLoggingConsistency.bloodPressure}%\n`;
  output += `Sleep: ${data.dataLoggingConsistency.sleep}%\n`;
  output += `Physical Activity: ${data.dataLoggingConsistency.activity}%\n\n`;
  
  if (data.patientConcerns && data.patientConcerns.length > 0) {
    output += 'PATIENT-REPORTED CONCERNS\n';
    output += '-'.repeat(60) + '\n';
    data.patientConcerns.forEach(concern => {
      output += `• "${concern.concern}"\n`;
      output += `  Reported: ${concern.reportedDate}\n\n`;
    });
  }
  
  output += 'SUMMARY FOR CLINICIAN\n';
  output += '-'.repeat(60) + '\n';
  output += data.clinicianSummary + '\n\n';
  
  output += '='.repeat(60) + '\n';
  output += '📱 Generated by CareMate Virtual Health Assistant\n';
  output += '🔒 This document contains personal health information\n';
  output += '   protected under PIPEDA/PHIPA\n';
  output += '='.repeat(60) + '\n';
  
  return output;
}

/**
 * Download clinical summary as text file (placeholder for PDF)
 */
export function downloadClinicalSummary(data: ClinicalSummary, filename: string = 'clinical-summary.txt') {
  const content = formatClinicalSummaryForPDF(data);
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Sample data for André's clinical summary (based on design specs)
 */
export const andreSampleData: ClinicalSummary = {
  generatedDate: 'October 5, 2025 at 2:30 PM',
  reportingPeriod: 'September 5 - October 5, 2025',
  patientInfo: {
    name: 'André Lavoie',
    age: 72,
    dateOfBirth: 'March 15, 1953',
    conditions: ['Type 2 Diabetes', 'Essential Hypertension'],
    medications: ['Metformin 500mg BID', 'Lisinopril 10mg QD'],
    healthGoals: [
      'Manage blood sugar through diet',
      'Maintain physical activity',
      'Improve sleep quality',
    ],
  },
  alerts: [
    {
      priority: 'high',
      title: 'Persistent Hyperglycemia',
      description: 'Patient reports blood glucose ≥160 mg/dL on 5 of 7 days (71% of readings). 30-day trend shows 18% increase. Average fasting glucose: 178 mg/dL.',
      metrics: [
        'Average fasting glucose: 178 mg/dL',
        '30-day trend: +18% increase',
        '71% of readings above target',
      ],
      recommendation: 'Consider medication adjustment or dosage review. Patient has been adherent to dietary recommendations.',
    },
    {
      priority: 'moderate',
      title: 'Elevated Blood Pressure',
      description: 'Average reading: 145/92 mmHg. 6% increase over 30 days. 4 readings ≥140/90 mmHg.',
    },
    {
      priority: 'moderate',
      title: 'Insufficient Sleep Duration',
      description: 'Average: 5.6 hours/night. Below recommended 7-8 hours. Consistency: Moderate (CV: 15%).',
      recommendation: 'Poor sleep may contribute to suboptimal glycemic control.',
    },
  ],
  metrics: [
    {
      name: 'Blood Glucose',
      currentValue: '178 mg/dL',
      previousValue: '151 mg/dL',
      change: '+18%',
      trend: 'worsening',
      target: '<140 mg/dL fasting',
      daysAboveTarget: 21,
    },
    {
      name: 'Blood Pressure',
      currentValue: '145/92 mmHg',
      previousValue: '137/86 mmHg',
      change: '+6%/+7%',
      trend: 'worsening',
      target: '<130/80 mmHg',
    },
    {
      name: 'Sleep Duration',
      currentValue: '5.6 hours/night',
      previousValue: '6.0 hours/night',
      change: '-7%',
      trend: 'worsening',
      target: '7-8 hours',
    },
    {
      name: 'Physical Activity',
      currentValue: '12 minutes/day',
      previousValue: '17 minutes/day',
      change: '-31%',
      trend: 'worsening',
      target: '≥20 minutes daily',
    },
  ],
  actions: [
    {
      category: 'Dietary Modifications',
      adherence: 60,
      details: [
        'Reduced refined carbs',
        'Limited portion sizes',
        'Increased water intake',
      ],
    },
    {
      category: 'Physical Activity',
      adherence: 30,
      details: [
        'Post-meal walking',
        'Daily stretching',
      ],
      note: 'Decreased in past 2 weeks',
    },
    {
      category: 'Sleep Hygiene',
      adherence: 40,
      details: [
        'Consistent bedtime',
        'Screen-free hour before bed',
      ],
      note: 'Variable adherence',
    },
  ],
  dataLoggingConsistency: {
    bloodGlucose: 93,
    bloodPressure: 93,
    sleep: 100,
    activity: 100,
  },
  patientConcerns: [
    {
      concern: 'Feeling more tired lately',
      reportedDate: 'October 1, 2025',
    },
    {
      concern: 'Difficulty controlling portions at family dinners',
      reportedDate: 'September 28, 2025',
    },
  ],
  clinicianSummary: `This 72-year-old patient with Type 2 diabetes and hypertension shows excellent engagement with self-monitoring but demonstrates concerning trends:

1. Blood glucose control has deteriorated significantly (+18%) despite good dietary adherence.

2. Blood pressure trending upward, potentially related to inadequate sleep.

3. Physical activity has declined by 31% over the reporting period.

Suggested Actions:
• Review and potentially adjust diabetes medication dosage
• Assess barriers to physical activity
• Consider sleep study if insomnia persists
• Monitor blood pressure closely`,
};
