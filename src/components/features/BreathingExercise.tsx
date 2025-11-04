import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { HealthCard } from '../health/HealthCard';
import { HealthButton } from '../health/HealthButton';

interface BreathingExerciseProps {
  onComplete?: () => void;
}

type Phase = 'inhale' | 'hold' | 'exhale' | 'rest';

/**
 * Guided Breathing Exercise Component
 * Implements 4-7-8 breathing technique for stress relief
 * - Inhale: 4 seconds
 * - Hold: 7 seconds
 * - Exhale: 8 seconds
 */
export function BreathingExercise({ onComplete }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>('inhale');
  const [secondsRemaining, setSecondsRemaining] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [totalCycles] = useState(4);

  const phaseConfig = {
    inhale: { duration: 4, next: 'hold' as Phase, text: 'Breathe In', color: '#2563EB', instruction: 'Inhale deeply through your nose' },
    hold: { duration: 7, next: 'exhale' as Phase, text: 'Hold', color: '#F59E0B', instruction: 'Hold your breath gently' },
    exhale: { duration: 8, next: 'rest' as Phase, text: 'Breathe Out', color: '#10B981', instruction: 'Exhale slowly through your mouth' },
    rest: { duration: 2, next: 'inhale' as Phase, text: 'Rest', color: '#6B7280', instruction: 'Relax for a moment' },
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          const currentPhase = phaseConfig[phase];
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
          return phaseConfig[nextPhase].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, cyclesCompleted, totalCycles, onComplete]);

  const handleStart = () => {
    setIsActive(true);
    setPhase('inhale');
    setSecondsRemaining(4);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsRemaining(4);
    setCyclesCompleted(0);
  };

  const currentConfig = phaseConfig[phase];
  const progress = ((currentConfig.duration - secondsRemaining) / currentConfig.duration) * 100;

  return (
    <HealthCard>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-gray-900">Breathing Exercise</h3>
          <p className="text-sm text-gray-600">
            4-7-8 Technique • {cyclesCompleted}/{totalCycles} cycles
          </p>
        </div>

        {/* Breathing Circle */}
        <div className="flex items-center justify-center py-8">
          <div className="relative">
            {/* Outer ring - progress */}
            <svg className="w-64 h-64 -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="8"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke={currentConfig.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 120}`}
                strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>

            {/* Center content */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ 
                transform: isActive && (phase === 'inhale') 
                  ? 'scale(1.1)' 
                  : isActive && phase === 'exhale' 
                  ? 'scale(0.9)' 
                  : 'scale(1)',
                transition: `transform ${currentConfig.duration}s ease-in-out`
              }}
            >
              <p className="text-sm text-gray-600 mb-2">{currentConfig.text}</p>
              <p 
                className="text-6xl mb-2"
                style={{ color: currentConfig.color }}
              >
                {secondsRemaining}
              </p>
              <p className="text-xs text-gray-500 text-center px-8">
                {currentConfig.instruction}
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
              {cyclesCompleted > 0 ? 'Resume' : 'Start'}
            </HealthButton>
          ) : (
            <HealthButton
              variant="secondary"
              size="large"
              onClick={handlePause}
              className="flex-1"
            >
              <Pause className="w-5 h-5" />
              Pause
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
          <p className="text-sm text-gray-900">Benefits:</p>
          <ul className="text-xs text-gray-600 space-y-1 pl-4">
            <li>• Reduces anxiety and stress</li>
            <li>• Lowers heart rate and blood pressure</li>
            <li>• Improves focus and mental clarity</li>
            <li>• Helps with sleep when done before bed</li>
          </ul>
        </div>
      </div>
    </HealthCard>
  );
}
