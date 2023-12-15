<template>
  <main class="main">
    <Header/>
    <div class="container">
      <h3 class="main-title">
        Портал отзывов об опыте работы в IT компаниях по всему миру 
      </h3>
      <NuxtPage></NuxtPage>
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useAuthStore } from './modules/auth/store/sotre';
import { getCookie } from './utils/cookie';

//store
const store = useAuthStore()

onBeforeMount( () => {
  getCookie('access_token') ? store.user = true : store.user = false 
  getCookie('user_id') ? store.userId = getCookie('user_id') : store.userId = false 

})

</script>

<style lang="scss">
@import './assets/css/global.scss';
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>