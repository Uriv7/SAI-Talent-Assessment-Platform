import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  Trophy, 
  Users, 
  BarChart3, 
  Shield,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Advanced computer vision analyzes your performance in real-time'
    },
    {
      icon: Trophy,
      title: 'Performance Tracking',
      description: 'Track your progress and compete on national leaderboards'
    },
    {
      icon: Users,
      title: 'Multi-Sport Platform',
      description: 'Comprehensive assessment across multiple sports disciplines'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Get insights into your strengths and areas for improvement'
    },
    {
      icon: Shield,
      title: 'Verified Results',
      description: 'Anti-cheat technology ensures fair and accurate assessments'
    },
    {
      icon: Target,
      title: 'Talent Identification',
      description: 'Get discovered by SAI scouts and coaches nationwide'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Athletes Assessed' },
    { number: '28', label: 'Sports Covered' },
    { number: '500+', label: 'Talents Identified' },
    { number: '98%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                SAI Talent Platform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/auth"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
              Athletic Potential
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            India's premier AI-powered sports talent assessment platform. Record your fitness tests, 
            get instant AI feedback, and unlock opportunities with Sports Authority of India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Start Assessment</span>
            </Link>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2">
              <span>Watch Demo</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SAI Talent Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of sports talent assessment with cutting-edge technology 
              and comprehensive evaluation tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get started with your sports assessment in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Create Profile</h3>
              <p className="opacity-90">Sign up and complete your athlete profile with basic information and sports preferences</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Record Tests</h3>
              <p className="opacity-90">Follow guided instructions to record your fitness tests using your smartphone camera</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Get Results</h3>
              <p className="opacity-90">Receive instant AI-powered feedback and compare your performance with national benchmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of athletes who have already taken the first step towards their sporting dreams.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 space-x-2"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Start Your Journey Today</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold">SAI Talent Platform</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering athletes across India with AI-driven sports talent assessment
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2025 Sports Authority of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}