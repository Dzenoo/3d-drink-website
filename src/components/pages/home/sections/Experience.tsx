"use client";

import { Target, Flame, Clock, TrendingUp } from "lucide-react";

import { Reveal } from "@/components/shared/animations/Reveal";

const benefits = [
  {
    icon: Target,
    title: "Laser Focus",
    value: "+40%",
    description: "Concentration",
  },
  {
    icon: Flame,
    title: "Pure Energy",
    value: "+100%",
    description: "Vitality boost",
  },
  {
    icon: Clock,
    title: "Long Lasting",
    value: "6hrs",
    description: "Sustained power",
  },
  {
    icon: TrendingUp,
    title: "No Crash",
    value: "0%",
    description: "Energy dips",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen w-screen relative flex items-center justify-center overflow-hidden py-16 lg:py-0">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.2),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_55%,_rgba(236,72,153,0.15),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_40%,_rgba(59,130,246,0.15),_transparent_20%)]" />

      {/* Content - Centered (can is also centered) */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-10">
        <Reveal inView>
          <span className="text-purple-400 text-xs sm:text-sm uppercase tracking-widest">
            Feel The Difference
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mt-3 sm:mt-4">
            Fuel Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
              Potential
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto">
            Whether you're crushing a workout, coding through the night, or
            chasing your next adventure — we've got the energy you need.
          </p>
        </Reveal>
        {/* Benefits row */}
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-12">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} inView delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-purple-500/50 transition-all">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-400" />
                </div>
                <div className="mt-2 sm:mt-3">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {benefit.value}
                  </span>
                  <p className="text-white/40 text-xs sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Testimonial */}
        <Reveal inView>
          <div className="mt-10 sm:mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-lg mx-auto">
            <p className="text-white/80 italic text-sm sm:text-base">
              "Best energy drink I've ever tried. No jitters, no crash, just
              clean energy that lasts all day."
            </p>
            <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <div className="text-left">
                <p className="text-white text-xs sm:text-sm font-semibold">
                  Alex Chen
                </p>
                <p className="text-white/40 text-xs">Software Engineer</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
