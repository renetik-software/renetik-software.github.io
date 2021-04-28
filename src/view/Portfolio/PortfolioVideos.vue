<template>
  <v-layout justify-center>
    <v-flex class="ma-1 mb-2" sm9 xs11>
      <v-card :key="index" class="pa-2 mt-3" v-for="(video, index) in videos">
        <CSYoutubeVideo :videoId="video.videoId" height="500px" width="100%"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortfolioProjectYoutubeVideo } from '@/model/Data/PortfolioProjectsData'
  import PortalPageBase from '@/view/PortalPageBase'
  import CSYoutubeVideo from '@/cs/view/CSYoutubeVideo.vue'

  @Component({ components: { CSYoutubeVideo } })
  export default class PortfolioVideos extends PortalPageBase {

    pageTitle = this.titles.portfolioVideosPage

    get videos(): PortfolioProjectYoutubeVideo[] {
      const images = new Array<PortfolioProjectYoutubeVideo>()
      this.model.projects.forEach(project => images.pushAll(project.youtube))
      return images.randomize()
    }

    beforeRouteEnter(to: any, from: any, next: any) {
      super.beforeRouteEnter(to, from, next)
    }
  }
</script>
