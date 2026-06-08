import { notFound } from "next/navigation";
import { isLocale, t } from "@/lib/i18n";
import TagSearchForm from "@/components/stats/TagSearchForm";

export default async function StatsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="space-y-10">
      <section className="text-center">
        <span className="mb-4 inline-block text-4xl" aria-hidden>
          📊
        </span>
        <h1 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {t(locale, "stats.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">{t(locale, "stats.subtitle")}</p>
      </section>

      <TagSearchForm locale={locale} />
    </div>
  );
}
