import React from 'react';
import { AlertCircle } from 'lucide-react';

interface HealthInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  type?: 'text' | 'number' | 'email';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Input component matching Figma specs:
 * - Height: 48px
 * - Padding: 12px vertical, 16px horizontal
 * - Border radius: 8px
 * - Border: 1px solid #E5E7EB (default), 2px solid #2563EB (focus)
 * - Label spacing: 8px below label
 * - Error icon: 12x12px with 4px spacing
 */
export function HealthInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  type = 'text',
  leftIcon,
  rightIcon,
}: HealthInputProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm text-[#6B7280]">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] w-5 h-5">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full h-12 px-4 rounded-lg border transition-all duration-200
            ${leftIcon ? 'pl-12' : ''}
            ${rightIcon ? 'pr-12' : ''}
            ${error 
              ? 'border-2 border-[#EF4444] focus:border-[#EF4444] focus:ring-0' 
              : 'border border-[#E5E7EB] focus:border-2 focus:border-[#2563EB] focus:ring-0'
            }
            ${disabled ? 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed opacity-60' : 'bg-white text-[#111827] placeholder:text-[#9CA3AF]'}
            outline-none
          `}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] w-5 h-5">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle className="w-3 h-3 text-[#EF4444]" />
          <p className="text-xs text-[#EF4444]">{error}</p>
        </div>
      )}
    </div>
  );
}
