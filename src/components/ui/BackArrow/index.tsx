import cn from "@/utils/cn";
import styles from "./index.module.css";
import getIcon from "@/utils/getIcon";
import Icon from "../Icon";
import { GeneralProps } from "@/types/ui";

interface BackArrowProps extends GeneralProps {}

const BackArrow = (props: BackArrowProps) => {
  const { className, ...rest } = props;

  return (
    <Icon
      src={getIcon("arrow_back")}
      className={cn(styles.container, "size-6", className)}
      {...rest}
    />
  );
};

export default BackArrow;
