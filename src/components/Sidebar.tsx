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
  Target
} from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();

  const athleteLinks = [
    { to: '/athlete', icon: Home, label: 'Dashboard' },
    { to: '/athlete/tests', icon: Upload, label: 'Record Tests' },
    { to: '/athlete/progress', icon: TrendingUp, label: 'Progress' },
    { to: '/athlete/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { to: '/athlete/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin', icon: Home, label: 'Dashboard' },
    { to: '/admin/athletes', icon: Users, label: 'Athletes' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/admin/verification', icon: Shield, label: 'Verification' },
  ];

  const links = user?.role === 'admin' ? adminLinks : athleteLinks;

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">SAI Talent</h1>
            <p className="text-sm text-gray-500">Assessment Platform</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
                }`
              }
            >
              <Icon className="h-5 w-5 mr-3" />
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}