import { Home, TrendingUp, FileText } from 'lucide-react';

interface BottomNavProps {
  active: 'home' | 'trends' | 'summary';
  onNavigate: (tab: 'home' | 'trends' | 'summary') => void;
  labels: {
    home: string;
    trends: string;
    summary: string;
  };
}

/**
 * Bottom Navigation matching Figma specs:
 * - Height: 72px fixed
 * - Padding: 8px vertical, 0px horizontal
 * - Nav item spacing: 4px vertical gap between icon and text
 * - Nav item padding: 8px vertical, 24px horizontal
 * - Icon size: 24x24px
 * - Label: Inter Medium 12px, 16px line height
 * - Active color: #2563EB
 * - Inactive color: #6B7280
 * - Shadow: 0px -1px 3px rgba(0,0,0,0.05)
 * - Touch target: 44px+ for accessibility
 */
export function BottomNav({ active, onNavigate, labels }: BottomNavProps) {
  const items = [
    { id: 'home' as const, icon: Home, label: labels.home },
    { id: 'trends' as const, icon: TrendingUp, label: labels.trends },
    { id: 'summary' as const, icon: FileText, label: labels.summary },
  ];
  
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 h-[72px] bg-white border-t border-[#E5E7EB]"
      style={{ boxShadow: '0px -1px 3px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="max-w-md mx-auto h-full flex items-center justify-between px-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-6 min-w-[44px] min-h-[44px] transition-colors ${
                isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs leading-4">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
