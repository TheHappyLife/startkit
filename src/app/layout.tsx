import type { Metadata } from "next";
import "./globals.css";
import ReduxToolkitProvider from "@/store/Provider";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import MuiThemeProvider from "@/theme/mui";

export const metadata: Metadata = {
  title: "Fortune Vault - Secure & Smart Wealth Management",
  description:
    "Fortune Vault is your ultimate platform for protecting, managing, and optimizing your assets with top-tier security. Store cryptocurrencies, important documents, and financial information with confidence. Unlock your financial future today! 🚀🔐",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <ReduxToolkitProvider>
          <MuiThemeProvider>
            <GeneralLayout>{children}</GeneralLayout>
          </MuiThemeProvider>
        </ReduxToolkitProvider>
      </body>
    </html>
  );
}
