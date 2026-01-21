import { Scroll } from "@react-three/drei";

import { cn } from "@/utils";

import Hero from "./sections/Hero";
import Ingredients from "./sections/Ingredients";
import Refreshing from "./sections/Refreshing";
import Flavors from "./sections/Flavors";

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

const Section = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn(className, `h-screen w-full max-sm:h-full`)}>
      {children}
    </section>
  );
};

export default HomeOverlay;
