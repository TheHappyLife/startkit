"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {

  
  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>

    </DefaultPageLayout>
  );
};
export default HomeView;
