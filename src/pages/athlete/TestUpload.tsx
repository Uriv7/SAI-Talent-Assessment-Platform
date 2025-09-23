import React, { useState } from 'react';
import Layout from '../../components/Layout';
import VirtualCoach from '../../components/VirtualCoach';
import AdaptiveTesting from '../../components/AdaptiveTesting';
import { 
  Upload, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  Camera,
  Timer,
  Target,
  Zap,
  Info
} from 'lucide-react';

export default function TestUpload() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'complete'>('idle');
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [showAdaptiveTesting, setShowAdaptiveTesting] = useState(false);
  const [adaptiveRecommendations, setAdaptiveRecommendations] = useState<any[]>([]);

  // Mock athlete profile for adaptive testing
  const athleteProfile = {
    age: 20,
    height: 175,
    weight: 68,
    fitnessLevel: 'intermediate' as const,
    previousScores: {
      'sprint-100m': 78,
      'vertical-jump': 72,
      'sit-ups': 85
    },
    injuries: []
  };

  const tests = [
    {
      id: 'sprint-100m',
      name: '100m Sprint',
      description: 'Record your 100-meter sprint time',
      icon: Zap,
      duration: '15-20 seconds',
      equipment: 'Markers, Timer',
      instructions: [
        'Set up start and finish line markers 100m apart',
        'Start recording before getting into position',
        'Sprint at maximum speed from start to finish',
        'Keep camera steady and capture full run'
      ]
    },
    {
      id: 'vertical-jump',
      name: 'Vertical Jump',
      description: 'Measure your maximum vertical jump height',
      icon: Target,
      duration: '30 seconds',
      equipment: 'Wall, Measuring tape',
      instructions: [
        'Stand sideways next to a wall with measuring marks',
        'Jump as high as possible and touch the wall',
        'Perform 3 attempts with brief rest between',
        'Camera should capture full body and wall markings'
      ]
    },
    {
      id: 'sit-ups',
      name: 'Sit-ups (1 minute)',
      description: 'Complete maximum sit-ups in 60 seconds',
      icon: Timer,
      duration: '1 minute',
      equipment: 'Exercise mat',
      instructions: [
        'Lie on your back with knees bent',
        'Hands behind head or crossed on chest',
        'Complete full sit-up touching knees with elbows',
        'Camera should show full body from side view'
      ]
    },
    {
      id: 'shuttle-run',
      name: 'Shuttle Run',
      description: '20-meter shuttle run test',
      icon: Play,
      duration: '2-3 minutes',
      equipment: 'Cones, Timer',
      instructions: [
        'Set up cones 20 meters apart',
        'Run back and forth between cones',
        'Touch the line/cone at each turn',
        'Continue until instructed to stop'
      ]
    }
  ];

  const handleTestSelect = (testId: string) => {
    setSelectedTest(testId);
    setUploadStatus('idle');
    setAnalysisResults(null);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus('uploading');
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploadStatus('analyzing');

    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results
    const mockResults = {
      score: Math.floor(Math.random() * 30) + 70,
      feedback: [
        'Great form maintained throughout',
        'Consistent pace and technique',
        'Room for improvement in explosive power'
      ],
      benchmarkComparison: {
        ageGroup: '18-22 years',
        percentile: Math.floor(Math.random() * 40) + 60,
        national: Math.floor(Math.random() * 20) + 70
      },
      aiInsights: [
        'Your technique shows strong fundamentals',
        'Focus on explosive starts for better times',
        'Consider strength training for power development'
      ]
    };

    setAnalysisResults(mockResults);
    setUploadStatus('complete');
  };

  const handleTestAdjustment = (adjustments: any[]) => {
    setAdaptiveRecommendations(adjustments);
  };

  const selectedTestData = tests.find(t => t.id === selectedTest);

  return (
    <Layout>
      <VirtualCoach 
        testType={selectedTest || undefined}
        performanceData={analysisResults}
        isActive={uploadStatus === 'analyzing' || uploadStatus === 'complete'}
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Upload className="h-8 w-8" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">Smart Fitness Assessment</h1>
                    <p className="text-blue-100 text-lg">AI-powered testing with personalized coaching and adaptive protocols</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowAdaptiveTesting(!showAdaptiveTesting)}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-6 py-3 rounded-xl transition-all flex items-center space-x-2 hover:scale-105 shadow-lg"
              >
                <Target className="h-5 w-5" />
                <span>Adaptive Testing</span>
              </button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
        </div>

        {/* Adaptive Testing Panel */}
        {showAdaptiveTesting && (
          <AdaptiveTesting 
            athleteProfile={athleteProfile}
            onTestAdjustment={handleTestAdjustment}
          />
        )}

        {!selectedTest ? (
          /* Test Selection */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {tests.map((test) => {
              const Icon = test.icon;
              const hasAdaptiveRecommendation = adaptiveRecommendations.find(r => r.testId === test.id);
              return (
                <div
                  key={test.id}
                  onClick={() => handleTestSelect(test.id)}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden group backdrop-blur-sm"
                >
                  {hasAdaptiveRecommendation && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg animate-pulse">
                        <Sparkles className="h-3 w-3" />
                        <span>ADAPTIVE</span>
                      </div>
                    </div>
                  )}
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>⏱️ {test.duration}</span>
                    <span>📱 Video Required</span>
                  </div>
                  {hasAdaptiveRecommendation && (
                    <div className="text-xs text-purple-600 font-medium">
                      <div className="flex items-center space-x-1">
                        <Sparkles className="h-3 w-3" />
                        <span>Customized for your level</span>
                      </div>
                    </div>
                  )}
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Test Recording Interface */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Instructions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-6 backdrop-blur-sm">
                <button
                  onClick={() => setSelectedTest(null)}
                  className="text-blue-600 hover:text-blue-700 mb-4 flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  ← Back to Tests
                </button>
                
                <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4 inline-block shadow-lg">
                  <selectedTestData.icon className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedTestData.name}</h2>
                <p className="text-gray-600 mb-6">{selectedTestData.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <Timer className="h-4 w-4 text-gray-500" />
                    <span>Duration: {selectedTestData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Target className="h-4 w-4 text-gray-500" />
                    <span>Equipment: {selectedTestData.equipment}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-6 shadow-inner">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Instructions</h3>
                      <ol className="text-sm text-yellow-800 space-y-1 list-decimal list-inside">
                        {selectedTestData.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 shadow-inner">
                  <div className="flex items-start space-x-2">
                    <Camera className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">Recording Tips</h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Hold phone horizontally (landscape)</li>
                        <li>• Ensure good lighting</li>
                        <li>• Keep camera steady</li>
                        <li>• Record entire test duration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 backdrop-blur-sm">
                {uploadStatus === 'idle' && (
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-blue-400 transition-all hover:bg-blue-50/50">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-4 w-fit shadow-lg">
                        <Upload className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Test Video</h3>
                      <p className="text-gray-600 mb-6">Select a video file from your device</p>
                      <label className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all cursor-pointer inline-block hover:scale-105 shadow-lg">
                        Choose Video File
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-sm text-gray-500 mt-4">Supported formats: MP4, MOV, AVI (Max: 500MB)</p>
                    </div>
                  </div>
                )}

                {uploadStatus === 'uploading' && (
                  <div className="text-center py-12">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-25"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uploading Video...</h3>
                    <p className="text-gray-600">Please wait while we process your video</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-4 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full animate-pulse shadow-lg" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                )}

                {uploadStatus === 'analyzing' && (
                  <div className="text-center py-12">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto mb-4"></div>
                      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
                      <Sparkles className="h-6 w-6 text-green-600 absolute top-5 left-1/2 transform -translate-x-1/2 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis in Progress...</h3>
                    <p className="text-gray-600">Our AI is analyzing your performance and form</p>
                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <p>✓ Video quality check complete</p>
                      <p>✓ Movement detection in progress</p>
                      <p>⏳ Performance analysis running...</p>
                    </div>
                  </div>
                )}

                {uploadStatus === 'complete' && analysisResults && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 w-fit shadow-lg">
                          <CheckCircle className="h-16 w-16 text-white animate-bounce" />
                        </div>
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Analysis Complete!</h3>
                      <p className="text-gray-600">Here are your results and AI-powered insights</p>
                    </div>

                    {/* Score Card */}
                    <div className="bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      <div className="relative z-10">
                      <h4 className="text-lg font-semibold mb-2">Your Score</h4>
                        <div className="text-7xl font-bold mb-2 animate-count-up">{analysisResults.score}</div>
                      <div className="text-green-100">Out of 100</div>
                        <div className="mt-6 flex items-center justify-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <div className="p-1 bg-white/20 rounded-full">
                              <Trophy className="h-4 w-4" />
                            </div>
                            <span>Personal Best!</span>
                          </div>
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    {/* Benchmark Comparison */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Benchmark Comparison</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 animate-count-up">{analysisResults.benchmarkComparison.percentile}%</div>
                          <div className="text-sm text-gray-600">Age Group Percentile</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-2000"
                              style={{ width: `${analysisResults.benchmarkComparison.percentile}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 animate-count-up">{analysisResults.benchmarkComparison.national}%</div>
                          <div className="text-sm text-gray-600">National Average</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full transition-all duration-2000"
                              style={{ width: `${analysisResults.benchmarkComparison.national}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-orange-600">#{Math.floor(Math.random() * 100) + 1}</div>
                          <div className="text-sm text-gray-600">State Ranking</div>
                          <div className="text-xs text-orange-600 font-medium mt-1">↑ Moved up 3 positions!</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Feedback */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-4">AI Performance Feedback</h4>
                      <div className="space-y-3">
                        {analysisResults.feedback.map((item: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3 animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Improvement Recommendations</h4>
                      <div className="space-y-3">
                        {analysisResults.aiInsights.map((insight: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3 animate-slide-in" style={{ animationDelay: `${index * 300}ms` }}>
                            <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                            <span className="text-gray-700">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">🏆</div>
                      <h4 className="font-bold text-yellow-800 mb-1">New Achievement Unlocked!</h4>
                      <p className="text-sm text-yellow-700">Top 25% in State Rankings</p>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          setUploadStatus('idle');
                          setAnalysisResults(null);
                        }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                      >
                        Record Another Test
                      </button>
                      <button
                        onClick={() => setSelectedTest(null)}
                        className="flex-1 border border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
                      >
                        Back to Test Selection
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}