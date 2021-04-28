<template>
  <CSImageGallery :images="pictures"/>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PortalPageBase from '@/view/PortalPageBase'
  import CSImageGallery from '@/cs/view/CSImageGallery.vue'

  @Component({ components: { CSImageGallery } })
  export default class PortfolioImages extends PortalPageBase {

    pageTitle = this.titles.portfolioPicturesPage

    beforeRouteEnter(to: any, from: any, next: any) {
      super.beforeRouteEnter(to, from, next)
    }

    get pictures(): string[] {
      const images = new Array<string>()
      this.model.projects.forEach(project => images.pushAll(project.images))
      return images.randomize()
    }

  }
</script>
