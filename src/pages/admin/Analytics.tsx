import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('participation');

  const participationData = [
    { month: 'Jul', value: 234 },
    { month: 'Aug', value: 312 },
    { month: 'Sep', value: 278 },
    { month: 'Oct', value: 445 },
    { month: 'Nov', value: 523 },
    { month: 'Dec', value: 678 }
  ];

  const performanceData = [
    { month: 'Jul', value: 72.4 },
    { month: 'Aug', value: 74.1 },
    { month: 'Sep', value: 73.8 },
    { month: 'Oct', value: 76.2 },
    { month: 'Nov', value: 77.9 },
    { month: 'Dec', value: 79.3 }
  ];

  const stateWiseData = [
    { state: 'Maharashtra', participants: 567, avgScore: 78.5, growth: 15.2 },
    { state: 'Karnataka', participants: 423, avgScore: 76.2, growth: 12.8 },
    { state: 'Tamil Nadu', participants: 389, avgScore: 74.8, growth: 18.4 },
    { state: 'Delhi', participants: 234, avgScore: 79.1, growth: 22.1 },
    { state: 'Punjab', participants: 198, avgScore: 75.3, growth: 9.7 },
    { state: 'Telangana', participants: 156, avgScore: 77.2, growth: 25.3 }
  ];

  const testWiseData = [
    { test: '100m Sprint', attempts: 1234, avgScore: 74.2, passRate: 68 },
    { test: 'Vertical Jump', attempts: 1156, avgScore: 71.8, passRate: 62 },
    { test: 'Sit-ups', attempts: 1089, avgScore: 79.4, passRate: 75 },
    { test: 'Shuttle Run', attempts: 967, avgScore: 73.1, passRate: 64 },
    { test: '1500m Run', attempts: 834, avgScore: 69.8, passRate: 58 }
  ];

  const ageGroupData = [
    { ageGroup: '16-18', participants: 892, avgScore: 76.4, topPerformers: 89 },
    { ageGroup: '19-21', participants: 1234, avgScore: 78.1, topPerformers: 124 },
    { ageGroup: '22-24', participants: 567, avgScore: 75.2, topPerformers: 67 },
    { ageGroup: '25+', participants: 234, avgScore: 73.8, topPerformers: 28 }
  ];

  const currentData = selectedMetric === 'participation' ? participationData : performanceData;
  const maxValue = Math.max(...currentData.map(d => d.value));

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-purple-100">Comprehensive insights into athlete performance and participation</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-2 rounded-lg transition-all flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
                <option value="all">All Time</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="participation">Participation Trends</option>
                <option value="performance">Performance Trends</option>
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600">+12.5%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2,847</div>
            <p className="text-gray-600">Total Athletes</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600">+5.2%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">77.4</div>
            <p className="text-gray-600">Avg Performance</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-green-600">+18.7%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">284</div>
            <p className="text-gray-600">Top Performers</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-sm text-green-600">+3</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">28</div>
            <p className="text-gray-600">Active States</p>
          </div>
        </div>

        {/* Main Chart */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {selectedMetric === 'participation' ? 'Participation' : 'Performance'} Trends
            </h2>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {selectedMetric === 'participation' ? 'New Athletes' : 'Average Score'}
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {currentData[currentData.length - 1].value}
                {selectedMetric === 'performance' && '/100'}
              </div>
            </div>
          </div>
          
          <div className="relative h-80 bg-gray-50 rounded-lg p-4">
            <div className="h-full flex items-end justify-between">
              {currentData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-xs font-semibold text-gray-700 mb-2">
                    {data.value}{selectedMetric === 'performance' && '.0'}
                  </div>
                  <div
                    className="bg-gradient-to-t from-purple-600 to-indigo-600 rounded-t w-12 transition-all hover:opacity-80"
                    style={{ height: `${(data.value / maxValue) * 250}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* State-wise Performance */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">State-wise Performance</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {stateWiseData.map((state, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-sm text-gray-500">{state.participants} participants</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{state.avgScore}</div>
                      <div className="text-xs text-green-600">+{state.growth}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Test-wise Analysis */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Test-wise Analysis</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {testWiseData.map((test, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{test.test}</h3>
                      <span className="text-sm text-gray-500">{test.attempts} attempts</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Avg Score</p>
                        <p className="text-lg font-bold text-blue-600">{test.avgScore}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pass Rate</p>
                        <p className="text-lg font-bold text-green-600">{test.passRate}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Age Group Analysis */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Age Group Analysis</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGroupData.map((group, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{group.ageGroup}</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-500">Participants</p>
                        <p className="text-xl font-bold text-blue-600">{group.participants}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg Score</p>
                        <p className="text-lg font-semibold text-gray-900">{group.avgScore}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Top Performers</p>
                        <p className="text-lg font-semibold text-green-600">{group.topPerformers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}