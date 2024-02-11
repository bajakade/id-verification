import "../globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

// import '../trans';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ID Verification App",
  description: "Verify your official IDs/Numbers",
};

export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    return (
      <html lang={locale}>
        <body>{children}</body>
      </html>
    );
  }