<template>
  <div class="add-review">
    <div class="add-review-row-1"></div>
    <div class="add-review-row-2"></div>
    <div class="add-review-row-3">
        <div>
            <h3>Сайт</h3>
            <input type="text" v-model="postObj.website">
        </div>
        <div>
            <h3>Локация офиса</h3>
            <input type="text" v-model="postObj.location">
        </div>
        <div>
            <h3>Занимаемая должность</h3>
            <input type="text" v-model="postObj.position">
        </div>
    </div>
    <div class="add-review-row-4"></div>
    <div class="add-review-row-5"></div>
    <div class="add-review-row-6">
        <div class="negative">
            <h3>Из негативного =</h3>
            <textarea name="" id="" cols="30" rows="10" v-model="postObj.negative"></textarea>
        </div>
        <div class="positive">
            <h3>Особенно классно было:</h3>
            <textarea name="" id="" cols="30" rows="10" v-model="postObj.positive"></textarea>
        </div>
    </div>
    <div class="add-review-row-7">
        <h3>#hashtag</h3>
        <input type="text">
    </div>
    <div class="add-review-row-8">
        <span>Общее впечатление:</span>
        <button class="positive" @click="postObj.ensemble = 1">
            <span>Положительно</span>
            <img src="../../../assets/icon/positive.png" alt="">
        </button>
        <button class="neutral" @click="postObj.ensemble = 1">
            <span>Нейтрально</span>
            <img src="../../../assets/icon/neutral.png" alt="">
        </button>
        <button class="negative" @click="postObj.ensemble = 1">
            <span>Отрицательно</span>
            <img src="../../../assets/icon/negative.png" alt="">
        </button>
    </div>
    <button :disabled="allFieldsFilledExceptWorkTimeTo">Опубликовать</button>
  </div>
</template>

<script setup>
import { useAddReviewStore } from '../store/store';
import { ref, computed } from 'vue';

//store & props && router
const store = useAddReviewStore()

//page
useSeoMeta({
  title: 'Добавить отзыв'
})

//states
const postObj = ref({
    author: "",
    field_of_activity: "",
    title: "",
    website: "",
    location: "",
    position: "",
    work_time_from: "",
    work_time_to: "",
    body: "",
    negative: "",
    positive: "",
    ensemble: "",
    average_rating: 2.8333333333333335,
})

//methods
const addReview = () => {
    store.addReview()
}


//computed
const requiredFields = [
    "author",
    "field_of_activity",
    "title",
    "website",
    "location",
    "position",
    "work_time_from",
    "body",
    "negative",
    "positive",
    "ensemble",
    "average_rating"
];
const allFieldsFilledExceptWorkTimeTo = computed(() => {
    const post = postObj.value;
    return requiredFields.every(field => field !== "work_time_to" || post[field] !== "");
});
</script>

<style lang="scss" scoped>
@import '../../../assets/css/add-review/add.review.scss';
</style>