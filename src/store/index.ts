import { create } from "zustand";
import { DrinkTexture } from "@/types";

type Store = {
  drinkTexture: DrinkTexture;
  setDrinkTexture: (texture: DrinkTexture) => void;
};

export const useStore = create<Store>()((set) => ({
  drinkTexture: "apple",
  setDrinkTexture: (texture: DrinkTexture) => set({ drinkTexture: texture }),
}));
