"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";
import { useStoreApp2 } from "@/store/storeApp2";
import { useStoreApp1 } from "@/store/storeApp1";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  const { data1 } = useStoreApp1();
  const { data2 } = useStoreApp2();
  console.log(data1, data2);
  
  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
          {data1?.data.map((item: any, index: number) => (
            <div key={index}>{item.id}</div>
          ))}
        <hr/>
          {data2?.data.map((item: any, index: number) => (
            <div key={index}>{item.id}</div>
          ))}
    </DefaultPageLayout>
  );
};
export default HomeView;
