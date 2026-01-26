import { Scroll } from "@react-three/drei";

import { cn } from "@/utils";

import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero";
import Ingredients from "./sections/Ingredients";
import Experience from "./sections/Experience";
import Flavors from "./sections/Flavors";
import CTA from "./sections/CTA";

const HomeOverlay: React.FC = () => {
  return (
    <Scroll html>
      <div className="w-screen relative z-[2]">
        <Navbar />
        <Section>
          <Hero />
        </Section>
        <Section>
          <Ingredients />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Flavors />
        </Section>
        <Section>
          <CTA />
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn(className, "min-h-screen w-full")}>
      {children}
    </section>
  );
};

export default HomeOverlay;
