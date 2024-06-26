import React from "react";
import Apple from "./Apple";
import Kiwi from "./Kiwi";
import Orange from "./Orange";
import Strawberry from "./Strawberry";

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

  const generateFruits = (count: number) => {
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

  return <>{generateFruits(count)}</>;
};

export default FruitsManager;
