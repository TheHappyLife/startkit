import formatter from "./formatter";
import roundToTwoSignificantDecimals from "./roundToTwoSignificantDecimals";

const formatNumber = (value: number, hideUnit?: boolean) => {
  const currency = "usd"; // example
  const rate = 1; // rate in usd (example)
  const isDollar =
    currency?.toLowerCase()?.includes("usd") || currency?.toLowerCase()?.includes("$");
  const valueDisplay = formatter(roundToTwoSignificantDecimals(value / rate), false, true);
  if (hideUnit) return valueDisplay;

  return (isDollar ? "$" : "") + valueDisplay + (isDollar ? "" : !!currency ? ` ${currency}` : "");
};

export default formatNumber;
