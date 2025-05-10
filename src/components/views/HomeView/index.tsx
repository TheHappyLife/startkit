"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";
import { useStoreApp } from "@/store/storeAppMain";
import Image from "@/components/ui/Image";
import axios from "axios";
import { urlApp1 } from "@/SettingApp";
import { use, useEffect } from "react";
import FeatDataApp from "../FeatDataApp";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  const { dataMain } = useStoreApp();
  const data = localStorage.getItem("key-app1") ? JSON.parse(localStorage.getItem("key-app1") as string) : null;
  // const dataApi = async () => {
  //   const data = await axios.get(
  //     urlApp1
  //   );
  //   setDataMain(data.data);
  // }
  // useEffect(() => {
  //   dataApi();
  // },[])
  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      <FeatDataApp />
      <div className="text-center text-3xl text-white">
        <Image src={data.message ?? dataMain?.message } alt={dataMain?.status} width={500} height={500} />
        <a href="http://localhost:3000/">go main</a>
      </div>
    </DefaultPageLayout>
  );
};
export default HomeView;
