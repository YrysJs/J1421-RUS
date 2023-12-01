<template>
  <div class="main-card">
    <div class="main-card__left">
        <div class="main-card__top">
            <div class="main-card__user">
                <img src="https://s3-alpha-sig.figma.com/img/c790/3eb4/77159e3aeb2cf39ac02f2a144d28f99b?Expires=1701043200&Signature=gps4fKWHYm6L654IaqMG4lHaSpeYRCr5beE5l6HpBypi39Ff3SddE5QWqg7~EeFxXGqJ6E5PB6Accfogwv-hWi0jNP7lgcOfAv68Nq5KWZPXaBfdyUxkRO9EFWE~23Vfmu4sD-xiPtbQQ0DmT9N3aAHSbjouHsjsT0xLPPEpiGCS~~CgOpXnHtIvTcXTtpXFRTQT60uxsWblyzFVwXXI8f3E5kU-mG~P8bV-FTMuGqnb7c0JJALBhxuMaZQ-TX5MjiN7zjBUrbwIBrodh1Kg3wjAmB9SPdKIxlQD7qhj61VmCwBd2ILxH4~16hJiVgGTGfiG8yt2P~EGJExbaD6KbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                <span class="main-card__user-name">Иван Петрович Карамелька</span>
                <div class="main-card__user-position">
                    <p>Data Scientist</p>
                    <p>с 12.2022 по 11.2023</p>
                </div>
                <div class="main-card__line"></div>
            </div>
            <div class="main-card__date">
                Добавлено: <span>17.04.2022</span>
            </div>
        </div>
        <div class="main-card__center" :class='{"main-card__center-full": cardState}'>
            <h3>
                О том, как я 3 месяца трудился в Яндекс, и что из этого получилось. Плюсы и минусы компании, социальный пакет, и реальность “удаленки” на позиции Data Scientist.
            </h3>
            <p>
                Вообще считаю Яндекс нормальной компанией, однозначно есть огромные плюсы, но и  по факту неизвестно есть ли все "плюшки", которые обещают. На первом собеседовании все доброжелательные, красиво рисуют работу у них. На Вообще считаю Яндекс нормальной компанией, однозначно есть огромные плюсы, но и  по факту неизвестно есть ли все "плюшки", которые обещают. На первом собеседовании все доброжелательные, красиво рисуют работу у них. На 
            </p>
            <div class="main-card__recall">
                <div class="main-card__recall-negative">
                    <h3>Из негативного =</h3>
                    <p>не было особых минусов</p>
                </div>
                <div class="main-card__recall-positive">
                    <h3>Особенно классно было:</h3>
                    <p>
                        Классно было все. Особенно печеньки в офисе! Приобрел много единомышленников и друзей! иорлвыоримридор Особенно печеньки в офисе!Классно было все. Особенно печеньки в офисе! Приобрел много единомышленников и друзей! иорлвыоримридор Особенно печеньки в офисе!  
                    </p>
                </div>
            </div>
        </div>
        <div class="main-card__bottom">
            <div>
                <button> 545 <img src="../../../assets/icon/view.svg" alt=""></button>
                <button> 545 <img src="../../../assets/icon/like.svg" alt=""></button>
                <button @click="showComment"> 545 <img src="../../../assets/icon/comment.svg" alt=""></button>
            </div>
            <button class="main-card__bottom-more" @click="showCard">
                {{ !cardState ? 'Читать далее': 'Скрыть' }}
            </button>
        </div>
    </div>
    <div class="main-card__right">
        <div class="main-card__right-item">
            Яндекс.Такси (Яндекс GO)
        </div>
        <div class="main-card__right-item">
            <span>Общая оценка компании</span>
            <span class="total">4.5 </span>
            <div class="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none">
                    <path d="M18.072 1.31085C18.4079 0.474382 19.5921 0.474381 19.928 1.31085L24.1972 11.9421C24.3402 12.2983 24.6745 12.5412 25.0575 12.5672L36.4877 13.3422C37.387 13.4032 37.7529 14.5293 37.0612 15.1073L28.2695 22.4528C27.975 22.6989 27.8473 23.0919 27.9409 23.4642L30.736 34.5744C30.9559 35.4485 29.9979 36.1446 29.2345 35.6653L19.5317 29.5738C19.2066 29.3697 18.7934 29.3697 18.4683 29.5738L8.76554 35.6653C8.00212 36.1446 7.04413 35.4485 7.26405 34.5744L10.0591 23.4642C10.1527 23.0919 10.025 22.6989 9.73046 22.4528L0.938804 15.1073C0.247074 14.5293 0.612992 13.4032 1.51232 13.3422L12.9425 12.5672C13.3255 12.5412 13.6598 12.2983 13.8028 11.9421L18.072 1.31085Z" fill="#FF9700"/>
                </svg>
            </div>
        </div>
        <div class="main-card__right-item">
            <span>Оценка работодателя сотрудником</span>
            <span class="total">4.5 </span>
            <div class="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none">
                    <path d="M18.072 1.31085C18.4079 0.474382 19.5921 0.474381 19.928 1.31085L24.1972 11.9421C24.3402 12.2983 24.6745 12.5412 25.0575 12.5672L36.4877 13.3422C37.387 13.4032 37.7529 14.5293 37.0612 15.1073L28.2695 22.4528C27.975 22.6989 27.8473 23.0919 27.9409 23.4642L30.736 34.5744C30.9559 35.4485 29.9979 36.1446 29.2345 35.6653L19.5317 29.5738C19.2066 29.3697 18.7934 29.3697 18.4683 29.5738L8.76554 35.6653C8.00212 36.1446 7.04413 35.4485 7.26405 34.5744L10.0591 23.4642C10.1527 23.0919 10.025 22.6989 9.73046 22.4528L0.938804 15.1073C0.247074 14.5293 0.612992 13.4032 1.51232 13.3422L12.9425 12.5672C13.3255 12.5412 13.6598 12.2983 13.8028 11.9421L18.072 1.31085Z" fill="#2845DB"/>
                </svg>
            </div>
        </div>
        <div class="main-card__right-item hashtag">
            <div class="main-card__right-item-hashtag" style="--my-color: #11EFE2">#friendly </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #57C2FF">#рекомендую </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #D09FD3">#Data Scientist </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #FF6C43">#удаленка </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #FFBC39">#рекомендую </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #00BD0A">#friendly </div>
            <div class="main-card__right-item-hashtag" style="--my-color: #6ABD00">#interested  </div>
        </div>
    </div>
    <div class="main-card__comment" v-if="commentState">
        <div class="main-card__comment-item">
            <div class="main-card__comment-item__top">
                <div class="main-card__comment-item__top-left">
                    <div class="main-card__user">
                        <img src="https://s3-alpha-sig.figma.com/img/c790/3eb4/77159e3aeb2cf39ac02f2a144d28f99b?Expires=1701043200&Signature=gps4fKWHYm6L654IaqMG4lHaSpeYRCr5beE5l6HpBypi39Ff3SddE5QWqg7~EeFxXGqJ6E5PB6Accfogwv-hWi0jNP7lgcOfAv68Nq5KWZPXaBfdyUxkRO9EFWE~23Vfmu4sD-xiPtbQQ0DmT9N3aAHSbjouHsjsT0xLPPEpiGCS~~CgOpXnHtIvTcXTtpXFRTQT60uxsWblyzFVwXXI8f3E5kU-mG~P8bV-FTMuGqnb7c0JJALBhxuMaZQ-TX5MjiN7zjBUrbwIBrodh1Kg3wjAmB9SPdKIxlQD7qhj61VmCwBd2ILxH4~16hJiVgGTGfiG8yt2P~EGJExbaD6KbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                        <span class="main-card__user-name">Иван Петрович Карамелька</span>
                        <div class="main-card__line"></div>
                    </div>
                </div>
                <div class="main-card__comment-item__top-right">
                    17.04.2022
                </div>
            </div>
            <div class="main-card__comment-item__center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil neque dicta necessitatibus facere veritatis repellat illo, voluptas sapiente? Corporis praesentium dolore ut delectus eos, eum soluta in illo quia quisquam!
            </div>
            <div class="main-card__comment-item__bottom">
                <button>Ответить</button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M4 8.98717C4 8.5794 4.2793 8.21455 4.68482 8.0409C5.57053 7.66142 7.07929 6.89904 7.75982 5.86839C8.63693 4.53972 8.80236 2.13942 8.82921 1.58971C8.83297 1.51264 8.83083 1.43557 8.84211 1.35948C8.98766 0.406873 11.0121 1.51947 11.7882 2.69596C12.2098 3.33396 12.2635 4.17243 12.2195 4.8275C12.1717 5.52793 11.9456 6.20446 11.7237 6.87661L11.2511 8.30918H17.0825C17.2485 8.30917 17.4122 8.34408 17.5609 8.41118C17.7095 8.47828 17.8389 8.57575 17.9391 8.69592C18.0393 8.81609 18.1074 8.95571 18.1382 9.10382C18.169 9.25193 18.1616 9.4045 18.1165 9.54957L15.2322 18.8249C15.1685 19.0295 15.033 19.2096 14.8463 19.3378C14.6595 19.466 14.4318 19.5353 14.1977 19.5351H5.07423C4.78933 19.5351 4.51609 19.4323 4.31464 19.2494C4.11318 19.0664 4 18.8183 4 18.5596V8.98717Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 9.3916L1 18.9739" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// states
const cardState = ref(false)
const commentState = ref(false)

//methods
const showCard = () => {
    cardState.value = !cardState.value
}
const showComment = () => {
    commentState.value = !commentState.value
}

</script>

<style lang="scss" scoped>
@import '../../../assets/css/main/main.scss';
</style>