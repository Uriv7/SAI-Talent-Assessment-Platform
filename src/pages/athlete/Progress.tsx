import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SportRecommendation from '../../components/SportRecommendation';
import DigitalReportCard from '../../components/DigitalReportCard';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  ChevronDown,
  Filter,
  Download,
  Share2,
  Sparkles
} from 'lucide-react';

export default function Progress() {
  const [selectedPeriod, setSelectedPeriod] = useState('3months');
  const [selectedTest, setSelectedTest] = useState('all');
  const [showReportCard, setShowReportCard] = useState(false);
  const [showSportRecommendation, setShowSportRecommendation] = useState(false);

  // Mock athlete data for components
  const athleteData = {
    name: 'Rajesh Kumar',
    age: 20,
    location: 'Nashik, Maharashtra',
    height: 175,
    weight: 68,
    testResults: {
      'Sprint 100m': { score: 85, percentile: 78, date: '2024-12-15' },
      'Vertical Jump': { score: 78, percentile: 65, date: '2024-12-10' },
      'Sit-ups': { score: 92, percentile: 89, date: '2024-12-08' },
      'Shuttle Run': { score: 76, percentile: 71, date: '2024-12-05' },
      '1500m Run': { score: 68, percentile: 62, date: '2024-12-01' }
    },
    overallScore: 82,
    rank: 24,
    achievements: [
      'Top 25% in State Rankings',
      'Consistency Champion - 7 Day Streak',
      'Speed Improvement - 10% Better'
    ]
  };

  const progressData = [
    { test: '100m Sprint', current: 85, previous: 78, change: +7, trend: 'up' },
    { test: 'Vertical Jump', current: 78, previous: 82, change: -4, trend: 'down' },
    { test: 'Sit-ups', current: 92, previous: 88, change: +4, trend: 'up' },
    { test: 'Shuttle Run', current: 76, previous: 72, change: +4, trend: 'up' },
    { test: '1500m Run', current: 68, previous: 65, change: +3, trend: 'up' }
  ];

  const monthlyData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 68 },
    { month: 'Mar', score: 72 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 78 },
    { month: 'Jun', score: 82 }
  ];

  const achievements = [
    { 
      title: 'Consistency Champion',
      date: '2 days ago',
      description: 'Completed tests for 7 consecutive days',
      icon: '🏆'
    },
    {
      title: 'Speed Improvement',
      date: '1 week ago',
      description: '10% improvement in sprint times',
      icon: '⚡'
    },
    {
      title: 'Top Performer',
      date: '2 weeks ago',
      description: 'Reached top 10% in state rankings',
      icon: '🎯'
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">📈 Progress Analytics</h1>
                <p className="text-purple-100">Advanced insights into your athletic development journey</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSportRecommendation(!showSportRecommendation)}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Sport Recommendations</span>
                </button>
                <button
                  onClick={() => setShowReportCard(!showReportCard)}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-4 py-2 rounded-lg transition-all flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Digital Report Card</span>
                </button>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        {/* Sport Recommendation Panel */}
        {showSportRecommendation && (
          <div className="animate-slide-down">
            <SportRecommendation athleteData={athleteData} />
          </div>
        )}

        {/* Digital Report Card */}
        {showReportCard && (
          <div className="animate-slide-down">
            <DigitalReportCard athleteData={athleteData} />
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1month">Last Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Tests</option>
                <option value="sprint">Sprint Tests</option>
                <option value="strength">Strength Tests</option>
                <option value="endurance">Endurance Tests</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Overall Progress</span>
              </h2>
            </div>
            <div className="p-6">
              {/* Simple Progress Chart Visualization */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Performance Score</span>
                  <span className="font-semibold text-green-600">Current: 82/100 ↗️ +5</span>
                </div>
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="h-full flex items-end justify-between">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center group">
                        <div
                          className="bg-gradient-to-t from-blue-600 via-purple-600 to-green-600 rounded-t w-8 transition-all hover:opacity-80 hover:scale-110 shadow-lg"
                          style={{ height: `${(data.score / 100) * 200}px` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-2">{data.month}</span>
                        <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{data.score}</span>
                      </div>
                    ))}
                  </div>
                  {/* Trend Line */}
                  <div className="absolute inset-4 pointer-events-none">
                    <svg className="w-full h-full">
                      <path
                        d="M 0,160 Q 100,140 200,120 T 400,80"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-draw-line"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Test Breakdown */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span>Test Performance Breakdown</span>
                </h3>
                {progressData.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-all border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{test.test}</h4>
                        <p className="text-sm text-gray-500">
                          Previous: {test.previous} → Current: {test.current}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{test.current}</div>
                      <div className={`text-sm flex items-center ${
                        test.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <span className="text-lg">{test.trend === 'up' ? '📈' : '📉'}</span>
                        <span className="ml-1 font-semibold">{Math.abs(test.change)} points</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Recent Achievements</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-orange-600 font-medium mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Achievement Progress */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Next Achievement</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-700">Elite Performer Badge</span>
                  <span className="text-sm font-semibold text-purple-900">85/100</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-purple-600 mt-1">3 more points to unlock!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Consistent improvement in endurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Excellent core strength development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Regular training consistency</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas for Improvement</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Vertical jump power needs work</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Sprint start technique</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Recovery time between sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-xl shadow-lg border border-blue-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">AI Performance Insights</h3>
              <p className="text-sm text-gray-600">Personalized recommendations based on your progress</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">🎯 Focus Area</h4>
              <p className="text-sm text-blue-800">Explosive power development through plyometric training</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">📈 Trending Up</h4>
              <p className="text-sm text-green-800">Cardiovascular endurance showing consistent improvement</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">🏆 Next Goal</h4>
              <p className="text-sm text-purple-800">Target 90+ overall score for elite athlete status</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}