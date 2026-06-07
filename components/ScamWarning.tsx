import { ShieldAlert } from "lucide-react";
import { type Locale, localize, type LocalizedText } from "@/lib/i18n";

const title: LocalizedText = {
  en: "Beware of gem generator scams",
  he: "היזהרו מסקאמים של מחוללי ג'מס",
};

const body: LocalizedText = {
  en: "There is NO real “gem generator.” Any site or app promising free gems in exchange for your login, account name, or a survey is a scam designed to steal your account or install malware. Every method on this page happens safely inside the official game.",
  he: "אין שום “מחולל ג'מס” אמיתי. כל אתר או אפליקציה שמבטיחים ג'מס חינם בתמורה לפרטי ההתחברות, שם החשבון או מילוי סקר — הם סקאם שנועד לגנוב את החשבון או להתקין נוזקה. כל שיטה בעמוד הזה מתבצעת בבטחה בתוך המשחק הרשמי.",
};

export default function ScamWarning({ locale }: { locale: Locale }) {
  return (
    <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-5">
      <div className="flex items-start gap-3">
        <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-red-300" aria-hidden />
        <div>
          <h3 className="mb-1 font-bold text-red-200">{localize(title, locale)}</h3>
          <p className="text-sm leading-relaxed text-red-100/90">
            {localize(body, locale)}
          </p>
        </div>
      </div>
    </div>
  );
}
