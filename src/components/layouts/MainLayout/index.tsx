"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import useAssets from "@/hooks/useAssets";

interface MainLayoutProps extends GeneralProps {}

const MainLayout = (props: MainLayoutProps) => {
  const { getImage } = useAssets();

  return (
    <div
      className={cn("size-full flex flex-col bg-cover bg-center bg-no-repeat", props.className)}
      style={{
        backgroundImage: `url(${getImage("main_bg", "jpg")})`,
      }}
    >
      <main className="h-[calc(100dvh)] w-full overflow-y-auto">{props.children}</main>
    </div>
  );
};

export default MainLayout;
