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
    <section className="h-screen w-screen relative flex items-center overflow-hidden">
      {/* Dynamic background glow based on selected flavor */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${selected.bgGlow}, transparent 50%)`,
        }}
      />
      {/* Content - Right side (can is on left) */}
      <div className="relative z-10 ml-auto mr-10 lg:mr-20 max-w-xl">
        <Reveal inView>
          <span className="text-white/60 text-sm uppercase tracking-widest">
            Choose Your Flavor
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mt-4">
            Find Your
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${selected.color} transition-all duration-500`}
            >
              Perfect Match
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60 mt-4">
            Four unique flavors, each crafted to deliver the perfect balance of
            taste and energy.
          </p>
        </Reveal>
        {/* Flavor selector */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          {flavors.map((flavor, index) => (
            <Reveal key={flavor.id} inView delay={index * 0.1}>
              <button
                onClick={() => setSelected(flavor)}
                className={`relative text-left w-full h-full p-4 rounded-2xl border transition-all duration-300 ${selected.id === flavor.id ? "bg-white/10 border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
              >
                {selected.id === flavor.id && (
                  <div className="absolute top-3 right-3">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                )}
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${flavor.color} mb-2`}
                />
                <h3 className="text-white font-semibold">{flavor.name}</h3>
                <p className="text-white/40 text-sm mt-1">
                  {flavor.description}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
        {/* Add to cart */}
        <Reveal inView>
          <div className="flex items-center gap-4 mt-8">
            <button
              className={`px-8 py-4 bg-gradient-to-r ${selected.color} text-white font-semibold rounded-full hover:scale-105 transition-transform`}
            >
              Add to Cart — $2.99
            </button>
            <span className="text-white/40 text-sm">
              or subscribe & save 20%
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
