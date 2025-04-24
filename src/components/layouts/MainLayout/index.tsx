"use client";
import cn from "@/utils/cn";
import styles from "./index.module.css";
import { GeneralProps } from "@/types/ui";
import getImage from "@/utils/getImage";

interface MainLayoutProps extends GeneralProps {}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div
      className={cn(
        styles.container,
        "size-full flex flex-col bg-cover bg-center bg-no-repeat",
        props.className
      )}
      style={{
        backgroundImage: `url(${getImage("main_bg", "jpg")})`,
      }}
    >
      <main className="h-[calc(100dvh)] w-full overflow-y-auto">{props.children}</main>
    </div>
  );
};

export default MainLayout;
