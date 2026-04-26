# BI Dashboard Replication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite-based multi-page frontend that reproduces the provided homepage overview and micro-surgery pages with full layout and interaction fidelity.

**Architecture:** Keep the original page DOM as intact as possible while moving the prototype into a maintainable multi-page project. Use one HTML entry per page, page-specific CSS files, and small page-specific JS modules that expose the same inline event handlers as the original prototypes.

**Tech Stack:** Vite, native HTML/CSS/JS, Vitest, jsdom

---

## File Structure

### Root files

- Create: `D:\工作\成本耗材bi看板\新建文件夹\package.json`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\vite.config.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\vitest.config.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\index.html`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\weizhengke.html`

### Source assets

- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\home-overview.css`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\weizhengke.css`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\home-overview.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\weizhengke.js`

### Tests

- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\page-entries.spec.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\home-overview.spec.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\weizhengke.spec.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\helpers\load-html.js`

## Task 1: Scaffold Tooling

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\package.json`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\vite.config.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\vitest.config.js`

- [ ] **Step 1: Create the project manifest**

```json
{
  "name": "bi-dashboard-replication",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "devDependencies": {
    "jsdom": "^26.1.0",
    "vite": "^7.1.0",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 2: Create the Vite multi-page config**

```js
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        weizhengke: resolve(__dirname, "weizhengke.html"),
      },
    },
  },
});
```

- [ ] **Step 3: Create the Vitest config**

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.spec.js"],
  },
});
```

- [ ] **Step 4: Install dependencies**

Run: `npm install`

Expected: install completes with `vite`, `vitest`, and `jsdom` added to `node_modules`

## Task 2: Lock Entry-File Existence With A Failing Test

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\page-entries.spec.js`
- Test: `D:\工作\成本耗材bi看板\新建文件夹\tests\page-entries.spec.js`

- [ ] **Step 1: Write the failing page-entry test**

```js
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("page entries", () => {
  it("creates both page entry files with page-level landmarks", () => {
    expect(existsSync("index.html")).toBe(true);
    expect(existsSync("weizhengke.html")).toBe(true);

    const home = readFileSync("index.html", "utf8");
    const dept = readFileSync("weizhengke.html", "utf8");

    expect(home).toContain('class="sidebar"');
    expect(home).toContain('class="topbar"');
    expect(home).toContain('id="aiPanel"');

    expect(dept).toContain('class="sidebar"');
    expect(dept).toContain('class="topbar"');
    expect(dept).toContain('class="target-main-card"');
  });
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- tests/page-entries.spec.js`

Expected: FAIL because `index.html` and `weizhengke.html` do not exist yet

## Task 3: Port The Home Overview Entry

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\index.html`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\home-overview.css`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\home-overview.js`
- Modify source mapping only, do not change: `D:\工作\成本耗材bi看板\新建文件夹\耗材成本管控_侧边栏方案图.html`

- [ ] **Step 1: Create the home entry HTML from the provided prototype**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>耗材成本经营总览（侧边栏方案图）</title>
    <link rel="stylesheet" href="/src/styles/home-overview.css" />
  </head>
  <body>
    <!-- Copy the provided home-overview prototype DOM with structure preserved -->
    <script type="module" src="/src/scripts/home-overview.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Move the home page CSS into `src/styles/home-overview.css` without changing selectors**

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: #F2F3F5;
  min-height: 100vh;
  font-family: "PingFang SC", "Microsoft YaHei", -apple-system, sans-serif;
  color: #1A1A1A;
  overflow-x: hidden;
}
/* Continue with the exact selectors and declarations from the prototype */
```

- [ ] **Step 3: Implement the home page behavior module**

```js
function switchTab(btn, dept, tab) {
  const card = btn.closest(".alert-card");
  card.querySelectorAll(".tab-btn").forEach((item) => item.classList.remove("on"));
  btn.classList.add("on");
  ["p", "d", "a"].forEach((key) => {
    const panel = document.getElementById(`${dept}-${key}`);
    if (panel) {
      panel.style.display = key === tab ? "block" : "none";
    }
  });
}

function toggleList(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.classList.toggle("show");
  const row = panel.previousElementSibling;
  const unit = row?.querySelector(".tier-unit");
  if (unit) {
    unit.textContent = panel.classList.contains("show") ? "款 · 收起 →" : "款 · 展开 →";
  }
}

function toggleNavGroup(btn) {
  const group = btn.closest(".nav-group");
  if (!group) return;
  group.classList.toggle("collapsed");
  const icon = btn.querySelector(".nav-toggle");
  if (icon) {
    icon.textContent = group.classList.contains("collapsed") ? "+" : "-";
  }
}

function toggleAI() {
  document.getElementById("aiPanel")?.classList.toggle("show");
}

window.switchTab = switchTab;
window.toggleList = toggleList;
window.toggleNavGroup = toggleNavGroup;
window.toggleAI = toggleAI;
```

- [ ] **Step 4: Remap home-page navigation paths for the project**

```html
<button class="nav-group-hd" type="button" onclick="window.location='weizhengke.html'">
```

```html
<button class="nav-link" type="button" onclick="window.location='weizhengke.html'">
```

- [ ] **Step 5: Re-run the page-entry test**

Run: `npm test -- tests/page-entries.spec.js`

Expected: PASS for the home entry assertions, and either PASS fully or only the micro-page assertions still failing

## Task 4: Add Failing Home Interaction Tests

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\helpers\load-html.js`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\home-overview.spec.js`
- Test: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\home-overview.js`

- [ ] **Step 1: Add the HTML test helper**

```js
import { readFileSync } from "node:fs";

export function loadHtml(filePath) {
  document.documentElement.innerHTML = readFileSync(filePath, "utf8");
}
```

- [ ] **Step 2: Write failing home interaction tests**

```js
import { beforeEach, describe, expect, it } from "vitest";
import { loadHtml } from "./helpers/load-html.js";
import "/src/scripts/home-overview.js";

describe("home overview interactions", () => {
  beforeEach(() => {
    loadHtml("index.html");
  });

  it("toggles the AI panel", () => {
    const panel = document.getElementById("aiPanel");
    expect(panel.classList.contains("show")).toBe(false);
    window.toggleAI();
    expect(panel.classList.contains("show")).toBe(true);
  });

  it("expands and collapses sidebar nav groups", () => {
    const button = document.querySelector(".nav-group.collapsed .nav-group-hd");
    const group = button.closest(".nav-group");
    window.toggleNavGroup(button);
    expect(group.classList.contains("collapsed")).toBe(false);
  });

  it("switches anomaly tabs inside a card", () => {
    const button = document.querySelector("#wei-d")?.previousElementSibling?.querySelectorAll(".tab-btn")[1];
    window.switchTab(button, "wei", "d");
    expect(document.getElementById("wei-d").style.display).toBe("block");
    expect(document.getElementById("wei-p").style.display).toBe("none");
  });
});
```

- [ ] **Step 3: Run the home interaction tests and verify failure**

Run: `npm test -- tests/home-overview.spec.js`

Expected: FAIL until the imported HTML, selectors, and interaction hooks are aligned

- [ ] **Step 4: Adjust the HTML and script only enough to make the tests pass**

```js
window.switchTab = switchTab;
window.toggleList = toggleList;
window.toggleNavGroup = toggleNavGroup;
window.toggleAI = toggleAI;
```

- [ ] **Step 5: Re-run the home interaction tests**

Run: `npm test -- tests/home-overview.spec.js`

Expected: PASS

## Task 5: Port The Micro-Surgery Entry

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\weizhengke.html`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\weizhengke.css`
- Create: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\weizhengke.js`
- Modify source mapping only, do not change: `D:\工作\成本耗材bi看板\新建文件夹\微整科.html`

- [ ] **Step 1: Create the micro-surgery entry HTML from the provided prototype**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>微整科 — 耗材成本管控</title>
    <link rel="stylesheet" href="/src/styles/weizhengke.css" />
  </head>
  <body>
    <!-- Copy the provided micro-surgery prototype DOM with structure preserved -->
    <script type="module" src="/src/scripts/weizhengke.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Move the micro-surgery CSS into `src/styles/weizhengke.css` without changing selectors**

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: #F2F3F5;
  min-height: 100vh;
  font-family: "PingFang SC", "Microsoft YaHei", -apple-system, sans-serif;
}
/* Continue with the exact selectors and declarations from the prototype */
```

- [ ] **Step 3: Implement the micro-surgery behavior module**

```js
function toggleCat(id, row) {
  const body = document.getElementById(id);
  if (!body) return;
  const isOpen = body.classList.contains("open");
  body.classList.toggle("open", !isOpen);
  row.classList.toggle("open", !isOpen);
}

function toggleGroup(id, row) {
  const body = document.getElementById(id);
  if (!body) return;
  const isOpen = body.classList.contains("open");
  body.classList.toggle("open", !isOpen);
  row.classList.toggle("open", !isOpen);
}

function toggleNavGroup(btn) {
  const group = btn.closest(".nav-group");
  if (!group) return;
  const isCollapsed = group.classList.contains("collapsed");
  group.classList.toggle("collapsed", !isCollapsed);
  const icon = btn.querySelector(".nav-toggle");
  if (icon) {
    icon.textContent = isCollapsed ? "-" : "+";
  }
}

window.toggleCat = toggleCat;
window.toggleGroup = toggleGroup;
window.toggleNavGroup = toggleNavGroup;
```

- [ ] **Step 4: Remap micro-page navigation paths for the project**

```html
<button class="nav-home" type="button" onclick="window.location='index.html'">
```

- [ ] **Step 5: Re-run the page-entry test**

Run: `npm test -- tests/page-entries.spec.js`

Expected: PASS

## Task 6: Add Failing Micro-Surgery Interaction Tests

**Files:**
- Create: `D:\工作\成本耗材bi看板\新建文件夹\tests\weizhengke.spec.js`
- Test: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\weizhengke.js`

- [ ] **Step 1: Write failing micro-page interaction tests**

```js
import { beforeEach, describe, expect, it } from "vitest";
import { loadHtml } from "./helpers/load-html.js";
import "/src/scripts/weizhengke.js";

describe("weizhengke interactions", () => {
  beforeEach(() => {
    loadHtml("weizhengke.html");
  });

  it("expands grouped summary rows", () => {
    const row = document.querySelector(".group-row");
    const id = row.getAttribute("onclick").match(/'([^']+)'/)[1];
    const body = document.getElementById(id);
    expect(body.classList.contains("open")).toBe(false);
    window.toggleGroup(id, row);
    expect(body.classList.contains("open")).toBe(true);
  });

  it("expands category rows", () => {
    const row = document.querySelector(".cat-row");
    const id = row.getAttribute("onclick").match(/'([^']+)'/)[1];
    const body = document.getElementById(id);
    window.toggleCat(id, row);
    expect(body.classList.contains("open")).toBe(true);
    expect(row.classList.contains("open")).toBe(true);
  });

  it("opens collapsed sidebar groups", () => {
    const button = document.querySelector(".nav-group.collapsed .nav-group-hd");
    const group = button.closest(".nav-group");
    window.toggleNavGroup(button);
    expect(group.classList.contains("collapsed")).toBe(false);
  });
});
```

- [ ] **Step 2: Run the micro-page interaction tests and verify failure**

Run: `npm test -- tests/weizhengke.spec.js`

Expected: FAIL until the imported HTML and interaction module are wired correctly

- [ ] **Step 3: Adjust the HTML and script only enough to make the tests pass**

```js
window.toggleCat = toggleCat;
window.toggleGroup = toggleGroup;
window.toggleNavGroup = toggleNavGroup;
```

- [ ] **Step 4: Re-run the micro-page interaction tests**

Run: `npm test -- tests/weizhengke.spec.js`

Expected: PASS

## Task 7: Full Verification

**Files:**
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\index.html`
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\weizhengke.html`
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\home-overview.css`
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\src\styles\weizhengke.css`
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\home-overview.js`
- Verify: `D:\工作\成本耗材bi看板\新建文件夹\src\scripts\weizhengke.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`

Expected: PASS with all spec files green

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: PASS with Vite output for both `index.html` and `weizhengke.html`

- [ ] **Step 3: Start the dev server for manual comparison**

Run: `npm run dev -- --host 127.0.0.1 --port 4173`

Expected: a local URL serving both replicated pages

- [ ] **Step 4: Compare both rendered pages against the source prototypes**

```text
Checklist:
- sidebar width, padding, brand block, and active state
- topbar spacing and pill/button appearance
- section order and card counts
- anomaly tabs and card states
- expand/collapse interactions
- AI panel toggle behavior
- page-to-page navigation
```

- [ ] **Step 5: If differences remain, fix them and re-run `npm test` and `npm run build`**

Run: `npm test && npm run build`

Expected: PASS after each fidelity fix

## Self-Review

### Spec coverage

- Homepage overview page: covered by Tasks 2, 3, 4, and 7
- Micro-surgery page: covered by Tasks 2, 5, 6, and 7
- Shared navigation and page relationships: covered by Tasks 3, 5, and 7
- Required interactions: covered by Tasks 4, 6, and 7
- Maintainable Vite project shape: covered by Task 1 and the file structure

### Placeholder scan

- No `TODO`
- No `TBD`
- No deferred “implement later” steps
- Every task includes exact file paths and exact commands

### Type consistency

- Home module exports and window hooks: `switchTab`, `toggleList`, `toggleNavGroup`, `toggleAI`
- Micro module exports and window hooks: `toggleCat`, `toggleGroup`, `toggleNavGroup`
- HTML entry names are consistently `index.html` and `weizhengke.html`
