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
          token.expires = (account.expires_at ?? 0) * 1000 || now + 120000; // default 120 seconds
        }
        //If the access token is not expired, return it
        if (!isExpired(+(token?.expires ?? 0))) {
          token.error = "";

          return token;
        }
        //If the refresh token expired
        if (isExpired(+(token?.refreshTokenExpires ?? 0))) {
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

      return session;
    },
  },
});

export { handler as GET, handler as POST };
