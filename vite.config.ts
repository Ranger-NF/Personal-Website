import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          layout: [
            "./src/components/layout.tsx",
            "./src/components/header.tsx",
            "./src/components/navLinks.tsx",
            "./src/components/mobileMenu.tsx",
          ],
          home: ["./src/pages/home.tsx"],
          about: ["./src/pages/about.tsx"],
          projects: [
            "./src/pages/projectsList.tsx",
            "./src/pages/project.tsx",
            "./src/components/projectItem.tsx",
          ],
        },
      },
    },
  },
});
