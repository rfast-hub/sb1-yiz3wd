import React from 'react';
import { Calculator, Search, Bell, Wallet, Settings, Share2 } from 'lucide-react';

const tools = [
  {
    icon: <Calculator className="w-8 h-8 text-blue-400" />,
    title: "Position Calculator",
    description: "Calculate position sizes, profit targets, and risk levels",
    action: "Launch Calculator"
  },
  {
    icon: <Search className="w-8 h-8 text-green-400" />,
    title: "Stock Screener",
    description: "Find stocks matching your custom criteria",
    action: "Open Screener"
  },
  {
    icon: <Bell className="w-8 h-8 text-yellow-400" />,
    title: "Price Alerts",
    description: "Set up custom alerts for price movements",
    action: "Set Alerts"
  },
  {
    icon: <Wallet className="w-8 h-8 text-purple-400" />,
    title: "Portfolio Tracker",
    description: "Track and analyze your investment portfolio",
    action: "View Portfolio"
  },
  {
    icon: <Settings className="w-8 h-8 text-red-400" />,
    title: "Strategy Builder",
    description: "Create and backtest custom trading strategies",
    action: "Build Strategy"
  },
  {
    icon: <Share2 className="w-8 h-8 text-cyan-400" />,
    title: "Trading Journal",
    description: "Log and analyze your trades",
    action: "Open Journal"
  }
];

export default function Tools() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Trading Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-8">
            <div className="flex items-center mb-6">
              {tool.icon}
              <h3 className="text-xl font-semibold ml-4">{tool.title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{tool.description}</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition">
              {tool.action}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}