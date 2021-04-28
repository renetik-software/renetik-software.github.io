import { PortalViewAnimation } from '../../controller/View'
<template>
  <v-container justify-center>
    <v-card>
      <CSImage :cover="true" :src="project.images[0]" @click.native="imageGallery.showFullScreenImage(0)"
               class="elevation-2" height="230px" loaderPadding="50px" position="top center" v-ripple width="100%"/>
      <v-divider/>
      <v-card-title class="pt-4">
        <v-btn @click="goToPreviousProject()" absolute fab small style="left: 5px; margin-top: -15px"
               v-if="isGoToPreviousProjectButtonVisible">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn @click="goToNextProject()" absolute fab small style="right: 5px; margin-top: -15px"
               v-if="isGoToNextProjectButtonVisible">
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
        <div>
          <div class="title  mx-5" v-html="project.title"/>
          <div class="subheading text--secondary pt-1 mx-5 font-weight-medium" v-html="project.subtitle"/>
          <div class="subheading text--secondary  mx-5" v-html="project.date"/>
        </div>
      </v-card-title>
      <v-card-text class="pt-1 body-2" v-html="project.text"/>
      <template v-if="project.links.length > 0">
        <v-divider/>
        <v-card-actions class="justify-space-around pa-4">
          <v-tooltip :key="index" bottom v-for="(link, index) in project.links">
            <v-btn :href="link.url" class="mx-3" icon
                   slot="activator" style="color: var(--primary-color)" target="_blank">
              <v-icon size="50px">{{ link.icon }}</v-icon>
            </v-btn>
            <span>{{link.tip}}</span>
          </v-tooltip>
        </v-card-actions>
      </template>
      <template v-for="video in project.youtube">
        <v-divider/>
        <CSYoutubeVideo :videoId="video.videoId" height="400px" width="100%"/>
      </template>
      <v-divider/>
      <CSImageGallery :images="project.images" ref="imageGallery"/>
    </v-card>
  </v-container>
</template>

<style lang="stylus">
  button.v-btn.v-btn--active.v-btn--icon.v-btn--small.theme--dark.v-carousel__controls__item
    background-color white
</style>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import CSYoutubeVideo from '@/cs/view/CSYoutubeVideo.vue'
  import CSImageGallery from '@/cs/view/CSImageGallery.vue'
  import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'
  import CSImage from '@/cs/view/CSImage.vue'
  import PortalPageBase from '@/view/PortalPageBase'
  import { PortalViewAnimation } from '@/view/View'
  import { CSImageGalleryType } from '@/cs/vuetify/CSVuetifyTypes'

  @Component({
    components: { CSImage, CSImageGallery, CSYoutubeVideo }
  })
  export default class PortfolioProject extends PortalPageBase {

    @Prop({ required: true }) projectRoute!: string

    pageTitle = this.titles.portfolioProjectsPage

    project = this.model.projects.get(this.projectRoute)!

    isGoToPreviousProjectButtonVisible = false
    isGoToNextProjectButtonVisible = false

    beforeRouteEnter(to: any, from: any, next: any) {
      super.beforeRouteEnter(to, from, next)
    }

    mounted() {
      super.mounted()
      this.updateButtonsVisibility()
    }

    updateButtonsVisibility() {
      const projectIndex = this.model.projects.indexOfProject(this.project)
      this.isGoToNextProjectButtonVisible = projectIndex < this.model.projects.lastIndex
      this.isGoToPreviousProjectButtonVisible = projectIndex > 0
    }

    get imageGallery() { return this.reference<CSImageGalleryType>('imageGallery') }

    goToPreviousProject() {
      this.goToProject(this.model.projects.getPreviousFrom(this.project!), PortalViewAnimation.slideRight)
      this.updateButtonsVisibility()
    }

    goToNextProject() {
      this.goToProject(this.model.projects.getNextFrom(this.project!), PortalViewAnimation.slideLeft)
      this.updateButtonsVisibility()
    }

    goToProject(project: PortfolioProjectData, transition: PortalViewAnimation) {
      this.main.portal!.routerTransition = transition
      this.$router.push({ path: this.constants.portfolioProjectsPath + '/' + project.route })
    }
  }
</script>
