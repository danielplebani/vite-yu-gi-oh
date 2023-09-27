import {reactive} from 'vue';
import axios from 'axios';

export const archetype = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    characters: null,
  
    connectAPI(){
      axios
        .get(this.base_url)
        .then(response => {
          this.characters = response.data;
        })
        .catch(error => {
          console.log('Error:');
          console.error(error);
        })
    }
  })