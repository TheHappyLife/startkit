import type { ButtonProps as MuiButtonProps } from '@mui/material';
import theme from '@/theme/mui/theme';
import cn from '@/utils/cn';
import { Button as MuiButton } from '@mui/material';

export enum BUTTON_STATUS {
  LOADING = 'loading',

  DISABLED = 'disabled',

  ENABLED = 'enabled',
}

export type ButtonProps = {
  className?: string;
  status?: BUTTON_STATUS;
} & MuiButtonProps;

const Button: React.FC<ButtonProps> & {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
} = (props: ButtonProps) => {
  const { status = BUTTON_STATUS.ENABLED, className, ...rest } = props;

  return (
    <MuiButton className={cn('', className)} disabled={status !== BUTTON_STATUS.ENABLED} {...rest}>
      {props.children}
    </MuiButton>
  );
};

Button.displayName = 'Button';

Button.Primary = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      className="text-16 leading-120 !capitalize font-500 px-4 py-2.5"
      sx={{
        borderRadius: '999px',
        color: '#000000',
      }}
    >
      {props.children}
    </Button>
  );
};

Button.Primary.displayName = 'Button.Primary';

Button.Secondary = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <Button
      {...rest}
      variant="contained"
      color="secondary"
      className={cn('text-16 leading-120 !capitalize font-500 px-4 py-2.5', className)}
      sx={{
        borderRadius: '999px',
        backgroundColor: `color-mix(in srgb, ${theme.palette.secondary.main} 16%, transparent)`,
        color: theme.palette.secondary.main,
      }}
    >
      {props.children}
    </Button>
  );
};

Button.Secondary.displayName = 'Button.Secondary';

export default Button;
