import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Target, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin, 
  Calendar,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Trophy
} from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: '',
    gender: '',
    state: '',
    district: '',
    sport: '',
    role: 'athlete'
  });

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (formData.role === 'athlete') {
        if (!formData.age) {
          newErrors.age = 'Age is required';
        } else if (parseInt(formData.age) < 10 || parseInt(formData.age) > 35) {
          newErrors.age = 'Age must be between 10 and 35';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setErrors({});

    try {
      if (isLogin) {
        await login(formData.email, formData.password, formData.role);
        navigate(formData.role === 'admin' ? '/admin' : '/athlete');
      } else {
        await signup(formData);
        navigate('/athlete');
      }
    } catch (error: any) {
      setErrors({ submit: error.message || 'Authentication failed' });
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Get instant feedback on your performance'
    },
    {
      icon: Trophy,
      title: 'National Rankings',
      description: 'Compete with athletes across India'
    },
    {
      icon: Shield,
      title: 'Verified Results',
      description: 'Blockchain-secured certificates'
    }
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  const sports = [
    'Athletics', 'Badminton', 'Basketball', 'Boxing', 'Cricket', 'Cycling',
    'Football', 'Gymnastics', 'Hockey', 'Kabaddi', 'Swimming', 'Tennis',
    'Volleyball', 'Weightlifting', 'Wrestling', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center space-x-3 mb-8">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">SAI Talent</span>
                <div className="text-sm text-blue-100">Assessment Platform</div>
              </div>
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">
              {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {isLogin 
                ? 'Continue your path to athletic excellence with AI-powered insights and national recognition.'
                : 'Join thousands of athletes discovering their potential through advanced AI assessment.'
              }
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span className="font-semibold">Trusted by 50,000+ Athletes</span>
            </div>
            <p className="text-sm text-blue-100">
              Join India's largest sports talent identification platform
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text-primary">SAI Talent</span>
            </Link>
          </div>

          <div className="card p-8 animate-slide-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Access your athlete dashboard and continue your journey'
                  : 'Start your athletic assessment journey today'
                }
              </p>
            </div>

            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span>{errors.submit}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="athlete">Athlete</option>
                  <option value="admin">SAI Official</option>
                  <option value="coach">Coach/Parent</option>
                </select>
              </div>

              {!isLogin && (
                <>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input pl-12 ${errors.name ? 'border-red-300 focus:ring-red-500' : ''}`}
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  {formData.role === 'athlete' && (
                    <>
                      {/* Phone and Age */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="input pl-12"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                              type="number"
                              name="age"
                              placeholder="Age"
                              value={formData.age}
                              onChange={handleChange}
                              min="10"
                              max="35"
                              className={`input pl-12 ${errors.age ? 'border-red-300 focus:ring-red-500' : ''}`}
                            />
                          </div>
                          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                        </div>
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* State and District */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            State
                          </label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="input"
                          >
                            <option value="">Select State</option>
                            {states.map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            District
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                              type="text"
                              name="district"
                              placeholder="District"
                              value={formData.district}
                              onChange={handleChange}
                              className="input pl-12"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Sport Preference */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Sport
                        </label>
                        <select
                          name="sport"
                          value={formData.sport}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select Sport</option>
                          {sports.map(sport => (
                            <option key={sport} value={sport}>{sport}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input pl-12 ${errors.email ? 'border-red-300 focus:ring-red-500' : ''}`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`input pl-12 pr-12 ${errors.password ? 'border-red-300 focus:ring-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`input pl-12 pr-12 ${errors.confirmPassword ? 'border-red-300 focus:ring-red-500' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full btn-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                )}
              </button>

              {/* Toggle */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setErrors({});
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {isLogin 
                    ? "Don't have an account? Sign Up" 
                    : 'Already have an account? Sign In'
                  }
                </button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="h-4 w-4 text-purple-600" />
                  <span>Official</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}