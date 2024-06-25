import React from "react";
import { Scroll } from "@react-three/drei";
import DetailsHero from "./DetailsHero";

const DetailsOverlay: React.FC = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <DetailsHero />
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <section className={`h-screen w-full`}>{children}</section>;
};

export default DetailsOverlay;
