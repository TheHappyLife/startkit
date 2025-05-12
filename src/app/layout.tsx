import type { Metadata } from "next";
import "./globals.css";
import ReduxToolkitProvider from "@/store/Provider";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import MuiThemeProvider from "@/theme/mui";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Start kit",
  description: "Start kit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={"antialiased"}>
        <NextIntlClientProvider>
          <ReduxToolkitProvider>
            <MuiThemeProvider>
              <GeneralLayout>{children}</GeneralLayout>
            </MuiThemeProvider>
          </ReduxToolkitProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
