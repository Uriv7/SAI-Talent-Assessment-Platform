import React from 'react';
import Layout from '../../components/Layout';
import { 
  Users, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  MapPin,
  Calendar,
  Award,
  Eye
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Athletes',
      value: '2,847',
      change: '+124 this month',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      icon: Users
    },
    {
      label: 'Verified Videos',
      value: '1,923',
      change: '+89 today',
      color: 'text-green-600',
      bg: 'bg-green-50',
      icon: CheckCircle
    },
    {
      label: 'Pending Reviews',
      value: '156',
      change: '-23 since yesterday',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      icon: AlertCircle
    },
    {
      label: 'Top Performers',
      value: '284',
      change: 'Above 85 score',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      icon: Award
    }
  ];

  const recentSubmissions = [
    {
      athlete: 'Arjun Sharma',
      test: '100m Sprint',
      score: 94,
      location: 'Mumbai, MH',
      status: 'verified',
      submittedAt: '2 hours ago'
    },
    {
      athlete: 'Priya Patel',
      test: 'Vertical Jump',
      score: 88,
      location: 'Pune, MH',
      status: 'pending',
      submittedAt: '4 hours ago'
    },
    {
      athlete: 'Vikram Singh',
      test: 'Sit-ups',
      score: 76,
      location: 'Delhi, DL',
      status: 'flagged',
      submittedAt: '6 hours ago'
    },
    {
      athlete: 'Kavya Reddy',
      test: 'Shuttle Run',
      score: 82,
      location: 'Hyderabad, TS',
      status: 'verified',
      submittedAt: '1 day ago'
    }
  ];

  const topPerformingStates = [
    { state: 'Maharashtra', athletes: 456, avgScore: 78.5 },
    { state: 'Karnataka', athletes: 389, avgScore: 76.2 },
    { state: 'Tamil Nadu', athletes: 342, avgScore: 74.8 },
    { state: 'Delhi', athletes: 234, avgScore: 79.1 },
    { state: 'Punjab', athletes: 198, avgScore: 75.3 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'flagged':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome to SAI Admin Dashboard</h1>
          <p className="text-blue-100">Monitor athlete assessments and manage talent identification across India</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className={`inline-flex p-3 rounded-lg ${stat.bg} mb-4`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.change}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Submissions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Submissions</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>View All</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentSubmissions.map((submission, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{submission.athlete}</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span>{submission.test}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{submission.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{submission.score}</div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                        <span className="text-xs text-gray-500">{submission.submittedAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performing States */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Top Performing States</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topPerformingStates.map((state, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-sm text-gray-500">{state.athletes} athletes</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{state.avgScore}</div>
                      <div className="text-xs text-gray-500">Avg Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-3 bg-green-100 rounded-lg mb-4 inline-block">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Verify Submissions</h3>
            <p className="text-sm text-gray-600 mb-4">Review and verify athlete test submissions</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Start Verification
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-3 bg-blue-100 rounded-lg mb-4 inline-block">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Manage Athletes</h3>
            <p className="text-sm text-gray-600 mb-4">View and manage athlete profiles and data</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Athletes
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-3 bg-purple-100 rounded-lg mb-4 inline-block">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">Analyze performance trends and statistics</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              View Reports
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="p-3 bg-orange-100 rounded-lg mb-4 inline-block">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Schedule Events</h3>
            <p className="text-sm text-gray-600 mb-4">Plan and manage assessment events</p>
            <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Create Event
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Arjun Sharma's 100m Sprint test was verified - 94/100 score</span>
              <span className="text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">124 new athlete registrations this month</span>
              <span className="text-gray-400">Today</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">Vikram Singh's test flagged for manual review</span>
              <span className="text-gray-400">6 hours ago</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Monthly performance report generated</span>
              <span className="text-gray-400">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}