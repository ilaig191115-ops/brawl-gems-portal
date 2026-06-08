import { type Locale, t, type UiKey } from "@/lib/i18n";
import type { Club, ClubRole, ClubType } from "@/lib/brawlstars";
import StatCard from "./StatCard";

const typeKey: Record<ClubType, UiKey> = {
  open: "stats.clubType.open",
  inviteOnly: "stats.clubType.inviteOnly",
  closed: "stats.clubType.closed",
};

const roleKey: Partial<Record<ClubRole, UiKey>> = {
  member: "stats.role.member",
  senior: "stats.role.senior",
  vicePresident: "stats.role.vicePresident",
  president: "stats.role.president",
};

export default function ClubDashboard({
  club,
  locale,
}: {
  club: Club;
  locale: Locale;
}) {
  const members = [...club.members].sort((a, b) => b.trophies - a.trophies);

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-3xl" aria-hidden>
            🛡️
          </span>
          <h1 className="text-3xl font-extrabold text-white">{club.name}</h1>
          <span dir="ltr" className="text-sm text-white/50">
            {club.tag}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
            {t(locale, typeKey[club.type])}
          </span>
        </div>
        {club.description && (
          <p className="mt-3 text-sm leading-relaxed text-white/70">{club.description}</p>
        )}
      </header>

      {/* Stat grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard icon="🏆" label={t(locale, "stats.trophies")} value={club.trophies} />
        <StatCard
          icon="🎯"
          label={t(locale, "stats.requiredTrophies")}
          value={club.requiredTrophies}
        />
        <StatCard
          icon="👥"
          label={t(locale, "stats.members")}
          value={`${club.members.length}/30`}
        />
      </div>

      {/* Members */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">{t(locale, "stats.members")}</h2>
        <div className="space-y-2">
          {members.map((m, i) => (
            <div
              key={m.tag}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="flex items-center gap-3">
                <span className="w-6 text-sm text-white/40">{i + 1}</span>
                <span className="font-semibold text-white">{m.name}</span>
                <span className="text-xs text-white/50">
                  {roleKey[m.role] ? t(locale, roleKey[m.role]!) : m.role}
                </span>
              </span>
              <span className="text-sm text-brawl-yellow">🏆 {m.trophies.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
