'use client';

import { Target, Flame, Clock, TrendingUp, LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/shared/animations/Reveal';

const benefits: { icon: LucideIcon; value: string; description: string }[] = [
  { icon: Target, value: '+40%', description: 'Concentration' },
  { icon: Flame, value: '+100%', description: 'Vitality boost' },
  { icon: Clock, value: '6hrs', description: 'Sustained power' },
  { icon: TrendingUp, value: '0%', description: 'Energy dips' },
];

export default function Experience() {
  return (
    <section className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden py-16 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.2),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_55%,_rgba(236,72,153,0.15),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_40%,_rgba(59,130,246,0.15),_transparent_20%)]" />

      <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 lg:px-10">
        <Reveal inView>
          <span className="text-xs uppercase tracking-widest text-purple-400 sm:text-sm">
            Feel The Difference
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl lg:text-5xl xl:text-7xl">
            Fuel Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Potential
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:mt-6 sm:text-base lg:text-lg">
            Whether you're crushing a workout, coding through the night, or
            chasing your next adventure — we've got the energy you need.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:flex sm:justify-center sm:gap-6 lg:gap-10">
          {benefits.map((benefit, i) => (
            <Reveal key={i} inView delay={i * 0.1}>
              <div className="group text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-purple-500/50 group-hover:bg-white/10 sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16">
                  <benefit.icon className="h-5 w-5 text-purple-400 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </div>
                <div className="mt-2 sm:mt-3">
                  <span className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                    {benefit.value}
                  </span>
                  <p className="text-xs text-white/40 sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal inView>
          <div className="mx-auto mt-10 max-w-lg rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:mt-16 sm:rounded-2xl sm:p-6">
            <p className="text-sm italic text-white/80 sm:text-base">
              "Best energy drink I've ever tried. No jitters, no crash, just
              clean energy that lasts all day."
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 sm:h-10 sm:w-10" />
              <div className="text-left">
                <p className="text-xs font-semibold text-white sm:text-sm">
                  Alex Chen
                </p>
                <p className="text-xs text-white/40">Software Engineer</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
