import React from 'react';

interface HealthCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component matching Figma specs:
 * - Padding: 20px all sides (5 in Tailwind = 20px)
 * - Border radius: 12px
 * - Border: 1px solid #E5E7EB
 * - Shadow: 0px 1px 3px rgba(0,0,0,0.1)
 * - Background: #FFFFFF
 */
export function HealthCard({ children, className = '' }: HealthCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl border border-[#E5E7EB] p-5 ${className}`}
      style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
    >
      {children}
    </div>
  );
}
