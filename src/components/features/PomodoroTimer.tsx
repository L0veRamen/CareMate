import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, BookOpen } from 'lucide-react';
import { HealthCard } from '../health/HealthCard';
import { HealthButton } from '../health/HealthButton';

interface PomodoroTimerProps {
  onSessionComplete?: () => void;
}

type SessionType = 'focus' | 'shortBreak' | 'longBreak';

/**
 * Pomodoro Timer for Leo
 * - Focus: 25 minutes
 * - Short Break: 5 minutes
 * - Long Break: 15 minutes (after 4 focus sessions)
 */
export function PomodoroTimer({ onSessionComplete }: PomodoroTimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>('focus');
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // in seconds
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const sessionConfig = {
    focus: {
      duration: 25 * 60,
      label: 'Focus Time',
      emoji: '📚',
      color: '#2563EB',
      nextSession: 'shortBreak' as SessionType,
    },
    shortBreak: {
      duration: 5 * 60,
      label: 'Short Break',
      emoji: '☕',
      color: '#10B981',
      nextSession: 'focus' as SessionType,
    },
    longBreak: {
      duration: 15 * 60,
      label: 'Long Break',
      emoji: '🎉',
      color: '#F59E0B',
      nextSession: 'focus' as SessionType,
    },
  };

  useEffect(() => {
    if (!isActive || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSessionComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  const handleSessionComplete = () => {
    setIsActive(false);
    
    if (sessionType === 'focus') {
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);
      
      // After 4 pomodoros, take a long break
      if (newCompletedPomodoros % 4 === 0) {
        setSessionType('longBreak');
        setTimeRemaining(sessionConfig.longBreak.duration);
      } else {
        setSessionType('shortBreak');
        setTimeRemaining(sessionConfig.shortBreak.duration);
      }
    } else {
      setSessionType('focus');
      setTimeRemaining(sessionConfig.focus.duration);
    }
    
    if (onSessionComplete) onSessionComplete();
    
    // Play notification sound (browser notification)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Pomodoro Timer', {
        body: sessionType === 'focus' ? 'Time for a break!' : 'Ready to focus?',
        icon: '⏰',
      });
    }
  };

  const handleStart = () => {
    setIsActive(true);
    // Request notification permission on first start
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeRemaining(sessionConfig[sessionType].duration);
  };

  const handleSkip = () => {
    setIsActive(false);
    const nextSession = sessionConfig[sessionType].nextSession;
    setSessionType(nextSession);
    setTimeRemaining(sessionConfig[nextSession].duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentConfig = sessionConfig[sessionType];
  const progress = ((currentConfig.duration - timeRemaining) / currentConfig.duration) * 100;

  return (
    <HealthCard>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">{currentConfig.emoji}</span>
            <h3 className="text-gray-900">{currentConfig.label}</h3>
          </div>
          <div className="flex items-center justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < completedPomodoros % 4 ? 'bg-[#2563EB]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-600">
            {completedPomodoros} focus sessions completed today
          </p>
        </div>

        {/* Timer Circle */}
        <div className="flex items-center justify-center py-4">
          <div className="relative">
            {/* Outer ring - progress */}
            <svg className="w-56 h-56 -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="104"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="8"
              />
              <circle
                cx="112"
                cy="112"
                r="104"
                fill="none"
                stroke={currentConfig.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 104}`}
                strokeDashoffset={`${2 * Math.PI * 104 * (1 - progress / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.5s linear' }}
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p 
                className="text-5xl mb-2"
                style={{ color: currentConfig.color }}
              >
                {formatTime(timeRemaining)}
              </p>
              <p className="text-sm text-gray-600">
                {isActive ? 'In Progress' : 'Ready'}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-3">
          <div className="flex gap-3">
            {!isActive ? (
              <HealthButton
                variant="primary"
                size="large"
                onClick={handleStart}
                className="flex-1"
              >
                <Play className="w-5 h-5" />
                Start
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

          <HealthButton
            variant="secondary"
            size="medium"
            onClick={handleSkip}
            className="w-full"
          >
            Skip to {sessionConfig[currentConfig.nextSession].label}
          </HealthButton>
        </div>

        {/* Quick Session Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              setSessionType('focus');
              setTimeRemaining(sessionConfig.focus.duration);
              setIsActive(false);
            }}
            className={`p-2 rounded-lg text-xs transition-colors ${
              sessionType === 'focus'
                ? 'bg-[#2563EB] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-4 h-4 mx-auto mb-1" />
            Focus
          </button>
          <button
            onClick={() => {
              setSessionType('shortBreak');
              setTimeRemaining(sessionConfig.shortBreak.duration);
              setIsActive(false);
            }}
            className={`p-2 rounded-lg text-xs transition-colors ${
              sessionType === 'shortBreak'
                ? 'bg-[#10B981] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Coffee className="w-4 h-4 mx-auto mb-1" />
            Short
          </button>
          <button
            onClick={() => {
              setSessionType('longBreak');
              setTimeRemaining(sessionConfig.longBreak.duration);
              setIsActive(false);
            }}
            className={`p-2 rounded-lg text-xs transition-colors ${
              sessionType === 'longBreak'
                ? 'bg-[#F59E0B] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎉
            <span className="block mt-1">Long</span>
          </button>
        </div>

        {/* Tips */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <p className="text-sm text-gray-900">Study Tips:</p>
          <ul className="text-xs text-gray-600 space-y-1 pl-4">
            <li>• Eliminate distractions during focus time</li>
            <li>• Take breaks seriously - move around!</li>
            <li>• After 4 pomodoros, take a longer break</li>
            <li>• Track what you accomplished each session</li>
          </ul>
        </div>
      </div>
    </HealthCard>
  );
}
