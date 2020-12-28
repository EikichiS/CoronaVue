<template>
  <v-app>
    <app-header />
    <dashboard />
  </v-app>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import Dashboard from "./Dashboard/Dashboard.vue";
export default {

  components: { 
      AppHeader,
      Dashboard,
  },
};
</script>

<style>
</style>