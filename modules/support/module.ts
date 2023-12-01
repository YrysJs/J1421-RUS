import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "support",
  configKey: "support-module",
  setup(options: any, nuxt: Nuxt) {
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "components"),
      });
    });

    nuxt.hook("autoImports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "./composables"));
    });

    const routes = [
      {
        name: "support",
        path: "/support",
        file: resolve(__dirname, "./pages/Support.vue"),
        meta: {
          title: 'Поддержка'
        }
      }
    ]

    nuxt.hook("pages:extend", (pages) => {
      pages.push(...routes);
    });
  },
});
