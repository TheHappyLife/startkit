"use client";
import React, { ReactNode, useCallback } from "react";
import { BoxProps } from "@mui/material";
import CustomTooltip from "../CustomTooltip";
import getStandardNumber from "./functions/getStandardNumber";
import lengthFromDotToFirstNonZero from "./functions/lengthFromDotToFirstNonZero";
import formatter from "./functions/formatter";
import clsx from "clsx";
export interface FormatterProps extends BoxProps {
  value?: number | string;
  start?: string;
  unit?: string;
  lengthValueAllowed?: number;
  allowShowZero?: boolean;
  useCompact?: boolean;
  useCompactOnThousand?: boolean;
  disableTooltip?: boolean;
  showLessThan?: boolean;
  isNotCurrency?: boolean;
  className?: string;
}
export const Formatter: React.FC<FormatterProps> = ({
  value,
  start = "",
  unit = "",
  lengthValueAllowed = 8,
  allowShowZero = false,
  useCompact = true,
  disableTooltip,
  showLessThan = false,
  useCompactOnThousand = false,
  isNotCurrency = false,
  className,
}) => {
  // TODO: get user setting from backend
  const userSetting = {
    currency: "usd",
    currencySymbol: "$",
    rate: 1,
    decimalDot: ".",
    decimalComma: ",",
    unitDirection: "right",
  };
  const valueInNumber = Number(value);

  const addUnit = (value: ReactNode) => {
    const isLeft = userSetting.unitDirection === "left";

    if (isLeft) {
      return (
        <span className={clsx(className)}>
          {unit} {value}
        </span>
      );
    }

    return (
      <span className={clsx(className)}>
        {value} {unit}
      </span>
    );
  };

  const valueDisplay = useCallback(() => {
    const returnFalsyValue = () => {
      if (!allowShowZero) return "--";

      return <span className={clsx(className)}>0</span>;
    };
    if (isNaN(valueInNumber)) return returnFalsyValue();
    if (valueInNumber === 0) return returnFalsyValue();

    const formattedNumber = getStandardNumber(valueInNumber);
    const lengthFromDot = lengthFromDotToFirstNonZero(formattedNumber);
    const isSmallValue = valueInNumber > 0 && valueInNumber < 0.01;

    if (isSmallValue) {
      if (showLessThan) {
        return (
          <span className={clsx(className)}>
            {start}
            {"< "}0{userSetting.decimalDot}01
          </span>
        );
      } else {
        return (
          <span className={clsx(className)}>
            {start}
            {"0.0"}
            <sub>{lengthFromDot}</sub>
            {formattedNumber.slice(2 + lengthFromDot, lengthValueAllowed - 2 + lengthFromDot)}
          </span>
        );
      }
    }

    return (
      <span className={clsx(className)}>
        {start}
        {formatter(valueInNumber, useCompact, useCompactOnThousand, lengthValueAllowed)}
      </span>
    );
  }, [
    valueInNumber,
    className,
    start,
    useCompact,
    useCompactOnThousand,
    lengthValueAllowed,
    allowShowZero,
    showLessThan,
    userSetting.decimalDot,
  ]);

  const trigger = valueDisplay();

  return (
    <CustomTooltip
      disabled={disableTooltip}
      trigger={addUnit(trigger)}
      sx={{
        "& .MuiPaper-root": {
          whiteSpace: "nowrap",
          backdropFilter: "blur(10px)",
          borderRadius: "0.37rem",
          padding: "0.5rem 0.75rem",
          fontSize: "1.05em",
          fontWeight: 500,
          lineHeight: "100%",
        },
      }}
    >
      <Formatter
        disableTooltip
        start={start}
        value={value}
        lengthValueAllowed={12}
        useCompact={false}
        unit={unit}
        allowShowZero
        isNotCurrency={isNotCurrency}
      />
    </CustomTooltip>
  );
};

export default Formatter;
