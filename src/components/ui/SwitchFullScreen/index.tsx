import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";

interface SwitchFullScreenProps extends GeneralProps {}

export interface SwitchFullScreenRef {
  enter: () => void;
  exit: () => void;
}

const SwitchFullScreen = forwardRef<SwitchFullScreenRef, SwitchFullScreenProps>((props, ref) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleEnter = () => {
    setIsFullScreen(true);
  };
  const handleExit = () => {
    setIsFullScreen(false);
  };
  useImperativeHandle(ref, () => ({
    enter: handleEnter,
    exit: handleExit,
  }));

  const content = (
    <div
      ref={containerRef}
      className={cn(
        styles.thumbnail_container,
        isFullScreen && styles.fullscreen,
        isFullScreen && "fullscreen",
        props.className
      )}
      onClick={handleEnter}
    >
      {props.children}
    </div>
  );

  return isFullScreen ? createPortal(content, document.body) : content;
});
SwitchFullScreen.displayName = "SwitchFullScreen";
export default SwitchFullScreen;
