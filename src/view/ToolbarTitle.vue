<template>
  <v-toolbar-items>
    <v-toolbar-side-icon class="v-btn--disabled">
      <v-img :src="ohmIconSrc" contain height="30px" position="top center" width="30px"/>
    </v-toolbar-side-icon>
    <v-toolbar-title class="toolbarTitle align-self-center ma-1">
      {{titles.application}}
    </v-toolbar-title>
  </v-toolbar-items>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'

  @Component
  export default class ToolbarTitle extends PortalVueBase {

    get ohmIconSrc() {
      if (this.model.isDarkMode.value) return '/images/icons/ohm_white.png'
      return '/images/icons/ohm_black.png'
    }
  }
</script>
