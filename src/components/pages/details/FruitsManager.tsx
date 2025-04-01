import React from "react";

import Apple from "../../canvas/3d-models/Apple";
import Orange from "../../canvas/3d-models/Orange";
import Strawberry from "../../canvas/3d-models/Strawberry";
import Kiwi from "../../canvas/3d-models/Kiwi";

const FruitsManager = ({
  fruitType,
  count,
}: {
  fruitType: string;
  count: number;
}) => {
  let FruitComponent;
  switch (fruitType) {
    case "apple":
      FruitComponent = Apple;
      break;
    case "kiwi":
      FruitComponent = Kiwi;
      break;
    case "orange":
      FruitComponent = Orange;
      break;
    case "strawberry":
      FruitComponent = Strawberry;
      break;
    default:
      FruitComponent = Apple;
      break;
  }

  const generateFruits = () => {
    const fruits = [];
    for (let i = 0; i < count; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 50,
        5 + Math.random() * 5,
        (Math.random() - 0.5) * 21,
      ];
      fruits.push(<FruitComponent key={i} position={position} />);
    }
    return fruits;
  };

  return <>{generateFruits()}</>;
};

export default FruitsManager;
