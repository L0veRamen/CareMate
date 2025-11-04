import React, { useState } from 'react';
import { HealthButton } from '../../health/HealthButton';
import { HealthInput } from '../../health/HealthInput';
import { HealthCard } from '../../health/HealthCard';
import { ArrowLeft } from 'lucide-react';
import { Slider } from '../../ui/slider';

interface AndreLogDataProps {
  onBack: () => void;
  onSave: () => void;
}

export function AndreLogData({ onBack, onSave }: AndreLogDataProps) {
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
          <h1 className="text-gray-900">Enregistrer les données</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">🩸 Glycémie</h3>
            <HealthInput
              label="Taux de glycémie (mmol/L)"
              type="number"
              value={bloodSugar}
              onChange={setBloodSugar}
              placeholder="Ex: 6.5"
            />
            <p className="text-xs text-gray-600">Cible: 4.0 - 7.0 mmol/L</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">❤️ Tension artérielle</h3>
            <div className="grid grid-cols-2 gap-4">
              <HealthInput
                label="Systolique"
                type="number"
                value={systolic}
                onChange={setSystolic}
                placeholder="120"
              />
              <HealthInput
                label="Diastolique"
                type="number"
                value={diastolic}
                onChange={setDiastolic}
                placeholder="80"
              />
            </div>
            <p className="text-xs text-gray-600">Cible: {'<130/80 mmHg'}</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">😴 Heures de sommeil</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Heures</span>
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
            <p className="text-xs text-gray-600">Recommandé: 7-9 heures</p>
          </div>
        </HealthCard>
        
        <HealthCard>
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-4">🚶 Nombre de pas</h3>
            <HealthInput
              label="Pas aujourd'hui"
              type="number"
              value={steps}
              onChange={setSteps}
              placeholder="Ex: 5000"
            />
            <p className="text-xs text-gray-600">Objectif: 5,000 pas/jour</p>
          </div>
        </HealthCard>
        
        <div className="grid grid-cols-2 gap-4">
          <HealthButton
            variant="secondary"
            onClick={onBack}
            className="w-full"
          >
            Annuler
          </HealthButton>
          <HealthButton
            variant="primary"
            onClick={handleSave}
            className="w-full"
          >
            Enregistrer
          </HealthButton>
        </div>
      </div>
    </div>
  );
}
