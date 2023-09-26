import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    characters: null,
  
    connectAPI(){
      axios
        .get(this.base_url)
        .then(response => {
          console.log(response.data.data);
          this.characters = response.data.data;
        })
        .catch(error => {
          console.log('Error:');
          console.error(error);
        })
    }
  })