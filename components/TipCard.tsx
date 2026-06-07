import { Check } from "lucide-react";
import { type Locale, localize } from "@/lib/i18n";
import type { Tip } from "@/content/tips";

export default function TipCard({ tip, locale }: { tip: Tip; locale: Locale }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
      {tip.bullets.length > 0 && (
        <ul className="space-y-2">
          {tip.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-brawl-yellow"
                aria-hidden
              />
              <span>{localize(bullet, locale)}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
