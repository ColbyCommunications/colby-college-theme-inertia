// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";

export default defineConfig(({ command, mode }) => {
  // Dynamically resolve Lando domain (e.g., 'colby.lndo.site')
  const landoAppName = process.env.LANDO_APP_NAME;
  const landoDomain = process.env.LANDO_DOMAIN || "lndo.site";
  const landoHost = landoAppName ? `${landoAppName}.${landoDomain}` : "localhost";

  return {
    plugins: [vue(), svgLoader()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "resources"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      watch: { usePolling: true, interval: 100 },
      origin: `https://${landoHost}`,
      css: {
        postcss: "./postcss.config.js",
      },
      // HMR through same origin proxy still uses the internal host
      hmr: {
        protocol: "wss",
        host: landoHost,
        clientPort: 443,
        path: "/vite",
      },
      allowedHosts: [".lndo.site", "localhost", "node"],
    },
    build: {
      emptyOutDir: false,
      manifest: true,
      rollupOptions: {
        input: path.resolve(__dirname, "resources/js/app.js"),
        output: {
          dir: path.resolve(__dirname, "dist"),
          format: "es",
        },
      },
      outDir: "dist",
    },
    base:
      command === "build"
        ? "/wp-content/themes/colby-college-theme-inertia/dist/"
        : "/vite/",
  };
});