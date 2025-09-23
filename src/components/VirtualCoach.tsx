import React, { useState, useEffect } from 'react';
import { MessageCircle, Volume2, VolumeX, Sparkles, Target, TrendingUp } from 'lucide-react';

interface CoachTip {
  id: string;
  message: string;
  audio?: string;
  type: 'technique' | 'motivation' | 'correction' | 'achievement';
  timestamp: Date;
}

interface VirtualCoachProps {
  testType?: string;
  performanceData?: any;
  isActive?: boolean;
}

export default function VirtualCoach({ testType, performanceData, isActive = false }: VirtualCoachProps) {
  const [tips, setTips] = useState<CoachTip[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [currentTip, setCurrentTip] = useState<CoachTip | null>(null);

  const coachTips = {
    'sprint-100m': [
      { type: 'technique', message: "Keep your head up and eyes focused on the finish line!" },
      { type: 'correction', message: "Try to pump your arms more vigorously for better speed." },
      { type: 'motivation', message: "Great explosive start! Maintain that power through the finish!" }
    ],
    'sit-ups': [
      { type: 'correction', message: "Keep your back straight and engage your core muscles." },
      { type: 'technique', message: "Control the movement - don't rush, focus on form." },
      { type: 'motivation', message: "You're doing great! Push through for those last few reps!" }
    ],
    'vertical-jump': [
      { type: 'technique', message: "Bend your knees deeper before jumping for maximum power." },
      { type: 'correction', message: "Use your arms to generate upward momentum." },
      { type: 'achievement', message: "Excellent jump height! You're in the top percentile!" }
    ]
  };

  useEffect(() => {
    if (isActive && testType) {
      const testTips = coachTips[testType as keyof typeof coachTips] || [];
      const randomTip = testTips[Math.floor(Math.random() * testTips.length)];
      
      const newTip: CoachTip = {
        id: Date.now().toString(),
        message: randomTip.message,
        type: randomTip.type as CoachTip['type'],
        timestamp: new Date()
      };

      setCurrentTip(newTip);
      setTips(prev => [newTip, ...prev.slice(0, 4)]);
    }
  }, [isActive, testType, performanceData]);

  const speakTip = (message: string) => {
    if (audioEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const getTypeIcon = (type: CoachTip['type']) => {
    switch (type) {
      case 'technique': return <Target className="h-4 w-4" />;
      case 'motivation': return <Sparkles className="h-4 w-4" />;
      case 'correction': return <TrendingUp className="h-4 w-4" />;
      case 'achievement': return <Target className="h-4 w-4" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: CoachTip['type']) => {
    switch (type) {
      case 'technique': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'motivation': return 'bg-green-100 text-green-800 border-green-200';
      case 'correction': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'achievement': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Current Tip Bubble */}
      {currentTip && !isExpanded && (
        <div className={`mb-4 max-w-sm p-4 rounded-2xl shadow-lg border-2 animate-bounce-gentle ${getTypeColor(currentTip.type)}`}>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getTypeIcon(currentTip.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{currentTip.message}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs opacity-75">AI Coach</span>
                <button
                  onClick={() => speakTip(currentTip.message)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  {audioEnabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coach Avatar */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
        </button>
        
        {tips.length > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">{tips.length}</span>
          </div>
        )}
      </div>

      {/* Expanded Coach Panel */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Coach</h3>
                  <p className="text-xs text-blue-100">Your Personal Trainer</p>
                </div>
              </div>
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto p-4 space-y-3">
            {tips.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Start a test to receive personalized coaching tips!</p>
              </div>
            ) : (
              tips.map((tip) => (
                <div key={tip.id} className={`p-3 rounded-lg border ${getTypeColor(tip.type)}`}>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-0.5">
                      {getTypeIcon(tip.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{tip.message}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs opacity-75">
                          {tip.timestamp.toLocaleTimeString()}
                        </span>
                        <button
                          onClick={() => speakTip(tip.message)}
                          className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}