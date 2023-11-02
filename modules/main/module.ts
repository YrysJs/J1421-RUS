import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "main-page",
  configKey: "main-module",
  setup(options: any, nuxt: Nuxt) {
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "components"),
      });
    });

    nuxt.hook("autoImports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "./composables"));
    });

    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "main",
        path: "/",
        file: resolve(__dirname, "./pages/Main.vue"),
      });
    });
  },
});
