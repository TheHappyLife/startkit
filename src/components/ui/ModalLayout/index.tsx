import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';
import getImage from '@/utils/getImage';
import CloseModal from '../CloseModal';
import ModalTitle from '../ModalTitle';

type ModalLayoutProps = {
  title?: string;
  onClose?: () => void;
  hideHeader?: boolean;
} & GeneralProps;

const ModalLayout = (props: ModalLayoutProps) => {
  return (
    <div
      className={cn(
        'border-t-2 border-secondary rounded-t-24 max-h-[100dvh] bg-cover bg-top bg-no-repeat p-4 border flex flex-col',
        props.className,
      )}
      style={{
        backgroundImage: `url(${getImage('modal-bg', 'jpg')})`,
      }}
    >
      {!props.hideHeader && (
        <>
          <div className="flex items-center">
            <ModalTitle>{props.title}</ModalTitle>
            <CloseModal className="ml-auto" onClick={props.onClose} />
          </div>
          <div className="horizontal_divider my-3"></div>
        </>
      )}
      <div className="flex-1 overflow-y-auto">{props.children}</div>
    </div>
  );
};

export default ModalLayout;
