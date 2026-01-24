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
    <section className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(236,72,153,0.15),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.15),_transparent_40%)]" />

      {/* Content - Centered (can is also centered) */}
      <div className="relative z-10 text-center max-w-4xl px-10">
        <Reveal>
          <span className="text-purple-400 text-sm uppercase tracking-widest">
            Feel The Difference
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mt-4">
            Fuel Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
              Potential
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Whether you're crushing a workout, coding through the night, or
            chasing your next adventure — we've got the energy you need.
          </p>
        </Reveal>
        {/* Benefits row */}
        <div className="flex justify-center gap-6 lg:gap-10 mt-12 flex-wrap">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-purple-500/50 transition-all">
                  <benefit.icon className="w-7 h-7 text-purple-400" />
                </div>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-white">
                    {benefit.value}
                  </span>
                  <p className="text-white/40 text-sm">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Testimonial */}
        <Reveal>
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-white/80 italic">
              "Best energy drink I've ever tried. No jitters, no crash, just
              clean energy that lasts all day."
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Alex Chen</p>
                <p className="text-white/40 text-xs">Software Engineer</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
