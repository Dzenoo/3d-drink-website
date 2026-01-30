'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/shared/animations/Reveal';

const flavors = [
  {
    id: 'strawberry',
    name: 'Strawberry Burst',
    color: 'from-pink-500 to-red-500',
    bgGlow: 'rgba(236,72,153,0.3)',
    description: 'Sweet and refreshing with real strawberry essence',
  },
  {
    id: 'orange',
    name: 'Orange Surge',
    color: 'from-orange-400 to-orange-600',
    bgGlow: 'rgba(251,146,60,0.3)',
    description: 'Citrus explosion with a tangy twist',
  },
  {
    id: 'lemon',
    name: 'Lemon Shock',
    color: 'from-yellow-400 to-lime-500',
    bgGlow: 'rgba(250,204,21,0.3)',
    description: 'Zesty and electrifying lemon flavor',
  },
  {
    id: 'berry',
    name: 'Berry Blast',
    color: 'from-purple-500 to-indigo-600',
    bgGlow: 'rgba(168,85,247,0.3)',
    description: 'Mixed berries for a bold, fruity taste',
  },
];

export default function Flavors() {
  const [selected, setSelected] = useState(flavors[0]);

  return (
    <div className="relative flex min-h-screen w-screen overflow-hidden py-16 lg:items-center lg:py-0">
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${selected.bgGlow}, transparent 30%)`,
        }}
      />

      <div className="relative z-10 mx-4 w-full sm:mx-6 lg:mx-0 lg:ml-auto lg:mr-10 lg:w-auto lg:max-w-xl xl:mr-20">
        <Reveal inView>
          <span className="text-xs uppercase tracking-widest text-white/60 sm:text-sm">
            Choose Your Flavor
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl lg:text-5xl xl:text-6xl">
            Find Your
            <span
              className={`block bg-gradient-to-r ${selected.color} bg-clip-text text-transparent transition-all duration-500`}
            >
              Perfect Match
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="mt-3 text-sm text-white/60 sm:mt-4 sm:text-base">
            Four unique flavors, each crafted to deliver the perfect balance of
            taste and energy.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
          {flavors.map((flavor, i) => (
            <Reveal key={i} inView delay={i * 0.1}>
              <button
                onClick={() => setSelected(flavor)}
                className={`relative h-full w-full rounded-xl border p-3 text-left transition-all duration-300 sm:rounded-2xl sm:p-4 ${
                  selected.id === flavor.id
                    ? 'border-white/30 bg-white/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                {selected.id === flavor.id && (
                  <Check className="absolute right-2 top-2 h-3 w-3 text-green-400 sm:right-3 sm:top-3 sm:h-4 sm:w-4" />
                )}
                <div
                  className={`mb-1.5 h-6 w-6 rounded-full bg-gradient-to-r ${flavor.color} sm:mb-2 sm:h-8 sm:w-8`}
                />
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {flavor.name}
                </h3>
                <p className="mt-0.5 line-clamp-2 text-xs text-white/40 sm:mt-1 sm:text-sm">
                  {flavor.description}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal inView>
          <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <button
              className={`w-full rounded-full bg-gradient-to-r ${selected.color} px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-base`}
            >
              Add to Cart — $2.99
            </button>
            <span className="text-xs text-white/40 sm:text-sm">
              or subscribe & save 20%
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
