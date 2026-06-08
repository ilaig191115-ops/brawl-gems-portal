import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t } from "@/lib/i18n";
import { getClub, BrawlApiError } from "@/lib/brawlstars";
import ClubDashboard from "@/components/stats/ClubDashboard";

export default async function ClubStatsPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  if (!isLocale(locale)) notFound();

  const backLink = (
    <Link
      href={`/${locale}/stats`}
      className="inline-block text-sm font-semibold text-white/60 transition hover:text-white"
    >
      {t(locale, "stats.back")}
    </Link>
  );

  try {
    const club = await getClub(tag);
    return (
      <div className="space-y-6">
        {backLink}
        <ClubDashboard club={club} locale={locale} />
      </div>
    );
  } catch (err) {
    const notFoundErr = err instanceof BrawlApiError && err.kind === "not-found";
    return (
      <div className="space-y-6">
        {backLink}
        <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-6 text-center text-red-100">
          {t(locale, notFoundErr ? "stats.notFound" : "stats.error")}
        </div>
      </div>
    );
  }
}
