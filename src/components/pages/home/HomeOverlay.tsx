import React from "react";
import { Scroll } from "@react-three/drei";

import Hero from "./Hero";
import Ingredients from "./Ingredients";
import Refreshing from "./Refreshing";
import Flavors from "./Flavors";

const HomeOverlay: React.FC = () => {
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
          <Flavors />
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className={`h-screen w-full max-sm:h-full`}>{children}</section>
  );
};

export default HomeOverlay;
