# Portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, and next-intl. Supports English, French, and Arabic (with RTL).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) (i18n: en, fr, ar)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Features

- Internationalization with 3 locales (en, fr, ar)
- RTL support for Arabic (`dir="rtl"`)
- Dark/light theme
- Responsive design
- Optimized images and static generation

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Environment Variables

See [.env.example](.env.example) for available variables:

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Base URL for site metadata (defaults to `https://your-domain.com`) |

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/). Routes are statically generated for `/en`, `/fr`, and `/ar`.

## License

Private project.
