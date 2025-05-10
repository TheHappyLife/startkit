"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";
import FeatDataApp from "../FeatDataApp";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {

  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      <a href="/app-1/home" className="text-white text-center">App 1</a>
        <FeatDataApp/>
    </DefaultPageLayout>
  );
};
export default HomeView;
