import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "forgot-password",
  configKey: "forgot-password-module",
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
        name: "forgot-password",
        path: "/forgot-password",
        file: resolve(__dirname, "./pages/ForgotPassword.vue"),
      });
    });

  },
});