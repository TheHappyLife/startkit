import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import Icon from "../Icon";
import useAssets from "@/hooks/useAssets";
interface CloseModalProps extends GeneralProps {}

const CloseModal = (props: CloseModalProps) => {
  const { getIcon } = useAssets();
  const { className, ...rest } = props;

  return <Icon src={getIcon("close_modal")} className={cn("size-6", className)} {...rest} />;
};

export default CloseModal;
