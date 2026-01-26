import React from "react";
import { ArrowDown } from "lucide-react";

import { ClipReveal } from "@/components/shared/animations/ClipReveal";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,152,0.95),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,_rgba(34,197,94,0.15),_transparent_20%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_15%,_rgba(251,146,60,0.10),_transparent_20%)]"></div>

      {/* Content */}
      <div className="pt-20 sm:pt-28 lg:pt-36 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-10 flex flex-col h-full min-h-screen">
        {/* Mobile layout: stacked */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-0">
          {/* Tagline - hidden on mobile, shown on left for desktop */}
          <div className="hidden lg:block pt-2 space-y-2 max-w-xs">
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

          {/* Main title */}
          <div className="flex-1 mr-40">
            <ClipReveal delay={0.8}>
              <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-9xl font-bold uppercase text-center tracking-wider">
                TOTAL{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                  ENERGY
                </span>
              </h1>
            </ClipReveal>

            {/* Mobile tagline - below title */}
            <div className="lg:hidden mt-4 text-center px-4">
              <ClipReveal delay={1}>
                <p className="text-sm sm:text-base text-white/80">
                  Natural energy crafted for focus, endurance, and momentum —
                  without the crash.
                </p>
              </ClipReveal>
            </div>
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="hidden lg:flex w-fit flex-col items-center justify-center gap-5 rounded-full border border-white p-5 h-28">
            <div className="min-h-5 min-w-5 animate-bounce rounded-full bg-white"></div>
            <ArrowDown className="text-white" />
          </div>
        </div>

        {/* Feature badges - bottom of screen */}
        <div className="mt-auto pt-8">
          {/* Mobile: horizontal scroll, centered */}
          <div className="flex lg:flex-col gap-2 text-sm text-white overflow-x-auto pb-2 lg:pb-0 justify-center lg:justify-start">
            <ClipReveal direction="right" delay={1}>
              <span className="flex items-center gap-2 bg-pink-400 whitespace-nowrap w-auto lg:w-52 px-3 sm:px-2 py-2 rounded-lg lg:rounded-none">
                <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                Alcohol Free
              </span>
            </ClipReveal>
            <ClipReveal direction="right" delay={1.2}>
              <span className="flex items-center gap-2 bg-pink-400 whitespace-nowrap w-auto lg:w-52 px-3 sm:px-2 py-2 rounded-lg lg:rounded-none">
                <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                Zero Sugar
              </span>
            </ClipReveal>
            <ClipReveal direction="right" delay={1.4}>
              <span className="flex items-center gap-2 bg-pink-400 whitespace-nowrap w-auto lg:w-52 px-3 sm:px-2 py-2 rounded-lg lg:rounded-none">
                <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                Natural Ingredients
              </span>
            </ClipReveal>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="lg:hidden flex justify-center mt-6 pb-4">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <div className="w-3 h-3 animate-bounce rounded-full bg-white"></div>
            <ArrowDown className="text-white w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
