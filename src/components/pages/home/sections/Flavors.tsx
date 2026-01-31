'use client';

import { Cherry, Sun, Sparkles, ShieldCheck, LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/shared/animations/Reveal';

const highlights: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Cherry,
    title: 'Real Strawberries',
    description: 'Made with sun-ripened strawberry extract, never artificial flavoring',
  },
  {
    icon: Sun,
    title: 'Bold & Refreshing',
    description: 'Sweet berry notes balanced with a crisp, clean finish',
  },
  {
    icon: Sparkles,
    title: 'No Aftertaste',
    description: 'Smooth flavor profile without the chemical bite of other drinks',
  },
  {
    icon: ShieldCheck,
    title: 'Clean Label',
    description: 'No artificial colors, sweeteners, or preservatives — ever',
  },
];

export default function Flavors() {
  return (
    <div className="relative flex min-h-screen w-screen overflow-hidden py-16 lg:items-center lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(236,72,153,0.2),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(239,68,68,0.1),_transparent_25%)]" />

      <div className="relative z-10 mx-4 w-full sm:mx-6 lg:mx-0 lg:ml-auto lg:mr-10 lg:w-auto lg:max-w-xl xl:mr-20">
        <Reveal inView>
          <span className="text-xs uppercase tracking-widest text-pink-400 sm:text-sm">
            Why Strawberry
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl lg:text-5xl xl:text-6xl">
            Taste That
            <span className="block bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Speaks For Itself
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="mt-3 text-sm text-white/60 sm:mt-4 sm:text-base">
            We didn't pick strawberry by accident. It's the flavor our testers
            chose 3-to-1 over every alternative — bold enough to love, smooth
            enough to finish.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
          {highlights.map((item, i) => (
            <Reveal key={i} inView delay={i * 0.1}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10 sm:rounded-2xl sm:p-4">
                <item.icon className="mb-1.5 h-5 w-5 text-pink-400 sm:mb-2 sm:h-6 sm:w-6" />
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-0.5 line-clamp-2 text-xs text-white/40 sm:mt-1 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal inView>
          <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              Try It Now — $2.99
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
