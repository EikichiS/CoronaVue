import Vue from 'vue';
import axios from 'axios';

export default {

    getLastDayData: function () {
      return new Promise((resolve, reject) => {
        axios
          .get('https://chile-coronapi.herokuapp.com/api/v4/latest/communes?region_code=13')
          .then(response => {
            resolve(Vue._.get(response, 'data'))
          })
          .catch(err => reject(err));
    })
  }
}