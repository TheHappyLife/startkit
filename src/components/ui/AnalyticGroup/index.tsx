import cn from "@/utils/cn";
import styles from "./index.module.css";
import Text from "../Text";
import Formatter from "../Formatter";
import Icon from "../Icon";
import getIcon from "@/utils/getIcon";
interface AnalyticGroupProps {
  className?: string;
}

const AnalyticGroup = (props: AnalyticGroupProps) => {
  return (
    <div className={cn(styles.container, "", props.className)}>
      <Text className="text-ui-text-white font-500 leading-140 text-14">Total Amount</Text>
      <Text className="flex items-end gap-1 text-24 font-semibold text-ui-text-white">
        <Formatter value={1000000} />
        <Text className="text-[0.5em] font-normal">USD</Text>
        <Icon src={getIcon("arrow-up")} className="size-4" />
      </Text>
      <div className="flex items-center gap-2 text-12">
        <Text className="text-ui-text-white font-500 leading-140 text-14">7 days</Text>
        <Icon src={getIcon("arrow-increase")} className="size-4" />
        <Text className="text-ui-text-increase font-500 leading-140 text-14 border-b border-ui-text-increase border-dashed">
          5.63 (+3,22%)
        </Text>
      </div>
    </div>
  );
};

export default AnalyticGroup;
