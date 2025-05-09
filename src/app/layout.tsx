import type { Metadata } from 'next';
import GeneralLayout from '@/components/layouts/GeneralLayout';
import ReduxToolkitProvider from '@/store/Provider';
import MuiThemeProvider from '@/theme/mui';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fortune Vault - Secure & Smart Wealth Management',
  description:
    'Fortune Vault is your ultimate platform for protecting, managing, and optimizing your assets with top-tier security. Store cryptocurrencies, important documents, and financial information with confidence. Unlock your financial future today! 🚀🔐',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="antialiased">
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
