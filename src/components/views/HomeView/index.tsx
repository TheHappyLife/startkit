"use client";
import cn from "@/utils/cn";
import styles from "./index.module.css";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  return (
    <DefaultPageLayout
      className={cn(styles.container, "flex flex-col gap-4 pb-bottom-page", props.className)}
    >
      Home view
    </DefaultPageLayout>
  );
};
export default HomeView;
