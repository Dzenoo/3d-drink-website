'use client';

import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Reveal } from '@/components/shared/animations/Reveal';

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function CTA() {
  return (
    <section className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden py-16 pb-24 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,153,0.2),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(251,146,60,0.3),_transparent_40%)]" />

      <div className="relative z-10 max-w-2xl px-4 text-center sm:px-6 lg:px-10">
        <Reveal inView>
          <span className="text-xs uppercase tracking-widest text-pink-400 sm:text-sm">
            Ready to Transform?
          </span>
        </Reveal>
        <Reveal inView>
          <h2 className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl lg:text-5xl xl:text-7xl">
            Get Your
            <span className="block bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Energy Now
            </span>
          </h2>
        </Reveal>
        <Reveal inView>
          <p className="mt-4 text-sm text-white/60 sm:mt-6 sm:text-base lg:text-lg">
            Join over 1 million people who've made the switch to cleaner, better
            energy. Free shipping on orders of 12+ cans.
          </p>
        </Reveal>
        <Reveal inView>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:px-10 sm:py-5 sm:text-lg">
              Shop Now — Free Shipping
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10 sm:px-10 sm:py-5 sm:text-base">
              View All Products
            </button>
          </div>
        </Reveal>
        <Reveal inView>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/40 sm:mt-10 sm:gap-8 sm:text-sm">
            <span>🚚 Free Shipping</span>
            <span>↩️ 30-Day Returns</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </Reveal>
        <Reveal inView>
          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:mt-16 sm:rounded-2xl sm:p-6">
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Get 15% off your first order
            </h3>
            <p className="mt-1 text-xs text-white/40 sm:text-sm">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-pink-500/50 focus:outline-none sm:py-3"
              />
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 sm:px-6 sm:py-3">
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-4 py-4 sm:px-10 sm:py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <div className="text-lg font-bold text-white sm:text-xl">
            TOTAL<span className="text-pink-500">ENERGY</span>
          </div>
          <div className="flex gap-5 sm:gap-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href + Icon.name}
                href={href}
                className="text-white/40 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40 sm:text-sm">
            © 2024 Total Energy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
