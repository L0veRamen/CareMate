import { BookOpen } from 'lucide-react';
import { HealthCard } from './HealthCard';

interface RecommendationCardProps {
  emoji: string;
  category: string;
  action: string;
  rationale: string;
  onLearnMore?: () => void;
}

/**
 * Recommendation Card matching Figma specs:
 * - Spacing between header and content: 12px
 * - Header gap between emoji and title: 12px
 * - Content spacing: 8px between action and rationale
 * - Footer spacing: 8px padding top, 6px gap between icon and text
 * - Emoji size: 32x32px
 * - Divider: 1px solid #E5E7EB
 */
export function RecommendationCard({
  emoji,
  category,
  action,
  rationale,
  onLearnMore,
}: RecommendationCardProps) {
  return (
    <HealthCard>
      {/* Header - 12px gap */}
      <div className="flex items-center gap-3 pb-3">
        <span className="text-[32px] leading-none">{emoji}</span>
        <h3 className="flex-1 text-[#111827]">{category}</h3>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-[#E5E7EB] mb-3" />
      
      {/* Content - 8px spacing */}
      <div className="space-y-2">
        <p className="text-[#111827] leading-6">{action}</p>
        <p className="text-sm text-[#6B7280] leading-5">{rationale}</p>
      </div>
      
      {/* Footer with Learn More link */}
      {onLearnMore && (
        <div className="pt-2 mt-2 border-t border-[#E5E7EB]">
          <button
            onClick={onLearnMore}
            className="flex items-center gap-1.5 text-[#2563EB] hover:text-[#1E40AF] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Learn more</span>
          </button>
        </div>
      )}
    </HealthCard>
  );
}
