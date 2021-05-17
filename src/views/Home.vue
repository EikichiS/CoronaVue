<template>
  <div class="container">
    <HomeChart
      v-if="loaded"
      :chartdata="chartdata"/>
  </div>
</template>

<script>
import axios from 'axios';
import HomeChart from '../components/Charts/HomeChart.vue';


export default {
  name: "Home",
  components: { HomeChart},

   data() {
    return {
      comunas: {},
      loaded: false,
      chartdata: null
    };
  },
  mounted() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://covid-api.mmediagroup.fr/v1/cases?country=Chile")
        .then((response) => {
          this.comunas = response;
          this.chartdata = this.comunas;
          this.loaded = true;
        })
        .catch((err) => reject(err));
    });
  },
};
</script>

<style>
</style>