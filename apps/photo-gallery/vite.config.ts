import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    EnvironmentPlugin(["VITE_API_KEY", "VITE_API_URL"]),
    tsconfigPaths(),
    federation({
      filename: "remoteEntry.js",
      exposes: {
        "./PhotoGallery": "./src/components/PhotoGallery.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
