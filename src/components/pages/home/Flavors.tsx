"use client";

import React from "react";
import Link from "next/link";

import { useStore } from "@/store";
import { DrinkTexture } from "@/types";

const FlavorsData: {
  id: number;
  title: string;
  color: string;
  texture: DrinkTexture;
}[] = [
  {
    id: 1,
    title: "Apple",
    color: "#FF5722",
    texture: "apple",
  },
  {
    id: 2,
    title: "Orange",
    color: "#FFD569",
    texture: "orange",
  },
  {
    id: 3,
    title: "Strawberry",
    color: "#8322FF",
    texture: "strawberry",
  },
  {
    id: 4,
    title: "Kiwi",
    color: "#90FF22",
    texture: "kiwi",
  },
];

const Flavors: React.FC = () => {
  const { drinkTexture, setDrinkTexture } = useStore();

  return (
    <div className="mt-10 flex flex-col gap-[10em] overflow-hidden p-10">
      <div className="flex justify-between gap-5 max-xl:flex-col">
        <div className="flex flex-col justify-between gap-[25em] max-xl:gap-36">
          <div>
            <h1 className="text-8xl font-bold max-sm:text-7xl">
              Four Different <br /> Good Flavors
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              {FlavorsData.map((flavor) => (
                <div
                  onClick={() => setDrinkTexture(flavor.texture)}
                  className="h-10 w-10 cursor-pointer rounded-full p-5 transition hover:scale-105"
                  style={{ backgroundColor: flavor.color }}
                  key={flavor.id}
                ></div>
              ))}
            </div>
            <div>
              <Link
                href={`/${drinkTexture}`}
                className="text-xl text-blue-700 underline"
              >
                {drinkTexture.charAt(0).toUpperCase() + drinkTexture.slice(1)}
              </Link>
            </div>
          </div>
        </div>
        <div className="basis-[29em]">
          <p className="text-[1.5em] font-extralight">
            Elevate your energy experience with our diverse range of
            exhilarating flavors. Each can offers a unique and refreshing taste
            that will invigorate your senses. From the classics to the exotic,
            our flavors are crafted to delight, ensuring there's a perfect match
            for every palate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
