<template>
  <v-dialog fullscreen v-model="isFullScreenImageDialogVisible">
    <v-layout class="align-center fill-height"
              style="background-color: rgba(0, 0, 0, 0.9); width: 100%; height: 100%">
      <transition :name="routerTransition" mode="out-in">
        <CSImage :key="fullscreenImage"
                 :src="fullscreenImage"
                 class="pa-2" height="100%" loaderPadding="200px" width="100%"/>
      </transition>
      <v-btn @click="hideFullScreenImage()" absolute fab large right style="top: 10px" top>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn @click.stop="showPreviousFullScreenImage()" absolute fab large left v-if="isPreviousButtonVisible">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn @click.stop="showNextFullScreenImage()" absolute fab large right v-if="isNextButtonVisible">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
    </v-layout>
  </v-dialog>
</template>

<style lang="stylus" scoped>
  .slide-enter-active
    transition: transform 0.3s ease-in

  .slide-leave-active
    transition: transform 0.1s ease-in

  .slide-enter
    transform: translateY(100%)

  .slide-leave-to
    transform: translateY(100%)

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active
    transition-property: height, opacity, transform
    transition-timing-function: ease-in
    overflow: hidden

  .slide-left-enter-active,
  .slide-right-enter-active
    transition-duration: 0.3s

  .slide-left-leave-active,
  .slide-right-leave-active
    transition-duration: 0.1s

  .slide-left-enter,
  .slide-right-leave-active
    transform: translate(120%)

  .slide-left-leave-active,
  .slide-right-enter
    transform: translate(-120%)

</style>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import { CSVue } from '@/cs/CSVue'
  import CSImage from '@/cs/view/CSImage.vue'
  import { CSImageViewerType } from '@/cs/vuetify/CSVuetifyTypes'

  @Component({ components: { CSImage } })
  export default class CSImageViewer extends CSVue implements CSImageViewerType {
    @Prop({ required: true }) images!: string[]
    routerTransition = 'slide-right'
    fullscreenImage: string = ''
    isFullScreenImageDialogVisible = false
    imageIndex = 0
    isNextButtonVisible = true
    isPreviousButtonVisible = true

    updateButtonsVisibility() {
      this.isNextButtonVisible = this.imageIndex < this.images.lastIndex()
      this.isPreviousButtonVisible = this.imageIndex > 0
    }

    showFullScreenImage(index: number) {
      this.routerTransition = 'slide'
      this.imageIndex = index
      this.updateButtonsVisibility()
      this.fullscreenImage = this.images[index]
      this.isFullScreenImageDialogVisible = true
    }

    hideFullScreenImage() {
      this.fullscreenImage = ''
      this.isFullScreenImageDialogVisible = false
    }

    showNextFullScreenImage() {
      this.routerTransition = 'slide-left'
      this.imageIndex++
      this.updateButtonsVisibility()
      this.fullscreenImage = this.images[this.imageIndex]
    }

    showPreviousFullScreenImage() {
      this.routerTransition = 'slide-right'
      this.imageIndex--
      this.updateButtonsVisibility()
      this.fullscreenImage = this.images[this.imageIndex]
    }
  }
</script>
