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
                  v-for="n in 18"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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

          <button v-on:click="show" class="button">show!</button>
          <modal name="hello-world" 
            :maxWidth="3000"
            :maxHeight="3000"
            :draggable="false"
            :resizable="false">
            <div class="modal-header">
              <h2>Modal title</h2>
            </div>
            <div class="modal-body">
              <img src="http://up.gc-img.net/post_img/2014/01/WzyQNqaspyT33CI_MINaP_33.jpeg" />
              <p>you're reading this text in a modal!</p>
              <button v-on:click="hide">閉じる</button>
            </div>  
          </modal>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
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
</style>