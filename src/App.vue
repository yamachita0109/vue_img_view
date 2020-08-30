<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense >
        <v-list-item
          v-for="o in config.init"
          :key="o"
          link
          v-on:click="clickList(o)">
          <v-list-item-action>
            <v-icon>{{o.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{o.title}}</v-list-item-title>
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
      <v-toolbar-title>{{current.title}}</v-toolbar-title>
    </v-app-bar>

    <Home v-if="current.type == config.type.HOME"></Home>
    <Movie v-if="current.type == config.type.MOVIE"></Movie>

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
    current: config.init[0],
  }),
  methods: {
    clickList: function(o) {
      this.current = o
    }
  },
}
</script>