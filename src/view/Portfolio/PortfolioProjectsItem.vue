<template>
  <v-hover>
    <v-card :class="`elevation-${ hover ? 15 : 2 } ${textColor}--text`" :color="backgroundColor"
            :to="{ path: constants.portfolioProjectsPath + '/' + route }"
            class="darken-3" height="185px" ripple slot-scope="{ hover }">
      <v-layout column fill-height mx-0>
        <v-flex xs11>
          <v-layout row>
            <v-flex xs7>
              <v-card-title class="title pb-1" v-html="project.title"/>
              <v-card-text class="py-0 pr-0" v-html="project.subtitle"/>
            </v-flex>
            <v-flex xs5>
              <CSImage :loaderSrc="require('@/assets/loaders/loading-8.gif')"
                       :src="project.images[0]" class="mr-1 elevation-2" height="130px"
                       loaderPadding="40px" width="100%" :cover="true" position="top left"/>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex class="pa-0" xs1>
          <v-divider light/>
          <v-card-actions class="px-3 py-1" style="align-items: flex-end">
            <div v-html="project.date"/>
            <v-spacer/>
            <v-icon :key="index" class="white--text" v-for="(index) in project.stars">star_border</v-icon>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import CSImage from '@/cs/view/CSImage.vue'

  @Component({ components: { CSImage } })
  export default class PortfolioProjectsItem extends PortalVueBase {

    @Prop({ required: true }) route!: string
    @Prop({ default: 'secondary' }) backgroundColor!: string
    @Prop({ default: 'white' }) textColor!: string

    get project() {return this.model.projects.get(this.route) }
  }
</script>
