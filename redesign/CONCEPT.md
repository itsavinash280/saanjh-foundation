# Saanjh redesign: Care begins with us

## Analysis of the existing website

Source: https://saanjh.buzz/, retrieved 6 November 2026. The original HTML is saved in ../research/original.html.

The current website is a single static page, with cream, muted green and rust colours. It contains three intended focus areas, 17 named team members and portraits, two WhatsApp contacts and an email address. It explicitly says there have been no visits or completed projects yet.

The strengths are its honest language, clear values, named team and direct contacts. The main design opportunities are a shorter opening message, a more human first impression, less repetitive mission copy, a more compact team directory and a clearer volunteering path. Separate empty visits and impact sections can become one useful journey section.

## New concept

“Care begins with us.” A people-led foundation website with warm ivory surfaces, forest green, terracotta accents and locally bundled Manrope typography. Existing portraits supply the imagery; no fictional beneficiaries or activity photography is used.

Page structure:

1. **Hero:** short animated headline, real founder/team collage, primary Get involved action and story link.
2. **Our story:** what Saanjh stands for and why it exists.
3. **Our purpose:** everyday essentials, opportunities to grow and support with dignity. These remain intentions, not claims of delivered programmes.
4. **Our people:** all 17 existing members, all shown by default in a scrapbook photo album with role captions.
5. **Our journey:** a truthful beginning state with the intended next steps; replace with dated verified visits as they happen.
6. **Get involved:** select volunteering, sharing resources or partnership. The action opens the appropriate existing WhatsApp contact or email app. Nothing is submitted automatically.
7. **FAQs and footer:** practical answers and all original contact information.

## Motion and interactions

The official Magic UI registry component is installed at src/registry/magicui/text-animate.tsx and imported through the exact requested alias. Headlines use animation="blurInUp", by="character", once. Reduced-motion preference renders plain text. Team filtering, responsive navigation, FAQs and contribution selection use React state.

## REA usage and limits

The requested https://github.com/morluto/rea.git repository was cloned into ../research/rea for reference. REA is an analysis tool, not a web template. REA 6.8.0 was run with Node 24.22.1 against the original site's extracted inline JavaScript. Evidence: ../research/rea-analysis.json; extracted source: ../research/site-scripts/main.js.

Command: npx --yes --package=node@24.22.1 --package=rea-agents@6.8.0 rea analyze-javascript-application ../research/site-scripts --json

REA parsed one supplied script and reported zero static route patterns in that script. Source review shows mobile menu toggling, the current footer year and menu closure on navigation. This is bounded static analysis: third-party analytics scripts, network behaviour and server-side routes were not audited.

## Future content requirements

Before adding donation payments, publish verified legal/registration information, payment details and the required donation policies. Add impact numbers only when supported by records. Future visit stories need dates, locations, approved photographs and an account of what actually happened. No payment integration, invented impact figures or testimonials are included in this redesign.

## Implementation and verification

React + TypeScript + Vite, official Magic UI TextAnimate, Motion, Tailwind utilities and Phosphor icons. All 17 portraits are stored locally. Type checking and the production build pass.

The original saanjh.buzz deployment has not been changed. A private Sites project was registered, but source upload and deployment were blocked by automatic approval review because portraits and contacts would be exported to a new hosting destination. Explicit approval is required before that upload.

Browser checks: desktop and 390px mobile preview loaded successfully. All visible images loaded, no horizontal overflow at 390px, founder filtering returned 2 people, expansion returned 17, resource selection used the registrations WhatsApp number, partnership selection used the email address, FAQs expanded, and the mobile menu closed on navigation. An HMR-only duplicate React root warning was fixed by separating App.tsx from the entry point.

## Scrapbook update
User requested a scrapbook theme and removal of the Meet all 17 people control. All 17 portraits now render immediately without filters or expansion. Locally bundled Caveat handwriting, Polaroid frames, translucent tape, paper textures, handwritten captions, note cards and notebook sections establish the new theme. The original blurInUp text animation and contact actions remain.

