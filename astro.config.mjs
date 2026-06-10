// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages project sites live at github.io/<repo>/ and need a base path.
// When localangle.co is live, remove ASTRO_BASE from the deploy workflow.
const base = process.env.ASTRO_BASE || undefined;

export default defineConfig({
  site: base ? "https://localangle.github.io" : "https://localangle.co",
  base,
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      theme: "vitesse-light",
    },
  },
});
