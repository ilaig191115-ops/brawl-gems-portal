"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { type Locale, locales, t } from "@/lib/i18n";

// Swaps the locale segment of the current path, preserving the rest.
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const other = locales.find((l) => l !== locale) ?? locale;

  const segments = pathname.split("/");
  // segments[0] is "" (leading slash), segments[1] is the locale.
  segments[1] = other;
  const target = segments.join("/") || `/${other}`;

  return (
    <Link
      href={target}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
    >
      <Languages className="h-4 w-4" aria-hidden />
      {t(locale, "lang.switch")}
    </Link>
  );
}
