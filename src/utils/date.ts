import type { Language } from '../services/types';

const LOCALES: Record<Language, string> = {
  en: 'en-CA',
  fr: 'fr-CA'
};

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

/**
 * Formats today's date for dashboard headers using the current language.
 * Output matches the style shown in the existing mock (e.g., Sunday, October 5, 2025).
 */
export function formatDashboardDate(language: Language, date: Date = new Date()): string {
  const locale = LOCALES[language] ?? 'en-CA';
  const formatted = date.toLocaleDateString(locale, DATE_FORMAT);
  // Ensure the first character is uppercase even if locale returns lowercase (e.g., French weekday names).
  return formatted.charAt(0).toLocaleUpperCase(locale) + formatted.slice(1);
}

