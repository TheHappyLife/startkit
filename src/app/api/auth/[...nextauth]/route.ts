import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import refreshToken from "./functions/refreshToken";
import { REFRESH_TOKEN_STATUS } from "./type";
import isExpired from "./functions/isExpired";
import errorHandler from "./functions/errorHandler";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT || "",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      //The first time login
      try {
        if (account && user) {
          const now = Date.now();
          token.accessToken = account.access_token;
          token.refreshToken = account.refresh_token;
          token.refreshTokenExpires =
            +(account.refresh_expires_in || (account.expires_at ?? 120)) * 1000;
          console.warn(
            "🚀 ~ jwt ~ token.refreshTokenExpires:",
            token.refreshTokenExpires,
            (account.expires_at ?? 120) * 1000
          );
          token.expires = (account.expires_at ?? 0) * 1000 || now + 120000; // default 120 seconds
        }
        //If the access token is not expired, return it
        if (!isExpired(+(token?.expires ?? 0))) {
          token.error = "";

          return token;
        }
        //If the refresh token expired
        if (isExpired(+(token?.refreshTokenExpires ?? 0))) {
          console.warn(
            "🚀 ~ jwt ~ isExpired(+(token?.refreshTokenExpires ?? 0)):",
            isExpired(+(token?.refreshTokenExpires ?? 0)),
            token?.refreshTokenExpires
          );

          token.error = REFRESH_TOKEN_STATUS.FAILED;

          return token;
        }
        //If the token is expired and the refresh token is not expired
        if (isExpired(+(token?.expires ?? 0))) {
          const theRefreshToken = token.refreshToken;
          if (!theRefreshToken) {
            throw new Error("Refresh token is not found");
          }
          const refreshedTokens = await refreshToken(theRefreshToken);
          console.warn("🚀 ~ jwt ~ refreshedTokens:", refreshedTokens);
          if (refreshedTokens.status === REFRESH_TOKEN_STATUS.SUCCESS) {
            const data = refreshedTokens.data;
            const now = Date.now();
            const expiresIn = (data?.expires_in ?? 0) * 1000;
            const expiresAt = expiresIn ? expiresIn + now : now + 120000; //default 120 seconds
            token.accessToken = data?.access_token;
            token.refreshToken = data?.refresh_token;
            token.refreshTokenExpires = (data?.refresh_expires_in ?? 0) * 1000 || expiresAt;
            token.expires = expiresAt;
            token.error = "";
          }
          throw new Error(REFRESH_TOKEN_STATUS.FAILED);
        }

        return token;
      } catch (error) {
        console.error("🚀 ~ error:", error);
        errorHandler(error);

        return token;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.expires = token.expires;
        session.error = token.error;
        session.refreshTokenExpires = token.refreshTokenExpires;
      }

      /**
       * CHECK SUB AFF
       *  Giải access token để lấy thông tin user id
       * Lấy thông tin sub affiliate từ cookie:
       *  1. Nếu có thông tin và đúng là user này đã sub aff rồi => return session có status đã sub aff (session.hasSubAff = true)
       *  2. Nếu không có thông tin, thì gọi api check sub aff:
       *    2.1 Nếu đã sub aff thì lưu thông tin user và trạng thái đã sub aff vào cookie và return session có status đã sub aff (session.hasSubAff = true)
       *    2.2 Nếu chưa sub aff thì return session vẫn nguyên với status chưa sub aff (session.hasSubAff = false)
       */

      /**
       * XỬ LÍ ĐIỀU HƯỚNG Ở AUTHLAYOUT
       * 1. Nếu chưa sub aff thì điều hướng đến zone Onboard
       * 2. Nếu đã sub aff thì thực hiện những việc của zone hiện tại, đồng thời gọi ngầm api check xem đã có sub aff hay chưa lần nữa, nếu chưa thì ...
       */

      return session;
    },
  },
});

export { handler as GET, handler as POST };
