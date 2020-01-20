<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">Nuovo</router-link>
    </div>
    <router-view/>
  </v-app>
</template>
<style lang="scss">
  $color-pack: false;

  @import '~vuetify/src/styles/main.sass';
</style>