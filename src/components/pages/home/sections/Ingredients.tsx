"use client";

import { Leaf, Zap, Heart, Droplets } from "lucide-react";

import { Reveal } from "@/components/shared/animations/Reveal";

const ingredients = [
  {
    icon: Zap,
    title: "Natural Caffeine",
    description: "From green tea extract for clean, sustained energy",
    value: "80mg",
  },
  {
    icon: Heart,
    title: "Vitamin B12",
    description: "Supports energy metabolism and reduces fatigue",
    value: "100%",
  },
  {
    icon: Leaf,
    title: "Zero Sugar",
    description: "Sweetened naturally with stevia leaf extract",
    value: "0g",
  },
  {
    icon: Droplets,
    title: "Electrolytes",
    description: "Essential minerals for hydration and performance",
    value: "5+",
  },
];

export default function Ingredients() {
  return (
    <div className="h-screen w-screen relative flex items-center overflow-hidden px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,_rgba(34,197,94,0.15),_transparent_50%)]" />

      <div className="max-w-xl relative z-10 space-y-5">
        <Reveal inView>
          <span className="text-green-400 text-sm uppercase tracking-widest">
            What's Inside
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Pure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Ingredients
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60">
            Every can is packed with carefully selected natural ingredients. No
            artificial colors, no preservatives, no compromise.
          </p>
        </Reveal>
        {/* Ingredient cards */}
        <div className="grid grid-cols-2 gap-4">
          {ingredients.map((item, index) => (
            <Reveal key={item.title} inView delay={index * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">{item.value}</span>
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
