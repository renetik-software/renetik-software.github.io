<template>
  <div>
    <LeftPanel class="hidden-sm-and-up" ref="leftPanel"/>
    <v-toolbar app extensionHeight="22px" prominent>
      <ToolbarTitle class="hidden-xs-only"/>
      <v-toolbar-side-icon @click.stop="toggleLeftPanelVisibility()" class="hidden-sm-and-up"/>
      <v-toolbar-title class="hidden-sm-and-up ml-2">{{toolBarTitle}}</v-toolbar-title>
      <v-spacer class="hidden-xs-only"/>
      <v-spacer class="hidden-xs-only"/>
      <template #extension v-if="$vuetify.breakpoint.smAndUp">
        <v-spacer/>
        <v-card :color="$vuetify.dark ? undefined : 'primary'" flat style="width: 100%; height: 21px;">
          <v-divider inset style="max-width: unset"/>
          <v-subheader class="justify-center" dark style="height: 100%">{{toolBarTitle}}</v-subheader>
        </v-card>
        <v-spacer/>
      </template>
      <v-spacer class="hidden-xs-only"/>
      <v-spacer class="hidden-xs-only"/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn :to="{ name: `${constants.about}`}" flat>
          <v-icon class="hidden-sm-and-down" left>dashboard</v-icon>
          {{titles.aboutMenu}}
        </v-btn>
        <v-menu class="toolbarMenu" offset-y open-on-hover
                transition="slide-y-transition" v-model="isPortfolioMenuShown">
          <v-btn :class="{'disable-events': isPortfolioMenuShown && isTouchScreen()}"
                 :to="{ path: constants.portfolioPath}"
                 @click.native.stop.prevent.capture="onPortfolioMainMenuButtonClick()"
                 flat slot="activator">
            <v-icon class="hidden-sm-and-down" left>work_outline</v-icon>
            {{titles.portfolioMenu}}
          </v-btn>
          <v-list two-line>
            <ListItem :subtitle="titles.portfolioProjectsPage"
                      :title="titles.portfolioProjectsMenu"
                      :to="{path: constants.portfolioProjectsPath}" icon="business"/>
            <ListItem :subtitle="titles.portfolioVideosPage"
                      :title="titles.portfolioVideosMenu"
                      :to="{path: constants.portfolioVideosPath}" icon="movie"/>
            <ListItem :subtitle="titles.portfolioPicturesPage"
                      :title="titles.portfolioPicturesMenu"
                      :to="{path: constants.portfolioPicturesPath}" icon="image"/>
          </v-list>
        </v-menu>
        <v-btn :to="{ name: `${constants.startProjectRoute}`}" flat>
          <v-icon class="hidden-sm-and-down" left>create</v-icon>
          {{titles.startProjectMenu}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-layout align-center class="text-xs-center pa-1 mr-1" column fill-height justify-center>
          <v-switch color="primary" style="width:38px; height: 24px" v-model="model.isDarkMode.value"/>
          <div class="darkModeTitle mt-1 font-weight-medium caption">Dark</div>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style lang="stylus">
  @media all and (max-width: 959px) {
    div.v-toolbar__content {
      padding 0
    }
  }

  .v-toolbar__extension
    padding 0
</style>

<style lang="stylus" scoped>
  @media all and (max-width: 400px) {
    .darkModeTitle {
      visibility hidden
      height 0
    }
  }

  .toolbarTitle
    margin 5px

  .toolbarMenu
    top: 50px

  .v-btn--active
    color var(--primary-color)

  .disable-events {
    pointer-events: none
  }
</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import LeftPanel from './LeftPanel.vue'
  import { TopBarView } from '@/view/View'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import ListItem from '@/view/ListItem.vue'
  import ToolbarTitle from '@/view/ToolbarTitle.vue'

  @Component({ components: { ToolbarTitle, LeftPanel, ListItem } })
  export default class TopBar extends PortalVueBase implements TopBarView {

    toolBarTitle = ''
    isPortfolioMenuShown = false

    onPortfolioMainMenuButtonClick() {
      if (this.isTouchScreen()) this.isPortfolioMenuShown = true
      else this.$router.push({ path: this.constants.portfolioProjectsPath })
    }

    toggleLeftPanelVisibility() { this.main.portal!.leftPanel.toggleVisibility() }

    pageTitle(title: string) { this.toolBarTitle = title }

  }
</script>
