<script>

import { archetype } from '../archetype.js';
import { state } from '../state.js';

export default {
  name: 'app_search',

  data(){
    return{
      archetype,
      state
    }
  },

  methods:{
    searchArchetype(){
      if (this.archetype.characters.archetype_name) {
        const urlArchetype = this.state.base_url + `&archetype=${this.archetype.characters.archetype_name}`
        console.log(urlArchetype);
      }  else{
        console.log('ciaooooo');
      }
    }
    
  },

  created() {
    archetype.connectAPI();
  }
  
  
}
</script>

<template>
  <div class="container mb-4">
    <select name="archetype" id="archetype" class="px-2 py-1 border-0" @change="searchArchetype()">
        <option v-for="character in archetype.characters" :value="character.archetype_name">{{character.archetype_name}}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select{
  width: 300px;
  border-radius: 5px;
}
</style>