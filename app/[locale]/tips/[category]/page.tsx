import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localize, t, locales } from "@/lib/i18n";
import { categories, getCategory } from "@/content/categories";
import { tipsForCategory } from "@/content/tips";
import TipCard from "@/components/TipCard";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category: category.id })),
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categoryId } = await params;
  if (!isLocale(locale)) notFound();

  const category = getCategory(categoryId);
  if (!category) notFound();

  const list = tipsForCategory(category.id);

  return (
    <div className="space-y-8">
      <Link
        href={`/${locale}`}
        className="inline-block text-sm font-semibold text-white/60 transition hover:text-white"
      >
        {t(locale, "tips.backHome")}
      </Link>

      <header className="flex items-center gap-4">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-3xl shadow-lg`}
        >
          {category.icon}
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            {localize(category.title, locale)}
          </h1>
          <p className="mt-1 max-w-2xl text-white/70">
            {localize(category.summary, locale)}
          </p>
        </div>
      </header>

      <div className="space-y-5">
        {list.map((tip) => (
          <TipCard key={tip.id} tip={tip} locale={locale} />
        ))}
      </div>
    </div>
  );
}
