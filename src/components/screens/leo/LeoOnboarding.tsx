import React from 'react';
import { HealthButton } from '../../health/HealthButton';
import { Shield, Lock, Eye } from 'lucide-react';

interface LeoOnboardingProps {
  onComplete: () => void;
}

export function LeoOnboarding({ onComplete }: LeoOnboardingProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-gray-900">Your Privacy Matters 🔒</h1>
            <p className="text-gray-600">
              Before we start, let's talk about keeping your info safe
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#D1FAE5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Your data is private</h3>
                <p className="text-sm text-gray-600">
                  We don't share your personal health info with anyone without your permission
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">You're in control</h3>
                <p className="text-sm text-gray-600">
                  You can delete your data anytime, and choose what to share with your doctor
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Secure & encrypted</h3>
                <p className="text-sm text-gray-600">
                  All your health data is encrypted and stored securely
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#DBEAFE] rounded-lg p-4">
            <p className="text-sm text-[#1E40AF]">
              💡 Questions about privacy? You can read our full privacy policy anytime in settings.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-md mx-auto">
          <HealthButton
            size="large"
            variant="primary"
            onClick={onComplete}
            className="w-full"
          >
            Got it, let's go! 🚀
          </HealthButton>
        </div>
      </div>
    </div>
  );
}
