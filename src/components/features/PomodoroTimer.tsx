import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, BookOpen } from 'lucide-react';
import { HealthCard } from '../health/HealthCard';
import { HealthButton } from '../health/HealthButton';

type SessionType = 'focus' | 'shortBreak' | 'longBreak';

interface PomodoroTimerContent {
  sessions: {
    focus: { label: string; emoji: string };
    shortBreak: { label: string; emoji: string };
    longBreak: { label: string; emoji: string };
  };
  statsLabel: string;
  stateReady: string;
  stateInProgress: string;
  start: string;
  pause: string;
  skipTo: string;
  quickSessions: {
    focus: string;
    short: string;
    long: string;
  };
  tipsTitle: string;
  tips: string[];
  notifications: {
    title: string;
    focusComplete: string;
    breakComplete: string;
  };
}

interface PomodoroTimerProps {
  content: PomodoroTimerContent;
  onSessionComplete?: () => void;
}

/**
 * Pomodoro Timer for Leo
 * - Focus: 25 minutes
 * - Short Break: 5 minutes
 * - Long Break: 15 minutes (after 4 focus sessions)
 */
const CIRCLE_SIZE = 224;
const CIRCLE_CENTER = CIRCLE_SIZE / 2;
const CIRCLE_RADIUS = 96;

const sessionMeta: Record<
  SessionType,
  {
    duration: number;
    nextSession: SessionType;
    color: string;
  }
> = {
  focus: { duration: 25 * 60, nextSession: 'shortBreak', color: '#2563EB' },
  shortBreak: { duration: 5 * 60, nextSession: 'focus', color: '#10B981' },
  longBreak: { duration: 15 * 60, nextSession: 'focus', color: '#F59E0B' },
};

export function PomodoroTimer({ content, onSessionComplete }: PomodoroTimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>('focus');
  const [timeRemaining, setTimeRemaining] = useState(sessionMeta.focus.duration);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

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
        setTimeRemaining(sessionMeta.longBreak.duration);
      } else {
        setSessionType('shortBreak');
        setTimeRemaining(sessionMeta.shortBreak.duration);
      }
    } else {
      setSessionType('focus');
      setTimeRemaining(sessionMeta.focus.duration);
    }
    
    if (onSessionComplete) onSessionComplete();
    
    // Play notification sound (browser notification)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(content.notifications.title, {
        body: sessionType === 'focus'
          ? content.notifications.focusComplete
          : content.notifications.breakComplete,
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
    setTimeRemaining(sessionMeta[sessionType].duration);
  };

  const handleSkip = () => {
    setIsActive(false);
    const nextSession = sessionMeta[sessionType].nextSession;
    setSessionType(nextSession);
    setTimeRemaining(sessionMeta[nextSession].duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentMeta = sessionMeta[sessionType];
  const currentSessionCopy = content.sessions[sessionType];
  const nextSessionLabel = content.sessions[currentMeta.nextSession].label;
  const statsLabel = content.statsLabel.includes('{count}')
    ? content.statsLabel.replace('{count}', completedPomodoros.toString())
    : `${completedPomodoros} ${content.statsLabel}`;
  const skipLabel = content.skipTo.includes('{label}')
    ? content.skipTo.replace('{label}', nextSessionLabel)
    : `${content.skipTo} ${nextSessionLabel}`;
  const progress = ((currentMeta.duration - timeRemaining) / currentMeta.duration) * 100;

  return (
    <HealthCard>
      <div className="space-y-5">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">{currentSessionCopy.emoji}</span>
            <h3 className="text-gray-900">{currentSessionCopy.label}</h3>
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
            {statsLabel}
          </p>
        </div>

        {/* Timer Circle */}
        <div className="flex items-center justify-center py-4">
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
                stroke={currentMeta.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * CIRCLE_RADIUS}`}
                strokeDashoffset={`${2 * Math.PI * CIRCLE_RADIUS * (1 - progress / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.5s linear' }}
              />
            </svg>

            {/* Center content */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 px-6"
              style={{
                transform: isActive && sessionType === 'focus'
                  ? 'scale(1.05)'
                  : 'scale(1)',
                transition: `transform ${isActive ? 0.3 : 0.2}s ease-in-out`,
              }}
            >
              <p className="text-5xl" style={{ color: currentMeta.color }}>
                {formatTime(timeRemaining)}
              </p>
              <p className="text-sm text-gray-600">
                {isActive ? content.stateInProgress : content.stateReady}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-2">
          <div className="flex gap-3">
            {!isActive ? (
              <HealthButton
                variant="primary"
                size="large"
                onClick={handleStart}
                className="flex-1"
              >
                <Play className="w-5 h-5" />
                {content.start}
              </HealthButton>
            ) : (
              <HealthButton
                variant="secondary"
                size="large"
                onClick={handlePause}
                className="flex-1"
              >
                <Pause className="w-5 h-5" />
                {content.pause}
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

          <button
            onClick={handleSkip}
            className="w-full text-sm text-[#2563EB] font-medium rounded-lg border border-transparent hover:bg-blue-50 py-2 transition"
          >
            {skipLabel}
          </button>
        </div>

        {/* Quick Session Buttons */}
        <div className="pt-3 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-1.5">
            <button
              onClick={() => {
                setSessionType('focus');
                setTimeRemaining(sessionMeta.focus.duration);
                setIsActive(false);
              }}
              className={`flex flex-col items-center justify-center rounded-full border text-[11px] font-semibold py-2 transition-all ${
                sessionType === 'focus'
                  ? 'bg-[#2563EB] text-white border-[#2563EB]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <BookOpen
                className={`w-4 h-4 mb-0.5 ${
                  sessionType === 'focus' ? 'text-white' : 'text-[#2563EB]'
                }`}
              />
              {content.quickSessions.focus}
            </button>
            <button
              onClick={() => {
                setSessionType('shortBreak');
                setTimeRemaining(sessionMeta.shortBreak.duration);
                setIsActive(false);
              }}
              className={`flex flex-col items-center justify-center rounded-full border text-[11px] font-semibold py-2 transition-all ${
                sessionType === 'shortBreak'
                  ? 'bg-[#10B981] text-white border-[#10B981]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Coffee
                className={`w-4 h-4 mb-0.5 ${
                  sessionType === 'shortBreak' ? 'text-white' : 'text-[#10B981]'
                }`}
              />
              {content.quickSessions.short}
            </button>
            <button
              onClick={() => {
                setSessionType('longBreak');
                setTimeRemaining(sessionMeta.longBreak.duration);
                setIsActive(false);
              }}
              className={`flex flex-col items-center justify-center rounded-full border text-[11px] font-semibold py-2 transition-all ${
                sessionType === 'longBreak'
                  ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span
                className={`text-sm mb-0.5 ${
                  sessionType === 'longBreak' ? 'text-white' : 'text-[#F59E0B]'
                }`}
              >
                🎉
              </span>
              {content.quickSessions.long}
            </button>
          </div>
        </div>

        {/* Tips */}
        <div className="pt-3 border-t border-gray-200 space-y-1">
          <p className="text-sm text-gray-900">{content.tipsTitle}</p>
          <ul className="text-xs text-gray-600 space-y-1 pl-4">
            {content.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </HealthCard>
  );
}
