<template>
  <div>
    <v-app-bar color="white" dense>
      <v-toolbar-title
        ><router-link to="/">
          <v-img
            class="mx-2"
            :src="require('@/assets/descarga.png')"
            max-height="80"
            max-width="60"
            contain
          ></v-img></router-link
      ></v-toolbar-title>
      <v-tabs>
        <v-tab><router-link to="/Dashboard">Chile</router-link></v-tab>
        <v-tab><router-link to="/Mundo">Mundo</router-link></v-tab>
        <v-tab><router-link to="/Search">Buscar</router-link></v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
</style>