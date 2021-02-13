<template>
  <v-app>
    <app-header />
    <div>
      <v-tabs>
        <v-tab><router-link to="/Dashboard">Chile</router-link></v-tab>
        <v-tab><router-link to="/Mundo">Mundo</router-link></v-tab>
      </v-tabs>
    </div>
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "./AppHeader.vue";
export default {
  components: {
      AppHeader
  },
};
</script>

<style>
</style>