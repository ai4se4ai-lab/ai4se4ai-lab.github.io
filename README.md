# Majid Babaei — Academic portfolio

A minimal academic portfolio for Majid Babaei, Assistant Professor at the University of the Fraser Valley. Built with plain HTML, CSS, and JavaScript for GitHub Pages. No build step or package installation is required.

The site includes an animated AI/SE diagram, category filters for 11 research artifacts, 16 published/accepted publications, seven submitted/under-review manuscripts, teaching, mentorship, academic background, service, and a searchable snapshot of every public repository on the account. Forks are explicitly labeled. Content follows `docs/02_Curriculum_Vitae.tex`; submission statuses are kept separate from published work.

## Preview

From this directory, run `node scripts/serve.mjs` and open http://localhost:8000. Use an HTTP server rather than opening the HTML directly so the repository snapshot can load.

Run `node scripts/check.mjs` to check local links and anchors, project/publication filtering, repository search, fork filtering, and content escaping. This is a programmatic check; visual browser review is still recommended.

## Update content

See [CHANGELOG.md](CHANGELOG.md) for the website history, the CV-to-website content mapping, and the workflow for future CV updates. Editing the LaTeX file does not automatically synchronize the website. When requesting an update, you can say: “Update the website from the latest CV and record the changes in CHANGELOG.md.” Repository maintenance instructions are in [AGENTS.md](AGENTS.md).

- Biography, teaching, appointments, and service: `index.html`.
- Featured projects and publications: arrays in `assets/main.js`.
- Publication paper/preprint links, abstract summaries, and BibTeX fields: `assets/publication-data.js`, keyed by the exact publication title. Keep these keys aligned when editing titles in `assets/main.js`.
- Colors, typography, animation, and responsive layouts: `assets/style.css`.
- Repeating geometric background and cursor-reactive line colors: `assets/geometric-pattern.svg`, `assets/cursor-magic.css`, and `assets/cursor-magic.js`. Sections opt in with `data-cursor-surface`; theme colors use the existing root appearance attribute.
- All public repositories: run `node scripts/refresh-repositories.mjs`. This refreshes the checked-in snapshot without making visitors depend on the GitHub API.
- CV: edit `docs/02_Curriculum_Vitae.tex`, then run `pdflatex -interaction=nonstopmode -halt-on-error -output-directory=assets docs/02_Curriculum_Vitae.tex` twice. Commit the resulting PDF. Auxiliary LaTeX files are ignored.

Google Fonts enhances the typography when available; local fallback fonts are provided. Motion follows the visitor’s reduced-motion preference. Contact links use email directly; no form collects visitor data.

The header theme toggle follows the system appearance initially and remembers explicit light/dark choices in browser storage. The animated research map connects AI and software engineering through all 11 selected artifacts. Projects are positioned by qualitative research focus: AI systems and experiment infrastructure toward AI; formal methods, agent coordination, and intelligent testing between the worlds; maintenance, robustness, and replay toward software. Hover or focus a component for a summary and highlighted related research; click or press Enter to open its detail panel, placement explanation, and repository link. Close with ×, Escape, or a click outside the panel. The animation pauses while exploring and has a manual pause/resume control. Placement and conceptual relationships are maintained by project name in `assets/research-layout.js`; behavior lives in `assets/research-map.js`. Positions are editorial groupings, not measured scores. Initial theme selection and persistence live in `assets/theme.js`.

Publication titles expand in place. Published/accepted entries offer Abstract and BibTeX tabs, separate publisher/preprint/code links where verified, copyable citations, and `.bib` downloads. Submitted/under-review entries offer only a BibTeX tab and a preprint link when verified. Their citations use `@unpublished` with submission status in `note`; target venues are not represented as confirmed publications. Missing dates and identifiers are omitted rather than guessed. Abstract summaries are labeled as paraphrases and linked to their sources; entries without verified abstract content explicitly say so. Clipboard access is optional: downloading or selecting the citation works when copying is blocked.

The background repeats the geometric petal/hexagon motif from the [Cursor Magic reference](https://magic-cursor-effect.webflow.io/), adapted from its [supplied SVG](https://cdn.prod.website-files.com/65e20fd1a2a7f6d14332e198/65ef0a04964bb3d08e2fe018_demo%20%281%29.svg) into the local `assets/geometric-pattern.svg` tile. The complete pattern stays visible at rest. Pointer movement colors only its lines with gold, teal, and violet accents; no circular glow is painted over the background. Light and dark modes have separate palettes; teaching retains its dark surface treatment. Decorative layers do not intercept clicks, replace the native cursor, or enter the accessibility tree. Tracking pauses when settled, on scroll, on window exit/blur, and when the page is hidden. Touch-only pointers and reduced-motion users keep the static pattern without pointer animation. No external asset requests or third-party animation libraries are required at runtime.

## GitHub Pages

Push this repository to `main`, then select **Settings → Pages → Build and deployment → Source → GitHub Actions**. The included workflow publishes only public site files to https://ai4se4ai-lab.github.io/. Deployment has not been triggered from this local checkout.
