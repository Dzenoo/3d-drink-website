"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";

import { Reveal } from "@/components/shared/animations/Reveal";

export default function CTA() {
  return (
    <section className="h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(236,72,153,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(251,146,60,0.3),_transparent_40%)]" />
      {/* Main CTA content */}
      <div className="relative z-10 text-center max-w-2xl px-10">
        <Reveal inView>
          <span className="text-pink-400 text-sm uppercase tracking-widest">
            Ready to Transform?
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mt-4">
            Get Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              Energy Now
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60 text-lg mt-6">
            Join over 1 million people who've made the switch to cleaner, better
            energy. Free shipping on orders of 12+ cans.
          </p>
        </Reveal>
        <Reveal inView>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform">
              Shop Now — Free Shipping
            </button>
            <button className="px-10 py-5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
              View All Products
            </button>
          </div>
        </Reveal>
        {/* Trust badges */}
        <Reveal inView>
          <div className="flex justify-center gap-8 mt-10 text-white/40 text-sm">
            <span>🚚 Free Shipping</span> <span>↩️ 30-Day Returns</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </Reveal>
        {/* Newsletter */}
        <Reveal inView>
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">
              Get 15% off your first order
            </h3>
            <p className="text-white/40 text-sm mt-1">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex gap-2 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-pink-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-full hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-6 px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl">
            TOTAL<span className="text-pink-500">ENERGY</span>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/40 text-sm">
            © 2024 Total Energy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
