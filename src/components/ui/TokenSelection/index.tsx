import cn from "@/utils/cn";
import styles from "./index.module.css";
import { useMemo } from "react";
import { TokenData } from "@/store/tokens/type";
import Icon from "../Icon";
import Text from "../Text";
import Formatter from "../Formatter";
import { GeneralProps } from "@/types/ui";
import parsePropsData from "@/function/parsePropsData";
interface TokenSelectionProps extends GeneralProps {
  tokenData?: string;
  active?: boolean;
}

const TokenSelection = (props: TokenSelectionProps) => {
  const { tokenData: tokenDataString, className, ...rest } = props;
  const tokenData = useMemo<TokenData | undefined>(
    () => parsePropsData<TokenData>(tokenDataString),
    [tokenDataString]
  );

  return (
    <div
      className={cn(
        styles.container,
        "bg-ui-background-white-16 p-3 rounded-12 flex items-center",
        props.active && "bg-secondary/[0.16] border border-secondary",
        className
      )}
      {...rest}
    >
      <div className="flex items-center gap-1">
        <Icon className="size-4 rounded-full" />
        <Text className="text-14 font-500 leading-140 text-ui-text-white">{tokenData?.name}</Text>
      </div>
      <div className="text-right ml-auto">
        <Text className="text-14 font-500 leading-140 text-ui-text-white">
          <Formatter value={20000} />
        </Text>
        <Text className="text-11 font-500 leading-140 text-ui-text-B1B1B1">
          <Formatter value={2000} />
        </Text>
      </div>
    </div>
  );
};

export default TokenSelection;
