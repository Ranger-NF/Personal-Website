import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: './',  // This makes asset URLs relative instead of absolute
  build: {
    assetsDir: '' // This prevents Vite from putting assets in a subdirectory
  },
  plugins: [react(), tailwindcss()],
});
