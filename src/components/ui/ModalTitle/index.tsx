import cn from "@/utils/cn";
import Text from "../Text";
import { GeneralProps } from "@/types/ui.general.type";
interface ModalTitleProps extends GeneralProps {}

const ModalTitle = (props: ModalTitleProps) => {
  const { children, className, ...rest } = props;

  return (
    <Text
      className={cn("text-18 font-600 leading-100 capitalize text-ui-text-white", className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ModalTitle;
