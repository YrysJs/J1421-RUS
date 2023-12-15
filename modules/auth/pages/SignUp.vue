<template>
  <div class="signup-page">
    <div class="sign-up">
        <h3>Регистрация</h3>
        <form class="sign-up__form" @submit="createUser">
          <div class="sign-up__item">
            <label class="sign-up__image-prev" for="image">
              <img src="https://img-new.cgtrader.com/uploads/user/136501/forum_images/1c94c4c9-e960-4505-993b-5bfc48f5a485.png" alt="">
            </label>
            <input id="image" style="display: none;" type="file" accept="jpeg">
          </div>
          <div class="sign-up__item">
            <p>E-mail</p>
            <input type="text" placeholder="Введите адрес электронной почты" v-model="email">
          </div>
          <div class="sign-up__item">
            <p>Пароль</p>
            <input type="password" placeholder="Введите пароль" v-model="password">
          </div>
          <div class="sign-up__item">
            <p>ФИО</p>
            <input type="text" placeholder="Введите данные" v-model="full_name">
          </div>
          <div class="sign-up__item">
            <p>Логин (ваше имя на сайте)</p>
            <input type="text" placeholder="Введите данные" v-model="username">
          </div>
          <div class="sign-up__item">
            <button :disabled="!computedValues" :class="{'sign-in__btn-active': computedValues}">
              Зарегестрироваться
            </button>
          </div>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/sotre';

//store
const authStore = useAuthStore()

//page
useSeoMeta({
  title: 'Регистрация'
})

//states
let email = ref('')
let password = ref('')
let full_name = ref('')
let username = ref('')

// computed
const computedValues = computed(() => {
  return email.value && password.value && full_name.value && username.value
})

//methods
const createUser = async (e) => {
  e.preventDefault()
  await authStore.createUser({
    email: email.value,
    password: password.value,
    // full_name: full_name.value,
    username: username.value
  })

  window.location.href = '/'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/auth.scss';
</style>