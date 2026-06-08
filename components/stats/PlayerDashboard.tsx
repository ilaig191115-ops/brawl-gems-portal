import { type Locale, t } from "@/lib/i18n";
import type { Player } from "@/lib/brawlstars";
import StatCard from "./StatCard";

// nameColor from the API is like "0xfff0d090" (ARGB) — convert to #RRGGBB.
function nameColor(raw?: string): string | undefined {
  if (!raw) return undefined;
  const hex = raw.replace(/^0x/, "");
  return hex.length === 8 ? `#${hex.slice(2)}` : undefined;
}

export default function PlayerDashboard({
  player,
  locale,
}: {
  player: Player;
  locale: Locale;
}) {
  const topBrawlers = [...player.brawlers]
    .sort((a, b) => b.trophies - a.trophies)
    .slice(0, 12);

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-3xl" aria-hidden>
            🧑‍🚀
          </span>
          <h1
            className="text-3xl font-extrabold"
            style={{ color: nameColor(player.nameColor) ?? "#fff" }}
          >
            {player.name}
          </h1>
          <span dir="ltr" className="text-sm text-white/50">
            {player.tag}
          </span>
        </div>
        <div className="mt-2 text-sm text-white/70">
          {t(locale, "stats.expLevel")} {player.expLevel}
          {" · "}
          {t(locale, "stats.club.label")}:{" "}
          {player.club?.name ?? t(locale, "stats.noClub")}
        </div>
      </header>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard icon="🏆" label={t(locale, "stats.trophies")} value={player.trophies} />
        <StatCard
          icon="⭐"
          label={t(locale, "stats.highestTrophies")}
          value={player.highestTrophies}
        />
        <StatCard icon="⚔️" label={t(locale, "stats.3v3")} value={player["3vs3Victories"]} />
        <StatCard icon="🥇" label={t(locale, "stats.solo")} value={player.soloVictories} />
        <StatCard icon="👥" label={t(locale, "stats.duo")} value={player.duoVictories} />
      </div>

      {/* Top brawlers */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">
          {t(locale, "stats.topBrawlers")}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topBrawlers.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="font-semibold text-white">{b.name}</span>
              <span className="flex items-center gap-3 text-sm text-white/70">
                <span className="text-brawl-yellow">🏆 {b.trophies}</span>
                <span>
                  {t(locale, "stats.power")} {b.power}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
