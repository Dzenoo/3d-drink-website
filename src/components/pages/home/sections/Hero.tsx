import React from "react";
import { ArrowDown } from "lucide-react";

import { ClipReveal } from "@/components/shared/animations/ClipReveal";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] w-full h-full relative">
      {/* Orange glow (bottom center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,_rgba(236,72,152,0.95),_transparent_45%)]"></div>
      {/* Pink glow (top left) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,_rgba(65,224,255,0.10),_transparent_20%)]"></div>
      {/* Subtle yellow glow (top right) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_15%,_rgba(251,146,60,0.10),_transparent_20%)]"></div>

      {/* Content */}
      <div className="pt-36 pb-10 px-10 flex flex-col h-full">
        <div className="flex">
          <div className="pt-2 space-y-2">
            <ClipReveal>
              <h1 className="text-xl text-pink-400">Incredibly Refreshing</h1>
            </ClipReveal>
            <ClipReveal delay={0.5}>
              <p className="text-sm  text-white">
                Natural energy crafted for focus, endurance, and momentum —
                without the crash.
              </p>
            </ClipReveal>
          </div>
          <div className="basis-full flex-1 grow mr-40">
            <ClipReveal delay={0.8}>
              <h1 className="text-white text-9xl font-bold uppercase text-center tracking-wider">
                TOTAL{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                  ENERGY
                </span>
              </h1>
            </ClipReveal>
          </div>
          <div className="flex w-fit flex-col items-center justify-center gap-5 rounded-full border border-white p-5 h-28">
            <div className="min-h-5 min-w-5 animate-bounce rounded-full bg-white"></div>
            <ArrowDown className="text-white" />
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex flex-col gap-2 text-sm text-white">
            <ClipReveal direction="right" delay={1} scrollTrigger={false}>
              <span className="flex items-center gap-2 bg-pink-400 w-52 px-2 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Alcohol Free
              </span>
            </ClipReveal>
            <ClipReveal direction="right" delay={1.2} scrollTrigger={false}>
              <span className="flex items-center gap-2 bg-pink-400 w-52 px-2 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Zero Sugar
              </span>
            </ClipReveal>
            <ClipReveal direction="right" delay={1.4} scrollTrigger={false}>
              <span className="flex items-center gap-2 bg-pink-400 w-52 px-2 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Natural Ingredients
              </span>
            </ClipReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
