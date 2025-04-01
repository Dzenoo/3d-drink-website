import React from "react";

const flavors = [
  {
    title: "Crisp Apple Delight",
    description:
      "Experience the refreshing taste of crisp apples with every sip. Our apple drink is packed with the natural sweetness and tartness of fresh-picked apples, perfect for a revitalizing boost.",
  },
  {
    title: "Zesty Orange Burst",
    description:
      "Dive into a burst of citrusy goodness with our zesty orange drink. Enjoy the vibrant flavor of sun-ripened oranges, delivering a tangy and invigorating experience that's sure to brighten your day.",
  },
  {
    title: "Sweet Strawberry Bliss",
    description:
      "Indulge in the luscious sweetness of ripe strawberries with our strawberry drink. Each sip is a delightful blend of fruity flavors that capture the essence of fresh strawberries, perfect for a sweet treat.",
  },
  {
    title: "Tangy Kiwi Twist",
    description:
      "Discover the exotic and tangy flavor of kiwis in our kiwi drink. This unique blend offers a perfect balance of tartness and sweetness, providing a refreshing and energizing taste sensation.",
  },
];

interface DetailsOverlayProps {
  flavor: string;
}

const DetailsOverlay: React.FC<DetailsOverlayProps> = ({ flavor }) => {
  let index = 0;

  switch (flavor) {
    case "apple":
      index = 0;
      break;
    case "orange":
      index = 1;
      break;
    case "strawberry":
      index = 2;
      break;
    case "kiwi":
      index = 3;
      break;
    default:
      index = 0;
      break;
  }

  return (
    <div className="overlay p-10">
      <div className="flex flex-col gap-10 pt-28">
        <div>
          <h1 className="text-7xl font-bold">{flavors[index].title}</h1>
        </div>
        <div className="max-w-xl">
          <p className="text-xl font-extralight">
            {flavors[index].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverlay;
