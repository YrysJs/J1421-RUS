<template>
  <div>
    <div class="main-search">
      <div class="main-search__left">
        <h3>
          Найти отзыв по работодателю: 
        </h3>
        <form>
          <input type="search">
        </form>
        <button>Добавить работодателя</button>
      </div>
      <div class="main-search__right">
        <button>
          Написать отзыв
        </button>
      </div>
    </div>
    <div class="main-cheaps">
      <button @click="sliderScroled('-')">&#8701;</button>
      <div ref="slider">
        <button v-for="item of fakeCheaps" :key="item">
          {{ item }}
        </button>
      </div>
      <button @click="sliderScroled('+')">&#8702;</button>
    </div>
    <MainCard />
  </div>
</template>

<script setup>
import MainCard from '../components/MainCard.vue';
useSeoMeta({
  title: 'Портал отзывов об опыте работы в IT компаниях по всему миру'
})

//states
const slider = ref(null)
const fakeCheaps = ['front1','front2','front3','front4','front5','front6','front7','front8','front9','front10','front11',]

//methods
const sliderScroled = (value) => {
  if (value === "+") {
    slider.value.scrollLeft += 450
  } else {
    slider.value.scrollLeft -= 450;
  }
}

</script>

<style lang="scss" scoped>
@import '../../../assets/css/main/main.scss';
</style>