import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Upload, 
  TrendingUp, 
  Trophy, 
  User,
  Users,
  BarChart3,
  Shield,
  LogOut,
  Target,
  X,
  Zap,
  Award
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { user, logout } = useAuth();

  const athleteLinks = [
    { to: '/athlete', icon: Home, label: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
    { to: '/athlete/tests', icon: Upload, label: 'Record Tests', color: 'from-green-500 to-emerald-500' },
    { to: '/athlete/progress', icon: TrendingUp, label: 'Progress', color: 'from-purple-500 to-pink-500' },
    { to: '/athlete/leaderboard', icon: Trophy, label: 'Leaderboard', color: 'from-yellow-500 to-orange-500' },
    { to: '/athlete/profile', icon: User, label: 'Profile', color: 'from-indigo-500 to-purple-500' },
  ];

  const adminLinks = [
    { to: '/admin', icon: Home, label: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
    { to: '/admin/athletes', icon: Users, label: 'Athletes', color: 'from-green-500 to-emerald-500' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics', color: 'from-purple-500 to-pink-500' },
    { to: '/admin/verification', icon: Shield, label: 'Verification', color: 'from-red-500 to-pink-500' },
  ];

  const links = user?.role === 'admin' ? adminLinks : athleteLinks;

  return (
    <div className="h-full bg-white shadow-2xl border-r border-gray-100 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text-primary">SAI Talent</h1>
              <p className="text-xs text-gray-500 font-medium">Assessment Platform</p>
            </div>
          </div>
          
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          {user?.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover border-3 border-white shadow-lg"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <User className="h-6 w-6 text-white" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{user?.name}</p>
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                user?.role === 'admin' 
                  ? 'bg-red-100 text-red-800' 
                  : user?.role === 'coach'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {user?.role === 'admin' && <Shield className="h-3 w-3 mr-1" />}
                {user?.role === 'athlete' && <Zap className="h-3 w-3 mr-1" />}
                {user?.role === 'coach' && <Award className="h-3 w-3 mr-1" />}
                {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
              </span>
              {user?.verified && (
                <div className="w-2 h-2 bg-green-500 rounded-full" title="Verified Account"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover-lift ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {({ isActive }) => (
                <>
                  <div className={`p-2 rounded-lg mr-3 transition-all ${
                    isActive 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${link.color} text-white group-hover:scale-110`
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.label}
                  </span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Quick Stats */}
      {user?.role === 'athlete' && (
        <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-lg font-bold text-blue-600">8</div>
              <div className="text-xs text-gray-500">Tests</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-lg font-bold text-green-600">82</div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
          </div>
        </div>
      )}

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-all hover-lift group"
        >
          <div className="p-2 bg-red-100 rounded-lg mr-3 group-hover:bg-red-200 transition-colors">
            <LogOut className="h-5 w-5" />
          </div>
          <span className="group-hover:translate-x-1 transition-transform">Logout</span>
        </button>
      </div>
    </div>
  );
}