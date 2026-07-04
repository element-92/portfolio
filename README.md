# Harshal Sharma — Portfolio

Personal portfolio site for Harshal Sharma, an Offensive Security Professional (ASM, VAPT, OSINT, Web/API/Mobile/Cloud/AI-LLM Penetration Testing).

Live: https://element-92.github.io/portfolio/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Motion (Framer Motion) for animation
- Vitest + Testing Library for smoke tests
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev        # local dev server
npm run typecheck   # tsc --noEmit
npm run lint        # oxlint
npm test             # vitest
npm run build        # production build to dist/
npm run preview      # preview the production build locally
```

All resume-derived content lives in `src/data/resume.ts` — update that file to change what's shown on the site.
