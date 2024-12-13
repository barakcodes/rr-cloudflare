import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getLoadContext} from "./load-context"

export default defineConfig({
  plugins: [
    cloudflareDevProxy({getLoadContext}),
    tailwind(),
    reactRouter(),
    tsconfigPaths()
  ],
});
