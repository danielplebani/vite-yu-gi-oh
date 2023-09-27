<script>
  import app_header from './components/app_header.vue';
  import app_main from './components/app_main.vue';

  export default{
    components:{
      app_header,
      app_main,
    }
  }
</script>

<template>
  <app_header id="app_header"></app_header>
  <app_main id="app_main"></app_main>
</template>

<style lang="scss" scoped>
</style>
