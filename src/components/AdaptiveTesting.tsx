import React, { useState, useEffect } from 'react';
import { Brain, Target, TrendingUp, Zap, AlertCircle, CheckCircle } from 'lucide-react';

interface AdaptiveTestingProps {
  athleteProfile: {
    age: number;
    height: number;
    weight: number;
    fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
    previousScores: Record<string, number>;
    injuries?: string[];
  };
  onTestAdjustment: (adjustments: TestAdjustment[]) => void;
}

interface TestAdjustment {
  testId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  modifications: string[];
  reasoning: string;
  expectedDuration: string;
}

export default function AdaptiveTesting({ athleteProfile, onTestAdjustment }: AdaptiveTestingProps) {
  const [adaptiveRecommendations, setAdaptiveRecommendations] = useState<TestAdjustment[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    generateAdaptiveRecommendations();
  }, [athleteProfile]);

  const generateAdaptiveRecommendations = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));

    const recommendations: TestAdjustment[] = [];
    const { age, height, weight, fitnessLevel, previousScores, injuries } = athleteProfile;
    const bmi = weight / Math.pow(height / 100, 2);

    // Sprint Test Adaptation
    let sprintDifficulty: 'easy' | 'medium' | 'hard' = 'medium';
    let sprintModifications: string[] = [];
    let sprintReasoning = '';

    if (fitnessLevel === 'beginner' || (previousScores['sprint-100m'] && previousScores['sprint-100m'] < 60)) {
      sprintDifficulty = 'easy';
      sprintModifications = ['50m distance instead of 100m', 'Allow walking start', 'Multiple attempts allowed'];
      sprintReasoning = 'Reduced distance and modified start to build confidence and proper form';
    } else if (fitnessLevel === 'advanced' || (previousScores['sprint-100m'] && previousScores['sprint-100m'] > 85)) {
      sprintDifficulty = 'hard';
      sprintModifications = ['Standing start required', 'Single attempt only', 'Wind resistance measurement'];
      sprintReasoning = 'Enhanced challenge for advanced athletes with competition-level requirements';
    } else {
      sprintModifications = ['Standard 100m distance', 'Crouched start', 'Two attempts allowed'];
      sprintReasoning = 'Standard test protocol suitable for intermediate fitness level';
    }

    recommendations.push({
      testId: 'sprint-100m',
      difficulty: sprintDifficulty,
      modifications: sprintModifications,
      reasoning: sprintReasoning,
      expectedDuration: sprintDifficulty === 'easy' ? '10-15 seconds' : '15-20 seconds'
    });

    // Vertical Jump Adaptation
    let jumpDifficulty: 'easy' | 'medium' | 'hard' = 'medium';
    let jumpModifications: string[] = [];
    let jumpReasoning = '';

    if (injuries?.includes('knee') || injuries?.includes('ankle')) {
      jumpDifficulty = 'easy';
      jumpModifications = ['Seated vertical reach test', 'No jumping required', 'Upper body flexibility focus'];
      jumpReasoning = 'Modified test to accommodate lower body injury concerns';
    } else if (bmi > 30) {
      jumpDifficulty = 'easy';
      jumpModifications = ['Step-up test alternative', 'Assisted jump option', 'Focus on form over height'];
      jumpReasoning = 'Alternative assessment considering body composition for safety';
    } else if (previousScores['vertical-jump'] && previousScores['vertical-jump'] > 80) {
      jumpDifficulty = 'hard';
      jumpModifications = ['Weighted jump test', 'Single-leg jump variants', 'Reactive jump sequence'];
      jumpReasoning = 'Advanced plyometric assessment for high-performing athletes';
    } else {
      jumpModifications = ['Standard vertical jump', 'Three attempts', 'Best score recorded'];
      jumpReasoning = 'Standard vertical jump protocol appropriate for fitness level';
    }

    recommendations.push({
      testId: 'vertical-jump',
      difficulty: jumpDifficulty,
      modifications: jumpModifications,
      reasoning: jumpReasoning,
      expectedDuration: '2-3 minutes'
    });

    // Endurance Test Adaptation
    let enduranceDifficulty: 'easy' | 'medium' | 'hard' = 'medium';
    let enduranceModifications: string[] = [];
    let enduranceReasoning = '';

    if (age < 16 || fitnessLevel === 'beginner') {
      enduranceDifficulty = 'easy';
      enduranceModifications = ['800m run instead of 1500m', 'Walk breaks allowed', 'Heart rate monitoring'];
      enduranceReasoning = 'Reduced distance appropriate for age and fitness development';
    } else if (previousScores['1500m-run'] && previousScores['1500m-run'] > 85) {
      enduranceDifficulty = 'hard';
      enduranceModifications = ['3000m run', 'No walk breaks', 'Pace targets provided'];
      enduranceReasoning = 'Extended distance to properly assess advanced endurance capacity';
    } else {
      enduranceModifications = ['Standard 1500m run', 'Consistent pace encouraged', 'Time and heart rate recorded'];
      enduranceReasoning = 'Standard endurance assessment suitable for general fitness evaluation';
    }

    recommendations.push({
      testId: '1500m-run',
      difficulty: enduranceDifficulty,
      modifications: enduranceModifications,
      reasoning: enduranceReasoning,
      expectedDuration: enduranceDifficulty === 'easy' ? '4-6 minutes' : '6-12 minutes'
    });

    setAdaptiveRecommendations(recommendations);
    onTestAdjustment(recommendations);
    setIsAnalyzing(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <CheckCircle className="h-4 w-4" />;
      case 'medium': return <Target className="h-4 w-4" />;
      case 'hard': return <Zap className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Adaptive Testing Protocol</h2>
          <p className="text-sm text-gray-600">AI-customized tests based on your profile and abilities</p>
        </div>
      </div>

      {isAnalyzing ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Profile...</h3>
          <p className="text-gray-600">Customizing tests based on your fitness level and history</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Profile Summary */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Your Profile Analysis</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Fitness Level:</span>
                <div className={`inline-block ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
                  athleteProfile.fitnessLevel === 'advanced' ? 'bg-green-100 text-green-800' :
                  athleteProfile.fitnessLevel === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {athleteProfile.fitnessLevel.toUpperCase()}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Age Group:</span>
                <span className="ml-2 font-semibold">{athleteProfile.age} years</span>
              </div>
              <div>
                <span className="text-gray-500">BMI:</span>
                <span className="ml-2 font-semibold">
                  {(athleteProfile.weight / Math.pow(athleteProfile.height / 100, 2)).toFixed(1)}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Previous Tests:</span>
                <span className="ml-2 font-semibold">{Object.keys(athleteProfile.previousScores).length}</span>
              </div>
            </div>
          </div>

          {/* Adaptive Recommendations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Customized Test Protocols</h3>
            {adaptiveRecommendations.map((recommendation, index) => (
              <div key={recommendation.testId} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {recommendation.testId.replace('-', ' ').toUpperCase()}
                      </h4>
                      <p className="text-sm text-gray-600">Expected Duration: {recommendation.expectedDuration}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getDifficultyColor(recommendation.difficulty)}`}>
                    {getDifficultyIcon(recommendation.difficulty)}
                    <span className="text-sm font-semibold">{recommendation.difficulty.toUpperCase()}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Test Modifications:</h5>
                  <ul className="space-y-1">
                    {recommendation.modifications.map((modification, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span>{modification}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <h6 className="text-sm font-semibold text-blue-900">AI Reasoning:</h6>
                      <p className="text-sm text-blue-800">{recommendation.reasoning}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            <button
              onClick={generateAdaptiveRecommendations}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <Brain className="h-4 w-4" />
              <span>Regenerate Recommendations</span>
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all">
              Use Standard Tests Instead
            </button>
          </div>
        </div>
      )}
    </div>
  );
}