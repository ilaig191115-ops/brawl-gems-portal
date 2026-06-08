import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { type Locale, localize, t } from "@/lib/i18n";
import { dailyTip } from "@/content/tips";

export default function DailyTip({ locale }: { locale: Locale }) {
  const tip = dailyTip();

  return (
    <article className="rounded-2xl border border-brawl-yellow/30 bg-gradient-to-br from-brawl-yellow/10 to-brawl-gold/5 p-6">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-brawl-yellow" aria-hidden />
        <span className="text-sm font-bold uppercase tracking-wide text-brawl-yellow">
          {t(locale, "dailyTip.label")}
        </span>
      </div>
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          {tip.icon}
        </span>
        <h2 className="text-xl font-bold text-white">
          {localize(tip.title, locale)}
        </h2>
      </div>
      <p className="mb-4 leading-relaxed text-white/80">
        {localize(tip.body, locale)}
      </p>
      <Link
        href={`/${locale}/tips/${tip.category}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brawl-yellow transition hover:opacity-80"
      >
        {t(locale, "dailyTip.cta")}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
      </Link>
    </article>
  );
}
