<template>
  <div>
    <div class="main-search">
      <div class="main-search__left">
        <h3>
          Найти отзыв по работодателю: 
        </h3>
        <form @submit.prevent="search">
          <input type="search" v-model="queryState.search" @input="search">
        </form>
        <button>Добавить работодателя</button>
      </div>
      <div class="main-search__right">
        <button @click="addReview">
          Написать отзыв
        </button>
      </div>
    </div>
    <Modal @close="closeModal" v-if="modalState">
      <h3>Чтобы оставить отзыв требуется регистрация, это займет всего 30 секунд</h3>
      <button>Регистрирация</button>
    </Modal>
    <!-- <div class="main-cheaps">
      <button @click="sliderScroled('-')">&#8701;</button>
      <div ref="slider">
        <button v-for="item of fakeCheaps" :key="item">
          {{ item }}
        </button>
      </div>
      <button @click="sliderScroled('+')">&#8702;</button>
    </div> -->
    <div class="main-filters">
      <button @click="filterState = !filterState">
        Фильтры 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
          <path d="M19 1L10 10L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button @click="sortingState = !sortingState">
        Сортировка
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
          <line x1="2" y1="3" x2="24" y2="3" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <line x1="8" y1="9" x2="24" y2="9" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <line x1="14" y1="15" x2="24" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="main-sorting" v-if="sortingState">
        <button @click="selectedSortType('created_at')" :class="{'main-sorting__active': queryState.ordering == 'created_at'}">Сначала новые</button>
        <button @click="selectedSortType('-created_at')" :class="{'main-sorting__active': queryState.ordering == '-created_at'}">Сначала популярные</button>
      </div>
    </div>
    
    <div class="main-filter" v-show="filterState">
      <h3>Найти отзыв: </h3>
      <div class="main-filter__close" @click="filterState = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L18.585 19.9992L10.2929 28.2913C9.90237 28.6819 9.90237 29.315 10.2929 29.7056C10.6834 30.0961 11.3166 30.0961 11.7071 29.7056L19.9992 21.4134L27.9001 29.3143L28.2913 29.7056C28.6819 30.0961 29.315 30.0961 29.7056 29.7056C30.0961 29.315 30.0961 28.6819 29.7056 28.2913L29.3143 27.9001L21.4134 19.9992L29.7056 11.7071C30.0961 11.3166 30.0961 10.6834 29.7056 10.2929C29.315 9.90237 28.6819 9.90237 28.2913 10.2929L19.9992 18.585L11.7071 10.2929Z" fill="#5B5B5B"/>
        </svg>
      </div>
      <div class="main-filter__container">
        <div class="main-filter__left">
          <div>
            <span>По сфере деятельности</span> <input type="text" :class="{'main-filter__notnull': queryState.field_of_activity}" v-model="queryState.field_of_activity">
          </div>
          <div>
            <span>По должности</span> <input type="text" :class="{'main-filter__notnull': queryState.position}" v-model="queryState.position">
          </div>
          <div>
            <span>По локации </span> <input type="text" :class="{'main-filter__notnull': queryState.location}" v-model="queryState.location">
          </div>
        </div>
        <div class="main-filter__right">
          <button @click="queryState.rating = 1" :class="{'main-filter__hight': queryState.rating == 1}">Высокая оценка</button>
          <button @click="queryState.rating = 2" :class="{'main-filter__low': queryState.rating == 2}">Низкая оценка</button>
        </div>
      </div>
      <div class="main-filter_result">

      </div>
      <button class="main-filter__apply" @click="search">Найти</button>
    </div>
    <template v-for="(item, index) of storeMain.getReviews" :key="index">
      <MainCard :post="item"/>
    </template>
  </div>
</template>

<script setup>
import MainCard from '../components/MainCard.vue';
import Modal from '~/components/Modal.vue';
import { useMainStore } from '../store/store'
import { useAuthStore } from '~/modules/auth/store/sotre';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

//store & props && router
const storeMain = useMainStore()
const storeAuth = useAuthStore()
const router = useRouter()

//lifecycle
onMounted( () => {
  const currentQuery = router.currentRoute.value.query;
  console.log(currentQuery);

  storeMain.fetchReviews(currentQuery)
})

//page
useSeoMeta({
  title: 'Портал отзывов об опыте работы в IT компаниях по всему миру'
})


//states
const slider = ref(null)
const fakeCheaps = ['front1','front2','front3','front4','front5','front6','front7','front8','front9','front10','front11',]
const modalState = ref(false)
const filterState = ref(false)
const sortingState = ref(false)
const queryState = ref({
  search: '',
  field_of_activity: '',
  position: '',
  location: '',
  rating: '',
  ordering: ''
})

//methods
const sliderScroled = (value) => {
  if (value === "+") {
    slider.value.scrollLeft += 450
  } else {
    slider.value.scrollLeft -= 450;
  }
}
const search = () => {
  filterState.value = false
  const currentQuery = router.currentRoute.value.query;

  queryFormated()
}

const addReview = () => {
  if (storeAuth.user) {
    router.push('/add-review')
  } else {
    modalState.value = true
  }
}
const closeModal = () => {
  modalState.value = false
}
const selectedSortType = (val) => {
  queryState.value.ordering = val

  sortingState.value = false

  queryFormated()
}




// helpers
function queryFormated () {
  const currentQuery = router.currentRoute.value.query;

  const updatedQuery = { ...currentQuery };

  for (const key in queryState.value) {
    if (queryState.value[key] !== '') {
      updatedQuery[key] = queryState.value[key];
    } else {
      delete updatedQuery[key];
    }
  }

  router.push({ query: updatedQuery });

  storeMain.fetchSearchResults(updatedQuery);
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/main/main.scss';
</style>