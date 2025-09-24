import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Globe,
  Smartphone,
  Brain,
  Medal,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced computer vision and machine learning analyze your performance with 98% accuracy',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Trophy,
      title: 'Performance Tracking',
      description: 'Comprehensive progress monitoring with detailed analytics and benchmarking',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Multi-Sport Platform',
      description: 'Assessment across 15+ sports with specialized protocols for each discipline',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'In-depth insights into strengths, weaknesses, and improvement opportunities',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Verified Results',
      description: 'Blockchain-secured certificates with anti-cheat technology for fair assessment',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Talent Identification',
      description: 'Direct pathway to SAI programs and national team selections',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Athletes Assessed', icon: Users },
    { number: '28', label: 'Sports Covered', icon: Trophy },
    { number: '2,500+', label: 'Talents Identified', icon: Star },
    { number: '99.2%', label: 'Accuracy Rate', icon: Target }
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'National Level Sprinter',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'SAI Talent Platform identified my potential and connected me with world-class coaches. Now I\'m representing India internationally!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Olympic Hopeful - Swimming',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'The AI analysis helped me improve my technique by 23%. The detailed feedback is incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Coach Rajesh Kumar',
      role: 'SAI Certified Coach',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'This platform has revolutionized how we identify and nurture talent. The data-driven insights are game-changing.',
      rating: 5
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Create Your Profile',
      description: 'Sign up and complete your comprehensive athlete profile with biometric data and sports preferences',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Record Performance Tests',
      description: 'Follow AI-guided instructions to record standardized fitness tests using your smartphone',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 3,
      title: 'Get AI Analysis',
      description: 'Receive instant, detailed feedback with performance metrics and improvement recommendations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 4,
      title: 'Track Progress',
      description: 'Monitor your development over time and compete on national leaderboards',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text-primary">SAI Talent</span>
                <div className="text-xs text-gray-500 font-medium">Assessment Platform</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Success Stories</a>
              <a href="#stats" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Impact</a>
              <Link
                to="/auth"
                className="btn btn-primary btn-lg hover-lift"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in-down">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Features</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600 font-medium py-2">How It Works</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Success Stories</a>
              <a href="#stats" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Impact</a>
              <Link
                to="/auth"
                className="btn btn-primary w-full justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-bounce">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 50,000+ Athletes Nationwide
            </div>
            
            <h1 className="text-display-2xl font-bold text-gray-900 mb-8 leading-tight">
              Discover Your
              <span className="block gradient-text">Athletic Potential</span>
              <span className="block text-display-lg text-gray-600">with AI-Powered Assessment</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              India's most advanced sports talent identification platform. Get instant AI feedback, 
              compete nationally, and unlock opportunities with the Sports Authority of India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/auth"
                className="btn btn-primary btn-xl hover-lift group"
              >
                <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Free Assessment
              </Link>
              <button className="btn btn-secondary btn-xl hover-lift group">
                <Globe className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Government Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">99.2% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-gray-900 mb-4">
              Transforming Indian Sports
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real impact, measurable results, and a growing community of champions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover-lift"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 animate-pulse">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Cutting-Edge Technology
            </div>
            <h2 className="text-display-md font-bold text-gray-900 mb-6">
              Why Choose SAI Talent Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of sports assessment with AI-powered analysis, 
              comprehensive tracking, and direct pathways to professional opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card card-hover card-gradient p-8 group animate-slide-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-display-md font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with your sports assessment journey in four simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="text-center group animate-slide-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl shadow-xl group-hover:scale-110 transition-all`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                        <span className="text-sm font-bold text-gray-700">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from athletes and coaches who've transformed their careers with our platform
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="card p-12 text-center animate-fade-in">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-display-md font-bold text-white mb-6">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join thousands of athletes who have already taken the first step towards their sporting dreams. 
            Start your free assessment today and unlock your pathway to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/auth"
              className="btn bg-white text-blue-600 hover:bg-gray-50 btn-xl hover-lift group shadow-2xl"
            >
              <CheckCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              Start Your Journey Today
            </Link>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 btn-xl hover-lift group">
              <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">SAI Talent Platform</span>
                  <div className="text-sm text-gray-400">Assessment Platform</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering athletes across India with AI-driven sports talent assessment 
                and direct pathways to professional opportunities.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Sports Authority of India. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in India</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}