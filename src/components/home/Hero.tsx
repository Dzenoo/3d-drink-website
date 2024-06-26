"use client";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import React, { useEffect } from "react";

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      ".hero_title",
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    )
      .to(
        ".hero_description",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .to(
        ".hero_button",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .to(
        ".hero_subtitle",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .to(
        ".right_text",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.3"
      );
  }, []);

  return (
    <div className="pt-28 flex justify-between gap-10 max-lg:flex-col">
      <div>
        <div className="px-10">
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="hero_title text-9xl font-bold opacity-0 translate-y-10 max-lg:text-7xl">
                Unleash Your <br />
                Energy
              </h1>
            </div>
            <div className="hero_description pl-1 opacity-0 translate-y-10">
              <p className="text-3xl font-extralight max-sm:text-xl">
                Experience the Unmatched Power and <br />
                Endurance of Our Revolutionary Energy Drink
              </p>
            </div>
            <div className="hero_button opacity-0 translate-y-10">
              <button className="py-5 px-10 rounded-full bg-black transition text-white font-thin text-xl hover:bg-white hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="hero_subtitle bg-[#90FF22] w-fit p-[0.5em] mt-28 opacity-0 translate-y-10">
          <h1 className="left-[5em] relative text-xl">The best of flavors</h1>
        </div>
      </div>
      <div className="p-10 flex flex-col justify-between right_text opacity-0 translate-y-10 gap-10 max-xl:justify-normal">
        <div className="bg-[#e8e8e8] p-5 max-lg:w-fit">
          <div>
            <h1 className="text-3xl">Incredibly Refreshing</h1>
          </div>
          <div className="max-w-sm">
            <p className="text-xl font-extralight">
              Quench your thirst and invigorate your senses with our incredibly
              refreshing energy drink.
            </p>
          </div>
        </div>
        <div className="border-gray-700 border flex flex-col gap-10 p-5 rounded-full w-fit justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-black animate-bounce"></div>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
