<template>
  <v-list-tile :to="to">
    <v-list-tile-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Location } from 'vue-router'

  @Component
  export default class ListItem extends Vue {
    @Prop({ required: true }) title!: string
    @Prop({ required: false }) subtitle!: string
    @Prop({ required: true }) icon!: string
    @Prop({ required: true }) to!: Location
  }
</script>
