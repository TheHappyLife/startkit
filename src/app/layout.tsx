import type { Metadata } from "next";
import "./globals.css";
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
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
