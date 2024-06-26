import React from "react";

const Ingredients: React.FC = () => {
  return (
    <div className="pt-[10em] px-28 flex flex-col gap-10 justify-center max-sm:px-10">
      <div>
        <h1 className="font-bold text-7xl">Best Ingredients</h1>
      </div>
      <div className="max-w-xl">
        <p className="text-xl font-thin leading-8 tracking-wide">
          Our energy drink is meticulously crafted with a blend of premium
          ingredients designed to fuel your body and mind. At the heart of our
          formula is natural caffeine, sourced from green coffee beans. This
          provides a smooth and sustained energy boost, keeping you alert and
          focused without the unwanted jitters. To keep you hydrated and
          refreshed, we included essential electrolytes like sodium, potassium,
          and magnesium.
        </p>
      </div>
    </div>
  );
};

export default Ingredients;
