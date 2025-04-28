import cn from "@/utils/cn";
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { GeneralProps } from "@/types/ui";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "swiper/css";
import { Tabs } from "@mui/material";
interface SwiperControlledProps extends GeneralProps {
  className?: string;
  tabs?: React.ReactNode[];
  initialActiveTab?: number;
  tabsClassName?: string;
  swiperProps?: SwiperProps;
}

export interface SwiperControlledRef {
  slideTo: (index: number) => void;
  next: () => void;
  prev: () => void;
}

const SwiperControlled = forwardRef<SwiperControlledRef, SwiperControlledProps>((props, ref) => {
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
});

SwiperControlled.displayName = "SwiperControlled";

export default SwiperControlled;
