# Brahim — Portfolio

A single-page personal portfolio for **Brahim**, a junior full stack developer and Information Systems Development student at SupNum, Mauritania.

Built with Next.js App Router, React, Tailwind CSS, next-intl, and next-themes.

## Features

- One-page layout with sticky navigation: Hero, About, Skills, Services, Contact, and Footer
- English (`/en`), French (`/fr`), and Arabic (`/ar`) with full RTL support for Arabic
- System-aware light/dark theme with a persisted user choice and no flash on load
- Responsive from 320px up, with an accessible mobile menu (focus trap, Escape, scroll lock)
- Localized metadata, canonical URLs, `hreflang` alternates, Open Graph and Twitter images
- Generated `sitemap.xml`, `robots.txt`, favicon, and Person JSON-LD
- Localized 404 page using Next.js `global-not-found`
- No projects section, CV download, or contact form — contact links only

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for localization
- [next-themes](https://github.com/pacocoursey/next-themes) for the theme toggle

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to the negotiated locale, English by default.

### Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Create a production build       |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |
| `npx tsc --noEmit` | Type-check the project       |

## Editing content

All copy lives in the translation files, not in JSX:

- `messages/en.json` — English (source of truth)
- `messages/fr.json` — French
- `messages/ar.json` — Arabic

Sections are grouped by namespace (`Hero`, `About`, `Skills`, `Services`, `Contact`, `Footer`, `NotFound`, and so on). Keep the same keys in every file.

The lists of skill groups, services, contact channels, and focus areas live in `config/content.ts`. Add or remove an item there, then add the matching translation keys.

### Contact links

Edit `config/site.ts`:

```ts
export const siteConfig = {
  name: "Brahim",
  // ...
  email: "you@example.com",
  links: {
    email: "mailto:you@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    whatsapp: "https://wa.me/222XXXXXXXX",
  },
} as const;
```

The current values are placeholders and must be replaced before publishing. `config/content.ts` reads these values and renders the Contact section and footer automatically.

### Adding a language

1. Add the locale code to `config/locales.ts` (label, short label, direction, OG locale).
2. Add it to `routing.locales` in `i18n/routing.ts`.
3. Create `messages/<locale>.json`.
4. Add the import and loader entry in `i18n/request.ts`.
5. Add the fonts/overrides in `app/globals.css` if the script needs a different typeface.

The language switcher and `hreflang` metadata are generated from the locale list.

## Theme and design tokens

The palette is defined once as CSS custom properties in `app/globals.css`:

| Token        | Light     | Dark      |
| ------------ | --------- | --------- |
| Background   | `#F2F2F2` | `#2A1F1C` |
| Foreground   | `#593F39` | `#F2F2F2` |
| Primary      | `#3F76A6` | `#C4DDF2` |
| Accent       | `#C4DDF2` | `#394E5C` |
| Secondary    | `#8C5F4F` | `#D3B5AA` |

`config/theme.ts` mirrors the two values needed outside CSS (browser theme color and the generated social images). Keep it in sync when changing the palette.

## Environment variables

The canonical site URL is read from `NEXT_PUBLIC_SITE_URL` and falls back to `https://your-domain.com`.

Create `.env.local` for development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set it to the final public origin (for example `https://brahim.dev`). It is used by metadata, canonical URLs, `hreflang`, Open Graph URLs, `sitemap.xml`, and `robots.txt`.

## Deployment

The app is Vercel-ready with no extra configuration:

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` with the production URL.
4. Deploy.

Vercel detects Next.js automatically. For another host, run `npm run build` and `npm run start` on a Node.js server.

## Notes

- `proxy.ts` is the Next.js 16 replacement for `middleware.ts`; it handles locale routing via next-intl.
- `app/[locale]/layout.tsx` is the root layout because the locale is a top-level dynamic segment. The global 404 lives in `app/global-not-found.tsx`, which Next.js renders outside that layout.
- Footer year computation is cached with `"use cache"` because Cache Components disallows uncached date reads during prerendering.
- Social images are generated at request/build time by `app/[locale]/opengraph-image.tsx` and `app/[locale]/twitter-image.tsx`.
