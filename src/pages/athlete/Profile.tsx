import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  User, 
  Edit, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail,
  Award,
  Target,
  Zap,
  Trophy
} from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    age: 20,
    gender: 'Male',
    state: 'Maharashtra',
    district: 'Nashik',
    sport: 'Athletics',
    height: '175',
    weight: '68',
    bio: 'Aspiring athlete with passion for sprinting and middle-distance running. Training consistently to improve performance and represent state in national competitions.'
  });

  const achievements = [
    { title: 'Speed Demon', icon: '⚡', date: 'Dec 2024', description: 'Completed all sprint tests with top scores' },
    { title: 'Consistency Champion', icon: '🏆', date: 'Nov 2024', description: '30-day testing streak achieved' },
    { title: 'Rising Star', icon: '⭐', date: 'Nov 2024', description: 'Entered top 50 in state rankings' },
    { title: 'Endurance Expert', icon: '🏃', date: 'Oct 2024', description: 'Completed all endurance tests' },
    { title: 'First Steps', icon: '👟', date: 'Oct 2024', description: 'Completed first fitness assessment' }
  ];

  const testHistory = [
    { test: '100m Sprint', score: 85, date: '2 days ago', percentile: 78 },
    { test: 'Vertical Jump', score: 78, date: '1 week ago', percentile: 65 },
    { test: 'Sit-ups', score: 92, date: '1 week ago', percentile: 89 },
    { test: 'Shuttle Run', score: 76, date: '2 weeks ago', percentile: 71 },
    { test: '1500m Run', score: 68, date: '3 weeks ago', percentile: 62 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Edit className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profileData.district}, {profileData.state}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>{profileData.sport}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{profileData.age} years old</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-2 rounded-lg transition-all flex items-center space-x-2"
            >
              <Edit className="h-4 w-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={profileData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        value={profileData.height}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={profileData.weight}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{profileData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">{profileData.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Height</p>
                      <p className="font-medium text-gray-900">{profileData.height} cm</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium text-gray-900">{profileData.weight} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Gender</p>
                      <p className="font-medium text-gray-900">{profileData.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">BMI</p>
                      <p className="font-medium text-gray-900">{(Number(profileData.weight) / Math.pow(Number(profileData.height)/100, 2)).toFixed(1)}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Bio</p>
                    <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Test History */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Test Results</h2>
              <div className="space-y-4">
                {testHistory.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{test.test}</h3>
                        <p className="text-sm text-gray-500">{test.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{test.score}</div>
                      <div className="text-sm text-gray-500">{test.percentile}th percentile</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Stats */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tests Completed</span>
                  <span className="text-2xl font-bold text-blue-600">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Overall Score</span>
                  <span className="text-2xl font-bold text-green-600">82</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">State Rank</span>
                  <span className="text-2xl font-bold text-orange-600">#24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Achievements</span>
                  <span className="text-2xl font-bold text-purple-600">5</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Achievements</span>
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                    <div className="text-xl">{achievement.icon}</div>
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
      </div>
    </Layout>
  );
}