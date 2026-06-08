"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { type Locale, t } from "@/lib/i18n";

export default function TagSearchForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [type, setType] = useState<"player" | "club">("player");
  const [tag, setTag] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const clean = tag.trim().replace(/^#/, "").toUpperCase();
    if (!clean) return;
    router.push(`/${locale}/stats/${type}/${clean}`);
  }

  const tabClass = (active: boolean) =>
    `flex-1 rounded-xl px-4 py-2 text-sm font-bold transition ${
      active
        ? "bg-gradient-to-r from-brawl-purple to-brawl-violet text-white"
        : "bg-white/5 text-white/60 hover:bg-white/10"
    }`;

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setType("player")}
          className={tabClass(type === "player")}
        >
          {t(locale, "stats.player")}
        </button>
        <button
          type="button"
          onClick={() => setType("club")}
          className={tabClass(type === "club")}
        >
          {t(locale, "stats.club")}
        </button>
      </div>

      <div className="flex gap-2">
        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder={t(locale, "stats.tagPlaceholder")}
          className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-brawl-violet focus:outline-none"
          dir="ltr"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brawl-purple to-brawl-violet px-5 py-3 font-bold text-white transition hover:opacity-90"
        >
          <Search className="h-4 w-4" aria-hidden />
          {t(locale, "stats.search")}
        </button>
      </div>

      <p className="text-center text-xs text-white/50">{t(locale, "stats.tagHint")}</p>
    </form>
  );
}
