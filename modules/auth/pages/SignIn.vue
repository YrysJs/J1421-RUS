<template>
  <div class="sign-page">
    <div class="sign-in">
        <h3>вход в аккаунт</h3>
        <div class="sign-in__form">
            <div class="sign-in__form-item">
                <p>E-mail</p>
                <input type="text" name="" id="" placeholder="Введите адрес электронной почты" v-model="email">
            </div>
            <div class="sign-in__form-item">
                <p>Пароль</p>
                <input type="password" name="" id="" placeholder="Введите пароль" v-model="password">
            </div>
            <div class="sign-in__form-submit">
                <button :disabled="!computedValues" :class="{'sign-in__btn-active': computedValues}" @click="signIn">Войти</button>
                <router-link to="/forgot-password">Забыли пароль?</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/sotre';
import { useRouter } from 'vue-router';

// store & router
const router = useRouter()
const authStore = useAuthStore()

//page
useSeoMeta({
  title: 'Авторизация'
})


// states
let email = ref('')
let password = ref('')


//computeds
const computedValues = computed(() => {
  return email.value && password.value
})


//methods
const signIn = async () => {
  await authStore.fetchUserInfo({
    email: email.value, 
    password: password.value
  })
  window.location.href = '/'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/auth.scss';
</style>