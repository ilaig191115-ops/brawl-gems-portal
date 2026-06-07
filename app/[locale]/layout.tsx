import type { Metadata } from "next";
import "../globals.css";
import {
  type Locale,
  dir,
  isLocale,
  locales,
  defaultLocale,
  t,
} from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : defaultLocale;
  return {
    title: t(loc, "site.name"),
    description: t(loc, "site.tagline"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="font-sans text-white antialiased">
        <Header locale={locale} />
        <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
