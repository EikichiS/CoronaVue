<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Region</th>
            <th class="text-left">Confirmados</th>
            <th class="text-left">Recuperados</th>
            <th class="text-left">Muertes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, name) in  comunas.data" v-bind:key="item.id">
            <td>{{ name }}</td>
            <td>{{ item.confirmed  }}</td>
            <td>{{ item.recovered }}</td>
            <td>{{ item.deaths }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Dashboard",

  data() {
    return {
      comunas: {},
    };
  },

  mounted() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://covid-api.mmediagroup.fr/v1/cases?country=Chile"
        )
        .then((response) => {
          this.comunas = response
        })
        .catch((err) => reject(err));
    });
  },
};
</script>

<style>
</style>