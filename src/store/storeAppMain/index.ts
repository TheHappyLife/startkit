import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StoreApp1State } from "./type";
import { mainStore } from "@/SettingApp";
export const useStoreApp = create<StoreApp1State>()(
  persist(
    (set) => ({
      dataMain: null,
      setDataMain: (dataMain: any) => set({ dataMain }),
    }),
    {
      name: mainStore,
      storage: typeof window !== "undefined" ? createJSONStorage(() => localStorage) : undefined,
      // skipHydration: true,
    }
  ) as any
);
