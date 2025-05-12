export type UnknownFunction = (data?: unknown) => unknown;

export type GeneralProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: UnknownFunction;
};
