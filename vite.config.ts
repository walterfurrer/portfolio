import { defineConfig } from "vite";
import oxlintPlugin from "vite-plugin-oxlint";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    oxlintPlugin({
      path: "src",
    }),
    tailwindcss(),
  ],
});
