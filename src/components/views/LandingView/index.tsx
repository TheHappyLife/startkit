"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import { useTranslations } from "next-intl";

interface LandingViewProps extends GeneralProps {}

const LandingView = (props: LandingViewProps) => {
  const t = useTranslations("LandingPage");

  return (
    <div className={cn("flex flex-col gap-4 pb-bottom-page ", props.className)}>
      <div className="text-black font-500 text-lg">{t("title")}</div>
      <div className="text-black font-500 text-lg">{t("description")}</div>
    </div>
  );
};
export default LandingView;
