import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  QrCode, 
  Calendar,
  MapPin,
  Target,
  TrendingUp,
  Medal,
  CheckCircle
} from 'lucide-react';

interface ReportCardProps {
  athleteData: {
    name: string;
    age: number;
    location: string;
    testResults: Record<string, { score: number; percentile: number; date: string }>;
    overallScore: number;
    rank: number;
    achievements: string[];
  };
}

export default function DigitalReportCard({ athleteData }: ReportCardProps) {
  const [showQR, setShowQR] = useState(false);

  const generateReportId = () => {
    return `SAI-${Date.now().toString(36).toUpperCase()}`;
  };

  const reportId = generateReportId();
  const verificationUrl = `https://sai-talent.gov.in/verify/${reportId}`;

  const getGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { grade: 'A', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 70) return { grade: 'B+', color: 'text-orange-600', bg: 'bg-orange-100' };
    if (score >= 60) return { grade: 'B', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { grade: 'C', color: 'text-gray-600', bg: 'bg-gray-100' };
  };

  const overallGrade = getGrade(athleteData.overallScore);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Digital Fitness Report Card</h1>
                <p className="text-blue-100">Sports Authority of India</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Report ID</div>
              <div className="font-mono text-lg">{reportId}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{athleteData.name}</h2>
              <div className="space-y-1 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{athleteData.age} years old</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{athleteData.location}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${overallGrade.bg} border-4 border-white mb-2`}>
                <span className={`text-2xl font-bold ${overallGrade.color}`}>{overallGrade.grade}</span>
              </div>
              <div className="text-3xl font-bold">{athleteData.overallScore}/100</div>
              <div className="text-blue-100">Overall Score</div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold">#{athleteData.rank}</div>
              <div className="text-blue-100">State Ranking</div>
              <div className="mt-2">
                <div className="text-sm text-blue-100">Generated on</div>
                <div className="font-semibold">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Test Results */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-600" />
          <span>Test Performance Summary</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {Object.entries(athleteData.testResults).map(([testName, result]) => {
            const grade = getGrade(result.score);
            return (
              <div key={testName} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{testName.replace('-', ' ').toUpperCase()}</h4>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${grade.bg} ${grade.color}`}>
                    {grade.grade}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{result.score}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{result.percentile}%</div>
                    <div className="text-xs text-gray-500">Percentile</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700">{result.date}</div>
                    <div className="text-xs text-gray-500">Date</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Medal className="h-5 w-5 text-orange-600" />
            <span>Digital Talent Badges</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {athleteData.achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-semibold text-gray-900 text-sm">{achievement}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Performance Insights & Recommendations</span>
          </h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Excellent overall fitness level with consistent performance across tests</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Strong potential for athletics and team sports based on current metrics</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Recommended for advanced training programs and talent development initiatives</span>
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Certificate Verification</h4>
              <p className="text-sm text-gray-600">This report is digitally signed and verifiable via QR code</p>
              <p className="text-xs text-gray-500 mt-1">Verification URL: {verificationUrl}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <QrCode className="h-4 w-4" />
                <span>QR Code</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {showQR && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
              <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <p className="text-xs text-gray-600">Scan to verify this certificate</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <Award className="h-4 w-4" />
            <span>Certified by Sports Authority of India</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            This digital certificate is issued under the National Talent Assessment Program
          </p>
        </div>
      </div>
    </div>
  );
}