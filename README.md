# 💎 Gem Guide for Brawl Stars

A bilingual (English + Hebrew) informational portal with **legit, free ways to earn
gems** in Brawl Stars — Brawl Pass, daily quests, Mastery, challenges and Trophy Road.

> **Unofficial fan-made site.** Not affiliated with, endorsed, sponsored, or approved by
> Supercell. Brawl Stars is a trademark of Supercell. This site contains **no** cheats,
> hacks, or "gem generators" — only in-game, terms-of-service-friendly tips.

## Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling (original palette, no game assets)
- **lucide-react** icons + emoji
- Fully static (SSG) — deploys cleanly to **Vercel**

## Internationalization
- Locale-prefixed routes: `/en/...` and `/he/...`
- Hebrew renders **RTL**, English **LTR** (set via `dir` on `<html>`)
- `middleware.ts` redirects `/` to a locale based on `Accept-Language`
- Content lives as `{ en, he }` objects in `content/` — easy to edit and extend

## Develop
```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en or /he
```

## Build & deploy
```bash
npm run build    # static export-ready build
```
Push to a Git repo and import it on [vercel.com](https://vercel.com), or run `vercel`.

## Editing content
- `content/categories.ts` — the five gem-source categories
- `content/tips.ts` — the individual tips (title / body / bullets, per language)
- `lib/i18n.ts` — UI chrome strings + the `t()` helper

To add a language, extend the `locales` array and add the new key to every
`{ en, he }` object.
