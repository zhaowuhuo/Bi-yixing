import { readFileSync } from "node:fs";

export function loadHtml(filePath) {
  const html = readFileSync(filePath, "utf8");
  document.open();
  document.write(html);
  document.close();
}
