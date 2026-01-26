"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";

import { Reveal } from "@/components/shared/animations/Reveal";

export default function CTA() {
  return (
    <section className="min-h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden py-16 pb-24 lg:py-0">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,153,0.2),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(251,146,60,0.3),_transparent_40%)]" />
      {/* Main CTA content */}
      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6 lg:px-10">
        <Reveal inView>
          <span className="text-pink-400 text-xs sm:text-sm uppercase tracking-widest">
            Ready to Transform?
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mt-3 sm:mt-4">
            Get Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              Energy Now
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6">
            Join over 1 million people who've made the switch to cleaner, better
            energy. Free shipping on orders of 12+ cans.
          </p>
        </Reveal>
        <Reveal inView>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
            <button className="px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm sm:text-lg font-semibold rounded-full hover:scale-105 transition-transform">
              Shop Now — Free Shipping
            </button>
            <button className="px-6 sm:px-10 py-3 sm:py-5 border border-white/20 text-white text-sm sm:text-base rounded-full hover:bg-white/10 transition-colors">
              View All Products
            </button>
          </div>
        </Reveal>
        {/* Trust badges */}
        <Reveal inView>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 text-white/40 text-xs sm:text-sm">
            <span>🚚 Free Shipping</span>
            <span>↩️ 30-Day Returns</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </Reveal>
        {/* Newsletter */}
        <Reveal inView>
          <div className="mt-10 sm:mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              Get 15% off your first order
            </h3>
            <p className="text-white/40 text-xs sm:text-sm mt-1">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-pink-500/50"
              />
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 sm:py-6 px-4 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-lg sm:text-xl">
            TOTAL<span className="text-pink-500">ENERGY</span>
          </div>
          <div className="flex gap-5 sm:gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <p className="text-white/40 text-xs sm:text-sm">
            © 2024 Total Energy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
