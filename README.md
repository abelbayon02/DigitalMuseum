# Group 4 — Philippine Popular Culture Digital Museum

An interactive, responsive Next.js museum reconstructed from the supplied Canva PDF. Content and image assets originate from the group’s original 8-page presentation.

## Features
- Past, Present and Future routes
- 28 clickable exhibit detail pages grouped by theme
- Animated gallery cards, responsive galleries, page transitions and navigation
- Category filtering (Body & Self-Image, Space, Technology)
- Source Canva imagery reused in the galleries
- Accessible reduced-motion support

**Future section:** Placeholder only, because the PDF included a Future heading in its contents but no future exhibits. Replace with approved content later.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a new GitHub repository and commit these files.
2. At https://vercel.com/new, import the GitHub repository.
3. Choose the Next.js framework preset (auto-detected).
4. Click Deploy. No environment variables are required.
5. Configure a custom domain under Project → Settings → Domains if needed.

A real deployment requires authorization/access to your GitHub and Vercel accounts. No live site is deployed by this ZIP alone.

## Editing exhibits

Edit `data/exhibits.ts` to change exhibit labels, dates, body text, and image paths. All original images used on the site are located in `public/images`.

## Original source

`GROUP #4 DIGITAL MUSEUM.pdf` exported from Canva. This reproduction uses its thematic structure and exhibit content; styling was adapted for usable responsive layouts and navigation rather than replicating the long vertical PDF canvas pixel-for-pixel.
