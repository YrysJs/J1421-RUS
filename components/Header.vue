<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="">
        </router-link>
        <nav class="nav">
          <ul>
            <li class="nav-notification" v-if="store.user">
              <router-link to="/">
                <img v-if="true" src="../assets/icon/notify.svg" alt="">
                <img v-if="false" src="../assets/icon/notify-active.svg" alt="">
              </router-link>
            </li>
            <li v-if="store.user">
              <button @click="openCollapse">
                <img src="../assets/icon/profile-icon.svg" alt="">
              </button>
              <div class="submenu" v-if="subMenu">
                <div @click="openCollapse" class="submenu-close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.595 11.1811C12.2045 10.7906 11.5714 10.7906 11.1808 11.1811C10.7903 11.5716 10.7903 12.2048 11.1808 12.5953L18.5586 19.973L11.1808 27.3508C10.7903 27.7413 10.7903 28.3744 11.1808 28.765C11.5714 29.1555 12.2045 29.1555 12.595 28.765L19.9728 21.3872L26.999 28.4135L27.3505 28.765C27.741 29.1555 28.3742 29.1555 28.7647 28.765C29.1552 28.3744 29.1552 27.7413 28.7647 27.3508L28.4132 26.9992L21.387 19.973L28.7647 12.5953C29.1552 12.2048 29.1552 11.5716 28.7647 11.1811C28.3742 10.7906 27.741 10.7906 27.3505 11.1811L19.9728 18.5588L12.595 11.1811Z" fill="#D9D9D9"/>
                  </svg>
                </div>
                <!-- <router-link to="/profile" @click="openCollapse">Мои данные</router-link> -->
                <router-link to="/my-review" @click="openCollapse">Мои отзывы</router-link>
                <!-- <router-link to="/support" @click="openCollapse">Служба поддержки</router-link> -->
                <button @click="logoutProfile">Выйти из профиля</button>
              </div>
            </li>
            <li v-if="!store.user" class="nav-auth">
              <router-link to="/sign-in">Вход</router-link> | 
              <router-link to="/sign-up">Регистрация</router-link>
            </li>
            <!-- <li v-if="store.user">
              <router-link to="/support">
                <span style="margin-right: 10px;">Поддержка</span> <img src="../assets/icon/radio.svg" alt="">
              </router-link>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
  </template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../modules/auth/store/sotre'
//store
const store = useAuthStore()

//state
const subMenu = ref(false)


//methods
const openCollapse = () => {
  subMenu.value = !subMenu.value
}
const logoutProfile = () => {
  store.logout()
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout/header.scss';
</style>