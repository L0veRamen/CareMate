import React from 'react';

interface HealthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

/**
 * Button component matching Figma specs:
 * - Height: 48px (medium), 56px (large)
 * - Padding: 12px vertical, 24px horizontal
 * - Border radius: 8px
 * - 8px spacing between icon and text
 * - Shadow: 0px 1px 2px rgba(0,0,0,0.05)
 */
export function HealthButton({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button',
  icon,
}: HealthButtonProps) {
  const baseStyles = 'rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm';
  
  // Exact heights from Figma: 48px medium, 56px large
  const sizeStyles = {
    medium: 'h-12 px-6 py-3', // 48px height, 24px horizontal padding, 12px vertical
    large: 'h-14 px-6 py-3', // 56px height
  };
  
  const variantStyles = {
    primary: disabled 
      ? 'bg-[#9CA3AF] text-white/60 cursor-not-allowed opacity-50'
      : 'bg-[#2563EB] text-white hover:bg-[#1E40AF] active:bg-[#1E3A8A] active:scale-[0.97]',
    secondary: disabled
      ? 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed opacity-60 border border-[#E5E7EB]'
      : 'bg-white text-[#111827] hover:bg-[#F9FAFB] active:bg-[#F3F4F6] border border-[#E5E7EB]',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
}
