<script>

import { state } from "../state.js";

export default{
  name: 'app_cards',

  data(){
    return{
        state
    }
  },

  created() {
    state.fetchData()
  }
}
</script>


<template>
</template>


<style lang="scss" scoped>
</style>