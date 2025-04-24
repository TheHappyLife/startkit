import cn from "@/utils/cn";
import styles from "./index.module.css";
import { useMemo } from "react";
import { NetworkData } from "@/store/tokens/type";
import Icon from "../Icon";
import Text from "../Text";
import { GeneralProps } from "@/types/ui";
import parsePropsData from "@/function/parsePropsData";
interface NetworkSelectionProps extends GeneralProps {
  active?: boolean;
  networkData?: string;
}

const NetworkSelection = (props: NetworkSelectionProps) => {
  const { networkData: networkDataString, className, ...rest } = props;
  const networkData = useMemo<NetworkData | undefined>(
    () => parsePropsData<NetworkData>(networkDataString),
    [networkDataString]
  );

  return (
    <div
      className={cn(
        styles.container,
        "bg-ui-background-white-16 px-4 py-2 rounded-12 flex items-center gap-1 border border-ui-border-white-16",
        props.active && "bg-secondary/[0.16] border-secondary",
        className
      )}
      {...rest}
    >
      <Icon src={networkData?.icon} className="size-4 rounded-full" />
      <Text className="text-14 font-500 leading-140 text-ui-text-white whitespace-nowrap capitalize">
        {networkData?.name}
      </Text>
    </div>
  );
};

export default NetworkSelection;
