<template>
  <v-navigation-drawer app disable-resize-watcher temporary v-model="isVisible">
    <v-layout column>
      <v-flex>
        <v-toolbar app>
          <ToolbarTitle/>
          <v-spacer/>
          <v-toolbar-items>
            <v-layout align-center class="text-xs-center pa-1 mr-2" column fill-height justify-center>
              <v-switch color="primary" style="width:38px; height: 24px" v-model="model.isDarkMode.value"/>
              <div class="darkModeTitle mt-1 font-weight-medium caption">Dark</div>
            </v-layout>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
      <v-flex>
        <LeftPanelList/>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<style lang="stylus" scoped>
  .v-toolbar
    position: relative;

  .v-toolbar__title
    margin 5px
</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { LeftPanelView } from '@/view/View'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import LeftPanelList from '@/view/LeftPanelList.vue'
  import ToolbarTitle from '@/view/ToolbarTitle.vue'

  @Component({
    components: {
      ToolbarTitle, LeftPanelList
    }
  })
  export default class LeftPanel extends PortalVueBase implements LeftPanelView {
    isVisible = false

    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
</script>
