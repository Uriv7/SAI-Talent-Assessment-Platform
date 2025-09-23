import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  ChevronDown,
  Filter
} from 'lucide-react';

export default function Progress() {
  const [selectedPeriod, setSelectedPeriod] = useState('3months');
  const [selectedTest, setSelectedTest] = useState('all');

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
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
          <p className="text-purple-100">Monitor your athletic development and celebrate achievements</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
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
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100">
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
                  <span>Current: 82/100</span>
                </div>
                <div className="relative h-64 bg-gray-50 rounded-lg p-4">
                  <div className="h-full flex items-end justify-between">
                    {monthlyData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-gradient-to-t from-blue-600 to-green-600 rounded-t w-8 transition-all hover:opacity-80"
                          style={{ height: `${(data.score / 100) * 200}px` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-2">{data.month}</span>
                        <span className="text-xs font-semibold text-gray-700">{data.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Test Breakdown */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Test Performance Breakdown</h3>
                {progressData.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{test.test}</h4>
                        <p className="text-sm text-gray-500">Current score vs previous</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{test.current}</div>
                      <div className={`text-sm flex items-center ${
                        test.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {test.trend === 'up' ? '↑' : '↓'} {Math.abs(test.change)} points
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Recent Achievements</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Consistent improvement in endurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Excellent core strength development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Regular training consistency</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas for Improvement</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Vertical jump power needs work</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Sprint start technique</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Recovery time between sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}