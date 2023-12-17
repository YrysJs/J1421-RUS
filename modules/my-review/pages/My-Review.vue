<template>
  <div class="my-review">
    <h3>Мои отзывы</h3>
    <div class="my-review__container">
      <h4 v-if="!store.getMyReview.length">Вы пока не написали отзыв</h4>
      <template v-else>
        <MyReviewCard v-for="(item, index) of store.getMyReview" :key="index" :post="item"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import MainCard from '../components/MyReviewCard.vue';
import { useMyReviewStore } from '../store/store'
import { ref, onMounted } from 'vue'

//store & props
const store = useMyReviewStore()

//lifecycle
onMounted( () => {
  store.fetchMyReview()
})

//page
useSeoMeta({
  title: 'Портал отзывов об опыте работы в IT компаниях по всему миру'
})


//states
//methods


</script>

<style lang="scss" scoped>
@import '../../../assets/css/main/main.scss';
.my-review {
  h3 {
    color: #FF9700;
    font-family: JetBrains Mono;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.44px;
    text-transform: uppercase;
  }
  h4 {
    color: #fff;
    font-family: JetBrains Mono;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 1.44px;
    text-align: center;
    margin: 100px auto;
    text-transform: uppercase;
  }
}
</style>