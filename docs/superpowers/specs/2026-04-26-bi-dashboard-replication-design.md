# BI Dashboard Replication Design

## Goal

Create a maintainable frontend project that reproduces the provided prototype pages with 100% visual and structural fidelity before any design optimization work begins.

This first phase is a replication phase, not a redesign phase.

## Source Of Truth

- `D:\工作\成本耗材bi看板\新建文件夹\耗材成本管控_侧边栏方案图.html`
  - This file is the source of truth for the home overview page.
- `D:\工作\成本耗材bi看板\新建文件夹\微整科.html`
  - This file is the source of truth for the micro-surgery department page.

## Scope

The replicated project must include:

- A homepage that matches the provided overview HTML exactly.
- A micro-surgery page that matches the provided department HTML exactly.
- The same page relationships implied by the prototype:
  - home overview page
  - micro-surgery page
- The same text, numbers, spacing, colors, shadows, borders, radii, layout hierarchy, and responsive behavior present in the source HTML files.
- The same interactions already present in the source HTML files.

This phase does not include:

- UI redesign
- content rewriting
- component abstraction for its own sake
- data integration
- business logic changes

## Recommended Approach

Use a `Vite + native HTML/CSS/JS` multi-page frontend project.

Reasoning:

- It minimizes visual drift during the first replication pass.
- It preserves the exact DOM and styling behavior of the prototypes.
- It gives us a clean project foundation for later design iterations.
- It avoids premature framework abstraction that could change spacing, rendering, or interaction details.

## Page Mapping

### Page 1: Home Overview

Source:

- `D:\工作\成本耗材bi看板\新建文件夹\耗材成本管控_侧边栏方案图.html`

Target behavior:

- Be the project homepage.
- Preserve the fixed left sidebar, top bar, KPI blocks, warning area, target-completion area, and AI floating panel.
- Preserve navigation intent from the sidebar to the micro-surgery page.

### Page 2: Micro-Surgery Department

Source:

- `D:\工作\成本耗材bi看板\新建文件夹\微整科.html`

Target behavior:

- Exist as a second page inside the same project.
- Preserve any structure, style, and interactions defined in the source file.
- Remain reachable from the sidebar links and any existing prototype navigation paths.

## Architecture

The project should be organized as a simple multi-page app:

- `index.html`
  - mapped to the home overview page
- `weizhengke.html`
  - mapped to the micro-surgery page
- shared static assets directory for extracted CSS and JS

Implementation rule:

- Keep the original DOM structure as intact as possible during the first pass.
- Extract inline styles and scripts into project files only when doing so does not change behavior.
- Do not refactor for elegance until fidelity is verified.

## Components And UI Areas To Preserve

### Shared shell

- fixed left sidebar
- content shell offset
- sticky top bar
- responsive breakpoints

### Home overview page

- brand block in sidebar
- overview nav item
- department nav groups
- collapsible nav groups
- KPI summary cards
- combined cost cards
- anomaly warning cards with tabs
- target completion cards with expandable product lists
- floating AI assistant trigger
- AI panel

### Micro-surgery page

- all page sections and interactions defined by the provided source HTML

## Interactions To Preserve

From the overview source HTML, the following interactions are mandatory:

- sidebar nav-group collapse and expand
- tab switching in anomaly warning cards
- product list expand and collapse in target completion cards
- AI panel open and close
- page navigation to the micro-surgery page

For the micro-surgery page, preserve every interaction present in its source HTML as-is.

## Fidelity Rules

The implementation must preserve:

- exact copy and labels from the source pages
- visible numbers and percentages
- card order and section order
- CSS-driven spacing and alignment
- color usage and severity states
- border thickness and card radius
- hover states where present
- mobile and narrower-width layout changes already defined in the prototype

The implementation must not:

- simplify markup if that changes rendering
- rename content
- swap fonts or color tokens without proof of no visual change
- replace layout mechanisms unless the result is pixel-equivalent in practice

## Handling Encoding Issues

The source HTML currently shows mojibake when read as plain text in the terminal.

Design decision:

- Treat the original files as the source of truth for rendered output, not terminal-decoded text.
- During implementation, preserve the actual rendered page content as seen in the browser.
- If needed, repair file encoding inside the project only after verifying the visible text matches the original rendered page.

## Testing Strategy

Because fidelity is the primary requirement, verification should cover both structure and behavior.

### Test-first targets

Before migrating production code, add failing checks for:

- existence of both page entries
- existence of core layout regions on each page
- existence of required interactive hooks
- tab switching behavior
- expand and collapse behavior
- AI panel toggle behavior

### Verification targets

Run at minimum:

- automated tests for page structure and interaction behavior
- production build
- local manual comparison against the provided source HTML pages

## Risks

### Visual drift during cleanup

Risk:

- moving inline CSS/JS into separate files can accidentally alter specificity or execution order

Mitigation:

- migrate incrementally
- verify after each page is ported

### Encoding mismatch

Risk:

- terminal output may not reflect browser-rendered Chinese text accurately

Mitigation:

- validate against rendered output, not only shell output

### Broken prototype links

Risk:

- current prototype links reference parent-relative paths that will not match the new project layout automatically

Mitigation:

- remap links inside the project while preserving the same navigation intent

## Deliverable For This Phase

A local frontend project that:

- opens as a normal development app
- contains the homepage overview page and the micro-surgery page
- reproduces the provided prototypes with full structural and interaction fidelity
- is ready for a later design iteration pass

## Constraints And Assumptions

- The workspace is not currently a Git repository, so the spec cannot be committed unless a repository is initialized later.
- The provided two HTML files are the current authoritative inputs.
- Future design work will happen on top of the replicated project, so maintainability matters, but only after fidelity is secured.
