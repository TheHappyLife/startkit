import cn from "@/utils/cn";
import styles from "./index.module.css";
import Text from "../Text";
import { GeneralProps } from "@/types/ui";
interface ModalTitleProps extends GeneralProps {}

const ModalTitle = (props: ModalTitleProps) => {
  const { children, className, ...rest } = props;

  return (
    <Text
      className={cn(
        styles.container,
        "text-18 font-600 leading-100 capitalize text-ui-text-white",
        className
      )}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ModalTitle;
