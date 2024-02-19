import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-kerem-demo-blog.netlify.app",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify({
    imageCDN: false,
  }),
});
