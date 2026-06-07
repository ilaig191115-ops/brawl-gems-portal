import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Locale, localize, t } from "@/lib/i18n";
import type { Category } from "@/content/categories";

export default function CategoryCard({
  category,
  locale,
  count,
}: {
  category: Category;
  locale: Locale;
  count: number;
}) {
  return (
    <Link
      href={`/${locale}/tips/${category.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-2xl shadow-lg`}
      >
        {category.icon}
      </div>
      <h3 className="mb-1 text-lg font-bold text-white">
        {localize(category.title, locale)}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
        {localize(category.summary, locale)}
      </p>
      <div className="flex items-center justify-between text-sm font-semibold text-brawl-yellow">
        <span>
          {count} {t(locale, "category.tipsCount")}
        </span>
        <span className="inline-flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
          {t(locale, "category.viewTips")}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
