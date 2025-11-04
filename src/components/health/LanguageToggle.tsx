import React from 'react';

interface LanguageToggleProps {
  activeLanguage: 'en' | 'fr';
  onLanguageChange: (language: 'en' | 'fr') => void;
}

/**
 * Language Toggle matching Figma specs:
 * - Container padding: 4px
 * - Container border radius: 8px
 * - Container fill: #F3F4F6
 * - Option padding: 8px vertical, 16px horizontal
 * - Option border radius: 6px
 * - Active background: #FFFFFF
 * - Inactive background: transparent
 * - Gap between flag and text: 6px
 * - Flag size: 20x20px (emoji)
 * - Text: Inter Medium 14px
 * - Active text color: #111827
 * - Inactive text color: #6B7280
 */
export function LanguageToggle({ activeLanguage, onLanguageChange }: LanguageToggleProps) {
  const options = [
    { code: 'en' as const, flag: '🇬🇧', label: 'English' },
    { code: 'fr' as const, flag: '🇫🇷', label: 'Français' },
  ];
  
  return (
    <div className="inline-flex gap-0 p-1 bg-[#F3F4F6] rounded-lg">
      {options.map((option) => {
        const isActive = activeLanguage === option.code;
        
        return (
          <button
            key={option.code}
            onClick={() => onLanguageChange(option.code)}
            className={`
              flex items-center gap-1.5 px-4 py-2 rounded-md transition-all
              ${isActive 
                ? 'bg-white text-[#111827] shadow-sm' 
                : 'bg-transparent text-[#6B7280] hover:text-[#111827]'
              }
            `}
          >
            <span className="text-base leading-none">{option.flag}</span>
            <span className="text-sm">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
