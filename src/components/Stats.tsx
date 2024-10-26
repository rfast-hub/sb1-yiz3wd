import React from 'react';

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "50M+", label: "Data Points" },
  { value: "24/7", label: "Support" },
  { value: "150+", label: "Markets" }
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-700/30 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}