import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "sign-in",
  configKey: "sign-in-module",
  setup(options: any, nuxt: Nuxt) {
    // Auto register components
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "components"),
      });
    });

    // Auto register composables
    nuxt.hook("autoImports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "./composables"));
    });

    // Auto register pages
    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "sign-in",
        path: "/sign-in",
        file: resolve(__dirname, "./pages/SignIn.vue"),
      });
    });

    // Pinia store modules are auto imported
  },
});