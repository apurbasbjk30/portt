# Apurba Das — Research Portfolio

A responsive, single-page portfolio built with React, Vite, Framer Motion, and Lucide React. The visual system uses warm ivory, blush pink, beige, muted rose, and cocoa typography.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. **Portrait:** Replace the illustrated placeholder in `src/App.jsx` (`Portrait()` component) with an `<img src="/assets/profile.jpg" ... />`. Put your real, optimized portrait at `public/assets/profile.jpg`. The current avatar is intentionally an illustration, not a claim to be your real likeness.
2. **CV:** Put your current PDF at `public/assets/resume.pdf`. The CV buttons point to `/assets/resume.pdf`; until you add it, the download will not work.
3. **Research links:** Add verified public paper, DOI, repository, and presentation URLs in the data objects at the top of `src/App.jsx`. The page intentionally does not invent these URLs.
4. **Statuses:** Confirm all manuscript and conference statuses before publishing. The supplied content is represented as provided and should be updated if the status changes.
5. **Profile details:** Edit the `profile`, `research`, `projects`, `publications`, `experience`, `achievements`, `leadership`, and `skills` arrays in `src/App.jsx`. The page sections render from these objects.
6. **Social profiles:** Change `profile.github`, `profile.linkedin`, and `profile.email` if needed.

## Notes

- Navigation, mobile menu, project detail toggles, research accordions, publication summaries, email links, and supplied external links are functional.
- The contact section uses a real `mailto:` link rather than a fake contact form.
- Motion respects `prefers-reduced-motion`.
- Research-paper and project diagrams are original CSS illustrations/placeholders, not fabricated screenshots or paper figures.
- Verify external destinations and update manuscript statuses before deployment.
