import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, t } from "@/lib/i18n";
import { categories } from "@/content/categories";
import { tipCount } from "@/content/tips";
import CategoryCard from "@/components/CategoryCard";
import ScamWarning from "@/components/ScamWarning";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="text-center">
        <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/70">
          💎 {t(locale, "site.tagline")}
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-brawl-yellow via-brawl-gold to-brawl-yellow bg-clip-text text-transparent">
            {t(locale, "hero.title")}
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
          {t(locale, "hero.subtitle")}
        </p>
        <Link
          href={`/${locale}/tips/${categories[0].id}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brawl-purple to-brawl-violet px-6 py-3 font-bold text-white shadow-lg transition hover:opacity-90"
        >
          {t(locale, "hero.cta")}
          <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
        </Link>
      </section>

      {/* Categories */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-white">
          {t(locale, "home.categoriesTitle")}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              locale={locale}
              count={tipCount(category.id)}
            />
          ))}
        </div>
      </section>

      {/* Scam warning */}
      <section>
        <ScamWarning locale={locale} />
      </section>
    </div>
  );
}
