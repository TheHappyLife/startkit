export type UnknownFunction = (data?: unknown) => unknown;

export type GeneralProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: UnknownFunction;
};

export enum BUTTON_STATUS {
  LOADING = "loading",

  DISABLED = "disabled",

  ENABLED = "enabled",
}
