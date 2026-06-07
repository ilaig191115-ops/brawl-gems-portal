import type { LocalizedText } from "@/lib/i18n";

export type CategoryId =
  | "brawl-pass"
  | "daily-quests"
  | "mastery"
  | "challenges"
  | "trophy-road";

export interface Category {
  id: CategoryId;
  icon: string; // emoji — avoids using copyrighted game art
  accent: string; // tailwind gradient classes
  title: LocalizedText;
  summary: LocalizedText;
}

export const categories: Category[] = [
  {
    id: "brawl-pass",
    icon: "🏆",
    accent: "from-brawl-purple to-brawl-violet",
    title: { en: "Brawl Pass", he: "Brawl Pass" },
    summary: {
      en: "The single biggest source of free gems. The free track hands out gems as you progress each season.",
      he: "המקור הגדול ביותר לג'מס בחינם. המסלול החינמי מחלק ג'מס ככל שאתה מתקדם בכל סיזן.",
    },
  },
  {
    id: "daily-quests",
    icon: "📅",
    accent: "from-brawl-blue to-brawl-violet",
    title: { en: "Daily & Weekly Quests", he: "מטרות יומיות ושבועיות" },
    summary: {
      en: "Small refreshing missions that feed your Pass progress fast — and sometimes drop gems directly.",
      he: "משימות קטנות שמתחדשות ומזרזות את התקדמות ה-Pass — ולפעמים נותנות ג'מס ישירות.",
    },
  },
  {
    id: "mastery",
    icon: "⭐",
    accent: "from-brawl-gold to-brawl-yellow",
    title: { en: "Mastery", he: "Mastery (שליטה)" },
    summary: {
      en: "Play a brawler a lot and climb its Mastery track for gems, credits and power points.",
      he: "שחק הרבה עם ראולר וטפס במסלול ה-Mastery שלו עבור ג'מס, קרדיטים וכוח-נקודות.",
    },
  },
  {
    id: "challenges",
    icon: "🎯",
    accent: "from-brawl-violet to-brawl-blue",
    title: { en: "Challenges & Events", he: "אתגרים ואירועים" },
    summary: {
      en: "Time-limited special challenges and weekend events with generous rewards — including gems.",
      he: "אתגרים מיוחדים ואירועי סוף שבוע מוגבלים בזמן עם פרסים נדיבים — כולל ג'מס.",
    },
  },
  {
    id: "trophy-road",
    icon: "🥇",
    accent: "from-brawl-yellow to-brawl-gold",
    title: { en: "Trophy Road", he: "Trophy Road" },
    summary: {
      en: "The main trophy track — a big one-time source of gems, boxes and brawlers as you climb.",
      he: "מסלול הטרופי הראשי — מקור חד-פעמי גדול לג'מס, תיבות וראולרים ככל שאתה עולה.",
    },
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
