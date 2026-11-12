# GROUP 4 DIGITAL MUSEUM · Updated Canva edition (November 12, 2026)

Interactive Next.js/TypeScript site inspired by the ten-page Group 4 Canva PDF. Includes **44 clickable exhibits**: Past (15), Present (14), Future (15), with three categories per era. Future exhibits are forecasts/scenarios, not facts. Reuses embedded Canva images and new cover.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production check: `npm run build`.

## Vercel

Push contents of `digital-museum-nextjs/` to the root of your GitHub repo (or set the Vercel Root Directory to `digital-museum-nextjs`). Select **Next.js** framework preset and deploy. No environment variables needed.

## Notes

- Source: supplied Canva PDF, 10 pages; image assets converted to local WebP for performance.
- Hover animations, scroll motion, mobile menu, era/category filters and full exhibit detail routes.
- Text condensed for readability; page visual design adapted to responsive cards rather than a pixel-perfect PDF reproduction.
- Some historical and future claims originate in the student Canva presentation and were not independently fact-checked.
