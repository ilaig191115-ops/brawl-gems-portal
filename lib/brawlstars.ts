import "server-only";

// Server-only client for the official Brawl Stars API.
//
// IMPORTANT: the official token is IP-locked. Vercel's serverless IPs are
// dynamic, so we route through RoyaleAPI's Brawl Stars proxy (fixed IP).
// Whitelist the proxy IP `45.79.218.79` on your token at developer.brawlstars.com,
// and the same token works both locally and in production.
// NOTE: the Brawl Stars proxy host is `bsproxy.royaleapi.dev` — `proxy.royaleapi.dev`
// (no `bs`) is Clash Royale and would reject a Brawl Stars token as invalidScope.
const BASE = "https://bsproxy.royaleapi.dev/v1";

export class BrawlApiError extends Error {
  constructor(
    public kind: "not-found" | "access-denied" | "rate-limited" | "unavailable" | "unknown",
    message: string,
  ) {
    super(message);
    this.name = "BrawlApiError";
  }
}

// Tags look like "#2PP0L8J". Normalize to an URL-encoded form (# -> %23).
// The Brawl Stars alphabet has no O/B/I/S — players often type 0/8/1/5 instead.
export function normalizeTag(raw: string): string {
  const cleaned = raw
    .trim()
    .toUpperCase()
    .replace(/^#/, "")
    .replace(/O/g, "0")
    .replace(/[^0-9A-Z]/g, "");
  return cleaned;
}

async function bsFetch<T>(path: string): Promise<T> {
  const token = process.env.BRAWL_STARS_API_TOKEN;
  if (!token) {
    throw new BrawlApiError("unknown", "BRAWL_STARS_API_TOKEN is not set");
  }

  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    // Short cache to respect the API rate limit and speed up repeat lookups.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    switch (res.status) {
      case 404:
        throw new BrawlApiError("not-found", "Tag not found");
      case 403:
        throw new BrawlApiError(
          "access-denied",
          "Access denied — check the token and that the proxy IP is whitelisted",
        );
      case 429:
        throw new BrawlApiError("rate-limited", "Rate limited");
      case 503:
        throw new BrawlApiError("unavailable", "API under maintenance");
      default:
        throw new BrawlApiError("unknown", `Unexpected status ${res.status}`);
    }
  }

  return res.json() as Promise<T>;
}

// ---- Types (subset of the API response we use) ----

export interface PlayerBrawler {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  highestTrophies: number;
}

export interface Player {
  tag: string;
  name: string;
  nameColor?: string;
  icon: { id: number };
  trophies: number;
  highestTrophies: number;
  expLevel: number;
  "3vs3Victories": number;
  soloVictories: number;
  duoVictories: number;
  club?: { tag: string; name: string };
  brawlers: PlayerBrawler[];
}

export type ClubRole = "member" | "senior" | "vicePresident" | "president" | "notMember";
export type ClubType = "open" | "inviteOnly" | "closed";

export interface ClubMember {
  tag: string;
  name: string;
  nameColor?: string;
  role: ClubRole;
  trophies: number;
}

export interface Club {
  tag: string;
  name: string;
  description?: string;
  type: ClubType;
  badgeId: number;
  requiredTrophies: number;
  trophies: number;
  members: ClubMember[];
}

// ---- Public API ----

export function getPlayer(tag: string): Promise<Player> {
  return bsFetch<Player>(`/players/%23${normalizeTag(tag)}`);
}

export function getClub(tag: string): Promise<Club> {
  return bsFetch<Club>(`/clubs/%23${normalizeTag(tag)}`);
}
