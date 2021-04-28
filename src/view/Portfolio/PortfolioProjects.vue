<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.bmcharts.route" backgroundColor="blue-grey"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.omwriter.route" backgroundColor="purple"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.handwriter.route" backgroundColor="lime"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.propertyFarmer.route"
                               backgroundColor="amber" textColor="black"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.motorkari.route" backgroundColor="green"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.rcherzIOS.route" backgroundColor="light-blue"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.rcherzAndroid.route" backgroundColor="light-green"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.rcherzScoring.route" backgroundColor="blue"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.renetikAndroid.route" backgroundColor="cyan"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.renetikIOS.route"
                               backgroundColor="orange" textColor="black"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.forceQuitMacOS.route" backgroundColor="blue-grey"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.triadMarkiza.route" backgroundColor="teal"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.triadPromile.route" backgroundColor="pink"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.triadKompas.route"
                               backgroundColor="yellow" textColor="black"/>
      </v-flex>
      <v-flex md4 sm12 xs12>
        <PortfolioProjectsItem :route="model.projects.liveAgent.route" backgroundColor="cyan"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.taxicar.route"
                               backgroundColor="light-green" textColor="black"/>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <PortfolioProjectsItem :route="model.projects.regiofood.route"
                               backgroundColor="lime" textColor="black"/>
      </v-flex>
      <v-flex md4 sm12 xs12>
        <PortfolioProjectsItem :route="model.projects.pap.route" backgroundColor="green"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PortalPageBase from '@/view/PortalPageBase'
  import PortfolioProjectsItem from '@/view/Portfolio/PortfolioProjectsItem.vue'

  @Component({
    components: { PortfolioProjectsItem }
  })
  export default class PortfolioProjects extends PortalPageBase {

    pageTitle = this.titles.portfolioProjectsPage

    beforeRouteEnter(to: any, from: any, next: any) {
      super.beforeRouteEnter(to, from, next)
    }
  }
</script>
