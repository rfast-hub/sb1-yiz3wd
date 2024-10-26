import React from 'react';
import { Shield, Zap, LineChart, Brain, BarChart4, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    title: "Risk Management",
    description: "Advanced risk assessment tools and portfolio protection strategies"
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    title: "Real-Time Alerts",
    description: "Instant notifications for price movements and market opportunities"
  },
  {
    icon: <LineChart className="w-12 h-12 text-green-400" />,
    title: "Performance Tracking",
    description: "Detailed portfolio performance analytics and reporting"
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    title: "AI Trading Signals",
    description: "Machine learning-powered trade signals and market predictions"
  },
  {
    icon: <BarChart4 className="w-12 h-12 text-red-400" />,
    title: "Advanced Charts",
    description: "Professional-grade charting tools with multiple timeframes"
  },
  {
    icon: <Share2 className="w-12 h-12 text-cyan-400" />,
    title: "Social Trading",
    description: "Connect with other traders and share investment strategies"
  }
];

export default function Features() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Platform Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}