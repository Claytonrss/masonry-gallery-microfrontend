import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PROD_URL_PHOTO_LIST = env.VITE_PROD_URL_PHOTO_LIST;
  const DEV_URL_PHOTO_LIST = env.VITE_DEV_URL_PHOTO_LIST;

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      federation({
        remotes: {
          PhotoGallery: `${
            mode === "development" ? DEV_URL_PHOTO_LIST : PROD_URL_PHOTO_LIST
          }assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
