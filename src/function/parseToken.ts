import { TokenData } from "@/store/tokens/type";

const parseToken = (tokenDataAsString?: string): TokenData | undefined => {
  if (!tokenDataAsString) {
    return undefined;
  }
  const tokenData = JSON.parse(tokenDataAsString);

  return tokenData;
};

export default parseToken;
