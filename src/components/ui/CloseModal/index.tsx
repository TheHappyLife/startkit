import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import Icon from "../Icon";
import getIcon from "@/utils/getIcon";
interface CloseModalProps extends GeneralProps {}

const CloseModal = (props: CloseModalProps) => {
  const { className, ...rest } = props;

  return <Icon src={getIcon("close_modal")} className={cn("size-6", className)} {...rest} />;
};

export default CloseModal;
