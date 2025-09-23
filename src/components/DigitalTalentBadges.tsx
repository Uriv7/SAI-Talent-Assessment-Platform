import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Zap, Target, Crown, Shield } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  description: string;
  category: 'performance' | 'consistency' | 'improvement' | 'achievement';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  icon: React.ComponentType<any>;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
  requirement: string;
  color: string;
}

interface DigitalTalentBadgesProps {
  athleteData: {
    testResults: Record<string, number>;
    overallScore: number;
    rank: number;
    testsCompleted: number;
    streakDays: number;
  };
}

export default function DigitalTalentBadges({ athleteData }: DigitalTalentBadgesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const badges: Badge[] = [
    {
      id: 'speed-demon',
      title: 'Speed Demon',
      description: 'Achieved top 10% in sprint tests',
      category: 'performance',
      rarity: 'epic',
      icon: Zap,
      earned: athleteData.testResults['sprint-100m'] > 85,
      earnedDate: '2024-12-15',
      progress: Math.min(100, (athleteData.testResults['sprint-100m'] / 85) * 100),
      requirement: 'Score 85+ in 100m Sprint',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'consistency-champion',
      title: 'Consistency Champion',
      description: 'Maintained 7-day testing streak',
      category: 'consistency',
      rarity: 'rare',
      icon: Target,
      earned: athleteData.streakDays >= 7,
      earnedDate: '2024-12-10',
      progress: Math.min(100, (athleteData.streakDays / 7) * 100),
      requirement: 'Complete tests for 7 consecutive days',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'rising-star',
      title: 'Rising Star',
      description: 'Entered top 50 in state rankings',
      category: 'achievement',
      rarity: 'epic',
      icon: Star,
      earned: athleteData.rank <= 50,
      earnedDate: '2024-12-08',
      progress: Math.min(100, ((51 - athleteData.rank) / 50) * 100),
      requirement: 'Reach top 50 in state rankings',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'endurance-expert',
      title: 'Endurance Expert',
      description: 'Mastered all endurance tests',
      category: 'performance',
      rarity: 'rare',
      icon: Shield,
      earned: athleteData.testResults['1500m-run'] > 75,
      earnedDate: '2024-12-05',
      progress: Math.min(100, (athleteData.testResults['1500m-run'] / 75) * 100),
      requirement: 'Score 75+ in endurance tests',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'elite-performer',
      title: 'Elite Performer',
      description: 'Overall score above 90',
      category: 'achievement',
      rarity: 'legendary',
      icon: Crown,
      earned: athleteData.overallScore >= 90,
      progress: Math.min(100, (athleteData.overallScore / 90) * 100),
      requirement: 'Achieve 90+ overall score',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 'improvement-master',
      title: 'Improvement Master',
      description: '20% improvement in any test',
      category: 'improvement',
      rarity: 'rare',
      icon: TrendingUp,
      earned: false,
      progress: 65,
      requirement: 'Improve any test score by 20%',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Badges', icon: Award },
    { id: 'performance', name: 'Performance', icon: Trophy },
    { id: 'consistency', name: 'Consistency', icon: Target },
    { id: 'improvement', name: 'Improvement', icon: TrendingUp },
    { id: 'achievement', name: 'Achievement', icon: Medal }
  ];

  const filteredBadges = selectedCategory === 'all' 
    ? badges 
    : badges.filter(badge => badge.category === selectedCategory);

  const earnedBadges = badges.filter(badge => badge.earned);
  const totalBadges = badges.length;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'shadow-gray-200';
      case 'rare': return 'shadow-blue-200';
      case 'epic': return 'shadow-purple-200';
      case 'legendary': return 'shadow-yellow-200';
      default: return 'shadow-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Digital Talent Badges</h2>
            <p className="text-sm text-gray-600">
              {earnedBadges.length} of {totalBadges} badges earned
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-600">{earnedBadges.length}</div>
          <div className="text-xs text-gray-500">Badges Earned</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Collection Progress</span>
          <span className="text-sm text-gray-500">
            {Math.round((earnedBadges.length / totalBadges) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-orange-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${(earnedBadges.length / totalBadges) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.id}
              className={`relative p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                badge.earned 
                  ? `${getRarityColor(badge.rarity)} ${getRarityGlow(badge.rarity)} shadow-lg` 
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              {/* Rarity Indicator */}
              <div className="absolute top-2 right-2">
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  badge.rarity === 'legendary' ? 'bg-yellow-200 text-yellow-800' :
                  badge.rarity === 'epic' ? 'bg-purple-200 text-purple-800' :
                  badge.rarity === 'rare' ? 'bg-blue-200 text-blue-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {badge.rarity.toUpperCase()}
                </div>
              </div>

              {/* Badge Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${
                badge.earned 
                  ? `bg-gradient-to-r ${badge.color} shadow-lg` 
                  : 'bg-gray-300'
              }`}>
                <Icon className={`h-8 w-8 ${badge.earned ? 'text-white' : 'text-gray-500'}`} />
              </div>

              {/* Badge Info */}
              <div className="text-center">
                <h3 className={`font-bold mb-1 ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                  {badge.title}
                </h3>
                <p className={`text-sm mb-3 ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                  {badge.description}
                </p>

                {/* Progress Bar for Unearned Badges */}
                {!badge.earned && badge.progress && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs text-gray-500">{Math.round(badge.progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${badge.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Earned Date */}
                {badge.earned && badge.earnedDate && (
                  <div className="text-xs text-gray-500 mb-2">
                    Earned on {new Date(badge.earnedDate).toLocaleDateString()}
                  </div>
                )}

                {/* Requirement */}
                <div className="text-xs text-gray-500 bg-gray-100 rounded-lg p-2">
                  {badge.requirement}
                </div>
              </div>

              {/* Earned Badge Glow Effect */}
              {badge.earned && (
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${badge.color} opacity-10 animate-pulse`}></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Next Badge to Earn */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">🎯 Next Badge to Earn</h4>
        {(() => {
          const nextBadge = badges.find(badge => !badge.earned && badge.progress && badge.progress > 50);
          if (nextBadge) {
            return (
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${nextBadge.color} flex items-center justify-center`}>
                  <nextBadge.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-blue-900">{nextBadge.title}</p>
                  <p className="text-sm text-blue-700">{nextBadge.requirement}</p>
                  <div className="w-full bg-blue-200 rounded-full h-2 mt-1">
                    <div 
                      className={`bg-gradient-to-r ${nextBadge.color} h-2 rounded-full`}
                      style={{ width: `${nextBadge.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-900">{Math.round(nextBadge.progress || 0)}%</div>
                </div>
              </div>
            );
          }
          return <p className="text-blue-800">Keep training to unlock more badges!</p>;
        })()}
      </div>
    </div>
  );
}