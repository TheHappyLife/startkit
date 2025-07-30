"use client";
import { Box, BoxProps, SxProps } from "@mui/material";
import cn from "@/utils/cn";
import useAssets from "@/hooks/useAssets";
import { ReactEventHandler } from "react";
export interface IconProps extends BoxProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  sx?: SxProps;
  className?: string;
  keyString?: string;
  onError?: () => void;
}

const Icon = (props: IconProps) => {
  const { src, alt, onClick, width, height, sx, className, keyString, onError, ...rest } = props;
  const { getIcon } = useAssets();

  const handleError: ReactEventHandler = (e) => {
    (e.target as HTMLImageElement).src = getIcon(keyString ?? "");
    onError?.();
  };

  return (
    <Box
      component="img"
      src={src || getIcon(keyString ?? "")}
      alt={alt}
      onClick={onClick}
      onError={handleError}
      className={cn(className)}
      {...rest}
      sx={{
        display: "block",
        width: (width ?? height ?? false) ? `${(width || height || 0) / 16}rem` : "auto",
        height: (height ?? width ?? false) ? `${(height || width || 0) / 16}rem` : "auto",
        ...sx,
      }}
    />
  );
};
export default Icon;
