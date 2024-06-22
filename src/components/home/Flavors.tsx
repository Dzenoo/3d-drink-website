import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const Flavors: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const flavorRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        flavorRefs.current,
        { opacity: 0, y: 50 },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: "power3.out",
          stagger: 0.5,
        }
      );
    }
  }, [inView]);

  const flavors = [
    {
      id: 1,
      title: "Apple",
      description: "Experience the crisp, refreshing taste of our Apple flavor",
      color: "#FF5722",
      image: "/images/apple_drink.png",
    },
    {
      id: 2,
      title: "Orange",
      description: "Embrace the citrusy zest of our Orange flavor",
      color: "#FFD569",
      image: "/images/orange_drink.png",
    },
    {
      id: 3,
      title: "Strawberry",
      description: "Indulge in the sweet and juicy flavor of our Strawberry",
      color: "#8322FF",
      image: "/images/strawberry_drink.png",
    },
    {
      id: 4,
      title: "Kiwi",
      description:
        "Savor the exotic taste of our Kiwi flavor refreshing delight",
      color: "#90FF22",
      image: "/images/kiwi_drink.png",
    },
  ];

  return (
    <div className="overflow-hidden h-screen bg-[#ffffff] p-10 flex flex-col gap-[10em]">
      <div className="flex justify-between items-center gap-5">
        <div>
          <h1 className="font-bold text-8xl">
            Four Different <br /> Good Flavors
          </h1>
        </div>
        <div className="basis-1/2">
          <p className="font-extralight text-[1.5em]">
            Elevate your energy experience with our diverse range of
            exhilarating flavors. Each can offers a unique and refreshing taste
            that will invigorate your senses. From the classics to the exotic,
            our flavors are crafted to delight, ensuring there's a perfect match
            for every palate.
          </p>
        </div>
      </div>
      <div ref={ref} className="flex justify-between gap-5 items-center">
        {flavors.map((drink, index) => (
          <div
            className="flex flex-col gap-10"
            key={drink.id}
            ref={(el: any) => (flavorRefs.current[index] = el!)}
          >
            <div>
              <Image
                className="transition-all hover:-translate-y-10 overflow-hidden cursor-pointer"
                width={200}
                height={200}
                src={drink.image}
                alt={drink.title}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div
                  style={{ backgroundColor: drink.color }}
                  className={`w-10 h-10 rounded-full p-5`}
                ></div>
                <div>
                  <h1 className="text-4xl">{drink.title}</h1>
                </div>
              </div>
              <p className="text-xl font-extralight">{drink.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;
