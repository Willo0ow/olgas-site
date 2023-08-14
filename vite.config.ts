import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    crittersOptions: {
      preload: "media",
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  },
});
