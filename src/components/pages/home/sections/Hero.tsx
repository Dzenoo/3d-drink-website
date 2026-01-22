import React from "react";
import { ArrowDown } from "lucide-react";

import Reveal from "@/components/shared/animations/Reveal";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] w-full h-full relative">
      {/* Orange glow (bottom center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,_rgba(251,146,60,0.95),_transparent_45%)]"></div>
      {/* Pink glow (top left) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,_rgba(236,72,153,0.10),_transparent_20%)]"></div>
      {/* Subtle yellow glow (top right) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_15%,_rgba(65,224,255,0.10),_transparent_20%)]"></div>

      {/* Content */}
      <div className="py-28 px-10">
        <div>
          <div>
            <h2 className="text-white">The energy that keeps you going</h2>
          </div>
          <div>
            <h1 className="text-8xl text-white">
              TOTAL <span className="font-semibold">ENERGY</span>
            </h1>
          </div>
          <div>
            <p className="text-white">
              Natural energy crafted for focus, endurance, and momentum —
              without the crash.
            </p>
          </div>
          <div>
            <button>Explore More</button>
          </div>
          <div>
            <span>Alcoholal Free Drink</span>
            <span>0% Animal fat and calories</span>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex justify-between gap-10 pt-28 max-lg:flex-col">
  //     <div>
  //       <div className="px-10">
  //         <div className="flex flex-col gap-16">
  //           <Reveal transition={{ delay: 1 }}>
  //             <h1 className="text-9xl font-bold max-lg:text-7xl">
  //               Unleash Your <br />
  //               Energy
  //             </h1>
  //           </Reveal>
  //           <Reveal transition={{ delay: 1 }}>
  //             <p className="text-3xl font-extralight max-sm:text-xl">
  //               Experience the Unmatched Power and <br />
  //               Endurance of Our Revolutionary Energy Drink
  //             </p>
  //           </Reveal>
  //           <Reveal transition={{ delay: 1 }}>
  //             <button className="rounded-full bg-black px-10 py-5 text-xl font-thin text-white transition hover:bg-white hover:text-black">
  //               Buy Now
  //             </button>
  //           </Reveal>
  //         </div>
  //       </div>
  //       <div className="mt-28 w-fit translate-y-10 bg-[#90FF22] p-[0.5em]">
  //         <h1 className="relative left-[5em] text-xl">The best of flavors</h1>
  //       </div>
  //     </div>
  //     <div className="flex translate-y-10 flex-col justify-between gap-10 p-10 max-xl:justify-normal">
  //       <Reveal transition={{ delay: 1 }}>
  //         <div className="bg-[#e8e8e8] p-5 max-lg:w-fit">
  //           <div>
  //             <h1 className="text-3xl">Incredibly Refreshing</h1>
  //           </div>
  //           <div className="max-w-sm">
  //             <p className="text-xl font-extralight">
  //               Quench your thirst and invigorate your senses with our
  //               incredibly refreshing energy drink.
  //             </p>
  //           </div>
  //         </div>
  //       </Reveal>
  //       <div className="flex w-fit flex-col items-center justify-center gap-10 rounded-full border border-gray-700 p-5">
  //         <div className="h-5 w-5 animate-bounce rounded-full bg-black"></div>
  //         <ArrowDown />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hero;
