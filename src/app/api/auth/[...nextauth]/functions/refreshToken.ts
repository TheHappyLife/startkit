import axios from "axios";
import { REFRESH_TOKEN_STATUS } from "../type";
const refreshToken = async (
  theRefreshToken: string
): Promise<{
  status: REFRESH_TOKEN_STATUS;
  data: any;
}> => {
  try {
    const response = await axios.post(
      `${process.env.KEYCLOAK_REFRESH_TOKEN_URL}`,
      {
        refresh_token: theRefreshToken || "",
      },
      {
        headers: {
          "x-api-key": process.env.KEYCLOAK_X_API_KEY || "",
        },
      }
    );
    const data = await response;
    if (data?.status === 200) {
      return {
        status: REFRESH_TOKEN_STATUS.SUCCESS,
        data: data?.data?.data,
      };
    }

    return {
      status: REFRESH_TOKEN_STATUS.FAILED,
      data: null,
    };
  } catch (error) {
    console.error("🚀 ~ refreshToken ~ error:", error);

    return {
      status: REFRESH_TOKEN_STATUS.FAILED,
      data: null,
    };
  }
};

export default refreshToken;
