import React, { useState } from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthInput } from '../../health/HealthInput';
import { HealthCard } from '../../health/HealthCard';
import { ArrowLeft } from 'lucide-react';
import { Slider } from '../../ui/slider';
import { useApp } from '../../../App';
import { getTranslation } from '../../../services/translations';

interface AndreLogDataProps {
  onBack: () => void;
  onSave: () => void;
}

export function AndreLogData({ onBack, onSave }: AndreLogDataProps) {
  const { language } = useApp();
  const t = getTranslation(language);
  const log = t.logForm;
  const [bloodSugar, setBloodSugar] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [sleep, setSleep] = useState([7]);
  const [steps, setSteps] = useState('');
  
  const handleSave = () => {
    // In a real app, this would save to a database
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
          <h1 className="text-gray-900">{log.title}</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">{log.glucoseHeading}</h3>
            <HealthInput
              label={log.glucoseLabel}
              type="number"
              value={bloodSugar}
              onChange={setBloodSugar}
              placeholder={log.exampleGlucose}
            />
            <p className="text-xs text-gray-600">{log.glucoseTarget}</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">{log.bloodPressureHeading}</h3>
            <div className="grid grid-cols-2 gap-4">
              <HealthInput
                label={log.systolic}
                type="number"
                value={systolic}
                onChange={setSystolic}
                placeholder="120"
              />
              <HealthInput
                label={log.diastolic}
                type="number"
                value={diastolic}
                onChange={setDiastolic}
                placeholder="80"
              />
            </div>
            <p className="text-xs text-gray-600">{log.bloodPressureTarget}</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">{log.sleepHeading}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{log.sleepHours}</span>
                <span className="text-2xl text-[#2563EB]">
                  {sleep[0]} {t.units.hours}
                </span>
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
            <p className="text-xs text-gray-600">{log.sleepRecommended}</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">{log.stepsHeading}</h3>
            <HealthInput
              label={log.stepsLabel}
              type="number"
              value={steps}
              onChange={setSteps}
              placeholder={log.exampleSteps}
            />
            <p className="text-xs text-gray-600">{log.stepsGoal}</p>
          </div>
        </HealthCard>
        
        <div className="grid grid-cols-2 gap-4">
          <HealthButton
            variant="secondary"
            onClick={onBack}
            className="w-full"
          >
            {t.cancel}
          </HealthButton>
          <HealthButton
            variant="primary"
            onClick={handleSave}
            className="w-full"
          >
            {t.save}
          </HealthButton>
        </div>
      </div>
    </div>
  );
}
