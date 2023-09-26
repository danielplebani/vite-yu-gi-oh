<script>

import app_cards from './app_cards.vue'

export default{
  name: 'app_main',

  components:{
    app_cards
  }
}
</script>

<template>
  <div class="py-5">

    <div class="container bg-white p-5">
      <div class="found_cards p-3"><h5>Found 39 cards</h5></div>

      <app_cards id="app_cards"></app_cards>
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
.found_cards{
  background-color: #212429;
  color: white;
}
</style>