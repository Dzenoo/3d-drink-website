import React from "react";

interface DetailsOverlayProps {
  flavor: string;
}

const DetailsOverlay: React.FC<DetailsOverlayProps> = ({ flavor }) => {
  let flavorDetails = 0;

  switch (flavor) {
    case "apple":
      flavorDetails = 0;
      break;
    case "orange":
      flavorDetails = 1;
      break;
    case "strawberry":
      flavorDetails = 2;
      break;
    case "kiwi":
      flavorDetails = 3;
      break;
    default:
      flavorDetails = 0;
      break;
  }

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

  return (
    <div className="overlay p-10">
      <div className="pt-28 flex flex-col gap-10">
        <div>
          <h1 className="text-7xl font-bold">{flavors[flavorDetails].title}</h1>
        </div>
        <div className="max-w-xl">
          <p className="text-xl font-extralight">
            {flavors[flavorDetails].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverlay;
