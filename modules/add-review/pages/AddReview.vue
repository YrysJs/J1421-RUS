<template>
  <div class="add-review">
    <div class="add-review-row-1">
        <div>
            <h3>Сфера деятельности</h3>
            <input type="text" list="act" v-model="postObj.field_of_activity">
            <datalist id="act">
                <template v-for="(item, index) in storeMain.getActivity">
                    <option :value="index">{{ item }}</option>
                </template>
            </datalist>
        </div>
    </div>
    <div class="add-review-row-2">
        <div>
            <h3>Название работодателя</h3>
            <input type="text" v-model="postObj.company">
        </div>
        <div>
            <h3>Срок работы:</h3>
            <div class="add-review-row-2__date">
                <span>c</span> 
                <input type="date" v-model="postObj.work_time_from"> <br>
                <span>по</span>
                <input type="date" v-model="postObj.work_time_to">
            </div>
        </div>
    </div>
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
    <div class="add-review-row-4">
        <div class="add-review-row-4__left">
            <h3>Опишите Ваши впечатления:</h3>
            <textarea name="" id="" cols="30" rows="10" v-model="postObj.body"></textarea>
        </div>
        <div class="add-review-row-4__right">
            <h3>Оцените:</h3>
            <div>
                <h3></h3>
                <div class="add-review-row-4__right-rate">
                    <p>Уровень оплаты труда:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'salary')" :class="{ 'filled': index < ratingObj.salary }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Дружелюбность коллектива:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'team')" :class="{ 'filled': index < ratingObj.team }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Условия проф. развития:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'education')" :class="{ 'filled': index < ratingObj.education }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Руководство:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'management')" :class="{ 'filled': index < ratingObj.management }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Социальный пакет:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'social_package')" :class="{ 'filled': index < ratingObj.social_package }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Комфортность офиса:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'office_comfort')" :class="{ 'filled': index < ratingObj.office_comfort }">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div class="add-review-row-4__right-rate">
                    <p>Общее впечатление:</p>
                    <div id="star-rating">
                        <span v-for="(star, index) in stars" :key="index" @click="rate(index + 1, 'article')" :class="{ 'filled': index < ratingObj.article }">
                            &#9733;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="add-review-row-5">
        <h3>Заголовок вашего отзыва:</h3>
        <textarea name="" id="" cols="30" rows="10" v-model="postObj.title"></textarea>
    </div>
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
        <button class="positive" @click="postObj.ensemble = 'POSITIVELY'">
            <span>Положительно</span>
            <img src="../../../assets/icon/positive.png" alt="">
        </button>
        <button class="neutral" @click="postObj.ensemble = 'NEUTRAL'">
            <span>Нейтрально</span>
            <img src="../../../assets/icon/neutral.png" alt="">
        </button>
        <button class="negative" @click="postObj.ensemble = 'NEGATIVE'">
            <span>Отрицательно</span>
            <img src="../../../assets/icon/negative.png" alt="">
        </button>
    </div>
    <button @click="addReview" :disabled="!isAllFieldsFilledExceptWorkTimeTo">Опубликовать</button>
  </div>
</template>

<script setup>
import { useAddReviewStore } from '../store/store';
import { useMainStore } from '../../main/store/store'
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

//store & props && router
const store = useAddReviewStore()
const storeMain = useMainStore()
const router = useRouter()
//page
useSeoMeta({
  title: 'Добавить отзыв'
})


//lifecycle
onMounted( () => {
    storeMain.fetchFields()
})


//states
const postObj = ref({
    field_of_activity: "",
    company: "",
    title: "",
    website: "",
    location: "",
    position: "",
    work_time_from: null,
    work_time_to: null,
    body: "",
    negative: "",
    positive: "",
    ensemble: "",
})
const ratingObj = ref({
    salary: 1,
    team: 1,
    education: 1,
    management: 1,
    social_package: 1,
    office_comfort: 1,
    article: 1,
    post: 2
})
const stars = 5

//methods
const addReview = async () => {
    await store.addReview(postObj.value, ratingObj.value)
    await router.push('/')
}
const rate = (rating, key) => {
    ratingObj.value[key] = rating
}

//computed
const isAllFieldsFilledExceptWorkTimeTo = computed(() => {
  const { work_time_to, ...otherFields } = postObj.value;
  for (const key in otherFields) {
    if (!otherFields[key]) {
      return false;
    }
  }
  return true;
});
</script>

<style lang="scss" scoped>
@import '../../../assets/css/add-review/add.review.scss';
</style>