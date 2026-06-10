// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://localangle.co",
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      theme: "vitesse-light",
    },
  },
});
