<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!-- TODO: 美しく... -->
      <v-list dense >
        <v-list-item link v-on:click="clickList(config.type.HOME)">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-on:click="clickList(config.type.MOVIE)">
          <v-list-item-action>
            <v-icon>mdi-video</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Movie</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="indigo"
        dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>息子との思い出</v-toolbar-title>
    </v-app-bar>

    <Home v-if="type == config.type.HOME"></Home>
    <Movie v-if="type == config.type.MOVIE"></Movie>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Home from './components/content/Home'
import Movie from './components/content/Movie'
import Footer from './components/Footer'
import config from './config'

export default {
  components: {
    Home,
    Movie,
    Footer
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    config: config,
    type: config.type.HOME
  }),
  methods: {
    clickList: function(t) {
      this.type = t
    }
  },
}
</script>