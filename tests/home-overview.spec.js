import { beforeEach, describe, expect, it } from "vitest";
import { loadHtml } from "./helpers/load-html.js";
import "../src/scripts/home-overview.js";

describe("home overview interactions", () => {
  beforeEach(() => {
    loadHtml("index.html");
  });

  it("toggles the AI panel", () => {
    const panel = document.getElementById("aiPanel");

    expect(panel.classList.contains("show")).toBe(false);

    window.toggleAI();
    expect(panel.classList.contains("show")).toBe(true);

    window.toggleAI();
    expect(panel.classList.contains("show")).toBe(false);
  });

  it("expands and collapses sidebar nav groups", () => {
    const button = document.querySelector(".nav-group.collapsed .nav-group-hd");
    const group = button.closest(".nav-group");

    expect(group.classList.contains("collapsed")).toBe(true);

    window.toggleNavGroup(button);
    expect(group.classList.contains("collapsed")).toBe(false);

    window.toggleNavGroup(button);
    expect(group.classList.contains("collapsed")).toBe(true);
  });

  it("switches anomaly tabs inside the first warning card", () => {
    const doctorButton = document.querySelector(".alert-card .tab-row .tab-btn:nth-child(2)");
    const productPanel = document.getElementById("wei-p");
    const doctorPanel = document.getElementById("wei-d");

    expect(productPanel.style.display).toBe("");
    expect(doctorPanel.style.display).toBe("none");

    window.switchTab(doctorButton, "wei", "d");

    expect(productPanel.style.display).toBe("none");
    expect(doctorPanel.style.display).toBe("block");
    expect(doctorButton.classList.contains("on")).toBe(true);
  });

  it("expands and collapses the first target product list", () => {
    const panel = document.getElementById("wei-low");

    expect(panel.classList.contains("show")).toBe(false);

    window.toggleList("wei-low");
    expect(panel.classList.contains("show")).toBe(true);

    window.toggleList("wei-low");
    expect(panel.classList.contains("show")).toBe(false);
  });
});
