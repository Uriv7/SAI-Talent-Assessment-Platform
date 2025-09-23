import React, { useState } from 'react';
import Layout from '../../components/Layout';
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

  const selectedTestData = tests.find(t => t.id === selectedTest);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Record Fitness Tests</h1>
          <p className="text-blue-100">Follow the guided instructions and let our AI analyze your performance</p>
        </div>

        {!selectedTest ? (
          /* Test Selection */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tests.map((test) => {
              const Icon = test.icon;
              return (
                <div
                  key={test.id}
                  onClick={() => handleTestSelect(test.id)}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="p-3 bg-blue-100 rounded-lg mb-4 inline-block">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⏱️ {test.duration}</span>
                    <span>📱 Video Required</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Test Recording Interface */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Instructions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-6">
                <button
                  onClick={() => setSelectedTest(null)}
                  className="text-blue-600 hover:text-blue-700 mb-4 flex items-center space-x-2"
                >
                  ← Back to Tests
                </button>
                
                <div className="p-3 bg-blue-100 rounded-lg mb-4 inline-block">
                  <selectedTestData.icon className="h-8 w-8 text-blue-600" />
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

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
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

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                {uploadStatus === 'idle' && (
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-blue-400 transition-colors">
                      <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Test Video</h3>
                      <p className="text-gray-600 mb-6">Select a video file from your device</p>
                      <label className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all cursor-pointer inline-block">
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
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uploading Video...</h3>
                    <p className="text-gray-600">Please wait while we process your video</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                      <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                )}

                {uploadStatus === 'analyzing' && (
                  <div className="text-center py-12">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                      <Zap className="h-6 w-6 text-green-600 absolute top-5 left-1/2 transform -translate-x-1/2" />
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
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Analysis Complete!</h3>
                      <p className="text-gray-600">Here are your results and AI-powered insights</p>
                    </div>

                    {/* Score Card */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white text-center">
                      <h4 className="text-lg font-semibold mb-2">Your Score</h4>
                      <div className="text-5xl font-bold mb-2">{analysisResults.score}</div>
                      <div className="text-green-100">Out of 100</div>
                    </div>

                    {/* Benchmark Comparison */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Benchmark Comparison</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{analysisResults.benchmarkComparison.percentile}%</div>
                          <div className="text-sm text-gray-600">Age Group Percentile</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{analysisResults.benchmarkComparison.national}%</div>
                          <div className="text-sm text-gray-600">National Average</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">#{Math.floor(Math.random() * 100) + 1}</div>
                          <div className="text-sm text-gray-600">State Ranking</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Feedback */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">AI Performance Feedback</h4>
                      <div className="space-y-3">
                        {analysisResults.feedback.map((item: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Improvement Recommendations</h4>
                      <div className="space-y-3">
                        {analysisResults.aiInsights.map((insight: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                            <span className="text-gray-700">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          setUploadStatus('idle');
                          setAnalysisResults(null);
                        }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg hover:opacity-90 transition-all"
                      >
                        Record Another Test
                      </button>
                      <button
                        onClick={() => setSelectedTest(null)}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all"
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