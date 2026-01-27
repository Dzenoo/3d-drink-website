'use client';

import { ArrowDown } from 'lucide-react';
import { ClipReveal } from '@/components/shared/animations/ClipReveal';

const badges = ['Alcohol Free', 'Zero Sugar', 'Natural Ingredients'];

export default function Hero() {
  return (
    <div className="relative h-full min-h-screen w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,152,0.95),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,_rgba(34,197,94,0.15),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_15%,_rgba(251,146,60,0.10),_transparent_20%)]" />

      <div className="flex h-full min-h-screen flex-col px-10 pb-10 pt-36 max-sm:px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-0">
          <div className="hidden max-w-xs space-y-2 pt-2 lg:block">
            <ClipReveal>
              <h1 className="text-xl text-pink-400">Incredibly Refreshing</h1>
            </ClipReveal>
            <ClipReveal delay={0.5}>
              <p className="text-sm text-white">
                Natural energy crafted for focus, endurance, and momentum —
                without the crash.
              </p>
            </ClipReveal>
          </div>

          <div className="mr-40 flex-1 max-xl:mr-5 max-lg:w-full">
            <ClipReveal delay={0.8}>
              <h1 className="whitespace-nowrap text-center text-4xl font-bold uppercase tracking-wider text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                TOTAL{' '}
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  ENERGY
                </span>
              </h1>
            </ClipReveal>
            <div className="mt-4 px-4 text-center lg:hidden">
              <ClipReveal delay={1}>
                <p className="text-sm text-white/80 sm:text-base">
                  Natural energy crafted for focus, endurance, and momentum —
                  without the crash.
                </p>
              </ClipReveal>
            </div>
          </div>

          <div className="hidden h-28 w-fit flex-col items-center justify-center gap-5 rounded-full border border-white p-5 lg:flex">
            <div className="min-h-5 min-w-5 animate-bounce rounded-full bg-white" />
            <ArrowDown className="text-white" />
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex justify-center gap-2 overflow-x-auto pb-2 text-xs text-white lg:flex-col lg:justify-start lg:pb-0">
            {badges.map((badge, i) => (
              <ClipReveal key={badge} direction="right" delay={1 + i * 0.2}>
                <span className="flex w-auto items-center gap-2 whitespace-nowrap bg-pink-400 px-3 py-2 sm:px-2 lg:w-52">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                  {badge}
                </span>
              </ClipReveal>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center pb-4 lg:hidden">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <div className="h-3 w-3 animate-bounce rounded-full bg-white" />
            <ArrowDown className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
