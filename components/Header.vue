<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="">
        </router-link>
        <nav class="nav">
          <ul>
            <li class="nav-notification">
              <router-link to="/">
                <img v-if="true" src="../assets/icon/notify.svg" alt="">
                <img v-if="false" src="../assets/icon/notify-active.svg" alt="">
              </router-link>
            </li>
            <li>
              <button>
                <img src="../assets/icon/profile-icon.svg" alt="">
              </button>
            </li>
            <li v-if="!auth" class="nav-auth">
              <router-link to="/sign-in">Вход</router-link> | 
              <router-link to="/sign-up">Регистрация</router-link>
            </li>
            <li v-if="state">
              <router-link to="/">
                <span>Поддержка</span> <img src="../assets/icon/radio.svg" alt="">
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  auth: {
    type: Boolean,
    default: true
  }
})
const auth = ref(props.auth)
</script>

<style lang="scss" scoped>
@import '../assets/css/layout/header.scss';
</style>