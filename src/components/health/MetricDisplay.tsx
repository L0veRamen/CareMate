import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricDisplayProps {
  icon: string;
  label: string;
  value: string;
  unit?: string;
  status?: 'normal' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'stable';
  trendPercentage?: string;
}

/**
 * Health Metric Display matching Figma specs:
 * - Icon container: 40x40px with 8px padding, 8px border radius
 * - Icon background: Category color at 20% opacity
 * - Gap between sections: 16px
 * - Label: Inter Medium 12px, #6B7280, 0.5px letter spacing
 * - Value: Inter Bold 20px, #111827, 28px line height
 * - Trend indicators with icons: 16x16px
 */
export function MetricDisplay({ 
  icon, 
  label, 
  value, 
  unit, 
  status = 'normal', 
  trend,
  trendPercentage 
}: MetricDisplayProps) {
  const statusConfig = {
    normal: {
      valueColor: 'text-[#111827]',
      bgColor: 'bg-[#D1FAE5]',
      trendColor: 'text-[#10B981]',
    },
    warning: {
      valueColor: 'text-[#111827]',
      bgColor: 'bg-[#FEF3C7]',
      trendColor: 'text-[#F59E0B]',
    },
    critical: {
      valueColor: 'text-[#111827]',
      bgColor: 'bg-[#FEE2E2]',
      trendColor: 'text-[#EF4444]',
    },
  };
  
  const trendConfig = {
    up: { Icon: TrendingUp, color: 'text-[#EF4444]' },
    down: { Icon: TrendingDown, color: 'text-[#10B981]' },
    stable: { Icon: Minus, color: 'text-[#6B7280]' },
  };
  
  const config = statusConfig[status];
  const trendData = trend ? trendConfig[trend] : null;
  
  return (
    <div 
      className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4 flex items-center gap-4"
    >
      {/* Icon container */}
      <div className={`w-10 h-10 ${config.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <span className="text-xl">{icon}</span>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 space-y-0.5">
        <p className="text-xs text-[#6B7280] tracking-wide uppercase">{label}</p>
        <div className="flex items-baseline gap-1">
          <p className={`text-xl leading-7 ${config.valueColor}`}>
            {value}
          </p>
          {unit && (
            <span className="text-sm text-[#6B7280]">{unit}</span>
          )}
        </div>
      </div>
      
      {/* Trend indicator */}
      {trendData && (
        <div className={`flex items-center gap-1 ${trendData.color}`}>
          <trendData.Icon className="w-4 h-4" />
          {trendPercentage && (
            <span className="text-sm">{trendPercentage}</span>
          )}
        </div>
      )}
    </div>
  );
}
