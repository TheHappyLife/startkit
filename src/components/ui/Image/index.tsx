import { Box, BoxProps } from "@mui/material";
import cn from "@/utils/cn";
interface ImageProps extends BoxProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Image = (props: ImageProps) => {
  return (
    <Box
      component="img"
      className={cn(props.className)}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt}
      sx={{ display: "block", ...props.sx }}
    />
  );
};

export default Image;
