<template>
  <v-row justify="space-between" class="mt-4">
    <v-col>
      <v-card class="pa-4" max-width="400">
        <v-card-title> Búsqueda por Pais </v-card-title>
        <v-divider></v-divider>
        <v-autocomplete
          :items="countrys"
          v-model="selectedCountry"
          return-object
          item-text="All.country"
        ></v-autocomplete>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="mx-auto" max-width="400" v-if="selectedCountry">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ selectedCountry.All.country }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              selectedCountry.All.capital_city
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-title>Confirmados</v-list-item-title>

            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ selectedCountry.All.confirmed }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Recuperados</v-list-item-title>

            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ selectedCountry.All.recovered }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Fallecidos</v-list-item-title>

            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ selectedCountry.All.deaths }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="mx-auto" max-width="400" v-if="selectedCountry">
        <v-card-title>Graficos</v-card-title>
        <v-select
          :items="status"
          v-model="selectedStatus"
          return-object
          item-text="name"
        ></v-select>
        <SearchChart v-if="loadedChart" :chartdata="grafics" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import SearchChart from "../components/Charts/SearchChart.vue";

export default {
  name: "Search",
  components: { SearchChart },

  data() {
    return {
      paises: {},
      loaded: false,
      loadedChart: false,
      selectedCountry: null,
      selectedStatus: null,
      pais: {},
      status: [
        { id: "confirmed", name: 'Confirmados' },
        { id: "deaths", name: 'Muertes' },
        { id: "recovered", name: 'Recuperados' }
      ],
      grafics: {},
    };
  },

  mounted() {
    return new Promise((resolve, reject) => {
      axios
        .get(" https://covid-api.mmediagroup.fr/v1/cases")
        .then((response) => {
          this.paises = response;
          this.loaded = true;
          console.log(this.paises.data);
        })
        .catch((err) => reject(err));
    });
  },

  computed: {
    countrys() {
      return this.paises.data ? Object.values(this.paises.data) : [];
    },
  },

  watch: {
    selectedCountry() {
      if (this.selectedCountry) {
        return new Promise((resolve, reject) => {
          axios
            .get(
              " https://covid-api.mmediagroup.fr/v1/cases?country=" +
                this.selectedCountry
            )
            .then((response) => {
              this.pais = response;
              console.log(this.paises.data);
            })
            .catch((err) => reject(err));
        });
      }
    },
    selectedStatus() {
      if (this.selectedStatus) {
        return new Promise((resolve, reject) => {
          axios
            .get(
              " https://covid-api.mmediagroup.fr/v1/history?country=" +
                this.selectedCountry.All.country + "&status=" + this.selectedStatus.id
            )
            .then((response) => {
              this.grafics = response;
              this.loadedChart = true;
              console.log(response);
            })
            .catch((err) => reject(err));
        });
      }
    },
  },
};
</script>

<style>
</style>