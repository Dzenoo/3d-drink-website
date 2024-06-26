import { Scroll } from "@react-three/drei";
import React from "react";
import Hero from "./Hero";
import Flavors from "./Flavors";
import Ingredients from "./Ingredients";
import Refreshing from "./Refreshing";
import { DrinkTexture } from "@/app/page";

const HomeOverlay: React.FC<{
  drinkTexture: DrinkTexture;
  setdrinkTexture: React.Dispatch<React.SetStateAction<DrinkTexture>>;
}> = ({ drinkTexture, setdrinkTexture }) => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <Hero />
        </Section>
        <Section>
          <Ingredients />
        </Section>
        <Section>
          <Refreshing />
        </Section>
        <Section>
          <Flavors
            drinkTexture={drinkTexture}
            setdrinkTexture={setdrinkTexture}
          />
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className={`max-sm:h-full h-screen w-full`}>{children}</section>
  );
};

export default HomeOverlay;
