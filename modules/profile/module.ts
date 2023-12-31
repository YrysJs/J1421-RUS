import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "profile",
  configKey: "profile-module",
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
        name: "profile",
        path: "/profile",
        file: resolve(__dirname, "./pages/Profile.vue"),
        meta: {
          title: 'Мой профиль'
        }
      }
    ]

    nuxt.hook("pages:extend", (pages) => {
      pages.push(...routes);
    });
  },
});
