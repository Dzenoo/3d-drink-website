import { Scroll } from '@react-three/drei';

import { cn } from '@/utils';

import Navbar from '@/components/layout/Navbar';
import Hero from './sections/Hero';
import Ingredients from './sections/Ingredients';
import Experience from './sections/Experience';
import Flavors from './sections/Flavors';
import CTA from './sections/CTA';

const SECTIONS = [
  { Component: Hero },
  { Component: Ingredients },
  { Component: Experience },
  { Component: Flavors },
  { Component: CTA },
] as const;

const HomeOverlay: React.FC = () => {
  return (
    <Scroll html>
      <div className="relative z-[2] w-screen select-none">
        <Navbar />
        {SECTIONS.map(({ Component }, index) => (
          <Section key={index}>
            <Component />
          </Section>
        ))}
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
}) => (
  <section className={cn(className, 'min-h-screen w-full')}>{children}</section>
);

export default HomeOverlay;
