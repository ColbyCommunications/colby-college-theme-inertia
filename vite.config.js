import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue(), svgLoader()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "resources"),
      },
    },
    css: {
      postcss: "./postcss.config.js",
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      origin: "https://colby.lndo.site",
      hmr: {
        protocol: "wss",
        host: "colby.lndo.site",
        clientPort: 443,
        path: "/vite",
      },
      allowedHosts: [".lndo.site", "localhost", "node"],
    },
    build: {
      emptyOutDir: false,
      manifest: true,
      outDir: "dist",
      rolldownOptions: {
        input: path.resolve(__dirname, "resources/js/app.js"),
        output: {
          format: "es",
          manualChunks(id) {
            if (id.includes("node_modules/hls.js")) {
              return "vendor-hls";
            }
            if (id.includes("node_modules/gsap")) {
              return "vendor-gsap";
            }
          },
        },
      },
    },
    base:
      command === "build"
        ? "/wp-content/themes/colby-college-theme-inertia/dist/"
        : "/vite/",
  };
});
