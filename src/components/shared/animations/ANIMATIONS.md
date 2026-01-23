// Example usage in a component

import {
Reveal,
TextReveal,
SplitText,
Stagger,
Magnetic,
Parallax,
ScrollReveal,
Marquee,
Counter,
Morph,
} from "@/components/shared/animations";

export default function ExamplePage() {
return (
<div className="min-h-screen bg-black text-white p-20 space-y-40">

      {/* Basic Reveal */}
      <Reveal direction="up" delay={0.2} blur={10}>
        <h1 className="text-6xl font-bold">Hello World</h1>
      </Reveal>

      {/* Text Reveal - Word by word */}
      <TextReveal type="words" stagger={0.08}>
        This text reveals word by word as you scroll
      </TextReveal>

      {/* Split Text - Character animation */}
      <SplitText animation="wave" className="text-5xl font-bold">
        Wave Animation
      </SplitText>

      {/* Split Text with hover */}
      <SplitText animation="glitch" hover className="text-4xl cursor-pointer">
        Hover Me
      </SplitText>

      {/* Stagger children */}
      <Stagger stagger={0.15} direction="left" from="center" className="flex gap-4">
        <div className="w-20 h-20 bg-pink-500 rounded-lg" />
        <div className="w-20 h-20 bg-orange-500 rounded-lg" />
        <div className="w-20 h-20 bg-purple-500 rounded-lg" />
        <div className="w-20 h-20 bg-blue-500 rounded-lg" />
      </Stagger>

      {/* Magnetic button */}
      <Magnetic strength={0.4}>
        <button className="px-8 py-4 bg-pink-500 rounded-full text-lg">
          Magnetic Button
        </button>
      </Magnetic>

      {/* Parallax */}
      <div className="h-[50vh] relative overflow-hidden">
        <Parallax speed={0.3}>
          <img src="/images/strawberry.png" className="w-40" />
        </Parallax>
      </div>

      {/* Scroll Reveal with presets */}
      <ScrollReveal preset="zoom">
        <div className="p-10 bg-white/10 rounded-2xl">Zoom In</div>
      </ScrollReveal>

      <ScrollReveal preset="flip" direction="left">
        <div className="p-10 bg-white/10 rounded-2xl">Flip In</div>
      </ScrollReveal>

      <ScrollReveal preset="elastic">
        <div className="p-10 bg-white/10 rounded-2xl">Elastic</div>
      </ScrollReveal>

      {/* Marquee */}
      <Marquee speed={80} pauseOnHover>
        <span className="text-4xl font-bold">
          ENERGY DRINK • NATURAL INGREDIENTS • ZERO SUGAR •
        </span>
      </Marquee>

      {/* Counter */}
      <div className="text-6xl font-bold">
        <Counter to={1000000} suffix="+" separator="," duration={3} />
        <span className="text-xl ml-4 text-white/60">Cans Sold</span>
      </div>

      {/* Morph on hover */}
      <Morph scale={1.1} rotate={5} borderRadius="50%">
        <div className="w-40 h-40 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
          Hover Me
        </div>
      </Morph>
    </div>

);
}
