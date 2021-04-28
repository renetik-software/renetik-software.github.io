<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex :key="index" md6 v-for="(image, index) in images" xs12>
          <v-hover>
            <v-card :class="`elevation-${hover ? 20 : 2}`" @click="showFullScreenImage(index)"
                    class="pa-1" height="250px" ripple slot-scope="{ hover }" width="100%">
              <CSImage :src="image" height="100%" loaderPadding="70px" width="100%"/>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <CSImageViewer :images="images" ref="imageViewer"/>
  </div>
</template>

<style lang="stylus" scoped>
  .v-lazy-image {
    padding 50px
  }

  .v-lazy-image-loaded {
    padding 0
  }
</style>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import { CSVue } from '@/cs/CSVue'
  import CSImage from '@/cs/view/CSImage.vue'
  import CSImageViewer from '@/cs/view/CSImageViewer.vue'
  import { CSImageGalleryType, CSImageViewerType } from '@/cs/vuetify/CSVuetifyTypes'

  @Component({ components: { CSImage, CSImageViewer } })
  export default class CSImageGallery extends CSVue implements CSImageGalleryType {

    @Prop({ required: true }) images!: string[]

    get imageViewer() { return this.reference<CSImageViewerType>('imageViewer') }

    showFullScreenImage(index: number) { this.imageViewer.showFullScreenImage(index)}
  }
</script>
