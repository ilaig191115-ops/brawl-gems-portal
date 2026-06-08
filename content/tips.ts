import type { LocalizedText } from "@/lib/i18n";
import type { CategoryId } from "@/content/categories";

export interface Tip {
  id: string;
  category: CategoryId;
  icon: string;
  title: LocalizedText;
  body: LocalizedText;
  bullets: LocalizedText[];
}

export const tips: Tip[] = [
  // ---------- Brawl Pass ----------
  {
    id: "pass-free-track",
    category: "brawl-pass",
    icon: "🎟️",
    title: {
      en: "Finish the free Brawl Pass track every season",
      he: "סיים את המסלול החינמי של ה-Brawl Pass בכל סיזן",
    },
    body: {
      en: "The free track of the Brawl Pass gives out gems, coins and credits along the way — even if you never pay a cent. Tiers reset each season, so the goal is to reach the end before the season closes.",
      he: "המסלול החינמי של ה-Brawl Pass מחלק ג'מס, מטבעות וקרדיטים לאורך הדרך — גם בלי לשלם אגורה. ה-tier-ים מתאפסים בכל סיזן, אז המטרה היא להגיע לסוף לפני שהסיזן נסגר.",
    },
    bullets: [
      {
        en: "Progress is driven by tokens earned from every match you play.",
        he: "ההתקדמות מונעת על ידי טוקנים שמרוויחים מכל משחק.",
      },
      {
        en: "Don't leave gems sitting in the track — unfinished tiers are lost at season end.",
        he: "אל תשאיר ג'מס במסלול — tier-ים שלא הושלמו אובדים בסוף הסיזן.",
      },
    ],
  },
  {
    id: "pass-save-gems",
    category: "brawl-pass",
    icon: "💎",
    title: {
      en: "Spend your gems on the next Brawl Pass",
      he: "תשקיע את הג'מס שלך ב-Brawl Pass הבא",
    },
    body: {
      en: "Buying the Brawl Pass with gems you saved is the best value in the game — it pays back more gems than it costs over the season, so it effectively becomes self-funding.",
      he: "קניית ה-Brawl Pass עם ג'מס שחסכת היא העסקה המשתלמת ביותר במשחק — לאורך הסיזן הוא מחזיר יותר ג'מס ממה שהוא עלה, כך שהוא ממן את עצמו.",
    },
    bullets: [
      {
        en: "Better value than spending gems on random box / skin offers.",
        he: "משתלם יותר מבזבוז ג'מס על מבצעי תיבות / סקינים אקראיים.",
      },
    ],
  },

  // ---------- Daily & Weekly Quests ----------
  {
    id: "daily-login",
    category: "daily-quests",
    icon: "⏰",
    title: {
      en: "Log in daily to claim your quests",
      he: "היכנס כל יום כדי לקטוף את המטרות",
    },
    body: {
      en: "Daily quests refresh every day with small tasks (deal X damage, win Y matches). They mostly give tokens and XP that speed up your Pass, and sometimes gems directly. Even five minutes a day adds up fast.",
      he: "מטרות יומיות מתחדשות כל יום עם משימות קטנות (גרום X נזק, נצח Y משחקים). הן נותנות בעיקר טוקנים ו-XP שמזרזים את ה-Pass, ולפעמים ג'מס ישירות. אפילו חמש דקות ביום מצטברות מהר.",
    },
    bullets: [
      {
        en: "Knock out the easy quests first to bank tokens quickly.",
        he: "סיים קודם את המשימות הקלות כדי לצבור טוקנים מהר.",
      },
      {
        en: "Weekly quests give bigger rewards — don't let them expire.",
        he: "מטרות שבועיות נותנות פרסים גדולים יותר — אל תיתן להן לפוג.",
      },
    ],
  },

  // ---------- Mastery ----------
  {
    id: "mastery-focus",
    category: "mastery",
    icon: "🎮",
    title: {
      en: "Grind Mastery on brawlers you enjoy",
      he: "צבור Mastery עם ראולרים שאתה אוהב",
    },
    body: {
      en: "Every brawler has a Mastery track that you fill by playing it. The track rewards gems, credits and power points. Focus on a few brawlers you already like so the grind feels natural.",
      he: "לכל ראולר יש מסלול Mastery שאתה ממלא על ידי משחק בו. המסלול מעניק ג'מס, קרדיטים וכוח-נקודות. התרכז בכמה ראולרים שאתה כבר אוהב כדי שהגריינד יהיה טבעי.",
    },
    bullets: [
      {
        en: "Winning gives more Mastery progress than losing — pick brawlers you perform well with.",
        he: "ניצחון נותן יותר התקדמות Mastery מהפסד — בחר ראולרים שאתה טוב איתם.",
      },
    ],
  },

  // ---------- Challenges & Events ----------
  {
    id: "challenges-special",
    category: "challenges",
    icon: "🔥",
    title: {
      en: "Jump into special challenges while they're live",
      he: "היכנס לאתגרים מיוחדים בזמן שהם פעילים",
    },
    body: {
      en: "Special challenges (often tied to updates or collabs) can reward big prizes including gems. They are strictly time-limited, so enter as soon as they go live and try to complete every stage.",
      he: "אתגרים מיוחדים (לרוב קשורים לעדכונים או קולאבים) יכולים להעניק פרסים גדולים כולל ג'מס. הם מוגבלים בזמן בקפדנות, אז היכנס ברגע שהם נפתחים ונסה לסיים כל שלב.",
    },
    bullets: [
      {
        en: "Check the in-game events tab regularly so you never miss one.",
        he: "בדוק את לשונית האירועים במשחק באופן קבוע כדי לא לפספס.",
      },
      {
        en: "Mega and weekend events usually come with the most generous rewards.",
        he: "אירועי Mega וסוף שבוע מגיעים בדרך כלל עם הפרסים הנדיבים ביותר.",
      },
    ],
  },

  // ---------- Trophy Road ----------
  {
    id: "trophy-climb",
    category: "trophy-road",
    icon: "📈",
    title: {
      en: "Climb Trophy Road early for a gem boost",
      he: "טפס ב-Trophy Road מוקדם לדחיפת ג'מס",
    },
    body: {
      en: "Trophy Road is the main progression track. As your total trophies rise you unlock boxes, brawlers and gems. It is a one-time source, but a large one early on — push it while the milestones are close together.",
      he: "Trophy Road הוא מסלול ההתקדמות הראשי. ככל שסך הטרופי שלך עולה אתה פותח תיבות, ראולרים וג'מס. זהו מקור חד-פעמי, אבל גדול בהתחלה — דחוף אותו בזמן שאבני הדרך קרובות זו לזו.",
    },
    bullets: [
      {
        en: "Spread trophies across many brawlers — pushing one only goes so far.",
        he: "פזר טרופי על ראולרים רבים — דחיפת ראולר אחד מוגבלת.",
      },
    ],
  },
];

export function tipsForCategory(category: CategoryId): Tip[] {
  return tips.filter((tip) => tip.category === category);
}

export function tipCount(category: CategoryId): number {
  return tipsForCategory(category).length;
}

// Pick a "tip of the day": deterministic per calendar day, so every visitor
// sees the same tip on a given date and it rotates once each day.
export function dailyTip(date: Date = new Date()): Tip {
  const dayNumber = Math.floor(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) /
      86_400_000,
  );
  return tips[dayNumber % tips.length];
}
