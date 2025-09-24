import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Bell, 
  Search, 
  Settings, 
  HelpCircle,
  ChevronDown,
  User,
  Shield,
  Zap,
  Award
} from 'lucide-react';

export default function Header() {
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New Achievement Unlocked!',
      message: 'You earned the "Speed Demon" badge',
      time: '2 minutes ago',
      type: 'achievement',
      unread: true
    },
    {
      id: 2,
      title: 'Test Results Available',
      message: 'Your 100m Sprint analysis is ready',
      time: '1 hour ago',
      type: 'result',
      unread: true
    },
    {
      id: 3,
      title: 'Ranking Update',
      message: 'You moved up 3 positions in state rankings',
      time: '3 hours ago',
      type: 'ranking',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Shield;
      case 'athlete': return Zap;
      case 'coach': return Award;
      default: return User;
    }
  };

  const RoleIcon = getRoleIcon(user?.role || 'athlete');

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-30">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user?.role === 'admin' ? 'Admin Dashboard' : 'Athlete Portal'}
              </h1>
              <p className="text-sm text-gray-600">
                {getGreeting()}, {user?.name?.split(' ')[0]}! Ready to excel today?
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search tests, athletes, or analytics..."
                className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
              />
            </div>

            {/* Help */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all hover-scale">
              <HelpCircle className="h-5 w-5" />
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all hover-scale">
              <Settings className="h-5 w-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all hover-scale"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-slide-in-down">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                      <span className="text-xs text-gray-500">{unreadCount} unread</span>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                          notification.unread ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">
                              {notification.title}
                            </h4>
                            <p className="text-gray-600 text-sm mt-1">
                              {notification.message}
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-100">
                    <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-all hover-scale group"
              >
                <div className="flex items-center space-x-3">
                  {user?.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                    />
                  ) : (
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <RoleIcon className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize flex items-center">
                      <RoleIcon className="h-3 w-3 mr-1" />
                      {user?.role}
                      {user?.verified && (
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2" title="Verified"></div>
                      )}
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-slide-in-down">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      {user?.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <RoleIcon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">{user?.name}</p>
                        <p className="text-sm text-gray-500 capitalize flex items-center">
                          <RoleIcon className="h-3 w-3 mr-1" />
                          {user?.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>View Profile</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-2">
                      <HelpCircle className="h-4 w-4" />
                      <span>Help & Support</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}