import React, { useState } from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { ArrowLeft } from 'lucide-react';
import { Slider } from '../../ui/slider';

interface RubyLogDataProps {
  onBack: () => void;
  onSave: () => void;
}

export function RubyLogData({ onBack, onSave }: RubyLogDataProps) {
  const [stress, setStress] = useState([5]);
  const [sleep, setSleep] = useState([7]);
  const [activity, setActivity] = useState(false);
  const [mindfulness, setMindfulness] = useState([10]);
  
  const stressLabels = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
  
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
          <h1 className="text-gray-900">Log Your Day</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">😌 Stress Level</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">How stressed are you?</span>
                <span className="text-xl text-[#2563EB]">{stressLabels[stress[0] - 1]}</span>
              </div>
              <Slider
                value={stress}
                onValueChange={setStress}
                min={1}
                max={5}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>😌</span>
                <span>😐</span>
                <span>😰</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">😴 Sleep Duration</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Hours slept</span>
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
            <p className="text-xs text-gray-600">Recommended: 7-9 hours</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">💪 Physical Activity</h3>
            <button
              onClick={() => setActivity(!activity)}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                activity
                  ? 'border-[#2563EB] bg-[#DBEAFE]'
                  : 'border-[#E5E7EB] bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Did you exercise today?</span>
                <span className="text-2xl">{activity ? '✅' : '⬜'}</span>
              </div>
            </button>
            <p className="text-xs text-gray-600">At least 20 minutes of moderate activity</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">🧘 Mindfulness Practice</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Minutes practiced</span>
                <span className="text-2xl text-[#2563EB]">{mindfulness[0]} min</span>
              </div>
              <Slider
                value={mindfulness}
                onValueChange={setMindfulness}
                min={0}
                max={60}
                step={5}
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-600">Goal: 10 minutes daily</p>
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
