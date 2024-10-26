import React from 'react';
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Target, 
  Lightbulb,
  CandlestickChart,
  Gauge,
  Sparkles
} from 'lucide-react';

const features = [
  { icon: <BarChart3 className="h-8 w-8 text-blue-400" />, title: "Market Analysis", desc: "Real-time market data and comprehensive analysis tools" },
  { icon: <Brain className="h-8 w-8 text-purple-400" />, title: "AI Insights", desc: "Advanced AI-powered trading recommendations" },
  { icon: <TrendingUp className="h-8 w-8 text-green-400" />, title: "Technical Tools", desc: "Professional-grade technical analysis tools" },
  { icon: <Target className="h-8 w-8 text-red-400" />, title: "Market Overview", desc: "Comprehensive market trends and patterns" },
  { icon: <CandlestickChart className="h-8 w-8 text-yellow-400" />, title: "Stock Analysis", desc: "Detailed stock screening and analysis" },
  { icon: <Gauge className="h-8 w-8 text-cyan-400" />, title: "Technical Indicators", desc: "Advanced technical indicators and signals" },
  { icon: <Lightbulb className="h-8 w-8 text-orange-400" />, title: "AI Recommendations", desc: "Smart trade recommendations powered by AI" },
  { icon: <Sparkles className="h-8 w-8 text-indigo-400" />, title: "Advanced Predictions", desc: "Predictive analytics for market movements" }
];

export function Features() {
  return (
    <section className="bg-slate-800/50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Comprehensive Trading Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}