import { Scroll } from "@react-three/drei";
import React from "react";
import Hero from "./Hero";

const HomeOverlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <Hero />
        </Section>
        <Section></Section>
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <section className={`h-screen w-full`}>{children}</section>;
};

export default HomeOverlay;
