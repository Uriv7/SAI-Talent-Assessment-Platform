import React, { useState, useEffect } from 'react';
import { MessageCircle, Volume2, VolumeX, Sparkles, Target, TrendingUp, Brain, Zap } from 'lucide-react';

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
  const [isAnimating, setIsAnimating] = useState(false);

  const coachTips = {
    'sprint-100m': [
      { type: 'technique', message: "Keep your head up and eyes focused on the finish line! Drive with your arms for maximum speed." },
      { type: 'correction', message: "Try to pump your arms more vigorously and maintain a slight forward lean." },
      { type: 'motivation', message: "Explosive start! You're hitting great stride frequency - push through to the finish!" },
      { type: 'achievement', message: "Outstanding performance! You're in the top 15% for your age group!" }
    ],
    'sit-ups': [
      { type: 'correction', message: "Keep your back straight and engage your core muscles. Avoid pulling on your neck." },
      { type: 'technique', message: "Control the movement - focus on quality over speed. Breathe out on the way up." },
      { type: 'motivation', message: "Great rhythm! You're maintaining excellent form - keep pushing!" },
      { type: 'achievement', message: "Incredible endurance! You've exceeded the national average!" }
    ],
    'vertical-jump': [
      { type: 'technique', message: "Bend your knees deeper and swing your arms up explosively for maximum power." },
      { type: 'correction', message: "Land softly on the balls of your feet and use your arms to generate upward momentum." },
      { type: 'motivation', message: "Perfect form! You're showing excellent explosive power!" },
      { type: 'achievement', message: "Amazing jump height! You're in the elite category for vertical leap!" }
    ],
    'shuttle-run': [
      { type: 'technique', message: "Stay low during direction changes and use short, quick steps for better agility." },
      { type: 'correction', message: "Touch the line clearly at each turn and maintain your speed through the changes." },
      { type: 'motivation', message: "Excellent agility! Your acceleration and deceleration are spot on!" },
      { type: 'achievement', message: "Outstanding agility score! You're showing elite-level coordination!" }
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
      setIsAnimating(true);
      
      // Auto-speak the tip if audio is enabled
      if (audioEnabled) {
        setTimeout(() => speakTip(newTip.message), 500);
      }
      
      setTimeout(() => setIsAnimating(false), 2000);
    }
  }, [isActive, testType, performanceData]);

  const speakTip = (message: string) => {
    if (audioEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Female')) || null;
      speechSynthesis.speak(utterance);
    }
  };

  const getTypeIcon = (type: CoachTip['type']) => {
    switch (type) {
      case 'technique': return <Target className="h-4 w-4" />;
      case 'motivation': return <Sparkles className="h-4 w-4" />;
      case 'correction': return <TrendingUp className="h-4 w-4" />;
      case 'achievement': return <Zap className="h-4 w-4" />;
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

  const getTypeGradient = (type: CoachTip['type']) => {
    switch (type) {
      case 'technique': return 'from-blue-500 to-cyan-500';
      case 'motivation': return 'from-green-500 to-emerald-500';
      case 'correction': return 'from-orange-500 to-yellow-500';
      case 'achievement': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Current Tip Bubble */}
      {currentTip && !isExpanded && (
        <div className={`mb-4 max-w-sm p-4 rounded-2xl shadow-2xl border-2 backdrop-blur-md bg-white/95 ${
          isAnimating ? 'animate-bounce-gentle' : ''
        } ${getTypeColor(currentTip.type)} transition-all duration-500 hover:scale-105`}>
          <div className="flex items-start space-x-3">
            <div className={`flex-shrink-0 mt-1 p-2 rounded-full bg-gradient-to-r ${getTypeGradient(currentTip.type)}`}>
              {getTypeIcon(currentTip.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-bold text-purple-600">AI COACH</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">{currentTip.message}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs opacity-75 font-medium">
                  {currentTip.type.toUpperCase()} TIP
                </span>
                <button
                  onClick={() => speakTip(currentTip.message)}
                  className="p-1.5 rounded-full hover:bg-white/30 transition-colors group"
                >
                  {audioEnabled ? 
                    <Volume2 className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" /> : 
                    <VolumeX className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  }
                </button>
              </div>
            </div>
          </div>
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-20 animate-pulse"></div>
        </div>
      )}

      {/* Coach Avatar */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 flex items-center justify-center relative overflow-hidden group"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative z-10">
            <Brain className="h-6 w-6 text-purple-600 group-hover:rotate-12 transition-transform" />
          </div>
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-spin opacity-30"></div>
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-green-600 animate-ping opacity-20"></div>
        </button>
        
        {tips.length > 0 && (
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-xs text-white font-bold">{tips.length}</span>
          </div>
        )}
      </div>

      {/* Expanded Coach Panel */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Performance Coach</h3>
                    <p className="text-xs text-blue-100">Powered by Advanced ML</p>
                  </div>
                </div>
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  {audioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          </div>

          <div className="max-h-80 overflow-y-auto p-6 space-y-4">
            {tips.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-sm font-medium">Ready to Coach You!</p>
                <p className="text-xs mt-1">Start a test to receive personalized AI coaching tips</p>
              </div>
            ) : (
              tips.map((tip, index) => (
                <div key={tip.id} className={`p-4 rounded-xl border-2 backdrop-blur-sm bg-white/80 ${getTypeColor(tip.type)} hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 mt-0.5 p-2 rounded-full bg-gradient-to-r ${getTypeGradient(tip.type)}`}>
                      {getTypeIcon(tip.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-bold opacity-75">
                          {tip.type.toUpperCase()}
                        </span>
                        <div className="w-1 h-1 bg-current rounded-full opacity-50"></div>
                        <span className="text-xs opacity-75">
                          {tip.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{tip.message}</p>
                      <button
                        onClick={() => speakTip(tip.message)}
                        className="mt-2 p-1.5 rounded-full hover:bg-white/30 transition-colors group"
                      >
                        <Volume2 className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Sparkles className="h-3 w-3" />
              <span>Personalized coaching powered by AI</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}