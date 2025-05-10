import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StoreApp1State } from "./type";
import { nameStore1 } from "@/SettingApp";
export const useStoreApp1 = create<StoreApp1State>()(
  persist(
    (set) => ({
      data1: null,
      setData1: (data1: any) => set({ data1 }),
    }),
    {
      name: nameStore1,
      storage: typeof window !== "undefined" ? createJSONStorage(() => localStorage) : undefined,
      skipHydration: true,
    }
  ) as any
);
