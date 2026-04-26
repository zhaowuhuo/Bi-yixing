import { beforeEach, describe, expect, it } from "vitest";
import { loadHtml } from "./helpers/load-html.js";
import "../src/scripts/weizhengke.js";

function idFromOnclick(row) {
  return row.getAttribute("onclick").match(/'([^']+)'/)[1];
}

describe("weizhengke interactions", () => {
  beforeEach(() => {
    loadHtml("weizhengke.html");
  });

  it("expands grouped summary rows", () => {
    const row = document.querySelector(".group-row");
    const id = idFromOnclick(row);
    const body = document.getElementById(id);

    expect(body.classList.contains("open")).toBe(false);
    expect(row.classList.contains("open")).toBe(false);

    window.toggleGroup(id, row);

    expect(body.classList.contains("open")).toBe(true);
    expect(row.classList.contains("open")).toBe(true);
  });

  it("expands category rows", () => {
    const row = document.querySelector(".cat-row");
    const id = idFromOnclick(row);
    const body = document.getElementById(id);

    expect(body.classList.contains("open")).toBe(false);
    expect(row.classList.contains("open")).toBe(false);

    window.toggleCat(id, row);

    expect(body.classList.contains("open")).toBe(true);
    expect(row.classList.contains("open")).toBe(true);
  });

  it("opens collapsed sidebar groups", () => {
    const button = document.querySelector(".nav-group.collapsed .nav-group-hd");
    const group = button.closest(".nav-group");

    expect(group.classList.contains("collapsed")).toBe(true);

    window.toggleNavGroup(button);

    expect(group.classList.contains("collapsed")).toBe(false);
  });
});
