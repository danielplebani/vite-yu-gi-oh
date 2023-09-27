<script>

import { archetype } from '../archetype.js';
import { state } from '../state.js';

export default {
  name: 'app_search',

  data(){
    return{
      archetype,
      state,
      archetypeSelected: 'all'
    }
  },

  methods:{
    searchArchetype(){
      if (this.archetypeSelected == 'all') {
        state.base_url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0'
        state.connectAPI();
      } else {
        state.base_url = state.base_url + `&archetype=${this.archetypeSelected}`
        state.connectAPI();
      }
      
    },
    
  },

  created() {
    archetype.connectAPI();
  }
}
</script>

<template>
  <div class="container mb-4">
    <select name="archetype" id="archetype" class="px-2 py-1 border-0" @change="searchArchetype()" v-model="archetypeSelected">
        <option value="all">all cards</option>
        <option v-for="character in archetype.characters" :value="character.archetype_name">{{character.archetype_name}}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select{
  border-radius: 5px;
}
</style>