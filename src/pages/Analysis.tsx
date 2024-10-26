import React from 'react';
import { TrendingUp, ArrowUpDown, PieChart, Activity } from 'lucide-react';

const analysisTools = [
  {
    title: "Technical Analysis",
    description: "Advanced charting tools and technical indicators",
    tools: ["Moving Averages", "RSI", "MACD", "Bollinger Bands"],
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Fundamental Analysis",
    description: "Company financials and market metrics",
    tools: ["Financial Ratios", "Balance Sheets", "Cash Flow", "Income Statements"],
    icon: <PieChart className="w-8 h-8 text-green-400" />
  },
  {
    title: "Market Sentiment",
    description: "Social and news sentiment analysis",
    tools: ["News Analysis", "Social Media Trends", "Market Sentiment", "Volume Analysis"],
    icon: <Activity className="w-8 h-8 text-purple-400" />
  }
];

export default function Analysis() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Market Analysis</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {analysisTools.map((tool, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-8">
            <div className="flex items-center mb-6">
              {tool.icon}
              <h3 className="text-xl font-semibold ml-4">{tool.title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{tool.description}</p>
            <ul className="space-y-3">
              {tool.tools.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <ArrowUpDown className="w-4 h-4 mr-2 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}