<template>
  <v-app>
    <app-header />
    <v-breadcrumbs large light divider="/" class="justify-space-between">
     <v-breadcrumbs-item>
        <router-link to="/">Home</router-link>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item>
        <router-link to="/Dashboard">Chile</router-link>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item>
        <router-link to="/Mundo">Mundo</router-link>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item>
        <router-link to="/Search">Buscar</router-link>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>