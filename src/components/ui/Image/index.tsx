import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

type ImageProps = {
  src?: string;
  alt?: string;
} & BoxProps;

const Image = (props: ImageProps) => {
  return (
    <Box
      component="img"
      onClick={props.onClick}
      src={props.src}
      alt={props.alt}
      sx={{ display: 'block', ...props.sx }}
    />
  );
};

export default Image;
