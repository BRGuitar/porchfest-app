# CLAUDE.md

Website for **BG Porchfest**, a free, one-day live music festival held on neighborhood porches around Eberly Ave in Bowling Green, Ohio. The site is maintained about once or twice a year, mostly to roll it over to the next festival (new date, lineup, map, poster, sponsors). The audience is festival-goers, many of them on phones the day of the event.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.9 (`strict`, but `noImplicitAny: false`), Node >= 20.9
- Tailwind CSS 4, configured in CSS (`@theme` in `src/app/globals.css`; there is no `tailwind.config`). Custom colors: `dark-blue`, `base-blue`, `light-blue`, `base-orange`
- Neon Postgres via `@neondatabase/serverless` (`sql` tagged template in `src/lib/db.ts`, which returns a rows array), plus Vercel Analytics, hosted on Vercel
- Fonts from `next/font/google`: Bebas Neue (body default), Lilita One, Montserrat

## Commands

```bash
npm run dev          # local dev server (needs .env.local with DATABASE_URL or POSTGRES_URL)
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint flat config (eslint.config.mjs)
npm run format:fix   # prettier (single quotes, JSX single quotes, tailwind class sorting)
```

There are no tests. To verify a change, run typecheck, lint and build, then `npm start` and load the pages. Admin forms write to the **live production database** (local dev uses the same DB), so don't submit them while testing unless the user asks.

Dependabot (`.github/dependabot.yml`) opens grouped monthly dependency PRs.

## Layout

- `/` permanently redirects to `/home` (`next.config.mjs`).
- `src/app/home/*` is the public site: `page.tsx` (landing), `schedule/`, `map/`, `about/` (band list), `about/[band]/` (band detail, looked up by `bands.pagelink`), `info/`.
- `src/app/home/layout.tsx` has the NavBar, sponsor tiles, and footer on every public page.
- `src/app/admin/*` holds the admin CRUD for the `schedule` and `bands` tables.
- `src/app/ui/*` has the shared components and form components (forms use inline `'use server'` actions).
- `src/lib/db.ts` holds the DB client (server-only). `src/lib/data.ts` has all DB reads and writes; reads call `connection()` so pages render dynamically. `src/lib/definitions.ts` has the `Band` and `Performance` types.
- `public/` holds static images: `bands/` (band photos referenced by `bands.imglink`), `Sponsors/`, `grid/` (home photo grid), plus the yearly poster and map.

## Data model (Postgres)

- `bands`: `id, name, imglink, pagelink, bio1, bio2`
- `schedule`: `id, band, starttime, endtime, location, pagelink`. `starttime`/`endtime` are `timestamp without time zone` holding Bowling Green wall-clock time. The driver parses them in the server's local zone and the UI formats them in that same zone, so the displayed time equals the stored value on any server.
- `schedule.band` is joined to `bands.name` **by string**, not by a foreign key. `schedule.pagelink` is a denormalized copy that `updateSchedulePageLinks` keeps in sync. Renaming a band can orphan its schedule rows.

## Yearly rollover checklist

Year- and date-specific content is **hardcoded in many places**. When updating for a new festival, grep for the old year and date:

- `src/app/ui/NavBar.tsx`: header date
- `src/app/home/schedule/page.tsx`, `map/page.tsx`, `about/page.tsx`: page titles and dates
- `src/app/ui/Banner.tsx`: tile labels and poster import
- `src/app/ui/SponsorTiles.tsx`: sponsor tiers and logos (hardcoded JSX plus the silver list)
- `public/`: poster, map, band photos
- DB: schedule and band rows via `/admin`

## Known issues / gotchas

- **`/admin` has no authentication.** `isLoggedIn` is hardcoded to `true`, and anyone who finds the URL can edit or delete the schedule and bands. Treat this as a priority fix.
- `Schedule.tsx` formats times with `toLocaleTimeString()` and strips `":00 PM"`, with "PM" hardcoded. Any AM time displays wrong.
- The viewport is forced to `width: 780, initialScale: 0.5` in `src/app/layout.tsx` instead of being truly responsive.
- Band photos in `public/bands` are multi-MB PNGs (`public/` is about 105MB). `next/image` optimizes what gets served, but prefer compressed JPG/WebP for new images.
- Tailwind v4 compatibility rules (border color, button cursor, white form fields) live in `globals.css` `@layer base`.
- Fonts are re-instantiated in many files rather than shared.

## Conventions

- Keep it simple. This is a small community site maintained by one developer, so avoid adding heavy infrastructure without a clear payoff.
- Match existing Prettier style (single quotes, 2 spaces, trailing commas es5). Run `npm run format:fix` after edits.
- Never commit `.env.local` or anything containing the Postgres credentials.
