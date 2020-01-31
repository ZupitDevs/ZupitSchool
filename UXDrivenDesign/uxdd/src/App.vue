<template>

  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item  :to="{name:'dashboard'}">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  :to="{name:'edit'}">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Nuovo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Zumit Prenotation </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="fòex-start"
          justify="center"
        >
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>


  <!-- <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">Nuovo</router-link>
    </div>
    <router-view/>
  </v-app> -->
</template>
<script>
export default {
  data(){
    return {
      drawer: null,
    }
  }
}
</script>
<style lang="scss">
  $color-pack: false;

  @import '~vuetify/src/styles/main.sass';
</style>