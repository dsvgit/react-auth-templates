import * as path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const localBuild = process.env.LOCAL_BUILD;

  fs.copyFileSync(`main.html`, "index.html");

  return {
    base: localBuild ? undefined : packageJson.homepage,
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
          main: path.resolve(__dirname, `index.html`),
          bootstrap: path.resolve(__dirname, `bootstrap.html`),
          mui: path.resolve(__dirname, `mui.html`),
          404: path.resolve(__dirname, "404.html"),
        },
      },
    },
  };
});
