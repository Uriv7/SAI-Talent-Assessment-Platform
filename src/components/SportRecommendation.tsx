import React from 'react';
import { Target, Trophy, Zap, Heart, Dumbbell, Users } from 'lucide-react';

interface SportRecommendationProps {
  athleteData: {
    height: number;
    weight: number;
    age: number;
    testResults: Record<string, number>;
  };
}

interface SportSuggestion {
  sport: string;
  suitability: number;
  reasons: string[];
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

export default function SportRecommendation({ athleteData }: SportRecommendationProps) {
  const calculateSportSuitability = (): SportSuggestion[] => {
    const { height, weight, testResults } = athleteData;
    const bmi = weight / Math.pow(height / 100, 2);
    
    const suggestions: SportSuggestion[] = [
      {
        sport: 'Athletics (Sprinting)',
        suitability: 0,
        reasons: [],
        icon: Zap,
        color: 'from-yellow-500 to-orange-500',
        description: 'Track and field sprinting events'
      },
      {
        sport: 'Basketball',
        suitability: 0,
        reasons: [],
        icon: Target,
        color: 'from-orange-500 to-red-500',
        description: 'Team sport requiring height and agility'
      },
      {
        sport: 'Football',
        suitability: 0,
        reasons: [],
        icon: Users,
        color: 'from-green-500 to-blue-500',
        description: 'Team sport emphasizing endurance and skill'
      },
      {
        sport: 'Weightlifting',
        suitability: 0,
        reasons: [],
        icon: Dumbbell,
        color: 'from-purple-500 to-pink-500',
        description: 'Strength-based individual sport'
      },
      {
        sport: 'Long Distance Running',
        suitability: 0,
        reasons: [],
        icon: Heart,
        color: 'from-blue-500 to-cyan-500',
        description: 'Endurance-focused running events'
      }
    ];

    // Calculate suitability based on various factors
    suggestions.forEach(suggestion => {
      let score = 50; // Base score
      const reasons: string[] = [];

      switch (suggestion.sport) {
        case 'Athletics (Sprinting)':
          if (testResults['sprint-100m'] > 80) {
            score += 25;
            reasons.push('Excellent sprint performance');
          }
          if (testResults['vertical-jump'] > 75) {
            score += 15;
            reasons.push('Good explosive power');
          }
          if (bmi < 25) {
            score += 10;
            reasons.push('Optimal body composition for speed');
          }
          break;

        case 'Basketball':
          if (height > 175) {
            score += 20;
            reasons.push('Good height advantage');
          }
          if (testResults['vertical-jump'] > 80) {
            score += 20;
            reasons.push('Excellent jumping ability');
          }
          if (testResults['shuttle-run'] > 75) {
            score += 15;
            reasons.push('Good agility and coordination');
          }
          break;

        case 'Football':
          if (testResults['shuttle-run'] > 75) {
            score += 20;
            reasons.push('Excellent agility');
          }
          if (testResults['1500m-run'] > 70) {
            score += 15;
            reasons.push('Good cardiovascular endurance');
          }
          if (bmi >= 20 && bmi <= 25) {
            score += 15;
            reasons.push('Ideal body composition');
          }
          break;

        case 'Weightlifting':
          if (testResults['sit-ups'] > 85) {
            score += 20;
            reasons.push('Strong core strength');
          }
          if (bmi > 23) {
            score += 15;
            reasons.push('Good muscle mass potential');
          }
          if (height < 180) {
            score += 10;
            reasons.push('Favorable leverage for lifting');
          }
          break;

        case 'Long Distance Running':
          if (testResults['1500m-run'] > 80) {
            score += 25;
            reasons.push('Excellent endurance capacity');
          }
          if (bmi < 22) {
            score += 20;
            reasons.push('Optimal body weight for distance running');
          }
          if (height < 175) {
            score += 10;
            reasons.push('Efficient running biomechanics');
          }
          break;
      }

      suggestion.suitability = Math.min(100, Math.max(0, score));
      suggestion.reasons = reasons.length > 0 ? reasons : ['Based on current fitness profile'];
    });

    return suggestions.sort((a, b) => b.suitability - a.suitability);
  };

  const sportSuggestions = calculateSportSuitability();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <Trophy className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Sport Suitability Analysis</h2>
          <p className="text-sm text-gray-600">AI-powered recommendations based on your profile</p>
        </div>
      </div>

      <div className="space-y-4">
        {sportSuggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <div key={suggestion.sport} className="relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-r ${suggestion.color} rounded-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{suggestion.sport}</h3>
                      <p className="text-sm text-gray-600">{suggestion.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      suggestion.suitability >= 80 ? 'text-green-600' :
                      suggestion.suitability >= 60 ? 'text-blue-600' :
                      suggestion.suitability >= 40 ? 'text-orange-600' : 'text-gray-600'
                    }`}>
                      {suggestion.suitability}%
                    </div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${suggestion.color} transition-all duration-1000`}
                    style={{ width: `${suggestion.suitability}%` }}
                  ></div>
                </div>

                {/* Reasons */}
                <div className="space-y-1">
                  {suggestion.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>

                {/* Rank Badge */}
                {index === 0 && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      #1 MATCH
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-2">
          <Target className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Recommendation</h4>
            <p className="text-sm text-blue-800">
              Based on your current fitness profile, <strong>{sportSuggestions[0].sport}</strong> appears to be your best match. 
              Consider focusing your training on this sport while continuing to develop your overall fitness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}