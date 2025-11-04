import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  type: 'warning' | 'error' | 'success' | 'info';
  children: React.ReactNode;
  className?: string;
  title?: string;
}

/**
 * Alert Banner matching Figma specs:
 * - Padding: 16px (p-4)
 * - Border radius: 8px
 * - Icon size: 24x24px
 * - Gap between icon and content: 12px (gap-3)
 * - Title font: Inter Semibold 14px
 * - Description: Inter Regular 14px, 80% opacity
 */
export function AlertBanner({ type, children, className = '', title }: AlertBannerProps) {
  const config = {
    warning: {
      bg: 'bg-[#FEF3C7]',
      text: 'text-[#92400E]',
      iconColor: 'text-[#F59E0B]',
      icon: AlertTriangle,
    },
    error: {
      bg: 'bg-[#FEE2E2]',
      text: 'text-[#991B1B]',
      iconColor: 'text-[#EF4444]',
      icon: AlertCircle,
    },
    success: {
      bg: 'bg-[#D1FAE5]',
      text: 'text-[#065F46]',
      iconColor: 'text-[#10B981]',
      icon: CheckCircle,
    },
    info: {
      bg: 'bg-[#DBEAFE]',
      text: 'text-[#1E40AF]',
      iconColor: 'text-[#3B82F6]',
      icon: Info,
    },
  };
  
  const { bg, text, iconColor, icon: Icon } = config[type];
  
  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg ${bg} ${className}`}>
      <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0`} />
      <div className={`flex-1 ${text} space-y-1`}>
        {title && (
          <p className="text-sm leading-5">{title}</p>
        )}
        <div className={`text-sm leading-5 ${!title ? 'opacity-100' : 'opacity-80'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
