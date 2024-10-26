import React from 'react';

export function CTA() {
  return (
    <section className="py-20 bg-blue-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Start Trading Smarter Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of traders who are making informed decisions with Tradewise's advanced analytics and AI-powered insights.
        </p>
        <a 
          href="https://buy.stripe.com/test_28o14t4sA4N92nmaEG" 
          className="inline-block bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-lg transition font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}