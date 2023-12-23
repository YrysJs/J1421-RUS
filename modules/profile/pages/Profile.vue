<template>
  <div class="signup-page">
    <div class="sign-up">
        <h3>Мои данные</h3>
        <form class="sign-up__form">
          <div class="sign-up__item">
            <label class="sign-up__image-prev" for="image">
              <img v-if="profile.getProfile.avatar" :src="profile.getProfile.avatar" alt="">
              <img v-else src="https://img-new.cgtrader.com/uploads/user/136501/forum_images/1c94c4c9-e960-4505-993b-5bfc48f5a485.png" alt="">
            </label>
            <input id="image" style="display: none;" type="file" accept="img/*" @change="uploadFile">
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
            <input type="text" placeholder="Введите данные" v-model="login">
          </div>
          <div class="sign-up__item">
            <button :disabled="!computedValues" :class="{'sign-in__btn-active': computedValues}">
              Изменить
            </button>
          </div>
        </form>
    </div>
  </div>
  <div class="profile-action">
    <button>Выйти из аккаунта</button>
    <button @click="modalAction(true)">Удалить аккаунт</button>
  </div>
  <div class="profile-modal" v-show="modal">
    <button class="profile-modal__close" @click="modalAction(false)">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L18.585 19.9992L10.2929 28.2913C9.90237 28.6819 9.90237 29.315 10.2929 29.7056C10.6834 30.0961 11.3166 30.0961 11.7071 29.7056L19.9992 21.4134L27.9001 29.3143L28.2913 29.7056C28.6819 30.0961 29.315 30.0961 29.7056 29.7056C30.0961 29.315 30.0961 28.6819 29.7056 28.2913L29.3143 27.9001L21.4134 19.9992L29.7056 11.7071C30.0961 11.3166 30.0961 10.6834 29.7056 10.2929C29.315 9.90237 28.6819 9.90237 28.2913 10.2929L19.9992 18.585L11.7071 10.2929Z" fill="#5B5B5B"/>
      </svg>
    </button>
    <h3>удаление аккаунта</h3>
    <h4>Вы действительно хотите удалить аккаунт?</h4>
    <div class="profile-modal__action">
      <button>Удалить аккаунт</button>
      <button @click="modalAction(false)">Передумал</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted  } from 'vue';
import { useProfileStore } from '../store/store'

//store & props
const profile = useProfileStore()

//page
useSeoMeta({
  title: 'Мой профиль'
})
definePageMeta({
  middleware: [
    'auth',
  ]
});

//lifecycle
onMounted( () => {
  profile.fetchUserProfile()
})

// states
let avatar = ref(null)
let email = ref('')
let password = ref('')
let full_name = ref('')
let login = ref('')
let modal = ref(false)


// computed
const computedValues = computed(() => {
  return email.value && password.value && full_name.value && login.value
})


//methods
const modalAction = (val) => {
  modal.value = val
}
const uploadFile = (event) => {
  avatar.value = event.target.files[0];

  let formData = new FormData()
      formData.append('avatar', avatar.value)

  profile.uploadProfileAvatar(formData)
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/auth/auth.scss';
@import '../../../assets/css/profile/profile.scss';
</style>