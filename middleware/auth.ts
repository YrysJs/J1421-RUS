import { getCookie } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
    if (!getCookie('access_token')) {
      return navigateTo('/');
    }
});