import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  Search, 
  Filter, 
  Users, 
  Eye, 
  Edit,
  MapPin,
  Calendar,
  Trophy,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function AthleteManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const athletes = [
    {
      id: 1,
      name: 'Arjun Sharma',
      email: 'arjun.sharma@email.com',
      age: 20,
      gender: 'Male',
      state: 'Maharashtra',
      district: 'Mumbai',
      sport: 'Athletics',
      overallScore: 94,
      testsCompleted: 12,
      verified: true,
      lastActive: '2 days ago',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      age: 19,
      gender: 'Female',
      state: 'Maharashtra',
      district: 'Pune',
      sport: 'Athletics',
      overallScore: 91,
      testsCompleted: 11,
      verified: true,
      lastActive: '1 day ago',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      age: 21,
      gender: 'Male',
      state: 'Punjab',
      district: 'Amritsar',
      sport: 'Football',
      overallScore: 89,
      testsCompleted: 10,
      verified: false,
      lastActive: '3 days ago',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Kavya Reddy',
      email: 'kavya.reddy@email.com',
      age: 18,
      gender: 'Female',
      state: 'Telangana',
      district: 'Hyderabad',
      sport: 'Basketball',
      overallScore: 87,
      testsCompleted: 9,
      verified: true,
      lastActive: '5 days ago',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      age: 20,
      gender: 'Male',
      state: 'Maharashtra',
      district: 'Nashik',
      sport: 'Athletics',
      overallScore: 82,
      testsCompleted: 8,
      verified: false,
      lastActive: '1 week ago',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face'
    }
  ];

  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         athlete.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'verified' && athlete.verified) ||
                         (selectedFilter === 'unverified' && !athlete.verified) ||
                         (selectedFilter === 'high-performers' && athlete.overallScore >= 90);
    
    const matchesState = selectedState === 'all' || athlete.state === selectedState;
    
    return matchesSearch && matchesFilter && matchesState;
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Athlete Management</h1>
          <p className="text-indigo-100">Monitor and manage athlete profiles and performance data</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search athletes by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Athletes</option>
                  <option value="verified">Verified Only</option>
                  <option value="unverified">Unverified</option>
                  <option value="high-performers">High Performers (90+)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All States</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
            <span>Total Athletes: <span className="font-semibold text-gray-900">{filteredAthletes.length}</span></span>
            <span>Verified: <span className="font-semibold text-green-600">{filteredAthletes.filter(a => a.verified).length}</span></span>
            <span>Pending: <span className="font-semibold text-orange-600">{filteredAthletes.filter(a => !a.verified).length}</span></span>
          </div>
        </div>

        {/* Athletes Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Athletes List</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Athlete
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location & Sport
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAthletes.map((athlete) => (
                  <tr key={athlete.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img
                          src={athlete.avatar}
                          alt={athlete.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                          <div className="text-sm text-gray-500">{athlete.email}</div>
                          <div className="text-xs text-gray-400">{athlete.gender}, {athlete.age} years</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{athlete.district}, {athlete.state}</div>
                      <div className="text-sm text-gray-500">{athlete.sport}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-lg font-bold ${getScoreColor(athlete.overallScore)}`}>
                        {athlete.overallScore}
                      </div>
                      <div className="text-sm text-gray-500">
                        {athlete.testsCompleted} tests completed
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {athlete.verified ? (
                          <div className="flex items-center space-x-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm">Verified</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 text-orange-600">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">Pending</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {athlete.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>View</span>
                        </button>
                        <button className="text-green-600 hover:text-green-700 flex items-center space-x-1">
                          <Edit className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
            <p className="text-gray-600">Total Athletes</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2,134</div>
            <p className="text-gray-600">Verified Athletes</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">713</div>
            <p className="text-gray-600">Pending Verification</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">284</div>
            <p className="text-gray-600">High Performers</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}