<template>
  <v-app>
    <app-header />
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