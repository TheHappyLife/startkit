import type { GeneralProps } from '@/types/ui';
import type { SwiperProps, SwiperRef } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import cn from '@/utils/cn';
import { Tabs } from '@mui/material';
import { useImperativeHandle, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

type SwiperControlledProps = {
  className?: string;
  tabs?: React.ReactNode[];
  initialActiveTab?: number;
  tabsClassName?: string;
  swiperProps?: SwiperProps;
} & GeneralProps;

export type SwiperControlledRef = {
  slideTo: (index: number) => void;
  next: () => void;
  prev: () => void;
};

const SwiperControlled = ({ ref, ...props }: SwiperControlledProps & { ref?: React.RefObject<SwiperControlledRef | null> }) => {
  const [activeTab, setActiveTab] = useState(props.initialActiveTab || 0);
  const swiperRef = useRef<SwiperRef>(null);
  const slideTo = (index: number) => {
    setActiveTab(index);
    swiperRef.current?.swiper?.slideTo(index);
  };
  const next = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  const prev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };
  useImperativeHandle(ref, () => ({
    slideTo,
    next,
    prev,
  }));
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveTab(swiper.activeIndex);
  };
  const handleTabChange = (event: React.SyntheticEvent, value: number) => {
    setActiveTab(value);
    swiperRef.current?.swiper?.slideTo(value);
  };

  return (
    <>
      {props.tabs && (
        <Tabs className={cn(props.tabsClassName)} value={activeTab} onChange={handleTabChange}>
          {...props.tabs}
        </Tabs>
      )}
      <Swiper
        {...props.swiperProps}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        initialSlide={activeTab}
        className={cn(props.className)}
      >
        {props.children}
      </Swiper>
    </>
  );
};

SwiperControlled.displayName = 'SwiperControlled';

export default SwiperControlled;
