import formatDate from "./functions/formatDate";
import formatNumber from "./functions/formatNumber";
export interface UseFormatterType {
  formatNumber: (value: number, hideUnit?: boolean) => string;
  formatDate: (date: string) => string;
}

function useFormatter(): UseFormatterType {
  return {
    formatNumber,
    formatDate,
  };
}

export default useFormatter;
