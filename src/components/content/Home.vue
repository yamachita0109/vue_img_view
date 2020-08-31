<template>
  <v-main>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="img in img.list"
                  :key="img"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile class="d-flex" v-on:click="show(img.url)">
                    <v-img
                      :src="img.url"
                      :lazy-src="img.url"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <modal name="img-modal"
            :adaptive="true"
            :maxWidth="600"
            :maxHeight="600"
            :height="600"
            :draggable="false"
            :resizable="false">
            <div class="modal-header">
              <button v-on:click="hide">×</button>
            </div>
            <div class="modal-body">
              <v-img
                class="modal-img"
                :src="url"
                :lazy-src="url"/>
            </div>  
          </modal>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import img from '../../const/img'

export default {
  data: () => ({
    img: img,
    url: '',
  }),
  methods: {
    show : function(url) {
      this.url = url
      this.$modal.show('img-modal');
    },
    hide : function () {
      this.$modal.hide('img-modal');
    },
  },
}
</script>

<style>
.modal-header, .modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}
.modal-img {
  width:  100%;
  height: 100%;
}
</style>