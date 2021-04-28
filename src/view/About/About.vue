<template>
  <div @contextmenu.prevent="onContextMenu">
    <AboutComponent ref="about"/>
    <CSVuetifyContextMenu :menuItems="contextMenuItems" ref="contextMenu"/>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import CSVuetifyContextMenu from '@/cs/vuetify/CSVuetifyContextMenu.vue'
  import AboutComponent from '@/view/About/AboutComponent.vue'
  import PortalPageBase from '@/view/PortalPageBase'

  @Component({ components: { AboutComponent, CSVuetifyContextMenu } })
  export default class About extends PortalPageBase {

    pageTitle = this.titles.aboutPage
    contextMenuItems = [{ title: 'Open Full Screen', onClick: this.openFullScreen }]

    beforeRouteEnter(to: any, from: any, next: any) { super.beforeRouteEnter(to, from, next) }

    get contextMenu() { return this.reference<CSVuetifyContextMenu>('contextMenu') }

    openFullScreen() { window.open(this.model.baseUrl + '/' +  this.constants.about, '_blank') }

    onContextMenu(event: MouseEvent) {
      if (this.$router.currentRoute.path.endsWith(this.constants.portalPath + '/' + this.constants.about)) {
        event.preventDefault()
        this.contextMenu.showMenu(event)
      }
    }

  }
</script>
