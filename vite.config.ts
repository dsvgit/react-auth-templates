import * as path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "development" ? undefined : packageJson.homepage,
    plugins: [
      react({
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      svgr(),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          404: path.resolve(__dirname, "404.html"),
        },
      },
    },
  };
});
