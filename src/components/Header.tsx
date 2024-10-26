import React from 'react';
import { LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <LineChart className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">Tradewise</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-300 hover:text-white transition">
            Login
          </Link>
          <Link to="/signup" className="text-white bg-blue-600/30 hover:bg-blue-600/50 px-4 py-2 rounded-lg transition">
            Sign Up
          </Link>
        </div>
      </nav>
      
      <div className="flex flex-col md:flex-row items-center justify-between mt-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">
            Smart Trading Decisions with AI-Powered Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your all-in-one platform for comprehensive market analysis, AI-driven insights, and advanced trading tools.
          </p>
          <a 
            href="https://buy.stripe.com/test_28o14t4sA4N92nmaEG" 
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg transition text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <LineChart className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"
            alt="Trading Dashboard"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}