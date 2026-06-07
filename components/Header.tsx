import Link from "next/link";
import { type Locale, t } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-brawl-darker/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-lg font-extrabold text-white"
        >
          <span className="text-2xl" aria-hidden>
            💎
          </span>
          <span className="bg-gradient-to-r from-brawl-yellow to-brawl-gold bg-clip-text text-transparent">
            {t(locale, "site.name")}
          </span>
        </Link>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
