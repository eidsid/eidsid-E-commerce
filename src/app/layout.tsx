import "./globals.css";
import type { Metadata } from "next";
import { IChildren } from "@/shared/types/index";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "this is plate form for selling staff",
};

export default function RootLayout({ children }: IChildren) {
  const Local = getLocaleInServer(headers);

  return (
    <html lang={Local}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
