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

### 2026-10-31 — LIFTDroid major revision at IEEE TSE

- Updated Understanding and detecting login flow errors in Android applications (LIFTDroid) from Submitted to Major revision at IEEE Transactions on Software Engineering, following the author's confirmation. Synchronized the CV, website manuscript entry, and unpublished BibTeX status/provenance. The paper remains in submitted/under-review/revision-requested work; publication and project counts are unchanged. No project data or research-map change was needed.
- Rebuilt the downloadable CV twice. PDF text extraction confirms Major revision; visual review of page three found no clipping, overlap, or pagination change (seven pages). No overfull/underfull boxes or unresolved cross-reference warnings; the existing font-size substitution warning remains. `node scripts/check.mjs` passed, including the updated exact manuscript/citation status expectation; `git diff --check` passed. Browser visual verification was not performed.
- Previous CV baseline: 2026-10-29 appointment-affiliation update, SHA-256 `DAFD237FCFABF10EAC820BA815D4323F87194890C4D20C3FC8D9BD16446D3CC5`. Updated CV SHA-256: `34B146F84725F25DA4D7BEC483FEC656ACA9258D1CEF445F1656841D0093225D`.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `assets/main.js`, `assets/publication-data.js`, `scripts/check.mjs`, `CHANGELOG.md`. No content omissions or unresolved discrepancies.
- Delivery: completed locally; not committed, pushed, or deployed.

### 2026-10-29 — Clarify academic appointment affiliations

- Updated the CV's Postdoctoral Research Fellow affiliation to Concordia University, Department of Computer Science and Software Engineering, and the Visiting Researcher affiliation to McGill University, Electrical and Computer Engineering, following the author's clarification. Confirmed that the Faculty Lecturer entry already identifies McGill's School of Continuing Studies; retained that affiliation and the existing appointment dates.
- Split the website's combined Postdoctoral Fellow / Visiting Researcher timeline item into separate appointments with their respective institutions and departments. The Faculty Lecturer / Assistant Professor (Professional) progression continues to identify McGill SCS.
- Rebuilt the downloadable CV twice and visually reviewed page one: affiliations are legible, with no clipping, overlap, or pagination change (seven pages). PDF text extraction confirms all three affiliations. No overfull/underfull boxes; the existing font-size substitution warning remains. `node scripts/check.mjs` and `git diff --check` passed. Browser visual verification was not performed.
- Previous CV baseline: preceding local MORPH-FL artifact update, SHA-256 `CE89A0EE1BF37A23E851B3A33F71BD268B3E85AEA99F41ED8EC1D715B1A3E2CE`. Updated CV SHA-256: `DAFD237FCFABF10EAC820BA815D4323F87194890C4D20C3FC8D9BD16446D3CC5`.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `index.html`, `CHANGELOG.md`. Project and publication data are unchanged by this correction.
- Delivery: completed locally; not committed, pushed, or deployed.

### 2026-10-29 — Add MORPH-FL research artifact

- Added MORPH-FL to Research Software and Artifacts in the CV with a concise description of Python fault localization, separate observation/hypothesis/dialogue models, and selective context resets. Marked the year as current project activity (`2026*`), preserving the manuscript's Submitted to JSS status.
- Verified the public [MORPH-FL repository](https://github.com/ai4se4ai-lab/MORPH-FL), already present in the local repository inventory, and linked it from the CV, curated project card, research-map detail, and manuscript entry. The description comes from the author's supplied abstract; repository existence does not imply a release or evaluated artifact.
- Increased curated artifacts from 12 to 13, with MORPH-FL in Analysis. Added a bridge placement on the research map and moved SIKG slightly upward (82% to 79%) to preserve node spacing. Automatic repository cards exclude the newly curated entry, preventing duplication. Updated README counts and meaningful project/filter/map expectations.
- Previous CV baseline: preceding MORPH-FL submission synchronization, SHA-256 `DA7B8E102F261FEDFA77D64CF48C49B8405B343CD86DE678C2350A3ED71C144B`, now present in commit `009409e`. Updated CV SHA-256: `CE89A0EE1BF37A23E851B3A33F71BD268B3E85AEA99F41ED8EC1D715B1A3E2CE`.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `assets/main.js`, `assets/research-layout.js`, `scripts/check.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: compiled the CV twice; text extraction and visual review confirm the new artifact and repository link on page four, without clipping, overlap, or pagination changes (seven pages). The existing font-size substitution warning remains; no overfull/underfull boxes. `node scripts/check.mjs` passed, including 13 map nodes, narrow-layout separation, seven Analysis projects, manuscript artifact link, MORPH-FL map details/status, duplicate exclusion, and existing interactions. `git diff --check` passed. Browser visual verification was not performed.
- Delivery: completed locally; not committed, pushed, or deployed.

### 2026-10-29 — MORPH-FL JSS submission and CV synchronization

- Added the author's confirmed single-author manuscript, Does Forgetting Help? Studying Context Reset Policies in LLM Fault Localization (MORPH-FL), to the CV and website as Submitted to Journal of Systems and Software, 2026. Manuscript count increased from ten to eleven; the 15 published/accepted entries are unchanged. No acceptance is claimed.
- Added the complete author-supplied abstract, explicitly labeled as such, and an `@unpublished` BibTeX citation with the target venue in its note. Submitted entries can now show an Abstract tab when abstract content is available; existing manuscripts without abstracts retain their BibTeX view. No DOI, public preprint, or repository link was inferred.
- Recompiled the downloadable CV twice. Deliberate omissions: the introduction, keywords, contact metadata, and full abstract are not reproduced in the compact CV entry; the website includes the abstract but not the introduction. The 12 curated artifacts and research map remain unchanged because no MORPH-FL repository was supplied; existing map checks pass.
- Previous CV baseline: 2026-10-28 RTI update, commit `feba87c`, SHA-256 `27B5D76721063EDE97D0DE603A7AA973A375D64A465977F2FFD1860CBC8AF89C`. Updated CV SHA-256: `DA7B8E102F261FEDFA77D64CF48C49B8405B343CD86DE678C2350A3ED71C144B`.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `assets/main.js`, `assets/publication-data.js`, `scripts/check.mjs`, `README.md`, `CHANGELOG.md`.
- Validation: `node scripts/check.mjs` passed, including the eleven-manuscript count, MORPH-FL status and citation, supplied abstract, initial tab/panel state, and existing project/map, citation interaction, repository, theme, and cursor checks. PDF text confirms the new entry; visually inspected the manuscript page and following artifact page with no clipping, overlap, or pagination change (seven pages). No overfull/underfull boxes or unresolved cross-reference warnings; the existing font-size substitution warning remains without a visible defect. `git diff --check` passed. Browser visual verification was not performed.
- Delivery: completed locally; not committed, pushed, or deployed.

### 2026-10-28 — Add NSERC RTI application to the CV

- Added NSERC RTI to Research Funding and Proposal Development, with role Applicant, status Under review, title An Interconnected Computing Platform for Trustworthy Intelligent Systems, and requested amount CAD $41,680, from the author's supplied application description. The CV summarizes the request rather than reproducing equipment quotations, tax calculations, or the proposal narrative; no funding award is claimed.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `CHANGELOG.md`. No project, publication, or grant details elsewhere on the site changed.
- Previous CV baseline: 2026-10-27 journal reconciliation, commit `03fb4de`, SHA-256 `4A80CA8435236BCACFE6B63E235DA4EF8FA3B7767189591990C5BE300E87575A`. Updated CV SHA-256: `27B5D76721063EDE97D0DE603A7AA973A375D64A465977F2FFD1860CBC8AF89C`.
- Validation: compiled the final LaTeX source twice; the PDF remains seven pages. Visually reviewed the updated grants page and following page; no clipping, overlap, or added spill page. No overfull/underfull boxes or unresolved cross-reference warnings. Website checks and whitespace validation passed.
- Delivery: committed and pushed as feba87c; [Pages deployment 40632678493](https://github.com/ai4se4ai-lab/ai4se4ai-lab.github.io/actions/runs/40632678493) succeeded. Verified HTTP 200 and exact deployed/local PDF byte equality. This delivery record is a subsequent documentation update.

### 2026-10-27 — Journal reconciliation and CV synchronization

- Source: the author's supplied journal list, incorporated into `docs/02_Curriculum_Vitae.tex` before synchronizing the website. Previous source baseline: SHA-256 `79869A0EE423C8477E0F44E7D5D989E9E0D7BA7E912E6D6B5BA5BB5135CCFCCD`, recorded on 2026-10-26 and unchanged through website commit `c08bfc5`; initial CV baseline commit `b66a7e9`.
- Added Temporal Graph Models for Predictive Monitoring in Microservices with the supplied four authors, 2026 manuscript year, EMSE target, and Revision requested status. Moved RapidPay from published/accepted to manuscripts and corrected Accepted to Revision requested in the CV, website, BibTeX, project grid, and shared map details. Updated use-hpc and LIFTDroid from Under review to Submitted. Preserved RATEN and the 2023 regression-testing article as published, with existing publication details.
- Added the previously author-confirmed Safe Coordination manuscript and software artifact to the CV, bringing the source and website back into agreement. Updated 2026 manuscript years for the supplied journal entries and kept manuscript citations as `@unpublished`, with target venues and statuses in notes rather than confirmed journal publication fields.
- Website counts: 16 to 15 published/accepted entries; eight to ten submitted/under-review/revision-requested entries. The research map and grid still contain 12 curated artifacts; reviewed both through their shared project data and map-detail checks. No repository is inferred for the new temporal-graph paper.
- Regenerated the downloadable CV twice after the final source edit. The CV now has seven pages; moved the artifact section heading onto its table page to avoid an orphan heading. CV SHA-256: `4A80CA8435236BCACFE6B63E235DA4EF8FA3B7767189591990C5BE300E87575A`.
- Files: `docs/02_Curriculum_Vitae.tex`, `assets/02_Curriculum_Vitae.pdf`, `assets/main.js`, `assets/publication-data.js`, `index.html`, `README.md`, `scripts/check.mjs`, `CHANGELOG.md`.
- Deliberate omissions: retained existing portfolio citation formatting with author initials; administrative Refereed/Open Access fields are not displayed by this portfolio/CV format. No unverified preprint, abstract, DOI, or acceptance is added for manuscripts. The pasted page number and repeated author heading were not publication content.
- Validation: `node scripts/check.mjs` passed with updated counts and checks for manuscript membership, exact statuses, unpublished citation types, artifact links, all 12 map nodes/details, filtering, repository search, themes, and cursor behavior. Rendered and visually inspected all seven PDF pages, then re-rendered and inspected the two pages affected by the final pagination fix; PDF text extraction confirms the added papers and statuses. No overfull/underfull boxes; a font-size substitution warning remains without a visible rendering defect. Browser visual verification was not performed.
- Delivery: committed and pushed as 03fb4de; [Pages deployment 40555120932](https://github.com/ai4se4ai-lab/ai4se4ai-lab.github.io/actions/runs/40555120932) succeeded. Verified HTTP 200 and exact deployed/local byte equality for index.html, assets/main.js, assets/publication-data.js, and the downloadable PDF. This delivery record is a subsequent documentation update.

### 2026-10-27 ? Feature Safe Coordination of Untrusted AI Agents

- Added the project to the curated Agents grid and interactive research map (11 ? 12 projects), with a compact map label, related agent projects, and a repository detail link. Listed the manuscript separately as Submitted ? IEEE TSE (seven ? eight submitted/under-review entries), with an unpublished BibTeX citation; no acceptance or complete machine-verification claim is made.
- Enabled code/artifact links for submitted manuscripts, so their repositories can be reached directly from publication details. Updated the publication provenance note and README counts.
- Diagnosis: live automatic repository discovery was already working, but it does not populate curated research or manuscript metadata. The checked-in preview snapshot still used the earlier repository name, verified-generative-coordination; refreshed it to coordination-of-untrusted-ai-agents and its current Python language. Inventory remains 84 repositories. Preserved automatic duplicate exclusion for the newly curated project.
- Sources: the author's explicit 2026-10-27 TSE submission confirmation and the [repository README](https://github.com/ai4se4ai-lab/coordination-of-untrusted-ai-agents), which identifies the title and M. Babaei as author. This is a targeted author-confirmed addition, not a full CV synchronization. The current CV does not yet include this project; LaTeX and downloadable PDF are unchanged.
- CV SHA-256 (unchanged): 79869A0EE423C8477E0F44E7D5D989E9E0D7BA7E912E6D6B5BA5BB5135CCFCCD. Previous baseline: 2026-10-26 tracking entry, present in initial commit b66a7e9.
- Files: assets/main.js, assets/publication-data.js, assets/research-layout.js, assets/research-map.js, assets/repositories.json, index.html, scripts/check.mjs, README.md, CHANGELOG.md.
- Validation: live repository metadata and deployed inventory checked; node scripts/check.mjs passed, including 12 map nodes, narrow-layout separation, project filters, the new map's status/link, submitted citation/status and artifact link, automatic duplicate exclusion, and existing publication/search/theme/cursor checks. git diff --check passed. Browser visual verification was not performed.
- Delivery: committed and pushed to main as 7d6ba1c; [Pages deployment 40551962276](https://github.com/ai4se4ai-lab/ai4se4ai-lab.github.io/actions/runs/40551962276) succeeded. Verified HTTP 200 and exact deployed/local content equality for index.html, assets/main.js, assets/research-layout.js, assets/research-map.js, and assets/publication-data.js. This delivery record is a subsequent documentation update.

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
