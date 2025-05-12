import cn from "@/utils/cn";
import Icon from "../Icon";
import { IconProps } from "../Icon";
import useAssets from "@/hooks/useAssets";
interface BackArrowProps extends IconProps {}

const BackArrow = (props: BackArrowProps) => {
  const { getIcon } = useAssets();
  const { ...rest } = props;

  return (
    <Icon
      className={cn(props.className)}
      src={getIcon("arrow_back")}
      width={24}
      sx={{
        ...props.sx,
      }}
      {...rest}
    />
  );
};

export default BackArrow;
