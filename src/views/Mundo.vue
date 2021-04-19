<template>
  <div v-if="loaded">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Pais</th>
            <th class="text-left">Población</th>
            <th class="text-left">Confirmados</th>
            <th class="text-left">Porcentaje Contagiados</th>
            <th class="text-left">Recuperados</th>
            <th class="text-left">Muertes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in  paises.data" v-bind:key="item.id">
            <td>{{ item.All.country }}</td>
            <td>{{ item.All.population }}</td>
            <td>{{ item.All.confirmed  }}</td>
            <td>{{ (item.All.confirmed*100/item.All.population).toFixed(2) }} %</td>
            <td>{{ item.All.recovered }}</td>
            <td>{{ item.All.deaths }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Mundo",

  data() {
    return {
      paises: {},
      loaded: false,
    };
  },

  mounted() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          " https://covid-api.mmediagroup.fr/v1/cases"
        )
        .then((response) => {
          this.paises = response
          this.loaded = true;
        })
        .catch((err) => reject(err));
    });
  },
};
</script>

<style>
</style>