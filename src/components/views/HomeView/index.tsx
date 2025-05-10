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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setExemple } from "@/store/exemple/exempleSlice";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { ExempleState } from "@/store/exemple/type";

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
  const dispatch = useDispatch();
  const exemple = useSelector((state: RootState) => state.exemple as ExempleState);
  const data = async () => {
    const res = await axios.get(
      "https://dogapi.dog/api/v2/breeds"
    )
    dispatch(setExemple(res.data.data));
  }
  useEffect(() => {
    data();
  }, [])
  console.log(exemple);
  
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
      {exemple.exemple.map((item) => (
          <div key={item.id}>{item.id}</div>
      ))}
    </DefaultPageLayout>
  );
};
export default HomeView;
