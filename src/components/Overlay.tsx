import { Scroll } from "@react-three/drei";
import React from "react";

const Overlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section right>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section right>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
        <Section>
          <h1 className="text-5xl font-bold">Beautiful</h1>
        </Section>
      </div>
    </Scroll>
  );
};

const Section = (props: any) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 w-full ${
        props.right ? "items-end" : "items-start"
      }`}
    >
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default Overlay;
