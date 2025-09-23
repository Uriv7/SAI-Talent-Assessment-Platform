import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AthleteDashboard from './pages/athlete/AthleteDashboard';
import TestUpload from './pages/athlete/TestUpload';
import Progress from './pages/athlete/Progress';
import Leaderboard from './pages/athlete/Leaderboard';
import Profile from './pages/athlete/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import AthleteManagement from './pages/admin/AthleteManagement';
import Analytics from './pages/admin/Analytics';
import Verification from './pages/admin/Verification';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Athlete Routes */}
            <Route path="/athlete" element={
              <PrivateRoute requiredRole="athlete">
                <AthleteDashboard />
              </PrivateRoute>
            } />
            <Route path="/athlete/tests" element={
              <PrivateRoute requiredRole="athlete">
                <TestUpload />
              </PrivateRoute>
            } />
            <Route path="/athlete/progress" element={
              <PrivateRoute requiredRole="athlete">
                <Progress />
              </PrivateRoute>
            } />
            <Route path="/athlete/leaderboard" element={
              <PrivateRoute requiredRole="athlete">
                <Leaderboard />
              </PrivateRoute>
            } />
            <Route path="/athlete/profile" element={
              <PrivateRoute requiredRole="athlete">
                <Profile />
              </PrivateRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <PrivateRoute requiredRole="admin">
                <AdminDashboard />
              </PrivateRoute>
            } />
            <Route path="/admin/athletes" element={
              <PrivateRoute requiredRole="admin">
                <AthleteManagement />
              </PrivateRoute>
            } />
            <Route path="/admin/analytics" element={
              <PrivateRoute requiredRole="admin">
                <Analytics />
              </PrivateRoute>
            } />
            <Route path="/admin/verification" element={
              <PrivateRoute requiredRole="admin">
                <Verification />
              </PrivateRoute>
            } />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;