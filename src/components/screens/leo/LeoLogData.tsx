import React, { useState } from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { ArrowLeft } from 'lucide-react';
import { Slider } from '../../ui/slider';

interface LeoLogDataProps {
  onBack: () => void;
  onSave: () => void;
}

export function LeoLogData({ onBack, onSave }: LeoLogDataProps) {
  const [mood, setMood] = useState('');
  const [sleep, setSleep] = useState([7]);
  const [screenTime, setScreenTime] = useState([4]);
  const [activity, setActivity] = useState(false);
  
  const moodOptions = [
    { emoji: '😢', label: 'Rough', value: 'rough' },
    { emoji: '😕', label: 'Meh', value: 'meh' },
    { emoji: '😊', label: 'Good', value: 'good' },
    { emoji: '😄', label: 'Great', value: 'great' },
    { emoji: '🔥', label: 'Amazing', value: 'amazing' },
  ];
  
  const handleSave = () => {
    onSave();
  };
  
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900">How Was Your Day?</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">😊 How are you feeling?</h3>
            <div className="flex justify-between gap-2">
              {moodOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setMood(option.value)}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                    mood === option.value
                      ? 'border-[#2563EB] bg-[#DBEAFE]'
                      : 'border-[#E5E7EB] bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-xs text-gray-900">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">😴 Sleep Last Night</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Hours</span>
                <span className="text-2xl text-[#2563EB]">{sleep[0]}h</span>
              </div>
              <Slider
                value={sleep}
                onValueChange={setSleep}
                min={0}
                max={12}
                step={0.5}
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-600">You need 8-10 hours for optimal health</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">📱 Screen Time Today</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Hours</span>
                <span className="text-2xl text-[#2563EB]">{screenTime[0]}h</span>
              </div>
              <Slider
                value={screenTime}
                onValueChange={setScreenTime}
                min={0}
                max={12}
                step={0.5}
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-600">Outside of school/homework</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">💪 Did you move today?</h3>
            <button
              onClick={() => setActivity(!activity)}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                activity
                  ? 'border-[#2563EB] bg-[#DBEAFE]'
                  : 'border-[#E5E7EB] bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900">At least 20 minutes of activity</span>
                <span className="text-2xl">{activity ? '✅' : '⬜'}</span>
              </div>
            </button>
            <p className="text-xs text-gray-600">Sports, walking, biking, dancing - anything counts!</p>
          </div>
        </HealthCard>
        
        <div className="grid grid-cols-2 gap-4">
          <HealthButton
            variant="secondary"
            onClick={onBack}
            className="w-full"
          >
            Cancel
          </HealthButton>
          <HealthButton
            variant="primary"
            onClick={handleSave}
            className="w-full"
          >
            Save
          </HealthButton>
        </div>
      </div>
    </div>
  );
}
