<template>
  <div class="modal">
    <div class="modal-wrapper">
        <div class="modal-close" @click="handleClose">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L18.585 19.9992L10.2929 28.2913C9.90237 28.6819 9.90237 29.315 10.2929 29.7056C10.6834 30.0961 11.3166 30.0961 11.7071 29.7056L19.9992 21.4134L27.9001 29.3143L28.2913 29.7056C28.6819 30.0961 29.315 30.0961 29.7056 29.7056C30.0961 29.315 30.0961 28.6819 29.7056 28.2913L29.3143 27.9001L21.4134 19.9992L29.7056 11.7071C30.0961 11.3166 30.0961 10.6834 29.7056 10.2929C29.315 9.90237 28.6819 9.90237 28.2913 10.2929L19.9992 18.585L11.7071 10.2929Z" fill="white"/>
            </svg>
        </div>
        <slot>null</slot>
    </div>
  </div>
</template>

<script setup>
 import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 9999;

    &-wrapper {
        padding: 60px;
        border-radius: 20px;
        background: #FF9700;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }

    &-close {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    h3 {
        color: #FFF;
        text-align: center;
        font-family: JetBrains Mono;
        font-size: 24px;
        font-weight: 500;
        line-height: 38px; /* 116.667% */
        letter-spacing: 1.92px;
        text-transform: uppercase;
        max-width: 70%;
        margin: auto;
    }

    button {
        width: 214px;
        height: 46px;
        padding: 12px 39px 13px 40px;
        display: block;
        margin: 0px auto;
        margin-top: 30px;

        border-radius: 30px;
        border: 1px solid #5B5B5B;
        background: #FFF;

        color: #3A3A3A;
        font-family: JetBrains Mono;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.8px;
    }
}
</style>