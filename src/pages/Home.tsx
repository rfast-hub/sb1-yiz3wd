import React from 'react';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { CTA } from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Features />
      <Stats />
      <CTA />
    </main>
  );
}