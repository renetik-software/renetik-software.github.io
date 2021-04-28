<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container>
    <v-card class="pa-2" height="100%">
      <v-layout :column="$vuetify.breakpoint.xsOnly" :row="$vuetify.breakpoint.smAndUp">
        <v-flex class="align-self-center" xs12>
          <v-card-title class="pa-1" primary-title>
            <div>
              <div class="blockquote headline font-weight-regular font-italic px-1 py-0"
                   v-html="model.profile.name"/>
              <template v-if="$vuetify.breakpoint.smAndUp">
                <div class="blockquote font-weight-medium pa-1"
                     v-html="model.profile.title"/>
                <div class="blockquote font-weight-light pa-1"
                     v-html="model.profile.activityDates"/>
                <div class="blockquote subheading font-weight-regular pa-1"
                     v-html="model.profile.professionalMotto"/>
              </template>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex class="text-sm-left text-xs-center">
          <v-avatar class="ma-1 elevation-4 avatar-border" size="150px">
            <CSImage :src="model.profile.profileImages.first()"
                     @click.native="imageViewer.showFullScreenImage(0)"
                     height="100%" loaderPadding="10px"
                     v-ripple width="100%"/>
            <CSImageViewer :images="model.profile.profileImages" ref="imageViewer"/>
          </v-avatar>
          <template v-if="$vuetify.breakpoint.xsOnly">
            <div class="blockquote font-weight-medium pa-1"
                 v-html="model.profile.title"/>
            <div class="blockquote font-weight-light pa-1"
                 v-html="model.profile.activityDates"/>
            <div class="blockquote subheading font-weight-regular pa-1"
                 v-html="model.profile.professionalMotto"/>
          </template>
        </v-flex>
      </v-layout>
      <v-divider/>
      <v-card-actions class="pa-1 px-0 justify-space-around">
        <v-btn :href="item.url" :key="index"
               icon target="_blank" v-for="(item, index) in model.profile.socialLinks">
          <v-icon color="primary" size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text class="pa-1">
        <blockquote class="pa-1 px-3 font-weight-bold" v-html="model.profile.aboutMe"/>
        <v-card-actions class="pa-1 px-0 justify-space-around">
          <v-btn :href="item.url" :key="index"
                 icon target="_blank" v-for="(item, index) in model.profile.contactLinks">
            <v-icon color="primary" size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
        <blockquote class="blockquote font-weight-regular" v-html="model.profile.aboutMe2"/>
        <blockquote class="blockquote caption" v-html="model.profile.aboutMe3"/>
      </v-card-text>
      <v-divider/>
      <v-timeline :dense="$vuetify.breakpoint.xsOnly">
        <v-timeline-item :key="index" color="primary lighten-1" large
                         v-for="(experience, index) in model.profile.experience">
          <template v-if="$vuetify.breakpoint.smAndUp" v-slot:opposite>
            <div class="font-weight-medium" v-html="experience.client"/>
            <div class="font-weight-medium" v-html="experience.position"/>
            <div class="font-weight-medium" v-html="experience.date"/>
          </template>
          <v-card class="white--text elevation-2" color="secondary">
            <div class="pa-1" style="background-color: white" v-if="$vuetify.breakpoint.xsOnly">
              <div class="font-weight-medium experienceClientXsOnly" v-html="experience.client"/>
              <div class="font-weight-medium black--text" v-html="experience.position"/>
              <div class="font-weight-medium black--text" v-html="experience.date"/>
            </div>
            <v-card-title class="subheading pb-1" v-html="experience.title"/>
            <v-card-text class="pt-1 caption" v-html="experience.text"/>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<style lang="stylus">
  .experienceClientXsOnly a {
    color: var(--secondary-color)
  }
</style>
<style lang="stylus" scoped>
  .avatar-border
    border 1px solid ghostwhite
</style>
<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import CSImage from '@/cs/view/CSImage.vue'
  import CSImageViewer from '@/cs/view/CSImageViewer.vue'
  import { CSImageViewerType } from '@/cs/vuetify/CSVuetifyTypes'

  @Component({ components: { CSImage, CSImageViewer } })
  export default class AboutComponent extends PortalVueBase {

    get imageViewer() { return this.reference<CSImageViewerType>('imageViewer') }

  }
</script>
