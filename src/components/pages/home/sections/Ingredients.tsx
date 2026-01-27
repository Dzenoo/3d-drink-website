'use client';

import { Leaf, Zap, Heart, Droplets, LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/shared/animations/Reveal';

const ingredients: {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
}[] = [
  {
    icon: Zap,
    title: 'Natural Caffeine',
    description: 'From green tea extract for clean, sustained energy',
    value: '80mg',
  },
  {
    icon: Heart,
    title: 'Vitamin B12',
    description: 'Supports energy metabolism and reduces fatigue',
    value: '100%',
  },
  {
    icon: Leaf,
    title: 'Zero Sugar',
    description: 'Sweetened naturally with stevia leaf extract',
    value: '0g',
  },
  {
    icon: Droplets,
    title: 'Electrolytes',
    description: 'Essential minerals for hydration and performance',
    value: '5+',
  },
];

export default function Ingredients() {
  return (
    <div className="relative flex min-h-screen w-screen items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,_rgba(34,197,94,0.15),_transparent_22%)]" />

      <div className="relative z-10 mx-auto max-w-xl space-y-4 sm:space-y-5 lg:mx-0">
        <Reveal inView>
          <span className="text-xs uppercase tracking-widest text-green-400 sm:text-sm">
            What's Inside
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Pure
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Ingredients
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-sm text-white/60 sm:text-base">
            Every can is packed with carefully selected natural ingredients. No
            artificial colors, no preservatives, no compromise.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
          {ingredients.map((item, i) => (
            <Reveal key={item.title} inView delay={i * 0.1}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10 sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between">
                  <item.icon className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
                  <span className="text-sm font-bold text-green-400 sm:text-base">
                    {item.value}
                  </span>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="line-clamp-2 text-xs text-white/40 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
