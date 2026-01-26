"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Reveal } from "@/components/shared/animations/Reveal";

const flavors = [
  {
    id: "strawberry",
    name: "Strawberry Burst",
    color: "from-pink-500 to-red-500",
    bgGlow: "rgba(236,72,153,0.3)",
    description: "Sweet and refreshing with real strawberry essence",
  },
  {
    id: "orange",
    name: "Orange Surge",
    color: "from-orange-400 to-orange-600",
    bgGlow: "rgba(251,146,60,0.3)",
    description: "Citrus explosion with a tangy twist",
  },
  {
    id: "lemon",
    name: "Lemon Shock",
    color: "from-yellow-400 to-lime-500",
    bgGlow: "rgba(250,204,21,0.3)",
    description: "Zesty and electrifying lemon flavor",
  },
  {
    id: "berry",
    name: "Berry Blast",
    color: "from-purple-500 to-indigo-600",
    bgGlow: "rgba(168,85,247,0.3)",
    description: "Mixed berries for a bold, fruity taste",
  },
];

export default function Flavors() {
  const [selected, setSelected] = useState(flavors[0]);

  return (
    <section className="min-h-screen w-screen relative flex items-center overflow-hidden py-16 lg:py-0">
      {/* Dynamic background glow based on selected flavor */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${selected.bgGlow}, transparent 30%)`,
        }}
      />
      {/* Content - Centered on mobile, right side on desktop */}
      <div className="relative z-10 w-full lg:w-auto lg:ml-auto mx-4 sm:mx-6 lg:mx-0 lg:mr-10 xl:mr-20 max-w-xl">
        <Reveal inView>
          <span className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">
            Choose Your Flavor
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-3 sm:mt-4">
            Find Your
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${selected.color} transition-all duration-500`}
            >
              Perfect Match
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60 mt-3 sm:mt-4 text-sm sm:text-base">
            Four unique flavors, each crafted to deliver the perfect balance of
            taste and energy.
          </p>
        </Reveal>
        {/* Flavor selector */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8">
          {flavors.map((flavor, index) => (
            <Reveal key={flavor.id} inView delay={index * 0.1}>
              <button
                onClick={() => setSelected(flavor)}
                className={`relative text-left w-full h-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 ${selected.id === flavor.id ? "bg-white/10 border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
              >
                {selected.id === flavor.id && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                )}
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${flavor.color} mb-1.5 sm:mb-2`}
                />
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {flavor.name}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-2">
                  {flavor.description}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
        {/* Add to cart */}
        <Reveal inView>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${selected.color} text-white font-semibold rounded-full hover:scale-105 transition-transform text-sm sm:text-base`}
            >
              Add to Cart — $2.99
            </button>
            <span className="text-white/40 text-xs sm:text-sm">
              or subscribe & save 20%
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
