<script>

import main_cards from './main_cards.vue';
import app_search from './app_search.vue';

export default{
  name: 'app_main',

  components:{
    main_cards,
    app_search
  }
}
</script>

<template>
  <div class="py-5">
    <app_search id="app_search"></app_search>
    <main_cards id="main_cards"></main_cards>
  </div>
  
</template>

<style lang="scss" scoped>
</style>