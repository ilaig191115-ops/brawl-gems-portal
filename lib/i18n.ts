// Lightweight i18n for a two-language site (English + Hebrew).
// No heavy i18n library needed — a typed dictionary + helper is plenty.

export const locales = ["en", "he"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}

// A localized string is just { en, he }.
export type LocalizedText = Record<Locale, string>;

export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text[defaultLocale];
}

// UI chrome strings (navigation, footer, hero, etc.)
const ui = {
  "site.name": {
    en: "Gem Guide for Brawl Stars",
    he: "מדריך הג'מס לברואל סטארס",
  },
  "site.tagline": {
    en: "Free, legit ways to earn gems — no scams, no cheats.",
    he: "דרכים חוקיות וחינמיות להשיג ג'מס — בלי סקאמים, בלי רמאות.",
  },
  "nav.home": { en: "Home", he: "בית" },
  "nav.tips": { en: "Tips", he: "טיפים" },
  "hero.title": {
    en: "Earn Brawl Stars Gems — the Legit Way",
    he: "להשיג ג'מס בברואל סטארס — בדרך החוקית",
  },
  "hero.subtitle": {
    en: "Everything that gives free gems inside the game, organized in one place. Updated for players worldwide.",
    he: "כל מה שנותן ג'מס בחינם בתוך המשחק, מסודר במקום אחד. עבור שחקנים מכל העולם.",
  },
  "hero.cta": { en: "Browse the tips", he: "לכל הטיפים" },
  "home.categoriesTitle": {
    en: "Where gems come from",
    he: "מאיפה מגיעים ג'מס",
  },
  "category.tipsCount": { en: "tips", he: "טיפים" },
  "category.viewTips": { en: "View tips", he: "צפה בטיפים" },
  "tips.backHome": { en: "← Back to home", he: "→ חזרה לדף הבית" },
  "footer.disclaimer": {
    en: "Unofficial fan-made site. Not affiliated with, endorsed, sponsored, or approved by Supercell. Brawl Stars is a trademark of Supercell.",
    he: "אתר אוהדים לא רשמי. לא מסונף, ממומן או מאושר על ידי Supercell. Brawl Stars הוא סימן מסחרי של Supercell.",
  },
  "footer.madeWith": { en: "Made for the community", he: "נבנה עבור הקהילה" },
  "lang.switch": { en: "עברית", he: "English" },
} satisfies Record<string, LocalizedText>;

export type UiKey = keyof typeof ui;

export function t(locale: Locale, key: UiKey): string {
  return localize(ui[key], locale);
}
