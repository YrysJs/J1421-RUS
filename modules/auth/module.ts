import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "pathe";
import type { Nuxt } from "@nuxt/schema";

export default defineNuxtModule({
  name: "auth",
  configKey: "auth-module",
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
        name: "sign-up",
        path: "/sign-up",
        file: resolve(__dirname, "./pages/SignUp.vue"),
        meta: {
          title: 'Регистрация'
        }
      },
      {
        name: "forgot-password",
        path: "/forgot-password",
        file: resolve(__dirname, "./pages/ForgotPassword.vue"),
        meta: {
          title: 'Сброс пароля'
        }
      },
      {
        name: "sign-in",
        path: "/sign-in",
        file: resolve(__dirname, "./pages/SignIn.vue"),
        meta: {
          title: 'Авторизация'
        }
      }
    ]

    nuxt.hook("pages:extend", (pages) => {
      pages.push(...routes);
    });
  },
});
