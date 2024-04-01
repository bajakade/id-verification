import "../globals.css";

import { Locale, locales } from "@/constants";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

import { Inter } from "next/font/google";
import { PageParams } from "@/types";

const inter = Inter({ subsets: ["latin"] });
 
export async function generateMetadata({params: {locale}}: PageParams) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}



export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: Locale};
  }) {
    unstable_setRequestLocale(locale);
 
    return (
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    );
  }