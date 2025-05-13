"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";

interface MainLayoutProps extends GeneralProps {}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className={cn("size-full flex flex-col", props.className)}>
      <main className="h-[calc(100dvh)] w-full overflow-y-auto">{props.children}</main>
    </div>
  );
};

export default MainLayout;
