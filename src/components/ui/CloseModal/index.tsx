import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';
import getIcon from '@/utils/getIcon';
import Icon from '../Icon';

type CloseModalProps = {} & GeneralProps;

const CloseModal = (props: CloseModalProps) => {
  const { className, ...rest } = props;

  return <Icon src={getIcon('close_modal')} className={cn('size-6', className)} {...rest} />;
};

export default CloseModal;
