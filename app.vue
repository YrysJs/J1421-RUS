<template>
  <main class="main">
    <Header :auth="true"/>
    <div class="container">
      <h3 class="main-title">
        Портал отзывов об опыте работы в IT компаниях по всему миру
      </h3>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>

</script>

<style lang="scss">
@import './assets/css/global.scss';
</style>