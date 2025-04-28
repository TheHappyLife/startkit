import cn from "@/utils/cn";
import { forwardRef } from "react";
interface InputProps {
  className?: string;
  inputRest?: React.InputHTMLAttributes<HTMLInputElement>;
  inputClassName?: string;
  leftPart?: React.ReactNode;
  rightPart?: React.ReactNode;
}

export type InputRef = HTMLInputElement;

const Input = forwardRef<InputRef, InputProps>((props, inputRef) => {
  const { className, inputRest, inputClassName, leftPart, rightPart, ...rest } = props;

  return (
    <div
      ref={inputRef}
      className={cn("rounded-12 px-3 bg-ui-background-white-16 flex items-center gap-2", className)}
      {...rest}
    >
      {leftPart && <div className="flex items-center">{leftPart}</div>}
      <input
        {...inputRest}
        className={cn(
          "bg-transparent border-none outline-none text-14 leading-150 font-400 placeholder:text-ui-text-B1B1B1 flex-1 py-2",
          inputClassName
        )}
      />
      {rightPart && <div className="flex items-center">{rightPart}</div>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
