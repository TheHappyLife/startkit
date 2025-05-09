import type { IconProps } from '../Icon';
import getIcon from '../../../utils/getIcon';
import Icon from '../Icon';

type BackArrowProps = {} & IconProps;

const BackArrow = (props: BackArrowProps) => {
  const { ...rest } = props;

  return (
    <Icon
      src={getIcon('arrow_back')}
      width={24}
      sx={{
        ...props.sx,
      }}
      {...rest}
    />
  );
};

export default BackArrow;
