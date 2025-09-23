import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Filter,
  MapPin,
  Calendar,
  Target
} from 'lucide-react';

export default function Leaderboard() {
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [selectedScope, setSelectedScope] = useState('state');

  const leaderboardData = [
    {
      rank: 1,
      name: 'Arjun Sharma',
      location: 'Mumbai, Maharashtra',
      score: 94,
      sport: 'Athletics',
      tests: 12,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      rank: 2,
      name: 'Priya Patel',
      location: 'Pune, Maharashtra',
      score: 91,
      sport: 'Athletics',
      tests: 11,
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      rank: 3,
      name: 'Vikram Singh',
      location: 'Nagpur, Maharashtra',
      score: 89,
      sport: 'Football',
      tests: 10,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    // Current user
    {
      rank: 24,
      name: 'Rajesh Kumar (You)',
      location: 'Nashik, Maharashtra',
      score: 82,
      sport: 'Athletics',
      tests: 8,
      isCurrentUser: true,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    },
    {
      rank: 25,
      name: 'Kavya Reddy',
      location: 'Thane, Maharashtra',
      score: 81,
      sport: 'Basketball',
      tests: 9,
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face'
    }
  ];

  const topPerformers = leaderboardData.slice(0, 3);
  const otherPerformers = leaderboardData.slice(3);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-orange-600" />;
      default:
        return <div className="text-lg font-bold text-gray-600">#{rank}</div>;
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
          <p className="text-orange-100">See how you rank against athletes across India</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="overall">Overall Performance</option>
                <option value="sprint">Sprint Tests</option>
                <option value="strength">Strength Tests</option>
                <option value="endurance">Endurance Tests</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <select
                value={selectedScope}
                onChange={(e) => setSelectedScope(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="state">Maharashtra State</option>
                <option value="national">National</option>
                <option value="district">Nashik District</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
          </div>
        </div>

        {/* Top 3 Performers */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🏆 Top Performers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topPerformers.map((athlete, index) => (
              <div key={index} className={`text-center ${index === 0 ? 'order-2 transform scale-105' : index === 1 ? 'order-1' : 'order-3'}`}>
                <div className="relative">
                  <img
                    src={athlete.avatar}
                    alt={athlete.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2">
                    {getRankIcon(athlete.rank)}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{athlete.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{athlete.location}</p>
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full py-2 px-4 text-lg font-bold">
                  {athlete.score}
                </div>
                <p className="text-xs text-gray-500 mt-2">{athlete.tests} tests completed</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-orange-600" />
              <span>Full Rankings</span>
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((athlete, index) => (
              <div
                key={index}
                className={`p-6 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  athlete.isCurrentUser ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(athlete.rank)}
                  </div>
                  <img
                    src={athlete.avatar}
                    alt={athlete.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className={`font-semibold ${athlete.isCurrentUser ? 'text-blue-900' : 'text-gray-900'}`}>
                      {athlete.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{athlete.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Target className="h-4 w-4" />
                        <span>{athlete.sport}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    athlete.isCurrentUser ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {athlete.score}
                  </div>
                  <p className="text-sm text-gray-500">{athlete.tests} tests</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Progress */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Ranking Progress</h2>
              <p className="text-blue-100 mb-4">You've moved up 3 positions this month!</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">#24</div>
                  <div className="text-sm text-blue-100">Current Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">↑3</div>
                  <div className="text-sm text-blue-100">This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">82</div>
                  <div className="text-sm text-blue-100">Score</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <h3 className="font-semibold mb-2">Next Target</h3>
                <p className="text-sm text-blue-100 mb-1">Reach #20 for Top 20</p>
                <p className="text-xs text-blue-200">Need 4 more points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}