"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import useAssets from "@/hooks/useAssets";
import { signIn, useSession } from "next-auth/react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { REFRESH_TOKEN_STATUS } from "@/app/api/auth/[...nextauth]/type";
import { setIsLoggedIn } from "@/store/user/userSlice";
import { PRE_EXPIRED_TIME } from "@/app/api/auth/[...nextauth]/const";
import { Backdrop } from "@mui/material";
import CircularProgressComponent from "@/components/ui/CircularProgressComponent";
export enum AUTH_STATUS {
  LOADING = "loading",
  UNAUTHENTICATED = "unauthenticated",
  AUTHENTICATED = "authenticated",
}
interface AuthLayoutProps extends GeneralProps {}

const AuthLayout = (props: AuthLayoutProps) => {
  const { getImage } = useAssets();
  const dispatch = useDispatch();
  const { data: session, status, update } = useSession();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    if (status === AUTH_STATUS.UNAUTHENTICATED || session?.error === REFRESH_TOKEN_STATUS.FAILED) {
      signIn("keycloak");

      return;
    }
    if (status === AUTH_STATUS.AUTHENTICATED && session?.accessToken) {
      dispatch(setIsLoggedIn(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session?.accessToken, session?.error]);

  useEffect(() => {
    !!timeout.current && clearTimeout(timeout.current);
    const expiredTime = +(session?.expires ?? 0);
    const currentTime = Date.now();
    const timeDiff = Math.max(expiredTime - currentTime - PRE_EXPIRED_TIME, 0); //auto refresh token before PRE_EXPIRED_TIME = 40 seconds
    timeout.current = setTimeout(() => {
      update();
    }, timeDiff);

    return () => clearTimeout(timeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.expires]);

  return (
    <div
      className={cn("size-full flex flex-col bg-cover bg-center bg-no-repeat", props.className)}
      style={{
        backgroundImage: `url(${getImage("main_bg", "jpg")})`,
      }}
    >
      <main className="h-[calc(100dvh)] w-full overflow-y-auto">
        {/* this is only example for loading state */}
        {!isLoggedIn && (
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={true}
          >
            <CircularProgressComponent color="inherit" />
          </Backdrop>
        )}
        {isLoggedIn && props.children}
      </main>
    </div>
  );
};

export default AuthLayout;
