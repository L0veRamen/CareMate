import { useState } from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthCard } from '../../health/HealthCard';
import { ArrowLeft } from 'lucide-react';

interface RubyProfileProps {
  onBack: () => void;
  onComplete: () => void;
}

export function RubyProfile({ onBack, onComplete }: RubyProfileProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  
  const goals = [
    { id: 'sleep', emoji: '😴', label: 'Better Sleep' },
    { id: 'stress', emoji: '😌', label: 'Manage Stress' },
    { id: 'fitness', emoji: '💪', label: 'Stay Active' },
    { id: 'mindfulness', emoji: '🧘', label: 'Practice Mindfulness' },
    { id: 'nutrition', emoji: '🥗', label: 'Eat Healthier' },
    { id: 'energy', emoji: '⚡', label: 'More Energy' },
  ];
  
  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };
  
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900">Set Your Goals</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <div className="space-y-3">
          <h2 className="text-gray-900">What do you want to focus on?</h2>
          <p className="text-sm text-gray-600">Select 2-3 goals to personalize your recommendations</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {goals.map((goal) => {
            const isSelected = selectedGoals.includes(goal.id);
            return (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#DBEAFE]'
                    : 'border-[#E5E7EB] bg-white'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{goal.emoji}</span>
                  <span className={`text-sm text-center ${
                    isSelected ? 'text-[#2563EB]' : 'text-gray-900'
                  }`}>
                    {goal.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        
        <HealthCard>
          <div className="space-y-3">
            <h3 className="text-gray-900">About You</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-[#E5E7EB]">
                <span className="text-gray-600">Age</span>
                <span className="text-gray-900">34</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E5E7EB]">
                <span className="text-gray-600">Primary Care</span>
                <span className="text-[#F59E0B]">No family doctor</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Lifestyle</span>
                <span className="text-gray-900">Working professional</span>
              </div>
            </div>
          </div>
        </HealthCard>
        
        <div className="bg-[#DBEAFE] rounded-lg p-4">
          <p className="text-sm text-[#1E40AF]">
            💡 Tip: Don't have a family doctor? CareMate can help you track your health 
            and generate summaries for walk-in clinic visits.
          </p>
        </div>
        
        <HealthButton
          size="large"
          variant="primary"
          onClick={onComplete}
          disabled={selectedGoals.length === 0}
          className="w-full"
        >
          {selectedGoals.length === 0 ? 'Select at least 1 goal' : 'Complete Setup'}
        </HealthButton>
      </div>
    </div>
  );
}
