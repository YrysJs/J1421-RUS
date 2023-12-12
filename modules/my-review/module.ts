import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "myreview",
  configKey: "myreview-module",
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
        name: "myreview",
        path: "/my-review",
        file: resolve(__dirname, "./pages/My-Review.vue"),
        meta: {
          title: 'Мои отзывы'
        }
      }
    ]

    nuxt.hook("pages:extend", (pages) => {
      pages.push(...routes);
    });
  },
});
