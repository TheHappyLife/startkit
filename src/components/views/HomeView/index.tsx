"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  const t = useTranslations("HomePage");

  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      <div className="text-white font-500 text-lg">{t("title")}</div>
      <div className="text-white font-500 text-lg">
        {t("random package", { count: Math.floor(Math.random() * 3) })}
      </div>
      <div className="text-white font-500 text-lg">
        {t.rich("how to pay", {
          link: (chunks) => (
            <Link
              href={t("how to pay link")}
              className="sz-13 leading-[120%] underline-offset-2 text-[#939393] decoration-dashed underline hover:text-white"
            >
              {chunks}
            </Link>
          ),
        })}
      </div>
    </DefaultPageLayout>
  );
};
export default HomeView;
