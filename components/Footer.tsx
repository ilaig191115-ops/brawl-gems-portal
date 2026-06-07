import { type Locale, t } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-brawl-darker/60">
      <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-white/60">
        <p className="mb-2 font-semibold text-white/80">
          💎 {t(locale, "footer.madeWith")}
        </p>
        <p className="mx-auto max-w-2xl leading-relaxed">
          {t(locale, "footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
