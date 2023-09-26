import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    characters: null,
    info: null,
    loading: true,
  
    fetchData() {
      axios
        .get(this.base_url)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('Error:');
          console.error(error);
        })
    }
  })