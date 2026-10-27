# Website change log

This document tracks changes to Majid Babaei’s academic portfolio, particularly updates driven by the LaTeX CV. Entries describe what changed, where it changed, how it was checked, and whether it was published.

## CV update workflow

The authoritative source for academic facts is `docs/02_Curriculum_Vitae.tex`. The website is maintained manually; editing the CV does not automatically update the HTML, project data, publication data, or downloadable PDF.

When asked to update the website from the CV:

1. Read the latest CV and the most recent completed CV synchronization entry below. Compare the CV with its version at the last synchronization commit, when available. For the initial baseline, use the initial website commit once it has been made. Also compare the actual website content; a changed file hash alone does not identify the content changes.
2. Update the affected website content using the mapping below. Preserve distinctions between published, accepted, to-appear, submitted, and under-review work. Do not infer acceptance, awards, appointments, or completed funding from a submission or proposal.
3. Recompile the downloadable CV twice, then check the PDF. If project counts change, review the interactive map layout and expected counts in `scripts/check.mjs`.
4. Run `node scripts/check.mjs`. Review the affected page sections and interactions in a browser when available; record any verification that could not be completed.
5. Add a dated entry at the top of the history. Record concrete before/after changes, affected files, the new CV SHA-256, validation results, and any omissions or unresolved discrepancies. Record publication status separately from local completion.
6. Commit the CV, website changes, PDF, and changelog together when committing is part of the task. Git history preserves the exact source differences; this document explains their effect on the website. Do not claim deployment without a verified deployment result.

Get the CV fingerprint in PowerShell:

```powershell
Get-FileHash docs/02_Curriculum_Vitae.tex -Algorithm SHA256
```

### Content mapping

| CV content | Website location |
| --- | --- |
| Research profile and contact information | `index.html`: hero, research agenda, contact |
| Research software and artifacts | `assets/main.js`: `projects` array |
| Research map summaries and repository links | `assets/research-map.js`, which reads `projects` from `assets/main.js` |
| Published and accepted publications | `assets/main.js`: `published` array |
| Submitted and under-review manuscripts | `assets/main.js`: `submitted` array |
| Publication links, abstract summaries, citation fields, and provenance | `assets/publication-data.js`, keyed by publication title |
| Teaching and supervision | `index.html`: teaching and mentorship sections |
| Appointments, education, industry, and service | `index.html`: background and service sections |
| Downloadable CV | `assets/02_Curriculum_Vitae.pdf`, compiled from the LaTeX source |
| Repository inventory | `assets/repositories.json`, refreshed separately from GitHub with `node scripts/refresh-repositories.mjs` |
| Counts and maintenance notes | `scripts/check.mjs` and `README.md` |

The website is a curated portfolio, not a verbatim CV. Record deliberate content omissions when they affect a requested update. Repository refreshes are independent of CV synchronization and should be identified as such.

## History

### 2026-10-27 ? Feature Safe Coordination of Untrusted AI Agents

- Added the project to the curated Agents grid and interactive research map (11 ? 12 projects), with a compact map label, related agent projects, and a repository detail link. Listed the manuscript separately as Submitted ? IEEE TSE (seven ? eight submitted/under-review entries), with an unpublished BibTeX citation; no acceptance or complete machine-verification claim is made.
- Enabled code/artifact links for submitted manuscripts, so their repositories can be reached directly from publication details. Updated the publication provenance note and README counts.
- Diagnosis: live automatic repository discovery was already working, but it does not populate curated research or manuscript metadata. The checked-in preview snapshot still used the earlier repository name, verified-generative-coordination; refreshed it to coordination-of-untrusted-ai-agents and its current Python language. Inventory remains 84 repositories. Preserved automatic duplicate exclusion for the newly curated project.
- Sources: the author's explicit 2026-10-27 TSE submission confirmation and the [repository README](https://github.com/ai4se4ai-lab/coordination-of-untrusted-ai-agents), which identifies the title and M. Babaei as author. This is a targeted author-confirmed addition, not a full CV synchronization. The current CV does not yet include this project; LaTeX and downloadable PDF are unchanged.
- CV SHA-256 (unchanged): 79869A0EE423C8477E0F44E7D5D989E9E0D7BA7E912E6D6B5BA5BB5135CCFCCD. Previous baseline: 2026-10-26 tracking entry, present in initial commit b66a7e9.
- Files: assets/main.js, assets/publication-data.js, assets/research-layout.js, assets/research-map.js, assets/repositories.json, index.html, scripts/check.mjs, README.md, CHANGELOG.md.
- Validation: live repository metadata and deployed inventory checked; node scripts/check.mjs passed, including 12 map nodes, narrow-layout separation, project filters, the new map's status/link, submitted citation/status and artifact link, automatic duplicate exclusion, and existing publication/search/theme/cursor checks. git diff --check passed. Browser visual verification was not performed.
- Delivery: local implementation and validation complete; deployment pending.

### 2026-10-27 — Automatic repository discovery and Pages redeployment

- Added hourly Pages runs (minute 17 UTC), plus an optional `repositories-updated` dispatch trigger. Every deployment refreshes the public GitHub inventory and validates the site before publishing. API/check failures stop publication; the deployed snapshot is an artifact, without automated commits.
- Added original public repositories to the project grid under All work and More repositories, using GitHub descriptions and languages. Excluded forks, the website repository, and duplicates of featured research; labeled archived repositories. Preserved the selected filter after asynchronous loading and escaped repository content.
- Reviewed the research map: it intentionally keeps the 11 curated CV-based projects and existing placements. Automatically discovered repositories have no inferred research classification or publication status. Forks remain labeled in the searchable directory.
- Refreshed the local snapshot from 83 to 84 public repositories and sorted it by name. Made repository search validation depend on actual snapshot content so future additions do not break deployment.
- Files: `.github/workflows/pages.yml`, `scripts/refresh-repositories.mjs`, `scripts/check.mjs`, `assets/main.js`, `assets/repositories.json`, `index.html`, `README.md`, `CHANGELOG.md`.
- Validation: live public API refresh and `node scripts/check.mjs` passed, including automatic card discovery, duplicate/fork exclusion, filter retention, escaping, all 11 research nodes, publication interactions, repository search, themes, and cursor behavior. Browser visual verification was not performed. No CV synchronization was needed.
- Delivery: committed and pushed to `main` as `7c3041a`; [Pages deployment 40436691625](https://github.com/ai4se4ai-lab/ai4se4ai-lab.github.io/actions/runs/40436691625) completed successfully. Verified HTTP 200 at https://ai4se4ai-lab.github.io/, the new project filter and integration script, and the deployed 2026-10-27 snapshot with 84 repositories. This delivery record is a subsequent documentation update.

### 2026-10-26 — Smaller, softer background pattern

- Reduced the geometric repeat from 180px to 64px on desktop and from 148px to 48px on mobile, preserving its proportions.
- Reduced static line opacity by about 60% and softened pointer-driven coloring across light, dark, teaching, and contact backgrounds.
- Files: `assets/cursor-magic.css`, `CHANGELOG.md`.
- Validation: existing programmatic checks passed. Browser visual verification was not performed.
- Delivery: local working-tree changes; no deployment performed.

### 2026-10-26 — Reference geometric pattern replaces circular cursor glow

- Replaced the dot/grid spotlight with the supplied reference's repeating petal/hexagon motif. Extracted its seamless 101 × 58 repeat into a local SVG stencil, with source attribution in the README.
- Made the entire pattern visible at rest. Applied the same geometric stencil to cursor-driven gold/teal/violet coloring, so only the pattern lines change color; removed the free-standing circular gradient shape.
- Retained separate light/dark palettes and a dark-surface teaching treatment. Touch-only and reduced-motion visitors retain the static geometric background.
- Files: `assets/geometric-pattern.svg`, `assets/cursor-magic.css`, `assets/cursor-magic.js`, `scripts/check-cursor.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: complete programmatic suite passed, including the shared pattern stencil, always-visible base, local self-contained SVG, motion fallback, theme definitions, pointer coordinates, and cleanup. Browser visual verification was not performed for this update.
- Delivery: local working-tree changes; no deployment performed. No CV synchronization was needed.

### 2026-10-26 — Cursor-reactive background for light and dark themes

- Added a layered cyan/violet spotlight and a locally revealed dot/grid pattern, inspired by the supplied Cursor Magic example. Applied it to the hero, research, projects, publications, teaching, background, and contact sections.
- Tuned light and dark palettes separately and retained a dedicated dark-surface palette for teaching. Theme changes update the effect through CSS variables without reinitializing the animation.
- Kept all decorative layers behind content, excluded from accessibility, and unable to intercept pointer events. Preserved the native cursor.
- Added time-based pointer smoothing with one animation frame at a time; processing stops after settling. Hide and cancel tracking on scroll, pointer exit, window blur, hidden-page state, or motion/pointer preference changes. Disable tracking on touch-only devices and for reduced motion.
- Files: `assets/cursor-magic.js`, `assets/cursor-magic.css`, `index.html`, `scripts/check-cursor.mjs`, `scripts/check.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: JavaScript syntax and the complete programmatic suite passed, including cursor layer hierarchy, coordinates, frame coalescing and settling, section changes, cleanup, reduced-motion/touch guards, and theme palette definitions. Browser visual verification was not performed for this update.
- Delivery: local working-tree changes; no deployment performed. No CV synchronization was needed.

### 2026-10-26 — Research map organized by AI/software proximity

- Replaced the alternating project rows with a spatial research constellation. AI-focused systems and experiment infrastructure sit toward AI; SkillSpec, AgentM2M, TAAF, and SIKG bridge the worlds; technical-debt management, robustness, regression testing, and replay sit toward software engineering.
- Added project-name-based placement metadata with a reason for each position. These are qualitative editorial groupings, not empirical scores; the project grid order and academic claims remain unchanged.
- Reduced connection clutter: AI-leaning and software-leaning projects connect to their primary world, while bridging projects connect to both. Added a cyan-to-violet spectrum, tinted project nodes, moving evidence signals, and planet glows.
- Hover/focus emphasizes the selected project's paths, outlines related research, and updates the map caption. Project detail panels explain how each work connects AI and software engineering.
- Files: `assets/research-layout.js`, `assets/research-map.js`, `assets/style.css`, `index.html`, `scripts/check.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: JavaScript syntax checks and the complete programmatic suite passed, including layout coverage, related-project references, node separation at narrow dimensions, AI-to-software ordering, highlight behavior, placement descriptions, and existing project/map/citation/theme interactions. Browser visual verification was not performed for this update.
- Delivery: local working-tree changes; no deployment performed. No CV synchronization was needed.

### 2026-10-26 — Expandable publications and BibTeX citations

- Replaced publication rows that navigated away with native expandable entries. Added keyboard-accessible Abstract/BibTeX tabs to the 16 published/accepted entries and a BibTeX-only view for the seven submitted/under-review manuscripts.
- Added citation copying with a blocked-clipboard fallback, selectable citation text, and downloadable `.bib` files.
- Separated publisher links, author manuscripts/preprints, and code artifacts. Verified publisher links for 14 published entries using CV DOIs, Crossref records, publisher pages, or the author website. No publisher link is claimed for SkillSpec or accepted RapidPay, whose final publication details could not be verified.
- Added nine explicitly labeled, source-based abstract summaries. Original abstract text has not been supplied locally. Seven entries have no verified abstract content and show an explicit availability message. These are SkillSpec, RapidPay, Communication Semantics, ra4xstate, MRegTest (tool paper), MReplayer (tool paper), and RoboSoccer.
- Added verified author-manuscript/preprint links for RATEN, TAAF, and the ICPE graph-neural-network paper. No public preprint was verified for the seven submitted/under-review manuscripts; their metadata supports adding one when available. Code repositories are not presented as preprints.
- Preserved academic statuses from the CV. Generated manuscript citations as `@unpublished`, with target venue and submission status in a note. Omitted unverified publication years, page ranges, and identifiers. Citation titles and author initials follow the CV; these are maintained citations rather than verbatim publisher exports.
- Files: `index.html`, `assets/main.js`, `assets/publication-data.js`, `assets/style.css`, `scripts/check.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: JavaScript syntax and programmatic checks passed, including disclosure/tab markup, citation metadata, separation of submitted work, tab selection/focus, copying, and blocked-clipboard fallback. Browser visual verification was not completed because the preview window could not be reliably targeted.
- Delivery: local working-tree changes; no deployment performed. No CV synchronization or PDF regeneration was needed.

### 2026-10-26 — Tracking baseline established

- Added this change log and the CV synchronization workflow, linked from the README.
- Added repository maintenance instructions so future website updates include a changelog entry.
- Recorded the current CV SHA-256: `79869A0EE423C8477E0F44E7D5D989E9E0D7BA7E912E6D6B5BA5BB5135CCFCCD`.
- This fingerprint identifies the source present when tracking began. This documentation update did not perform a new CV-to-website content reconciliation.
- Files: `CHANGELOG.md`, `AGENTS.md`, `README.md`.
- Validation: documentation links and source fingerprint checked. No website behavior changed.
- Delivery: local working-tree changes; no deployment performed as part of this update. A baseline commit has not yet been created in this working session.

### 2026-10-26 — Project filtering and visibility corrected

- Separated project category attributes (`data-project-category`) from appearance attributes (`data-theme`). Previously, clicks bubbled to the page’s theme attribute and cleared the project grid.
- Kept all 11 featured research projects visible by default and made the public repository directory permanently visible, removing the expansion requirement.
- Added regression checks for filter clicks, event bubbling, category links, and directory visibility.
- Files: `index.html`, `assets/main.js`, `scripts/check.mjs`.
- Validation: programmatic checks and JavaScript syntax checks passed.
- Delivery: local implementation; deployment not verified.

### 2026-10-26 — Appearance controls and interactive research map

- Added light/dark appearance with system preference detection and saved browser preference.
- Replaced the original orbit illustration with AI and software engineering worlds connected through 11 research components.
- Added hover/focus summaries, clickable detail panels, repository links, Escape/close behavior, and animation pause/resume with reduced-motion support.
- Files: `index.html`, `assets/style.css`, `assets/theme.js`, `assets/research-map.js`, `scripts/check.mjs`, `README.md`.
- Validation: programmatic interaction checks passed; dark-theme rendering inspected in Chrome. Full browser interaction and mobile visual checks were not completed.
- Delivery: local implementation; deployment not verified.

### 2026-10-26 — Initial academic portfolio

- Created the static GitHub Pages portfolio using the supplied LaTeX CV and the public GitHub repository inventory.
- Added research, projects, publications, teaching, mentorship, background, service, and contact sections.
- Included 11 selected research artifacts, 16 published/accepted publication entries, and seven submitted/under-review manuscripts.
- Added a searchable snapshot of 83 public repositories with explicit fork labels and a refresh script.
- Compiled and visually inspected the six-page downloadable CV.
- Added local preview, programmatic checks, metadata, sitemap, and a GitHub Pages deployment workflow.
- Main files: `index.html`, `assets/main.js`, `assets/style.css`, `assets/repositories.json`, `assets/02_Curriculum_Vitae.pdf`, `scripts/`, `.github/workflows/pages.yml`, `README.md`.
- Validation: local URLs returned HTTP 200; links, filters, repository search, and content escaping checks passed. Initial website visual browser validation was unavailable.
- Delivery: local implementation; deployment not verified.

## Template for the next update

Copy this template into the top of **History** and replace every placeholder. Keep older entries intact. Use the actual update date, not a date inferred from the CV filename.

```markdown
### YYYY-MM-DD — CV synchronization: short description

- Source: `docs/02_Curriculum_Vitae.tex`.
- Previous baseline: entry date/title and Git commit, if available.
- CV SHA-256: current fingerprint.
- Changes:
  - Specific item: previous value/status → new value/status.
  - Added or removed item and the website section affected.
- Files: changed website files and regenerated PDF, if applicable.
- Deliberate omissions or unresolved differences: details, or none.
- Validation: checks run, results, browser/PDF review, and any limits.
- Delivery: local only, committed, pushed, or verified deployed; include commit/URL when known.
```
