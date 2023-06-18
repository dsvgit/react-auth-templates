import * as path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const mainApp = process.env.MAIN_APP;

  if (!mainApp) {
    throw new Error("MAIN_APP should be specified");
  }

  fs.copyFileSync(`${mainApp}.html`, "index.html");

  return {
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
          404: path.resolve(__dirname, "404.html"),
        },
      },
    },
  };
});
