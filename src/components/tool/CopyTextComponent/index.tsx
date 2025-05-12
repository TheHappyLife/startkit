import { useState } from "react";
import clsx from "clsx";
import { GeneralProps } from "@/types/ui.general.type";
import Icon from "../../ui/Icon";
import cn from "@/utils/cn";
import useAssets from "@/hooks/useAssets";

interface CopyTextComponentProps extends GeneralProps {
  value: string;
  iconSuccess?: React.ReactNode;
  hideTextMessage?: boolean;
}

const CopyTextComponent = ({
  value,
  className,
  iconSuccess,
  children,
  hideTextMessage,
}: CopyTextComponentProps) => {
  const { getIcon } = useAssets();
  const [showSuccess, setShowSuccess] = useState(false);

  const CopyTextComponent = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 800);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div onClick={CopyTextComponent} className={clsx("relative cursor-pointer", className)}>
      {children}
      <div
        className={clsx(
          "flex items-center justify-center gap-1 rounded-full absolute inset-0 bg-black backdrop-blur-[12px] transition-opacity duration-300 ease-in-out",
          {
            "opacity-0": !showSuccess,
            "opacity-100": showSuccess,
          }
        )}
      >
        {iconSuccess || <Icon src={getIcon("copied_check")} className={cn("size-4")} />}
        {!hideTextMessage && <span className="text-primary inline-block text-[0.8em]">Copied</span>}
      </div>
    </div>
  );
};

export default CopyTextComponent;
