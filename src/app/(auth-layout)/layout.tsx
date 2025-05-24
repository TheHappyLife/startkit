"use client";
import AuthLayout from "@/components/layouts/AuthLayout";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <AuthLayout>{children}</AuthLayout>
    </SessionProvider>
  );
}
