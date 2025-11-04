import type { UserProfile, HealthData, WeekSummary, Alert, Language } from './types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFExportOptions {
  profile: UserProfile;
  healthData: HealthData[];
  summary: WeekSummary;
  alerts: Alert[];
  language: Language;
}

class PDFExportService {
  async generatePDF(options: PDFExportOptions): Promise<Blob> {
    // Generate HTML content
    const htmlContent = this.generateHTMLContent(options);
    
    // Create an iframe to properly render the full HTML document
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.width = '210mm';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    try {
      // Write HTML content to iframe
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) {
        throw new Error('无法访问 iframe 文档');
      }
      
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      // Wait for content to render
      await new Promise<void>((resolve) => {
        iframe.onload = () => resolve();
        // Also resolve after a delay in case onload doesn't fire
        setTimeout(() => resolve(), 1000);
      });

      // Get the body element from iframe
      const bodyElement = iframeDoc.body;
      if (!bodyElement) {
        throw new Error('无法找到 iframe 的 body 元素');
      }

      // Convert HTML to canvas
      const canvas = await html2canvas(bodyElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: bodyElement.scrollWidth,
        height: bodyElement.scrollHeight,
        windowWidth: bodyElement.scrollWidth,
        windowHeight: bodyElement.scrollHeight
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdfHeight = imgHeight;
      const pageHeight = 297; // A4 height in mm
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      let heightLeft = pdfHeight;
      let position = 0;

      // Add first page
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Clean up
      document.body.removeChild(iframe);

      // Return PDF as Blob with correct MIME type
      const pdfData = pdf.output('arraybuffer');
      const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
      return pdfBlob;
    } catch (error) {
      // Clean up on error
      if (iframe.parentNode) {
        document.body.removeChild(iframe);
      }
      console.error('Error generating PDF:', error);
      throw error;
    }
  }

  private generateHTMLContent(options: PDFExportOptions): string {
    const { profile, healthData, summary, alerts, language } = options;
    const t = this.getTranslations(language);

    const htmlContent = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 40px;
            max-width: 1000px;
            margin: 0 auto;
            background: white;
        }
        
        .header {
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .header h1 {
            color: #1e40af;
            font-size: 28px;
            margin-bottom: 5px;
        }
        
        .header .subtitle {
            color: #6b7280;
            font-size: 14px;
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section-title {
            background: #eff6ff;
            color: #1e40af;
            padding: 10px 15px;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            border-left: 4px solid #3b82f6;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .info-item {
            padding: 12px;
            background: #f9fafb;
            border-radius: 6px;
        }
        
        .info-label {
            font-weight: 600;
            color: #4b5563;
            font-size: 13px;
            margin-bottom: 4px;
        }
        
        .info-value {
            color: #111827;
            font-size: 16px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-card {
            padding: 15px;
            background: #f0f9ff;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #bfdbfe;
        }
        
        .stat-label {
            font-size: 12px;
            color: #6b7280;
            margin-bottom: 5px;
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #1e40af;
        }
        
        .stat-unit {
            font-size: 14px;
            color: #6b7280;
        }
        
        .alert {
            padding: 12px 15px;
            margin-bottom: 10px;
            border-radius: 6px;
            border-left: 4px solid;
        }
        
        .alert-critical {
            background: #fef2f2;
            border-color: #dc2626;
        }
        
        .alert-warning {
            background: #fffbeb;
            border-color: #f59e0b;
        }
        
        .alert-info {
            background: #eff6ff;
            border-color: #3b82f6;
        }
        
        .alert-title {
            font-weight: 600;
            margin-bottom: 4px;
        }
        
        .alert-message {
            font-size: 14px;
            color: #4b5563;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            margin-bottom: 20px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            background: white;
        }
        
        th {
            background: linear-gradient(to bottom, #3b82f6, #2563eb);
            color: white;
            padding: 14px 12px;
            text-align: left;
            font-weight: 600;
            font-size: 13px;
            border: none;
            border-right: 1px solid rgba(255, 255, 255, 0.2);
            white-space: nowrap;
        }
        
        th:last-child {
            border-right: none;
        }
        
        td {
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
            font-size: 13px;
            color: #374151;
            background: white;
        }
        
        tr:nth-child(even) td {
            background: #f9fafb;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        tbody tr:hover {
            background: #f0f9ff !important;
        }
        
        tbody tr:hover td {
            background: #f0f9ff !important;
        }
        
        .table-container {
            overflow-x: auto;
            margin: 15px 0;
        }
        
        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        
        .no-data {
            text-align: center;
            padding: 30px;
            color: #9ca3af;
            font-style: italic;
        }
        
        @media print {
            body {
                padding: 20px;
            }
            
            .section {
                page-break-inside: avoid;
            }
            
            table {
                page-break-inside: auto;
            }
            
            tr {
                page-break-inside: avoid;
                page-break-after: auto;
            }
            
            thead {
                display: table-header-group;
            }
            
            tfoot {
                display: table-footer-group;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏥 ${t.title}</h1>
        <div class="subtitle">${t.generatedOn}: ${new Date().toLocaleDateString(language === 'fr' ? 'fr-CA' : 'en-CA', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</div>
    </div>

    <!-- Patient Information -->
    <div class="section">
        <div class="section-title">${t.patientInfo}</div>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">${t.name}</div>
                <div class="info-value">${profile.name}</div>
            </div>
            <div class="info-item">
                <div class="info-label">${t.age}</div>
                <div class="info-value">${profile.age} ${t.years}</div>
            </div>
            <div class="info-item">
                <div class="info-label">${t.healthGoal}</div>
                <div class="info-value">${this.getHealthGoalLabel(profile.healthGoal, language)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">${t.daysTracked}</div>
                <div class="info-value">${healthData.length} ${t.days}</div>
            </div>
        </div>
    </div>

    <!-- Weekly Summary -->
    <div class="section">
        <div class="section-title">${t.weeklyOverview}</div>
        <div class="stats-grid">
            ${summary.avgGlucose > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgGlucose}</div>
                <div class="stat-value">${summary.avgGlucose}</div>
                <div class="stat-unit">mg/dL</div>
            </div>
            ` : ''}
            ${summary.avgSystolic > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgBP}</div>
                <div class="stat-value">${summary.avgSystolic}/${summary.avgDiastolic}</div>
                <div class="stat-unit">mmHg</div>
            </div>
            ` : ''}
            ${summary.avgSleep > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgSleep}</div>
                <div class="stat-value">${summary.avgSleep}</div>
                <div class="stat-unit">${t.hours}</div>
            </div>
            ` : ''}
            ${summary.avgActivity > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgActivity}</div>
                <div class="stat-value">${summary.avgActivity}</div>
                <div class="stat-unit">${t.minutes}</div>
            </div>
            ` : ''}
            ${summary.avgStress > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgStress}</div>
                <div class="stat-value">${summary.avgStress.toFixed(1)}</div>
                <div class="stat-unit">/10</div>
            </div>
            ` : ''}
            ${summary.avgMood > 0 ? `
            <div class="stat-card">
                <div class="stat-label">${t.avgMood}</div>
                <div class="stat-value">${summary.avgMood.toFixed(1)}</div>
                <div class="stat-unit">/5</div>
            </div>
            ` : ''}
        </div>
    </div>

    <!-- Alerts -->
    ${alerts.length > 0 ? `
    <div class="section">
        <div class="section-title">${t.alerts}</div>
        ${alerts.map(alert => `
        <div class="alert alert-${alert.severity}">
            <div class="alert-title">${alert.title}</div>
            <div class="alert-message">${alert.message}</div>
        </div>
        `).join('')}
    </div>
    ` : ''}

    <!-- Detailed Readings -->
    <div class="section">
        <div class="section-title">${t.detailedReadings}</div>
        ${healthData.length > 0 ? `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th style="width: 15%;">${t.date}</th>
                        <th style="width: 16%;">${t.glucose}</th>
                        <th style="width: 16%;">${t.bp}</th>
                        <th style="width: 15%;">${t.sleep}</th>
                        <th style="width: 16%;">${t.activity}</th>
                        <th style="width: 12%;">${t.stress}</th>
                    </tr>
                </thead>
                <tbody>
                    ${healthData.slice(0, 30).reverse().map((data, index) => {
                      const date = new Date(data.date);
                      const formattedDate = date.toISOString().split('T')[0];
                      return `
                    <tr>
                        <td style="font-weight: 500; color: #111827;">${formattedDate}</td>
                        <td style="color: #374151;">${data.bloodGlucose ? `${data.bloodGlucose} <span style="color: #6b7280; font-size: 11px;">mg/dL</span>` : '<span style="color: #9ca3af;">-</span>'}</td>
                        <td style="color: #374151;">${data.bloodPressureSystolic ? `${data.bloodPressureSystolic}/${data.bloodPressureDiastolic}` : '<span style="color: #9ca3af;">-</span>'}</td>
                        <td style="color: #374151;">${data.sleepHours ? `${data.sleepHours}h` : '<span style="color: #9ca3af;">-</span>'}</td>
                        <td style="color: #374151;">${data.activityMinutes ? `${data.activityMinutes}<span style="color: #6b7280; font-size: 11px;">min</span>` : '<span style="color: #9ca3af;">-</span>'}</td>
                        <td style="color: #374151;">${data.stressLevel ? `${data.stressLevel}/10` : '<span style="color: #9ca3af;">-</span>'}</td>
                    </tr>
                    `;
                    }).join('')}
                </tbody>
            </table>
        </div>
        ` : `
        <div class="no-data">${t.noData}</div>
        `}
    </div>

    <!-- Clinical Notes -->
    <div class="section">
        <div class="section-title">${t.clinicalNotes}</div>
        ${this.generateClinicalNotes(summary, alerts, language)}
    </div>

    <div class="footer">
        <p>${t.disclaimer}</p>
        <p style="margin-top: 5px;">${t.appName} - ${language === 'en' ? 'Your Health Companion' : 'Votre Compagnon Santé'}</p>
    </div>
</body>
</html>
    `;

    return htmlContent;
  }

  private generateClinicalNotes(summary: WeekSummary, alerts: Alert[], language: Language): string {
    const notes: string[] = [];

    if (language === 'en') {
      notes.push('<ul style="padding-left: 20px;">');
      
      if (summary.avgGlucose > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Average blood glucose of ${summary.avgGlucose} mg/dL ${
          summary.avgGlucose > 140 ? '(elevated - requires attention)' : 
          summary.avgGlucose < 70 ? '(low - monitor closely)' : 
          '(within normal range)'
        }</li>`);
      }
      
      if (summary.avgSystolic > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Average blood pressure of ${summary.avgSystolic}/${summary.avgDiastolic} mmHg ${
          summary.avgSystolic > 140 ? '(elevated - medical consultation recommended)' : 
          summary.avgSystolic > 130 ? '(borderline - monitor)' : 
          '(normal range)'
        }</li>`);
      }
      
      if (summary.avgSleep > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Average sleep duration of ${summary.avgSleep} hours ${
          summary.avgSleep < 6 ? '(insufficient - recommend improving sleep hygiene)' : 
          summary.avgSleep > 9 ? '(excessive - consider evaluation if persistent)' : 
          '(adequate)'
        }</li>`);
      }

      if (alerts.length > 0) {
        notes.push(`<li style="margin-bottom: 10px;">${alerts.length} health alerts generated - recommend follow-up consultation</li>`);
      }

      notes.push('</ul>');
    } else {
      notes.push('<ul style="padding-left: 20px;">');
      
      if (summary.avgGlucose > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Glycémie moyenne de ${summary.avgGlucose} mg/dL ${
          summary.avgGlucose > 140 ? '(élevée - nécessite attention)' : 
          summary.avgGlucose < 70 ? '(basse - surveiller de près)' : 
          '(dans la plage normale)'
        }</li>`);
      }
      
      if (summary.avgSystolic > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Tension artérielle moyenne de ${summary.avgSystolic}/${summary.avgDiastolic} mmHg ${
          summary.avgSystolic > 140 ? '(élevée - consultation médicale recommandée)' : 
          summary.avgSystolic > 130 ? '(limite - à surveiller)' : 
          '(plage normale)'
        }</li>`);
      }
      
      if (summary.avgSleep > 0) {
        notes.push(`<li style="margin-bottom: 10px;">Durée moyenne de sommeil de ${summary.avgSleep} heures ${
          summary.avgSleep < 6 ? '(insuffisant - recommandation d\'améliorer l\'hygiène de sommeil)' : 
          summary.avgSleep > 9 ? '(excessif - envisager une évaluation si persistant)' : 
          '(adéquat)'
        }</li>`);
      }

      if (alerts.length > 0) {
        notes.push(`<li style="margin-bottom: 10px;">${alerts.length} alertes santé générées - consultation de suivi recommandée</li>`);
      }

      notes.push('</ul>');
    }

    return notes.join('');
  }

  private getHealthGoalLabel(goal: string, language: Language): string {
    const goals: Record<string, Record<Language, string>> = {
      'general-wellness': { en: 'General Wellness', fr: 'Bien-être Général' },
      'diabetes-management': { en: 'Diabetes Management', fr: 'Gestion du Diabète' },
      'stress-management': { en: 'Stress Management', fr: 'Gestion du Stress' },
      'student-health': { en: 'Student Health', fr: 'Santé Étudiante' }
    };
    return goals[goal]?.[language] || goal;
  }

  private getTranslations(language: Language) {
    if (language === 'en') {
      return {
        title: 'Health Summary Report',
        generatedOn: 'Generated on',
        patientInfo: 'Patient Information',
        name: 'Name',
        age: 'Age',
        years: 'years',
        healthGoal: 'Health Goal',
        daysTracked: 'Days Tracked',
        days: 'days',
        weeklyOverview: 'Weekly Overview (Last 7 Days)',
        avgGlucose: 'Avg. Glucose',
        avgBP: 'Avg. Blood Pressure',
        avgSleep: 'Avg. Sleep',
        avgActivity: 'Avg. Activity',
        avgStress: 'Avg. Stress',
        avgMood: 'Avg. Mood',
        hours: 'hours',
        minutes: 'min',
        alerts: 'Health Alerts',
        detailedReadings: 'Detailed Readings',
        date: 'Date',
        glucose: 'Glucose',
        bp: 'Blood Pressure',
        sleep: 'Sleep',
        activity: 'Activity',
        stress: 'Stress',
        clinicalNotes: 'Clinical Notes',
        noData: 'No data recorded',
        disclaimer: 'This report is for informational purposes only and should not replace professional medical advice.',
        appName: 'CareMate'
      };
    } else {
      return {
        title: 'Rapport de Résumé Santé',
        generatedOn: 'Généré le',
        patientInfo: 'Informations Patient',
        name: 'Nom',
        age: 'Âge',
        years: 'ans',
        healthGoal: 'Objectif Santé',
        daysTracked: 'Jours Suivis',
        days: 'jours',
        weeklyOverview: 'Aperçu Hebdomadaire (7 derniers jours)',
        avgGlucose: 'Glycémie Moy.',
        avgBP: 'Tension Moy.',
        avgSleep: 'Sommeil Moy.',
        avgActivity: 'Activité Moy.',
        avgStress: 'Stress Moy.',
        avgMood: 'Humeur Moy.',
        hours: 'heures',
        minutes: 'min',
        alerts: 'Alertes Santé',
        detailedReadings: 'Lectures Détaillées',
        date: 'Date',
        glucose: 'Glycémie',
        bp: 'Tension',
        sleep: 'Sommeil',
        activity: 'Activité',
        stress: 'Stress',
        clinicalNotes: 'Notes Cliniques',
        noData: 'Aucune donnée enregistrée',
        disclaimer: 'Ce rapport est à titre informatif seulement et ne doit pas remplacer un avis médical professionnel.',
        appName: 'CareMate'
      };
    }
  }

  downloadPDF(blob: Blob, filename: string = 'health-summary.pdf'): void {
    // Ensure filename has .pdf extension
    const pdfFilename = filename.endsWith('.pdf') ? filename : `${filename.replace(/\.(html?|txt)$/i, '')}.pdf`;
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pdfFilename;
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export const pdfExportService = new PDFExportService();
