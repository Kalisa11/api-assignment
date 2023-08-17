import { create } from "zustand";

type Store = {
  setCity: (value: string) => void;
  city: string;
};

export const useCityStore = create<Store>((set) => ({
  city: "",
  setCity: (city: string) => set({ city }),
}));
