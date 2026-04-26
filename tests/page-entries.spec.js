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
