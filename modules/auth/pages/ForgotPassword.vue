<template>
    <div class="forgot-page">
      <div class="forgot">
        <h3>Забыли пароль</h3>
        <div class="forgot-wrapper">
          <div class="forgot-text">
            <p>
              Укажите адрес электронной почты Вашего аккаунта, мы отправим Вам письмо с новым паролем и дальнейшими инструкциями.
            </p>
          </div>
          <div class="forgot-input">
            <p>
              E-mail
            </p>
            <input type="text" placeholder="Введите адрес электронной почты" v-model="email">
          </div>
          <div class="forgot-btn">
            <button :disabled="!computedValue" :class="{'sign-in__btn-active': computedValue}">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, computed } from 'vue';
useSeoMeta({
  title: 'сброс пароля'
})


let email = ref('')

const computedValue = computed(() => {
    return email.value
})

</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/auth.scss';
</style>