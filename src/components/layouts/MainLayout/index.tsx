'use client';
import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';
import getImage from '@/utils/getImage';

type MainLayoutProps = {} & GeneralProps;

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div
      className={cn('size-full flex flex-col bg-cover bg-center bg-no-repeat', props.className)}
      style={{
        backgroundImage: `url(${getImage('main_bg', 'jpg')})`,
      }}
    >
      <main className="h-[calc(100dvh)] w-full overflow-y-auto">{props.children}</main>
    </div>
  );
};

export default MainLayout;
