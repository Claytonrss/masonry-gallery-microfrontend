import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log("env: ", env);
  console.log("mode: ", mode);
  const PROD_URL_PHOTO_LIST = env.VITE_URL_REMOTE_PHOTO_LIST;
  const DEV_URL_PHOTO_LIST = "http://localhost:5001/";

  return {
    plugins: [
      federation({
        remotes: {
          photolist: `${
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
