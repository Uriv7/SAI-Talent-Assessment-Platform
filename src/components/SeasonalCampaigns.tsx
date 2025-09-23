import React, { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Star, Clock, Target, Zap } from 'lucide-react';

interface Campaign {
  id: string;
  title: string;
  description: string;
  type: 'national' | 'regional' | 'district';
  startDate: string;
  endDate: string;
  location: string;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'active' | 'completed';
  rewards: string[];
  requirements: string[];
  image: string;
}

export default function SeasonalCampaigns() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const campaigns: Campaign[] = [
    {
      id: 'winter-talent-hunt-2024',
      title: 'Winter Talent Hunt 2024',
      description: 'National talent identification program focusing on winter sports preparation and general fitness assessment.',
      type: 'national',
      startDate: '2024-12-20',
      endDate: '2025-01-15',
      location: 'All India',
      participants: 15420,
      maxParticipants: 50000,
      status: 'active',
      rewards: [
        'Top 100 get SAI training camp invitation',
        'Digital certificates for all participants',
        'Special winter sports gear for top performers'
      ],
      requirements: [
        'Age: 14-25 years',
        'Complete all 5 fitness tests',
        'Submit video recordings'
      ],
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 'maharashtra-sprint-festival',
      title: 'Maharashtra Sprint Festival',
      description: 'State-level sprint competition to identify fastest athletes across all age groups.',
      type: 'regional',
      startDate: '2025-01-10',
      endDate: '2025-01-25',
      location: 'Maharashtra',
      participants: 2840,
      maxParticipants: 10000,
      status: 'upcoming',
      rewards: [
        'State team selection opportunity',
        'Sprint training scholarship',
        'Professional coaching sessions'
      ],
      requirements: [
        'Maharashtra residents only',
        'Complete sprint tests',
        'Minimum 70 score required'
      ],
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 'nashik-endurance-challenge',
      title: 'Nashik Endurance Challenge',
      description: 'District-level endurance competition for long-distance running enthusiasts.',
      type: 'district',
      startDate: '2025-02-01',
      endDate: '2025-02-14',
      location: 'Nashik District',
      participants: 456,
      maxParticipants: 2000,
      status: 'upcoming',
      rewards: [
        'District champion title',
        'Running gear package',
        'Nutrition consultation'
      ],
      requirements: [
        'Nashik district residents',
        'Complete endurance tests',
        'Medical clearance required'
      ],
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 'summer-olympics-prep-2024',
      title: 'Summer Olympics Preparation',
      description: 'Elite athlete identification program for Olympic sports preparation.',
      type: 'national',
      startDate: '2024-11-01',
      endDate: '2024-12-15',
      location: 'All India',
      participants: 8950,
      maxParticipants: 25000,
      status: 'completed',
      rewards: [
        'Olympic training center access',
        'International coaching exposure',
        'Sports science support'
      ],
      requirements: [
        'Age: 16-28 years',
        'Exceptional fitness scores',
        'Previous competition experience'
      ],
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const campaignTypes = [
    { id: 'all', name: 'All Campaigns', icon: Calendar },
    { id: 'national', name: 'National', icon: Trophy },
    { id: 'regional', name: 'Regional', icon: MapPin },
    { id: 'district', name: 'District', icon: Users }
  ];

  const filteredCampaigns = selectedType === 'all' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.type === selectedType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'national': return 'from-red-500 to-orange-500';
      case 'regional': return 'from-blue-500 to-cyan-500';
      case 'district': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Zap className="h-4 w-4" />;
      case 'upcoming': return <Clock className="h-4 w-4" />;
      case 'completed': return <Trophy className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Seasonal Campaigns & Talent Hunts</h2>
          <p className="text-sm text-gray-600">Join national and regional talent identification programs</p>
        </div>
      </div>

      {/* Campaign Type Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {campaignTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                selectedType === type.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{type.name}</span>
            </button>
          );
        })}
      </div>

      {/* Campaigns Grid */}
      <div className="space-y-6">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Campaign Image */}
              <div className="lg:w-1/3">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(campaign.status)} flex items-center space-x-1`}>
                      {getStatusIcon(campaign.status)}
                      <span>{campaign.status.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTypeColor(campaign.type)} text-white`}>
                      {campaign.type.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Details */}
              <div className="lg:w-2/3">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                  </div>
                </div>

                {/* Campaign Info */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{campaign.participants.toLocaleString()} / {campaign.maxParticipants.toLocaleString()} participants</span>
                    </div>
                  </div>

                  {/* Participation Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Participation</span>
                      <span className="text-sm text-gray-500">
                        {Math.round((campaign.participants / campaign.maxParticipants) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getTypeColor(campaign.type)} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${(campaign.participants / campaign.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {campaign.requirements.map((req, index) => (
                      <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rewards */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Rewards:</h4>
                  <div className="space-y-1">
                    {campaign.rewards.map((reward, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mt-0.5" />
                        <span>{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  {campaign.status === 'active' && (
                    <button className={`bg-gradient-to-r ${getTypeColor(campaign.type)} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all flex items-center space-x-2`}>
                      <Target className="h-4 w-4" />
                      <span>Join Campaign</span>
                    </button>
                  )}
                  {campaign.status === 'upcoming' && (
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-all flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Register Interest</span>
                    </button>
                  )}
                  {campaign.status === 'completed' && (
                    <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed flex items-center space-x-2">
                      <Trophy className="h-4 w-4" />
                      <span>View Results</span>
                    </button>
                  )}
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events Highlight */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 mb-1">🎯 Don't Miss Out!</h4>
            <p className="text-sm text-yellow-800">
              The Winter Talent Hunt 2024 is currently active with over 15,000 participants. 
              Join now to showcase your talent on a national platform!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}