<template>
<div>
  <v-app-bar color="green" dense >
    <v-toolbar-title>Corona App</v-toolbar-title>
      <v-tabs>
        <v-tab><router-link to="/Home">Home</router-link></v-tab>
        <v-tab><router-link to="/Dashboard">Chile</router-link></v-tab>
        <v-tab><router-link to="/Mundo">Mundo</router-link></v-tab>
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