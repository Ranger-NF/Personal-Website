import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // This makes asset URLs relative instead of absolute
  preview: {
    port: 4173,
    host: true, // bind to all network interfaces
    strictPort: true,
    allowedHosts: ["ranger.hackclub.app", "localhost"],
  },
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.md"],
  build: {
    assetsDir: "",
    copyPublicDir: true,
  },
});
