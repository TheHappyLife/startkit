"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";
import {
  Activities,
  AssetView,
  LockToken,
  ReceiveFunction,
  RequireConnect,
  useWallet,
} from "tek-wallet";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  const {
    tokens,
    isTokensLoading,
    lockTokens,
    updateReceiveInternalToken,
    isAuthenticated,
    masterWallet,
    activities,
  } = useWallet();

  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      <div
        className="text-red-500"
        onClick={() => {
          console.warn(activities);
        }}
      >
        Log info
      </div>
      <RequireConnect>
        <div
          className="text-red-500"
          onClick={() => {
            console.warn(tokens, lockTokens, isAuthenticated, masterWallet);
          }}
        >
          {isTokensLoading ? "Loading..." : "Log balances"}
        </div>
      </RequireConnect>
      <div
        className="text-red-500"
        onClick={() => {
          console.warn(tokens, updateReceiveInternalToken);
          updateReceiveInternalToken();
        }}
      >
        GetWalletSeedPhrase
      </div>
      <ReceiveFunction>
        <div
          className="text-red-500"
          onClick={() => {
            console.warn(tokens);
          }}
        >
          Deposit
        </div>
      </ReceiveFunction>
      <LockToken
        lockData={{
          amount: 21,
          tokenSlug: "usdt",
        }}
        onLockSuccess={(data) => {
          console.warn("onLockSuccess success", data);
        }}
      >
        <div className="text-red-500">Lock tokens</div>
      </LockToken>
      <Activities>Activities</Activities>
      <AssetView />
    </DefaultPageLayout>
  );
};
export default HomeView;
