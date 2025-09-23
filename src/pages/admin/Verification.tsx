import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  Shield, 
  Play, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Eye,
  Clock,
  User,
  Target
} from 'lucide-react';

export default function Verification() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [verificationStatus, setVerificationStatus] = useState<string>('');

  const pendingVideos = [
    {
      id: 1,
      athlete: 'Priya Patel',
      test: 'Vertical Jump',
      submittedAt: '4 hours ago',
      aiScore: 88,
      flagged: false,
      duration: '0:32',
      fileSize: '24.5 MB',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face',
      location: 'Pune, Maharashtra',
      videoUrl: '#'
    },
    {
      id: 2,
      athlete: 'Vikram Singh',
      test: 'Sit-ups',
      submittedAt: '6 hours ago',
      aiScore: 76,
      flagged: true,
      flagReason: 'Potential editing detected',
      duration: '1:05',
      fileSize: '42.1 MB',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face',
      location: 'Amritsar, Punjab',
      videoUrl: '#'
    },
    {
      id: 3,
      athlete: 'Rajesh Kumar',
      test: '100m Sprint',
      submittedAt: '8 hours ago',
      aiScore: 82,
      flagged: false,
      duration: '0:28',
      fileSize: '31.2 MB',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face',
      location: 'Nashik, Maharashtra',
      videoUrl: '#'
    },
    {
      id: 4,
      athlete: 'Kavya Reddy',
      test: 'Shuttle Run',
      submittedAt: '12 hours ago',
      aiScore: 85,
      flagged: true,
      flagReason: 'Lighting conditions unclear',
      duration: '2:15',
      fileSize: '67.8 MB',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face',
      location: 'Hyderabad, Telangana',
      videoUrl: '#'
    }
  ];

  const recentlyVerified = [
    {
      athlete: 'Arjun Sharma',
      test: '100m Sprint',
      finalScore: 94,
      verifiedAt: '2 hours ago',
      status: 'approved'
    },
    {
      athlete: 'Neha Gupta',
      test: 'Vertical Jump',
      finalScore: 0,
      verifiedAt: '3 hours ago',
      status: 'rejected',
      reason: 'Video quality insufficient'
    }
  ];

  const handleVideoSelect = (video: any) => {
    setSelectedVideo(video);
    setVerificationStatus('');
  };

  const handleVerification = (status: string) => {
    setVerificationStatus(status);
    // Simulate verification process
    setTimeout(() => {
      setSelectedVideo(null);
      setVerificationStatus('');
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Video Verification Center</h1>
          <p className="text-green-100">Review and verify athlete test submissions for accuracy and authenticity</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">156</div>
            <p className="text-gray-600">Pending Reviews</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">1,923</div>
            <p className="text-gray-600">Verified Today</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">47</div>
            <p className="text-gray-600">Rejected Today</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-yellow-600 mb-2">23</div>
            <p className="text-gray-600">AI Flagged</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pending Videos List */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Pending Verification</h2>
              <p className="text-sm text-gray-500 mt-1">Click on a video to review</p>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {pendingVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedVideo?.id === video.id ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={video.avatar}
                      alt={video.athlete}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{video.athlete}</h3>
                        {video.flagged && (
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{video.test}</p>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>{video.submittedAt}</span>
                        <span>AI: {video.aiScore}/100</span>
                      </div>
                      {video.flagged && (
                        <p className="text-xs text-yellow-600 mt-1">{video.flagReason}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Review Panel */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100">
            {selectedVideo ? (
              <div className="p-6">
                {/* Video Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedVideo.avatar}
                      alt={selectedVideo.athlete}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedVideo.athlete}</h2>
                      <p className="text-gray-600">{selectedVideo.test} • {selectedVideo.location}</p>
                    </div>
                  </div>
                  {selectedVideo.flagged && (
                    <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2 text-yellow-800">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">AI Flagged</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">{selectedVideo.flagReason}</p>
                    </div>
                  )}
                </div>

                {/* Video Player */}
                <div className="bg-gray-900 rounded-lg aspect-video mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-70" />
                    <p className="text-lg">Video Player</p>
                    <p className="text-sm opacity-70">Duration: {selectedVideo.duration}</p>
                  </div>
                </div>

                {/* Video Details */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">AI Analysis</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Confidence Score:</span>
                        <span className="font-bold text-blue-600">{selectedVideo.aiScore}/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Form Analysis:</span>
                        <span className="text-green-600">Good</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Motion Tracking:</span>
                        <span className="text-green-600">Accurate</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>File Size:</span>
                        <span>{selectedVideo.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedVideo.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Resolution:</span>
                        <span>1080p</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Submission Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Submitted:</span>
                        <span>{selectedVideo.submittedAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Device:</span>
                        <span>Mobile</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Actions */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Verification Decision</h3>
                  {verificationStatus ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Processing verification...</p>
                    </div>
                  ) : (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleVerification('approved')}
                        className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="h-5 w-5" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleVerification('rejected')}
                        className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <XCircle className="h-5 w-5" />
                        <span>Reject</span>
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        Need More Info
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-center text-gray-500">
                  <Eye className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Select a video to review</p>
                  <p className="text-sm">Choose from the pending submissions list</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Verification Activity</h2>
          <div className="space-y-4">
            {recentlyVerified.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${item.status === 'approved' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {item.status === 'approved' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.athlete}</h3>
                    <p className="text-sm text-gray-600">
                      {item.test} • {item.status === 'approved' ? `Score: ${item.finalScore}` : item.reason}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{item.verifiedAt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}