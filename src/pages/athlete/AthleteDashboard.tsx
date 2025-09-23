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
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Rajesh!</h1>
          <p className="text-blue-100 mb-6">Ready to push your limits today?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/athlete/tests"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-3 rounded-xl transition-all flex items-center space-x-2 hover:scale-105 shadow-lg"
            >
              <Upload className="h-5 w-5" />
              <span>Record New Test</span>
            </Link>
            <Link
              to="/athlete/progress"
              className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl transition-all flex items-center space-x-2 hover:scale-105 shadow-lg"
            >
              <TrendingUp className="h-5 w-5" />
              <span>View Progress</span>
            </Link>
          </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm">
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
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all backdrop-blur-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
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
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                        <Target className="h-5 w-5 text-white" />
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
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all backdrop-blur-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <span>Achievements</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 via-yellow-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all hover:scale-105 group">
                    <div className="text-3xl group-hover:scale-110 transition-transform">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/athlete/profile"
                className="mt-4 block text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-3 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
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
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Record Tests</h3>
                <p className="text-sm text-gray-600">Upload new fitness test videos</p>
              </div>
            </div>
          </Link>

          <Link
            to="/athlete/leaderboard"
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Leaderboard</h3>
                <p className="text-sm text-gray-600">See how you rank nationally</p>
              </div>
            </div>
          </Link>

          <Link
            to="/athlete/progress"
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
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