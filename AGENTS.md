# Portfolio maintenance

- Read `CHANGELOG.md` before updating this website or synchronizing it with the CV.
- Use `docs/02_Curriculum_Vitae.tex` as the source of academic facts. Follow the CV update workflow and content mapping in `CHANGELOG.md` when the user asks to update the site from the CV.
- Add a dated entry to `CHANGELOG.md` for each completed website update. Explain actual content or behavior changes, affected files, validation, and delivery status. For CV synchronization, also record the CV SHA-256 and the previous baseline when available.
- Preserve publication and submission statuses. Do not turn proposed or submitted work into completed or accepted work without source evidence.
- Run `node scripts/check.mjs` after functional or content changes. Update meaningful count expectations if the underlying content changes. Documentation-only changes need link and consistency checks, not a full website test run.
- If project data changes, review the research map as well as the project grid; both use the `projects` array in `assets/main.js`.
- Keep historical changelog entries. Distinguish local completion, commit, push, and verified deployment; report only states actually reached.
