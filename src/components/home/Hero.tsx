import { ArrowDown } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-28 flex justify-between">
      <div>
        <div className="px-10 ">
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="text-9xl font-bold">
                Unleash Your <br />
                Energy
              </h1>
            </div>
            <div className="pl-1">
              <p className="text-3xl font-extralight">
                Experience the Unmatched Power and <br />
                Endurance of Our Revolutionary Energy Drink
              </p>
            </div>
            <div>
              <button className="py-5 px-10 rounded-full bg-black transition text-white font-thin text-xl hover:bg-white hover:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#90FF22] w-fit p-[0.5em] mt-28">
          <h1 className="left-[5em] relative text-xl">The best of flavors</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="bg-[#e8e8e8] p-5">
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
