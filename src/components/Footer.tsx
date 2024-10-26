import React from 'react';
import { LineChart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Tradewise</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Tradewise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}