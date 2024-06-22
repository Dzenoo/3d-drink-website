import { flavors } from "@/data";
import React from "react";

const DrinkDetails = ({ params }: { params: { id: number } }) => {
  const drink = flavors.find((flavor) => flavor.id === Number(params.id));

  return <div>{drink?.title}</div>;
};

export default DrinkDetails;
