<template>
  <v-list two-line>

    <ListItem :subtitle="titles.aboutPage"
              :title="titles.aboutMenu" :to="{name:constants.about}" icon="dashboard"/>
    <v-divider/>
    <ListItem :title="titles.portfolioMenu" :to="{path:constants.portfolioPath}" icon="work_outline"/>
    <v-divider/>
    <ListItem :subtitle="titles.portfolioProjectsPage" :title="titles.portfolioProjectsMenu"
              :to="{path:constants.portfolioProjectsPath}"
              class="ml-4" icon="business"/>
    <ListItem :subtitle="titles.portfolioVideosPage" :title="titles.portfolioVideosMenu"
              :to="{path:constants.portfolioVideosPath}"
              class="ml-4" icon="movie"/>
    <ListItem :subtitle="titles.portfolioPicturesPage" :title="titles.portfolioPicturesMenu"
              :to="{path:constants.portfolioPicturesPath}"
              class="ml-4" icon="image"/>
    <v-divider/>
    <ListItem :subtitle="titles.startProjectPage" :title="titles.startProjectMenu"
              :to="{name:constants.startProjectRoute}" icon="create"/>
    <!--    <ListItem :subtitle="titles.clientPage" :title="titles.clientMenu"-->
    <!--              :to="{name:constants.clientRoute}" icon="person"/>-->
  </v-list>
</template>

<style lang="stylus">
</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import ListItem from '@/view/ListItem.vue'

  @Component({ components: { ListItem } })
  export default class LeftPanelList extends PortalVueBase {
  }
</script>
