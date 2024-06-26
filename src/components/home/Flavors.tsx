"use client";
import React from "react";
import { DrinkTexture } from "@/app/page";
import Link from "next/link";

const Flavors: React.FC<{
  drinkTexture: DrinkTexture;
  setdrinkTexture: React.Dispatch<React.SetStateAction<DrinkTexture>>;
}> = ({ drinkTexture, setdrinkTexture }) => {
  const Flavors: {
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

  return (
    <div className="mt-10 overflow-hidden p-10 flex flex-col gap-[10em]">
      <div className="flex justify-between gap-5 max-xl:flex-col">
        <div className="flex flex-col justify-between gap-[25em] max-xl:gap-36">
          <div>
            <h1 className="font-bold text-8xl max-sm:text-7xl">
              Four Different <br /> Good Flavors
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-center">
              {Flavors.map((flavor) => (
                <div
                  onClick={() => setdrinkTexture(flavor.texture)}
                  className="w-10 h-10 rounded-full p-5 cursor-pointer transition hover:scale-105"
                  style={{ backgroundColor: flavor.color }}
                  key={flavor.id}
                ></div>
              ))}
            </div>
            <div>
              <Link href={`/${drinkTexture}`} className="text-xl text-blue-700">
                {drinkTexture.charAt(0).toUpperCase() + drinkTexture.slice(1)}
              </Link>
            </div>
          </div>
        </div>
        <div className="basis-[29em]">
          <p className="font-extralight text-[1.5em]">
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
