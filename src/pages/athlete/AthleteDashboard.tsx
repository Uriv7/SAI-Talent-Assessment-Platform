import React from 'react';
import Layout from '../../components/Layout';
import { 
  Upload, 
  TrendingUp, 
  Trophy, 
  Target,
  Calendar,
  Award,
  Clock,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AthleteDashboard() {
  const stats = [
    {
      label: 'Tests Completed',
      value: '8',
      change: '+2 this week',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Overall Score',
      value: '82',
      change: '+5 points',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Rank (State)',
      value: '#24',
      change: 'Up 3 positions',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      label: 'Achievements',
      value: '12',
      change: '+1 this month',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const recentTests = [
    { name: '100m Sprint', score: 85, date: '2 days ago', status: 'verified' },
    { name: 'Vertical Jump', score: 78, date: '1 week ago', status: 'verified' },
    { name: 'Sit-ups (1 min)', score: 92, date: '1 week ago', status: 'verified' },
    { name: 'Shuttle Run', score: 76, date: '2 weeks ago', status: 'pending' }
  ];

  const achievements = [
    { title: 'Speed Demon', icon: '⚡', description: 'Completed all sprint tests' },
    { title: 'Consistency King', icon: '🎯', description: '7-day testing streak' },
    { title: 'Rising Star', icon: '⭐', description: 'Top 50 in state ranking' }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Rajesh!</h1>
          <p className="text-blue-100 mb-6">Ready to push your limits today?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/athlete/tests"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-3 rounded-lg transition-all flex items-center space-x-2"
            >
              <Upload className="h-5 w-5" />
              <span>Record New Test</span>
            </Link>
            <Link
              to="/athlete/progress"
              className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg transition-all flex items-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>View Progress</span>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className={`inline-flex p-3 rounded-lg ${stat.bg} mb-4`}>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Tests */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Recent Tests</span>
                </h2>
                <Link
                  to="/athlete/progress"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{test.name}</h3>
                        <p className="text-sm text-gray-500">{test.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{test.score}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        test.status === 'verified' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {test.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Achievements</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/athlete/profile"
                className="mt-4 block text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-2 rounded-lg hover:opacity-90 transition-all"
              >
                View All Achievements
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/athlete/tests"
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Record Tests</h3>
                <p className="text-sm text-gray-600">Upload new fitness test videos</p>
              </div>
            </div>
          </Link>

          <Link
            to="/athlete/leaderboard"
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Leaderboard</h3>
                <p className="text-sm text-gray-600">See how you rank nationally</p>
              </div>
            </div>
          </Link>

          <Link
            to="/athlete/progress"
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Progress</h3>
                <p className="text-sm text-gray-600">Track your improvement</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}