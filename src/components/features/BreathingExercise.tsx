import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { HealthCard } from '../health/HealthCard';
import { HealthButton } from '../health/HealthButton';

type Phase = 'inhale' | 'hold' | 'exhale' | 'rest';

interface BreathingExerciseContent {
  title: string;
  technique: string;
  cyclesLabel: string;
  phases: Record<
    Phase,
    {
      label: string;
      instruction: string;
    }
  >;
  controls: {
    start: string;
    resume: string;
    pause: string;
  };
  benefitsTitle: string;
  benefits: string[];
}

interface BreathingExerciseProps {
  content: BreathingExerciseContent;
  onComplete?: () => void;
}

const CIRCLE_SIZE = 224;
const CIRCLE_CENTER = CIRCLE_SIZE / 2;
const CIRCLE_RADIUS = 96;
const phaseMeta: Record<
  Phase,
  {
    duration: number;
    next: Phase;
    color: string;
  }
> = {
  inhale: { duration: 4, next: 'hold', color: '#2563EB' },
  hold: { duration: 7, next: 'exhale', color: '#F59E0B' },
  exhale: { duration: 8, next: 'rest', color: '#10B981' },
  rest: { duration: 2, next: 'inhale', color: '#6B7280' },
};

/**
 * Guided Breathing Exercise Component
 * Implements 4-7-8 breathing technique for stress relief
 * - Inhale: 4 seconds
 * - Hold: 7 seconds
 * - Exhale: 8 seconds
 */
export function BreathingExercise({ content, onComplete }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>('inhale');
  const [secondsRemaining, setSecondsRemaining] = useState(phaseMeta.inhale.duration);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [totalCycles] = useState(4);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          const currentPhase = phaseMeta[phase];
          const nextPhase = currentPhase.next;
          
          // If completing a full cycle (after exhale)
          if (phase === 'rest') {
            const newCyclesCompleted = cyclesCompleted + 1;
            setCyclesCompleted(newCyclesCompleted);
            
            // Check if we've completed all cycles
            if (newCyclesCompleted >= totalCycles) {
              setIsActive(false);
              if (onComplete) onComplete();
              return 0;
            }
          }
          
          setPhase(nextPhase);
          return phaseMeta[nextPhase].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, cyclesCompleted, totalCycles, onComplete]);

  const handleStart = () => {
    setIsActive(true);
    setPhase('inhale');
    setSecondsRemaining(phaseMeta.inhale.duration);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsRemaining(phaseMeta.inhale.duration);
    setCyclesCompleted(0);
  };

  const currentPhaseMeta = phaseMeta[phase];
  const currentPhaseCopy = content.phases[phase];
  const progress = ((currentPhaseMeta.duration - secondsRemaining) / currentPhaseMeta.duration) * 100;

  return (
    <HealthCard>
      <div className="space-y-5">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-gray-900">{content.title}</h3>
          <p className="text-sm text-gray-600">
            {content.technique} • {cyclesCompleted}/{totalCycles} {content.cyclesLabel}
          </p>
        </div>

        {/* Breathing Circle */}
        <div className="flex items-center justify-center py-6">
          <div className="relative w-56 h-56 mb-4">
            {/* Outer ring - progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx={CIRCLE_CENTER}
                cy={CIRCLE_CENTER}
                r={CIRCLE_RADIUS}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="8"
              />
              <circle
                cx={CIRCLE_CENTER}
                cy={CIRCLE_CENTER}
                r={CIRCLE_RADIUS}
                fill="none"
                stroke={currentPhaseMeta.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * CIRCLE_RADIUS}`}
                strokeDashoffset={`${2 * Math.PI * CIRCLE_RADIUS * (1 - progress / 100)}`}
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>

            {/* Center content */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 px-6"
              style={{ 
                transform: isActive && (phase === 'inhale') 
                  ? 'scale(1.08)' 
                  : isActive && phase === 'exhale' 
                  ? 'scale(0.94)' 
                  : 'scale(1)',
                transition: `transform ${currentPhaseMeta.duration}s ease-in-out`
              }}
            >
              <p className="text-sm text-gray-600">{currentPhaseCopy.label}</p>
              <p 
                className="text-5xl"
                style={{ color: currentPhaseMeta.color }}
              >
                {secondsRemaining}
              </p>
              <p className="text-xs text-gray-500">
                {currentPhaseCopy.instruction}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          {!isActive ? (
            <HealthButton
              variant="primary"
              size="large"
              onClick={handleStart}
              className="flex-1"
            >
              <Play className="w-5 h-5" />
              {cyclesCompleted > 0 ? content.controls.resume : content.controls.start}
            </HealthButton>
          ) : (
            <HealthButton
              variant="secondary"
              size="large"
              onClick={handlePause}
              className="flex-1"
            >
              <Pause className="w-5 h-5" />
              {content.controls.pause}
            </HealthButton>
          )}
          
          <HealthButton
            variant="secondary"
            size="large"
            onClick={handleReset}
          >
            <RotateCcw className="w-5 h-5" />
          </HealthButton>
        </div>

        {/* Benefits */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <p className="text-sm text-gray-900">{content.benefitsTitle}</p>
          <ul className="text-xs text-gray-600 space-y-1 pl-4">
            {content.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </HealthCard>
  );
}
