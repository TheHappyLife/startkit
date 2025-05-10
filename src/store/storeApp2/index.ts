import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StoreApp2State } from "./type";
import { nameStore2 } from "@/SettingApp";
export const useStoreApp2 = create<StoreApp2State>()(
  persist(
    (set) => ({
      data2: null,
      setData2: (data2: any) => set({ data2 }),
    }),
    {
      name: nameStore2,
      storage: typeof window !== "undefined" ? createJSONStorage(() => localStorage) : undefined,
      skipHydration: true,
    }
  ) as any
);
