<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Comuna</th>
            <th class="text-left">Confirmados</th>
            <th class="text-left">Población</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in comunas.data" :key="item.commune">
            <td>{{ item.commune }}</td>
            <td>{{ item.communeData }}</td>
            <td>{{ item.communeInfo.population }}</td>
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
          "https://chile-coronapi.herokuapp.com/api/v4/latest/communes?region_code=13"
        )
        .then((response) => {
          this.comunas = response
          console.log(this.comunas);
        })
        .catch((err) => reject(err));
    });
  },
};
</script>

<style>
</style>