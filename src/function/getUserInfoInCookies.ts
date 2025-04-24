/**
 * USE THIS FUNCTION ONLY IN SERVER SIDE
 */

import { cookies } from "next/headers";

const getUserInfoFromCookies = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value || "";
  const refreshToken = cookieStore.get("refresh_token")?.value || "";
  const expiresIn = cookieStore.get("expires_in")?.value || "";
  const refreshTokenExpiresIn = cookieStore.get("refresh_token_expires_in")?.value || "";

  return {
    accessToken,
    refreshToken,
    expiresIn,
    refreshTokenExpiresIn,
  };
};

export default getUserInfoFromCookies;
